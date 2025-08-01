// Configuración de EmailJS usando variables de entorno
// Las credenciales están en .env.local

// Debug: Verificar variables de entorno en build time
if (typeof window === 'undefined') {
  console.log('EmailJS Config (Build Time):', {
    USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID ? 'SET' : 'MISSING',
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'SET' : 'MISSING',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'SET' : 'MISSING',
    FEEDBACK_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID ? 'SET' : 'MISSING',
  });
}

export const EMAILJS_CONFIG = {
  USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  FEEDBACK_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID || '',
};

// Debug: Verificar en runtime (cliente)
if (typeof window !== 'undefined') {
  console.log('EmailJS Config (Runtime):', {
    USER_ID: EMAILJS_CONFIG.USER_ID ? 'SET' : 'MISSING',
    SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID ? 'SET' : 'MISSING',
    TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID ? 'SET' : 'MISSING',
    FEEDBACK_TEMPLATE_ID: EMAILJS_CONFIG.FEEDBACK_TEMPLATE_ID ? 'SET' : 'MISSING',
  });
}
