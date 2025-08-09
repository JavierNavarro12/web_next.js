import { db } from '../config/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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
      console.error('Error al suscribirse:', error);
      throw error;
    }
  },

  // Enviar email de bienvenida con API route
  async sendWelcomeEmail(
    email: string,
    source: 'hero' | 'footer' | 'modal' | 'articles' = 'hero',
  ): Promise<void> {
    try {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Enviando email de bienvenida a:', email, `source=${source}`);
      }
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const responseData = await response.json();
      if (process.env.NODE_ENV !== 'production') {
        console.log('Respuesta del API:', responseData);
      }

      if (!response.ok) {
        throw new Error(`Error al enviar email: ${responseData.error || 'Unknown error'}`);
      }

      if (process.env.NODE_ENV !== 'production') {
        console.log(
          'Email de bienvenida enviado exitosamente a:',
          email,
          'source=',
          source,
          'ID:',
          responseData.emailId,
        );
      }
    } catch (error) {
      console.error('Error detallado al enviar email de bienvenida:', {
        email,
        source,
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
      });
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
      console.error('Error al obtener estadísticas:', error);
      return { total: 0, thisMonth: 0 };
    }
  },
};
