/**
 * Guías "mejores IA para [tarea]": listas cortas y curadas que responden a la
 * búsqueda comercial y empujan tráfico hacia las fichas (y sus enlaces de
 * afiliado cuando los hay).
 *
 * Solo entran herramientas con ficha publicada y precios verificados en
 * tool-pricing.ts. Las líneas de precio de aquí resumen esos datos: si se
 * actualiza tool-pricing.ts, revisar también estas guías.
 */

export type BestOfItem = {
  tool: string;
  priceLine: string;
  why: string[];
  bestFor: string;
};

export type BestOfGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  criteria: string[];
  items: BestOfItem[];
  faqs: { question: string; answer: string }[];
  related: { slug: string; label: string }[];
};

export const bestOfGuides: BestOfGuide[] = [
  {
    slug: 'mejores-ia-para-presentaciones',
    title: 'Las mejores IA para hacer presentaciones',
    metaTitle: 'Mejores IA para hacer presentaciones: gratis y de pago',
    metaDescription:
      'Comparamos las mejores IA para crear presentaciones: Gamma, Canva Magic Studio y Microsoft 365 Copilot. Cuál es gratis, precios verificados y cuál elegir.',
    intro: [
      'Hacer una presentación decente lleva horas, y casi todas se van en el diseño, no en el contenido. Las herramientas de esta lista generan la estructura y las diapositivas por ti a partir de una idea o un documento, para que tu trabajo sea corregir y ajustar en vez de empezar desde un lienzo en blanco.',
      'No todas resuelven lo mismo: Gamma es un generador dedicado, Canva Magic Studio es una suite de diseño con IA integrada y Microsoft 365 Copilot mete la IA dentro del propio PowerPoint. La mejor para ti depende de dónde vaya a vivir la presentación.',
    ],
    criteria: [
      'Cada herramienta de la lista tiene ficha propia revisada en AIFinder, con ventajas, inconvenientes y alternativas.',
      'Los precios están verificados en la web oficial de cada fabricante (agosto de 2026). Si un dato no se pudo verificar, no aparece.',
      'El orden refleja para cuánta gente es la mejor opción, no una puntuación absoluta: lee el "ideal para" de cada una.',
    ],
    items: [
      {
        tool: 'Gamma',
        priceLine:
          'Gratis con límites (plan Free, sin tarjeta); Plus por 8 $/mes y Pro por 20 $/mes.',
        why: [
          'Gamma hace exactamente esto: le das un tema o un documento y devuelve una presentación completa, editable por bloques, en cuestión de minutos. También genera documentos y webs con el mismo sistema.',
          'El plan Free permite probarlo sin tarjeta, con un límite de 50.000 tokens de entrada y la marca de Gamma en lo que creas. El salto a Plus (8 $/mes) es el más barato de esta lista.',
        ],
        bestFor:
          'Crear una presentación completa desde cero en minutos, sin pelearte con el diseño.',
      },
      {
        tool: 'Canva Magic Studio',
        priceLine: 'Gratis con créditos de IA limitados; Canva Business por 20 $/persona al mes.',
        why: [
          'Canva no es solo presentaciones: es un editor de diseño completo donde la IA de Magic Studio te ayuda a generar y retocar diapositivas, imágenes, vídeo y cualquier material de marca en el mismo sitio.',
          'Si ya trabajas en Canva no hay curva de aprendizaje, y el plan gratuito incluye un uso limitado de las funciones de IA con créditos mensuales.',
        ],
        bestFor:
          'Quien ya usa Canva o necesita algo más que diapositivas: cartelería, redes sociales, vídeo.',
      },
      {
        tool: 'Microsoft 365 Copilot',
        priceLine:
          'De pago: complemento por 15,60 €/usuario al mes sobre una licencia de Microsoft 365.',
        why: [
          'Copilot trabaja dentro del propio PowerPoint (y de Word, Excel, Outlook y Teams): genera borradores de presentación a partir de tus documentos sin salir del ecosistema Microsoft.',
          'No tiene versión gratuita y exige licencia de Microsoft 365, así que solo compensa en entornos corporativos que ya viven en esa suite.',
        ],
        bestFor:
          'Empresas que ya pagan Microsoft 365 y quieren la IA dentro de PowerPoint, con sus plantillas y permisos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la mejor IA gratis para hacer presentaciones?',
        answer:
          'Gamma: su plan Free se usa sin tarjeta y genera presentaciones completas, aunque con un límite de 50.000 tokens de entrada y la marca de Gamma. Canva también tiene plan gratuito con créditos de IA limitados. Microsoft 365 Copilot no tiene versión gratuita.',
      },
      {
        question: '¿Qué diferencia hay entre Gamma y Canva Magic Studio?',
        answer:
          'El enfoque: Gamma genera la presentación entera a partir de un tema o documento, mientras que en Canva tú diseñas y la IA de Magic Studio te asiste. Gamma es más rápido para partir de cero; Canva da más control y cubre también imágenes, vídeo y material de marca.',
      },
      {
        question: '¿Merece la pena pagar por una IA de presentaciones?',
        answer:
          'Depende del volumen. Para uso puntual, los planes gratuitos de Gamma y Canva llegan de sobra. Si preparas presentaciones cada semana, Gamma Plus (8 $/mes) es el salto de pago más barato. Copilot (15,60 €/usuario al mes) solo compensa si se aprovecha en toda la suite de Microsoft, no solo en PowerPoint.',
      },
    ],
    related: [{ slug: 'gamma-vs-canva-magic-studio', label: 'Gamma vs Canva Magic Studio' }],
  },
  {
    slug: 'mejores-ia-de-voz-en-espanol',
    title: 'Las mejores IA de voz en español',
    metaTitle: 'Mejores IA de voz en español: gratis y de pago',
    metaDescription:
      'Las mejores IA para generar voz en español: ElevenLabs, Murf, Speechify y Resemble AI. Cuál tiene versión gratis, precios verificados y cuál elegir.',
    intro: [
      'Generar una locución natural en español ya no exige estudio de grabación ni locutor: las herramientas de esta lista producen voces que aguantan un vídeo, un podcast o un curso entero. La diferencia entre ellas está en el caso de uso, no solo en la calidad.',
      'Dos son para producir audio (ElevenLabs y Murf), una es para escuchar cualquier texto (Speechify) y otra para clonar voces con API en productos de empresa (Resemble AI). Elige por lo que necesitas hacer, no por el nombre.',
    ],
    criteria: [
      'Cada herramienta de la lista tiene ficha propia revisada en AIFinder, con ventajas, inconvenientes y alternativas.',
      'Los precios están verificados en la web oficial de cada fabricante (agosto de 2026). Si un dato no se pudo verificar, no aparece.',
      'El orden refleja para cuánta gente es la mejor opción, no una puntuación absoluta: lee el "ideal para" de cada una.',
    ],
    items: [
      {
        tool: 'ElevenLabs',
        priceLine:
          'Gratis con 10.000 créditos al mes; de pago desde 6 $/mes (Starter, con licencia comercial). Con facturación anual, dos meses gratis.',
        why: [
          'Es la referencia en síntesis y clonación de voz, y sus voces en español están entre las más naturales que puedes generar hoy. El plan gratuito da 10.000 créditos al mes para probar con texto a voz, efectos de sonido y música.',
          'Ojo con la licencia: el plan Free no permite uso comercial. Para publicar contenido monetizado necesitas al menos Starter (6 $/mes), que además incluye clonación instantánea de voz.',
        ],
        bestFor:
          'Locuciones para vídeos, podcasts y audiolibros donde la naturalidad es lo primero.',
      },
      {
        tool: 'Murf',
        priceLine: 'Gratis 10 minutos de prueba; Creator por 19 $/mes con facturación anual.',
        why: [
          'Murf está pensado para vídeos corporativos y formación: más de 200 voces en 20 idiomas y un flujo de estudio orientado a producir locuciones consistentes para e-learning.',
          'El plan gratuito son 10 minutos de generación sin derechos comerciales ni descargas: sirve para evaluar la calidad, no para trabajar. El plan real es Creator, a 19 $/mes con facturación anual.',
        ],
        bestFor: 'Locuciones de e-learning y vídeos corporativos con voces consistentes.',
      },
      {
        tool: 'Speechify',
        priceLine: 'Gratis con 10 voces básicas; Premium por 29 $/mes o unos 139 $/año.',
        why: [
          'Speechify juega otra liga: no es para producir audio profesional, sino para escucharlo tú. Convierte apuntes, artículos y PDFs en voz para estudiar o leer más, y su plan gratuito no declara límite de minutos.',
          'Premium añade más de 1.000 voces de alta calidad en más de 60 idiomas, velocidad de hasta 5x, resúmenes con IA e integración con Drive, Dropbox y OneDrive.',
        ],
        bestFor:
          'Escuchar apuntes, artículos y documentos en español, más que producir locuciones.',
      },
      {
        tool: 'Resemble AI',
        priceLine:
          'Plan Flex gratis (pago por créditos, sin tarjeta); planes de equipo desde 280 $/mes con facturación anual.',
        why: [
          'Resemble AI apunta a empresas: clonación de voz y síntesis con API para integrar en productos propios, con un plan Flex a 0 $/mes en el que solo pagas los créditos que consumes.',
          'Los planes de equipo (desde 280 $/mes con facturación anual) están lejos del bolsillo de un creador individual: aquí compites en otra categoría, la de integrar voz en tu producto.',
        ],
        bestFor: 'Empresas que necesitan clonación de voz con API integrada en sus productos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la mejor IA de voz gratis en español?',
        answer:
          'Para generar audio, ElevenLabs: su plan gratuito da 10.000 créditos al mes, aunque sin licencia comercial. Para escuchar textos, Speechify tiene plan gratuito con 10 voces básicas y sin límite declarado de minutos. Murf solo ofrece 10 minutos de prueba.',
      },
      {
        question: '¿Puedo usar estas voces en vídeos monetizados?',
        answer:
          'Depende del plan. El plan gratuito de ElevenLabs no incluye licencia comercial: necesitas Starter (6 $/mes) o superior. El plan gratuito de Murf tampoco da derechos comerciales. Revisa siempre la licencia del plan antes de publicar contenido monetizado.',
      },
      {
        question: '¿Cuánto cuesta ElevenLabs?',
        answer:
          'Tiene plan gratuito con 10.000 créditos al mes. Los planes de pago van de Starter (6 $/mes) y Creator (22 $/mes, con el primer mes al 50%) hasta Pro (99 $/mes) y planes de empresa. Con facturación anual se pagan 10 meses en vez de 12.',
      },
      {
        question: '¿Qué diferencia hay entre ElevenLabs y Speechify?',
        answer:
          'La dirección del audio: ElevenLabs genera voz para que otros la escuchen (locuciones, doblaje, clonación) y Speechify lee texto en voz alta para que lo escuches tú (estudiar, leer más rápido). Si produces contenido, ElevenLabs; si consumes texto, Speechify.',
      },
    ],
    related: [{ slug: 'elevenlabs-vs-speechify', label: 'ElevenLabs vs Speechify' }],
  },
  {
    slug: 'mejores-ia-para-automatizar-tareas',
    title: 'Las mejores IA para automatizar tareas',
    metaTitle: 'Mejores IA para automatizar tareas: gratis y de pago',
    metaDescription:
      'Las mejores herramientas para automatizar tareas con IA: Make, Zapier, n8n, Power Automate e IFTTT. Planes gratis, precios verificados y cuál elegir.',
    intro: [
      'Automatizar tareas ya no es cosa de programadores: estas plataformas conectan tus aplicaciones entre sí y mueven los datos solas, y la IA añade pasos que antes exigían a una persona, como clasificar correos, resumir textos o decidir a qué rama sigue un flujo.',
      'Las cinco de esta lista resuelven el mismo problema a escalas muy distintas: desde encender una automatización doméstica por 3 dólares al mes hasta orquestar procesos de empresa. La clave está en el plan gratuito con el que puedes empezar y en cuánto cuesta escalar.',
    ],
    criteria: [
      'Cada herramienta de la lista tiene ficha propia revisada en AIFinder, con ventajas, inconvenientes y alternativas.',
      'Los precios están verificados en la web oficial de cada fabricante (agosto de 2026). Si un dato no se pudo verificar, no aparece.',
      'El orden refleja para cuánta gente es la mejor opción, no una puntuación absoluta: lee el "ideal para" de cada una.',
    ],
    items: [
      {
        tool: 'Make',
        priceLine: 'Gratis con 1.000 créditos al mes; Core por 9 $/mes.',
        why: [
          'Make combina un constructor visual muy potente con más de 3.000 aplicaciones, y su plan gratuito (1.000 créditos al mes) da mucho más margen real para empezar que el de Zapier (100 tareas).',
          'Al escalar también sale mejor parado: Core cuesta 9 $/mes frente a los 19,99 $/mes del primer plan de pago de Zapier. Es el mejor equilibrio entre potencia y precio de la lista.',
        ],
        bestFor:
          'Empezar gratis con automatizaciones serias y escalar sin que la factura se dispare.',
      },
      {
        tool: 'Zapier',
        priceLine:
          'Gratis con 100 tareas al mes; Professional desde 19,99 $/mes con facturación anual.',
        why: [
          'Zapier es el estándar del sector: miles de aplicaciones conectadas y funciones de IA integradas en los flujos, con la mayor probabilidad de que la integración que necesitas ya exista y esté documentada.',
          'Su plan gratuito es el más corto de la lista: 100 tareas al mes y Zaps de solo dos pasos. Se paga la comodidad: el salto a Professional parte de 19,99 $/mes con facturación anual.',
        ],
        bestFor:
          'Quien prioriza encontrar cualquier integración ya hecha y asume pagar por volumen.',
      },
      {
        tool: 'n8n',
        priceLine:
          'Gratis de verdad si te la autoalojas (Community Edition, sin límite de ejecuciones); en la nube desde 20 €/mes.',
        why: [
          'n8n es la opción open source (fair-code): la Community Edition autoalojada es gratuita y sin límite de ejecuciones, la única de la lista sin contador de tareas. Trae nodos de IA integrados para meter modelos en tus flujos.',
          'La contrapartida es técnica: autoalojarla exige montar y mantener el servidor. Si prefieres la nube gestionada, parte de 20 €/mes con facturación anual.',
        ],
        bestFor: 'Perfiles técnicos que quieren control total, datos en su servidor y coste fijo.',
      },
      {
        tool: 'Power Automate',
        priceLine: 'Prueba gratuita de 30 días; Premium por 15 $/usuario al mes con pago anual.',
        why: [
          'Power Automate es la pieza de automatización del ecosistema Microsoft: si tu empresa vive en Microsoft 365, es el camino natural para automatizar SharePoint, Teams, Excel y el resto de la suite.',
          'No tiene plan gratuito permanente, solo una prueba de 30 días; el plan Premium cuesta 15 $/usuario al mes con pago anual. Fuera del ecosistema Microsoft pierde casi todo su sentido.',
        ],
        bestFor: 'Automatizar dentro del ecosistema Microsoft: SharePoint, Teams, Excel, Outlook.',
      },
      {
        tool: 'IFTTT',
        priceLine: 'Gratis con 2 applets; Pro por 2,99 $/mes y Pro+ por 8,99 $/mes.',
        why: [
          'IFTTT es la puerta de entrada: automatizaciones sencillas entre apps y dispositivos conectados, pensadas para el día a día (domótica, redes sociales, avisos) más que para procesos de trabajo.',
          'El plan gratuito se queda en 2 applets, pero Pro cuesta 2,99 $/mes: el precio más bajo de la lista con diferencia. No intentes montar aquí flujos complejos; para eso están las otras cuatro.',
        ],
        bestFor: 'Automatizaciones domésticas y personales sencillas por muy poco dinero.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la mejor IA gratis para automatizar tareas?',
        answer:
          'Make: su plan gratuito da 1.000 créditos al mes con acceso a más de 3.000 aplicaciones, frente a las 100 tareas de Zapier. Si tienes perfil técnico, n8n autoalojada es gratuita sin límite de ejecuciones.',
      },
      {
        question: '¿Make o Zapier: cuál elijo?',
        answer:
          'Make si quieres empezar gratis con margen real y escalar barato (Core, 9 $/mes); Zapier si tu prioridad es que cualquier integración exista ya y no te importa pagar más (Professional desde 19,99 $/mes). Tenemos una comparativa completa entre ambas.',
      },
      {
        question: '¿Hay alguna opción sin límite de ejecuciones?',
        answer:
          'Sí, n8n: su Community Edition autoalojada es gratuita y no limita las ejecuciones. A cambio tienes que desplegarla y mantenerla en tu propio servidor; la versión en la nube gestionada parte de 20 €/mes.',
      },
      {
        question: '¿Cuál es la más barata para uso personal?',
        answer:
          'IFTTT: su plan Pro cuesta 2,99 $/mes y cubre de sobra automatizaciones personales y domésticas. Para flujos de trabajo más serios, el mejor precio es Make Core a 9 $/mes.',
      },
    ],
    related: [
      { slug: 'zapier-vs-make', label: 'Zapier vs Make' },
      { slug: 'make-vs-ifttt', label: 'Make vs IFTTT' },
    ],
  },
];

export function findBestOfGuide(slug: string): BestOfGuide | undefined {
  return bestOfGuides.find((guide) => guide.slug === slug);
}
