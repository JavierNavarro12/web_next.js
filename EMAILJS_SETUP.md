# 📧 Configuración de EmailJS

## **Paso 1: Crear cuenta en EmailJS**

1. Ve a [emailjs.com](https://emailjs.com)
2. Regístrate con tu email
3. Confirma tu cuenta

## **Paso 2: Configurar tu servicio de email**

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Guarda el Service ID** (algo como "service_abc123")

## **Paso 3: Crear un template de email**

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura el template así:

**Asunto:**

```
Nueva sugerencia de IA: {{tool_name}}
```

**Contenido:**

```
Hola,

Has recibido una nueva sugerencia de IA:

📱 **Nombre de la IA:** {{tool_name}}
🔗 **URL:** {{tool_url}}
📧 **Email del usuario:** {{user_email}}
👤 **¿Es su propia herramienta?** {{is_own_tool}}

---
Enviado desde AIFinder
```

4. **Guarda el Template ID** (algo como "template_xyz789")

## **Paso 4: Obtener tu User ID**

1. Ve a "Account" en EmailJS
2. Copia tu **User ID** (algo como "user_123456")

## **Paso 5: Configurar en tu proyecto**

1. Abre el archivo `src/config/emailjs.ts`
2. Reemplaza los valores con tus credenciales:

```typescript
export const EMAILJS_CONFIG = {
  USER_ID: 'user_123456', // Tu User ID real
  SERVICE_ID: 'service_abc123', // Tu Service ID real
  TEMPLATE_ID: 'template_xyz789', // Tu Template ID real
};
```

## **Paso 6: Probar**

1. Ejecuta tu aplicación: `npm run dev`
2. Abre el modal "Añadir una IA"
3. Llena el formulario y envía
4. Deberías recibir el email en tu bandeja

## **🎉 ¡Listo!**

Ahora cada vez que alguien envíe una sugerencia, recibirás un email con todos los detalles.

## **📊 Monitoreo**

- Ve a "Email Logs" en EmailJS para ver todos los emails enviados
- Puedes ver estadísticas de envío y éxito
- Configura alertas si quieres

## **💰 Planes**

- **Gratis**: 200 emails/mes
- **Starter**: $15/mes - 1,000 emails
- **Business**: $35/mes - 10,000 emails
