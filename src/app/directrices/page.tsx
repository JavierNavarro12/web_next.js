'use client';

import React from 'react';
import Footer from '../../components/Footer/Footer';

export default function ListingGuidelinesPage() {
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
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Directrices de Listado</h1>
          <p className="text-zinc-300 mb-8">
            Estas directrices ayudan a mantener AIFinder útil, confiable y de alta calidad. Si
            deseas que tu herramienta o recurso aparezca, por favor revisa los siguientes criterios
            antes de enviarlo.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Garantía de calidad</h2>
              <p className="text-zinc-300">
                Las herramientas deben estar bien construidas, ser funcionales y estables. Aceptamos
                productos en etapas tempranas, pero deben mostrar un compromiso claro con la calidad
                y la usabilidad. Funciones rotas, tecnología obsoleta o contenido de placeholder
                pueden provocar su rechazo o eliminación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Mantenimiento y soporte activo</h2>
              <p className="text-zinc-300">
                Valoramos envíos que muestren señales de actualizaciones regulares, interacción con
                usuarios o planes futuros claros. Listados desactualizados o abandonados pueden
                retirarse en cualquier momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Presentación visual importa</h2>
              <p className="text-zinc-300">
                La apariencia forma parte de la experiencia del producto. Requerimos diseños acordes
                a los estándares actuales: limpios, modernos y adaptados a móvil. No necesitas una
                UI llamativa, pero sí cuidada y consistente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Credibilidad pública y confianza</h2>
              <p className="text-zinc-300">
                Escuchamos a la comunidad. Herramientas con feedback abrumadoramente negativo o
                reclamos engañosos pueden ser retiradas. La transparencia genera confianza.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Integridad legal y ética</h2>
              <p className="text-zinc-300">
                Tu herramienta debe cumplir las leyes aplicables (protección de datos, copyright,
                uso justo). No aceptamos envíos que promuevan estafas, exploten usuarios o impliquen
                prácticas poco éticas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Propuesta de valor clara</h2>
              <p className="text-zinc-300">
                El producto debe resolver un problema real, potenciar la creatividad o mejorar
                flujos de trabajo. No aceptamos herramientas cuyo objetivo sea exclusivamente
                recolectar datos, mostrar publicidad o replicar el valor de otras sin aportar
                diferencias significativas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Sin competidores directos</h2>
              <p className="text-zinc-300">
                Para mantener el foco de AIFinder, no listamos directorios/marketplaces de
                herramientas que compitan directamente con este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Criterio editorial</h2>
              <p className="text-zinc-300">
                Revisamos cada envío de forma holística y nos reservamos el derecho de aceptar o
                rechazar listados según estándares de calidad, utilidad y experiencia de usuario. La
                aceptación no está garantizada.
              </p>
            </section>

            <section className="pt-2 border-t border-zinc-800">
              <p className="text-zinc-400">
                Si estás construyendo algo con cariño y creatividad, queremos verlo. Si tienes dudas
                sobre estas directrices o el proceso de envío, contáctanos en
                <a className="text-blue-400 hover:underline ml-1" href="mailto:info@aifinder.es">
                  info@aifinder.es
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
