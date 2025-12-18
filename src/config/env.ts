/**
 * Validación de variables de entorno
 * Falla el build si faltan variables requeridas
 */

import { z } from 'zod';
import { DEFAULT_SITE_URL } from '../utils/siteUrl';

// Schema para variables de cliente (NEXT_PUBLIC_*)
const clientEnvSchema = z.object({
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1, 'Firebase API Key requerida'),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().min(1, 'Firebase Auth Domain requerido'),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().min(1, 'Firebase Project ID requerido'),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().min(1, 'Firebase Storage Bucket requerido'),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z
    .string()
    .min(1, 'Firebase Messaging Sender ID requerido'),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1, 'Firebase App ID requerido'),
  NEXT_PUBLIC_EMAILJS_USER_ID: z.string().min(1, 'EmailJS User ID requerido'),
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().min(1, 'EmailJS Service ID requerido'),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().min(1, 'EmailJS Template ID requerido'),
  NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID: z
    .string()
    .min(1, 'EmailJS Feedback Template ID requerido'),
  NEXT_PUBLIC_SITE_URL: z.string().url('Site URL debe ser una URL válida'),
});

// Schema para variables de servidor (solo disponibles en server-side)
const serverEnvSchema = z.object({
  FIREBASE_CLIENT_EMAIL: z.string().email('Firebase Client Email debe ser un email válido'),
  FIREBASE_PRIVATE_KEY: z.string().min(1, 'Firebase Private Key requerida'),
  UNSUBSCRIBE_SECRET: z.string().min(32, 'Unsubscribe Secret debe tener al menos 32 caracteres'),
  RATE_LIMIT_SECRET: z.string().min(32, 'Rate Limit Secret debe tener al menos 32 caracteres'),
  RESEND_API_KEY: z.string().startsWith('re_', 'Resend API Key inválida'),
  SENTRY_DSN: z.string().url('Sentry DSN debe ser una URL válida').optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

/**
 * Valida las variables de entorno del cliente
 * Se puede usar en client y server
 */
export function validateClientEnv() {
  try {
    return clientEnvSchema.parse({
      NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID:
        process.env.NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues.map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`);
      throw new Error(
        `❌ Variables de entorno del cliente inválidas:\n${issues.join('\n')}\n\nRevisa tu archivo .env.local`,
      );
    }
    throw error;
  }
}

/**
 * Valida las variables de entorno del servidor
 * Solo se puede usar en server-side
 */
export function validateServerEnv() {
  if (typeof window !== 'undefined') {
    throw new Error('validateServerEnv solo se puede usar en server-side');
  }

  try {
    return serverEnvSchema.parse({
      FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
      FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
      UNSUBSCRIBE_SECRET: process.env.UNSUBSCRIBE_SECRET,
      RATE_LIMIT_SECRET: process.env.RATE_LIMIT_SECRET,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      SENTRY_DSN: process.env.SENTRY_DSN,
      NODE_ENV: process.env.NODE_ENV,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issues = error.issues.map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`);
      throw new Error(
        `❌ Variables de entorno del servidor inválidas:\n${issues.join('\n')}\n\nRevisa tu archivo .env.local y las variables de entorno en Vercel`,
      );
    }
    throw error;
  }
}

// Validar variables del cliente al importar este módulo
// Esto hará que el build falle si faltan variables
let clientEnv: z.infer<typeof clientEnvSchema>;

try {
  clientEnv = validateClientEnv();
} catch (error) {
  // En tiempo de build, mostrar error claro
  console.error(error);
  if (process.env.NODE_ENV !== 'test') {
    process.exit(1);
  }
  // En tests, usar valores dummy
  clientEnv = {
    NEXT_PUBLIC_FIREBASE_API_KEY: 'test-key',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'test.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'test-project',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'test.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '123456789',
    NEXT_PUBLIC_FIREBASE_APP_ID: 'test-app-id',
    NEXT_PUBLIC_EMAILJS_USER_ID: 'test-user',
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'test-service',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'test-template',
    NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID: 'test-feedback-template',
    NEXT_PUBLIC_SITE_URL: DEFAULT_SITE_URL,
  };
}

export { clientEnv };
