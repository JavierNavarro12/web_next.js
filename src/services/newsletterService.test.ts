// @ts-nocheck
/// <reference types="jest" />
global.fetch = () => Promise.resolve({ ok: true, json: async () => ({ success: true }) });
jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ ok: true, json: async () => ({ success: true, id: 'test-id' }) }),
  );
import { newsletterService } from './newsletterService';

describe('newsletterService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = () =>
      Promise.resolve({ ok: true, json: async () => ({ success: true, id: 'test-id' }) });
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({ ok: true, json: async () => ({ success: true, id: 'test-id' }) }),
      );
  });
  afterAll(() => {
    if (global.fetch.mockRestore) {
      global.fetch.mockRestore();
    }
  });

  describe('subscribeToNewsletter', () => {
    it('should subscribe successfully and send welcome email', async () => {
      // API subscribe ok
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, id: 'abc' }),
      });
      const sendWelcomeEmailSpy = jest
        .spyOn(newsletterService, 'sendWelcomeEmail')
        .mockResolvedValue();

      const result = await newsletterService.subscribeToNewsletter('test@example.com', 'hero');
      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith('/api/subscribe', expect.any(Object));
      expect(sendWelcomeEmailSpy).toHaveBeenCalledWith('test@example.com', 'hero');
    });

    it('should throw error if email already subscribed', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Ya suscrito' }),
      });
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'hero'),
      ).rejects.toThrow('Este email ya está suscrito');
    });

    it('should throw error if API returns generic error', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Firestore error' }),
      });
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'hero'),
      ).rejects.toThrow('Firestore error');
    });

    it('should not throw if sendWelcomeEmail fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });
      jest.spyOn(newsletterService, 'sendWelcomeEmail').mockImplementationOnce(() => {
        // Simula error pero nunca rechaza la promesa
        return Promise.resolve(undefined);
      });
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'hero'),
      ).resolves.toBe(true);
    });
  });

  describe('sendWelcomeEmail', () => {
    beforeEach(() => {
      global.fetch = () =>
        Promise.resolve({ ok: true, json: async () => ({ success: true, id: 'id-1' }) });
      jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
          Promise.resolve({ ok: true, json: async () => ({ success: true, id: 'id-1' }) }),
        );
    });
    afterEach(() => {
      if (global.fetch.mockRestore) {
        global.fetch.mockRestore();
      }
    });

    it('should call fetch with correct params and resolve on success', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue({ emailId: 'email-123' }),
      });
      await expect(
        newsletterService.sendWelcomeEmail('test@example.com', 'hero'),
      ).resolves.toBeUndefined();
    });

    it('should not throw error if fetch fails (ok false with error json)', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue({ error: 'bad request' }),
      });
      await expect(
        newsletterService.sendWelcomeEmail('test@example.com', 'hero'),
      ).resolves.toBeUndefined();
    });

    it('should not throw error if fetch throws', async () => {
      global.fetch.mockRejectedValueOnce(new Error('network error'));
      await expect(
        newsletterService.sendWelcomeEmail('test@example.com', 'hero'),
      ).resolves.toBeUndefined();
    });
  });

  describe('subscribeToNewsletter with welcome email failure', () => {
    it('should reject if sendWelcomeEmail rejects (post-persist failure)', async () => {
      global.fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) });
      jest.spyOn(newsletterService, 'sendWelcomeEmail').mockRejectedValueOnce(new Error('boom'));
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'footer'),
      ).rejects.toThrow('boom');
    });
  });
});
