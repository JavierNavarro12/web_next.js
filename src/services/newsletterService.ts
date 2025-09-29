import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { logger } from '../utils/logger';

export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  source: 'hero' | 'footer' | 'modal' | 'articles';
}

export const newsletterService = {
  // Guardar suscripción en Firebase
  async subscribeToNewsletter(
    email: string,
    source: 'hero' | 'footer' | 'modal' | 'articles' = 'hero',
  ): Promise<boolean> {
    try {
      // Hacer la creación desde API server-side (evita rules del cliente)
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok && data?.error === 'Ya suscrito') {
        throw new Error('Este email ya está suscrito');
      }
      if (!res.ok) {
        throw new Error(data?.error || 'Error al suscribirse');
      }

      // Enviar email de bienvenida con Resend
      await this.sendWelcomeEmail(email, source);

      return true;
    } catch (error) {
      logger.error('Error al suscribirse', error);
      throw error;
    }
  },

  // Enviar email de bienvenida con API route
  async sendWelcomeEmail(
    email: string,
    source: 'hero' | 'footer' | 'modal' | 'articles' = 'hero',
  ): Promise<void> {
    try {
      logger.debug('Enviando email de bienvenida a:', email, `source=${source}`);

      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const responseData = await response.json();
      logger.debug('Respuesta del API:', responseData);

      if (!response.ok) {
        throw new Error(`Error al enviar email: ${responseData.error || 'Unknown error'}`);
      }

      logger.info('Email de bienvenida enviado exitosamente', {
        email,
        source,
        id: responseData.emailId,
      });
    } catch (error) {
      logger.error('Error detallado al enviar email de bienvenida', error, { email, source });
      // No lanzamos error aquí para no afectar la suscripción
    }
  },

  // Obtener estadísticas de suscripciones
  async getSubscriptionStats(): Promise<{ total: number; thisMonth: number }> {
    try {
      const snapshot = await getDocs(collection(db, 'newsletter_subscriptions'));
      const total = snapshot.size;

      const thisMonth = new Date();
      thisMonth.setDate(1);
      thisMonth.setHours(0, 0, 0, 0);

      const thisMonthSubscriptions = snapshot.docs.filter((doc) => {
        const data = doc.data();
        return data.subscribedAt?.toDate() >= thisMonth;
      });

      return {
        total,
        thisMonth: thisMonthSubscriptions.length,
      };
    } catch (error) {
      logger.error('Error al obtener estadísticas', error);
      return { total: 0, thisMonth: 0 };
    }
  },
};
