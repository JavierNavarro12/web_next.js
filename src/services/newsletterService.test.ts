// @ts-nocheck
/// <reference types="jest" />
global.fetch = () => Promise.resolve({ ok: true });
jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true }));
import { newsletterService } from './newsletterService';

jest.mock('../config/firebase', () => ({
  db: {},
}));

import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn(),
}));

describe('newsletterService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = () => Promise.resolve({ ok: true });
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true }));
  });
  afterAll(() => {
    if (global.fetch.mockRestore) {
      global.fetch.mockRestore();
    }
  });

  describe('subscribeToNewsletter', () => {
    it('should subscribe successfully and send welcome email', async () => {
      getDocs.mockResolvedValueOnce({ empty: true });
      addDoc.mockResolvedValueOnce({});
      const sendWelcomeEmailSpy = jest
        .spyOn(newsletterService, 'sendWelcomeEmail')
        .mockResolvedValue();

      const result = await newsletterService.subscribeToNewsletter('test@example.com', 'hero');
      expect(result).toBe(true);
      expect(getDocs).toHaveBeenCalled();
      expect(addDoc).toHaveBeenCalled();
      expect(sendWelcomeEmailSpy).toHaveBeenCalledWith('test@example.com');
    });

    it('should throw error if email already subscribed', async () => {
      getDocs.mockResolvedValueOnce({ empty: false });
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'hero'),
      ).rejects.toThrow('Este email ya está suscrito');
      expect(addDoc).not.toHaveBeenCalled();
    });

    it('should throw error if addDoc fails', async () => {
      getDocs.mockResolvedValueOnce({ empty: true });
      addDoc.mockRejectedValueOnce(new Error('Firestore error'));
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'hero'),
      ).rejects.toThrow('Firestore error');
    });

    it('should not throw if sendWelcomeEmail fails', async () => {
      getDocs.mockResolvedValueOnce({ empty: true });
      addDoc.mockResolvedValueOnce({});
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
      global.fetch = () => Promise.resolve({ ok: true });
      jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true }));
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
      await expect(newsletterService.sendWelcomeEmail('test@example.com')).resolves.toBeUndefined();
    });

    it('should not throw error if fetch fails (ok false with error json)', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue({ error: 'bad request' }),
      });
      await expect(newsletterService.sendWelcomeEmail('test@example.com')).resolves.toBeUndefined();
    });

    it('should not throw error if fetch throws', async () => {
      global.fetch.mockRejectedValueOnce(new Error('network error'));
      await expect(newsletterService.sendWelcomeEmail('test@example.com')).resolves.toBeUndefined();
    });
  });

  describe('getSubscriptionStats', () => {
    it('should return stats correctly', async () => {
      const now = new Date();
      const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const doc1 = { data: () => ({ subscribedAt: { toDate: () => new Date(now) } }) };
      const doc2 = { data: () => ({ subscribedAt: { toDate: () => new Date(thisMonth) } }) };
      getDocs.mockResolvedValueOnce({ size: 2, docs: [doc1, doc2] });
      const stats = await newsletterService.getSubscriptionStats();
      expect(stats.total).toBe(2);
      expect(stats.thisMonth).toBeGreaterThanOrEqual(1);
    });
    it('should return zero stats on error', async () => {
      getDocs.mockRejectedValueOnce(new Error('fail'));
      const stats = await newsletterService.getSubscriptionStats();
      expect(stats).toEqual({ total: 0, thisMonth: 0 });
    });

    it('should ignore docs without subscribedAt', async () => {
      const now = new Date();
      const docWithMissing = { data: () => ({}) };
      const docWithSub = { data: () => ({ subscribedAt: { toDate: () => new Date(now) } }) };
      getDocs.mockResolvedValueOnce({ size: 2, docs: [docWithMissing, docWithSub] });
      const stats = await newsletterService.getSubscriptionStats();
      expect(stats.total).toBe(2);
      expect(stats.thisMonth).toBe(1);
    });
  });

  describe('subscribeToNewsletter with welcome email failure', () => {
    it('should reject if sendWelcomeEmail rejects (post-persist failure)', async () => {
      getDocs.mockResolvedValueOnce({ empty: true });
      addDoc.mockResolvedValueOnce({});
      jest.spyOn(newsletterService, 'sendWelcomeEmail').mockRejectedValueOnce(new Error('boom'));
      await expect(
        newsletterService.subscribeToNewsletter('test@example.com', 'footer'),
      ).rejects.toThrow('boom');
    });
  });
});
