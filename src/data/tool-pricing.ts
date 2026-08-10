import type { ToolPricing } from '../types/tool';

/**
 * Precios verificados en la web oficial de cada herramienta.
 *
 * Solo estan las que pudimos comprobar con cifras publicas: el resto
 * se queda con el texto cualitativo de su ficha. Al revisar precios,
 * actualiza tambien PRICING_LAST_CHECKED.
 */
export const PRICING_LAST_CHECKED = 'agosto de 2026';

export const toolPricing: Record<string, ToolPricing> = {
  ChatGPT: {
    name: 'ChatGPT',
    model: 'freemium',
    freeTier:
      'Plan gratuito abierto a cualquiera, con acceso básico a ChatGPT y límites de mensajes, subidas y generación de imágenes más bajos que los de pago.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Uso general con límites; suficiente para consultas puntuales.',
      },
      {
        name: 'Go',
        price: '8 $/mes',
        notes:
          'Plan económico (precio de EE. UU.) que sube el tope de mensajes, subidas, imágenes y memoria frente al gratuito.',
      },
      {
        name: 'Plus',
        price: '20 $/mes',
        notes:
          'Para uso personal intensivo: más límites y funciones avanzadas como Deep Research, modo agente y GPTs personalizados.',
      },
      {
        name: 'Pro',
        price: '100 $/mes o 200 $/mes',
        notes: 'Para profesionales que necesitan 5x (100 $) o 20x (200 $) el uso de Plus.',
      },
      {
        name: 'Business',
        price: '25 $/usuario/mes',
        notes:
          'Plan de equipo desde 2 usuarios, con administración central; más barato con facturación anual.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Para grandes organizaciones, con contrato y condiciones negociadas con ventas.',
      },
    ],
    notes:
      'openai.com y chatgpt.com devuelven 403 a la descarga directa, así que las cifras se han obtenido mediante búsqueda restringida a los dominios oficiales openai.com y help.openai.com. Business se factura por usuario y sale más barato en anual; el uso de la API de OpenAI se paga aparte.',
    sourceUrl: 'https://openai.com/chatgpt/pricing',
  },
  Claude: {
    name: 'Claude',
    model: 'freemium',
    freeTier:
      'Plan gratuito con chat en web, iOS, Android y escritorio, búsqueda web, memoria, creación de archivos y razonamiento extendido, con límite de uso diario.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Uso básico de Claude en todas las plataformas con límites de mensajes.',
      },
      {
        name: 'Pro',
        price: '20 $/mes (17 $/mes en anual)',
        notes:
          'Para uso individual intensivo: más uso, Claude Code, proyectos ilimitados, Research y varios modelos.',
      },
      {
        name: 'Max',
        price: 'Desde 100 $/mes',
        notes: 'Para usuarios muy intensivos: 5x o 20x el uso de Pro y acceso prioritario.',
      },
      {
        name: 'Team (asiento estándar)',
        price: '25 $/asiento/mes (20 $/asiento/mes en anual)',
        notes: 'Equipos de 2 a 150 personas con administración central, SSO y controles de admin.',
      },
      {
        name: 'Team (asiento premium)',
        price: '125 $/asiento/mes (100 $/asiento/mes en anual)',
        notes: 'Asiento con mucho más uso incluido para los perfiles que más exprimen Claude.',
      },
      {
        name: 'Enterprise',
        price: '20 $/asiento + uso a tarifas de API',
        notes:
          'Para grandes organizaciones: permisos por rol, SCIM, registros de auditoría y opciones compatibles con HIPAA.',
      },
    ],
    notes:
      'La facturación anual abarata Pro y Team. En Enterprise el coste real depende del consumo, que se factura a tarifas de API; los precios se muestran en dólares y sin impuestos.',
    sourceUrl: 'https://claude.com/pricing',
  },
  Gemini: {
    name: 'Gemini',
    model: 'freemium',
    freeTier:
      'Plan gratuito con acceso a los modelos Flash, generación de imagen y vídeo, Deep Research, Gemini Live, Canvas, Gems y 15 GB de almacenamiento.',
    plans: [
      {
        name: 'Gratis',
        price: '0 €/mes',
        notes: 'Uso diario con límites y acceso variable a los modelos Pro.',
      },
      {
        name: 'Google AI Plus',
        price: '4,99 €/mes',
        notes:
          'Entrada de gama: duplica los límites del plan gratuito y sube a 400 GB de almacenamiento.',
      },
      {
        name: 'Google AI Pro',
        price: '21,99 €/mes',
        notes:
          'Para uso intensivo: 4x los límites, acceso a Gemini 3 Pro y 5 TB de almacenamiento.',
      },
      {
        name: 'Google AI Ultra',
        price: 'Desde 99,99 €/mes (219,99 €/mes en el nivel superior)',
        notes:
          'Para profesionales y creadores: hasta 20x los límites de Pro, 20+ TB y acceso anticipado a funciones como Deep Think.',
      },
    ],
    notes:
      'Precios consultados desde España, en euros e integrados en las suscripciones Google One (almacenamiento incluido). El uso de la API de Gemini en Google AI Studio o Vertex AI se paga aparte por tokens.',
    sourceUrl: 'https://gemini.google/subscriptions/',
  },
  Mistral: {
    name: 'Mistral',
    model: 'freemium',
    freeTier:
      'Le Chat (Vibe) gratis con mensajes, búsquedas web y sesiones de código limitados, pero acceso a los modelos punteros.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Uso limitado de chat, búsqueda web y programación.',
      },
      {
        name: 'Pro',
        price: '14,99 $/mes',
        notes:
          'Para uso individual intensivo: más mensajes, búsquedas, imágenes y soporte por chat y email.',
      },
      {
        name: 'Education',
        price: '5,99 $/mes',
        notes:
          'Tarifa para estudiantes verificados de centros superiores, con validez máxima de 12 meses.',
      },
      {
        name: 'Team',
        price: '24,99 $/usuario/mes (mínimo 50 $/mes)',
        notes:
          'Para equipos: 30 GB de almacenamiento por usuario, verificación de dominio y exportación de datos.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Modelos, agentes y flujos a medida, SSO SAML, registros de auditoría y marca blanca.',
      },
    ],
    notes:
      'Aparte de la suscripción, la API se paga por millón de tokens (por ejemplo Mistral Large a 2 $/M de entrada y 6 $/M de salida), con 50 % de descuento en procesamiento por lotes. La web muestra los importes en $ o € según la región seleccionada; aquí se recogen en dólares.',
    sourceUrl: 'https://mistral.ai/pricing',
  },
  Grok: {
    name: 'Grok',
    model: 'freemium',
    freeTier:
      'Grok se puede usar gratis con límites de uso semanales antes de tener que pasar a un plan SuperGrok.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Acceso inicial a Grok dentro de límites generosos pero acotados.',
      },
      {
        name: 'SuperGrok',
        price: '30 $/mes',
        notes: 'Desbloquea límites más altos y acceso a los modelos frontera.',
      },
    ],
    notes:
      'x.ai/pricing y grok.com/pricing devuelven 403 a la descarga directa; solo se ha podido confirmar el precio de SuperGrok (30 $/mes) mediante búsqueda restringida al dominio oficial x.ai. La página lista además SuperGrok Lite, SuperGrok Heavy, Business y Enterprise, cuyos importes no se han podido verificar (Enterprise es presupuesto a medida). Todos los planes de pago consumen una bolsa de uso semanal compartida entre productos; la API de xAI se factura aparte por tokens.',
    sourceUrl: 'https://x.ai/pricing',
  },
  Jasper: {
    name: 'Jasper',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Pro',
        price: '69 $/asiento/mes (59 $/asiento/mes en anual)',
        notes: 'Plan principal para marketers y equipos pequeños que crean contenido de marca.',
      },
      {
        name: 'Business',
        price: 'Presupuesto a medida',
        notes:
          'Para empresas, con compromiso mínimo de 12 meses y condiciones negociadas con ventas.',
      },
    ],
    notes:
      'No hay plan gratuito, solo prueba de 7 días del plan Pro. El anual ahorra en torno a un 20 % pero obliga a 12 meses; los precios están en dólares y se convierten al tipo de cambio del momento en otras divisas.',
    sourceUrl: 'https://www.jasper.ai/pricing',
  },
  'Copy.ai': {
    name: 'Copy.ai',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Chat',
        price: '29 $/mes (24 $/mes en anual, 288 $/año)',
        notes:
          'Entrada de gama: 5 usuarios, palabras ilimitadas en chat y acceso a modelos de OpenAI, Anthropic y Gemini.',
      },
      {
        name: 'Growth',
        price: '1.000 $/mes (12.000 $/año)',
        notes:
          'Para equipos de marketing y ventas: 75 usuarios y 20.000 créditos de flujos al mes.',
      },
      {
        name: 'Expansion',
        price: '2.000 $/mes (24.000 $/año)',
        notes: '150 usuarios y 45.000 créditos de flujos al mes.',
      },
      {
        name: 'Scale',
        price: '3.000 $/mes (36.000 $/año)',
        notes: '200 usuarios y 75.000 créditos de flujos al mes.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Implantación guiada, API, integraciones, flujos ilimitados y seguridad de nivel empresarial.',
      },
    ],
    notes:
      'Ya no hay plan gratuito permanente: solo se puede probar pidiendo una demo o contactando con ventas. Los planes Growth y superiores se facturan de forma anual y el consumo se mide en créditos de flujos de trabajo.',
    sourceUrl: 'https://www.copy.ai/prices',
  },
  'DALL·E': {
    name: 'DALL·E',
    model: 'freemium',
    freeTier:
      'El plan Free de ChatGPT incluye generación de imágenes, pero limitada y más lenta que en los planes de pago.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Para probar ChatGPT: mensajes, subidas y generación de imágenes limitadas.',
      },
      {
        name: 'Go',
        price: '8 $/mes',
        notes:
          'Más mensajes, más subidas y más creación de imágenes que el plan gratuito; puede incluir anuncios.',
      },
      {
        name: 'Plus',
        price: '20 $/mes',
        notes: 'Para trabajo avanzado y productividad, con límites de uso mucho más altos.',
      },
      {
        name: 'Pro',
        price: '100 $/mes o 200 $/mes',
        notes: 'Dos niveles: 100 $ da 5 veces más uso que Plus y 200 $ hasta 20 veces más.',
      },
      {
        name: 'Business',
        price: '25 $/usuario/mes (20 $/usuario/mes con facturación anual)',
        notes: 'Para equipos, con espacio de trabajo compartido y administración.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Para grandes organizaciones; hay que contactar con ventas.',
      },
    ],
    notes:
      'openai.com devuelve 403 a WebFetch y además inyecta los importes por JavaScript, así que la página se leyó vía lector de texto (se confirmaron los nombres de plan Free/Go/Plus/Pro/Business/Enterprise) y las cifras se obtuvieron con WebSearch restringido a openai.com y help.openai.com. El uso por API se paga aparte: en developers.openai.com el modelo de imagen gpt-image-1 se factura por tokens (10 $ por 1M de tokens de imagen de entrada, 5 $ por 1M de texto de entrada y 40 $ por 1M de salida).',
    sourceUrl: 'https://openai.com/chatgpt/pricing/',
  },
  'Stable Diffusion': {
    name: 'Stable Diffusion',
    model: 'freemium',
    freeTier:
      'Plan gratuito de 0 $/mes con 10 créditos al día, con anuncios, marca de agua y sin licencia comercial.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: '10 créditos diarios para probar el generador online.',
      },
      {
        name: 'PRO',
        price: '20 $/mes (facturado anualmente)',
        notes:
          '2.000 créditos al mes, sin anuncios ni marca de agua, licencia comercial e imágenes privadas.',
      },
    ],
    notes:
      'stablediffusionweb.com devuelve 403 a WebFetch y a curl, y su /pricing no se sirve a lectores de texto, así que las cifras proceden de WebSearch restringido al propio dominio oficial. Existe además un plan MAX con 5.000 créditos al mes, pero los resultados se contradicen sobre su precio y no lo incluyo. El modelo Stable Diffusion en sí es de pesos abiertos: se puede ejecutar en local sin coste de licencia, pagando solo hardware o API de terceros.',
    sourceUrl: 'https://stablediffusionweb.com/pricing',
  },
  'Adobe Firefly': {
    name: 'Adobe Firefly',
    model: 'freemium',
    freeTier: null,
    plans: [
      {
        name: 'Firefly Standard',
        price: '9,99 US$/mes',
        notes: '2.000 créditos generativos al mes; entrada para uso ocasional de imagen y vídeo.',
      },
      {
        name: 'Firefly Pro',
        price: '19,99 US$/mes',
        notes: '4.000 créditos al mes, para quien genera vídeo y audio con frecuencia.',
      },
      {
        name: 'Firefly Pro Plus',
        price: '49,99 US$/mes (oferta a 34,97 US$/mes)',
        notes: '10.000 créditos al mes y generaciones ilimitadas en más modelos el primer año.',
      },
      {
        name: 'Firefly Premium',
        price: '199,99 US$/mes (oferta a 139,91 US$/mes)',
        notes: '50.000 créditos al mes; para producción intensiva de vídeo 4K y modelos premium.',
      },
    ],
    notes:
      'Todos los precios son mensuales y en US$: la página de planes no ofrece selector anual. Pro Plus y Premium tienen una oferta limitada del 30% de descuento el primer año, vigente hasta el 26 de agosto. adobe.com bloquea WebFetch y curl (timeout), así que la tabla se leyó a través del fragmento oficial de contenido alojado en www.adobe.com. La página de planes solo enlaza a prueba gratuita y no detalla los límites de un plan gratuito permanente, por eso dejo freeTier a null.',
    sourceUrl: 'https://www.adobe.com/products/firefly/plans.html',
  },
  FLUX: {
    name: 'FLUX',
    model: 'freemium',
    freeTier: '10 créditos gratis al registrarse, sin necesidad de tarjeta.',
    plans: [
      {
        name: 'Basic',
        price: '11,90 $/mes',
        notes: '300 créditos al mes; entrada para uso puntual.',
      },
      { name: 'Pro', price: '18,90 $/mes', notes: '800 créditos al mes.' },
      {
        name: 'Max',
        price: '25,90 $/mes',
        notes: '2.000 créditos al mes, el equilibrio para uso habitual.',
      },
      {
        name: 'Pro Max',
        price: '59,90 $/mes',
        notes: '6.000 créditos al mes y el mejor coste por crédito.',
      },
    ],
    notes:
      'Los precios listados corresponden a facturación anual con el 30% de descuento vigente; la tarifa mensual sin descuento va de 16,90 $ a 86,90 $. También se pueden comprar créditos sueltos de un solo pago y hay planes mayores a medida. Los modelos FLUX oficiales de Black Forest Labs (bfl.ai) se venden aparte como API de pago por uso, sin suscripciones.',
    sourceUrl: 'https://genimg.ai/es/price',
  },
  Ideogram: {
    name: 'Ideogram',
    model: 'freemium',
    freeTier:
      'Plan gratuito con 10 créditos lentos por semana, 1 generación simultánea y 2 lienzos, sin créditos prioritarios ni generación privada.',
    plans: [
      {
        name: 'Plus',
        price: '15 $/mes (facturado anualmente, ahorro del 25%)',
        notes:
          '1.000 créditos prioritarios al mes, créditos lentos ilimitados y generación privada.',
      },
      {
        name: 'Pro',
        price: '42 $/mes (facturado anualmente, ahorro del 30%)',
        notes:
          '3.500 créditos prioritarios al mes, generación por lotes y la cola más rápida; el mejor coste por crédito.',
      },
      {
        name: 'Team',
        price: '20 $/usuario/mes (facturado anualmente, ahorro del 33%)',
        notes:
          '1.500 créditos prioritarios por usuario, facturación y administración centralizadas.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Modelos privados entrenados con datos propios, descuentos por volumen en la API y soporte prioritario.',
      },
    ],
    notes:
      'La página muestra por defecto la facturación anual y esos son los importes recogidos; el selector mensual no se pudo capturar, así que sin compromiso anual los precios son más altos (los descuentos indicados son del 25%, 30% y 33%). Se pueden recargar créditos sueltos: 150 créditos prioritarios por 4 $ en Plus y 250 por 4 $ en Pro y Team. La API se factura aparte. ideogram.ai devuelve 403 a WebFetch y a curl, así que la página oficial se leyó mediante un lector de texto.',
    sourceUrl: 'https://ideogram.ai/pricing',
  },
  ElevenLabs: {
    name: 'ElevenLabs',
    model: 'freemium',
    freeTier:
      '10.000 créditos al mes con texto a voz, voz a texto, efectos de sonido, música e imagen, y 3 proyectos en Studio.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: '10.000 créditos al mes para probar la plataforma, sin licencia comercial.',
      },
      {
        name: 'Starter',
        price: '6 $/mes',
        notes: '30.000 créditos, licencia comercial, clonación instantánea de voz y doblaje.',
      },
      {
        name: 'Creator',
        price: '22 $/mes',
        notes:
          '121.000 créditos y clonación profesional de voz; primer mes con 50% de descuento (11 $).',
      },
      {
        name: 'Pro',
        price: '99 $/mes',
        notes: '600.000 créditos y salida de audio de alta calidad, para producción profesional.',
      },
      {
        name: 'Scale',
        price: '299 $/mes',
        notes: '1,8 M de créditos, 3 asientos de espacio de trabajo y colaboración en equipo.',
      },
      {
        name: 'Business',
        price: '990 $/mes',
        notes:
          '6 M de créditos, texto a voz de baja latencia, 10 clones profesionales y 10 asientos.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Para grandes volúmenes y necesidades específicas; contactar con ventas.',
      },
    ],
    notes:
      'Con facturación anual se pagan 10 meses en lugar de 12, es decir dos meses gratis. El consumo se mide en créditos, de modo que el coste real depende del volumen de audio generado.',
    sourceUrl: 'https://elevenlabs.io/pricing',
  },
  'Resemble AI': {
    name: 'Resemble AI',
    model: 'freemium',
    freeTier:
      'Plan Flex a 0 $/mes sin tarjeta, con acceso a la plataforma y a la API y 1 usuario, comprando créditos según uso.',
    plans: [
      {
        name: 'Flex',
        price: '0 $/mes',
        notes:
          'Pago por uso con tarifas por segundo procesado; para probar detección e insights con 1 usuario.',
      },
      {
        name: 'Team',
        price: '350 $/mes (280 $/mes con facturación anual)',
        notes: 'Tarifas de uso más bajas, subidas por lotes y 5 asientos, para equipos pequeños.',
      },
      {
        name: 'Business',
        price: '1.000 $/mes (800 $/mes con facturación anual)',
        notes: 'Integración de calendario para toda la organización, SSO y 20 asientos.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Precio por volumen, SLA, modelos entrenados a medida y despliegue on-premise.',
      },
    ],
    notes:
      'La facturación anual supone un 20% de descuento (ahorro de 840 $ al año en Team y 2.400 $ en Business). Además del precio del plan se consumen créditos por segundo procesado, así que el coste real depende del volumen.',
    sourceUrl: 'https://www.resemble.ai/pricing/',
  },
  Murf: {
    name: 'Murf',
    model: 'freemium',
    freeTier:
      '10 minutos de generación de voz con más de 200 voces y 20 idiomas, sin descargas ni derechos comerciales.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes:
          'Para probar el estudio sin tarjeta; incluye todo lo del plan Business salvo las descargas.',
      },
      {
        name: 'Creator',
        price: '19 $/mes (228 $ facturados anualmente)',
        notes:
          'Plan de entrada para autónomos y creadores, con descargas ilimitadas y derechos comerciales.',
      },
      {
        name: 'Business',
        price: '66 $/mes (792 $ facturados anualmente)',
        notes: 'Licencia de empresa y funciones avanzadas para equipos con mucho volumen.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Acceso ilimitado, seguridad y soporte de nivel corporativo; contactar con ventas.',
      },
    ],
    notes:
      'Los importes mostrados corresponden a facturación anual, con un ahorro del 33% frente al pago mensual. La API de Murf tiene planes y límites propios aparte. murf.ai es una SPA que devuelve solo el esqueleto HTML a WebFetch y a curl, así que la página oficial se leyó mediante un lector de texto que ejecuta JavaScript.',
    sourceUrl: 'https://murf.ai/pricing',
  },
  Colossyan: {
    name: 'Colossyan',
    model: 'freemium',
    freeTier:
      'Plan Starter gratuito sin tarjeta: 20 min/mes con NEO, 15 avatares personalizados, 3 voces y 10 vídeos interactivos al mes.',
    plans: [
      {
        name: 'Starter',
        price: 'Gratis',
        notes:
          "Para quien quiere probar la generación de vídeo con avatares; la web lo presenta como '27 $/mes de valor' pero no se cobra.",
      },
      {
        name: 'Professional',
        price: '59 $/mes',
        notes:
          'Para equipos de formación: 30 min/mes con NEO, 10 min/mes con NEO2, sin marca de agua, exportación SCORM y hasta 3 editores.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Minutos y avatares ilimitados, SSO/SAML, SOC 2 Tipo II y soporte 24/7.',
      },
    ],
    notes:
      'El precio de Professional mostrado (59 $/mes) corresponde a facturación anual, anunciada con un 34 % de descuento frente al mensual; cada miembro adicional cuesta 30 $/mes. Enterprise solo se factura de forma anual.',
    sourceUrl: 'https://www.colossyan.com/pricing',
  },
  Sora: {
    name: 'Sora',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'API sora-2 (720p)',
        price: '0,10 $/segundo',
        notes: 'Generación de vídeo estándar por API; 0,05 $/segundo en modo batch.',
      },
      {
        name: 'API sora-2-pro',
        price: '0,30 $/segundo (720p) a 0,70 $/segundo (1080p)',
        notes: 'Calidad superior por API; en modo batch va de 0,15 a 0,35 $/segundo.',
      },
    ],
    notes:
      'OpenAI discontinuó la app y la web de Sora el 26 de abril de 2026, así que ya no se accede vía suscripción de ChatGPT. Solo queda la API de vídeo, facturada por segundo generado, y OpenAI ya ha anunciado su retirada definitiva el 24 de septiembre de 2026. openai.com devuelve 403 a la consulta automatizada, así que las fechas se han confirmado en el centro de ayuda oficial y los precios en la documentación de la API.',
    sourceUrl: 'https://developers.openai.com/api/docs/pricing',
  },
  Veo: {
    name: 'Veo',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Google AI Plus',
        price: '4,99 €/mes',
        notes:
          'Entrada de gama con acceso básico a generación de vídeo y 400 GB de almacenamiento.',
      },
      {
        name: 'Google AI Pro',
        price: '21,99 €/mes',
        notes:
          'Para uso creativo habitual: generación de vídeo ampliada, prueba limitada de Veo 3.1 Lite, 1.000 créditos mensuales de Flow y 5 TB.',
      },
      {
        name: 'Google AI Ultra',
        price: '99,99 €/mes o 219,99 €/mes',
        notes:
          'Para producción intensiva: límites 5x o 20x, 10.000-25.000 créditos de Flow y acceso anticipado a funciones avanzadas.',
      },
      {
        name: 'API Veo 3.1 (estándar)',
        price: '0,40 $/segundo (720p y 1080p), 0,60 $/segundo (4K)',
        notes: 'Uso por Gemini API para integrarlo en productos propios.',
      },
      {
        name: 'API Veo 3.1 Fast',
        price: '0,10 $/segundo (720p), 0,12 $/segundo (1080p), 0,30 $/segundo (4K)',
        notes: 'Variante rápida y más barata para volumen.',
      },
      {
        name: 'API Veo 3.1 Lite',
        price: '0,05 $/segundo (720p), 0,08 $/segundo (1080p)',
        notes: 'La opción más económica por API, sin 4K.',
      },
    ],
    notes:
      "Veo no se vende suelto: se accede vía suscripciones Google AI (precios en euros para España, tomados de gemini.google/subscriptions) o vía Gemini API pagando por segundo de vídeo generado (precios en dólares). La documentación de la Gemini API indica expresamente 'no disponible' para Veo en el nivel gratuito, y solo se cobra si el vídeo se genera correctamente. El modelo vigente es Veo 3.1.",
    sourceUrl: 'https://gemini.google/subscriptions/',
  },
  Runway: {
    name: 'Runway',
    model: 'freemium',
    freeTier:
      'Plan gratuito con 125 créditos de un solo uso (no se renuevan), 5 GB de almacenamiento y una selección de modelos generativos.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Para probar la herramienta: 125 créditos únicos y modelos limitados.',
      },
      {
        name: 'Standard',
        price: '12 $/mes',
        notes:
          'Para creadores individuales: 625 créditos al mes, todos los modelos de imagen y vídeo, reescalado a 4K y sin marca de agua.',
      },
      {
        name: 'Pro',
        price: '28 $/mes',
        notes:
          'Para uso profesional: 2.250 créditos al mes, voces personalizadas para lip sync y 500 GB de almacenamiento.',
      },
      {
        name: 'Max',
        price: '76 $/mes',
        notes:
          'Para producción a volumen: 9.500 créditos al mes, arrastre de créditos un mes y acceso anticipado a modelos nuevos.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para empresas: créditos a medida, SSO, espacios de equipo, analítica y soporte prioritario.',
      },
    ],
    notes:
      'Los precios indicados son con facturación anual (20 % de descuento); en mensual son 15 $, 35 $ y 95 $ respectivamente. El dominio runwayml.com redirige a runway.com, que es donde está la página de precios actual.',
    sourceUrl: 'https://runway.com/pricing',
  },
  'Pika Labs': {
    name: 'Pika Labs',
    model: 'freemium',
    freeTier:
      '80 créditos de vídeo al mes, solo Pika 2.5 a 480p e imagen a vídeo, con marca de agua y sin uso comercial.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes:
          'Para probar: 80 créditos mensuales, 480p, descargas con marca de agua y sin uso comercial.',
      },
      {
        name: 'Standard',
        price: '8 $/mes',
        notes:
          'Para uso casual: 700 créditos al mes, todas las resoluciones, generaciones rápidas, sin marca de agua y uso comercial permitido.',
      },
      {
        name: 'Pro',
        price: '28 $/mes',
        notes:
          'La opción con mejor relación valor/precio: 2.300 créditos al mes y generaciones más rápidas.',
      },
      {
        name: 'Fancy',
        price: '76 $/mes',
        notes: 'Para volumen alto: 6.000 créditos al mes y las generaciones más rápidas.',
      },
    ],
    notes:
      'Los precios mostrados corresponden a facturación anual. Se pueden comprar créditos adicionales que se acumulan, y el plan se puede cambiar en cualquier momento.',
    sourceUrl: 'https://pika.art/pricing',
  },
  Synthesia: {
    name: 'Synthesia',
    model: 'freemium',
    freeTier: 'Plan Basic gratuito sin tarjeta: 10 minutos de vídeo y 1.200 créditos al mes.',
    plans: [
      {
        name: 'Basic',
        price: '0 $/mes',
        notes:
          'Para probar la plataforma: 10 minutos de vídeo y 1.200 créditos al mes, sin tarjeta.',
      },
      {
        name: 'Starter',
        price: '29 $/mes (18 $/mes anual)',
        notes:
          'Para uso individual: 10 min/mes (120 min/año en anual) y más de 125 avatares de IA.',
      },
      {
        name: 'Creator',
        price: '89 $/mes (64 $/mes anual)',
        notes:
          'El plan más popular: 30 min/mes (360 min/año en anual), más de 180 avatares, 5 avatares personales y acceso a la API.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para grandes organizaciones: minutos ilimitados, avatares personales ilimitados y gestor de cuenta dedicado.',
      },
    ],
    notes:
      'La facturación anual abarata bastante (Starter de 29 $ a 18 $/mes, Creator de 89 $ a 64 $/mes). El consumo se mide tanto en minutos de vídeo como en créditos.',
    sourceUrl: 'https://www.synthesia.io/pricing',
  },
  'GitHub Copilot': {
    name: 'GitHub Copilot',
    model: 'freemium',
    freeTier:
      'Plan Free sin suscripción: 2.000 completados de código y 50 peticiones de chat al mes, con varios modelos y Copilot CLI.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Para empezar: 2.000 completados y 50 peticiones de chat al mes.',
      },
      {
        name: 'Pro',
        price: '10 $/usuario/mes',
        notes:
          'Para desarrolladores individuales: completados ilimitados, agente en la nube, revisión de código y 15 $ de créditos mensuales.',
      },
      {
        name: 'Pro+',
        price: '39 $/usuario/mes',
        notes:
          'Para uso intensivo: acceso a modelos premium como Opus, registros de auditoría y 70 $ de créditos mensuales.',
      },
      {
        name: 'Max',
        price: '100 $/usuario/mes',
        notes:
          'Para power users: acceso prioritario a modelos nuevos y 200 $ de créditos mensuales.',
      },
      {
        name: 'Business',
        price: '19 $/usuario/mes',
        notes: 'Para equipos: créditos compartidos, gestión de licencias y controles de política.',
      },
      {
        name: 'Enterprise',
        price: '39 $/usuario/mes',
        notes:
          'Para despliegue en toda la organización: créditos compartidos mayores (2x Business) e indemnización de propiedad intelectual.',
      },
    ],
    notes:
      'Desde los planes Pro el consumo agéntico se gestiona con créditos mensuales incluidos; superarlos implica facturación por uso adicional. Los precios están en dólares por usuario y mes.',
    sourceUrl: 'https://github.com/features/copilot/plans',
  },
  Cursor: {
    name: 'Cursor',
    model: 'freemium',
    freeTier:
      'Plan Hobby gratuito sin tarjeta, con un número limitado de peticiones al agente y acceso a Composer.',
    plans: [
      {
        name: 'Hobby',
        price: '0 $/mes',
        notes: 'Para probar el editor: peticiones limitadas al agente, sin tarjeta.',
      },
      {
        name: 'Pro',
        price: '20 $/mes',
        notes:
          'Para desarrolladores individuales: límites ampliados de agente, modelos frontera, MCPs, skills, hooks y agentes en la nube.',
      },
      {
        name: 'Pro+',
        price: '60 $/mes',
        notes:
          'Para quien usa el agente a diario: 3x los límites de Pro y 70 $ de uso de API incluido.',
      },
      {
        name: 'Ultra',
        price: '200 $/mes',
        notes:
          'Para uso muy intensivo: 20x los límites de Pro, 400 $ de uso de API incluido y acceso prioritario a novedades.',
      },
      {
        name: 'Teams',
        price: '40 $/usuario/mes',
        notes:
          'Para equipos: facturación centralizada, Bugbot para revisión de código, analítica de uso, modo privacidad y SSO SAML/OIDC.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para grandes organizaciones: uso compartido, facturación por factura/PO, SCIM, registros de auditoría y soporte dedicado.',
      },
    ],
    notes:
      'Los planes incluyen una bolsa de uso de API y a partir de ahí se factura por consumo; Bugbot se cobra aparte por uso. El dominio del lote (cursor.sh) redirige al oficial cursor.com. Los importes de Pro+ y Ultra no se renderizan en la página de precios vía consulta automatizada, así que se han confirmado con búsqueda restringida al dominio oficial cursor.com.',
    sourceUrl: 'https://cursor.com/pricing',
  },
  Tabnine: {
    name: 'Tabnine',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Code Assistant Platform',
        price: '39 $/usuario/mes',
        notes:
          'Para equipos que quieren completado de código y chat en el IDE con control de seguridad: cero retención de código, cifrado extremo a extremo y despliegue SaaS o autoalojado.',
      },
      {
        name: 'Agentic Platform',
        price: '59 $/usuario/mes',
        notes:
          'Para equipos que quieren automatización: todo lo anterior más flujos agénticos, Tabnine CLI, Context Engine con conexiones ilimitadas al repositorio e integración MCP.',
      },
    ],
    notes:
      'Ambos precios son con suscripción anual y la web pide contactar con ventas para cerrar presupuesto. El consumo de LLM se paga aparte: si usas los modelos que provee Tabnine, se factura una cuota de tokens reservada al precio real del proveedor más un 5 % de gestión. Existe además un complemento opcional de Headless Agents para CI/CD con precio separado.',
    sourceUrl: 'https://www.tabnine.com/pricing/',
  },
  Codium: {
    name: 'Codium',
    model: 'paid',
    freeTier:
      'Prueba gratuita de 14 días sin tarjeta con reviews y créditos ilimitados; gratis de forma permanente solo para proyectos open source aceptados en el programa Qodo for Open Source.',
    plans: [
      {
        name: 'Free 14-Day Trial',
        price: '0 $',
        notes:
          'Prueba de 14 días sin tarjeta con reviews y créditos ilimitados sobre las funciones principales.',
      },
      {
        name: 'Pro Team',
        price: '30 $/mes',
        notes:
          'Para equipos de hasta 30 personas: review agéntico de PRs, reglas ilimitadas, integraciones Git e IDE y panel de analítica.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para más de 30 usuarios: SSO/SAML, logs de auditoría, BYOK, despliegue single-tenant u on-premise y CSM dedicado.',
      },
      {
        name: 'Qodo for Open Source',
        price: '0 $',
        notes: 'Gratuito para proyectos open source que cumplan los requisitos del programa.',
      },
    ],
    notes:
      'El plan Pro Team es de 30 $/mes sin compromiso anual e incluye packs de créditos que se compran aparte (aprox. 0,012 $ por crédito, unos 2.500 créditos ≈ 18 reviews/mes, 5.000 ≈ 36, 20.000 ≈ 144), compartidos por todo el equipo y con tope de excedente configurable.',
    sourceUrl: 'https://www.qodo.ai/pricing/',
  },
  LangChain: {
    name: 'LangChain',
    model: 'open-source',
    freeTier:
      'El framework LangChain es open source y gratuito; en la plataforma LangSmith el plan Developer es de 0 $/usuario al mes con 1 asiento y hasta 5.000 trazas base al mes.',
    plans: [
      {
        name: 'Developer',
        price: '0 $/usuario al mes',
        notes:
          'Un solo asiento, hasta 5.000 trazas base al mes y después pago por uso; soporte de comunidad.',
      },
      {
        name: 'Plus',
        price: '39 $/usuario al mes',
        notes:
          'Asientos ilimitados, hasta 10.000 trazas base al mes, acceso a Deployment y Engine, un despliegue serverless pequeño gratis y soporte por email.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Despliegue self-hosted o híbrido, SSO/ABAC/RBAC a medida, SLA de soporte, formación y facturación anual.',
      },
    ],
    notes:
      'Las librerías de LangChain y LangGraph son gratuitas; lo que se paga es la plataforma LangSmith. Al superar las trazas incluidas se factura por uso, y el cómputo y almacenamiento se cobran en unidades propias (1,50 $ por LCU y 1,00 $ por LSU). El coste de los modelos de IA (OpenAI, Anthropic, etc.) va aparte.',
    sourceUrl: 'https://www.langchain.com/pricing',
  },
  Perplexity: {
    name: 'Perplexity',
    model: 'freemium',
    freeTier:
      'Plan gratuito con búsquedas ilimitadas y un número limitado de búsquedas Pro al día.',
    plans: [
      {
        name: 'Pro',
        price: '20 $/mes',
        notes:
          'Para uso individual intensivo: búsquedas Pro ampliadas, elección de modelos y subida de archivos.',
      },
      {
        name: 'Max',
        price: '200 $/mes (2.000 $/año)',
        notes:
          'Nivel superior para usuarios avanzados, con los límites más altos y acceso prioritario a novedades.',
      },
      {
        name: 'Enterprise Pro',
        price: '40 $/usuario al mes (400 $/usuario al año)',
        notes:
          'Para empresas: controles de administración y seguridad; unos 30 $/usuario al mes para centros educativos y entidades sin ánimo de lucro.',
      },
      {
        name: 'Enterprise Max',
        price: '325 $/usuario al mes (3.250 $/usuario al año)',
        notes: 'Plan empresarial de gama alta con los límites y capacidades máximas.',
      },
    ],
    notes:
      'La facturación anual supone en torno a un 20 % de descuento frente a la mensual. Todas las URL de perplexity.ai devolvieron 403 a la consulta directa, así que las cifras proceden de búsquedas restringidas al dominio oficial (páginas de precios y centro de ayuda de Perplexity), no de la lectura directa de la página; por eso la confianza se marca como baja. La API de Perplexity (Sonar) se factura aparte por uso.',
    sourceUrl: 'https://www.perplexity.ai/hub/pricing',
  },
  AutoGPT: {
    name: 'AutoGPT',
    model: 'open-source',
    freeTier:
      'La versión autoalojada es gratuita y open source (se despliega con Docker Compose aportando tus propias claves de API); en la nube no hay plan gratuito permanente.',
    plans: [
      {
        name: 'Self-Hosted',
        price: '0 $',
        notes:
          'Instalación propia con Docker Compose; pagas solo la infraestructura y las API de terceros que uses.',
      },
      {
        name: 'Pro',
        price: '42,50 $/mes (facturación anual)',
        notes:
          'Nube gestionada con acceso a los principales modelos, constructor visual, agentes continuos, programación y disparadores por eventos.',
      },
      {
        name: 'Max',
        price: '272,00 $/mes (facturación anual)',
        notes:
          'Todo lo de Pro con 8,5 veces más capacidad de uso, 5 veces más almacenamiento, integraciones ampliadas y soporte prioritario.',
      },
      {
        name: 'Team',
        price: 'Presupuesto a medida',
        notes:
          'Anunciado como próximamente: espacios multiusuario, controles de administración y facturación centralizada.',
      },
    ],
    notes:
      'La página oficial solo muestra precios con facturación anual (no publica el importe mensual suelto). Además de la cuota, la ejecución de agentes se paga por uso desde un monedero de créditos en todos los planes, y en la versión autoalojada el coste real son la infraestructura y las claves de API de los modelos.',
    sourceUrl: 'https://agpt.co/pricing',
  },
  AgentGPT: {
    name: 'AgentGPT',
    model: 'freemium',
    freeTier: 'Uso gratuito limitado a 5 ejecuciones de agente al día en la web (versión Beta).',
    plans: [
      {
        name: 'Pro',
        price: '40 $/mes',
        notes:
          '30 agentes al día, acceso a GPT-4 y GPT-3.5-Turbo 16k, 25 bucles por agente, búsqueda web ilimitada, plugins y soporte prioritario.',
      },
    ],
    notes:
      'Los precios se leyeron en la página de suscripción del propio producto (agentgpt.reworkd.ai/plan), ya que la portada no publica tarifas. El proyecto sigue etiquetado como Beta y su código es open source, por lo que también puede autoalojarse asumiendo el coste de las claves de API.',
    sourceUrl: 'https://agentgpt.reworkd.ai/plan',
  },
  Zapier: {
    name: 'Zapier',
    model: 'freemium',
    freeTier:
      'Plan Free con 100 tareas al mes, Zaps ilimitados pero solo de dos pasos y acceso básico a las funciones de IA.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: '100 tareas al mes y automatizaciones de dos pasos, para probar la herramienta.',
      },
      {
        name: 'Professional',
        price: 'Desde 19,99 $/mes (750 tareas, facturación anual)',
        notes:
          'Flujos multipaso, apps premium ilimitadas, webhooks, filtros y rutas; escala por volumen (39 $ por 1.500 tareas, 89 $ por 5.000, 489 $ por 100.000).',
      },
      {
        name: 'Team',
        price: 'Desde 69,00 $/mes (2.000 tareas, facturación anual)',
        notes:
          'Todo lo de Professional para hasta 25 usuarios, con Zaps y conexiones compartidas, SAML SSO y soporte prioritario.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Usuarios ilimitados, controles avanzados de administración, SCIM, retención de datos personalizada y gestor técnico de cuenta.',
      },
    ],
    notes:
      'Los precios mostrados corresponden a facturación anual, que supone un 33 % de descuento frente a la mensual; el coste sube según el número de tareas contratadas (hasta 3.389 $/mes por 2.000.000 de tareas en Professional). Zapier factura en 19 monedas, así que el importe en euros puede variar según el país.',
    sourceUrl: 'https://zapier.com/pricing',
  },
  n8n: {
    name: 'n8n',
    model: 'open-source',
    freeTier:
      'La Community Edition autoalojada es gratuita y sin límite de ejecuciones; en la nube solo hay prueba gratuita sin tarjeta, no un plan gratuito permanente.',
    plans: [
      {
        name: 'Community Edition (autoalojada)',
        price: '0 €',
        notes:
          'Versión gratuita para instalar en tu propio servidor; pagas solo la infraestructura.',
      },
      {
        name: 'Starter',
        price: '20 €/mes (facturación anual)',
        notes:
          '2.500 ejecuciones con pasos ilimitados, 1 proyecto compartido, 5 ejecuciones concurrentes y usuarios ilimitados.',
      },
      {
        name: 'Pro',
        price: '50 €/mes (facturación anual)',
        notes:
          '10.000 ejecuciones, 3 proyectos, 20 ejecuciones concurrentes, roles de administración, variables globales e historial de flujos.',
      },
      {
        name: 'Business',
        price: '667 €/mes (facturación anual)',
        notes:
          '40.000 ejecuciones, opción autoalojada con licencia, 6 proyectos, SSO/SAML/LDAP y control de versiones con Git.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Volumen de ejecuciones a medida, proyectos ilimitados, 200+ ejecuciones concurrentes, gestor de secretos externo y soporte con SLA.',
      },
    ],
    notes:
      'Los precios publicados son con facturación anual y en euros; incluyen créditos de IA mensuales (2.300 en Starter, hasta 13.700 en Pro). Las pruebas de Starter y Pro no piden tarjeta. n8n es fair-code, no OSI estricto, pero su código está disponible y la edición comunitaria es gratuita.',
    sourceUrl: 'https://n8n.io/pricing/',
  },
  Make: {
    name: 'Make',
    model: 'freemium',
    freeTier:
      'Plan Free con hasta 1.000 créditos al mes, constructor visual, más de 3.000 apps e intervalo mínimo de 15 minutos entre ejecuciones.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes:
          'Hasta 1.000 créditos al mes con routers y filtros, pensado para probar la plataforma.',
      },
      {
        name: 'Core',
        price: '9 $/mes',
        notes:
          '10.000 créditos ampliables, escenarios activos ilimitados, programación al minuto y acceso a la API de Make.',
      },
      {
        name: 'Pro',
        price: '16 $/mes',
        notes:
          'Todo lo de Core más ejecución prioritaria, variables personalizadas y búsqueda de texto completo en los registros.',
      },
      {
        name: 'Teams',
        price: '29 $/mes',
        notes:
          'Todo lo de Pro más gestión de equipos y roles y plantillas de escenarios compartidas.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Funciones personalizadas, integraciones empresariales, soporte 24/7, protección frente a excedentes y seguridad avanzada.',
      },
    ],
    notes:
      'La facturación anual supone un ahorro del 15 % o más frente a la mensual, y todos los planes de pago escalan el precio según los créditos contratados. Los importes se consultaron en la versión internacional de la web, en dólares.',
    sourceUrl: 'https://www.make.com/en/pricing',
  },
  'Power Automate': {
    name: 'Power Automate',
    model: 'freemium',
    freeTier:
      'Prueba gratuita de 30 días para experimentar con flujos en la nube y conectores estándar; los usuarios con licencia de Microsoft 365 tienen capacidades básicas incluidas.',
    plans: [
      {
        name: 'Prueba gratuita',
        price: '0 $',
        notes: '30 días para probar flujos en la nube basados en interfaz y conectores estándar.',
      },
      {
        name: 'Power Automate Premium',
        price: '15,00 $/usuario al mes (pago anual)',
        notes:
          'Flujos en la nube y de escritorio asistidos (RPA), minería de procesos y tareas y acceso a Dataverse.',
      },
      {
        name: 'Power Automate Process',
        price: '150,00 $/bot al mes (pago anual)',
        notes:
          'Flujos de escritorio desatendidos (RPA) asociados a un proceso concreto, no a un usuario.',
      },
      {
        name: 'Power Automate Hosted Process',
        price: '215,00 $/bot al mes (pago anual)',
        notes: 'Como Process pero con máquina virtual alojada por Microsoft en Azure.',
      },
      {
        name: 'Process Mining Add-on',
        price: '5.000,00 $/inquilino al mes (pago anual)',
        notes:
          'Complemento de minería de procesos con 100 GB de almacenamiento; requiere el plan Premium.',
      },
      {
        name: 'Microsoft Copilot Studio',
        price: '200,00 $/mes por 25.000 créditos (pago anual)',
        notes:
          'Capacidades de IA generativa y conversacional, creación de diálogos y analítica integrada.',
      },
    ],
    notes:
      'Los precios corresponden a la web estadounidense de Microsoft y son con pago anual; en la web española los importes se muestran en euros y pueden variar. Los conectores premium y la RPA desatendida requieren licencias adicionales, y el consumo de IA se paga con créditos aparte.',
    sourceUrl: 'https://www.microsoft.com/en-us/power-platform/products/power-automate/pricing',
  },
  'Notion AI': {
    name: 'Notion AI',
    model: 'freemium',
    freeTier:
      'Plan Free con bloques ilimitados para uso individual (limitados a partir de 2 miembros), archivos de hasta 5 MB y acceso de prueba limitado a las funciones de IA.',
    plans: [
      {
        name: 'Free',
        price: '0 €/mes',
        notes:
          'Para uso individual, con acceso de prueba a la IA y funciones básicas de bases de datos, sitios y formularios.',
      },
      {
        name: 'Plus',
        price: '9,50 €/miembro/mes',
        notes:
          'Para equipos pequeños: bloques ilimitados, historial de 30 días, sitios y formularios personalizados; la IA sigue siendo de prueba.',
      },
      {
        name: 'Business',
        price: '19,50 €/miembro/mes',
        notes:
          'Primer plan con Notion AI completo: Notion Agent, notas de reunión con IA, búsqueda empresarial y SAML SSO.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para grandes organizaciones: retención cero de datos con los proveedores de LLM, SCIM y controles de seguridad avanzados.',
      },
    ],
    notes:
      'Notion AI ya no se vende como complemento con precio propio: viene incluido en Business y Enterprise, y en Free/Plus solo como prueba limitada. Los agentes personalizados consumen créditos aparte, a 10 € por cada 1.000 créditos al mes. Los precios mostrados corresponden a facturación anual.',
    sourceUrl: 'https://www.notion.com/pricing',
  },
  'Microsoft 365 Copilot': {
    name: 'Microsoft 365 Copilot',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Microsoft 365 Copilot (complemento)',
        price: '15,60 €/usuario/mes',
        notes:
          'Precio con compromiso anual (21,84 €/usuario/mes sin compromiso); se añade sobre una suscripción de Microsoft 365 Business ya existente.',
      },
      {
        name: 'Microsoft 365 Business Standard + Copilot',
        price: '20,36 €/usuario/mes',
        notes: 'Paquete con Teams incluido y compromiso anual (24,43 €/usuario/mes en mensual).',
      },
      {
        name: 'Microsoft 365 Business Premium + Copilot',
        price: '27,73 €/usuario/mes',
        notes:
          'Paquete con Teams y seguridad avanzada, compromiso anual (33,28 €/usuario/mes en mensual).',
      },
      {
        name: 'Microsoft 365 Business Standard EEA (sin Teams) + Copilot',
        price: '17,58 €/usuario/mes',
        notes:
          'Variante para el Espacio Económico Europeo sin Teams, con compromiso anual (21,10 €/usuario/mes en mensual).',
      },
      {
        name: 'Microsoft 365 Business Premium EEA (sin Teams) + Copilot',
        price: '24,94 €/usuario/mes',
        notes:
          'Variante EEE sin Teams con seguridad avanzada, compromiso anual (29,93 €/usuario/mes en mensual).',
      },
    ],
    notes:
      'Todos los precios son sin IVA y para España. No existe versión gratuita de Microsoft 365 Copilot: requiere licencia de Microsoft 365 Business elegible además del complemento.',
    sourceUrl: 'https://www.microsoft.com/es-es/microsoft-365/copilot/business',
  },
  Gamma: {
    name: 'Gamma',
    model: 'freemium',
    freeTier:
      'Plan Free con funciones básicas de IA (límite de 50.000 tokens de entrada), sin tarjeta y con la marca de Gamma en las presentaciones publicadas.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Para probar la herramienta: IA básica con tope de tokens y badge de Gamma.',
      },
      {
        name: 'Plus',
        price: '8 $/mes',
        notes: '1.000 créditos al mes y eliminación de la marca de Gamma.',
      },
      {
        name: 'Pro',
        price: '20 $/mes',
        notes:
          '4.000 créditos al mes, modelos de imagen premium, marca propia, analíticas, dominios personalizados y acceso a la API.',
      },
      {
        name: 'Teams / Business',
        price: 'Presupuesto a medida',
        notes: 'Opciones para organizaciones con facturación por miembro.',
      },
    ],
    notes:
      'gamma.app devuelve 403 a la consulta automática, así que los precios provienen de búsqueda restringida al dominio oficial (gamma.app y help.gamma.app) y no de la página vista directamente; conviene revalidarlos. La facturación anual aplica un 28 % de descuento con los mismos créditos mensuales, la facturación es por miembro y los créditos no usados se acumulan hasta el doble del plan.',
    sourceUrl: 'https://gamma.app/pricing',
  },
  'Canva Magic Studio': {
    name: 'Canva Magic Studio',
    model: 'freemium',
    freeTier:
      'Canva Free da acceso al editor y a un uso limitado de las funciones de IA de Magic Studio (créditos mensuales limitados).',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Editor completo con plantillas básicas y uso limitado de las herramientas de IA.',
      },
      {
        name: 'Business',
        price: '20 $/persona/mes',
        notes:
          'Sin mínimo de usuarios: kit de marca, colaboración y funciones de IA para equipos pequeños.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes: 'Para grandes organizaciones con control de marca, permisos y seguridad avanzada.',
      },
    ],
    notes:
      'canva.com devuelve 403 a la consulta automática tanto en la página de precios en español como en la inglesa; el precio de Business procede de una búsqueda restringida al dominio oficial (canva.com/newsroom) y no he podido confirmar la cifra exacta de Canva Pro. Magic Studio no se vende por separado: es el conjunto de funciones de IA integradas y su uso se mide en créditos según el plan. Canva Teams ya no admite nuevas altas.',
    sourceUrl: 'https://www.canva.com/en/pricing/',
  },
  'Power BI': {
    name: 'Power BI',
    model: 'freemium',
    freeTier:
      'Cuenta gratuita para crear informes interactivos de forma individual, sin tarjeta, pero sin poder compartirlos con otros usuarios.',
    plans: [
      {
        name: 'Cuenta gratuita',
        price: '0 €/mes',
        notes: 'Creación y análisis de informes en solitario; para compartir hay que subir a Pro.',
      },
      {
        name: 'Power BI Pro',
        price: '12,10 €/usuario/mes',
        notes:
          'Publicar y compartir informes; incluido de serie en Microsoft 365 E5 y Office 365 E5.',
      },
      {
        name: 'Power BI Premium por usuario',
        price: '20,80 €/usuario/mes',
        notes:
          'Todo lo de Pro más modelos de mayor tamaño y actualizaciones más frecuentes, para perfiles de datos.',
      },
      {
        name: 'Power BI Embedded / capacidad Microsoft Fabric',
        price: 'Presupuesto a medida',
        notes:
          'Capacidad reservada o de pago por uso para incrustar informes en aplicaciones propias.',
      },
    ],
    notes:
      'Precios para España con facturación anual y sin IVA. Las funciones de Copilot en Power BI no se facturan por usuario: requieren capacidad de Microsoft Fabric, que se paga aparte.',
    sourceUrl: 'https://www.microsoft.com/es-es/power-platform/products/power-bi/pricing',
  },
  Tableau: {
    name: 'Tableau',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Tableau Cloud Standard - Creator',
        price: '75 $/usuario/mes',
        notes:
          'Licencia de autor completa (facturación anual); toda implantación necesita al menos un Creator.',
      },
      {
        name: 'Tableau Cloud Standard - Explorer',
        price: '42 $/usuario/mes',
        notes: 'Para quien explora y modifica cuadros de mando existentes, facturado anualmente.',
      },
      {
        name: 'Tableau Cloud Standard - Viewer',
        price: '15 $/usuario/mes',
        notes: 'Solo consulta de informes publicados, facturado anualmente.',
      },
      {
        name: 'Tableau Cloud Enterprise - Creator',
        price: '115 $/usuario/mes',
        notes: 'Edición Enterprise con gobernanza y funciones avanzadas, facturación anual.',
      },
      {
        name: 'Tableau Cloud Enterprise - Explorer',
        price: '70 $/usuario/mes',
        notes: 'Explorer dentro de la edición Enterprise, facturación anual.',
      },
      {
        name: 'Tableau Cloud Enterprise - Viewer',
        price: '35 $/usuario/mes',
        notes: 'Viewer dentro de la edición Enterprise, facturación anual.',
      },
    ],
    notes:
      'tableau.com devuelve 403 a la consulta automática, así que las cifras provienen de una búsqueda restringida al dominio oficial (tableau.com) y no de la página vista directamente. Todos los productos exigen contrato anual. La página de IA de Tableau no publica precio propio para Tableau AI/Agentforce: se comercializa dentro de las ediciones superiores o con presupuesto, y no hay plan gratuito más allá de la prueba.',
    sourceUrl: 'https://www.tableau.com/pricing/cloud',
  },
  Bolt: {
    name: 'Bolt',
    model: 'freemium',
    freeTier:
      'Plan gratuito con 300.000 tokens diarios y hasta 1.000.000 al mes, proyectos públicos y privados, bases de datos ilimitadas y hosting con la marca de Bolt.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes:
          'Para probar: 300.000 tokens al día, subidas de hasta 10 MB y badge de Bolt en el sitio publicado.',
      },
      {
        name: 'Pro',
        price: '25 $/mes',
        notes:
          'Desde 10 millones de tokens al mes sin límite diario, sin marca de Bolt, dominio propio y edición de imágenes con IA.',
      },
      {
        name: 'Teams',
        price: '30 $/miembro/mes',
        notes:
          'Todo lo de Pro con facturación centralizada, control de acceso por equipo y registros NPM privados.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'SSO, auditorías, soporte dedicado 24/7 e integraciones y gobernanza de datos a medida.',
      },
    ],
    notes:
      'El consumo se mide en tokens y los no usados se acumulan al mes siguiente en los planes de pago; hay niveles superiores de tokens dentro de Pro y Teams con precio creciente.',
    sourceUrl: 'https://bolt.new/pricing',
  },
  Grammarly: {
    name: 'Grammarly',
    model: 'freemium',
    freeTier:
      'Plan gratuito con corrección de ortografía y gramática, detección de tono y 100 indicaciones de IA al mes.',
    plans: [
      {
        name: 'Free',
        price: '0 €/mes',
        notes: 'Corrección básica y 100 usos de IA al mes, suficiente para uso ocasional.',
      },
      {
        name: 'Pro',
        price: '12 €/mes',
        notes:
          '2.000 indicaciones de IA por miembro y mes, reescritura de frases, ajuste de tono, detección de plagio y de texto generado por IA; incluye 7 días de prueba.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'IA ilimitada por miembro, SAML/SCIM, cifrado BYOK, prevención de pérdida de datos y soporte dedicado.',
      },
    ],
    notes:
      'El precio se muestra en euros para España y corresponde a facturación anual; la modalidad mensual es más cara. Las funciones avanzadas de reescritura siguen limitadas al inglés.',
    sourceUrl: 'https://www.grammarly.com/plans',
  },
  Looka: {
    name: 'Looka',
    model: 'freemium',
    freeTier:
      'Puedes generar y personalizar logos ilimitados gratis; solo pagas cuando quieres descargar los archivos.',
    plans: [
      {
        name: 'Basic Logo Package',
        price: '20 $ pago unico',
        notes:
          'Un archivo PNG del logo, con ediciones ilimitadas de color, fuente y disposicion incluso despues de comprar.',
      },
      {
        name: 'Premium Logo Package',
        price: '65 $ pago unico',
        notes:
          'Multiples formatos y variaciones del logo (vectoriales incluidos) para quien necesita el kit completo de archivos.',
      },
      {
        name: 'Brand Kit Subscription',
        price: '96 $/año',
        notes:
          'Suscripcion anual con acceso a todas las plantillas y activos de marca generados con tu logo, colores y tipografias.',
      },
      {
        name: 'Brand Kit Web',
        price: '129 $/año',
        notes: 'Todo el Brand Kit mas la creacion y alojamiento de una web de marca.',
      },
      {
        name: 'Brand Kit Web (Ecommerce)',
        price: '299 $/año',
        notes: 'Brand Kit mas web con funciones de tienda online.',
      },
    ],
    notes:
      'Los paquetes de logo son pago unico y el Brand Kit es suscripcion facturada anualmente; son productos distintos y compatibles. La web de Looka devuelve 403 a la consulta automatica, asi que los precios se han obtenido mediante busqueda restringida al dominio oficial looka.com (pagina looka.com/pricing y centro de ayuda help.looka.com), coincidentes en dos consultas independientes.',
    sourceUrl: 'https://looka.com/pricing/',
  },
  Brandmark: {
    name: 'Brandmark',
    model: 'freemium',
    freeTier:
      'Genera logos ilimitados gratis y sin crear cuenta; solo pagas si quieres descargar los archivos.',
    plans: [
      {
        name: 'Basic',
        price: '35 $ pago unico',
        notes: 'Archivos del logo en PNG y formato vectorial, para quien solo necesita el logo.',
      },
      {
        name: 'Designer',
        price: '95 $ pago unico',
        notes:
          'Archivos fuente editables, revisiones de diseño ilimitadas, guia de marca, diseños web, tarjetas, activos para redes y presentaciones.',
      },
      {
        name: 'Enterprise',
        price: '195 $ pago unico',
        notes:
          'Todo lo del plan Designer mas hasta 10 conceptos hechos a mano y la descarga de la tipografia.',
      },
    ],
    notes:
      "Todos los planes son pago unico, sin cuotas mensuales ni suscripcion: se indica expresamente 'No monthly charges' y el acceso a las herramientas de marca es permanente tras la compra.",
    sourceUrl: 'https://brandmark.io/pricing/',
  },
  SentinelOne: {
    name: 'SentinelOne',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Singularity Core',
        price: '69,99 $/endpoint al año',
        notes:
          'EDR de entrada pensado para sustituir al antivirus tradicional en equipos de trabajo.',
      },
      {
        name: 'Singularity Complete',
        price: '179,99 $/endpoint al año',
        notes:
          'EDR y XDR completo con respuesta automatizada, para empresas con equipo de seguridad.',
      },
      {
        name: 'Singularity Commercial',
        price: '229,99 $/endpoint al año',
        notes: 'Añade capacidades avanzadas de deteccion y visibilidad sobre el paquete Complete.',
      },
      {
        name: 'Singularity Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Nivel superior con analista SOC de IA agentica, visibilidad forense total y onboarding guiado; hay que contactar con ventas.',
      },
    ],
    notes:
      'Los precios publicados corresponden a la franja de 5 a 100 puestos de trabajo y son anuales por endpoint. SentinelOne avisa de que toda compra se formaliza a traves de un partner autorizado, por lo que las cifras de la web no son el precio final. La url /platform/pricing/ da 404: la pagina viva es /platform-packages/.',
    sourceUrl: 'https://www.sentinelone.com/platform-packages/',
  },
  CrowdStrike: {
    name: 'CrowdStrike',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Falcon Go',
        price: '59,99 $/dispositivo al año (7,99 $/dispositivo al mes)',
        notes:
          'Antivirus de nueva generacion para pymes, con un maximo de 100 dispositivos por compra.',
      },
      {
        name: 'Falcon Pro',
        price: '99,99 $/dispositivo al año (14,99 $/dispositivo al mes)',
        notes:
          'Añade EDR e inteligencia de amenazas para equipos de TI que quieren investigar incidentes.',
      },
      {
        name: 'Falcon Enterprise',
        price: '184,99 $/dispositivo al año (19,99 $/dispositivo al mes)',
        notes: 'EDR/XDR completo con busqueda de amenazas gestionada, para organizaciones con SOC.',
      },
      {
        name: 'Falcon Complete Next-Gen MDR',
        price: 'Presupuesto a medida',
        notes:
          'Servicio gestionado 24/7 en el que CrowdStrike opera la deteccion y respuesta por ti.',
      },
    ],
    notes:
      'Prueba gratuita de 15 dias con Falcon Prevent, Device Control y soporte Express, sin tarjeta. Existe facturacion mensual y anual, y las suscripciones anuales admiten cancelacion con reembolso completo durante los primeros 30 dias. Los modulos adicionales se contratan aparte.',
    sourceUrl: 'https://www.crowdstrike.com/en-us/pricing/',
  },
  CrewAI: {
    name: 'CrewAI',
    model: 'open-source',
    freeTier:
      'Plan Basic gratuito (0 $) con 50 ejecuciones de flujo al mes, editor visual, copiloto de IA e integracion con GitHub.',
    plans: [
      {
        name: 'Basic',
        price: '0 $',
        notes: 'Gratis, hasta 50 ejecuciones de flujo al mes, para probar y proyectos pequeños.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Añade gobernanza (SSO, RBAC, identidad de cargas, redaccion de PII), despliegue flexible y un onboarding de 45 dias; sin cifras publicas.',
      },
    ],
    notes:
      'El framework CrewAI es codigo abierto y gratuito de instalar; lo que se cobra es la plataforma alojada CrewAI AMP. El coste real de usarlo incluye siempre las llamadas a la API del modelo que conectes, que se facturan aparte por el proveedor.',
    sourceUrl: 'https://www.crewai.com/pricing',
  },
  LangGraph: {
    name: 'LangGraph',
    model: 'open-source',
    freeTier:
      'La libreria LangGraph es MIT y de uso gratuito; en la nube, el plan Developer cuesta 0 $ por puesto e incluye 5.000 trazas base al mes y hasta 10 sandboxes.',
    plans: [
      {
        name: 'Developer',
        price: '0 $/puesto al mes',
        notes:
          'Un solo usuario, 5.000 trazas base al mes y despues pago por uso; soporte de comunidad.',
      },
      {
        name: 'Plus',
        price: '39 $/puesto al mes',
        notes:
          'Puestos ilimitados, 10.000 trazas base al mes, despliegue con una instancia serverless pequeña incluida.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Facturacion anual por factura, despliegue autoalojado o hibrido, SSO propio, control de accesos por rol, SLA y soporte dedicado.',
      },
    ],
    notes:
      'LangGraph en si es open source bajo licencia MIT y gratis; lo que se paga es la plataforma LangSmith donde se despliegan y observan los agentes. Al margen del puesto se factura el consumo: 1,50 $ por LCU de computo y 1,00 $ por LSU de almacenamiento, mas las trazas que superen la cuota base. Hay programa para startups con tarifas reducidas y 10.000 $ en creditos.',
    sourceUrl: 'https://www.langchain.com/pricing',
  },
  Haystack: {
    name: 'Haystack',
    model: 'open-source',
    freeTier:
      'El framework Haystack es open source y gratuito; deepset Studio ofrece un plan gratuito de 0 $ con 1 espacio de trabajo, 1 usuario, 100 horas de pipeline, 50 archivos (máx. 10 MB) y 2 pipelines de desarrollo.',
    plans: [
      {
        name: 'Haystack (framework)',
        price: 'Gratis',
        notes: 'Framework open source para construir agentes y aplicaciones RAG; se autoaloja.',
      },
      {
        name: 'Studio',
        price: '0 $',
        notes:
          'Para prototipar en la nube de deepset: 1 usuario, 1 workspace, 100 horas de pipeline y soporte comunitario.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Para equipos en producción: workspaces y usuarios ilimitados, pipelines ilimitados, equipo de cuenta y canal privado de Slack.',
      },
    ],
    notes:
      'El framework no cuesta nada: el gasto real es la infraestructura donde lo despliegas y las APIs de LLM de terceros que uses. La plataforma comercial de deepset no publica cifras para Enterprise (precio flexible según tamaño de empresa) y también hay soporte Haystack Enterprise sin precio público.',
    sourceUrl: 'https://www.deepset.ai/pricing',
  },
  Writesonic: {
    name: 'Writesonic',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Starter',
        price: '79 $/mes',
        notes:
          'Facturado anualmente (ahorra 240 $/año): seguimiento en ChatGPT, Gemini y Google AI Overviews, 50 prompts y 50 respuestas diarias, 15 artículos IA/mes y 10 auditorías de sitio.',
      },
      {
        name: 'Basic',
        price: '199 $/mes',
        notes:
          'Facturado anualmente (ahorra 600 $/año): SEO + GEO en una plataforma, 100 prompts y 300 respuestas diarias, 25 artículos IA/mes, 2 usuarios.',
      },
      {
        name: 'Growth',
        price: '399 $/mes',
        notes:
          'Facturado anualmente (ahorra 1.200 $/año): añade análisis de sentimiento, Action Center y flujos agénticos, 200 prompts y 600 respuestas diarias, 50 artículos IA/mes.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Seguimiento en 10 plataformas de IA, Action Center completo, workflows agénticos sin límite y equipo de estrategia dedicado.',
      },
    ],
    notes:
      'Los precios mostrados son con facturación anual (descuento del 20 %); con pago mensual son más caros. No hay plan gratuito permanente, solo prueba gratuita sin tarjeta y algunas herramientas sueltas gratis (generador de llms.txt, AI Crawl Checker).',
    sourceUrl: 'https://writesonic.com/pricing',
  },
  DeepL: {
    name: 'DeepL',
    model: 'freemium',
    freeTier:
      'Versión gratuita del traductor con 50.000 caracteres por usuario al mes y 1 traducción de archivo.',
    plans: [
      {
        name: 'Individual',
        price: '8,74 US$/mes',
        notes:
          'Facturación anual: 300.000 caracteres/mes, 3 traducciones de archivo, 1 glosario y traducción de páginas web completas; para usuarios sueltos.',
      },
      {
        name: 'Team',
        price: '28,74 US$ por usuario/mes',
        notes:
          'Facturación anual: 1.000.000 de caracteres por usuario/mes, 20 archivos, 5 glosarios, gestión de usuarios, estadísticas y SSO.',
      },
      {
        name: 'Business',
        price: '57,49 US$ por usuario/mes',
        notes:
          'Facturación anual: sin límite de caracteres (uso razonable), 100 archivos/mes, memorias de traducción, Write Pro incluido y 99,0 % de disponibilidad.',
      },
      {
        name: 'Enterprise',
        price: 'Precio personalizado',
        notes:
          'Límites a medida, BYOK, 99,9 % de disponibilidad, equipo de cuenta exclusivo y soporte premium.',
      },
      {
        name: 'Complemento DeepL Write Pro',
        price: '7,49 US$ por usuario/mes',
        notes:
          'Add-on de asistente de escritura con facturación anual, se suma a Individual o Team.',
      },
    ],
    notes:
      'DeepL ha renombrado sus planes: ya no son Starter/Advanced/Ultimate sino Individual/Team/Business/Enterprise. Los precios listados son con facturación anual (DeepL indica un ahorro del 16 % frente a la mensual) y la página los sirvió en dólares por geolocalización de EE. UU.; desde España se muestran en euros. La API de DeepL se factura aparte con sus propios planes. La página es 100 % JavaScript y devolvía HTML sin cifras a WebFetch: se leyó vía proxy de texto de la misma URL oficial.',
    sourceUrl: 'https://www.deepl.com/es/pro?cta=header-pro',
  },
  HeyGen: {
    name: 'HeyGen',
    model: 'freemium',
    freeTier:
      'Plan Free de 0 $/mes con 3 vídeos al mes de hasta 1 minuto, 1 avatar personalizado, más de 30 idiomas y 500+ avatares de stock.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes: 'Para probar: 3 vídeos/mes de máximo 1 minuto y 1 avatar personalizado.',
      },
      {
        name: 'Creator',
        price: '29 $/mes (24 $/mes anual)',
        notes:
          '600 créditos al mes, vídeos de hasta 30 min, exportación en 1080p, clonación de voz y 175+ idiomas.',
      },
      {
        name: 'Pro',
        price: '49 $/mes',
        notes:
          '1.000 créditos al mes, exportación 4K y acceso a modelos de IA avanzados; para creadores intensivos.',
      },
      {
        name: 'Business',
        price: '149 $/mes + 20 $ por asiento adicional',
        notes:
          '1.500 créditos al mes, vídeos de hasta 60 min, 5 avatares personalizados, colaboración en equipo e integraciones SCORM.',
      },
      {
        name: 'Enterprise',
        price: 'Contactar con ventas',
        notes:
          'Sin límite de duración de vídeo, funciones a medida, soporte prioritario y gestor dedicado.',
      },
    ],
    notes:
      'HeyGen funciona por créditos y el consumo depende del avatar usado (Avatar III cuesta 3 créditos/min y Avatar IV/V hasta 20 créditos/min), así que el coste real varía mucho según el tipo de vídeo. La facturación anual abarata el plan Creator.',
    sourceUrl: 'https://www.heygen.com/pricing',
  },
  AskYourPDF: {
    name: 'AskYourPDF',
    model: 'freemium',
    freeTier:
      'Plan gratuito de 0 $/mes con 1 documento al día de hasta 100 páginas y 15 MB, 50 preguntas y 3 conversaciones diarias, con GPT-5 Mini.',
    plans: [
      {
        name: 'Free',
        price: '0 $/mes',
        notes:
          'Para probar: 1 documento diario de hasta 100 páginas, 50 preguntas y 3 conversaciones al día.',
      },
      {
        name: 'Premium',
        price: '11,99 $/mes',
        notes:
          'Facturación anual: hasta 2.500 páginas por documento, 50 documentos diarios, 10 créditos, extensión de Chrome, OCR y modelos como Claude 4.5 Sonnet y Opus mediante créditos.',
      },
      {
        name: 'Pro',
        price: '14,99 $/mes',
        notes:
          'Facturación anual: 6.000 páginas por documento, 150 documentos diarios, 100.000 preguntas al día, 30 créditos y soporte prioritario.',
      },
      {
        name: 'Enterprise',
        price: 'Presupuesto a medida',
        notes:
          'Páginas, preguntas y conversaciones ilimitadas, 1.000 documentos diarios y créditos personalizados.',
      },
    ],
    notes:
      'Los precios mostrados corresponden a la facturación anual, que aplica un 25 % de descuento frente al pago mensual. Los modelos más potentes (Claude Sonnet/Opus) consumen créditos aparte de la cuota.',
    sourceUrl: 'https://askyourpdf.com/pricing',
  },
  'You.com': {
    name: 'You.com',
    model: 'freemium',
    freeTier:
      'Nivel gratuito de la Web Search API con 100 consultas al día sin clave de API, más 100 $ de crédito inicial para probar las APIs de pago.',
    plans: [
      {
        name: 'Web Search API',
        price: '5,00 $ por cada 1.000 llamadas',
        notes:
          'Búsqueda web y noticias en tiempo real con hasta 100 resultados por llamada, para dar contexto web a agentes y LLMs.',
      },
      {
        name: 'Contents API',
        price: '1,00 $ por cada 1.000 páginas',
        notes: 'Extrae texto limpio, resúmenes y metadatos de varias URLs por petición.',
      },
      {
        name: 'Answer API',
        price: '5,00 $ por cada 1.000 llamadas',
        notes: 'Devuelve una respuesta sintetizada con citas a partir de la búsqueda web.',
      },
      {
        name: 'Research API',
        price: '12,00 $ por cada 1.000 llamadas',
        notes: 'Investigación multipaso con niveles Lite, Standard, Deep, Exhaustive y Frontier.',
      },
      {
        name: 'Finance Research API',
        price: '110,00 $ por cada 1.000 llamadas',
        notes:
          'Investigación financiera profunda sobre informes, macro y mercados, para flujos de trabajo financieros.',
      },
    ],
    notes:
      'El precio es por uso, con descuentos por volumen y ahorro adicional en contratos anuales. La página oficial de precios ya solo recoge las APIs para desarrolladores: no aparece ninguna suscripción de consumidor.',
    sourceUrl: 'https://you.com/pricing',
  },
  DeepSeek: {
    name: 'DeepSeek',
    model: 'freemium',
    freeTier:
      'Chat gratuito en chat.deepseek.com para usuarios individuales sin límite anunciado; 5 millones de tokens de crédito gratuito para cuentas nuevas de desarrollador (válidos 30 días)',
    plans: [
      {
        name: 'deepseek-v4-flash',
        price:
          'Input (cache hit): 0,0028 USD/1M tokens · Input (cache miss): 0,14 USD/1M tokens · Output: 0,28 USD/1M tokens',
        notes:
          'Precio en USD, pago por uso. Sin periodicidad fija: se deduce del saldo de la cuenta según consumo.',
      },
      {
        name: 'deepseek-v4-pro',
        price:
          'Input (cache hit): 0,003625 USD/1M tokens · Input (cache miss): 0,435 USD/1M tokens · Output: 0,87 USD/1M tokens',
        notes:
          'Precio en USD, pago por uso. La documentación advierte de un aumento de precio próximo.',
      },
    ],
    notes:
      'Los precios son por millón de tokens en USD, pago por uso puro, sin planes mensuales. Ambos modelos soportan hasta 1M tokens de contexto y 384K tokens de salida máxima. La propia documentación avisa de que los precios están sujetos a cambio.',
    sourceUrl: 'https://api-docs.deepseek.com/quick_start/pricing/',
  },
  Suno: {
    name: 'Suno',
    model: 'freemium',
    freeTier:
      '50 créditos diarios (se renuevan cada día), equivalentes a unas 10 canciones al día; sin uso comercial permitido',
    plans: [
      {
        name: 'Free',
        price: '0 USD/mes',
        notes: '50 créditos/día renovables, acceso al modelo v4.5, sin licencia comercial',
      },
      {
        name: 'Pro',
        price:
          '8 USD/mes (mensual) · 5,33 USD/mes facturado anualmente (64 USD/año, ahorro del 20 %)',
        notes:
          '2500 créditos/mes, modelo v5.5, derechos comerciales sobre canciones creadas, cola prioritaria (10 canciones simultáneas)',
      },
      {
        name: 'Premier',
        price:
          '24 USD/mes (mensual) · 16 USD/mes facturado anualmente (192 USD/año, ahorro del 20 %)',
        notes:
          '10 000 créditos/mes, acceso completo a Suno Studio, separación de stems, todos los modelos y herramientas avanzadas',
      },
    ],
    notes:
      'El dominio oficial es suno.com; suno.ai redirige allí con un 307. Los créditos de las suscripciones no se acumulan al mes siguiente; solo los créditos comprados por separado se conservan mientras la suscripción esté activa.',
    sourceUrl: 'https://suno.com/pricing',
  },
  Descript: {
    name: 'Descript',
    model: 'freemium',
    freeTier:
      '60 minutos de media al mes, 100 créditos de IA de por vida (no se renuevan), exportación en 720p y 5 GB de almacenamiento',
    plans: [
      {
        name: 'Free',
        price: '0 USD/mes',
        notes: '60 min/mes de media, 100 créditos IA únicos, exportación 720p, 5 GB',
      },
      {
        name: 'Hobbyist',
        price: '24 USD/mes (mensual) · 16 USD/mes facturado anualmente (192 USD/año)',
        notes: '10 horas/mes de media, 400 créditos IA/mes, exportación 1080p, 100 GB',
      },
      {
        name: 'Creator',
        price: '35 USD/mes (mensual) · 24 USD/mes facturado anualmente (288 USD/año)',
        notes: '30 horas/mes de media, 800 créditos IA/mes, exportación 4K, 1 TB',
      },
      {
        name: 'Business',
        price: '65 USD/mes (mensual) · 50 USD/mes facturado anualmente (600 USD/año)',
        notes:
          '40 horas/mes de media, 1500 créditos IA/mes, exportación 4K, 2 TB, funciones de equipo',
      },
      {
        name: 'Enterprise',
        price: 'Precio personalizado (contactar con ventas)',
        notes: 'Horas de media y créditos personalizables, seguridad avanzada, SSO/SCIM',
      },
    ],
    notes:
      'La web muestra por defecto el precio mensual al pagar mes a mes. El plan anual supone hasta un 35 % de ahorro. Los 100 créditos del plan gratuito son vitalicios y no se renuevan mensualmente.',
    sourceUrl: 'https://www.descript.com/pricing',
  },
  Speechify: {
    name: 'Speechify',
    model: 'freemium',
    freeTier:
      'Voces básicas (10 voces sintéticas), velocidad máxima de 1,5x; sin límite declarado de minutos ni palabras en la página oficial',
    plans: [
      {
        name: 'Free',
        price: '0 USD/mes',
        notes: '10 voces básicas, velocidad hasta 1,5x, text-to-speech estándar',
      },
      {
        name: 'Premium',
        price:
          '29 USD/mes (mensual) · ~11,58 USD/mes facturado anualmente (~139 USD/año, ahorro del 60 %)',
        notes:
          'Más de 1000 voces de alta calidad, más de 60 idiomas, velocidad hasta 5x, resúmenes IA, integración con Drive/Dropbox/OneDrive, dictado y podcasts IA',
      },
    ],
    notes:
      'La web muestra 29 USD/mes como precio destacado, que corresponde a la facturación mensual. El precio anual equivale a unos 11,58 USD/mes (139 USD/año). Speechify también tiene productos separados (Speechify Studio y API) con precios distintos no incluidos aquí.',
    sourceUrl: 'https://speechify.com/pricing',
  },
  Imagen: {
    name: 'Imagen',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'Imagen 4 Fast',
        price: '0,02 $ por imagen',
        notes: 'Generación estándar, resolución normal, facturado por uso en Google Cloud',
      },
      {
        name: 'Imagen 4 (Standard)',
        price: '0,04 $ por imagen',
        notes: 'Calidad mejorada respecto a Fast',
      },
      {
        name: 'Imagen 4 Ultra',
        price: '0,06 $ por imagen',
        notes: 'Mayor calidad y resolución',
      },
      {
        name: 'Escalado de imagen (upscaling)',
        price: '0,06 $ por imagen',
        notes: 'Servicio adicional de mejora de resolución',
      },
    ],
    notes:
      'Imagen no es un producto independiente: es el modelo de generación de imágenes de Google, accesible exclusivamente a través de Vertex AI o la API de Gemini. El precio es por imagen generada, sin suscripción mensual, y se factura dentro de la cuenta de Google Cloud. No existe capa gratuita; sí existe un crédito de 300 $ para nuevas cuentas de Google Cloud.',
    sourceUrl: 'https://cloud.google.com/vertex-ai/generative-ai/pricing',
  },
  Aurora: {
    name: 'Aurora (Grok Imagine)',
    model: 'paid',
    freeTier: null,
    plans: [
      {
        name: 'X Premium (acceso limitado vía Grok)',
        price: '8 $/mes',
        notes: 'Incluye acceso básico a Grok con generación de imágenes limitada.',
      },
      {
        name: 'SuperGrok Lite',
        price: '10 $/mes',
        notes: 'Acceso básico a generación de imágenes con Aurora (texto a imagen).',
      },
      {
        name: 'SuperGrok',
        price: '30 $/mes',
        notes:
          'Acceso completo a Grok Imagine: mayor resolución, edición de imágenes, generación de vídeo, procesamiento prioritario.',
      },
      {
        name: 'API de xAI (grok-imagine-image)',
        price: '0,02 $ por imagen',
        notes:
          'Para desarrolladores. El modelo de alta calidad (grok-imagine-image-quality) cuesta 0,05 $ por imagen. Sin suscripción mínima.',
      },
    ],
    notes:
      'Aurora es el nombre del modelo interno de generación de imágenes de xAI, no un producto separado. Se consume a través de Grok Imagine, que forma parte de la aplicación Grok. Desde abril de 2026 la generación de imágenes ya no está disponible en el plan gratuito de Grok. Los desarrolladores pueden acceder directamente vía API de xAI con precios por imagen.',
    sourceUrl: 'https://docs.x.ai/developers/models/grok-imagine-image',
  },
  Seedream: {
    name: 'Seedream',
    model: 'paid',
    freeTier: 'Acceso gratuito limitado a través de Dreamina (app de ByteDance para consumidores)',
    plans: [
      {
        name: 'Seedream 3.0 vía Together AI',
        price: '0,018 $ por megapixel',
        notes:
          'Una imagen de 1024×1024 (aprox. 1 MP) cuesta alrededor de 0,018 $. Disponible en la plataforma Together AI.',
      },
      {
        name: 'Seedream 4.5 vía OpenRouter',
        price: '0,04 $ por imagen',
        notes: 'Precio fijo por imagen independientemente del tamaño. Disponible en OpenRouter.',
      },
      {
        name: 'Seedream 5.0 Pro vía API de ByteDance',
        price: '0,075 $ por imagen hasta 2,36 MP / 0,15 $ por imagen superior a 2,36 MP',
        notes:
          'Modelo más reciente (julio 2026). 0,005 $ adicionales por imagen de referencia de entrada.',
      },
    ],
    notes:
      'Seedream es el modelo de generación de imágenes de ByteDance: no existe como producto de consumo propio con suscripción. Se accede vía API a través de plataformas como Together AI, OpenRouter o Atlas Cloud. Los consumidores pueden usarlo indirectamente a través de Dreamina o CapCut (apps de ByteDance). La URL del catálogo apunta a Seedream 3.0; el modelo ha evolucionado hasta la versión 5.0 Pro a fecha de agosto de 2026.',
    sourceUrl: 'https://www.together.ai/models/bytedance-seedream-3-0',
  },
  'Google Flow': {
    name: 'Google Flow',
    model: 'freemium',
    freeTier:
      '50 créditos de Flow al día, renovables diariamente. Acceso a generación de vídeo con Veo 3.1 e imágenes sin necesidad de suscripción.',
    plans: [
      {
        name: 'Google AI Plus',
        price: '4,99 USD/mes',
        notes: '200 créditos de Flow al mes. Acceso mejorado a modelos de imagen y vídeo.',
      },
      {
        name: 'Google AI Pro',
        price: '19,99 USD/mes',
        notes:
          '1.000 créditos de Flow al mes. Procesamiento prioritario e integración completa con Google Workspace.',
      },
      {
        name: 'Google AI Ultra',
        price: '99,99 USD/mes o 199,99 USD/mes',
        notes:
          '10.000 créditos/mes en el plan a 99,99 USD; 25.000 créditos/mes en el plan a 199,99 USD. Máxima prioridad y acceso anticipado a nuevas funciones.',
      },
    ],
    notes:
      'Google Flow es la evolución de VideoFX, lanzada en mayo de 2025, e integrada en febrero de 2026 con Whisk e ImageFX en un único estudio creativo. Los créditos de Flow son distintos de los créditos de Gemini; el número de segundos de vídeo por crédito varía según el modelo empleado (Veo 3.1 consume más que los modelos de imagen). La URL labs.google/fx/tools/flow sigue siendo válida.',
    sourceUrl: 'https://labs.google/fx/tools/flow',
  },
  Falcon: {
    name: 'Falcon LLM',
    model: 'open-source',
    freeTier: 'Todos los modelos son de descarga gratuita desde Hugging Face sin coste por token',
    plans: [],
    notes:
      'Falcon es una familia de modelos de lenguaje de código abierto del Technology Innovation Institute (TII) de Abu Dabi. Los modelos Falcon 40B y 180B se publican bajo licencia Apache 2.0, lo que permite uso comercial. Los modelos más recientes (Falcon 3, H1) tienen sus propios términos de uso de TII. Los proveedores de hosting que quieran ofrecer Falcon como API de pago a terceros necesitan un acuerdo separado con TII.',
    sourceUrl: 'https://falconllm.tii.ae/',
  },
  BioGPT: {
    name: 'BioGPT',
    model: 'open-source',
    freeTier:
      'Pesos del modelo descargables gratuitamente; código de entrenamiento e inferencia disponible sin coste',
    plans: [],
    notes:
      'BioGPT es un modelo de lenguaje de Microsoft Research preentrenado sobre 15 millones de resúmenes de PubMed, orientado a tareas de NLP biomédico. Es un proyecto de investigación sin producto comercial ni API pública de pago. El repositorio no muestra actividad relevante desde 2022-2023 y funciona en modo mantenimiento. El código y los pesos preentrenados están disponibles bajo licencia MIT.',
    sourceUrl: 'https://github.com/microsoft/BioGPT',
  },
  AudioCraft: {
    name: 'AudioCraft',
    model: 'open-source',
    freeTier: 'Código y pesos descargables gratuitamente; sin API de pago ni suscripción',
    plans: [],
    notes:
      'AudioCraft es una biblioteca de investigación de Meta (Facebook Research) para generación de audio y música mediante IA, que incluye MusicGen, AudioGen y EnCodec. El código está bajo licencia MIT, pero los pesos de los modelos se publican bajo CC-BY-NC 4.0, lo que prohíbe el uso comercial directo sin autorización de Meta. El repositorio sigue activo: el último commit registrado es de marzo de 2025 y se añadió el modelo JASCO en enero de 2025.',
    sourceUrl: 'https://github.com/facebookresearch/audiocraft',
  },
};
