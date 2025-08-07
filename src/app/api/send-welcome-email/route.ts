import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend solo cuando se necesite, no durante el build
let resend: Resend;

const WINDOW_MS = 60_000; // 1 minuto
const MAX_REQUESTS = 10; // 10 por minuto por IP
const ipBuckets = new Map<string, { count: number; startsAt: number }>();

function isRateLimited(ip: string | null) {
  if (!ip) return false;
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || now - bucket.startsAt > WINDOW_MS) {
    ipBuckets.set(ip, { count: 1, startsAt: now });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > MAX_REQUESTS) return true;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ipHeader = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    const ip = ipHeader?.split(',')[0]?.trim() || null;
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Inténtalo más tarde.' },
        { status: 429 },
      );
    }

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
    const result = await resend.emails.send({
      from: 'AIFinder <newsletter@aifinder.es>',
      to: [email],
      subject: 'Bienvenido a AIFinder',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenido a AIFinder</title>
          <style>
            /* Desktop styles - email más grande */
            .container { 
              width: 800px !important; 
              max-width: 90% !important; 
            }
            
            /* Mobile responsive */
            @media only screen and (max-width: 600px) {
              .container { width: 95% !important; padding: 10px !important; }
              .title { font-size: 28px !important; line-height: 1.2 !important; }
              .subtitle { font-size: 18px !important; line-height: 1.3 !important; }
              .section-title { font-size: 18px !important; word-break: keep-all !important; }
              .section-desc { font-size: 14px !important; line-height: 1.4 !important; }
              .stats-number { font-size: 32px !important; }
              .stats-label { font-size: 12px !important; word-break: keep-all !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f8fafc;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table cellpadding="0" cellspacing="0" border="0" width="800" class="container" style="max-width: 90%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 32px 24px; text-align: center;">
                      <h1 class="title" style="margin: 0; color: #1e293b; font-size: 32px; font-weight: bold;">AIFinder</h1>
                      <p class="subtitle" style="margin: 8px 0 0; color: #64748b; font-size: 18px;">Todas las IAs que necesitas en un lugar</p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 0 32px 32px; text-align: left;">
                      <h2 class="title" style="margin: 0 0 16px; color: #1e293b; font-size: 24px; font-weight: bold; white-space: nowrap; text-align: center;">
                        ¡Gracias por suscribirte!
                      </h2>
                      
                      <p style="margin: 0 0 24px; color: #64748b; font-size: 16px; line-height: 1.6; text-align: center;">
                        Herramientas, recursos y productos de IA. Entregado semanalmente.
                      </p>

                      <!-- Benefits Cards -->
                      <div style="margin: 24px 0;">
                        <div style="background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                          <h3 class="section-title" style="margin: 0 0 8px; color: #1e293b; font-size: 18px; font-weight: bold; white-space: nowrap;">🛠️ Herramientas verificadas</h3>
                          <p class="section-desc" style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                            Accede a más de 200+ herramientas de IA seleccionadas y categorizadas
                          </p>
                        </div>
                        
                        <div style="background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
                          <h3 class="section-title" style="margin: 0 0 8px; color: #1e293b; font-size: 18px; font-weight: bold; white-space: nowrap;">📈 Actualizaciones semanales</h3>
                          <p class="section-desc" style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                            Las últimas herramientas y tendencias directo en tu email
                          </p>
                        </div>
                        
                        <div style="background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                          <h3 class="section-title" style="margin: 0 0 8px; color: #1e293b; font-size: 18px; font-weight: bold; white-space: nowrap;">🎯 Categorías especializadas</h3>
                          <p class="section-desc" style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                            Encuentra herramientas por categoría: texto, imágenes, audio, video y más
                          </p>
                        </div>
                      </div>

                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 32px 0;">
                        <a href="https://aifinder.es" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 16px; font-weight: 600;">
                          Explorar herramientas
                        </a>
                      </div>

                      <!-- Stats -->
                      <div style="background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%; min-width: 80px;">
                          <h3 class="stats-number" style="margin: 0 0 4px; color: #1e293b; font-size: 24px; font-weight: bold; white-space: nowrap;">200+</h3>
                          <p class="stats-label" style="margin: 0; color: #64748b; font-size: 14px; white-space: nowrap;">Herramientas</p>
                        </div>
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%; min-width: 80px;">
                          <h3 class="stats-number" style="margin: 0 0 4px; color: #1e293b; font-size: 24px; font-weight: bold; white-space: nowrap;">18</h3>
                          <p class="stats-label" style="margin: 0; color: #64748b; font-size: 14px; white-space: nowrap;">Categorías</p>
                        </div>
                        <div style="display: inline-block; width: 30%; margin: 0 1.5%; min-width: 80px;">
                          <h3 class="stats-number" style="margin: 0 0 4px; color: #1e293b; font-size: 24px; font-weight: bold; white-space: nowrap;">Gratis</h3>
                          <p class="stats-label" style="margin: 0; color: #64748b; font-size: 14px; white-space: nowrap;">Siempre</p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 32px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="margin: 0 0 12px; color: #64748b; font-size: 14px;">
                        Este email fue enviado a ${email}
                      </p>
                      <p style="margin: 0; color: #64748b; font-size: 12px;">
                        <a href="https://aifinder.es/unsubscribe" style="color: #64748b; text-decoration: none;">Cancelar suscripción</a>
                      </p>
                      <p style="margin: 16px 0 0; color: #64748b; font-size: 12px;">
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

    return NextResponse.json({ success: true, emailId: result.data?.id });
  } catch {
    console.error('Error al enviar email');
    return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
  }
}
