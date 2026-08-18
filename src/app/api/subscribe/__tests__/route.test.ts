/**
 * @jest-environment node
 */
import type { NextRequest } from 'next/server';

const mockGet = jest.fn();
const mockSet = jest.fn();

jest.mock('firebase-admin/app', () => ({
  initializeApp: jest.fn(() => ({})),
  getApps: jest.fn(() => []),
  cert: jest.fn(),
}));

jest.mock('firebase-admin/firestore', () => ({
  getFirestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({ get: mockGet, set: mockSet })),
    })),
  })),
}));

import { POST } from '../route';

function makeRequest(body: unknown): NextRequest {
  return { json: async () => body } as unknown as NextRequest;
}

describe('POST /api/subscribe', () => {
  beforeAll(() => {
    process.env.FIREBASE_PROJECT_ID = 'test-project';
    process.env.FIREBASE_CLIENT_EMAIL = 'test@test-project.iam.gserviceaccount.com';
    process.env.FIREBASE_PRIVATE_KEY = 'clave-de-prueba';
  });

  beforeEach(() => {
    mockGet.mockReset();
    mockSet.mockReset();
  });

  it('devuelve 400 si falta el email', async () => {
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'Email requerido' });
  });

  it('devuelve 400 si el email es inválido', async () => {
    const res = await POST(makeRequest({ email: 'no-es-un-email' }));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'Email inválido' });
  });

  it('devuelve 400 si el source es inválido', async () => {
    const res = await POST(makeRequest({ email: 'test@example.com', source: '<script>' }));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'Parámetro source inválido' });
  });

  it('suscribe un email nuevo', async () => {
    mockGet.mockResolvedValue({ exists: false });
    mockSet.mockResolvedValue(undefined);

    const res = await POST(makeRequest({ email: 'test@example.com' }));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(mockSet).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'test@example.com', source: 'hero' }),
    );
  });

  it('devuelve 409 si el email ya está suscrito', async () => {
    mockGet.mockResolvedValue({ exists: true });

    const res = await POST(makeRequest({ email: 'test@example.com' }));

    expect(res.status).toBe(409);
    expect(await res.json()).toEqual({ error: 'Ya suscrito' });
    expect(mockSet).not.toHaveBeenCalled();
  });
});
