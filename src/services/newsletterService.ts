import { db } from '../config/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  source: 'hero' | 'footer' | 'modal';
}

export const newsletterService = {
  // Guardar suscripción en Firebase
  async subscribeToNewsletter(
    email: string,
    source: 'hero' | 'footer' | 'modal' = 'hero',
  ): Promise<boolean> {
    try {
      // Verificar si el email ya existe
      const emailQuery = query(
        collection(db, 'newsletter_subscriptions'),
        where('email', '==', email),
      );
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        throw new Error('Este email ya está suscrito');
      }

      // Agregar nueva suscripción
      const subscription: NewsletterSubscription = {
        email,
        subscribedAt: new Date(),
        source,
      };

      await addDoc(collection(db, 'newsletter_subscriptions'), subscription);

      // Enviar email de bienvenida con Resend
      await this.sendWelcomeEmail(email);

      return true;
    } catch (error) {
      console.error('Error al suscribirse:', error);
      throw error;
    }
  },

  // Enviar email de bienvenida con API route
  async sendWelcomeEmail(email: string): Promise<void> {
    try {
      console.log('Enviando email de bienvenida a:', email);
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();
      console.log('Respuesta del API:', responseData);

      if (!response.ok) {
        throw new Error(`Error al enviar email: ${responseData.error || 'Unknown error'}`);
      }

      console.log(
        'Email de bienvenida enviado exitosamente a:',
        email,
        'ID:',
        responseData.emailId,
      );
    } catch (error) {
      console.error('Error detallado al enviar email de bienvenida:', {
        email,
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
