'use client';

import React from 'react';
import Footer from '../../components/Footer/Footer';

export default function TermsAndConditionsPage() {
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
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Términos y Condiciones</h1>
          <p className="text-zinc-300 mb-8">
            Bienvenido a AIFinder, un directorio de herramientas y contenidos sobre Inteligencia
            Artificial. Al acceder a este sitio, aceptas estos Términos y Condiciones. Si no estás
            de acuerdo, por favor no continúes utilizando AIFinder.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Aviso de copyright</h2>
              <p className="text-zinc-300">
                Copyright © 2025, AIFinder. Todos los derechos reservados. Las herramientas y
                recursos mencionados en AIFinder son propiedad de sus respectivas entidades. El
                contenido publicado en este sitio (textos, gráficos, logotipos e imágenes) se ofrece
                con fines meramente informativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Licencia de uso del sitio web</h2>
              <p className="text-zinc-300">
                Salvo indicación en contrario, AIFinder y/o sus licenciantes son titulares de los
                derechos de propiedad intelectual sobre el material de este sitio que no sea
                reclamado por terceros (por ejemplo, marcas o contenidos de herramientas listadas).
                Se reservan todos los derechos de propiedad intelectual. Puedes acceder a AIFinder
                para uso personal, sujeto a las restricciones establecidas en estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. No está permitido</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Republicar material de AIFinder sin reconocer la fuente o su titularidad.</li>
                <li>Vender, alquilar o sub-licenciar material de AIFinder.</li>
                <li>Reproducir, duplicar o copiar material sin la atribución correspondiente.</li>
                <li>Redistribuir contenido de AIFinder que no te pertenezca.</li>
              </ul>
              <p className="text-zinc-300 mt-3">
                Este acuerdo entra en vigor en la fecha de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Exención de responsabilidad</h2>
              <p className="text-zinc-300">
                En la máxima medida permitida por la ley aplicable, excluimos toda representación,
                garantía o condición relacionada con AIFinder y su uso. Nada en este aviso legal
                pretende:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300 mt-2">
                <li>
                  Limitar o excluir nuestra responsabilidad o la tuya por muerte o daños personales.
                </li>
                <li>
                  Limitar o excluir nuestra responsabilidad o la tuya por fraude o tergiversación
                  fraudulenta.
                </li>
                <li>
                  Limitar cualesquiera responsabilidades de una forma no permitida por la ley
                  aplicable.
                </li>
                <li>
                  Excluir responsabilidades que no puedan excluirse conforme a la ley aplicable.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Aviso de afiliación</h2>
              <p className="text-zinc-300">
                AIFinder puede contener enlaces a webs afiliadas. Podemos recibir una comisión por
                las compras realizadas a través de dichos enlaces.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Contenido generado por usuarios</h2>
              <p className="text-zinc-300">
                AIFinder no es responsable del contenido subido por usuarios. Las opiniones
                expresadas en dicho contenido pertenecen únicamente a sus autores y no reflejan
                necesariamente la postura de AIFinder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Modificaciones e interrupciones</h2>
              <p className="text-zinc-300">
                Nos reservamos el derecho a cambiar, modificar o eliminar contenidos del sitio en
                cualquier momento y por cualquier motivo, a nuestra sola discreción y sin previo
                aviso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Ley aplicable</h2>
              <p className="text-zinc-300">
                Estos Términos se rigen e interpretan de acuerdo con las leyes de España, sin
                perjuicio de sus normas sobre conflicto de leyes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Contacto</h2>
              <p className="text-zinc-300">
                Si tienes preguntas sobre estos Términos y Condiciones, escríbenos a
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
