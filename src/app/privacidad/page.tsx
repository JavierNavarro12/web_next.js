'use client';

import React from 'react';
import Footer from '../../components/Footer/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Header fijo alineado al contenido (sin invadir sidebar en desktop) */}
      <div className="fixed top-0 md:top-[8px] left-0 right-0 z-40 bg-transparent pointer-events-none">
        <div className="pointer-events-auto md:ml-[276px] px-3 md:px-4 py-3 bg-black/80 backdrop-blur border-b border-r border-zinc-800 w-full md:max-w-[calc(100vw-288px)]">
          <button
            onClick={() => (typeof window !== 'undefined' ? window.history.back() : undefined)}
            className="text-zinc-300 hover:text-white"
            aria-label="Volver"
          >
            ← Volver
          </button>
        </div>
      </div>

      {/* Contenido en contenedor */}
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-8 w-full flex-1 pt-14">
        <div className="bg-black rounded-2xl border border-zinc-800 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Política de Privacidad</h1>
          <p className="text-zinc-400 mb-8">
            Fecha de entrada en vigor: viernes, 8 de agosto de 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">Introducción</h2>
              <p className="text-zinc-300">
                ¡Bienvenido a AIFinder! Tu privacidad es importante para nosotros. En esta Política
                de Privacidad explicamos cómo recopilamos, usamos y protegemos tu información cuando
                utilizas nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Aviso</h2>
              <p className="text-zinc-300">
                Bajo ninguna circunstancia recopilamos datos personales con fines de venta a
                terceros. Las herramientas y tecnologías que utilizamos tienen el único propósito de
                mejorar AIFinder y sus productos relacionados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Información que recopilamos</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>
                  <strong>Datos de uso:</strong> páginas visitadas, tiempo en página, clics e
                  interacciones.
                </li>
                <li>
                  <strong>Información del dispositivo:</strong> dirección IP, tipo de navegador y
                  sistema operativo.
                </li>
                <li>
                  <strong>Cookies y tecnologías similares:</strong> para mejorar tu experiencia y
                  ofrecer contenido personalizado.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Herramientas que usamos</h2>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <h3 className="font-semibold">Microsoft Clarity</h3>
                  <p>
                    Registra cómo interactúan los visitantes con AIFinder (clics, scroll, patrones
                    de navegación).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Google Analytics</h3>
                  <p>
                    Nos ayuda a analizar el rendimiento del sitio y el comportamiento de los
                    usuarios para mejorar contenidos y funcionalidades.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Píxeles de marketing</h3>
                  <p>
                    Podemos usar píxeles de plataformas como Facebook o LinkedIn para optimizar
                    campañas y medir su efectividad.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Cómo usamos tu información</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Mejorar la funcionalidad y el rendimiento de AIFinder.</li>
                <li>Comprender el comportamiento de uso para optimizar la experiencia.</li>
                <li>Optimizar nuestros esfuerzos de marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Compartición de información</h2>
              <p className="text-zinc-300">
                No vendemos tu información. Los datos recopilados se utilizan exclusivamente para
                los fines descritos en esta política y en relación con AIFinder y sus productos
                derivados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Tus derechos</h2>
              <p className="text-zinc-300 mb-3">
                Puedes optar por desactivar cookies o el seguimiento ajustando la configuración de
                tu navegador o utilizando herramientas como el complemento de inhabilitación de
                Google Analytics.
              </p>
              <p className="text-zinc-300">
                Si tienes preguntas o necesitas ayuda, contáctanos en
                <a
                  className="text-blue-400 hover:underline ml-1"
                  href="mailto:navarrojavi107@gmail.com"
                >
                  navarrojavi107@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Cambios a esta política</h2>
              <p className="text-zinc-300">
                Podemos actualizar esta Política de Privacidad periódicamente. La versión vigente
                estará disponible en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contacto</h2>
              <p className="text-zinc-300">
                Si tienes dudas o comentarios sobre esta Política de Privacidad, escríbenos a
                <a
                  className="text-blue-400 hover:underline ml-1"
                  href="mailto:navarrojavi107@gmail.com"
                >
                  navarrojavi107@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer setShowFeedback={() => {}} />
    </div>
  );
}
