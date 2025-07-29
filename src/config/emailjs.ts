// Configuración de EmailJS usando variables de entorno
// Las credenciales están en .env.local

export const EMAILJS_CONFIG = {
  USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  FEEDBACK_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID!,
};
