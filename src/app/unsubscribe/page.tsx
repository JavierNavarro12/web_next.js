'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [deletedCount, setDeletedCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const e = sp.get('email') || '';
      if (e) setEmail(e);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');
    setDeletedCount(null);

    try {
      const trimmed = email.trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        setErrorMsg('Por favor, introduce un email válido.');
        setIsSubmitting(false);
        return;
      }

      // Buscar todas las suscripciones con este email (cualquier source)
      const q = query(collection(db, 'newsletter_subscriptions'), where('email', '==', trimmed));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setSuccessMsg('No encontramos suscripciones activas para este email.');
        setDeletedCount(0);
        setIsSubmitting(false);
        return;
      }

      let deleted = 0;
      await Promise.all(
        snapshot.docs.map(async (d) => {
          try {
            await deleteDoc(d.ref);
            deleted += 1;
          } catch {
            // continuar con las demás
          }
        }),
      );

      setDeletedCount(deleted);
      setSuccessMsg(
        deleted > 0
          ? 'Tu email ha sido dado de baja de nuestra newsletter.'
          : 'No se pudieron eliminar suscripciones. Inténtalo más tarde.',
      );
    } catch {
      setErrorMsg('Ha ocurrido un error al procesar tu baja. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-extrabold mb-4">Cancelar suscripción</h1>
        <p className="text-zinc-300 mb-8">
          Introduce tu email para darte de baja de la newsletter de AIFinder.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isSubmitting ? 'Procesando...' : 'Darme de baja'}
          </button>

          {successMsg && (
            <p className="text-green-400 text-sm" role="status">
              {successMsg}{' '}
              {deletedCount !== null && deletedCount > 0 ? `(eliminadas: ${deletedCount})` : ''}
            </p>
          )}
          {errorMsg && (
            <p className="text-red-400 text-sm" role="alert">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
