import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend solo cuando se necesite, no durante el build
let resend: Resend;

export async function POST(request: NextRequest) {
  try {
    // Inicializar Resend aquí, no globalmente
    if (!resend) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        console.error('RESEND_API_KEY no está configurada');
        return NextResponse.json(
          { error: 'Configuración de email no disponible' },
          { status: 500 },
        );
      }
      resend = new Resend(apiKey);
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email es requerido' }, { status: 400 });
    }

    // Enviar email de bienvenida
    await resend.emails.send({
      from: 'AIFinder <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenido a AIFinder',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenido a AIFinder</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #000000;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #000000;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #000000; border: 1px solid #3f3f46; border-radius: 16px;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 32px 24px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">AIFinder</h1>
                      <p style="margin: 8px 0 0; color: #a1a1aa; font-size: 18px;">Todas las IAs que necesitas en un lugar</p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 0 32px 32px;">
                      <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 24px; font-weight: bold;">
                        ¡Gracias por suscribirte!
                      </h2>
                      
                      <p style="margin: 0 0 24px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                        Herramientas, recursos y productos de IA. Entregado semanalmente.
                      </p>

                      <!-- Benefits Cards -->
                      <div style="margin: 24px 0;">
                        <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                          <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 18px; font-weight: bold;">🛠️ Herramientas verificadas</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px; line-height: 1.5;">
                            Accede a más de 200+ herramientas de IA curadas y categorizadas
                          </p>
                        </div>
                        
                        <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                          <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 18px; font-weight: bold;">📈 Actualizaciones semanales</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px; line-height: 1.5;">
                            Las últimas herramientas y tendencias directo en tu email
                          </p>
                        </div>
                        
                        <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 20px;">
                          <h3 style="margin: 0 0 8px; color: #ffffff; font-size: 18px; font-weight: bold;">🎯 Categorías especializadas</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px; line-height: 1.5;">
                            Encuentra herramientas por categoría: texto, imágenes, audio, video y más
                          </p>
                        </div>
                      </div>

                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 32px 0;">
                        <a href="https://aifinder-five.vercel.app" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 16px; font-weight: 600;">
                          Explorar herramientas
                        </a>
                      </div>

                      <!-- Stats -->
                      <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 24px; text-align: center;">
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%;">
                          <h3 style="margin: 0 0 4px; color: #ffffff; font-size: 24px; font-weight: bold;">200+</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Herramientas</p>
                        </div>
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%;">
                          <h3 style="margin: 0 0 4px; color: #ffffff; font-size: 24px; font-weight: bold;">18</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Categorías</p>
                        </div>
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%;">
                          <h3 style="margin: 0 0 4px; color: #ffffff; font-size: 24px; font-weight: bold;">Gratis</h3>
                          <p style="margin: 0; color: #a1a1aa; font-size: 14px;">Siempre</p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 32px 32px; text-align: center; border-top: 1px solid #3f3f46;">
                      <p style="margin: 0 0 12px; color: #71717a; font-size: 14px;">
                        Este email fue enviado a ${email}
                      </p>
                      <p style="margin: 0; color: #52525b; font-size: 12px;">
                        <a href="https://aifinder-five.vercel.app/unsubscribe" style="color: #71717a; text-decoration: none;">Cancelar suscripción</a>
                      </p>
                      <p style="margin: 16px 0 0; color: #52525b; font-size: 12px;">
                        © 2024 AIFinder
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
  }
}
