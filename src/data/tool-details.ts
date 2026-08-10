import type { ToolDetail } from '../types/tool';

/**
 * Contenido de las fichas de herramienta (/herramienta/[slug]).
 * La clave es el nombre exacto de la herramienta en ai-tools.ts.
 *
 * El aviso de "consulta la web oficial" vive en la plantilla de la ficha,
 * no aquí: repetido en cada entrada era la huella de contenido de plantilla.
 */
export const toolDetails: Record<string, ToolDetail> = {
  ChatGPT: {
    name: 'ChatGPT',
    tagline: 'Asistente conversacional de OpenAI para escribir, programar y resolver dudas',
    intro:
      'ChatGPT es el asistente conversacional desarrollado por OpenAI y una de las herramientas de IA generativa más utilizadas del mundo. Funciona a partir de grandes modelos de lenguaje y permite mantener conversaciones en lenguaje natural para redactar textos, resumir documentos, generar código o analizar información. Está disponible desde el navegador y también mediante aplicaciones móviles y de escritorio, con integraciones para desarrolladores a través de la API de OpenAI.',
    useCases: [
      'Redactar correos, artículos y textos de marketing en minutos',
      'Resumir documentos largos y extraer las ideas clave',
      'Generar y depurar código en distintos lenguajes de programación',
      'Preparar borradores de informes, guiones o presentaciones',
      'Traducir y adaptar contenidos entre idiomas manteniendo el tono',
    ],
    features: [
      'Conversación en lenguaje natural con memoria del contexto',
      'Análisis de archivos e imágenes subidos por el usuario',
      'Búsqueda web integrada para respuestas con fuentes',
      'Generación de imágenes desde descripciones de texto',
      'API para integrar el modelo en aplicaciones propias',
    ],
    pros: [
      'Muy versátil: sirve para escritura, programación, análisis y estudio',
      'Excelente comprensión y redacción en español',
      'Ecosistema amplio con apps móviles, escritorio y API',
      'Curva de aprendizaje mínima: basta con escribir lo que necesitas',
    ],
    cons: [
      'Puede generar información incorrecta con apariencia de certeza',
      'Las funciones más avanzadas quedan reservadas a los planes de pago',
      'El plan gratuito aplica límites de uso en horas de alta demanda',
    ],
    pricingNote:
      'ChatGPT sigue un modelo freemium: hay un plan gratuito con acceso a las funciones básicas y límites de uso. Los planes individuales de pago suelen situarse en torno a los 20 $ al mes, con opciones superiores para equipos y empresas. El uso mediante API se factura aparte por consumo de tokens.',
    faqs: [
      {
        question: '¿Qué es ChatGPT y para qué sirve?',
        answer:
          'ChatGPT es un asistente de inteligencia artificial creado por OpenAI que conversa en lenguaje natural. Sirve para redactar textos, resumir documentos, traducir, generar código, resolver dudas o hacer lluvias de ideas. Se usa desde el navegador o desde sus aplicaciones móviles y de escritorio.',
      },
      {
        question: '¿ChatGPT es gratis?',
        answer:
          'Sí, existe una versión gratuita con acceso a las funciones principales, aunque con límites de uso y de acceso a los modelos más potentes. Para quitar esas restricciones hay suscripciones de pago mensuales. Consulta la web oficial para conocer los planes vigentes.',
      },
      {
        question: '¿ChatGPT funciona bien en español?',
        answer:
          'Sí. ChatGPT entiende y redacta en español con buena calidad, incluidos matices propios del español de España. Puedes pedirle que ajuste el tono, el registro o el vocabulario, y también que traduzca o adapte textos entre idiomas sin cambiar de herramienta.',
      },
    ],
  },
  Claude: {
    name: 'Claude',
    tagline: 'Asistente de IA de Anthropic centrado en textos largos y trabajo profesional',
    intro:
      'Claude es el asistente conversacional desarrollado por Anthropic, una empresa de investigación en inteligencia artificial. Destaca por su capacidad para trabajar con textos extensos, seguir instrucciones detalladas y mantener un tono cuidado, lo que lo hace habitual en tareas de redacción, análisis documental y programación. Se puede usar desde su web y sus aplicaciones, y también integrarse en productos propios a través de su API.',
    useCases: [
      'Analizar documentos extensos y contratos para extraer puntos clave',
      'Redactar y revisar informes, propuestas o documentación técnica',
      'Escribir, explicar y refactorizar código con contexto amplio',
      'Resumir reuniones, transcripciones o investigaciones largas',
      'Crear asistentes internos conectando su API a datos propios',
    ],
    features: [
      'Ventana de contexto amplia para documentos largos',
      'Carga de archivos, PDF e imágenes para su análisis',
      'Respuestas estructuradas y fáciles de revisar',
      'Herramientas orientadas a desarrollo y a proyectos de código',
      'API disponible para integraciones empresariales',
    ],
    pros: [
      'Muy sólido en comprensión y redacción de textos largos',
      'Estilo de escritura natural y bien estructurado en español',
      'Enfoque explícito en seguridad y fiabilidad de las respuestas',
      'Buen rendimiento en tareas de programación y análisis',
    ],
    cons: [
      'El plan gratuito impone límites de mensajes por periodo',
      'Menos funciones multimedia que otros asistentes generalistas',
      'Algunas capacidades llegan más tarde a determinados países',
    ],
    pricingNote:
      'Claude funciona con un modelo freemium: hay un plan gratuito con límites de uso y suscripciones de pago que amplían la cuota y dan acceso a más funciones. Los planes individuales suelen rondar los 20 $ al mes, con opciones para equipos y empresas. El acceso por API se paga por consumo.',
    faqs: [
      {
        question: '¿Qué es Claude y quién lo desarrolla?',
        answer:
          'Claude es un asistente de inteligencia artificial conversacional desarrollado por Anthropic. Permite redactar textos, analizar documentos, programar y resolver consultas en lenguaje natural. Es conocido por manejar bien contenidos largos y por su enfoque en respuestas seguras y bien argumentadas.',
      },
      {
        question: '¿Claude es gratis?',
        answer:
          'Claude ofrece un plan gratuito con límites de uso diarios, suficiente para pruebas y tareas puntuales. Quienes lo usan a diario suelen contratar una suscripción de pago que amplía la cuota y añade funciones. Consulta su web para ver los planes actuales.',
      },
      {
        question: '¿Para qué sirve Claude frente a otros chatbots?',
        answer:
          'Claude resulta especialmente útil cuando hay que trabajar con documentos largos, seguir instrucciones detalladas o generar textos cuidados. También se emplea en programación y análisis. Su valor diferencial está en el contexto amplio y en un estilo de respuesta ordenado y matizado.',
      },
    ],
  },
  Gemini: {
    name: 'Gemini',
    tagline: 'IA multimodal de Google integrada en su ecosistema de productos',
    intro:
      'Gemini es la familia de modelos de inteligencia artificial de Google y también el nombre de su asistente conversacional. Es multimodal, es decir, puede trabajar con texto, imágenes, audio y vídeo dentro de una misma conversación. Se usa para redactar, resumir, programar o analizar contenidos, y se integra con servicios de Google como Gmail, Documentos o Búsqueda, además de estar disponible para desarrolladores mediante API.',
    useCases: [
      'Redactar y resumir correos y documentos dentro de Google Workspace',
      'Analizar imágenes, capturas o gráficos y explicar su contenido',
      'Buscar información actualizada y contrastarla con fuentes web',
      'Generar código y ayudar en tareas de desarrollo',
      'Preparar resúmenes de vídeos o archivos multimedia',
    ],
    features: [
      'Procesamiento multimodal de texto, imagen, audio y vídeo',
      'Integración nativa con aplicaciones de Google Workspace',
      'Acceso a información web actualizada',
      'Aplicaciones móviles y acceso desde el navegador',
      'API para desarrolladores a través de Google AI',
    ],
    pros: [
      'Integración muy natural con Gmail, Drive y Documentos',
      'Buena capacidad multimodal en una sola herramienta',
      'Acceso a información reciente gracias al buscador de Google',
      'Existe una versión gratuita bastante completa',
    ],
    cons: [
      'Algunas funciones dependen de tener cuenta o suscripción de Google',
      'La disponibilidad de novedades varía según el país',
      'Puede cometer errores factuales pese al acceso web',
    ],
    pricingNote:
      'Gemini sigue un modelo freemium: hay una versión gratuita accesible con una cuenta de Google y planes de suscripción que desbloquean modelos más potentes y mayor cuota, a menudo ligados a los planes de almacenamiento y productividad de Google. El uso por API se factura por consumo.',
    faqs: [
      {
        question: '¿Qué es Gemini de Google?',
        answer:
          'Gemini es la inteligencia artificial de Google: una familia de modelos multimodales y un asistente conversacional que trabaja con texto, imágenes, audio y vídeo. Sirve para redactar, resumir, analizar contenidos y programar, y se integra con los servicios de Google.',
      },
      {
        question: '¿Gemini es gratis?',
        answer:
          'Sí, hay una versión gratuita a la que se accede con una cuenta de Google, con límites de uso. Existen suscripciones de pago que amplían la cuota y dan acceso a los modelos más avanzados. Consulta la web oficial para conocer los planes disponibles.',
      },
      {
        question: '¿Gemini funciona en español?',
        answer:
          'Sí, Gemini entiende y responde en español, incluida su variante de España. Puede redactar, traducir y resumir contenidos en nuestro idioma, y también analizar documentos o imágenes en español dentro de la misma conversación.',
      },
    ],
  },
  LLaMA: {
    name: 'LLaMA',
    tagline: 'Familia de modelos de lenguaje abiertos de Meta para desarrolladores',
    intro:
      'LLaMA es la familia de grandes modelos de lenguaje publicada por Meta con pesos abiertos, lo que permite descargarlos, ejecutarlos en infraestructura propia y adaptarlos a necesidades concretas. Está pensada sobre todo para desarrolladores, investigadores y empresas que quieren construir asistentes o aplicaciones de IA sin depender de un servicio cerrado. Los modelos se distribuyen en distintos tamaños para ajustarse a la potencia de cálculo disponible.',
    useCases: [
      'Desplegar un asistente de IA en servidores propios',
      'Ajustar el modelo con datos internos de la empresa',
      'Investigar y experimentar con modelos de lenguaje abiertos',
      'Crear chatbots y buscadores internos sin enviar datos fuera',
      'Ejecutar modelos en local para trabajar sin conexión',
    ],
    features: [
      'Pesos abiertos descargables bajo licencia propia de Meta',
      'Varios tamaños de modelo según recursos disponibles',
      'Compatible con las principales herramientas de despliegue',
      'Posibilidad de fine-tuning con datos propios',
      'Amplia comunidad y ecosistema de versiones derivadas',
    ],
    pros: [
      'Se puede ejecutar en local sin coste de licencia',
      'Control total sobre los datos y la privacidad',
      'Gran comunidad con documentación y modelos derivados',
      'Flexible: se adapta a hardware modesto o a grandes servidores',
    ],
    cons: [
      'Requiere conocimientos técnicos para desplegarlo y mantenerlo',
      'No trae interfaz de chat lista para usuarios finales',
      'El coste real se traslada al hardware o a la nube',
    ],
    pricingNote:
      'Los modelos LLaMA se distribuyen de forma gratuita con pesos abiertos bajo la licencia de Meta, que incluye algunas condiciones de uso. No hay suscripción: el gasto proviene del hardware propio o de los proveedores en la nube que ofrecen el modelo como servicio. Revisa la licencia y la web oficial antes de un uso comercial.',
    faqs: [
      {
        question: '¿Qué es LLaMA de Meta?',
        answer:
          'LLaMA es la familia de grandes modelos de lenguaje de Meta distribuida con pesos abiertos. Permite descargar el modelo, ejecutarlo en infraestructura propia y adaptarlo a casos concretos. Se dirige a desarrolladores, investigadores y empresas que quieren control sobre su IA.',
      },
      {
        question: '¿LLaMA es gratis y open source?',
        answer:
          'Los modelos se pueden descargar y usar sin coste de licencia, aunque la licencia de Meta incluye condiciones específicas y no es exactamente una licencia open source clásica. El gasto real proviene del hardware o del proveedor cloud que uses para ejecutarlo.',
      },
      {
        question: '¿Cómo se usa LLaMA?',
        answer:
          'LLaMA no es una web de chat, sino un modelo que se integra. Lo habitual es ejecutarlo con herramientas de despliegue local, usar un proveedor cloud que lo ofrezca o ajustarlo con datos propios. Requiere conocimientos técnicos básicos de instalación.',
      },
    ],
  },
  Qwen: {
    name: 'Qwen',
    tagline: 'Familia de modelos de lenguaje de Alibaba con versiones abiertas',
    intro:
      'Qwen es la familia de modelos de lenguaje desarrollada por Alibaba Cloud. Incluye modelos de distintos tamaños y capacidades, con versiones publicadas de forma abierta que se pueden descargar y ejecutar en infraestructura propia, además de acceso a través de servicios en la nube. Se utiliza para generación de texto, asistentes conversacionales, tareas multilingües y desarrollo de aplicaciones basadas en IA.',
    useCases: [
      'Construir asistentes conversacionales para productos propios',
      'Generar y resumir texto en varios idiomas',
      'Desplegar modelos abiertos en servidores internos',
      'Ajustar el modelo a un dominio o sector concreto',
      'Automatizar respuestas y clasificación de contenidos',
    ],
    features: [
      'Modelos disponibles en distintos tamaños y variantes',
      'Versiones con pesos abiertos descargables',
      'Soporte multilingüe, con buen rendimiento en inglés y chino',
      'Acceso mediante API en la nube de Alibaba',
      'Compatible con herramientas habituales del ecosistema open source',
    ],
    pros: [
      'Combina versiones abiertas y servicio gestionado en la nube',
      'Buena relación entre rendimiento y tamaño del modelo',
      'Opciones ligeras que se ejecutan en hardware modesto',
      'Comunidad activa y actualizaciones frecuentes',
    ],
    cons: [
      'Documentación en ocasiones más limitada en español',
      'El despliegue propio exige conocimientos técnicos',
      'Menos conocido en Europa que las alternativas estadounidenses',
    ],
    pricingNote:
      'Qwen sigue un esquema freemium: varias versiones se publican con pesos abiertos y se pueden usar sin coste de licencia, mientras que el acceso gestionado por API en la nube se factura por consumo. Si lo ejecutas por tu cuenta, el gasto viene del hardware.',
    faqs: [
      {
        question: '¿Qué es Qwen?',
        answer:
          'Qwen es la familia de modelos de lenguaje de Alibaba Cloud. Incluye variantes de distintos tamaños, algunas con pesos abiertos que se pueden descargar y ejecutar en infraestructura propia. Se usa para generación de texto, asistentes conversacionales y aplicaciones de IA.',
      },
      {
        question: '¿Qwen es gratis?',
        answer:
          'Hay versiones de Qwen con pesos abiertos que se pueden usar sin coste de licencia, aunque necesitas hardware para ejecutarlas. El acceso gestionado por API en la nube se cobra por consumo. Consulta la web oficial para conocer las condiciones vigentes.',
      },
      {
        question: '¿Qwen funciona en español?',
        answer:
          'Qwen es un modelo multilingüe y responde en español, aunque su rendimiento más destacado suele darse en inglés y chino. Para textos en español conviene probar la variante concreta que vayas a usar y comprobar la calidad en tu caso.',
      },
    ],
  },
  Mistral: {
    name: 'Mistral',
    tagline: 'Modelos de lenguaje europeos, eficientes y con versiones open source',
    intro:
      'Mistral AI es una empresa francesa de inteligencia artificial que desarrolla modelos de lenguaje conocidos por su eficiencia: buen rendimiento con menos recursos de cómputo. Publica varios de sus modelos con licencias abiertas, lo que permite descargarlos y ejecutarlos en infraestructura propia, y ofrece además acceso por API y un asistente conversacional. Es una de las referencias europeas en IA generativa.',
    useCases: [
      'Desplegar modelos de lenguaje en servidores europeos propios',
      'Integrar generación de texto en aplicaciones mediante su API',
      'Construir chatbots y asistentes internos para empresas',
      'Ejecutar modelos ligeros en local con hardware limitado',
      'Ajustar un modelo abierto a un dominio específico',
    ],
    features: [
      'Modelos abiertos descargables junto a modelos comerciales',
      'Arquitecturas eficientes que reducen el coste de inferencia',
      'API para desarrolladores y asistente conversacional propio',
      'Variantes especializadas en código y tareas concretas',
      'Empresa y alojamiento con enfoque europeo',
    ],
    pros: [
      'Alternativa europea con foco en soberanía de datos',
      'Modelos ligeros que funcionan bien con pocos recursos',
      'Parte del catálogo es open source y de uso libre',
      'Buen rendimiento en idiomas europeos, incluido el español',
    ],
    cons: [
      'Los modelos más potentes no son abiertos y requieren pago',
      'Ecosistema de herramientas menor que el de los grandes rivales',
      'El despliegue propio exige perfil técnico',
    ],
    pricingNote:
      'Mistral combina modelos open source de uso gratuito con modelos comerciales accesibles por API y facturados por consumo de tokens. También ofrece un asistente conversacional con plan gratuito y opciones de pago. El coste depende del modelo y del volumen.',
    faqs: [
      {
        question: '¿Qué es Mistral AI?',
        answer:
          'Mistral AI es una empresa francesa que desarrolla modelos de lenguaje eficientes. Publica parte de sus modelos con licencia abierta para descargarlos y ejecutarlos en local, y ofrece modelos comerciales por API además de un asistente conversacional propio.',
      },
      {
        question: '¿Mistral es gratis?',
        answer:
          'Varios modelos de Mistral son open source y se pueden usar sin coste de licencia, asumiendo el gasto del hardware. Los modelos comerciales y el uso por API se pagan por consumo, y el asistente tiene plan gratuito y planes de pago.',
      },
      {
        question: '¿Mistral funciona bien en español?',
        answer:
          'Sí. Al ser un proyecto europeo, sus modelos tienen un rendimiento sólido en idiomas como el español, el francés o el alemán. Sirven para redactar, resumir y traducir, aunque la calidad concreta varía según el tamaño del modelo elegido.',
      },
    ],
  },
  Falcon: {
    name: 'Falcon',
    tagline: 'Modelos de lenguaje open source para desplegar en infraestructura propia',
    intro:
      'Falcon es una familia de grandes modelos de lenguaje open source impulsada desde el Technology Innovation Institute de Abu Dabi. Sus pesos se publican con licencias permisivas, lo que permite descargar los modelos, ejecutarlos en servidores propios y adaptarlos a casos de uso concretos, incluido el uso comercial. Se dirige sobre todo a desarrolladores, investigadores y empresas que buscan una alternativa abierta a los servicios cerrados.',
    useCases: [
      'Desplegar un modelo de lenguaje en infraestructura propia',
      'Ajustar el modelo con datos internos de la organización',
      'Investigar y comparar arquitecturas de modelos abiertos',
      'Crear asistentes internos sin enviar datos a terceros',
      'Generar y resumir texto dentro de aplicaciones propias',
    ],
    features: [
      'Pesos abiertos con licencia permisiva para uso comercial',
      'Distintos tamaños de modelo según los recursos',
      'Compatible con las librerías habituales del ecosistema open source',
      'Permite fine-tuning sobre datos propios',
      'Distribución a través de repositorios públicos de modelos',
    ],
    pros: [
      'Licencia abierta que facilita el uso comercial',
      'Control total sobre los datos al ejecutarlo en local',
      'Sin costes de suscripción ni límites de uso por proveedor',
      'Buena opción para investigación y experimentación',
    ],
    cons: [
      'Requiere conocimientos técnicos y hardware adecuado',
      'No incluye una interfaz de chat lista para usar',
      'Menor ecosistema de soporte que otros modelos abiertos',
    ],
    pricingNote:
      'Falcon se distribuye de forma gratuita como modelo open source, sin suscripciones ni tarifas de licencia. El coste real depende del hardware o del proveedor cloud que uses para ejecutar la inferencia. Revisa las condiciones de la licencia de cada versión antes de un despliegue comercial.',
    faqs: [
      {
        question: '¿Qué es Falcon en inteligencia artificial?',
        answer:
          'Falcon es una familia de grandes modelos de lenguaje open source impulsada desde el Technology Innovation Institute. Sus pesos son descargables y se pueden ejecutar en servidores propios, ajustarlos con datos internos e integrarlos en aplicaciones, incluso con fines comerciales.',
      },
      {
        question: '¿Falcon es gratis?',
        answer:
          'Sí, los modelos Falcon se publican con licencias abiertas y no tienen coste de licencia. El gasto proviene del hardware o del proveedor en la nube donde los ejecutes. Conviene revisar las condiciones concretas de cada versión antes de usarlo comercialmente.',
      },
      {
        question: '¿Para qué sirve Falcon?',
        answer:
          'Sirve para generar y resumir texto, construir chatbots o asistentes internos y experimentar con IA sin depender de un servicio cerrado. Al ejecutarse en infraestructura propia, resulta útil cuando la privacidad de los datos es un requisito importante.',
      },
    ],
  },
  Grok: {
    name: 'Grok',
    tagline: 'Asistente conversacional de xAI integrado con la red social X',
    intro:
      'Grok es el asistente de inteligencia artificial desarrollado por xAI, la empresa de IA fundada por Elon Musk. Ofrece conversación en lenguaje natural para resolver dudas, redactar textos, programar o analizar información, y destaca por su integración con la red social X, que le permite acceder a contenidos y conversaciones en tiempo real. Está disponible desde su web, desde X y mediante aplicaciones móviles.',
    useCases: [
      'Consultar y resumir lo que se comenta en X sobre un tema',
      'Redactar textos, publicaciones y respuestas rápidas',
      'Resolver dudas técnicas y generar fragmentos de código',
      'Analizar imágenes y documentos subidos a la conversación',
      'Seguir la actualidad con información reciente',
    ],
    features: [
      'Acceso a contenidos en tiempo real de la red X',
      'Conversación en lenguaje natural con distintos modos de respuesta',
      'Análisis de imágenes y generación de contenido visual',
      'Aplicaciones móviles y acceso desde el navegador',
      'API para desarrolladores a través de xAI',
    ],
    pros: [
      'Información muy actualizada gracias a su conexión con X',
      'Tono de respuesta más directo y menos acartonado',
      'Integrado en la propia red social, sin cambiar de app',
      'Mejora rápida con lanzamientos frecuentes',
    ],
    cons: [
      'Las funciones completas se ligan a la suscripción de X o de xAI',
      'Menos maduro que otros asistentes en tareas complejas',
      'El acceso a datos de X puede arrastrar contenido poco fiable',
    ],
    pricingNote:
      'Grok funciona con un modelo freemium: hay acceso gratuito con límites de uso y funciones ampliadas para usuarios de pago, normalmente asociadas a las suscripciones de X o de xAI. Existe además una API facturada por consumo para desarrolladores.',
    faqs: [
      {
        question: '¿Qué es Grok y quién lo ha creado?',
        answer:
          'Grok es un asistente conversacional de inteligencia artificial creado por xAI, la empresa de IA de Elon Musk. Permite conversar, redactar, programar y analizar contenidos, y se distingue por su acceso a información en tiempo real de la red social X.',
      },
      {
        question: '¿Grok es gratis?',
        answer:
          'Grok ofrece un acceso gratuito con límites de uso. Las funciones más avanzadas y una cuota mayor suelen requerir una suscripción, habitualmente vinculada a X o a los planes de xAI. Consulta la web oficial para conocer los planes actuales.',
      },
      {
        question: '¿Grok funciona en español?',
        answer:
          'Sí, Grok entiende y responde en español. Puedes pedirle que redacte, traduzca o resuma contenidos en nuestro idioma. Como en otros asistentes, conviene revisar los datos concretos que ofrezca, especialmente cuando cita información procedente de redes sociales.',
      },
    ],
  },
  BioGPT: {
    name: 'BioGPT',
    tagline: 'Modelo de lenguaje open source especializado en textos biomédicos',
    intro:
      'BioGPT es un modelo de lenguaje generativo desarrollado por Microsoft Research y entrenado sobre literatura biomédica. A diferencia de los modelos generalistas, está orientado a tareas del ámbito de la salud y las ciencias de la vida, como la extracción de relaciones entre entidades, la clasificación de textos científicos o la generación de descripciones biomédicas. Se distribuye de forma abierta a través de su repositorio en GitHub, dirigido a investigadores y equipos técnicos.',
    useCases: [
      'Extraer relaciones entre fármacos, genes y enfermedades',
      'Clasificar y etiquetar artículos científicos biomédicos',
      'Apoyar revisiones de literatura en investigación médica',
      'Generar texto especializado en dominio biomédico',
      'Entrenar sistemas de minería de textos en salud',
    ],
    features: [
      'Modelo preentrenado sobre literatura biomédica',
      'Código y pesos disponibles públicamente en GitHub',
      'Orientado a tareas de procesamiento de lenguaje biomédico',
      'Permite fine-tuning para tareas concretas del dominio',
      'Integrable con el ecosistema habitual de Python y transformers',
    ],
    pros: [
      'Especialización real en vocabulario y literatura biomédica',
      'Uso libre y gratuito para investigación',
      'Respaldado por el trabajo de Microsoft Research',
      'Se puede ejecutar en infraestructura propia con datos sensibles',
    ],
    cons: [
      'No es una herramienta para usuarios finales: requiere programar',
      'No sustituye el criterio médico ni ofrece diagnósticos fiables',
      'Ámbito muy acotado: no sirve para tareas generalistas',
    ],
    pricingNote:
      'BioGPT es un proyecto abierto y gratuito: el código y los pesos se publican en GitHub sin suscripciones ni licencias de pago. El único coste es el del hardware o la nube donde se ejecute el modelo. Revisa la licencia del repositorio antes de un uso comercial.',
    faqs: [
      {
        question: '¿Qué es BioGPT?',
        answer:
          'BioGPT es un modelo de lenguaje generativo de Microsoft Research entrenado con literatura biomédica. Está pensado para tareas del ámbito de la salud, como extraer relaciones entre entidades o clasificar textos científicos, y se distribuye de forma abierta en GitHub.',
      },
      {
        question: '¿BioGPT es gratis?',
        answer:
          'Sí. BioGPT se publica como proyecto abierto en GitHub y puede descargarse y usarse sin coste de licencia. El gasto se limita al hardware necesario para ejecutarlo. Conviene revisar las condiciones de la licencia antes de darle un uso comercial.',
      },
      {
        question: '¿Para qué sirve BioGPT y quién debería usarlo?',
        answer:
          'Sirve para procesar y generar texto biomédico: minería de literatura científica, extracción de relaciones o clasificación de artículos. Está dirigido a investigadores y equipos técnicos con conocimientos de programación. No es una herramienta de diagnóstico ni sustituye el criterio clínico.',
      },
    ],
  },
  Jasper: {
    name: 'Jasper',
    tagline: 'Plataforma de copywriting con IA para equipos de marketing y marca',
    intro:
      'Jasper es una plataforma de generación de contenido con inteligencia artificial orientada a equipos de marketing. Permite crear textos publicitarios, artículos de blog, correos y publicaciones para redes sociales manteniendo un tono de marca definido. Incluye plantillas por tipo de contenido, flujos de trabajo en equipo e integraciones con otras herramientas, de forma que el contenido generado encaje con la identidad y las campañas de la empresa.',
    useCases: [
      'Redactar anuncios y textos publicitarios para campañas',
      'Generar artículos de blog optimizados para SEO',
      'Crear publicaciones para redes sociales a escala',
      'Adaptar un mismo mensaje a varios canales y formatos',
      'Mantener un tono de marca coherente entre redactores',
    ],
    features: [
      'Plantillas específicas por tipo de contenido de marketing',
      'Definición de voz y tono de marca reutilizable',
      'Espacios de trabajo colaborativos para equipos',
      'Integraciones con herramientas de marketing y navegador',
      'Generación de imágenes para acompañar los textos',
    ],
    pros: [
      'Muy enfocado a marketing, no es un chatbot genérico',
      'La voz de marca da coherencia a todo el contenido',
      'Funciones de colaboración pensadas para equipos',
      'Plantillas que aceleran tareas repetitivas de copy',
    ],
    cons: [
      'No tiene plan gratuito permanente, solo prueba',
      'Precio elevado frente a asistentes generalistas',
      'El texto generado suele necesitar edición humana',
    ],
    pricingNote:
      'Jasper es una herramienta de pago por suscripción, con planes por usuario y niveles según las funciones y el volumen de contenido. Los planes de entrada suelen partir de unas decenas de dólares al mes y suben en las opciones para equipos y empresas. Normalmente ofrece un periodo de prueba.',
    faqs: [
      {
        question: '¿Qué es Jasper AI y para qué sirve?',
        answer:
          'Jasper es una plataforma de redacción con inteligencia artificial pensada para equipos de marketing. Sirve para crear anuncios, artículos, correos y publicaciones sociales manteniendo un tono de marca definido, con plantillas por formato y funciones de colaboración entre varios usuarios.',
      },
      {
        question: '¿Jasper es gratis?',
        answer:
          'No. Jasper funciona por suscripción de pago, aunque suele ofrecer un periodo de prueba para probar la herramienta antes de contratarla. Los planes varían según usuarios y funciones. Consulta la web oficial para conocer las tarifas vigentes.',
      },
      {
        question: '¿Jasper escribe en español?',
        answer:
          'Sí, Jasper genera contenido en español además de en otros muchos idiomas, lo que permite adaptar campañas a distintos mercados. Como con cualquier IA, conviene revisar el resultado para ajustar expresiones y matices propios del español de España.',
      },
    ],
  },
  'Copy.ai': {
    name: 'Copy.ai',
    tagline: 'Herramienta de IA para generar copy y automatizar flujos de marketing',
    intro:
      'Copy.ai es una plataforma de generación de contenido con inteligencia artificial centrada en marketing y ventas. Permite redactar textos publicitarios, descripciones de producto, correos comerciales y publicaciones sociales a partir de indicaciones breves, con plantillas para cada formato. En los últimos años ha ampliado su enfoque hacia la automatización de flujos de trabajo, encadenando pasos de generación de contenido dentro de procesos comerciales.',
    useCases: [
      'Generar descripciones de producto para tiendas online',
      'Redactar correos de prospección y seguimiento comercial',
      'Crear variaciones de anuncios para probar mensajes',
      'Escribir publicaciones para redes sociales de forma masiva',
      'Automatizar flujos de contenido dentro del equipo de ventas',
    ],
    features: [
      'Amplio catálogo de plantillas de copywriting',
      'Flujos de trabajo automatizados que encadenan varios pasos',
      'Generación de múltiples variantes del mismo texto',
      'Soporte multilingüe para adaptar campañas',
      'Integraciones con herramientas de marketing y CRM',
    ],
    pros: [
      'Muchas plantillas listas para tareas concretas de marketing',
      'Los flujos de trabajo ahorran tiempo en procesos repetitivos',
      'Interfaz sencilla, apta para perfiles no técnicos',
      'Genera varias alternativas para elegir y comparar',
    ],
    cons: [
      'El plan gratuito, cuando existe, es muy limitado',
      'El contenido largo requiere revisión y edición humana',
      'El coste sube rápido al ampliar usuarios y volumen',
    ],
    pricingNote:
      'Copy.ai se comercializa mediante suscripción de pago, con planes escalonados según usuarios, volumen de generación y acceso a flujos de trabajo. Suele existir una opción de entrada de bajo coste o prueba limitada, y planes superiores para equipos y empresas.',
    faqs: [
      {
        question: '¿Qué es Copy.ai?',
        answer:
          'Copy.ai es una plataforma de generación de contenido con inteligencia artificial orientada a marketing y ventas. Permite crear anuncios, correos, descripciones de producto y publicaciones sociales a partir de indicaciones breves, y automatizar flujos de trabajo con contenido generado.',
      },
      {
        question: '¿Copy.ai es gratis?',
        answer:
          'Copy.ai es principalmente de pago. Puede ofrecer una opción gratuita o de prueba con créditos limitados, pero el uso habitual requiere suscripción. Los planes varían según usuarios y volumen. Consulta su web para conocer las tarifas actuales.',
      },
      {
        question: '¿Copy.ai funciona en español?',
        answer:
          'Sí, Copy.ai genera contenido en español y en otros muchos idiomas, lo que resulta útil para campañas internacionales. El resultado suele necesitar una revisión para ajustar el tono y las expresiones al español de España antes de publicarlo.',
      },
    ],
  },
  Sudowrite: {
    name: 'Sudowrite',
    tagline: 'Asistente de escritura con IA pensado para autores de ficción',
    intro:
      'Sudowrite es un asistente de escritura basado en inteligencia artificial dirigido específicamente a escritores de ficción. En lugar de plantear una interfaz de chat genérica, ofrece funciones pensadas para el proceso creativo: continuar una escena, describir con más detalle, generar ideas de trama o reescribir un pasaje con otro tono. Se usa sobre todo para novelas, relatos y guiones, como apoyo al autor y no como sustituto.',
    useCases: [
      'Continuar una escena cuando el autor se queda bloqueado',
      'Generar descripciones más ricas de lugares y personajes',
      'Explorar giros de trama y alternativas narrativas',
      'Reescribir pasajes cambiando el tono o el ritmo',
      'Elaborar esquemas y fichas de personajes para una novela',
    ],
    features: [
      'Funciones específicas de ficción como continuar o describir',
      'Herramientas de lluvia de ideas para trama y personajes',
      'Reescritura de fragmentos con distintos estilos',
      'Editor pensado para textos largos y proyectos de novela',
      'Guía del estilo y del universo narrativo del autor',
    ],
    pros: [
      'Diseñado para ficción, no para copy de marketing',
      'Muy útil para superar bloqueos creativos',
      'Funciones específicas en lugar de un chat genérico',
      'Editor pensado para manuscritos largos',
    ],
    cons: [
      'Solo de pago, sin plan gratuito permanente',
      'El texto generado necesita reescritura del autor',
      'Menos afinado en español que en inglés',
    ],
    pricingNote:
      'Sudowrite es una herramienta de pago por suscripción, con planes escalonados según el volumen de palabras generadas al mes. Los planes de entrada suelen situarse en el entorno de los 20 $ mensuales y suben para quienes escriben mucho. Suele ofrecer una prueba inicial.',
    faqs: [
      {
        question: '¿Qué es Sudowrite?',
        answer:
          'Sudowrite es un asistente de escritura con inteligencia artificial creado para autores de ficción. Ofrece funciones como continuar una escena, ampliar descripciones, generar ideas de trama o reescribir pasajes, dentro de un editor pensado para novelas, relatos y guiones.',
      },
      {
        question: '¿Sudowrite es gratis?',
        answer:
          'No. Sudowrite funciona con suscripción de pago y planes según el volumen de palabras generadas, aunque suele permitir una prueba inicial limitada. Consulta la web oficial para conocer los planes y los precios vigentes antes de contratarlo.',
      },
      {
        question: '¿Sudowrite escribe en español?',
        answer:
          'Puede generar texto en español, pero la herramienta está optimizada sobre todo para el inglés y los resultados en nuestro idioma suelen requerir más reescritura. Para novela en español conviene usarlo como apoyo creativo y revisar a fondo el estilo.',
      },
    ],
  },
  YouWrite: {
    name: 'YouWrite',
    tagline: 'Generador de texto con IA para redactar contenidos de forma rápida',
    intro:
      'YouWrite es una herramienta de generación de texto con inteligencia artificial pensada para crear contenidos escritos a partir de indicaciones sencillas. Se enmarca dentro de las plataformas de asistencia a la redacción, orientadas a producir borradores de artículos, textos comerciales o comunicaciones sin partir de una página en blanco. Está dirigida a perfiles que necesitan generar contenido con frecuencia y quieren acelerar la fase de redacción.',
    useCases: [
      'Redactar borradores de artículos a partir de un tema',
      'Generar textos comerciales y descripciones breves',
      'Reescribir contenidos existentes con otro enfoque',
      'Producir ideas y esquemas antes de escribir',
      'Adaptar un texto a distintos tonos o públicos',
    ],
    features: [
      'Generación de texto a partir de indicaciones del usuario',
      'Ajuste del tono y del estilo de la redacción',
      'Reescritura y ampliación de contenidos existentes',
      'Interfaz web sin necesidad de instalar nada',
      'Formatos y plantillas para distintos tipos de contenido',
    ],
    pros: [
      'Acelera la fase de borrador y evita la página en blanco',
      'Interfaz sencilla, sin conocimientos técnicos previos',
      'Útil para producir contenido de forma recurrente',
      'Permite ajustar tono y estilo del resultado',
    ],
    cons: [
      'Herramienta de pago, sin plan gratuito estable',
      'Menos conocida que las alternativas de referencia',
      'El texto generado siempre requiere revisión humana',
    ],
    pricingNote:
      'YouWrite se ofrece mediante suscripción de pago, con planes que suelen depender del volumen de texto generado o del número de usuarios. Puede incluir una prueba inicial o créditos limitados para valorar la herramienta.',
    faqs: [
      {
        question: '¿Qué es YouWrite?',
        answer:
          'YouWrite es una herramienta de generación de texto con inteligencia artificial. Permite crear borradores de artículos, textos comerciales y otros contenidos escritos a partir de indicaciones sencillas, con opciones para ajustar el tono y reescribir textos ya existentes.',
      },
      {
        question: '¿YouWrite es gratis?',
        answer:
          'YouWrite es una herramienta de pago que funciona por suscripción, aunque puede ofrecer una prueba o créditos iniciales limitados. Los planes suelen variar según el volumen de texto generado. Consulta su web oficial para ver los precios vigentes.',
      },
      {
        question: '¿Para qué sirve YouWrite?',
        answer:
          'Sirve para acelerar la redacción de contenidos: generar borradores, reescribir textos, proponer esquemas y adaptar el tono a distintos públicos. Está pensada para quienes producen contenido con frecuencia y quieren reducir el tiempo de la primera versión.',
      },
    ],
  },
  DeepSeek: {
    name: 'DeepSeek',
    tagline: 'Modelos de IA de alto rendimiento con versiones abiertas y bajo coste',
    intro:
      'DeepSeek es una empresa china de inteligencia artificial que desarrolla grandes modelos de lenguaje, incluidos modelos de razonamiento. Ha ganado notoriedad por publicar modelos con pesos abiertos y por ofrecer acceso por API a precios muy competitivos frente a los grandes proveedores estadounidenses. Dispone además de un asistente conversacional web y móvil para usar los modelos sin necesidad de programar.',
    useCases: [
      'Resolver problemas de razonamiento, matemáticas y lógica',
      'Generar y revisar código en varios lenguajes',
      'Integrar generación de texto en aplicaciones vía API',
      'Desplegar modelos abiertos en infraestructura propia',
      'Consultar y redactar contenidos desde su asistente web',
    ],
    features: [
      'Modelos con pesos abiertos disponibles para descarga',
      'Modelos especializados en razonamiento paso a paso',
      'API compatible con formatos estándar del sector',
      'Asistente conversacional web y aplicaciones móviles',
      'Buen rendimiento en tareas de programación',
    ],
    pros: [
      'Coste por token muy bajo frente a otros proveedores',
      'Parte de sus modelos son abiertos y ejecutables en local',
      'Rendimiento destacado en razonamiento y código',
      'Asistente gratuito accesible desde el navegador',
    ],
    cons: [
      'Dudas sobre privacidad al tratarse de servidores fuera de la UE',
      'Algunas respuestas están sujetas a restricciones de contenido',
      'Ha sufrido limitaciones de registro por saturación del servicio',
    ],
    pricingNote:
      'DeepSeek sigue un modelo freemium: su asistente conversacional se puede usar de forma gratuita con límites, y varios de sus modelos se publican con pesos abiertos. El acceso por API se factura por consumo de tokens, con tarifas notablemente más bajas que las de otros grandes proveedores.',
    faqs: [
      {
        question: '¿Qué es DeepSeek?',
        answer:
          'DeepSeek es una empresa china de inteligencia artificial que desarrolla grandes modelos de lenguaje, incluidos modelos de razonamiento. Publica parte de ellos con pesos abiertos y ofrece un asistente conversacional gratuito además de acceso por API a bajo coste.',
      },
      {
        question: '¿DeepSeek es gratis?',
        answer:
          'El asistente conversacional de DeepSeek se puede usar gratis con límites de uso, y varios de sus modelos son abiertos y descargables. El acceso por API se paga por consumo, con tarifas bajas. Consulta su web para conocer los precios actuales.',
      },
      {
        question: '¿Es seguro usar DeepSeek con datos sensibles?',
        answer:
          'Al usar su servicio en la nube, los datos se procesan en servidores fuera de la Unión Europea, algo a valorar con información confidencial. Una alternativa es descargar sus modelos abiertos y ejecutarlos en infraestructura propia para mantener el control.',
      },
    ],
  },
  Midjourney: {
    name: 'Midjourney',
    tagline: 'Generador de imágenes con IA orientado a resultados artísticos de alta calidad',
    intro:
      'Midjourney es una herramienta de generación de imágenes mediante inteligencia artificial, conocida por la calidad estética de sus resultados. A partir de una descripción en texto produce ilustraciones, fotografías sintéticas y arte conceptual con un acabado muy cuidado. Nació como un servicio accesible desde Discord y hoy cuenta también con una interfaz web, y es muy utilizada por diseñadores, ilustradores y equipos creativos.',
    useCases: [
      'Crear arte conceptual e ilustraciones para proyectos creativos',
      'Generar imágenes para campañas, portadas y redes sociales',
      'Explorar estilos visuales antes de un encargo de diseño',
      'Producir referencias visuales para moodboards',
      'Diseñar personajes y escenarios para narrativa o juegos',
    ],
    features: [
      'Generación de imágenes a partir de descripciones en texto',
      'Variaciones y reencuadres a partir de una imagen base',
      'Parámetros para controlar estilo, proporción y coherencia',
      'Acceso desde Discord y desde su interfaz web',
      'Galería y comunidad con prompts de otros usuarios',
    ],
    pros: [
      'Calidad estética de las imágenes muy por encima de la media',
      'Gran control del estilo mediante parámetros y referencias',
      'Comunidad muy activa de la que aprender prompts',
      'Resultados coherentes y utilizables en proyectos reales',
    ],
    cons: [
      'No tiene versión gratuita: requiere suscripción desde el inicio',
      'La curva de aprendizaje de los prompts es notable',
      'El flujo desde Discord resulta poco intuitivo al principio',
    ],
    pricingNote:
      'Midjourney es un servicio de pago por suscripción, sin plan gratuito permanente. Los planes se escalonan según el tiempo de generación y las opciones de privacidad, partiendo de unos 10 $ al mes en el nivel más básico y subiendo en los planes profesionales.',
    faqs: [
      {
        question: '¿Qué es Midjourney y para qué sirve?',
        answer:
          'Midjourney es un generador de imágenes con inteligencia artificial. A partir de una descripción escrita crea ilustraciones, arte conceptual o imágenes fotorrealistas. Se usa en diseño, publicidad y proyectos creativos, y es conocido por la calidad estética de sus resultados.',
      },
      {
        question: '¿Midjourney es gratis?',
        answer:
          'No. Midjourney funciona únicamente con suscripción de pago y no ofrece un plan gratuito permanente. Los planes varían según el tiempo de generación incluido y otras opciones. Consulta la web oficial para conocer las tarifas actuales.',
      },
      {
        question: '¿Se pueden usar las imágenes de Midjourney comercialmente?',
        answer:
          'Los planes de pago suelen permitir el uso comercial de las imágenes generadas, con condiciones distintas según el tipo de suscripción y el tamaño de la empresa. Conviene leer los términos de servicio actualizados antes de usarlas en un proyecto comercial.',
      },
    ],
  },
  'DALL·E': {
    name: 'DALL·E',
    tagline: 'Generador de imágenes de OpenAI que crea ilustraciones desde texto',
    intro:
      'DALL·E es el modelo de generación de imágenes desarrollado por OpenAI. Convierte descripciones escritas en ilustraciones, fotografías sintéticas o composiciones gráficas, y permite además editar imágenes existentes. Está integrado en ChatGPT, lo que facilita generar y refinar imágenes conversando en lenguaje natural, y también es accesible para desarrolladores mediante la API de OpenAI.',
    useCases: [
      'Crear ilustraciones para artículos, blogs y presentaciones',
      'Generar imágenes de producto o bocetos visuales rápidos',
      'Editar y ampliar imágenes ya existentes',
      'Producir contenido visual para redes sociales',
      'Explorar ideas gráficas antes de un diseño definitivo',
    ],
    features: [
      'Generación de imágenes a partir de descripciones de texto',
      'Edición de imágenes y relleno de zonas concretas',
      'Integración directa dentro de la interfaz de ChatGPT',
      'Refinamiento del resultado mediante conversación',
      'Acceso por API para integraciones propias',
    ],
    pros: [
      'Muy fácil de usar: basta describir lo que quieres',
      'Buena interpretación de indicaciones largas y detalladas',
      'Integrado con ChatGPT, sin cambiar de herramienta',
      'Permite iterar sobre la imagen conversando',
    ],
    cons: [
      'Calidad artística por debajo de alternativas especializadas',
      'Filtros de contenido que rechazan ciertas peticiones',
      'El uso amplio requiere suscripción o pago por API',
    ],
    pricingNote:
      'DALL·E sigue un esquema freemium a través de ChatGPT: hay un acceso limitado sin coste y una generación más amplia en los planes de pago, que suelen partir de unos 20 $ al mes. El uso mediante API se factura por imagen generada.',
    faqs: [
      {
        question: '¿Qué es DALL·E?',
        answer:
          'DALL·E es el modelo de generación de imágenes de OpenAI. Crea ilustraciones y fotografías sintéticas a partir de descripciones escritas y permite editar imágenes existentes. Está integrado en ChatGPT y disponible para desarrolladores a través de la API de OpenAI.',
      },
      {
        question: '¿DALL·E es gratis?',
        answer:
          'Existe un acceso gratuito limitado a través de ChatGPT, con restricciones en el número de imágenes. Para un uso más intensivo hace falta una suscripción de pago o el acceso por API, facturado por imagen. Consulta la web oficial para los precios actuales.',
      },
      {
        question: '¿Cómo se usa DALL·E?',
        answer:
          'La forma más sencilla es pedir la imagen dentro de ChatGPT describiendo lo que quieres: estilo, encuadre, colores y elementos. Después puedes pedir ajustes en la misma conversación. Los desarrolladores pueden generarlas directamente desde la API de OpenAI.',
      },
    ],
  },
  'Stable Diffusion': {
    name: 'Stable Diffusion',
    tagline: 'Modelo open source de generación de imágenes ejecutable en tu propio equipo',
    intro:
      'Stable Diffusion es un modelo de generación de imágenes de código abierto impulsado por Stability AI. Su principal característica es que los pesos son públicos, de modo que se puede ejecutar en un ordenador propio o en un servidor sin depender de un servicio externo. Alrededor de él ha crecido un ecosistema enorme de interfaces, extensiones y modelos derivados creados por la comunidad.',
    useCases: [
      'Generar imágenes en local sin enviar datos a terceros',
      'Entrenar modelos derivados con un estilo propio',
      'Crear ilustraciones y arte conceptual sin coste por imagen',
      'Editar imágenes con técnicas de inpainting y outpainting',
      'Integrar generación de imágenes en aplicaciones propias',
    ],
    features: [
      'Pesos abiertos que permiten ejecución local',
      'Amplio ecosistema de interfaces gráficas comunitarias',
      'Modelos y LoRA derivados para estilos concretos',
      'Control avanzado del resultado mediante extensiones',
      'Generación ilimitada sin coste por imagen',
    ],
    pros: [
      'Gratuito y sin límite de imágenes si lo ejecutas en local',
      'Control y personalización muy superiores a las alternativas cerradas',
      'Privacidad total: las imágenes no salen de tu equipo',
      'Comunidad enorme con modelos y tutoriales',
    ],
    cons: [
      'Requiere una tarjeta gráfica potente para ir con soltura',
      'La instalación y configuración exige cierto nivel técnico',
      'La calidad por defecto depende mucho del modelo elegido',
    ],
    pricingNote:
      'Stable Diffusion es open source y su uso en local no tiene coste de licencia: solo necesitas el hardware. Existen servicios web y API de terceros que lo ofrecen alojado, con planes gratuitos limitados y pago por consumo. Revisa la licencia del modelo concreto antes de un uso comercial.',
    faqs: [
      {
        question: '¿Qué es Stable Diffusion?',
        answer:
          'Stable Diffusion es un modelo open source de generación de imágenes a partir de texto, impulsado por Stability AI. Al ser abierto, se puede ejecutar en un ordenador propio, personalizar con modelos derivados e integrar en aplicaciones sin depender de un servicio externo.',
      },
      {
        question: '¿Stable Diffusion es gratis?',
        answer:
          'Sí, el modelo es open source y su ejecución en local no tiene coste de licencia; solo necesitas hardware adecuado. También hay webs y API de terceros que lo ofrecen alojado, algunas con plan gratuito limitado y otras de pago por uso.',
      },
      {
        question: '¿Qué hace falta para ejecutar Stable Diffusion en local?',
        answer:
          'Se necesita un ordenador con una tarjeta gráfica con suficiente memoria de vídeo y alguna de las interfaces creadas por la comunidad. La instalación requiere seguir una guía técnica, aunque existen distribuciones que simplifican bastante el proceso.',
      },
    ],
  },
  'Adobe Firefly': {
    name: 'Adobe Firefly',
    tagline: 'IA generativa de Adobe integrada en Photoshop y su suite creativa',
    intro:
      'Adobe Firefly es la familia de modelos de IA generativa de Adobe, orientada a la creación y edición de contenido visual. Genera imágenes a partir de texto, aplica efectos y permite ampliar o modificar fotografías, y se integra en herramientas como Photoshop e Illustrator mediante funciones como el relleno generativo. Adobe destaca que sus modelos se entrenan con contenido licenciado, pensando en el uso comercial seguro.',
    useCases: [
      'Generar imágenes desde texto dentro del flujo de Adobe',
      'Ampliar o rellenar zonas de una foto con relleno generativo',
      'Crear efectos de texto y variaciones tipográficas',
      'Producir recursos visuales para campañas y redes',
      'Eliminar o sustituir elementos de una imagen',
    ],
    features: [
      'Integración nativa con Photoshop, Illustrator y Express',
      'Relleno generativo para editar imágenes existentes',
      'Modelos entrenados con contenido licenciado',
      'Generación de efectos de texto y plantillas',
      'Sistema de créditos generativos dentro de la suite',
    ],
    pros: [
      'Encaja directamente en el flujo de trabajo de Adobe',
      'Orientado a un uso comercial con menos riesgos de derechos',
      'Muy potente para editar fotos, no solo para crearlas',
      'Interfaz accesible para diseñadores sin conocimientos de prompts',
    ],
    cons: [
      'Las mejores funciones requieren suscripción a Creative Cloud',
      'El sistema de créditos limita el volumen de generaciones',
      'Calidad artística algo por detrás de rivales especializados',
    ],
    pricingNote:
      'Firefly sigue un modelo freemium: hay un uso gratuito con un número limitado de créditos generativos al mes y planes de pago que amplían esa cuota, además de estar incluido en las suscripciones de Creative Cloud. El coste depende del plan de Adobe contratado.',
    faqs: [
      {
        question: '¿Qué es Adobe Firefly?',
        answer:
          'Adobe Firefly es la IA generativa de Adobe para contenido visual. Permite crear imágenes desde texto, aplicar efectos y editar fotografías con funciones como el relleno generativo, integradas en Photoshop, Illustrator y otras aplicaciones de la suite creativa.',
      },
      {
        question: '¿Adobe Firefly es gratis?',
        answer:
          'Firefly ofrece un uso gratuito con créditos generativos limitados cada mes. Para un volumen mayor hace falta un plan de pago o una suscripción de Creative Cloud que incluya más créditos. Consulta la web de Adobe para conocer los planes vigentes.',
      },
      {
        question: '¿Las imágenes de Firefly se pueden usar comercialmente?',
        answer:
          'Adobe diseñó Firefly pensando en el uso comercial y lo entrena con contenido licenciado para reducir riesgos de derechos de autor. Aun así, conviene revisar los términos de uso vigentes de Adobe, que pueden variar según el plan y el tipo de contenido.',
      },
    ],
  },
  Imagen: {
    name: 'Imagen',
    tagline: 'Modelo de generación de imágenes de Google DeepMind desde texto',
    intro:
      'Imagen es el modelo de generación de imágenes desarrollado por Google DeepMind. Convierte descripciones en texto en imágenes de alta calidad, con especial atención al realismo fotográfico y a la fidelidad respecto a lo que se pide. No se ofrece como una aplicación independiente al uso, sino que se accede a él a través de productos de Google como Gemini y de sus plataformas para desarrolladores.',
    useCases: [
      'Generar imágenes fotorrealistas a partir de una descripción',
      'Crear ilustraciones para presentaciones y contenidos',
      'Producir recursos visuales desde el asistente Gemini',
      'Integrar generación de imágenes en aplicaciones vía API',
      'Explorar conceptos visuales antes de un diseño final',
    ],
    features: [
      'Generación de imágenes de alta fidelidad desde texto',
      'Buen tratamiento de texto dentro de las imágenes',
      'Acceso a través de Gemini y de plataformas de Google Cloud',
      'Marcado de imágenes generadas con marcas de agua digitales',
      'Distintas variantes según velocidad y calidad',
    ],
    pros: [
      'Resultados muy realistas y fieles a la descripción',
      'Accesible sin instalar nada desde productos de Google',
      'Buena representación de texto dentro de la imagen',
      'Respaldo de la investigación de Google DeepMind',
    ],
    cons: [
      'No es un producto independiente: depende de Gemini o de Cloud',
      'El acceso ilimitado suele requerir plan de pago',
      'Filtros de contenido que restringen ciertas peticiones',
    ],
    pricingNote:
      'Imagen se usa normalmente a través de productos de Google: dentro de Gemini hay generación gratuita con límites y mayor cuota en los planes de pago, mientras que en las plataformas cloud se factura por imagen generada. No es una herramienta con precio propio independiente.',
    faqs: [
      {
        question: '¿Qué es Imagen de Google?',
        answer:
          'Imagen es el modelo de generación de imágenes de Google DeepMind. Crea imágenes a partir de descripciones en texto, con un enfoque en el realismo y la fidelidad. Se accede a él desde productos como Gemini y desde las plataformas de desarrollo de Google.',
      },
      {
        question: '¿Cómo se usa Imagen?',
        answer:
          'La vía más sencilla es pedir una imagen al asistente Gemini describiendo lo que quieres. Los desarrolladores pueden llamarlo desde las plataformas de IA de Google Cloud. No existe una aplicación independiente de Imagen para usuarios finales.',
      },
      {
        question: '¿Imagen es gratis?',
        answer:
          'Se puede generar imágenes sin coste con límites a través de la versión gratuita de Gemini. Un uso mayor requiere plan de pago, y en las plataformas cloud se factura por imagen generada. Consulta la web de Google para los precios actuales.',
      },
    ],
  },
  FLUX: {
    name: 'FLUX',
    tagline: 'Modelos de generación de imágenes de Black Forest Labs, con versiones abiertas',
    intro:
      'FLUX es una familia de modelos de generación de imágenes creada por Black Forest Labs, equipo formado por investigadores procedentes del desarrollo de Stable Diffusion. Destaca por la calidad de sus resultados y por su buena representación de texto dentro de las imágenes. Publica variantes con pesos abiertos que se pueden ejecutar en equipos propios, junto a versiones comerciales accesibles mediante servicios y API de terceros.',
    useCases: [
      'Generar imágenes de alta calidad a partir de texto',
      'Crear composiciones que incluyan texto legible',
      'Ejecutar generación de imágenes en local con pesos abiertos',
      'Integrar generación visual en aplicaciones vía API',
      'Producir arte conceptual e ilustraciones para proyectos',
    ],
    features: [
      'Variantes abiertas y comerciales del mismo modelo',
      'Buena representación de texto dentro de las imágenes',
      'Compatible con las interfaces habituales de la comunidad',
      'Modelos rápidos y modelos de máxima calidad',
      'Disponible en numerosas plataformas y servicios de terceros',
    ],
    pros: [
      'Calidad de imagen muy competitiva frente a modelos cerrados',
      'Versiones abiertas ejecutables en hardware propio',
      'Maneja el texto en imágenes mejor que muchas alternativas',
      'Amplia disponibilidad en servicios y herramientas de terceros',
    ],
    cons: [
      'Las variantes más potentes no son abiertas y son de pago',
      'El uso en local exige una tarjeta gráfica con bastante memoria',
      'Las licencias varían según la versión del modelo',
    ],
    pricingNote:
      'FLUX combina modelos con pesos abiertos, gratuitos de descargar y ejecutar, con variantes comerciales que se pagan por uso a través de API o plataformas de terceros. Algunas webs ofrecen generación gratuita limitada. Las condiciones de licencia cambian según la versión, así que',
    faqs: [
      {
        question: '¿Qué es FLUX en IA de imágenes?',
        answer:
          'FLUX es una familia de modelos de generación de imágenes desarrollada por Black Forest Labs, equipo con origen en el desarrollo de Stable Diffusion. Convierte texto en imágenes de alta calidad y ofrece tanto versiones con pesos abiertos como variantes comerciales.',
      },
      {
        question: '¿FLUX es gratis?',
        answer:
          'Algunas variantes de FLUX se publican con pesos abiertos y se pueden descargar y ejecutar sin coste de licencia, asumiendo el gasto del hardware. Las versiones más potentes son comerciales y se pagan por uso. Revisa la licencia de cada versión.',
      },
      {
        question: '¿FLUX genera texto dentro de las imágenes?',
        answer:
          'Sí, una de sus fortalezas frente a otros modelos es la representación de texto legible dentro de la imagen, útil para carteles, logotipos o composiciones con palabras. Aun así, conviene revisar el resultado, ya que pueden aparecer errores tipográficos.',
      },
    ],
  },
  Ideogram: {
    name: 'Ideogram',
    tagline: 'Generador de imágenes con IA especializado en tipografía y texto legible',
    intro:
      'Ideogram es una herramienta de generación de imágenes a partir de texto desarrollada por una empresa del mismo nombre fundada por investigadores procedentes del ámbito de la IA generativa. Su rasgo más reconocible es la capacidad de representar texto dentro de las imágenes con bastante fidelidad, algo históricamente difícil para este tipo de modelos. Se usa sobre todo para carteles, logotipos, ilustraciones y piezas gráficas donde el rótulo forma parte del diseño.',
    useCases: [
      'Crear carteles y flyers con títulos legibles integrados',
      'Generar propuestas de logotipo e identidad visual',
      'Diseñar portadas para blogs, pódcast o redes sociales',
      'Ilustrar artículos y presentaciones sin banco de imágenes',
      'Explorar conceptos visuales rápidos antes de un diseño final',
    ],
    features: [
      'Generación de texto a imagen con prompts en lenguaje natural',
      'Renderizado de texto y tipografía dentro de la imagen',
      'Estilos y presets visuales seleccionables',
      'Feed público con imágenes y prompts de la comunidad',
      'Descarga en distintas relaciones de aspecto',
    ],
    pros: [
      'Uno de los mejores resultados del mercado al escribir texto en imágenes',
      'Interfaz sencilla, apta para quien no tiene experiencia en diseño',
      'Permite reutilizar prompts de la comunidad como punto de partida',
    ],
    cons: [
      'El plan gratuito impone límites de generaciones y velocidad',
      'Menos control fino que herramientas de diseño vectorial profesionales',
      'El texto largo o complejo aún puede salir con errores',
    ],
    pricingNote:
      'Ideogram funciona con un modelo freemium: suele ofrecer un plan gratuito con un número limitado de generaciones y planes de pago con más créditos, generación más rápida y uso comercial. Los tramos de pago se mueven en el rango habitual de este tipo de servicios, en torno a unos pocos euros al mes en la entrada.',
    faqs: [
      {
        question: '¿Qué es Ideogram?',
        answer:
          'Ideogram es un generador de imágenes con inteligencia artificial que crea ilustraciones y diseños a partir de una descripción escrita. Destaca por representar texto legible dentro de las imágenes, lo que lo hace útil para carteles, logotipos y portadas donde la tipografía es parte del resultado.',
      },
      {
        question: '¿Ideogram es gratis?',
        answer:
          'Tiene un plan gratuito con un número limitado de generaciones, suficiente para probarlo y para usos puntuales. Si necesitas más volumen, generación más rápida o condiciones de uso comercial, hay planes de pago. Consulta su web para conocer los precios y límites actualizados.',
      },
      {
        question: '¿Ideogram funciona en español?',
        answer:
          'Sí, puedes escribir los prompts en español y la herramienta los interpreta sin problema. Aun así, muchos usuarios obtienen resultados algo más precisos redactando en inglés, ya que la mayoría de estos modelos se entrenan con más datos en ese idioma.',
      },
    ],
  },
  Recraft: {
    name: 'Recraft',
    tagline: 'Diseño gráfico con IA para vectores, iconos e ilustraciones de marca',
    intro:
      'Recraft es una plataforma de diseño con inteligencia artificial orientada a equipos de producto y marketing. A diferencia de los generadores centrados solo en imágenes rasterizadas, permite producir gráficos vectoriales, iconos e ilustraciones con un estilo coherente, lo que facilita mantener una identidad visual homogénea. Se usa para crear activos gráficos listos para web, presentaciones y materiales de marca sin partir de cero en un editor tradicional.',
    useCases: [
      'Generar sets de iconos coherentes para una web o app',
      'Crear ilustraciones vectoriales editables para landing pages',
      'Producir imágenes de marca con un estilo consistente',
      'Diseñar mockups y elementos gráficos para presentaciones',
      'Iterar sobre conceptos visuales antes de encargar diseño final',
    ],
    features: [
      'Generación de gráficos vectoriales exportables',
      'Creación de estilos propios reutilizables entre proyectos',
      'Generación de iconos e ilustraciones en lote',
      'Herramientas de edición y ajuste sobre lo generado',
      'Exportación en formatos aptos para diseño y web',
    ],
    pros: [
      'El resultado vectorial es editable y escalable, no solo un PNG',
      'Los estilos personalizados ayudan a mantener coherencia de marca',
      'Buen encaje en flujos de trabajo de diseño de producto',
    ],
    cons: [
      'Curva de aprendizaje mayor que la de un generador de imágenes simple',
      'El plan gratuito limita créditos y algunas funciones avanzadas',
      'Los vectores generados pueden necesitar limpieza manual',
    ],
    pricingNote:
      'Recraft sigue un modelo freemium: hay un plan gratuito con créditos diarios limitados y planes de pago por suscripción que amplían créditos, resolución y derechos de uso comercial. Los planes de entrada suelen situarse en el entorno de los precios habituales de las herramientas de diseño SaaS.',
    faqs: [
      {
        question: '¿Qué es Recraft?',
        answer:
          'Recraft es una herramienta de diseño gráfico con IA que genera imágenes, iconos e ilustraciones, incluidos gráficos vectoriales editables. Está pensada para equipos que necesitan producir activos visuales con un estilo coherente sin depender por completo de un diseñador o de un editor tradicional.',
      },
      {
        question: '¿Recraft permite exportar vectores?',
        answer:
          'Sí, esa es una de sus señas de identidad. Además de imágenes en mapa de bits, permite generar y exportar gráficos vectoriales, lo que resulta útil para iconos y logotipos que deben escalarse sin perder calidad o editarse después en un programa de diseño.',
      },
      {
        question: '¿Recraft es gratis?',
        answer:
          'Ofrece un plan gratuito con créditos limitados para probar la herramienta. Para un uso profesional continuado, con más generaciones, mayor resolución y licencia comercial, es necesario pasar a un plan de pago. Consulta su web para ver los tramos y precios actualizados.',
      },
    ],
  },
  'Leonardo AI': {
    name: 'Leonardo AI',
    tagline: 'Plataforma de arte generativo para creativos, videojuegos y contenido visual',
    intro:
      'Leonardo AI es una plataforma de generación de imágenes con inteligencia artificial orientada a creativos y estudios, con especial arraigo en el sector de los videojuegos. Además de crear imágenes a partir de texto, ofrece herramientas de refinado, control de composición y entrenamiento de modelos con estilos propios. Se usa para concept art, assets visuales, ilustración y producción de contenido gráfico en volumen.',
    useCases: [
      'Crear concept art y bocetos para videojuegos',
      'Generar assets visuales coherentes para un proyecto',
      'Producir imágenes para campañas de marketing y redes',
      'Entrenar un estilo propio y reutilizarlo en varias piezas',
      'Iterar variaciones de un mismo personaje o escenario',
    ],
    features: [
      'Generación de imágenes a partir de texto y de imagen de referencia',
      'Modelos ajustados a distintos estilos artísticos',
      'Entrenamiento de modelos personalizados con imágenes propias',
      'Herramientas de edición como inpainting y ampliación',
      'Canvas para componer y retocar los resultados',
    ],
    pros: [
      'Mucho control creativo comparado con generadores más básicos',
      'Comunidad activa y biblioteca amplia de modelos y estilos',
      'Sistema de créditos diarios que permite un uso gratuito real',
    ],
    cons: [
      'La cantidad de opciones puede abrumar a un usuario novato',
      'Los créditos gratuitos se agotan rápido con generaciones de calidad alta',
      'Los tiempos de espera aumentan en horas de mucha demanda',
    ],
    pricingNote:
      'Leonardo AI es freemium: incluye un sistema de créditos gratuitos que se renuevan a diario y varios planes de suscripción que amplían créditos, generaciones simultáneas y funciones avanzadas. Los planes de pago cubren desde uso personal hasta equipos.',
    faqs: [
      {
        question: '¿Qué es Leonardo AI?',
        answer:
          'Leonardo AI es una plataforma de arte generativo que crea imágenes con inteligencia artificial a partir de descripciones de texto o imágenes de referencia. Ofrece modelos y estilos variados, edición avanzada y entrenamiento personalizado, y es muy usada en concept art y desarrollo de videojuegos.',
      },
      {
        question: '¿Leonardo AI es gratis?',
        answer:
          'Sí, dispone de un plan gratuito con créditos que se renuevan cada día, suficientes para experimentar. Para un uso intensivo o profesional, con más créditos y funciones avanzadas, existen planes de suscripción de pago. Consulta su web para precios y límites actualizados.',
      },
      {
        question: '¿Puedo usar comercialmente las imágenes de Leonardo AI?',
        answer:
          'Las condiciones de uso comercial dependen del plan contratado y de los términos vigentes de la plataforma. Los planes de pago suelen incluir derechos de uso comercial más amplios que el gratuito. Revisa siempre sus términos de servicio antes de usar las imágenes en un proyecto profesional.',
      },
    ],
  },
  Seedream: {
    name: 'Seedream',
    tagline: 'Modelo de generación de imágenes con IA desarrollado por ByteDance',
    intro:
      'Seedream es un modelo de generación de imágenes a partir de texto desarrollado por el equipo de investigación Seed de ByteDance, la empresa detrás de TikTok. Está pensado para producir imágenes de alta calidad con buen seguimiento de las instrucciones del prompt y soporte de texto dentro de la imagen. Se accede principalmente a través de los productos y las interfaces que la propia compañía pone a disposición.',
    useCases: [
      'Generar ilustraciones y fotografías sintéticas a partir de texto',
      'Crear material visual para redes sociales y campañas',
      'Explorar conceptos de diseño y bocetos rápidos',
      'Producir imágenes con rótulos o texto integrado',
      'Probar variaciones de estilo sobre una misma idea',
    ],
    features: [
      'Generación de imágenes a partir de descripciones en lenguaje natural',
      'Buen seguimiento de instrucciones complejas del prompt',
      'Soporte de texto renderizado dentro de la imagen',
      'Salida en alta resolución',
      'Distintas relaciones de aspecto y estilos',
    ],
    pros: [
      'Calidad de imagen competitiva frente a modelos de referencia',
      'Respaldo de un equipo de investigación con recursos amplios',
      'Acceso sin coste a través de sus interfaces públicas',
    ],
    cons: [
      'La disponibilidad y el acceso pueden variar según el país',
      'Menos integraciones y ecosistema que otras herramientas consolidadas',
      'La documentación en español es escasa',
    ],
    pricingNote:
      'Seedream se presenta como un modelo accesible de forma gratuita a través de las interfaces y productos de su desarrollador, aunque el uso vía API o en volumen puede estar sujeto a condiciones y costes específicos. Las condiciones de acceso pueden cambiar con el tiempo.',
    faqs: [
      {
        question: '¿Qué es Seedream?',
        answer:
          'Seedream es un modelo de inteligencia artificial que genera imágenes a partir de descripciones de texto, desarrollado por el equipo de investigación Seed de ByteDance. Destaca por la calidad de las imágenes, el seguimiento fiel del prompt y la capacidad de representar texto dentro de la imagen.',
      },
      {
        question: '¿Seedream es gratis?',
        answer:
          'El acceso al modelo suele ofrecerse sin coste a través de las interfaces públicas de su desarrollador, con posibles límites de uso. El acceso por API o en grandes volúmenes puede tener condiciones distintas. Consulta su web para conocer la disponibilidad y los precios actualizados.',
      },
      {
        question: '¿Para qué sirve Seedream?',
        answer:
          'Sirve para crear imágenes originales sin necesidad de saber diseñar: basta con describir lo que quieres. Se emplea en ilustración, contenido para redes sociales, bocetos de diseño y piezas gráficas en las que se necesita integrar texto legible dentro de la propia imagen.',
      },
    ],
  },
  Aurora: {
    name: 'Aurora',
    tagline: 'Generador de imágenes de xAI integrado en el asistente Grok',
    intro:
      'Aurora es el modelo de generación de imágenes desarrollado por xAI, la empresa de inteligencia artificial detrás del asistente Grok. Permite crear imágenes fotorrealistas y arte generativo a partir de descripciones en lenguaje natural, y su uso principal se produce dentro de la propia interfaz de Grok. Está orientado a usuarios que ya trabajan con ese asistente y quieren generar imágenes sin salir de él.',
    useCases: [
      'Generar imágenes fotorrealistas a partir de una descripción',
      'Ilustrar publicaciones y conversaciones dentro de Grok',
      'Crear arte conceptual y composiciones visuales rápidas',
      'Producir material gráfico para redes sociales',
      'Explorar variaciones visuales de una misma idea',
    ],
    features: [
      'Generación de imágenes a partir de texto en lenguaje natural',
      'Integración directa en el asistente conversacional Grok',
      'Resultados orientados al fotorrealismo',
      'Iteración sobre la imagen mediante nuevas instrucciones',
      'Acceso desde web y aplicaciones del ecosistema',
    ],
    pros: [
      'Flujo cómodo si ya usas Grok como asistente principal',
      'Buenos resultados en imágenes de aspecto fotográfico',
      'Generación conversacional: pides cambios y refina sobre la marcha',
    ],
    cons: [
      'El acceso está ligado a una suscripción de pago del ecosistema',
      'Menos controles finos que herramientas de imagen especializadas',
      'Su disponibilidad y límites pueden cambiar con frecuencia',
    ],
    pricingNote:
      'Aurora se ofrece dentro del ecosistema de xAI y su acceso completo está asociado a las suscripciones de pago que dan acceso a Grok. Los planes se comercializan por suscripción mensual y pueden incluir límites de generación.',
    faqs: [
      {
        question: '¿Qué es Aurora de xAI?',
        answer:
          'Aurora es el modelo de generación de imágenes creado por xAI. Permite producir imágenes, incluidas composiciones fotorrealistas, a partir de descripciones escritas, y se utiliza principalmente desde la interfaz del asistente Grok, sin necesidad de una herramienta de diseño aparte.',
      },
      {
        question: '¿Aurora es gratis?',
        answer:
          'Su acceso está vinculado al ecosistema de Grok y suele requerir una suscripción de pago, aunque puntualmente puede haber acceso limitado sin coste. Los límites y condiciones cambian con frecuencia. Consulta su web para conocer la disponibilidad y los precios actualizados.',
      },
      {
        question: '¿Para qué sirve Aurora?',
        answer:
          'Sirve para generar imágenes con inteligencia artificial describiendo con palabras lo que quieres ver. Se usa para ilustrar contenidos, crear material visual para redes sociales y explorar ideas gráficas, todo dentro de una conversación con el asistente, refinando el resultado paso a paso.',
      },
    ],
  },
  'Playground AI': {
    name: 'Playground AI',
    tagline: 'Editor online para crear y retocar imágenes con inteligencia artificial',
    intro:
      'Playground AI es una herramienta web para generar y editar imágenes con inteligencia artificial. Combina la generación a partir de texto con un lienzo de edición donde se pueden retocar zonas concretas, ampliar el encuadre o mezclar elementos. Está pensada para usuarios que quieren pasar de la idea a una imagen acabada sin cambiar de aplicación ni dominar un editor gráfico profesional.',
    useCases: [
      'Crear imágenes para redes sociales y blogs',
      'Retocar o sustituir partes concretas de una imagen',
      'Ampliar el encuadre de una foto existente',
      'Diseñar gráficos y fondos para presentaciones',
      'Generar variaciones visuales de un mismo concepto',
    ],
    features: [
      'Generación de imágenes a partir de texto',
      'Lienzo de edición con inpainting y outpainting',
      'Filtros y estilos predefinidos',
      'Control de parámetros de generación',
      'Descarga en distintos formatos y tamaños',
    ],
    pros: [
      'Interfaz accesible para quien empieza con imagen generativa',
      'Combina generación y edición en un mismo lienzo',
      'Cuota gratuita diaria suficiente para uso ocasional',
    ],
    cons: [
      'El plan gratuito limita el número de imágenes al día',
      'Menos potencia de edición que un editor gráfico profesional',
      'La calidad depende mucho de lo bien redactado que esté el prompt',
    ],
    pricingNote:
      'Playground AI funciona con un modelo freemium: ofrece una cuota de imágenes gratuitas al día y planes de pago que amplían generaciones, velocidad y funciones avanzadas. Los planes de suscripción se sitúan en el rango habitual de las herramientas de imagen generativa.',
    faqs: [
      {
        question: '¿Qué es Playground AI?',
        answer:
          'Playground AI es una herramienta online que genera imágenes con inteligencia artificial a partir de texto y permite editarlas en un lienzo integrado. Sirve para crear ilustraciones, gráficos y fotografías sintéticas, así como para retocar o ampliar imágenes ya existentes.',
      },
      {
        question: '¿Playground AI es gratis?',
        answer:
          'Dispone de un plan gratuito con un límite diario de imágenes, suficiente para probar la herramienta o para un uso esporádico. Los planes de pago amplían el número de generaciones y desbloquean funciones adicionales. Consulta su web para conocer los precios actualizados.',
      },
      {
        question: '¿Para qué sirve Playground AI?',
        answer:
          'Sirve para crear imágenes desde cero describiendo lo que necesitas y para editar imágenes ya existentes: cambiar elementos, rellenar zonas o ampliar el encuadre. Es útil para contenido de redes sociales, blogs y presentaciones cuando no dispones de un diseñador.',
      },
    ],
  },
  ElevenLabs: {
    name: 'ElevenLabs',
    tagline: 'Síntesis de voz y clonación vocal realista para audio profesional',
    intro:
      'ElevenLabs es una plataforma de inteligencia artificial de voz que convierte texto en audio hablado con un realismo notable y permite clonar voces a partir de muestras. Ofrece también doblaje automático a múltiples idiomas y una API para integrar la síntesis en productos propios. Se utiliza en audiolibros, pódcast, vídeos, videojuegos y asistentes con voz.',
    useCases: [
      'Narrar audiolibros y artículos con voz sintética natural',
      'Doblar vídeos a otros idiomas manteniendo la voz original',
      'Poner voz a vídeos de YouTube y contenido formativo',
      'Crear voces para personajes de videojuegos',
      'Integrar voz en asistentes y productos mediante su API',
    ],
    features: [
      'Conversión de texto a voz con entonación natural',
      'Clonación de voz a partir de muestras de audio',
      'Doblaje automático a numerosos idiomas',
      'Biblioteca amplia de voces predefinidas',
      'API para integrar la síntesis en aplicaciones',
    ],
    pros: [
      'Calidad de voz entre las más naturales del mercado',
      'Soporte sólido de español y de muchos otros idiomas',
      'API bien documentada para integraciones técnicas',
    ],
    cons: [
      'El plan gratuito ofrece pocos caracteres al mes',
      'El coste escala rápido con volúmenes altos de audio',
      'La clonación de voz plantea cuestiones éticas y legales a vigilar',
    ],
    pricingNote:
      'ElevenLabs es freemium: hay un plan gratuito con una cuota mensual reducida de caracteres y varios planes de pago escalonados según el volumen de audio y las funciones de clonación. Los planes de entrada arrancan en cifras bajas y suben conforme aumenta el consumo.',
    faqs: [
      {
        question: '¿Qué es ElevenLabs?',
        answer:
          'ElevenLabs es una plataforma de inteligencia artificial que convierte texto en voz con un sonido muy natural. Permite clonar voces a partir de grabaciones, doblar vídeos a otros idiomas y usar su API para añadir voz sintética a aplicaciones, audiolibros o vídeos.',
      },
      {
        question: '¿ElevenLabs funciona en español?',
        answer:
          'Sí. Soporta español junto a muchos otros idiomas, con voces que suenan naturales y respetan la entonación. También puede doblar contenido de un idioma a otro conservando el timbre de la voz original, algo útil para localizar vídeos y pódcast.',
      },
      {
        question: '¿ElevenLabs es gratis?',
        answer:
          'Ofrece un plan gratuito con una cantidad limitada de caracteres al mes, útil para probarlo. Para producción real se necesita un plan de pago, cuyo coste depende del volumen de audio y de las funciones de clonación. Consulta su web para precios actualizados.',
      },
    ],
  },
  Voicemod: {
    name: 'Voicemod',
    tagline: 'Modificador de voz en tiempo real para gaming, streaming y llamadas',
    intro:
      'Voicemod es un software de modificación de voz en tiempo real desarrollado por una empresa española. Se integra con juegos, plataformas de streaming y aplicaciones de comunicación para transformar la voz del usuario con distintos efectos y filtros, algunos basados en inteligencia artificial. Es popular entre creadores de contenido, jugadores y comunidades de Discord.',
    useCases: [
      'Cambiar la voz en directo mientras juegas o retransmites',
      'Aplicar efectos de voz en llamadas de Discord o Zoom',
      'Crear personajes con voces distintas para vídeos',
      'Lanzar efectos de sonido durante un directo',
      'Añadir un toque de humor a partidas online',
    ],
    features: [
      'Modificación de voz en tiempo real con múltiples filtros',
      'Voces generadas con inteligencia artificial',
      'Tablero de efectos de sonido configurable',
      'Compatibilidad con juegos y apps de comunicación',
      'Creación de voces personalizadas combinando efectos',
    ],
    pros: [
      'Funciona en tiempo real con latencia baja',
      'Amplia compatibilidad con juegos y plataformas de chat de voz',
      'Interfaz sencilla y catálogo de voces muy variado',
    ],
    cons: [
      'La versión gratuita rota las voces disponibles y limita el catálogo',
      'Consume recursos del equipo mientras está activo',
      'El soporte para macOS es más limitado que en Windows',
    ],
    pricingNote:
      'Voicemod tiene un modelo freemium: la versión gratuita permite usar un conjunto rotatorio de voces y efectos, mientras que la licencia de pago desbloquea el catálogo completo y funciones avanzadas. Suele comercializarse por suscripción o pago único.',
    faqs: [
      {
        question: '¿Qué es Voicemod?',
        answer:
          'Voicemod es un programa que modifica tu voz en tiempo real mientras hablas. Se integra con videojuegos, plataformas de streaming y aplicaciones como Discord, aplicando filtros y voces generadas con IA para que suenes distinto durante una partida, un directo o una llamada.',
      },
      {
        question: '¿Voicemod es gratis?',
        answer:
          'Existe una versión gratuita que da acceso a un conjunto rotatorio de voces y efectos, suficiente para probarlo. La licencia de pago desbloquea el catálogo completo y funciones adicionales. Consulta su web para conocer las modalidades y los precios actualizados.',
      },
      {
        question: '¿Voicemod funciona con Discord?',
        answer:
          'Sí. Voicemod se instala como dispositivo de entrada de audio virtual, así que basta con seleccionarlo como micrófono en Discord para que tu voz llegue modificada al resto de participantes. También funciona con otras aplicaciones de voz y con la mayoría de juegos.',
      },
    ],
  },
  Descript: {
    name: 'Descript',
    tagline: 'Editor de audio y vídeo que se maneja editando la transcripción',
    intro:
      'Descript es un editor de audio y vídeo con un enfoque poco habitual: transcribe el contenido y permite editarlo modificando el texto, de modo que borrar una frase en la transcripción la elimina también del audio. Incorpora funciones de inteligencia artificial como eliminación de muletillas, clonación de voz y limpieza de sonido. Lo usan sobre todo pódcasters, equipos de marketing y creadores de vídeo.',
    useCases: [
      'Editar un pódcast borrando texto en la transcripción',
      'Eliminar muletillas y silencios de forma automática',
      'Generar subtítulos y transcripciones de vídeos',
      'Grabar y montar vídeos de pantalla y tutoriales',
      'Corregir una frase mal grabada usando voz sintética',
    ],
    features: [
      'Edición de audio y vídeo basada en la transcripción',
      'Transcripción automática con detección de hablantes',
      'Eliminación automática de muletillas y silencios',
      'Clonación de voz para corregir fragmentos concretos',
      'Colaboración en línea sobre el mismo proyecto',
    ],
    pros: [
      'Reduce drásticamente el tiempo de edición de pódcast',
      'Curva de aprendizaje suave frente a editores tradicionales',
      'Funciones de IA integradas sin salir de la aplicación',
    ],
    cons: [
      'La precisión de la transcripción en español es algo menor que en inglés',
      'El plan gratuito limita las horas de transcripción',
      'Menos control fino que un editor de audio profesional',
    ],
    pricingNote:
      'Descript funciona con un modelo freemium: el plan gratuito incluye un número limitado de horas de transcripción y funciones básicas, mientras que los planes de pago amplían la transcripción, la exportación en alta calidad y las funciones de IA. Los tramos se comercializan por usuario y mes.',
    faqs: [
      {
        question: '¿Qué es Descript?',
        answer:
          'Descript es un editor de audio y vídeo que transcribe el contenido y permite editarlo modificando el texto: si borras una palabra en la transcripción, desaparece del audio. Incluye funciones de IA como quitar muletillas, generar subtítulos y clonar voces.',
      },
      {
        question: '¿Descript funciona en español?',
        answer:
          'Sí, admite transcripción y edición en español, aunque la precisión suele ser algo mejor en inglés. Para grabaciones con buen audio y dicción clara, los resultados en español son perfectamente utilizables, si bien conviene revisar la transcripción antes de exportar.',
      },
      {
        question: '¿Descript es gratis?',
        answer:
          'Tiene un plan gratuito con horas de transcripción limitadas y funciones básicas, adecuado para probarlo. Los planes de pago amplían el tiempo de transcripción, la calidad de exportación y las funciones de IA. Consulta su web para conocer los precios actualizados.',
      },
    ],
  },
  'Resemble AI': {
    name: 'Resemble AI',
    tagline: 'Clonación de voz y síntesis de audio con IA para empresas',
    intro:
      'Resemble AI es una plataforma de voz sintética centrada en la clonación de voces y su integración en productos. Permite crear voces personalizadas a partir de grabaciones, generar audio en varios idiomas y detectar audio manipulado, con una orientación clara hacia clientes empresariales y desarrolladores. Se usa en publicidad, videojuegos, asistentes de voz y sistemas de atención al cliente.',
    useCases: [
      'Clonar la voz de un locutor para producir audio a escala',
      'Doblar contenidos manteniendo la identidad de la voz',
      'Dar voz a personajes de videojuegos y experiencias interactivas',
      'Generar mensajes de voz personalizados en publicidad',
      'Integrar voz sintética en asistentes mediante API',
    ],
    features: [
      'Clonación de voz a partir de muestras grabadas',
      'Síntesis de texto a voz en múltiples idiomas',
      'API y SDK para integrar la voz en aplicaciones',
      'Control de emoción y entonación en la salida',
      'Herramientas de detección de audio generado',
    ],
    pros: [
      'Enfoque empresarial con API sólida y soporte para desarrolladores',
      'Buen control sobre matices, emoción y estilo de la voz',
      'Incluye herramientas orientadas al uso responsable del clonado',
    ],
    cons: [
      'Menos indicado para usuarios particulares que buscan algo rápido',
      'El coste puede ser elevado en escenarios de alto volumen',
      'Requiere muestras de audio de calidad para un buen clonado',
    ],
    pricingNote:
      'Resemble AI ofrece un acceso freemium o de prueba con límites y planes de pago escalonados según el volumen de audio generado y las necesidades de clonación. Para escenarios empresariales dispone de precios a medida.',
    faqs: [
      {
        question: '¿Qué es Resemble AI?',
        answer:
          'Resemble AI es una plataforma de voz sintética que permite clonar voces a partir de grabaciones y generar audio hablado en varios idiomas. Está orientada a empresas y desarrolladores, con API para integrar la voz en aplicaciones, videojuegos, publicidad y asistentes.',
      },
      {
        question: '¿Resemble AI funciona en español?',
        answer:
          'Sí, admite generación de voz en español junto con otros muchos idiomas, e incluso permite que una voz clonada hable en un idioma distinto al de las grabaciones originales. La calidad depende de las muestras de audio aportadas.',
      },
      {
        question: '¿Cuánto cuesta Resemble AI?',
        answer:
          'Su precio depende del volumen de audio generado y de las funciones de clonación contratadas, con planes escalonados y opciones a medida para empresas. Suele existir un acceso de prueba con límites. Consulta su web para conocer los precios actualizados.',
      },
    ],
  },
  Murf: {
    name: 'Murf',
    tagline: 'Generador de voces sintéticas para vídeos corporativos y formación',
    intro:
      'Murf es una plataforma de texto a voz orientada a locuciones profesionales. Permite elegir entre un catálogo amplio de voces en distintos idiomas y acentos, ajustar el ritmo y la entonación, y sincronizar la locución con vídeos o presentaciones. La usan sobre todo equipos de formación, marketing y empresas que necesitan producir narraciones sin recurrir a un locutor.',
    useCases: [
      'Locutar vídeos corporativos y de formación interna',
      'Narrar cursos online y contenidos de e-learning',
      'Poner voz a presentaciones y demostraciones de producto',
      'Crear anuncios y cuñas publicitarias',
      'Generar audio para explicaciones en vídeos de YouTube',
    ],
    features: [
      'Catálogo amplio de voces en varios idiomas y acentos',
      'Ajuste de ritmo, énfasis y pausas en la locución',
      'Estudio para sincronizar voz con vídeo o presentación',
      'Cambio de voz sobre una grabación existente',
      'Colaboración en equipo sobre los proyectos de audio',
    ],
    pros: [
      'Editor pensado para producir locuciones acabadas, no solo audio suelto',
      'Buen equilibrio entre facilidad de uso y control de la entonación',
      'Amplia variedad de voces, incluidas opciones en español',
    ],
    cons: [
      'Las voces suenan algo menos naturales que las de los líderes del sector',
      'El plan gratuito no permite descargar el audio sin marcas ni límites',
      'El coste crece con el número de usuarios del equipo',
    ],
    pricingNote:
      'Murf sigue un modelo freemium: ofrece una prueba gratuita con límites de tiempo de voz y descarga restringida, y planes de pago por suscripción según minutos de audio y número de usuarios. Los planes se orientan tanto a creadores individuales como a equipos.',
    faqs: [
      {
        question: '¿Qué es Murf?',
        answer:
          'Murf es una herramienta de texto a voz que convierte guiones escritos en locuciones con voces sintéticas realistas. Permite elegir idioma y acento, ajustar la entonación y sincronizar el audio con vídeos o presentaciones, algo habitual en formación y comunicación corporativa.',
      },
      {
        question: '¿Murf tiene voces en español?',
        answer:
          'Sí, incluye voces en español con distintos acentos, entre ellos variantes de España y de Latinoamérica. Puedes ajustar el ritmo y el énfasis para adaptar la locución al tono del contenido, ya sea un vídeo formativo o una pieza publicitaria.',
      },
      {
        question: '¿Murf es gratis?',
        answer:
          'Dispone de un plan gratuito de prueba con límites de tiempo de voz y restricciones en la descarga del audio. Para uso profesional, con descarga sin limitaciones y más minutos, hay planes de pago por suscripción. Consulta su web para precios actualizados.',
      },
    ],
  },
  'Play.ht': {
    name: 'Play.ht',
    tagline: 'Plataforma de texto a voz con voces realistas y API para desarrolladores',
    intro:
      'Play.ht es una plataforma de conversión de texto a voz que genera locuciones con voces sintéticas realistas en numerosos idiomas. Además del editor web, ofrece una API pensada para integrar voz en aplicaciones y agentes conversacionales en tiempo real. Se emplea en pódcast, artículos locutados, vídeos y productos que necesitan una capa de voz.',
    useCases: [
      'Convertir artículos de un blog en versión escuchable',
      'Locutar vídeos y contenidos formativos',
      'Añadir voz a agentes conversacionales mediante API',
      'Producir pódcast a partir de guiones escritos',
      'Clonar una voz propia para narrar contenidos',
    ],
    features: [
      'Conversión de texto a voz en muchos idiomas y acentos',
      'Clonación de voz a partir de muestras',
      'API con latencia baja para aplicaciones en tiempo real',
      'Editor web para ajustar pausas y pronunciación',
      'Exportación en formatos de audio estándar',
    ],
    pros: [
      'Catálogo de voces muy amplio y con buena naturalidad',
      'API adecuada para casos de uso en tiempo real',
      'Buen soporte multilingüe, incluido el español',
    ],
    cons: [
      'El plan gratuito es muy limitado en palabras generadas',
      'El coste puede dispararse en proyectos con mucho audio',
      'La calidad varía notablemente según la voz elegida',
    ],
    pricingNote:
      'Play.ht es freemium: existe un nivel gratuito con una cuota reducida de palabras y planes de pago escalonados según el volumen de audio, la clonación de voz y el uso de la API. También ofrece condiciones específicas para empresas.',
    faqs: [
      {
        question: '¿Qué es Play.ht?',
        answer:
          'Play.ht es una plataforma de texto a voz que transforma cualquier texto en audio hablado con voces sintéticas realistas. Ofrece clonación de voz, soporte multilingüe y una API con baja latencia, lo que la hace útil tanto para creadores de contenido como para desarrolladores.',
      },
      {
        question: '¿Play.ht tiene voces en español?',
        answer:
          'Sí, dispone de voces en español, con variantes de distintos acentos. Puedes ajustar aspectos como las pausas o la pronunciación desde su editor para que la locución encaje mejor con el tono del contenido que estás produciendo.',
      },
      {
        question: '¿Play.ht es gratis?',
        answer:
          'Tiene un nivel gratuito con una cuota limitada de palabras, pensado para probar la herramienta. Para un uso continuado, con más volumen de audio, clonación de voz o acceso a la API, es necesario un plan de pago. Consulta su web para precios actualizados.',
      },
    ],
  },
  Speechify: {
    name: 'Speechify',
    tagline: 'Lector de texto en voz alta para estudiar, trabajar y leer más',
    intro:
      'Speechify es una aplicación que lee en voz alta textos de todo tipo: documentos, páginas web, PDF, correos o libros. Está disponible como aplicación móvil, extensión de navegador y programa de escritorio, y se apoya en voces sintéticas para ofrecer una lectura fluida. Es especialmente popular entre estudiantes, profesionales con mucho material que leer y personas con dislexia.',
    useCases: [
      'Escuchar artículos y PDF mientras te desplazas',
      'Estudiar apuntes y libros de texto en formato audio',
      'Acceder a contenidos escritos con dislexia o baja visión',
      'Repasar documentos de trabajo sin mirar la pantalla',
      'Convertir correos y páginas web en audio',
    ],
    features: [
      'Lectura en voz alta de PDF, webs, documentos e imágenes',
      'Control de velocidad de reproducción',
      'Catálogo de voces en varios idiomas',
      'Extensión de navegador y aplicaciones móviles',
      'Escaneo de texto impreso con la cámara',
    ],
    pros: [
      'Muy útil para aprovechar tiempos muertos escuchando en lugar de leer',
      'Buena herramienta de accesibilidad para dislexia y fatiga visual',
      'Funciona en múltiples plataformas y formatos de documento',
    ],
    cons: [
      'Las voces más naturales están reservadas a los planes de pago',
      'La versión gratuita limita voces y velocidad',
      'La lectura de PDF con maquetación compleja puede fallar',
    ],
    pricingNote:
      'Speechify usa un modelo freemium: la versión gratuita permite escuchar textos con voces básicas y velocidad limitada, mientras que la suscripción de pago desbloquea voces más naturales, mayor velocidad y funciones adicionales. La suscripción se comercializa de forma mensual o anual.',
    faqs: [
      {
        question: '¿Qué es Speechify?',
        answer:
          'Speechify es una aplicación que convierte texto en voz para que puedas escuchar documentos, PDF, páginas web o libros en lugar de leerlos. Funciona en móvil, navegador y ordenador, y es muy usada por estudiantes y por personas con dislexia.',
      },
      {
        question: '¿Speechify funciona en español?',
        answer:
          'Sí, incluye voces en español y permite leer textos en este idioma con una entonación natural. También soporta muchos otros idiomas, lo que resulta útil si trabajas con documentación en varias lenguas o quieres escuchar contenido extranjero.',
      },
      {
        question: '¿Speechify es gratis?',
        answer:
          'Ofrece una versión gratuita con voces básicas y límites de velocidad, suficiente para un uso ligero. Las voces más naturales, la lectura más rápida y las funciones avanzadas requieren una suscripción de pago. Consulta su web para conocer los precios actualizados.',
      },
    ],
  },
  Lovo: {
    name: 'Lovo',
    tagline: 'Estudio de voz sintética y vídeo con IA para creadores de contenido',
    intro:
      'Lovo es una plataforma de generación de voz con inteligencia artificial que incluye un estudio para producir locuciones y montarlas junto a vídeo y subtítulos. Ofrece un catálogo extenso de voces en numerosos idiomas y funciones de clonación. Se dirige a creadores de contenido, equipos de marketing y responsables de formación que necesitan producir narraciones con rapidez.',
    useCases: [
      'Locutar vídeos de marketing y formación',
      'Producir narraciones para contenido de YouTube',
      'Generar subtítulos sincronizados con la locución',
      'Crear anuncios de audio con distintas voces',
      'Clonar una voz para mantener coherencia entre piezas',
    ],
    features: [
      'Catálogo amplio de voces sintéticas en muchos idiomas',
      'Estudio de edición que combina voz, vídeo y subtítulos',
      'Clonación de voz a partir de muestras',
      'Control de emoción y estilo en la locución',
      'Exportación de audio y vídeo terminados',
    ],
    pros: [
      'Integra voz, vídeo y subtítulos en un mismo flujo de trabajo',
      'Gran variedad de voces e idiomas disponibles',
      'Permite ajustar emoción y estilo, no solo leer el texto',
    ],
    cons: [
      'El plan gratuito es bastante limitado en minutos de audio',
      'La naturalidad de algunas voces queda por debajo de la competencia',
      'El editor de vídeo es básico comparado con herramientas dedicadas',
    ],
    pricingNote:
      'Lovo funciona con un modelo freemium: hay un plan gratuito con minutos de voz limitados y planes de pago escalonados según el volumen de audio, el acceso a voces premium y la clonación. Los tramos se comercializan por suscripción mensual o anual.',
    faqs: [
      {
        question: '¿Qué es Lovo?',
        answer:
          'Lovo es una plataforma de voz sintética con un estudio integrado que permite generar locuciones a partir de texto y combinarlas con vídeo y subtítulos. Cuenta con un catálogo amplio de voces en muchos idiomas y con opciones de clonación de voz.',
      },
      {
        question: '¿Lovo tiene voces en español?',
        answer:
          'Sí, incluye voces en español entre su catálogo multilingüe, con distintas variantes y acentos. Puedes ajustar el estilo y la emoción de la locución para adaptarla al tono del vídeo o del contenido que estés produciendo.',
      },
      {
        question: '¿Lovo es gratis?',
        answer:
          'Cuenta con un plan gratuito que ofrece un número reducido de minutos de voz al mes, útil para probarlo. Para un uso profesional continuado se necesita una suscripción de pago que amplía minutos y acceso a voces premium. Consulta su web para precios actualizados.',
      },
    ],
  },
  Dubverse: {
    name: 'Dubverse',
    tagline: 'Doblaje automático de vídeos a múltiples idiomas con voces sintéticas',
    intro:
      'Dubverse es una plataforma de doblaje con inteligencia artificial que traduce y locuta vídeos a otros idiomas de forma automática. Transcribe el audio original, lo traduce y genera una pista de voz sintética sincronizada, con opción de revisar y corregir el guion antes de exportar. Se usa para localizar contenidos formativos, de marketing y de entretenimiento sin recurrir a un estudio de doblaje.',
    useCases: [
      'Doblar vídeos de marketing a varios idiomas',
      'Localizar cursos online para audiencias internacionales',
      'Traducir contenido de YouTube para llegar a más países',
      'Adaptar vídeos corporativos a equipos de otras regiones',
      'Generar subtítulos traducidos junto con el doblaje',
    ],
    features: [
      'Transcripción y traducción automáticas del vídeo original',
      'Generación de voz sintética sincronizada con la imagen',
      'Editor para revisar y corregir el guion traducido',
      'Soporte de numerosos idiomas de destino',
      'Exportación del vídeo doblado y de los subtítulos',
    ],
    pros: [
      'Reduce mucho el tiempo y el coste frente al doblaje tradicional',
      'Permite revisar la traducción antes de generar el audio',
      'Cubre un buen número de idiomas de destino',
    ],
    cons: [
      'La sincronía labial no alcanza la calidad de un doblaje profesional',
      'La traducción automática requiere revisión en textos con matices',
      'El plan gratuito limita los minutos de vídeo procesados',
    ],
    pricingNote:
      'Dubverse sigue un modelo freemium: ofrece una cuota gratuita de minutos para probar el doblaje y planes de pago basados en el volumen de vídeo procesado y el acceso a voces premium. También dispone de opciones para empresas con necesidades de volumen.',
    faqs: [
      {
        question: '¿Qué es Dubverse?',
        answer:
          'Dubverse es una herramienta de doblaje con IA que traduce vídeos a otros idiomas y genera automáticamente una pista de voz sintética sincronizada. Permite revisar el guion traducido antes de exportar, lo que la hace útil para localizar contenido formativo o de marketing.',
      },
      {
        question: '¿Dubverse dobla vídeos al español?',
        answer:
          'Sí, el español está entre los idiomas de destino soportados, además de muchos otros. El sistema transcribe el audio original, lo traduce y genera la locución, y puedes corregir el texto antes de que se produzca el audio definitivo.',
      },
      {
        question: '¿Dubverse es gratis?',
        answer:
          'Dispone de una cuota gratuita de minutos que permite probar el doblaje en vídeos cortos. Para volúmenes mayores o acceso a voces de mejor calidad hay que contratar un plan de pago basado en minutos procesados. Consulta su web para precios actualizados.',
      },
    ],
  },
  'Voice.ai': {
    name: 'Voice.ai',
    tagline: 'Cambiador de voz en tiempo real con voces creadas por la comunidad',
    intro:
      'Voice.ai es una aplicación de cambio de voz en tiempo real que utiliza inteligencia artificial para transformar la voz del usuario en otra distinta. Cuenta con una biblioteca amplia de voces aportadas por su comunidad y se integra con juegos, plataformas de streaming y aplicaciones de comunicación como Discord. Está dirigida sobre todo a jugadores y creadores de contenido.',
    useCases: [
      'Cambiar la voz durante partidas online o directos',
      'Usar voces distintas en llamadas de Discord',
      'Crear personajes con voz propia para vídeos',
      'Grabar audio con una voz diferente a la real',
      'Probar voces de la biblioteca de la comunidad',
    ],
    features: [
      'Cambio de voz en tiempo real con baja latencia',
      'Biblioteca de voces compartida por la comunidad',
      'Integración como micrófono virtual en otras aplicaciones',
      'Conversión de archivos de audio ya grabados',
      'Creación y entrenamiento de voces personalizadas',
    ],
    pros: [
      'Biblioteca de voces muy extensa y en crecimiento constante',
      'Funciona con la mayoría de juegos y apps de chat de voz',
      'Buena parte de las funciones básicas están disponibles sin pagar',
    ],
    cons: [
      'Consume bastantes recursos del equipo al funcionar en tiempo real',
      'La calidad de las voces de la comunidad es muy desigual',
      'El uso de voces de personas reales plantea problemas éticos y legales',
    ],
    pricingNote:
      'Voice.ai emplea un modelo freemium: buena parte de sus funciones de cambio de voz están disponibles sin coste, mientras que las opciones avanzadas y el uso sin límites pueden requerir una suscripción de pago. Las condiciones han variado con el tiempo.',
    faqs: [
      {
        question: '¿Qué es Voice.ai?',
        answer:
          'Voice.ai es un programa que cambia tu voz en tiempo real usando inteligencia artificial. Dispone de una gran biblioteca de voces creadas por la comunidad y se conecta como micrófono virtual a juegos, plataformas de streaming y aplicaciones de chat de voz.',
      },
      {
        question: '¿Voice.ai es gratis?',
        answer:
          'Ofrece un uso gratuito con acceso a muchas de sus funciones de cambio de voz. Determinadas opciones avanzadas o el uso sin restricciones pueden requerir una suscripción de pago. Consulta su web para conocer las condiciones y los precios actualizados.',
      },
      {
        question: '¿Voice.ai funciona con Discord?',
        answer:
          'Sí. Se instala como dispositivo de entrada de audio virtual, de modo que solo tienes que seleccionarlo como micrófono en Discord para que los demás escuchen tu voz transformada. Lo mismo aplica a la mayoría de juegos y aplicaciones de voz.',
      },
    ],
  },
  Suno: {
    name: 'Suno',
    tagline: 'Generador de canciones completas con voz y música a partir de texto',
    intro:
      'Suno es una herramienta de inteligencia artificial que crea canciones completas a partir de una descripción de texto, generando tanto la parte instrumental como la voz cantada y la letra. Permite indicar el género, el estilo y el estado de ánimo, o aportar una letra propia. La utilizan creadores de contenido, aficionados a la música y equipos que necesitan pistas originales sin derechos de terceros.',
    useCases: [
      'Crear canciones originales a partir de una idea escrita',
      'Generar música de fondo para vídeos y pódcast',
      'Poner música a una letra propia',
      'Producir jingles y sintonías para marcas',
      'Experimentar con estilos musicales sin saber tocar',
    ],
    features: [
      'Generación de canciones completas con voz y letra',
      'Selección de género, estilo y estado de ánimo',
      'Posibilidad de aportar una letra escrita por el usuario',
      'Creación de versiones extendidas de una pista',
      'Descarga de las canciones generadas',
    ],
    pros: [
      'Resultados sorprendentemente completos: música, voz y letra a la vez',
      'No requiere ningún conocimiento musical previo',
      'Muy rápido para prototipar ideas o fondos musicales',
    ],
    cons: [
      'El plan gratuito limita el número de canciones diarias',
      'La calidad y coherencia de la letra puede ser irregular',
      'Los derechos de uso comercial dependen del plan contratado',
    ],
    pricingNote:
      'Suno funciona con un modelo freemium: hay un plan gratuito con créditos diarios que permiten generar unas pocas canciones, y planes de pago que amplían los créditos y otorgan derechos de uso comercial. Los planes de suscripción se ofrecen en varios tramos.',
    faqs: [
      {
        question: '¿Qué es Suno?',
        answer:
          'Suno es una herramienta de inteligencia artificial que compone canciones completas a partir de una descripción de texto. Genera la música, la voz cantada y la letra, y permite elegir el género y el estilo o aportar una letra propia para que la cante.',
      },
      {
        question: '¿Suno es gratis?',
        answer:
          'Sí, cuenta con un plan gratuito que otorga créditos diarios para generar un número limitado de canciones. Los planes de pago amplían esos créditos y suelen incluir derechos de uso comercial de las pistas generadas. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Puedo usar las canciones de Suno comercialmente?',
        answer:
          'El uso comercial depende del plan contratado: las canciones generadas con el plan gratuito suelen tener restricciones, mientras que los planes de pago habitualmente conceden derechos de uso comercial. Revisa sus términos de servicio antes de emplear una pista en un proyecto profesional.',
      },
    ],
  },
  AudioCraft: {
    name: 'AudioCraft',
    tagline: 'Modelos abiertos de Meta para generar música y sonido con IA',
    intro:
      'AudioCraft es un conjunto de modelos e investigación de código abierto publicado por Meta para la generación de audio con inteligencia artificial. Incluye modelos capaces de crear música a partir de descripciones de texto y de generar efectos de sonido, así como un códec de audio neuronal. Está dirigido a investigadores y desarrolladores que quieran experimentar o integrar generación de audio en sus propios proyectos.',
    useCases: [
      'Generar música a partir de descripciones de texto',
      'Crear efectos de sonido para prototipos y videojuegos',
      'Investigar en el campo de la generación de audio',
      'Integrar generación musical en aplicaciones propias',
      'Experimentar con compresión de audio neuronal',
    ],
    features: [
      'Modelos de generación de música condicionada por texto',
      'Generación de efectos de sonido ambientales',
      'Códec de audio neuronal para compresión',
      'Código y pesos publicados de forma abierta',
      'Ejecución local en máquinas con GPU',
    ],
    pros: [
      'Totalmente gratuito y de código abierto',
      'Permite ejecutar la generación en local, sin depender de un servicio',
      'Base sólida para investigación y proyectos personalizados',
    ],
    cons: [
      'Requiere conocimientos técnicos y hardware con GPU',
      'No tiene interfaz de usuario pensada para no técnicos',
      'La calidad musical queda por detrás de servicios comerciales más recientes',
    ],
    pricingNote:
      'AudioCraft es un proyecto de código abierto y su uso no tiene coste de licencia: el código y los modelos están disponibles públicamente. Los únicos costes son los del hardware o la infraestructura en la nube que uses para ejecutarlo. Revisa la licencia del repositorio antes de un uso comercial.',
    faqs: [
      {
        question: '¿Qué es AudioCraft?',
        answer:
          'AudioCraft es un conjunto de modelos de código abierto publicado por Meta para generar audio con inteligencia artificial. Permite crear música a partir de texto y generar efectos de sonido, e incluye un códec neuronal de audio. Está pensado para desarrolladores e investigadores.',
      },
      {
        question: '¿AudioCraft es gratis?',
        answer:
          'Sí, es un proyecto de código abierto: el código y los modelos se publican de forma gratuita en su repositorio. Los únicos costes son los del hardware con GPU o de la infraestructura en la nube necesaria para ejecutar los modelos.',
      },
      {
        question: '¿Cómo se usa AudioCraft?',
        answer:
          'Se utiliza descargando el código de su repositorio y ejecutándolo en un entorno con Python y, preferiblemente, una GPU. No cuenta con una interfaz gráfica oficial pensada para usuarios sin perfil técnico, aunque existen envoltorios creados por la comunidad.',
      },
    ],
  },
  Colossyan: {
    name: 'Colossyan',
    tagline: 'Vídeos con presentadores virtuales y voz sintética para formación corporativa',
    intro:
      'Colossyan es una plataforma que genera vídeos con presentadores virtuales creados por inteligencia artificial a partir de un guion escrito. El avatar aparece en pantalla y locuta el texto con voz sintética en el idioma elegido, con sincronía labial. Está orientada sobre todo a departamentos de formación, recursos humanos y comunicación interna de empresas.',
    useCases: [
      'Producir vídeos de formación interna sin grabar a nadie',
      'Crear contenido de onboarding para nuevos empleados',
      'Localizar un mismo vídeo a varios idiomas',
      'Explicar procedimientos y políticas de empresa en vídeo',
      'Generar demostraciones de producto con un presentador virtual',
    ],
    features: [
      'Avatares de presentador virtual con sincronía labial',
      'Conversión de guion a vídeo locutado',
      'Soporte de múltiples idiomas y voces',
      'Plantillas orientadas a formación corporativa',
      'Traducción de un vídeo a otros idiomas',
    ],
    pros: [
      'Elimina la necesidad de cámara, estudio y actores',
      'Actualizar un vídeo es tan simple como editar el guion',
      'Muy eficiente para producir contenido formativo en varios idiomas',
    ],
    cons: [
      'Los avatares siguen resultando algo artificiales en primer plano',
      'El coste es elevado frente a herramientas de vídeo genéricas',
      'Poca flexibilidad creativa fuera del formato de presentador',
    ],
    pricingNote:
      'Colossyan es una herramienta de pago que se comercializa por suscripción, con planes escalonados según los minutos de vídeo generados, los avatares disponibles y el número de usuarios. Suele ofrecer una prueba limitada y precios a medida para grandes organizaciones.',
    faqs: [
      {
        question: '¿Qué es Colossyan?',
        answer:
          'Colossyan es una plataforma que crea vídeos con presentadores virtuales generados por inteligencia artificial. A partir de un guion escrito, un avatar aparece en pantalla y locuta el texto con voz sintética y sincronía labial, algo muy usado en formación corporativa.',
      },
      {
        question: '¿Colossyan es gratis?',
        answer:
          'No es una herramienta gratuita: funciona por suscripción de pago, con planes según minutos de vídeo, avatares y usuarios. Suele existir una prueba limitada para evaluar la plataforma antes de contratarla. Consulta su web para conocer los planes y precios actualizados.',
      },
      {
        question: '¿Colossyan funciona en español?',
        answer:
          'Sí, admite guiones y locuciones en español, además de muchos otros idiomas. Esto permite producir una versión de un mismo vídeo de formación para distintos mercados sin necesidad de volver a grabar ni de contratar locutores para cada idioma.',
      },
    ],
  },
  Sora: {
    name: 'Sora',
    tagline: 'Generador de vídeo con IA de OpenAI a partir de texto o imágenes',
    intro:
      'Sora es el modelo de generación de vídeo desarrollado por OpenAI. Crea clips de vídeo a partir de descripciones escritas, imágenes de referencia o vídeos existentes, manteniendo la coherencia de la escena a lo largo de los fotogramas. Se utiliza para prototipar ideas audiovisuales, generar material creativo y explorar conceptos visuales sin necesidad de rodaje.',
    useCases: [
      'Generar clips de vídeo a partir de una descripción escrita',
      'Prototipar ideas audiovisuales antes de un rodaje',
      'Animar una imagen fija convirtiéndola en vídeo',
      'Crear piezas cortas para redes sociales',
      'Explorar conceptos visuales para publicidad o cine',
    ],
    features: [
      'Generación de vídeo a partir de texto',
      'Creación de vídeo desde una imagen de referencia',
      'Coherencia de escena y personajes entre fotogramas',
      'Distintas duraciones y formatos de salida',
      'Herramientas para remezclar y ajustar clips generados',
    ],
    pros: [
      'Calidad visual y coherencia temporal entre las mejores del sector',
      'Permite pasar de una idea a un vídeo sin equipo ni rodaje',
      'Integrado en el ecosistema de OpenAI, ya conocido por muchos usuarios',
    ],
    cons: [
      'Los clips generados son cortos y con límites de resolución',
      'El acceso y los límites de uso dependen del plan y del país',
      'Aún comete errores de física, manos y texto dentro de la escena',
    ],
    pricingNote:
      'Sora se ofrece con acceso gratuito limitado y con más capacidad dentro de las suscripciones de pago del ecosistema de OpenAI, que amplían el número de generaciones, la duración y la resolución. Las condiciones y la disponibilidad por país cambian con frecuencia.',
    faqs: [
      {
        question: '¿Qué es Sora?',
        answer:
          'Sora es el modelo de generación de vídeo de OpenAI. Crea clips de vídeo a partir de una descripción de texto, de una imagen o de un vídeo de referencia, manteniendo la coherencia de la escena y los personajes a lo largo de los fotogramas.',
      },
      {
        question: '¿Sora es gratis?',
        answer:
          'Existe un acceso gratuito con límites en el número de generaciones, la duración y la resolución de los vídeos. Las suscripciones de pago del ecosistema de OpenAI amplían esas capacidades. La disponibilidad varía según el país; consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Sora?',
        answer:
          'Sirve para generar vídeo sin cámara ni rodaje: basta describir la escena que quieres. Se usa para prototipar ideas audiovisuales, crear piezas cortas para redes sociales, animar imágenes fijas y explorar conceptos visuales en publicidad, cine o diseño.',
      },
    ],
  },
  Veo: {
    name: 'Veo',
    tagline: 'Modelo de vídeo de Google DeepMind que genera clips a partir de texto',
    intro:
      'Veo es la familia de modelos de generación de vídeo desarrollada por Google DeepMind. Convierte descripciones de texto, y en algunos casos imágenes de referencia, en clips de vídeo con movimiento de cámara y estilo visual coherentes. Se utiliza sobre todo para prototipar ideas audiovisuales, crear piezas cortas para redes y explorar conceptos creativos sin necesidad de rodaje ni equipo de producción.',
    useCases: [
      'Generar clips cortos para redes sociales a partir de texto',
      'Prototipar planos y storyboards antes de un rodaje real',
      'Crear recursos visuales de relleno para vídeos y presentaciones',
      'Explorar estilos visuales y encuadres para una campaña',
      'Producir piezas creativas sin equipo ni localizaciones',
    ],
    features: [
      'Generación de vídeo a partir de descripciones de texto',
      'Control del estilo visual y del movimiento de cámara',
      'Salida en alta resolución según el plan disponible',
      'Integración con las herramientas experimentales de Google',
      'Soporte de imagen de referencia como punto de partida',
    ],
    pros: [
      'Respaldado por la investigación de Google DeepMind',
      'Buena coherencia temporal entre fotogramas del mismo clip',
      'Entiende indicaciones descriptivas relativamente complejas',
    ],
    cons: [
      'El acceso puede estar limitado por región o lista de espera',
      'La duración de los clips generados es corta',
      'El control fino sobre el resultado sigue siendo limitado',
    ],
    pricingNote:
      'Veo se ofrece a través de productos de Google, normalmente con acceso gratuito limitado y funciones ampliadas dentro de suscripciones de pago. La disponibilidad y los límites de uso cambian con frecuencia.',
    faqs: [
      {
        question: '¿Qué es Veo?',
        answer:
          'Veo es un modelo de inteligencia artificial de Google DeepMind capaz de generar vídeo a partir de descripciones de texto. Se usa para crear clips cortos, prototipar ideas audiovisuales y explorar estilos visuales sin necesidad de rodar con cámara ni contratar producción.',
      },
      {
        question: '¿Veo es gratis?',
        answer:
          'Suele existir un acceso gratuito con límites de uso a través de las herramientas de Google, mientras que las funciones más avanzadas se reservan a planes de pago. La disponibilidad varía según el país. Consulta su web para conocer las condiciones actualizadas.',
      },
      {
        question: '¿Veo funciona en español?',
        answer:
          'Las indicaciones suelen entenderse mejor en inglés, aunque los modelos de Google admiten instrucciones en varios idiomas. Si buscas resultados más precisos, conviene escribir la descripción en inglés y revisar el resultado antes de publicarlo.',
      },
    ],
  },
  Runway: {
    name: 'Runway',
    tagline: 'Suite de edición y generación de vídeo con IA para creadores audiovisuales',
    intro:
      'Runway es una plataforma de creación audiovisual con inteligencia artificial dirigida a editores, diseñadores y equipos de marketing. Permite generar vídeo a partir de texto o imágenes y aplicar herramientas de edición asistida como el borrado de objetos, la separación del fondo o el cambio de estilo. Se usa tanto en proyectos publicitarios como en producciones independientes que buscan acelerar el postprocesado.',
    useCases: [
      'Generar vídeo a partir de texto o de una imagen',
      'Eliminar objetos o personas de un plano grabado',
      'Recortar el fondo de un vídeo sin croma',
      'Aplicar cambios de estilo visual a metraje existente',
      'Crear piezas publicitarias cortas sin rodaje',
    ],
    features: [
      'Modelos propios de generación de vídeo',
      'Herramientas de edición asistida por IA',
      'Rotoscopia y eliminación de fondo automáticas',
      'Editor en navegador sin instalación',
      'Colaboración en proyectos entre varios usuarios',
    ],
    pros: [
      'Combina generación y edición en una misma plataforma',
      'Funciona en el navegador, sin hardware potente',
      'Actualiza sus modelos con frecuencia',
    ],
    cons: [
      'El plan gratuito consume créditos muy rápido',
      'Los clips generados son de corta duración',
      'La curva de aprendizaje de las herramientas avanzadas es notable',
    ],
    pricingNote:
      'Runway funciona con un modelo freemium basado en créditos: hay un plan gratuito con un número limitado de generaciones y varios planes de pago según el volumen y la resolución. Los planes individuales suelen situarse en el entorno de los 15-35 $/mes.',
    faqs: [
      {
        question: '¿Qué es Runway?',
        answer:
          'Runway es una plataforma web que combina generación de vídeo con inteligencia artificial y herramientas de edición asistida. Permite crear clips desde texto o imágenes, borrar objetos, separar fondos y aplicar estilos, todo desde el navegador y sin instalar software.',
      },
      {
        question: '¿Runway es gratis?',
        answer:
          'Ofrece un plan gratuito con créditos limitados que permite probar las funciones básicas. Para un uso continuado hacen falta planes de pago que amplían créditos, resolución y almacenamiento. Consulta su web para precios actualizados y límites de cada plan.',
      },
      {
        question: '¿Para qué sirve Runway?',
        answer:
          'Sirve para acelerar la producción audiovisual: generar vídeo a partir de una idea escrita, limpiar planos grabados, eliminar fondos sin croma y probar tratamientos visuales. Es habitual en marketing, contenido para redes y prototipado de piezas antes de rodarlas.',
      },
    ],
  },
  'Pika Labs': {
    name: 'Pika Labs',
    tagline: 'Generador de vídeo con IA orientado a clips cortos y creativos',
    intro:
      'Pika Labs es una herramienta de generación de vídeo con inteligencia artificial que convierte texto e imágenes en clips animados. Está pensada para creadores de contenido que necesitan piezas cortas y llamativas para redes sociales, con efectos de movimiento y transformaciones visuales. Su enfoque es más accesible que el de las suites profesionales, priorizando la rapidez y la experimentación sobre el control técnico detallado.',
    useCases: [
      'Animar una imagen fija para redes sociales',
      'Generar clips cortos a partir de una descripción',
      'Crear efectos visuales llamativos para vídeos de TikTok',
      'Probar ideas creativas antes de producirlas de verdad',
      'Añadir movimiento a ilustraciones o fotografías',
    ],
    features: [
      'Generación de vídeo desde texto o imagen',
      'Efectos de movimiento y transformación aplicados al clip',
      'Ajustes de duración y relación de aspecto',
      'Interfaz sencilla orientada a la experimentación',
      'Comunidad activa con ejemplos y plantillas',
    ],
    pros: [
      'Fácil de usar sin conocimientos de edición',
      'Buenos resultados en clips cortos y estilizados',
      'Permite probar sin coste con el plan gratuito',
    ],
    cons: [
      'Clips muy breves y poco control narrativo',
      'La coherencia falla en escenas complejas',
      'Los créditos gratuitos se agotan enseguida',
    ],
    pricingNote:
      'Pika Labs sigue un modelo freemium con créditos: el plan gratuito permite un número limitado de generaciones al mes y los planes de pago amplían créditos, calidad y uso comercial. Los tramos individuales suelen rondar los 10-35 $/mes.',
    faqs: [
      {
        question: '¿Qué es Pika Labs?',
        answer:
          'Pika Labs es una herramienta de generación de vídeo con inteligencia artificial que crea clips cortos a partir de texto o de imágenes. Se utiliza sobre todo para contenido en redes sociales, animando ilustraciones o generando escenas breves con efectos visuales.',
      },
      {
        question: '¿Pika Labs es gratis?',
        answer:
          'Tiene un plan gratuito con créditos limitados suficientes para probar la herramienta. Para un uso frecuente o comercial hay planes de pago que amplían el número de generaciones y la calidad. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Pika Labs?',
        answer:
          'Sirve para crear vídeos cortos sin cámara ni edición: animar una foto, ilustrar una idea escrita o generar efectos visuales para redes. Es útil para creadores de contenido y equipos de marketing que necesitan piezas rápidas y llamativas.',
      },
    ],
  },
  Synthesia: {
    name: 'Synthesia',
    tagline: 'Plataforma de vídeo con avatares digitales para formación y comunicación corporativa',
    intro:
      'Synthesia es una plataforma que genera vídeos con presentadores virtuales a partir de un guion escrito. El usuario elige un avatar y un idioma, pega el texto y la herramienta produce un vídeo con locución sincronizada. Se usa principalmente en formación interna, onboarding, documentación de producto y comunicación corporativa, donde grabar a una persona real resultaría lento y caro de actualizar.',
    useCases: [
      'Crear vídeos de formación interna para empleados',
      'Producir tutoriales de producto en varios idiomas',
      'Generar vídeos de onboarding sin grabar a nadie',
      'Actualizar contenidos formativos cambiando solo el guion',
      'Localizar comunicaciones corporativas para equipos internacionales',
    ],
    features: [
      'Biblioteca amplia de avatares digitales predefinidos',
      'Locución sintética en decenas de idiomas',
      'Plantillas de vídeo orientadas a formación y empresa',
      'Editor por escenas con texto, imagen y voz',
      'Opción de crear un avatar personalizado',
    ],
    pros: [
      'Reduce mucho el coste de producir vídeo corporativo',
      'Permite actualizar un vídeo cambiando solo el texto',
      'Soporte multilingüe muy útil para empresas internacionales',
    ],
    cons: [
      'Los avatares siguen resultando algo artificiales',
      'No hay plan gratuito real, solo demostraciones',
      'Poco adecuado para contenido creativo o emocional',
    ],
    pricingNote:
      'Synthesia es una herramienta de pago con planes por suscripción que limitan los minutos de vídeo generados al mes, además de planes empresariales a medida. Los tramos de entrada suelen situarse en torno a los 20-30 $/mes.',
    faqs: [
      {
        question: '¿Qué es Synthesia?',
        answer:
          'Synthesia es una plataforma que crea vídeos con avatares digitales a partir de un guion escrito. Eliges presentador e idioma, pegas el texto y obtienes un vídeo con locución sincronizada, sin necesidad de cámara, estudio ni actores.',
      },
      {
        question: '¿Synthesia es gratis?',
        answer:
          'No dispone de un plan gratuito completo. Suele ofrecer una demostración o vídeo de prueba y, a partir de ahí, planes de suscripción que limitan los minutos generados al mes. Consulta su web para precios actualizados y condiciones.',
      },
      {
        question: '¿Synthesia funciona en español?',
        answer:
          'Sí. Admite guiones y locución en español, además de muchos otros idiomas, lo que permite localizar un mismo vídeo para distintos mercados. La calidad de la voz en español es aceptable, aunque conviene revisar la pronunciación de nombres propios.',
      },
    ],
  },
  InVideo: {
    name: 'InVideo',
    tagline: 'Editor de vídeo online con IA para marketing y contenido en redes',
    intro:
      'InVideo es una plataforma de creación de vídeo en el navegador que combina plantillas prediseñadas con funciones de inteligencia artificial. Permite convertir un texto, un guion o incluso un artículo en un vídeo montado con imágenes de archivo, música y locución automática. Está orientada a pequeños negocios, creadores y equipos de marketing que necesitan producir vídeo con frecuencia y sin editor profesional.',
    useCases: [
      'Convertir un artículo o guion en vídeo montado',
      'Crear anuncios cortos para redes sociales',
      'Producir vídeos de producto con plantillas prediseñadas',
      'Añadir locución automática a una presentación',
      'Reutilizar contenido escrito como piezas audiovisuales',
    ],
    features: [
      'Generación de vídeo a partir de texto o guion',
      'Amplia biblioteca de plantillas y material de archivo',
      'Locución sintética y música de fondo integradas',
      'Editor por capas en el navegador',
      'Exportación en formatos verticales y horizontales',
    ],
    pros: [
      'Muy rápido para producir vídeo de marketing repetitivo',
      'No requiere experiencia previa en edición',
      'Incluye material de archivo dentro de la plataforma',
    ],
    cons: [
      'El resultado puede parecer genérico por el uso de plantillas',
      'La versión gratuita añade marca de agua',
      'Poco control fino para trabajos audiovisuales exigentes',
    ],
    pricingNote:
      'InVideo funciona con un modelo freemium: hay un plan gratuito con marca de agua y límites de exportación, y varios planes de pago que amplían minutos, material de archivo y eliminan la marca. Los planes suelen rondar los 20-35 $/mes.',
    faqs: [
      {
        question: '¿Qué es InVideo?',
        answer:
          'InVideo es un editor de vídeo online con funciones de inteligencia artificial que convierte texto en piezas audiovisuales usando plantillas, material de archivo, música y locución automática. Está pensado para marketing y contenido en redes sociales.',
      },
      {
        question: '¿InVideo es gratis?',
        answer:
          'Ofrece un plan gratuito con límites de exportación y marca de agua en los vídeos. Para eliminarla y acceder a más minutos y recursos hay que pasar a un plan de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve InVideo?',
        answer:
          'Sirve para producir vídeo de forma rápida sin saber editar: transformar un texto en un vídeo montado, crear anuncios para redes o generar piezas de producto a partir de plantillas. Es habitual en pequeños negocios y equipos de marketing.',
      },
    ],
  },
  Fliki: {
    name: 'Fliki',
    tagline: 'Convierte texto en vídeo con voces sintéticas realistas en muchos idiomas',
    intro:
      'Fliki es una herramienta que transforma texto en vídeo y audio usando voces sintéticas. A partir de un guion, un artículo o un post de blog genera una pieza con imágenes, subtítulos y locución en el idioma elegido. Se utiliza sobre todo para reutilizar contenido escrito como vídeos para redes sociales, pódcast o narraciones, sin necesidad de grabar la voz.',
    useCases: [
      'Convertir entradas de blog en vídeos con locución',
      'Generar narraciones con voz sintética para redes sociales',
      'Crear audio tipo pódcast a partir de un texto',
      'Producir vídeos con subtítulos automáticos en varios idiomas',
      'Doblar contenido a otros idiomas sin locutor',
    ],
    features: [
      'Amplio catálogo de voces sintéticas y idiomas',
      'Conversión de texto o URL a vídeo',
      'Subtítulos generados automáticamente',
      'Biblioteca de imágenes y vídeos de archivo',
      'Exportación de audio y vídeo por separado',
    ],
    pros: [
      'Calidad de voz notable en varios idiomas, incluido el español',
      'Muy útil para reciclar contenido escrito ya existente',
      'Flujo de trabajo sencillo y rápido',
    ],
    cons: [
      'El montaje visual es básico frente a un editor real',
      'El plan gratuito ofrece pocos minutos al mes',
      'Las voces pueden sonar planas en textos largos',
    ],
    pricingNote:
      'Fliki es freemium: el plan gratuito incluye unos pocos minutos de generación al mes con marca de agua, y los planes de pago amplían minutos, voces premium y uso comercial. Los tramos suelen empezar en torno a los 20-30 $/mes.',
    faqs: [
      {
        question: '¿Qué es Fliki?',
        answer:
          'Fliki es una herramienta de inteligencia artificial que convierte texto en vídeo y audio con voces sintéticas. Permite transformar artículos, guiones o publicaciones de blog en piezas narradas con imágenes y subtítulos, sin necesidad de grabar la voz.',
      },
      {
        question: '¿Fliki funciona en español?',
        answer:
          'Sí, dispone de voces en español y en muchos otros idiomas, con distintos acentos. Es una de sus funciones más usadas, ya que permite narrar y doblar contenido sin locutor. Conviene revisar la pronunciación de nombres propios y siglas.',
      },
      {
        question: '¿Fliki es gratis?',
        answer:
          'Tiene un plan gratuito con minutos limitados al mes y marca de agua. Para eliminarla, acceder a voces de mayor calidad y usar el contenido comercialmente hay que contratar un plan de pago. Consulta su web para precios actualizados.',
      },
    ],
  },
  Kling: {
    name: 'Kling',
    tagline: 'Generador de vídeo con IA capaz de crear escenas realistas desde texto',
    intro:
      'Kling es un modelo de generación de vídeo con inteligencia artificial desarrollado por la empresa china Kuaishou. Crea clips a partir de descripciones de texto o de una imagen de partida, con especial atención al movimiento realista y a la coherencia física de las escenas. Se utiliza para producir contenido audiovisual corto, probar ideas visuales y generar animaciones sin rodaje ni software de edición.',
    useCases: [
      'Generar clips realistas a partir de una descripción',
      'Animar una imagen fija con movimiento coherente',
      'Crear contenido audiovisual corto para redes sociales',
      'Prototipar escenas antes de una producción real',
      'Explorar ideas visuales sin equipo de rodaje',
    ],
    features: [
      'Generación de vídeo desde texto e imagen',
      'Buena simulación del movimiento y la física',
      'Control de duración y proporción del clip',
      'Modos de calidad estándar y alta',
      'Acceso a través de navegador y aplicación móvil',
    ],
    pros: [
      'Resultados realistas en movimiento y encuadre',
      'Permite empezar desde una imagen propia',
      'Ofrece créditos gratuitos para probarlo',
    ],
    cons: [
      'La interfaz y la documentación no siempre están bien traducidas',
      'Los créditos gratuitos se agotan con rapidez',
      'El acceso y los límites cambian con frecuencia',
    ],
    pricingNote:
      'Kling ofrece acceso gratuito con un sistema de créditos diarios o mensuales limitados, ampliables mediante planes de suscripción de pago con más generaciones y mayor calidad. Las condiciones varían según la región.',
    faqs: [
      {
        question: '¿Qué es Kling?',
        answer:
          'Kling es un modelo de generación de vídeo con inteligencia artificial creado por Kuaishou. Produce clips a partir de texto o de una imagen, destacando por el realismo del movimiento. Se usa para contenido corto, animaciones y prototipado visual.',
      },
      {
        question: '¿Kling es gratis?',
        answer:
          'Dispone de acceso gratuito mediante un sistema de créditos limitados que permite generar unos cuantos vídeos. Para un uso intensivo o mayor calidad hay planes de pago. Consulta su web para precios actualizados y disponibilidad en tu país.',
      },
      {
        question: '¿Para qué sirve Kling?',
        answer:
          'Sirve para crear vídeo sin cámara: generar escenas a partir de una descripción escrita, animar fotografías o ilustraciones y probar ideas visuales antes de producirlas. Es útil para creadores de contenido, publicidad y prototipado audiovisual.',
      },
    ],
  },
  MiniMax: {
    name: 'MiniMax',
    tagline: 'Modelos de IA generativa con capacidad de crear vídeo desde texto e imagen',
    intro:
      'MiniMax es una empresa china de inteligencia artificial que desarrolla modelos generativos, entre ellos herramientas de creación de vídeo a partir de texto o imágenes. Sus modelos de vídeo permiten generar clips cortos con movimiento y estilo definidos mediante una descripción escrita. Se utilizan para contenido en redes sociales, animación de imágenes fijas y experimentación creativa sin recursos de producción tradicionales.',
    useCases: [
      'Generar clips de vídeo a partir de un texto descriptivo',
      'Animar una imagen estática con movimiento realista',
      'Crear contenido visual corto para redes sociales',
      'Probar conceptos visuales antes de encargar producción',
      'Producir animaciones sencillas sin software de edición',
    ],
    features: [
      'Generación de vídeo desde texto e imagen',
      'Control del estilo y del movimiento mediante la descripción',
      'Clips cortos con coherencia visual entre fotogramas',
      'Acceso desde navegador sin instalar nada',
      'Disponibilidad de API para integraciones',
    ],
    pros: [
      'Ofrece uso gratuito para probar la generación de vídeo',
      'Buena calidad visual para tratarse de clips cortos',
      'Interfaz sencilla y sin curva de aprendizaje',
    ],
    cons: [
      'Duración de los clips muy limitada',
      'Documentación y soporte en español escasos',
      'Los límites de uso gratuito cambian con frecuencia',
    ],
    pricingNote:
      'MiniMax ofrece acceso gratuito con límites de uso y planes de pago o créditos para volúmenes mayores, además de tarificación por uso en su API. Las condiciones varían según el producto concreto.',
    faqs: [
      {
        question: '¿Qué es MiniMax?',
        answer:
          'MiniMax es una compañía de inteligencia artificial que desarrolla modelos generativos, incluidos modelos de vídeo capaces de crear clips a partir de texto o imágenes. Sus herramientas se usan para contenido audiovisual corto y animación de imágenes fijas.',
      },
      {
        question: '¿MiniMax es gratis?',
        answer:
          'Permite generar vídeo de forma gratuita con límites de uso. Para volúmenes mayores, mejor calidad o acceso por API existen opciones de pago basadas en créditos o suscripción. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve MiniMax?',
        answer:
          'Sirve para crear vídeo con inteligencia artificial a partir de una descripción escrita o de una imagen de referencia. Se utiliza en marketing, redes sociales y experimentación creativa, cuando no se dispone de medios de producción audiovisual.',
      },
    ],
  },
  VideoFX: {
    name: 'VideoFX',
    tagline: 'Herramienta experimental de Google para generar vídeo a partir de texto',
    intro:
      'VideoFX es una de las herramientas experimentales de Google Labs pensadas para explorar la generación de vídeo con inteligencia artificial. Permite describir una escena con texto y obtener un clip generado por los modelos de vídeo de Google. Su enfoque es exploratorio: sirve para probar ideas, entender qué es capaz de hacer la tecnología y crear piezas cortas de carácter creativo.',
    useCases: [
      'Generar clips de vídeo a partir de una descripción',
      'Explorar ideas visuales antes de producirlas',
      'Crear material creativo corto para presentaciones',
      'Probar distintos estilos visuales de forma rápida',
      'Experimentar con la generación de vídeo sin coste',
    ],
    features: [
      'Generación de vídeo desde texto',
      'Acceso a los modelos de vídeo de Google',
      'Ajustes de estilo y encuadre en la descripción',
      'Interfaz web sencilla y experimental',
      'Integración con el resto de herramientas de Google Labs',
    ],
    pros: [
      'Acceso gratuito dentro de las herramientas experimentales de Google',
      'Respaldado por los modelos de vídeo de Google DeepMind',
      'Interfaz muy sencilla, sin configuración previa',
    ],
    cons: [
      'Al ser experimental, puede cambiar o desaparecer',
      'Disponibilidad limitada por país y lista de espera',
      'Control creativo escaso frente a suites profesionales',
    ],
    pricingNote:
      'VideoFX se enmarca en las herramientas experimentales de Google, con acceso gratuito y límites de uso, aunque algunas funciones pueden requerir una suscripción de Google. La disponibilidad depende del país.',
    faqs: [
      {
        question: '¿Qué es VideoFX?',
        answer:
          'VideoFX es una herramienta experimental de Google Labs que genera vídeo a partir de descripciones de texto usando los modelos de vídeo de Google. Está pensada para explorar la tecnología y crear clips cortos de carácter creativo.',
      },
      {
        question: '¿VideoFX es gratis?',
        answer:
          'Sí, se ofrece de forma gratuita dentro de las herramientas experimentales de Google, aunque con límites de uso y disponibilidad restringida según el país. Algunas funciones avanzadas pueden requerir suscripción. Consulta su web para condiciones actualizadas.',
      },
      {
        question: '¿Para qué sirve VideoFX?',
        answer:
          'Sirve para generar clips de vídeo describiendo una escena con palabras, sin cámara ni edición. Es útil para probar ideas visuales, crear material creativo corto y entender las posibilidades actuales de la generación de vídeo con IA.',
      },
    ],
  },
  'GitHub Copilot': {
    name: 'GitHub Copilot',
    tagline: 'Asistente de programación de GitHub que sugiere y completa código en el editor',
    intro:
      'GitHub Copilot es el asistente de programación desarrollado por GitHub junto a OpenAI. Se integra en editores como Visual Studio Code, Visual Studio, JetBrains o Neovim y sugiere líneas y bloques de código a partir del contexto del archivo y de comentarios escritos por el desarrollador. Incluye además un chat para explicar código, generar pruebas o proponer correcciones dentro del propio entorno de trabajo.',
    useCases: [
      'Autocompletar funciones mientras se escribe código',
      'Generar pruebas unitarias a partir de código existente',
      'Explicar fragmentos de código heredado o poco claro',
      'Escribir código repetitivo o de configuración más rápido',
      'Sugerir correcciones y refactorizaciones desde el chat',
    ],
    features: [
      'Sugerencias de código en línea dentro del editor',
      'Chat integrado para preguntas sobre el proyecto',
      'Compatibilidad con los principales editores y lenguajes',
      'Generación de mensajes de commit y pruebas',
      'Revisión de cambios y sugerencias en pull requests',
    ],
    pros: [
      'Integración muy sólida con los editores más usados',
      'Acelera notablemente el código repetitivo',
      'Gratuito para estudiantes y mantenedores de proyectos open source',
    ],
    cons: [
      'Las sugerencias pueden ser incorrectas o inseguras',
      'Requiere revisar siempre el código generado',
      'No hay plan gratuito general para uso profesional',
    ],
    pricingNote:
      'GitHub Copilot es de pago mediante suscripción, con planes individuales y de empresa, además de un nivel gratuito limitado y acceso sin coste para estudiantes y mantenedores de proyectos open source verificados. El plan individual suele rondar los 10 $/mes.',
    faqs: [
      {
        question: '¿Qué es GitHub Copilot?',
        answer:
          'GitHub Copilot es un asistente de programación con inteligencia artificial que se integra en el editor y sugiere código a partir del contexto del proyecto. Incluye un chat para explicar código, generar pruebas y proponer correcciones sin salir del entorno.',
      },
      {
        question: '¿GitHub Copilot es gratis?',
        answer:
          'Es un producto de suscripción, aunque ofrece un nivel gratuito con límites y acceso sin coste para estudiantes verificados y mantenedores de proyectos open source. El plan individual de pago suele rondar los 10 $/mes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve GitHub Copilot?',
        answer:
          'Sirve para escribir código más rápido: completa funciones mientras escribes, genera pruebas, explica fragmentos complejos y propone refactorizaciones. Es especialmente útil en tareas repetitivas, aunque siempre conviene revisar y probar el código que sugiere.',
      },
    ],
  },
  Cursor: {
    name: 'Cursor',
    tagline: 'Editor de código con IA integrada para entender y modificar proyectos enteros',
    intro:
      'Cursor es un editor de código construido sobre Visual Studio Code que integra modelos de lenguaje en el propio flujo de trabajo. Permite chatear con el proyecto, pedir cambios en varios archivos a la vez y aplicar ediciones sugeridas directamente sobre el código. Está dirigido a desarrolladores que quieren ir más allá del autocompletado y delegar tareas de refactorización o exploración de bases de código extensas.',
    useCases: [
      'Pedir cambios que afectan a varios archivos del proyecto',
      'Entender una base de código nueva haciendo preguntas',
      'Refactorizar módulos con instrucciones en lenguaje natural',
      'Generar funciones o componentes desde una descripción',
      'Depurar errores con el contexto completo del repositorio',
    ],
    features: [
      'Chat con acceso al contexto del repositorio',
      'Edición de código en varios archivos a la vez',
      'Autocompletado predictivo avanzado',
      'Compatible con extensiones y atajos de VS Code',
      'Elección entre distintos modelos de lenguaje',
    ],
    pros: [
      'Transición inmediata para quien ya usa VS Code',
      'Comprende el contexto de proyectos grandes',
      'Buen equilibrio entre autocompletado y cambios amplios',
    ],
    cons: [
      'El plan gratuito limita bastante las peticiones avanzadas',
      'Puede proponer cambios amplios que hay que revisar con cuidado',
      'Depende de servicios en la nube, con implicaciones de privacidad',
    ],
    pricingNote:
      'Cursor es freemium: incluye un plan gratuito con un número limitado de peticiones a los modelos más potentes y planes de pago para uso intensivo, además de opciones de equipo. El plan profesional suele rondar los 20 $/mes.',
    faqs: [
      {
        question: '¿Qué es Cursor?',
        answer:
          'Cursor es un editor de código basado en Visual Studio Code con inteligencia artificial integrada. Permite chatear con el proyecto, pedir cambios en varios archivos y aplicar ediciones automáticamente, con el contexto completo del repositorio a su disposición.',
      },
      {
        question: '¿Cursor es gratis?',
        answer:
          'Ofrece un plan gratuito con un número limitado de peticiones a los modelos avanzados, suficiente para probarlo. Para un uso continuado existe una suscripción de pago que suele rondar los 20 $/mes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿En qué se diferencia Cursor de GitHub Copilot?',
        answer:
          'Copilot se integra como extensión en tu editor y destaca en el autocompletado. Cursor es un editor completo pensado desde cero alrededor de la IA, con más énfasis en cambios que abarcan varios archivos y en conversar con toda la base de código.',
      },
    ],
  },
  Tabnine: {
    name: 'Tabnine',
    tagline: 'Autocompletado de código con IA centrado en privacidad y despliegue privado',
    intro:
      'Tabnine es un asistente de autocompletado de código con inteligencia artificial que se integra como extensión en los editores más habituales. Su principal diferencia frente a otras alternativas es el enfoque en la privacidad: permite ejecutar los modelos de forma local o en la infraestructura del propio cliente, algo relevante en empresas con requisitos estrictos sobre el tratamiento del código fuente.',
    useCases: [
      'Autocompletar código mientras se escribe en el editor',
      'Sugerir funciones completas a partir de un comentario',
      'Trabajar con IA sin enviar el código a la nube',
      'Adaptar las sugerencias al estilo del equipo',
      'Cumplir requisitos de privacidad en empresas reguladas',
    ],
    features: [
      'Autocompletado contextual en múltiples lenguajes',
      'Opción de ejecución local o en infraestructura privada',
      'Modelos entrenados con código de licencia permisiva',
      'Integración con los principales editores e IDE',
      'Personalización con el código del propio equipo',
    ],
    pros: [
      'Buenas garantías de privacidad frente a alternativas en la nube',
      'Permite despliegue local o autoalojado',
      'Compatible con una gran variedad de IDE',
    ],
    cons: [
      'Las sugerencias suelen ser menos potentes que las de la competencia',
      'El plan gratuito es bastante limitado',
      'El despliegue privado requiere infraestructura y coste añadido',
    ],
    pricingNote:
      'Tabnine es freemium: cuenta con un plan gratuito de autocompletado básico, planes de pago para desarrolladores individuales y opciones empresariales con despliegue privado. Los planes profesionales suelen rondar los 10-15 $/mes por usuario.',
    faqs: [
      {
        question: '¿Qué es Tabnine?',
        answer:
          'Tabnine es un asistente de autocompletado de código con inteligencia artificial que se integra en el editor. Destaca por su enfoque en la privacidad, ya que permite ejecutar los modelos en local o en la infraestructura de la propia empresa.',
      },
      {
        question: '¿Tabnine es gratis?',
        answer:
          'Dispone de un plan gratuito con autocompletado básico. Las funciones avanzadas, el chat y el despliegue privado forman parte de los planes de pago, con precios por usuario. Consulta su web para precios actualizados y condiciones para empresas.',
      },
      {
        question: '¿Tabnine es seguro para código privado?',
        answer:
          'Es una de sus principales bazas: ofrece opciones de ejecución local y despliegue autoalojado para que el código no salga de la organización. Además, sus modelos se entrenan con código de licencia permisiva, lo que reduce riesgos legales.',
      },
    ],
  },
  Codium: {
    name: 'Codium',
    tagline: 'Generación de pruebas y análisis de código con IA dentro del editor',
    intro:
      'Codium es una herramienta de inteligencia artificial centrada en la calidad del código: analiza lo que has escrito y propone pruebas significativas, además de señalar posibles comportamientos inesperados. Se integra como extensión en editores como VS Code y JetBrains, con la idea de que el desarrollador entienda mejor su código y cubra casos límite que se le habrían escapado al escribir los tests a mano.',
    useCases: [
      'Generar pruebas unitarias para funciones existentes',
      'Detectar casos límite que no estaban cubiertos',
      'Revisar código antes de abrir una pull request',
      'Entender el comportamiento de una función compleja',
      'Aumentar la cobertura de pruebas de un proyecto',
    ],
    features: [
      'Generación automática de pruebas a partir del código',
      'Sugerencia de casos límite y comportamientos inesperados',
      'Extensiones para VS Code y entornos JetBrains',
      'Análisis y explicación de funciones',
      'Soporte para varios lenguajes de programación',
    ],
    pros: [
      'Ahorra tiempo en la escritura de pruebas repetitivas',
      'Ayuda a detectar casos que se suelen pasar por alto',
      'Plan gratuito suficiente para uso individual',
    ],
    cons: [
      'Las pruebas generadas necesitan revisión y ajuste',
      'Cobertura desigual según el lenguaje',
      'No sustituye una estrategia de testing bien diseñada',
    ],
    pricingNote:
      'Codium sigue un modelo freemium con un plan gratuito para desarrolladores individuales y planes de pago para equipos y empresas, con funciones adicionales de colaboración y control.',
    faqs: [
      {
        question: '¿Qué es Codium?',
        answer:
          'Codium es una herramienta de inteligencia artificial que analiza tu código y genera pruebas de forma automática, señalando además casos límite y comportamientos inesperados. Se integra como extensión en editores como VS Code y los entornos de JetBrains.',
      },
      {
        question: '¿Codium es gratis?',
        answer:
          'Cuenta con un plan gratuito orientado a desarrolladores individuales que cubre las funciones principales. Los equipos y empresas disponen de planes de pago con funciones adicionales. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Codium?',
        answer:
          'Sirve para mejorar la calidad del código: genera pruebas unitarias a partir de funciones ya escritas, descubre casos límite no contemplados y ayuda a revisar cambios antes de subirlos. Es útil para aumentar cobertura sin escribir todos los tests a mano.',
      },
    ],
  },
  AskTheCode: {
    name: 'AskTheCode',
    tagline: 'Haz preguntas en lenguaje natural sobre un repositorio de código',
    intro:
      'AskTheCode es una herramienta que permite consultar un repositorio de código haciendo preguntas en lenguaje natural. En lugar de navegar entre archivos, el desarrollador pregunta dónde está implementada una función o cómo fluye un proceso y la herramienta busca la respuesta dentro del código. Resulta especialmente útil al incorporarse a un proyecto nuevo o al revisar bases de código ajenas.',
    useCases: [
      'Entender un repositorio desconocido sin leerlo entero',
      'Localizar dónde se implementa una funcionalidad concreta',
      'Resolver dudas rápidas sobre el flujo de un proceso',
      'Acelerar la incorporación a un proyecto nuevo',
      'Explorar proyectos de código abierto antes de contribuir',
    ],
    features: [
      'Consultas en lenguaje natural sobre el repositorio',
      'Búsqueda de la respuesta dentro del propio código',
      'Referencias a los archivos relevantes en las respuestas',
      'Conexión con repositorios alojados en GitHub',
      'Uso desde el navegador sin instalación',
    ],
    pros: [
      'Reduce mucho el tiempo de exploración de código ajeno',
      'Uso gratuito para empezar',
      'No requiere configurar entorno ni descargar el repositorio',
    ],
    cons: [
      'Las respuestas pueden ser imprecisas en proyectos muy grandes',
      'Conviene verificar siempre lo que afirma sobre el código',
      'Depende de que el repositorio sea accesible',
    ],
    pricingNote:
      'AskTheCode ofrece un uso gratuito para consultar repositorios, aunque puede aplicar límites de volumen o restricciones sobre repositorios privados.',
    faqs: [
      {
        question: '¿Qué es AskTheCode?',
        answer:
          'AskTheCode es una herramienta que permite preguntar en lenguaje natural sobre un repositorio de código y obtener respuestas basadas en sus archivos. Se usa para entender proyectos desconocidos, localizar funcionalidades y acelerar la incorporación a una base de código.',
      },
      {
        question: '¿AskTheCode es gratis?',
        answer:
          'Su uso básico es gratuito, con posibles límites de volumen de consultas o restricciones sobre repositorios privados. Consulta su web para conocer las condiciones vigentes y si existen planes de pago para un uso más intensivo.',
      },
      {
        question: '¿Para qué sirve AskTheCode?',
        answer:
          'Sirve para no perder tiempo navegando entre archivos: preguntas dónde está implementada una función o cómo funciona un flujo y la herramienta te señala el código correspondiente. Es especialmente práctico al entrar en un proyecto nuevo.',
      },
    ],
  },
  Testim: {
    name: 'Testim',
    tagline: 'Automatización de pruebas end-to-end con IA para aplicaciones web',
    intro:
      'Testim es una plataforma de automatización de pruebas funcionales para aplicaciones web que utiliza inteligencia artificial para hacer los tests más estables. Permite grabar flujos de usuario y convertirlos en pruebas automatizadas, y sus localizadores inteligentes reducen los fallos cuando cambia la interfaz. Está orientada a equipos de QA y desarrollo que necesitan mantener suites de pruebas end-to-end sin dedicar tiempo constante a repararlas.',
    useCases: [
      'Automatizar pruebas de flujos de usuario en aplicaciones web',
      'Reducir el mantenimiento de tests que se rompen al cambiar la interfaz',
      'Grabar casos de prueba sin escribir código desde cero',
      'Integrar pruebas end-to-end en la cadena de CI/CD',
      'Validar regresiones antes de cada despliegue',
    ],
    features: [
      'Grabador de pruebas sin necesidad de programar',
      'Localizadores inteligentes que se adaptan a cambios en la interfaz',
      'Ejecución en paralelo en distintos navegadores',
      'Integración con herramientas de CI/CD y gestión de incidencias',
      'Extensión de las pruebas con código JavaScript personalizado',
    ],
    pros: [
      'Reduce de forma real el mantenimiento de las pruebas',
      'Accesible para perfiles de QA sin programación',
      'Se integra bien en flujos de trabajo de CI/CD',
    ],
    cons: [
      'Los planes de empresa resultan caros para equipos pequeños',
      'Centrado en web, con menos alcance en aplicaciones nativas',
      'Requiere tiempo de configuración inicial',
    ],
    pricingNote:
      'Testim ofrece un plan de entrada gratuito o de prueba con un número limitado de ejecuciones, y planes de pago orientados a equipos y empresas con precios a medida según volumen.',
    faqs: [
      {
        question: '¿Qué es Testim?',
        answer:
          'Testim es una plataforma de automatización de pruebas end-to-end para aplicaciones web que usa inteligencia artificial para que los tests sean más estables. Permite grabar flujos de usuario y convertirlos en pruebas que se mantienen solas ante cambios en la interfaz.',
      },
      {
        question: '¿Testim es gratis?',
        answer:
          'Suele ofrecer un plan de entrada gratuito o un periodo de prueba con ejecuciones limitadas. El uso profesional se cubre con planes de pago para equipos y empresas, normalmente con precio a medida. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Testim?',
        answer:
          'Sirve para automatizar las pruebas funcionales de una aplicación web y detectar regresiones antes de desplegar. Su principal ventaja es reducir el mantenimiento: los localizadores inteligentes evitan que los tests se rompan cada vez que cambia la interfaz.',
      },
    ],
  },
  Diffblue: {
    name: 'Diffblue',
    tagline: 'Generación automática de pruebas unitarias en Java para equipos empresariales',
    intro:
      'Diffblue es una herramienta que genera pruebas unitarias de forma automática para código Java. Analiza los métodos existentes y produce tests ejecutables que reflejan el comportamiento actual del código, lo que resulta especialmente útil en aplicaciones heredadas con poca cobertura. Está orientada a empresas con bases de código Java extensas que necesitan aumentar la cobertura de pruebas sin dedicar meses de trabajo manual.',
    useCases: [
      'Generar pruebas unitarias para código Java heredado',
      'Aumentar la cobertura de tests sin escribirlos a mano',
      'Crear una red de seguridad antes de refactorizar',
      'Integrar la generación de pruebas en la cadena de CI',
      'Documentar el comportamiento actual de métodos poco claros',
    ],
    features: [
      'Generación automática de tests JUnit para Java',
      'Análisis del comportamiento real del código existente',
      'Integración con IDE y con sistemas de integración continua',
      'Ejecución por lotes sobre módulos completos',
      'Informes de cobertura de las pruebas generadas',
    ],
    pros: [
      'Ahorra un enorme trabajo manual en proyectos Java grandes',
      'Muy útil para código heredado sin pruebas',
      'Las pruebas generadas son ejecutables y reproducibles',
    ],
    cons: [
      'Limitado prácticamente a Java',
      'Los tests reflejan el comportamiento actual, aunque sea incorrecto',
      'Los planes empresariales son caros',
    ],
    pricingNote:
      'Diffblue combina una versión gratuita o de comunidad con límites de uso y planes empresariales de pago con precios a medida según el tamaño del proyecto y del equipo.',
    faqs: [
      {
        question: '¿Qué es Diffblue?',
        answer:
          'Diffblue es una herramienta de inteligencia artificial que genera pruebas unitarias automáticamente para código Java. Analiza los métodos existentes y produce tests JUnit ejecutables, lo que permite aumentar la cobertura de proyectos grandes o heredados sin escribirlos a mano.',
      },
      {
        question: '¿Diffblue es gratis?',
        answer:
          'Existe una versión gratuita o de comunidad con límites de uso, pensada para probar la herramienta. El uso profesional se cubre con planes empresariales de pago, normalmente con precio a medida. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Diffblue funciona con otros lenguajes además de Java?',
        answer:
          'Su producto principal está centrado en Java y en el ecosistema de la JVM, donde genera pruebas JUnit. Si tu base de código está en otros lenguajes, conviene revisar su web para comprobar el soporte disponible antes de plantearte adoptarla.',
      },
    ],
  },
  Jules: {
    name: 'Jules',
    tagline: 'Agente de programación de Google que trabaja de forma autónoma sobre tu repositorio',
    intro:
      'Jules es el agente de programación desarrollado por Google. A diferencia de un simple autocompletado, se le asigna una tarea sobre un repositorio y trabaja de forma asíncrona: analiza el código, planifica los cambios, los implementa y propone el resultado para que el desarrollador lo revise. Está pensado para delegar tareas acotadas como corregir errores, actualizar dependencias o añadir funcionalidades pequeñas.',
    useCases: [
      'Delegar la corrección de errores concretos del repositorio',
      'Actualizar dependencias y adaptar el código afectado',
      'Implementar funcionalidades pequeñas y bien definidas',
      'Escribir pruebas para módulos sin cobertura',
      'Preparar cambios listos para revisar en una pull request',
    ],
    features: [
      'Agente asíncrono que trabaja sobre el repositorio completo',
      'Plan de trabajo previo que el desarrollador puede revisar',
      'Integración con repositorios de GitHub',
      'Propuesta de cambios en forma de pull request',
      'Ejecución de tareas en un entorno aislado',
    ],
    pros: [
      'Permite delegar tareas completas, no solo sugerencias de código',
      'Muestra el plan antes de ejecutar los cambios',
      'Cuenta con un nivel de uso gratuito para probarlo',
    ],
    cons: [
      'Los cambios propuestos requieren revisión humana cuidadosa',
      'Rinde peor en tareas ambiguas o de gran alcance',
      'Su disponibilidad y límites cambian con frecuencia',
    ],
    pricingNote:
      'Jules es freemium: ofrece un nivel gratuito con un número limitado de tareas al día y niveles superiores incluidos en las suscripciones de IA de Google, con más capacidad.',
    faqs: [
      {
        question: '¿Qué es Jules?',
        answer:
          'Jules es un agente de programación de Google que trabaja de forma autónoma sobre un repositorio. Se le asigna una tarea, analiza el código, planifica los cambios, los implementa y presenta el resultado para que el desarrollador lo revise y apruebe.',
      },
      {
        question: '¿Jules es gratis?',
        answer:
          'Dispone de un nivel gratuito con un número limitado de tareas, suficiente para probarlo. Para un uso más intensivo, la capacidad ampliada se incluye en las suscripciones de IA de Google. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Jules?',
        answer:
          'Sirve para delegar tareas de programación acotadas: corregir un error, actualizar dependencias, añadir una función pequeña o escribir pruebas. Trabaja en segundo plano y entrega los cambios propuestos para que los revises antes de integrarlos.',
      },
    ],
  },
  DeepSource: {
    name: 'DeepSource',
    tagline: 'Análisis estático continuo que detecta problemas de calidad y seguridad en el código',
    intro:
      'DeepSource es una plataforma de análisis estático que revisa automáticamente cada cambio de código en busca de errores, problemas de seguridad, malas prácticas y deuda técnica. Se conecta al repositorio y comenta directamente en las pull requests, además de ofrecer correcciones automáticas para muchos de los problemas detectados. Está dirigida a equipos que quieren mantener la calidad del código sin depender solo de la revisión manual.',
    useCases: [
      'Detectar errores y malas prácticas en cada pull request',
      'Identificar vulnerabilidades de seguridad en el código',
      'Controlar la deuda técnica de un proyecto en el tiempo',
      'Aplicar correcciones automáticas a problemas frecuentes',
      'Unificar los estándares de calidad de todo el equipo',
    ],
    features: [
      'Análisis estático automático en cada cambio',
      'Soporte para múltiples lenguajes de programación',
      'Correcciones automáticas propuestas como pull request',
      'Métricas de calidad y deuda técnica del repositorio',
      'Integración con GitHub, GitLab y Bitbucket',
    ],
    pros: [
      'Reduce el trabajo repetitivo en las revisiones de código',
      'Gratuito para proyectos de código abierto',
      'Cubre calidad, seguridad y rendimiento en una sola herramienta',
    ],
    cons: [
      'Puede generar falsos positivos que hay que ajustar',
      'La configuración inicial requiere afinar reglas',
      'Los planes de pago pueden salir caros en equipos grandes',
    ],
    pricingNote:
      'DeepSource es freemium: gratuito para proyectos de código abierto y con planes de pago por usuario para repositorios privados y equipos. Los tramos de entrada suelen situarse en el entorno de los 10-30 $ por usuario al mes.',
    faqs: [
      {
        question: '¿Qué es DeepSource?',
        answer:
          'DeepSource es una plataforma de análisis estático que revisa el código automáticamente en cada cambio y detecta errores, vulnerabilidades y malas prácticas. Comenta directamente en las pull requests y puede proponer correcciones automáticas para muchos de los problemas encontrados.',
      },
      {
        question: '¿DeepSource es gratis?',
        answer:
          'Es gratuito para proyectos de código abierto. Para repositorios privados y equipos ofrece planes de pago por usuario con funciones adicionales de gestión y seguridad. Consulta su web para precios actualizados y condiciones.',
      },
      {
        question: '¿Para qué sirve DeepSource?',
        answer:
          'Sirve para mantener la calidad del código sin depender solo de la revisión manual: detecta problemas antes de que lleguen a producción, mide la deuda técnica y ayuda a que todo el equipo siga los mismos estándares en cada pull request.',
      },
    ],
  },
  LangChain: {
    name: 'LangChain',
    tagline: 'Framework de código abierto para construir aplicaciones con modelos de lenguaje',
    intro:
      'LangChain es un framework de código abierto que facilita la construcción de aplicaciones basadas en modelos de lenguaje. Proporciona abstracciones para conectar modelos con fuentes de datos, herramientas externas y memoria de conversación, así como para encadenar pasos y construir agentes. Es una de las bases más utilizadas para desarrollar chatbots, sistemas de búsqueda sobre documentos propios y flujos de trabajo automatizados con IA.',
    useCases: [
      'Construir chatbots conectados a documentación propia',
      'Implementar sistemas de búsqueda y respuesta sobre datos internos',
      'Crear agentes que usan herramientas externas y APIs',
      'Encadenar varias llamadas a modelos en un flujo',
      'Prototipar aplicaciones de IA antes de llevarlas a producción',
    ],
    features: [
      'Abstracciones comunes para distintos proveedores de modelos',
      'Componentes para recuperación de información sobre documentos',
      'Gestión de memoria y contexto en conversaciones',
      'Construcción de agentes con acceso a herramientas',
      'Disponible en Python y JavaScript/TypeScript',
    ],
    pros: [
      'Código abierto y con una comunidad muy amplia',
      'Permite cambiar de proveedor de modelo sin reescribir la aplicación',
      'Gran cantidad de integraciones ya disponibles',
    ],
    cons: [
      'Sus abstracciones añaden complejidad en proyectos sencillos',
      'La API ha cambiado bastante entre versiones',
      'La curva de aprendizaje inicial es notable',
    ],
    pricingNote:
      'El framework LangChain es de código abierto y gratuito. La empresa ofrece además productos comerciales complementarios de observabilidad y despliegue con planes freemium y de pago.',
    faqs: [
      {
        question: '¿Qué es LangChain?',
        answer:
          'LangChain es un framework de código abierto para desarrollar aplicaciones con modelos de lenguaje. Ofrece componentes para conectar modelos con datos propios, herramientas externas y memoria, y para construir agentes y flujos de varios pasos en Python o JavaScript.',
      },
      {
        question: '¿LangChain es gratis?',
        answer:
          'Sí, el framework es de código abierto y su uso es gratuito. Lo que sí tiene coste es el consumo de los modelos de lenguaje que utilices y, opcionalmente, los productos comerciales de la empresa. Consulta su web para precios de esos servicios.',
      },
      {
        question: '¿Para qué sirve LangChain?',
        answer:
          'Sirve para construir aplicaciones de IA más allá de una simple llamada a un modelo: chatbots que consultan documentación propia, buscadores sobre datos internos, agentes que usan herramientas externas y flujos que encadenan varios pasos de razonamiento.',
      },
    ],
  },
  Siri: {
    name: 'Siri',
    tagline: 'Asistente personal de voz de Apple integrado en iPhone, Mac y otros dispositivos',
    intro:
      'Siri es el asistente personal por voz desarrollado por Apple e integrado en sus dispositivos, desde el iPhone y el iPad hasta el Mac, el Apple Watch y los altavoces HomePod. Permite ejecutar tareas mediante comandos hablados o escritos: enviar mensajes, poner alarmas, consultar información, controlar dispositivos del hogar o abrir aplicaciones, con un fuerte énfasis en el procesamiento en el propio dispositivo.',
    useCases: [
      'Enviar mensajes y hacer llamadas con la voz',
      'Poner alarmas, recordatorios y eventos en el calendario',
      'Controlar dispositivos del hogar conectado',
      'Consultar el tiempo, rutas o información rápida',
      'Automatizar tareas mediante atajos personalizados',
    ],
    features: [
      'Reconocimiento de voz integrado en el sistema operativo',
      'Ejecución de atajos y automatizaciones personalizadas',
      'Control de dispositivos compatibles con el hogar conectado',
      'Procesamiento de muchas peticiones en el propio dispositivo',
      'Disponible en múltiples idiomas, incluido el español',
    ],
    pros: [
      'Integración total con el ecosistema de Apple',
      'Incluido sin coste en todos sus dispositivos',
      'Buen enfoque de privacidad con procesamiento local',
    ],
    cons: [
      'Menos capaz que otros asistentes en preguntas complejas',
      'Solo funciona dentro del ecosistema de Apple',
      'Algunas funciones llegan más tarde en español',
    ],
    pricingNote:
      'Siri se incluye de forma gratuita en los dispositivos de Apple, sin suscripción adicional ni coste por uso. Algunas funciones avanzadas pueden depender del modelo de dispositivo o de servicios de Apple que sí se pagan aparte. Consulta su web para conocer la disponibilidad por dispositivo.',
    faqs: [
      {
        question: '¿Qué es Siri?',
        answer:
          'Siri es el asistente personal por voz de Apple, integrado en iPhone, iPad, Mac, Apple Watch y HomePod. Permite enviar mensajes, poner recordatorios, consultar información o controlar dispositivos del hogar mediante comandos hablados o escritos.',
      },
      {
        question: '¿Siri es gratis?',
        answer:
          'Sí. Siri viene incluido sin coste adicional en los dispositivos de Apple y no requiere suscripción. Algunas funciones concretas pueden depender del modelo del dispositivo o de servicios de Apple que se contratan por separado.',
      },
      {
        question: '¿Siri funciona en español?',
        answer:
          'Sí, Siri está disponible en español, incluido el español de España, y reconoce comandos de voz en este idioma. Aun así, algunas funciones nuevas suelen llegar antes en inglés y tardan más en estar disponibles en otros idiomas.',
      },
    ],
  },
  Alexa: {
    name: 'Alexa',
    tagline: 'Asistente de voz de Amazon para controlar el hogar y resolver tareas cotidianas',
    intro:
      'Alexa es el asistente de voz desarrollado por Amazon, integrado en sus altavoces y pantallas Echo y en dispositivos de terceros compatibles. Permite realizar consultas por voz, controlar dispositivos del hogar conectado, reproducir música, poner alarmas o gestionar listas y recordatorios. Su ecosistema de skills, desarrolladas por terceros, amplía sus funciones más allá de lo que ofrece de serie. Está disponible en español.',
    useCases: [
      'Controlar luces, enchufes y termostatos del hogar conectado',
      'Poner alarmas, temporizadores y recordatorios por voz',
      'Reproducir música y pódcast en altavoces compatibles',
      'Consultar el tiempo, noticias o el tráfico de camino al trabajo',
      'Gestionar listas de la compra y tareas sin usar las manos',
    ],
    features: [
      'Reconocimiento de voz con activación por palabra clave',
      'Integración con dispositivos de domótica de múltiples fabricantes',
      'Catálogo de skills desarrolladas por terceros',
      'Rutinas para encadenar varias acciones automáticamente',
      'Aplicación móvil para configurar dispositivos y preferencias',
    ],
    pros: [
      'Amplia compatibilidad con dispositivos de hogar inteligente',
      'Funciona en español y con acento peninsular',
      'Uso sin coste añadido si ya tienes un dispositivo compatible',
    ],
    cons: [
      'Depende de hardware compatible para aprovecharlo del todo',
      'Plantea dudas de privacidad al escuchar en modo espera',
      'Algunas funciones y skills solo están disponibles en inglés',
    ],
    pricingNote:
      'El uso de Alexa como asistente no tiene coste: el software y la app son gratuitos. El gasto está en el hardware (altavoces y pantallas Echo) y, opcionalmente, en servicios de suscripción de Amazon que amplían funciones o contenidos.',
    faqs: [
      {
        question: '¿Qué es Alexa?',
        answer:
          'Alexa es el asistente virtual de voz de Amazon. Se activa con una palabra clave y responde a órdenes habladas para poner música, controlar dispositivos del hogar conectado, consultar información o gestionar recordatorios. Funciona en altavoces y pantallas Echo y en dispositivos de otros fabricantes compatibles.',
      },
      {
        question: '¿Alexa es gratis?',
        answer:
          'El asistente y su aplicación móvil son gratuitos. Lo que se paga es el dispositivo que lo incorpora, como un altavoz Echo, y algunos servicios de suscripción opcionales de Amazon que añaden contenidos o funciones extra. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Alexa funciona en español?',
        answer:
          'Sí. Alexa está disponible en español de España y entiende órdenes habladas en ese idioma. Aun así, parte de las skills de terceros y algunas funciones nuevas se lanzan antes en inglés, por lo que el catálogo en español es algo más reducido.',
      },
    ],
  },
  Assistant: {
    name: 'Assistant',
    tagline: 'Asistente de voz de Google para búsquedas, agenda y control del móvil',
    intro:
      'Google Assistant es el asistente virtual desarrollado por Google, presente en móviles Android, altavoces y pantallas Nest, auriculares y otros dispositivos compatibles. Se apoya en el buscador y en el ecosistema de servicios de Google para responder preguntas, gestionar la agenda, enviar mensajes o controlar dispositivos del hogar conectado. Está disponible en español y admite comandos encadenados mediante rutinas.',
    useCases: [
      'Consultar información y hacer búsquedas por voz',
      'Gestionar calendario, alarmas y recordatorios personales',
      'Controlar dispositivos de domótica compatibles con el ecosistema Google',
      'Enviar mensajes o hacer llamadas sin tocar el móvil',
      'Traducir frases y mantener conversaciones básicas en otro idioma',
    ],
    features: [
      'Respuestas basadas en el buscador de Google',
      'Integración nativa con Gmail, Calendar y Maps',
      'Rutinas para automatizar varias acciones a la vez',
      'Reconocimiento de voz multilingüe',
      'Disponible en móviles, altavoces, pantallas y coches',
    ],
    pros: [
      'Muy buena integración con los servicios de Google',
      'Respuestas de búsqueda generalmente precisas y actualizadas',
      'Amplia disponibilidad de dispositivos compatibles',
    ],
    cons: [
      'Requiere una cuenta de Google y compartir datos de uso',
      'Algunas funciones dependen del país y del idioma',
      'Menor utilidad fuera del ecosistema de Google',
    ],
    pricingNote:
      'Google Assistant es gratuito y viene incluido en los dispositivos Android y en el hardware de Google compatible. No hay suscripción para usarlo como asistente, aunque algunos servicios conectados pueden tener coste propio.',
    faqs: [
      {
        question: '¿Qué es Google Assistant?',
        answer:
          'Es el asistente virtual de Google, disponible en móviles Android, altavoces y pantallas Nest y otros dispositivos compatibles. Permite hacer búsquedas, gestionar la agenda, enviar mensajes, controlar la domótica del hogar y ejecutar rutinas usando la voz o el teclado.',
      },
      {
        question: '¿Google Assistant es gratis?',
        answer:
          'Sí. El asistente es gratuito y está integrado en los dispositivos Android y en el hardware compatible de Google. No requiere suscripción, aunque sí una cuenta de Google. Algunos servicios que se conectan a él pueden tener coste aparte.',
      },
      {
        question: '¿Para qué sirve Google Assistant?',
        answer:
          'Sirve para gestionar tareas cotidianas con la voz: resolver dudas, poner alarmas, consultar el calendario, navegar con Maps, controlar luces y enchufes inteligentes o reproducir música. También permite crear rutinas que lanzan varias acciones con una sola orden.',
      },
    ],
  },
  Pi: {
    name: 'Pi',
    tagline: 'Asistente conversacional centrado en el diálogo empático y el apoyo personal',
    intro:
      'Pi es un asistente conversacional creado por Inflection AI que se plantea como un interlocutor con el que hablar, más que como una herramienta de productividad. Su enfoque prioriza la conversación natural, el tono cercano y el acompañamiento en reflexiones o decisiones personales. Se usa desde el navegador y desde aplicaciones móviles, y también admite modo de voz.',
    useCases: [
      'Conversar y ordenar ideas antes de tomar una decisión',
      'Desahogarse o reflexionar sobre situaciones personales',
      'Practicar conversación y preparar situaciones sociales complicadas',
      'Pedir consejos generales sobre hábitos y rutinas',
      'Resolver dudas cotidianas en un tono cercano',
    ],
    features: [
      'Conversación fluida con memoria del contexto reciente',
      'Modo de voz con varias opciones de locución',
      'Aplicaciones móviles y acceso desde el navegador',
      'Tono empático y orientado al acompañamiento',
      'Historial de conversaciones para retomar temas',
    ],
    pros: [
      'Tono conversacional más natural que el de asistentes genéricos',
      'Interfaz muy sencilla y sin curva de aprendizaje',
      'Modo de voz cómodo para conversaciones largas',
    ],
    cons: [
      'No sustituye a un profesional de la salud mental',
      'Menos útil para tareas técnicas o de productividad',
      'El soporte en español puede ser menos pulido que en inglés',
    ],
    pricingNote:
      'Pi sigue un modelo freemium: suele ofrecer acceso gratuito con límites de uso y funciones básicas de conversación. Las condiciones y los posibles planes de pago han cambiado con el tiempo, así que conviene',
    faqs: [
      {
        question: '¿Qué es Pi de Inflection AI?',
        answer:
          'Pi es un asistente conversacional pensado para hablar de forma natural y cercana. A diferencia de otros chatbots orientados a tareas, se centra en el diálogo, el acompañamiento y la reflexión personal. Está disponible desde el navegador y desde aplicaciones móviles, con modo de voz.',
      },
      {
        question: '¿Pi es gratis?',
        answer:
          'Pi funciona con un modelo freemium: hay acceso gratuito con límites de uso y opciones de pago que pueden variar. Las condiciones han evolucionado desde su lanzamiento, así que conviene consultar su web para precios actualizados antes de crear la cuenta.',
      },
      {
        question: '¿Pi funciona en español?',
        answer:
          'Sí, Pi entiende y responde en español, aunque su desarrollo está más orientado al inglés y los matices del idioma pueden notarse. Para conversaciones cotidianas y reflexiones personales el resultado suele ser adecuado en español de España.',
      },
    ],
  },
  Perplexity: {
    name: 'Perplexity',
    tagline: 'Buscador conversacional con IA que responde citando sus fuentes',
    intro:
      'Perplexity es un motor de búsqueda conversacional que combina modelos de lenguaje con búsqueda en la web para responder preguntas y mostrar las fuentes utilizadas en cada respuesta. Está pensado para investigar temas, contrastar información y profundizar mediante preguntas de seguimiento. Ofrece acceso web, aplicaciones móviles y extensiones de navegador, y permite organizar investigaciones en colecciones.',
    useCases: [
      'Investigar un tema y contrastar fuentes rápidamente',
      'Resolver dudas con respuestas citadas y verificables',
      'Documentar artículos, informes o trabajos académicos',
      'Comparar productos, servicios o alternativas del mercado',
      'Hacer preguntas de seguimiento para profundizar en un tema',
    ],
    features: [
      'Respuestas con citas y enlaces a las fuentes',
      'Búsqueda conversacional con preguntas de seguimiento',
      'Colecciones o espacios para organizar investigaciones',
      'Búsqueda enfocada en ámbitos concretos, como académico',
      'Apps móviles y extensión de navegador',
    ],
    pros: [
      'Las citas permiten verificar la información con facilidad',
      'Mucho más rápido que buscar y leer manualmente varias webs',
      'Buen equilibrio entre respuesta directa y transparencia de fuentes',
    ],
    cons: [
      'El plan gratuito limita el uso de las funciones más avanzadas',
      'Puede resumir mal fuentes de baja calidad si aparecen en la búsqueda',
      'Conviene revisar siempre las citas antes de darlas por buenas',
    ],
    pricingNote:
      'Perplexity funciona con modelo freemium: hay un plan gratuito con límites de uso diarios y un plan de pago para particulares que amplía consultas avanzadas y acceso a modelos más potentes. Los planes de pago suelen situarse en torno a los 20 $/mes;',
    faqs: [
      {
        question: '¿Qué es Perplexity?',
        answer:
          'Perplexity es un buscador conversacional con inteligencia artificial. En lugar de devolver solo una lista de enlaces, redacta una respuesta a la pregunta y muestra las fuentes web en las que se basa, permitiendo hacer preguntas de seguimiento para profundizar.',
      },
      {
        question: '¿Perplexity es gratis?',
        answer:
          'Sí, tiene un plan gratuito con límites de uso diarios que cubre la búsqueda conversacional básica. También ofrece una suscripción de pago que amplía las consultas avanzadas y da acceso a más funciones. Consulta su web para precios actualizados.',
      },
      {
        question: '¿En qué se diferencia Perplexity de ChatGPT?',
        answer:
          'Perplexity está construido alrededor de la búsqueda web y cita siempre sus fuentes, lo que facilita verificar la respuesta. ChatGPT es un asistente conversacional más general, orientado también a redactar, programar o razonar, aunque igualmente puede consultar la web.',
      },
    ],
  },
  Replika: {
    name: 'Replika',
    tagline: 'Compañero virtual con IA para conversar y practicar habilidades sociales',
    intro:
      'Replika es una aplicación de compañía virtual que crea un avatar conversacional personalizable con el que el usuario puede hablar a diario. Está pensada para la conversación informal, el desahogo y la práctica de habilidades sociales, y aprende del historial de chats para adaptar su tono. Se usa desde el móvil y desde el navegador, con opciones de personalización del aspecto y de la personalidad del avatar.',
    useCases: [
      'Conversar a diario con un compañero virtual',
      'Practicar conversación y habilidades sociales en entorno seguro',
      'Desahogarse tras un día complicado',
      'Combatir la sensación de soledad en momentos puntuales',
      'Explorar reflexiones personales mediante el diálogo',
    ],
    features: [
      'Avatar personalizable en aspecto y personalidad',
      'Memoria del historial para dar continuidad a las conversaciones',
      'Chat de texto y opciones de voz',
      'Aplicaciones para móvil y acceso web',
      'Diarios y actividades de conversación guiadas',
    ],
    pros: [
      'Muy accesible para usuarios sin experiencia técnica',
      'Conversaciones con continuidad gracias a la memoria del avatar',
      'Personalización notable del personaje',
    ],
    cons: [
      'No es una herramienta terapéutica ni sustituye ayuda profesional',
      'Las funciones más interesantes están tras el plan de pago',
      'Puede generar apego o dependencia si se usa de forma intensiva',
    ],
    pricingNote:
      'Replika sigue un modelo freemium: la versión gratuita permite chatear con límites y opciones de personalización reducidas, mientras que la suscripción de pago desbloquea modos de relación, voz y personalización avanzada. Suele ofrecerse en cuotas mensuales o anuales;',
    faqs: [
      {
        question: '¿Qué es Replika?',
        answer:
          'Replika es una aplicación de compañía virtual basada en inteligencia artificial. Permite crear un avatar personalizable con el que mantener conversaciones diarias por texto o voz. Está orientada al acompañamiento, el desahogo y la práctica de habilidades sociales, no a tareas productivas.',
      },
      {
        question: '¿Replika es gratis?',
        answer:
          'Tiene una versión gratuita que permite chatear con funciones y personalización limitadas. La suscripción de pago desbloquea voz, modos de relación adicionales y más opciones de personalización del avatar. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Replika funciona en español?',
        answer:
          'Replika está diseñada principalmente en inglés y es donde mejor rinde. Puede mantener conversaciones en español, pero la calidad y la naturalidad del diálogo suelen ser inferiores, con expresiones menos idiomáticas que en su idioma original.',
      },
    ],
  },
  Intercom: {
    name: 'Intercom',
    tagline: 'Plataforma de atención al cliente con agente de IA para soporte automatizado',
    intro:
      'Intercom es una plataforma de comunicación y atención al cliente que combina chat en directo, bandeja de entrada compartida, base de conocimiento y un agente de IA capaz de resolver consultas de forma autónoma. Está dirigida a equipos de soporte y de ventas que quieren atender a los usuarios desde la web, el móvil y el correo. Se integra con CRM, herramientas de producto y sistemas de tickets.',
    useCases: [
      'Resolver automáticamente consultas frecuentes de clientes',
      'Centralizar el soporte por chat, correo y redes',
      'Derivar conversaciones complejas al agente humano adecuado',
      'Enviar mensajes proactivos dentro del producto',
      'Construir y mantener una base de conocimiento de ayuda',
    ],
    features: [
      'Agente de IA que responde consultas de forma autónoma',
      'Bandeja de entrada compartida para equipos de soporte',
      'Base de conocimiento integrada con el chat',
      'Mensajes y recorridos automatizados dentro del producto',
      'Integraciones con CRM y herramientas de negocio',
    ],
    pros: [
      'Solución completa que cubre soporte, base de conocimiento y automatización',
      'Buena tasa de resolución automática en consultas repetitivas',
      'Ecosistema amplio de integraciones',
    ],
    cons: [
      'Coste elevado, sobre todo al escalar el número de agentes',
      'El precio por resolución de IA puede ser difícil de prever',
      'Curva de configuración inicial notable',
    ],
    pricingNote:
      'Intercom es una herramienta de pago con planes por puesto de agente y cargos adicionales por las resoluciones que gestiona su agente de IA. Existen descuentos para startups y periodos de prueba. Al combinarse el coste por asiento y por uso, conviene',
    faqs: [
      {
        question: '¿Qué es Intercom?',
        answer:
          'Intercom es una plataforma de atención al cliente que reúne chat en directo, bandeja compartida, base de conocimiento y un agente de IA que resuelve consultas de forma automática. La usan equipos de soporte y ventas para atender a usuarios desde la web, el móvil y el correo.',
      },
      {
        question: '¿Intercom tiene plan gratuito?',
        answer:
          'Intercom es una herramienta de pago. No ofrece un plan gratuito permanente, aunque sí suele contar con periodo de prueba y con programas especiales para startups. El precio combina cuota por agente y coste por las resoluciones del agente de IA.',
      },
      {
        question: '¿Para qué sirve el agente de IA de Intercom?',
        answer:
          'Sirve para responder de forma autónoma a las consultas de clientes apoyándose en la base de conocimiento y en el contenido de la empresa. Reduce la carga de tickets repetitivos y deriva al equipo humano los casos que no puede resolver.',
      },
    ],
  },
  Drift: {
    name: 'Drift',
    tagline: 'Chatbot conversacional de marketing y ventas para captar leads cualificados',
    intro:
      'Drift es una plataforma de marketing conversacional orientada a equipos de ventas B2B. Su chatbot interactúa con los visitantes de la web, cualifica oportunidades mediante preguntas y agenda reuniones directamente con los comerciales disponibles. Forma parte del ecosistema de Salesloft y se integra con CRM y herramientas de automatización de marketing para trasladar los leads al embudo comercial.',
    useCases: [
      'Cualificar visitantes de la web antes de pasarlos a ventas',
      'Agendar reuniones automáticamente con el comercial adecuado',
      'Atender consultas comerciales fuera del horario habitual',
      'Personalizar mensajes según la cuenta que visita la web',
      'Alimentar el CRM con leads recogidos por el chatbot',
    ],
    features: [
      'Chatbot conversacional con flujos de cualificación',
      'Agendado automático de reuniones en el calendario comercial',
      'Enrutado de conversaciones al representante correspondiente',
      'Integraciones con CRM y automatización de marketing',
      'Segmentación por cuenta para estrategias ABM',
    ],
    pros: [
      'Muy enfocado a convertir tráfico web en reuniones comerciales',
      'Buena integración con flujos de ventas B2B',
      'Reduce el tiempo entre la visita y el primer contacto',
    ],
    cons: [
      'Precio orientado a empresas medianas y grandes',
      'Poco útil si no hay volumen de tráfico web cualificado',
      'Requiere diseñar bien los flujos para que aporte valor',
    ],
    pricingNote:
      'Drift es una herramienta de pago, con planes orientados a equipos de ventas y marketing y precios normalmente bajo presupuesto personalizado. No suele publicar tarifas cerradas en su web, por lo que hay que solicitar una demostración.',
    faqs: [
      {
        question: '¿Qué es Drift?',
        answer:
          'Drift es una plataforma de marketing conversacional con chatbot orientada a ventas B2B. Interactúa con los visitantes de la web, los cualifica y agenda reuniones con el equipo comercial. Se integra con CRM y herramientas de marketing para trasladar los leads al embudo.',
      },
      {
        question: '¿Drift es gratis?',
        answer:
          'No. Drift es una solución de pago dirigida a empresas, con tarifas habitualmente bajo presupuesto personalizado según el tamaño del equipo y las funciones necesarias. Suele requerir contactar con su equipo comercial. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Drift?',
        answer:
          'Sirve para convertir el tráfico de la web en oportunidades comerciales. Su chatbot inicia conversaciones con los visitantes, hace preguntas de cualificación, enruta al comercial adecuado y permite reservar reuniones sin intervención manual del equipo de ventas.',
      },
    ],
  },
  Ada: {
    name: 'Ada',
    tagline: 'Plataforma de automatización de atención al cliente con agentes de IA',
    intro:
      'Ada es una plataforma de automatización de la atención al cliente que permite desplegar agentes de IA capaces de resolver consultas en chat, correo, voz y redes sociales. Está pensada para empresas con volúmenes altos de soporte que quieren reducir tickets repetitivos manteniendo la coherencia de marca. Se apoya en el contenido y los sistemas de la empresa para dar respuestas contextualizadas y escalar al agente humano cuando hace falta.',
    useCases: [
      'Automatizar respuestas a consultas frecuentes de soporte',
      'Atender clientes en varios canales desde un mismo agente',
      'Reducir el volumen de tickets que llegan al equipo humano',
      'Ofrecer soporte multilingüe sin ampliar plantilla',
      'Medir la tasa de resolución automática de las conversaciones',
    ],
    features: [
      'Agentes de IA entrenados con el contenido de la empresa',
      'Soporte multicanal en chat, correo, voz y redes',
      'Escalado automático a agente humano cuando procede',
      'Panel de métricas de resolución y satisfacción',
      'Integraciones con sistemas de tickets y CRM',
    ],
    pros: [
      'Diseñado para volúmenes altos de atención al cliente',
      'Capacidad multicanal y multilingüe de serie',
      'Buenas métricas de resolución automática documentadas',
    ],
    cons: [
      'Orientado a empresas grandes, poco accesible para pymes',
      'Precio bajo presupuesto y sin tarifas públicas claras',
      'Requiere inversión inicial en contenidos e integraciones',
    ],
    pricingNote:
      'Ada es una solución de pago dirigida al segmento empresarial, con precios habitualmente personalizados según volumen de conversaciones y canales activos. No publica tarifas cerradas, por lo que hay que solicitar una demostración.',
    faqs: [
      {
        question: '¿Qué es Ada?',
        answer:
          'Ada es una plataforma de automatización de atención al cliente basada en agentes de IA. Permite resolver consultas en chat, correo, voz y redes sociales apoyándose en el contenido de la empresa, y derivar al equipo humano los casos que no puede atender.',
      },
      {
        question: '¿Ada tiene versión gratuita?',
        answer:
          'No dispone de un plan gratuito. Es una herramienta de pago orientada a empresas, con precios personalizados que dependen del volumen de conversaciones y de los canales que se activen. Lo habitual es solicitar una demostración a su equipo comercial.',
      },
      {
        question: '¿Ada funciona en español?',
        answer:
          'Sí. Ada está pensada para soporte multilingüe y puede atender conversaciones en español, entre otros idiomas. La calidad depende en buena medida del contenido y la base de conocimiento que la empresa proporcione al agente en cada idioma.',
      },
    ],
  },
  LivePerson: {
    name: 'LivePerson',
    tagline: 'Plataforma empresarial de mensajería conversacional con automatización por IA',
    intro:
      'LivePerson es una plataforma de conversación empresarial que combina mensajería con clientes, agentes virtuales y análisis de conversaciones. Está orientada a grandes organizaciones de sectores como banca, telecomunicaciones o retail, que gestionan volúmenes muy altos de interacciones. Permite automatizar parte del soporte y las ventas, y coordinar el trabajo conjunto de agentes humanos y bots en canales como web, móvil y mensajería.',
    useCases: [
      'Automatizar conversaciones de soporte de alto volumen',
      'Coordinar el trabajo de agentes humanos y bots',
      'Atender clientes en canales de mensajería y redes sociales',
      'Analizar conversaciones para detectar motivos de contacto',
      'Impulsar ventas asistidas mediante mensajería',
    ],
    features: [
      'Agentes virtuales con automatización de intenciones',
      'Mensajería en múltiples canales, incluidas apps de terceros',
      'Analítica de conversaciones y detección de intenciones',
      'Espacio de trabajo unificado para agentes humanos',
      'Integraciones con sistemas empresariales y CRM',
    ],
    pros: [
      'Preparada para volúmenes muy altos de interacciones',
      'Buena analítica de conversaciones e intenciones',
      'Amplia cobertura de canales de mensajería',
    ],
    cons: [
      'Complejidad de implantación elevada',
      'Coste alto, pensado para grandes empresas',
      'Poco adecuada para equipos pequeños',
    ],
    pricingNote:
      'LivePerson es una plataforma de pago del segmento empresarial, con precios personalizados según volumen de conversaciones, canales e integraciones. No publica tarifas cerradas y suele requerir un proceso comercial con demostración previa.',
    faqs: [
      {
        question: '¿Qué es LivePerson?',
        answer:
          'LivePerson es una plataforma de mensajería conversacional para empresas. Combina agentes virtuales, atención humana y analítica de conversaciones para gestionar soporte y ventas en canales web, móvil y de mensajería. Se dirige sobre todo a organizaciones con grandes volúmenes de interacciones.',
      },
      {
        question: '¿LivePerson es gratis?',
        answer:
          'No. Es una solución empresarial de pago con precios personalizados en función del volumen de conversaciones, los canales activos y las integraciones necesarias. Requiere contacto comercial previo. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve LivePerson?',
        answer:
          'Sirve para gestionar la conversación con clientes a gran escala: automatiza consultas repetitivas con agentes virtuales, coordina la intervención de agentes humanos y analiza las conversaciones para identificar los motivos de contacto más frecuentes y optimizar la atención.',
      },
    ],
  },
  Einstein: {
    name: 'Einstein',
    tagline: 'Capa de IA de Salesforce para ventas, servicio y marketing en el CRM',
    intro:
      'Einstein es la capa de inteligencia artificial integrada en las nubes de Salesforce. Añade predicciones, recomendaciones, generación de contenido y agentes conversacionales sobre los datos que la empresa ya tiene en su CRM, aplicados a ventas, servicio, marketing y comercio. Está pensado para organizaciones que trabajan con Salesforce y quieren automatizar tareas y anticipar comportamientos sin sacar los datos de la plataforma.',
    useCases: [
      'Priorizar oportunidades de venta con puntuación predictiva',
      'Redactar correos y respuestas de soporte automáticamente',
      'Resumir casos y conversaciones dentro del CRM',
      'Recomendar el siguiente mejor paso a los comerciales',
      'Desplegar agentes conversacionales conectados a los datos del CRM',
    ],
    features: [
      'Predicciones y puntuación de leads basadas en datos del CRM',
      'Generación de contenido para correos y respuestas',
      'Agentes conversacionales integrados en la plataforma',
      'Resúmenes automáticos de casos y llamadas',
      'Gobernanza de datos dentro del entorno Salesforce',
    ],
    pros: [
      'Aprovecha los datos que ya están en el CRM',
      'Integración nativa en los flujos de trabajo de Salesforce',
      'Buen control de gobernanza y permisos de datos',
    ],
    cons: [
      'Solo tiene sentido si ya usas Salesforce',
      'Coste adicional sobre las licencias existentes',
      'Su valor depende de la calidad de los datos del CRM',
    ],
    pricingNote:
      'Einstein no es un producto independiente: se comercializa como complemento o como parte de determinadas ediciones de las nubes de Salesforce, con coste adicional por usuario o por consumo. El precio depende de la edición contratada y de los módulos activados.',
    faqs: [
      {
        question: '¿Qué es Salesforce Einstein?',
        answer:
          'Einstein es la capa de inteligencia artificial de Salesforce. Añade predicciones, recomendaciones, generación de texto y agentes conversacionales a las nubes de ventas, servicio y marketing, trabajando sobre los datos que la empresa ya tiene en su CRM.',
      },
      {
        question: '¿Einstein está incluido en Salesforce?',
        answer:
          'Depende de la edición. Algunas funciones vienen incluidas en determinadas ediciones y otras requieren complementos con coste adicional por usuario o por consumo. Es habitual que se contrate como añadido a las licencias existentes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Einstein?',
        answer:
          'Sirve para automatizar y anticipar tareas dentro del CRM: puntuar oportunidades de venta, sugerir el siguiente paso a un comercial, redactar correos, resumir casos de soporte y desplegar agentes que responden usando los datos de la propia empresa.',
      },
    ],
  },
  ChatSpot: {
    name: 'ChatSpot',
    tagline: 'Asistente conversacional de HubSpot para consultar el CRM y tareas de marketing',
    intro:
      'ChatSpot es el asistente conversacional desarrollado por HubSpot que permite interactuar con los datos del CRM mediante lenguaje natural. Sirve para consultar contactos y negocios, generar informes, redactar correos o buscar información de empresas sin navegar por la interfaz. Está dirigido a equipos de ventas, marketing y soporte que ya trabajan con HubSpot y quieren agilizar tareas repetitivas.',
    useCases: [
      'Consultar contactos y negocios del CRM en lenguaje natural',
      'Generar informes rápidos sobre la actividad comercial',
      'Redactar correos de prospección y seguimiento',
      'Buscar información pública sobre empresas objetivo',
      'Crear registros en el CRM sin salir del chat',
    ],
    features: [
      'Consultas al CRM de HubSpot en lenguaje natural',
      'Generación de informes y resúmenes de datos',
      'Redacción asistida de correos y contenidos',
      'Búsqueda de información de empresas y prospectos',
      'Integración directa con la cuenta de HubSpot',
    ],
    pros: [
      'Ahorra tiempo al evitar navegar por menús del CRM',
      'Integración natural con los datos que ya están en HubSpot',
      'Acceso sin coste añadido para usuarios de HubSpot',
    ],
    cons: [
      'Solo aporta valor si usas HubSpot como CRM',
      'Sus funciones se han ido integrando en otros productos de HubSpot',
      'Menos potente que un asistente general para tareas ajenas al CRM',
    ],
    pricingNote:
      'ChatSpot sigue un modelo freemium ligado al ecosistema de HubSpot: es accesible para usuarios con cuenta de HubSpot, incluidas las gratuitas, y su alcance depende del plan contratado. HubSpot ha ido reorganizando sus asistentes de IA, así que conviene',
    faqs: [
      {
        question: '¿Qué es ChatSpot?',
        answer:
          'ChatSpot es el asistente conversacional de HubSpot. Permite consultar y actualizar los datos del CRM en lenguaje natural, generar informes, redactar correos y buscar información de empresas, sin tener que navegar manualmente por la interfaz de HubSpot.',
      },
      {
        question: '¿ChatSpot es gratis?',
        answer:
          'Es accesible para usuarios con cuenta de HubSpot, incluidas las gratuitas, aunque el alcance de lo que puede hacer depende del plan contratado. HubSpot ha ido integrando sus asistentes de IA en otros productos, así que consulta su web para conocer la disponibilidad actual.',
      },
      {
        question: '¿Para qué sirve ChatSpot?',
        answer:
          'Sirve para trabajar con el CRM de HubSpot mediante conversación: buscar contactos y negocios, pedir informes de actividad, crear registros, redactar correos de prospección y obtener información sobre empresas objetivo, todo desde una misma interfaz de chat.',
      },
    ],
  },
  Zendesk: {
    name: 'Zendesk',
    tagline: 'Software de soporte al cliente con agentes y automatizaciones basadas en IA',
    intro:
      'Zendesk es una plataforma de atención al cliente que centraliza tickets, chat, correo, teléfono y base de conocimiento en un único espacio de trabajo. Incorpora funciones de IA para resolver consultas automáticamente, sugerir respuestas a los agentes, clasificar tickets por intención y resumir conversaciones. Es una de las soluciones de soporte más extendidas y se integra con multitud de herramientas de negocio.',
    useCases: [
      'Centralizar los tickets de soporte de todos los canales',
      'Resolver consultas frecuentes con agentes automáticos',
      'Sugerir respuestas y resúmenes a los agentes humanos',
      'Clasificar y enrutar tickets según su intención',
      'Mantener un centro de ayuda de autoservicio',
    ],
    features: [
      'Sistema de tickets multicanal unificado',
      'Agentes de IA para resolución automática de consultas',
      'Sugerencias de respuesta y resúmenes para agentes',
      'Centro de ayuda y base de conocimiento',
      'Amplio catálogo de integraciones y API',
    ],
    pros: [
      'Solución madura y muy extendida en soporte al cliente',
      'Ecosistema enorme de integraciones y aplicaciones',
      'Buena escalabilidad desde equipos medianos a grandes',
    ],
    cons: [
      'Coste por agente que crece rápido al ampliar el equipo',
      'Las funciones de IA suelen requerir complementos de pago',
      'Configuración avanzada con curva de aprendizaje',
    ],
    pricingNote:
      'Zendesk es de pago, con planes por agente y varios niveles según las funciones incluidas. Las capacidades avanzadas de IA se comercializan normalmente como complemento adicional. Suele haber periodo de prueba gratuito.',
    faqs: [
      {
        question: '¿Qué es Zendesk?',
        answer:
          'Zendesk es una plataforma de atención al cliente que centraliza tickets, chat, correo, teléfono y base de conocimiento. Incluye funciones de inteligencia artificial para resolver consultas de forma automática, clasificar tickets y ayudar a los agentes con sugerencias y resúmenes.',
      },
      {
        question: '¿Zendesk tiene plan gratuito?',
        answer:
          'No mantiene un plan gratuito permanente. Es una herramienta de pago con planes por agente y distintos niveles de funciones, aunque ofrece periodo de prueba. Las capacidades de IA suelen contratarse como complemento. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Zendesk funciona en español?',
        answer:
          'Sí. La interfaz y la atención al cliente pueden gestionarse en español, y el centro de ayuda admite contenidos multilingües. Las funciones de IA trabajan con varios idiomas, aunque el resultado depende de la calidad de la base de conocimiento en cada uno.',
      },
    ],
  },
  AutoGPT: {
    name: 'AutoGPT',
    tagline: 'Agente autónomo de código abierto que encadena tareas hacia un objetivo',
    intro:
      'AutoGPT es un proyecto de código abierto que popularizó la idea de agente autónomo: a partir de un objetivo definido por el usuario, el sistema descompone el problema en tareas, las ejecuta encadenando llamadas a un modelo de lenguaje y utiliza herramientas como la búsqueda web o la escritura de ficheros. Ha evolucionado hacia una plataforma para construir y ejecutar flujos de agentes, y sigue siendo un referente en la comunidad de agentes autónomos.',
    useCases: [
      'Automatizar investigaciones que requieren varios pasos encadenados',
      'Generar informes recopilando información de la web',
      'Experimentar con arquitecturas de agentes autónomos',
      'Construir flujos de trabajo automatizados con IA',
      'Prototipar automatizaciones sin escribir código desde cero',
    ],
    features: [
      'Descomposición automática de un objetivo en subtareas',
      'Uso de herramientas externas como búsqueda web',
      'Código abierto y desplegable en local',
      'Constructor visual de flujos de agentes',
      'Comunidad activa y ecosistema de extensiones',
    ],
    pros: [
      'Código abierto y auditable, con opción de autoalojamiento',
      'Muy útil para aprender cómo funcionan los agentes',
      'No hay coste de licencia por usar el software',
    ],
    cons: [
      'Requiere claves de API propias, cuyo consumo sí cuesta dinero',
      'Los agentes autónomos pueden entrar en bucles y gastar tokens',
      'Configuración técnica exigente para usuarios no desarrolladores',
    ],
    pricingNote:
      'AutoGPT es software de código abierto y su uso no tiene coste de licencia. Sin embargo, para funcionar necesita claves de API de un proveedor de modelos, cuyo consumo se factura aparte y puede dispararse si el agente ejecuta muchas iteraciones.',
    faqs: [
      {
        question: '¿Qué es AutoGPT?',
        answer:
          'AutoGPT es un proyecto de código abierto que permite crear agentes autónomos. A partir de un objetivo, el sistema genera subtareas, las ejecuta usando un modelo de lenguaje y herramientas externas como la búsqueda web, e itera hasta acercarse al resultado pedido.',
      },
      {
        question: '¿AutoGPT es gratis?',
        answer:
          'El software es gratuito y de código abierto, se puede descargar y ejecutar en local. Ahora bien, necesita claves de API de un proveedor de modelos de lenguaje, y ese consumo sí se paga aparte según el uso que haga el agente.',
      },
      {
        question: '¿Para qué sirve AutoGPT?',
        answer:
          'Sirve para automatizar tareas que requieren varios pasos encadenados, como investigar un tema, recopilar información de la web y redactar un informe. También se usa para experimentar y aprender cómo se construyen y orquestan agentes autónomos.',
      },
    ],
  },
  AgentGPT: {
    name: 'AgentGPT',
    tagline: 'Agente autónomo en el navegador que ejecuta objetivos sin instalar nada',
    intro:
      'AgentGPT, desarrollado por Reworkd, permite crear y ejecutar agentes autónomos directamente desde el navegador. El usuario define un objetivo, y el agente genera una lista de tareas, las ejecuta de forma iterativa y muestra los resultados en pantalla. Su principal atractivo es la ausencia de instalación: es una de las formas más sencillas de probar el concepto de agente autónomo sin montar un entorno técnico.',
    useCases: [
      'Probar el concepto de agente autónomo sin instalar nada',
      'Recopilar información sobre un tema en varios pasos',
      'Generar borradores de planes o estrategias',
      'Explorar cómo un agente descompone un objetivo en tareas',
      'Prototipar automatizaciones sencillas de investigación',
    ],
    features: [
      'Ejecución de agentes desde el navegador, sin instalación',
      'Descomposición automática del objetivo en tareas',
      'Visualización en directo del razonamiento y las tareas',
      'Proyecto de código abierto y autoalojable',
      'Configuración de la propia clave de API',
    ],
    pros: [
      'Barrera de entrada muy baja, funciona en el navegador',
      'Código abierto, con posibilidad de autoalojarlo',
      'Útil para entender de forma visual cómo trabaja un agente',
    ],
    cons: [
      'Los resultados pueden ser superficiales en tareas complejas',
      'El modo alojado impone límites de uso',
      'Consumo de tokens elevado si el agente itera mucho',
    ],
    pricingNote:
      'AgentGPT es de código abierto y se puede usar sin coste, tanto en su versión alojada con límites como autoalojándolo. Para desbloquear más ejecuciones o modelos más potentes suele hacer falta aportar la propia clave de API, cuyo consumo se factura aparte.',
    faqs: [
      {
        question: '¿Qué es AgentGPT?',
        answer:
          'AgentGPT es una herramienta de Reworkd que permite crear agentes autónomos desde el navegador. Se le da un objetivo y el agente genera tareas, las ejecuta de forma iterativa y muestra los resultados, sin necesidad de instalar nada en el ordenador.',
      },
      {
        question: '¿AgentGPT es gratis?',
        answer:
          'Sí, es un proyecto de código abierto con una versión alojada gratuita que aplica límites de uso. Para ejecuciones más largas o modelos más potentes suele ser necesario aportar una clave de API propia, cuyo consumo se paga al proveedor del modelo.',
      },
      {
        question: '¿Para qué sirve AgentGPT?',
        answer:
          'Sirve para automatizar tareas de varios pasos, como investigar un tema, esbozar un plan o recopilar información. Es especialmente útil para experimentar y visualizar cómo un agente autónomo descompone un objetivo en subtareas y las va ejecutando.',
      },
    ],
  },
  MetaGPT: {
    name: 'MetaGPT',
    tagline: 'Framework multiagente que simula un equipo de software colaborando',
    intro:
      'MetaGPT es un framework de código abierto de DeepWisdom que orquesta varios agentes de IA con roles definidos, como product manager, arquitecto o ingeniero, para abordar un mismo proyecto de forma coordinada. A partir de un requisito en lenguaje natural, el sistema genera documentación, diseño y código siguiendo procedimientos similares a los de un equipo de desarrollo real. Está dirigido a desarrolladores e investigadores de sistemas multiagente.',
    useCases: [
      'Generar documentación y código a partir de un requisito',
      'Investigar arquitecturas de sistemas multiagente',
      'Prototipar aplicaciones sencillas de forma automatizada',
      'Simular el flujo de trabajo de un equipo de desarrollo',
      'Construir agentes especializados con roles definidos',
    ],
    features: [
      'Agentes con roles diferenciados que colaboran entre sí',
      'Generación de documentos de requisitos y diseño',
      'Código abierto con comunidad activa en GitHub',
      'Procedimientos de trabajo estructurados entre agentes',
      'Configuración del proveedor de modelos que se utiliza',
    ],
    pros: [
      'Enfoque multiagente bien estructurado y documentado',
      'Código abierto y personalizable a fondo',
      'Genera artefactos intermedios útiles, no solo código',
    ],
    cons: [
      'Requiere conocimientos técnicos para instalarlo y ajustarlo',
      'El coste de tokens crece con el número de agentes implicados',
      'El código generado necesita revisión humana antes de usarse',
    ],
    pricingNote:
      'MetaGPT es un proyecto de código abierto sin coste de licencia. El gasto real viene del consumo de la API del modelo de lenguaje que se configure, que se factura por uso y puede ser significativo al ejecutar varios agentes en paralelo.',
    faqs: [
      {
        question: '¿Qué es MetaGPT?',
        answer:
          'MetaGPT es un framework de código abierto que coordina varios agentes de IA con roles distintos, como product manager, arquitecto o ingeniero, para trabajar juntos sobre un mismo requisito. Genera documentación, diseño y código imitando el flujo de un equipo de desarrollo.',
      },
      {
        question: '¿MetaGPT es gratis?',
        answer:
          'El framework es gratuito y de código abierto. Lo que sí tiene coste es el consumo de la API del modelo de lenguaje que se configure para ejecutar los agentes, que se factura por uso y aumenta cuanto más agentes intervengan.',
      },
      {
        question: '¿Para qué sirve MetaGPT?',
        answer:
          'Sirve para generar de forma automatizada artefactos de un proyecto de software a partir de un requisito en lenguaje natural: documentos de requisitos, diseño y código. También es una base habitual para investigar y construir sistemas multiagente personalizados.',
      },
    ],
  },
  'ChatGPT Agents': {
    name: 'ChatGPT Agents',
    tagline: 'Agentes de OpenAI que navegan y ejecutan tareas de varios pasos',
    intro:
      'ChatGPT Agents es la capacidad agéntica integrada en ChatGPT, el asistente de OpenAI. Permite que el modelo no solo responda, sino que ejecute tareas de varios pasos por su cuenta: navegar por la web, usar herramientas, trabajar con ficheros y devolver un resultado terminado. Está pensada para automatizar encargos que antes exigían ir guiando al asistente paso a paso.',
    useCases: [
      'Investigar un tema y entregar un informe terminado',
      'Rellenar y comparar información recogida de varias webs',
      'Preparar hojas de cálculo o documentos a partir de datos',
      'Automatizar tareas repetitivas de varios pasos',
      'Delegar encargos que requieren navegar y consultar fuentes',
    ],
    features: [
      'Ejecución autónoma de tareas de varios pasos',
      'Navegación web y uso de herramientas integradas',
      'Trabajo con ficheros subidos por el usuario',
      'Seguimiento visible del proceso que sigue el agente',
      'Integrado dentro de la propia interfaz de ChatGPT',
    ],
    pros: [
      'No requiere configuración técnica ni claves de API',
      'Integrado en una interfaz que mucha gente ya conoce',
      'Buen rendimiento en tareas de investigación y síntesis',
    ],
    cons: [
      'Las funciones agénticas están reservadas a planes de pago',
      'Las tareas pueden tardar bastante en completarse',
      'Conviene revisar el resultado, ya que puede cometer errores',
    ],
    pricingNote:
      'ChatGPT funciona con modelo freemium: hay un plan gratuito con funciones limitadas, mientras que las capacidades agénticas suelen estar disponibles en los planes de pago, con distintos niveles y límites de uso. Los planes individuales de pago rondan los 20 $/mes;',
    faqs: [
      {
        question: '¿Qué son los agentes de ChatGPT?',
        answer:
          'Son una capacidad de ChatGPT que permite al asistente ejecutar tareas de varios pasos de forma autónoma: navegar por la web, usar herramientas y trabajar con ficheros hasta entregar un resultado terminado, en lugar de limitarse a responder a cada mensaje.',
      },
      {
        question: '¿Los agentes de ChatGPT son gratis?',
        answer:
          'ChatGPT tiene un plan gratuito, pero las funciones agénticas suelen estar reservadas a los planes de pago, con límites de uso según el nivel contratado. Los planes individuales rondan los 20 $/mes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirven los agentes de ChatGPT?',
        answer:
          'Sirven para delegar encargos completos en lugar de ir guiando al asistente paso a paso: investigar un tema y entregar un informe, recopilar datos de varias webs, preparar un documento o automatizar tareas repetitivas que implican consultar fuentes externas.',
      },
    ],
  },
  'Copilot Agents': {
    name: 'Copilot Agents',
    tagline: 'Agentes de Microsoft Copilot para automatizar tareas dentro de Microsoft 365',
    intro:
      'Copilot Agents son los agentes de IA de Microsoft que funcionan dentro del ecosistema de Microsoft 365. Permiten crear asistentes especializados que acceden a los datos de la organización en Teams, SharePoint, Outlook u otras fuentes conectadas, y ejecutan tareas o responden preguntas apoyándose en ese contexto. Se pueden construir sin código desde herramientas como Copilot Studio y desplegar para equipos concretos.',
    useCases: [
      'Crear un agente que responda dudas sobre documentación interna',
      'Automatizar tareas repetitivas dentro de Microsoft 365',
      'Consultar datos corporativos de SharePoint mediante conversación',
      'Asistir a equipos de soporte interno de RR. HH. o TI',
      'Conectar procesos de negocio con acciones automatizadas',
    ],
    features: [
      'Agentes conectados a los datos de la organización',
      'Creación sin código desde Copilot Studio',
      'Integración con Teams, Outlook y SharePoint',
      'Controles de permisos heredados del entorno Microsoft',
      'Acciones conectadas a sistemas de negocio',
    ],
    pros: [
      'Acceso al contexto real de la empresa dentro de Microsoft 365',
      'Respeta los permisos y la gobernanza ya existentes',
      'Se pueden crear sin escribir código',
    ],
    cons: [
      'Requiere licencias de Microsoft 365 y costes adicionales',
      'Solo tiene sentido si la empresa ya trabaja en ese ecosistema',
      'La calidad depende de cómo estén organizados los datos internos',
    ],
    pricingNote:
      'Los agentes de Copilot son de pago y se comercializan mediante licencias de Microsoft 365 Copilot por usuario y, en algunos casos, con modelos de consumo por mensaje o acción. La estructura de precios de Microsoft cambia con frecuencia, así que',
    faqs: [
      {
        question: '¿Qué son los agentes de Microsoft Copilot?',
        answer:
          'Son asistentes de IA especializados que funcionan dentro del ecosistema de Microsoft 365. Acceden a los datos de la organización en Teams, SharePoint u Outlook y responden preguntas o ejecutan acciones apoyándose en ese contexto, respetando los permisos existentes.',
      },
      {
        question: '¿Cuánto cuestan los agentes de Copilot?',
        answer:
          'Son de pago. Se comercializan mediante licencias de Microsoft 365 Copilot por usuario y, en ciertos escenarios, con modelos de consumo por mensaje o acción. Los precios varían según el plan y el país. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirven los agentes de Copilot?',
        answer:
          'Sirven para automatizar tareas y responder consultas usando la información interna de la empresa: resolver dudas sobre documentación, apoyar a equipos de RR. HH. o TI, consultar datos de SharePoint o lanzar acciones conectadas a sistemas de negocio.',
      },
    ],
  },
  'LangChain Agents': {
    name: 'LangChain Agents',
    tagline: 'Framework de código abierto para construir agentes de IA con herramientas',
    intro:
      'LangChain Agents es la parte del framework LangChain dedicada a construir agentes: sistemas en los que un modelo de lenguaje decide qué herramientas invocar y en qué orden para resolver una tarea. Ofrece abstracciones para definir herramientas, gestionar memoria y orquestar bucles de razonamiento, y se apoya en proyectos hermanos como LangGraph para flujos más complejos. Va dirigido a desarrolladores que integran IA en sus aplicaciones.',
    useCases: [
      'Construir agentes que consultan bases de datos internas',
      'Crear asistentes que invocan APIs externas según la petición',
      'Desarrollar sistemas RAG con recuperación de documentos',
      'Orquestar flujos de varios pasos con herramientas personalizadas',
      'Prototipar aplicaciones de IA antes de llevarlas a producción',
    ],
    features: [
      'Abstracciones para definir herramientas y agentes',
      'Compatibilidad con múltiples proveedores de modelos',
      'Gestión de memoria y contexto conversacional',
      'Integración con LangGraph para flujos complejos',
      'Ecosistema de integraciones con bases de datos vectoriales',
    ],
    pros: [
      'Código abierto con una comunidad muy grande',
      'No te ata a un único proveedor de modelos',
      'Enorme cantidad de integraciones ya disponibles',
    ],
    cons: [
      'Curva de aprendizaje elevada para quien empieza',
      'La API ha cambiado bastante entre versiones',
      'Puede añadir capas de abstracción innecesarias en casos simples',
    ],
    pricingNote:
      'LangChain es una librería de código abierto y su uso no tiene coste de licencia. Los gastos vienen del consumo de la API del modelo de lenguaje elegido y, opcionalmente, de servicios de pago del ecosistema como sus herramientas de observabilidad.',
    faqs: [
      {
        question: '¿Qué son los agentes de LangChain?',
        answer:
          'Son sistemas construidos con el framework LangChain en los que un modelo de lenguaje decide qué herramientas usar y en qué orden para resolver una tarea. LangChain aporta las abstracciones para definir esas herramientas, gestionar la memoria y orquestar el bucle de razonamiento.',
      },
      {
        question: '¿LangChain es gratis?',
        answer:
          'Sí, la librería es de código abierto y gratuita. Lo que se paga es el consumo de la API del modelo de lenguaje que se utilice y, si se contratan, los servicios de pago del ecosistema, como las herramientas de observabilidad y despliegue.',
      },
      {
        question: '¿Para qué sirve LangChain?',
        answer:
          'Sirve para desarrollar aplicaciones de IA que van más allá de una simple llamada al modelo: agentes que consultan bases de datos, invocan APIs, recuperan documentos o encadenan varios pasos. Es una de las bases más usadas para construir sistemas RAG y agentes.',
      },
    ],
  },
  'xAI Agents': {
    name: 'xAI Agents',
    tagline: 'Agentes de IA basados en la tecnología de xAI para tareas automatizadas',
    intro:
      'xAI Agents hace referencia a agentes autónomos construidos sobre la tecnología de xAI, la compañía de inteligencia artificial detrás del modelo Grok. Estos agentes se plantean para ejecutar tareas de varios pasos de forma automatizada, apoyándose en las capacidades de razonamiento y acceso a información del modelo. Van dirigidos a usuarios y desarrolladores que quieren delegar procesos repetitivos en un sistema que actúe por su cuenta.',
    useCases: [
      'Automatizar tareas repetitivas que requieren varios pasos',
      'Recopilar y sintetizar información de distintas fuentes',
      'Delegar procesos de análisis en un agente autónomo',
      'Integrar capacidades de agente en aplicaciones propias',
      'Experimentar con automatizaciones basadas en el modelo Grok',
    ],
    features: [
      'Agentes construidos sobre la tecnología de xAI',
      'Ejecución de tareas encadenadas sin supervisión constante',
      'Acceso a las capacidades de razonamiento del modelo',
      'Posibilidad de integración mediante API',
      'Interfaz web para lanzar y seguir tareas',
    ],
    pros: [
      'Aprovecha las capacidades del modelo Grok',
      'Enfoque orientado a automatizar tareas completas',
      'Existe una vía de acceso sin coste para probarlo',
    ],
    cons: [
      'Ecosistema más joven que el de alternativas consolidadas',
      'Documentación y comunidad menos extensas',
      'Las funciones avanzadas suelen requerir suscripción',
    ],
    pricingNote:
      'Sigue un modelo freemium: suele existir una vía de acceso gratuita con límites de uso, mientras que las capacidades avanzadas o el uso intensivo requieren suscripción o consumo de API facturado por uso. Al tratarse de un producto en evolución,',
    faqs: [
      {
        question: '¿Qué son los agentes de xAI?',
        answer:
          'Son agentes autónomos construidos sobre la tecnología de xAI, la empresa detrás del modelo Grok. Permiten ejecutar tareas de varios pasos de forma automatizada, aprovechando las capacidades de razonamiento del modelo, en lugar de responder a un único mensaje.',
      },
      {
        question: '¿Los agentes de xAI son gratis?',
        answer:
          'Funcionan con modelo freemium: suele haber acceso gratuito con límites de uso y opciones de pago para uso intensivo o funciones avanzadas, además del consumo de API facturado por uso. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirven los agentes de xAI?',
        answer:
          'Sirven para delegar tareas que requieren varios pasos: recopilar información de distintas fuentes, sintetizarla, analizar datos o automatizar procesos repetitivos. También pueden integrarse en aplicaciones propias mediante API para añadir capacidades agénticas.',
      },
    ],
  },
  Zapier: {
    name: 'Zapier',
    tagline: 'Automatización de flujos entre miles de aplicaciones, ahora con IA integrada',
    intro:
      'Zapier es una plataforma de automatización que conecta aplicaciones entre sí para que las tareas se ejecuten solas. Mediante flujos llamados zaps, un evento en una herramienta desencadena acciones en otras, sin necesidad de programar. En los últimos años ha incorporado funciones de IA para generar automatizaciones, crear agentes y añadir pasos inteligentes dentro de los flujos. Cuenta con miles de integraciones disponibles.',
    useCases: [
      'Conectar formularios web con el CRM automáticamente',
      'Enviar notificaciones a Slack cuando ocurre un evento',
      'Sincronizar datos entre hojas de cálculo y otras herramientas',
      'Automatizar el procesamiento de correos y adjuntos',
      'Crear agentes que ejecutan acciones en varias aplicaciones',
    ],
    features: [
      'Miles de integraciones con aplicaciones de terceros',
      'Editor visual de flujos sin necesidad de programar',
      'Pasos con IA para clasificar, extraer o redactar contenido',
      'Agentes capaces de actuar sobre las apps conectadas',
      'Lógica condicional, filtros y rutas dentro del flujo',
    ],
    pros: [
      'Catálogo de integraciones difícil de igualar',
      'Curva de aprendizaje suave para perfiles no técnicos',
      'Ahorra mucho tiempo en tareas repetitivas entre herramientas',
    ],
    cons: [
      'El precio escala con el número de tareas ejecutadas',
      'Menos flexible que soluciones de automatización con código',
      'El plan gratuito se queda corto para uso profesional',
    ],
    pricingNote:
      'Zapier funciona con modelo freemium: hay un plan gratuito con un número limitado de tareas mensuales y flujos de un solo paso. Los planes de pago se escalonan según el volumen de tareas y las funciones avanzadas, empezando en cifras modestas y creciendo con el uso.',
    faqs: [
      {
        question: '¿Qué es Zapier?',
        answer:
          'Zapier es una plataforma de automatización que conecta aplicaciones entre sí. Permite crear flujos, llamados zaps, en los que un evento en una herramienta desencadena acciones en otras, sin escribir código. Incluye funciones de IA para crear flujos y agentes.',
      },
      {
        question: '¿Zapier es gratis?',
        answer:
          'Tiene un plan gratuito con un número limitado de tareas al mes y flujos sencillos, suficiente para probarlo o para automatizaciones puntuales. Para uso profesional hacen falta planes de pago que escalan según el volumen de tareas. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Zapier?',
        answer:
          'Sirve para eliminar tareas manuales repetitivas entre aplicaciones: pasar los leads de un formulario al CRM, avisar en Slack cuando llega un pedido, sincronizar hojas de cálculo o procesar correos. Todo ello sin necesidad de conocimientos de programación.',
      },
    ],
  },
  n8n: {
    name: 'n8n',
    tagline: 'Automatización de flujos de trabajo open source con nodos de IA integrados',
    intro:
      'n8n es una plataforma de automatización de flujos de trabajo de código abierto desarrollada por la empresa alemana n8n GmbH. Permite conectar aplicaciones, APIs y bases de datos mediante un editor visual de nodos, e incorpora componentes específicos para trabajar con modelos de lenguaje y agentes de IA. Se puede autoalojar en un servidor propio o usar en su versión gestionada en la nube, lo que la hace habitual en equipos técnicos que quieren control sobre sus datos.',
    useCases: [
      'Sincronizar datos entre CRM, hojas de cálculo y bases de datos',
      'Crear agentes de IA que consultan documentos internos',
      'Automatizar respuestas y clasificación de correos entrantes',
      'Generar informes periódicos y enviarlos por Slack o email',
      'Orquestar llamadas a APIs de modelos de lenguaje',
    ],
    features: [
      'Editor visual de flujos basado en nodos',
      'Cientos de integraciones con aplicaciones y servicios',
      'Nodos de IA para agentes, memoria y bases vectoriales',
      'Opción de autoalojamiento con Docker',
      'Ejecución de código JavaScript o Python en los flujos',
    ],
    pros: [
      'Se puede autoalojar, manteniendo los datos en tu infraestructura',
      'Muy flexible: combina nodos visuales con código propio',
      'Comunidad activa y gran catálogo de plantillas de flujos',
    ],
    cons: [
      'La curva de aprendizaje es mayor que en herramientas no-code puras',
      'El autoalojamiento requiere conocimientos de servidores y mantenimiento',
      'Su licencia no es completamente open source para usos comerciales revendidos',
    ],
    pricingNote:
      'n8n se puede autoalojar de forma gratuita bajo su licencia de código abierto, asumiendo solo los costes del servidor. También ofrece una versión en la nube de pago con planes por volumen de ejecuciones.',
    faqs: [
      {
        question: '¿Qué es n8n y para qué sirve?',
        answer:
          'n8n es una herramienta de automatización de flujos de trabajo que conecta aplicaciones y servicios mediante un editor visual de nodos. Sirve para eliminar tareas repetitivas, mover datos entre sistemas y construir agentes de IA que ejecutan acciones automáticamente, sin necesidad de programar todo desde cero.',
      },
      {
        question: '¿n8n es gratis?',
        answer:
          'La versión autoalojada de n8n es gratuita: descargas el software y lo ejecutas en tu propio servidor, pagando solo la infraestructura. Existe además una versión en la nube de pago con planes según el volumen de ejecuciones. Consulta su web para conocer los precios vigentes.',
      },
      {
        question: '¿Cuál es la diferencia entre n8n y Zapier?',
        answer:
          'La diferencia principal es que n8n permite autoalojarse y ejecutar código propio dentro de los flujos, lo que da más control y flexibilidad. Zapier es más sencillo de usar y solo funciona en la nube. n8n suele encajar mejor en equipos con perfil técnico.',
      },
    ],
  },
  Make: {
    name: 'Make',
    tagline: 'Plataforma visual no-code para automatizar procesos entre miles de aplicaciones',
    intro:
      'Make, antes conocida como Integromat, es una plataforma de automatización no-code que permite conectar aplicaciones y crear escenarios visuales donde los datos fluyen de un servicio a otro. Su editor muestra los flujos como diagramas, lo que facilita entender la lógica de cada automatización. Incluye integraciones con proveedores de IA para incorporar generación de texto, análisis o clasificación dentro de los procesos.',
    useCases: [
      'Conectar formularios web con el CRM y el email marketing',
      'Automatizar la publicación de contenido en redes sociales',
      'Procesar facturas y volcarlas en hojas de cálculo',
      'Enriquecer leads con datos de fuentes externas',
      'Crear flujos que llaman a modelos de IA para resumir textos',
    ],
    features: [
      'Editor visual de escenarios con lógica ramificada',
      'Amplio catálogo de integraciones con aplicaciones populares',
      'Módulos HTTP para conectar con cualquier API',
      'Gestión de errores y reintentos dentro del escenario',
      'Programación de ejecuciones por horario o eventos',
    ],
    pros: [
      'Interfaz visual muy clara para diseñar flujos complejos',
      'Permite transformaciones de datos avanzadas sin programar',
      'Buen equilibrio entre potencia y facilidad de uso',
    ],
    cons: [
      'El consumo de operaciones puede encarecerse en flujos con mucho volumen',
      'Depurar escenarios grandes puede resultar confuso',
      'No permite autoalojamiento',
    ],
    pricingNote:
      'Make funciona con un modelo freemium: hay un plan gratuito con un número limitado de operaciones mensuales, suficiente para probar y automatizar tareas sencillas. Los planes de pago escalan según las operaciones consumidas y la frecuencia de ejecución.',
    faqs: [
      {
        question: '¿Qué es Make y para qué sirve?',
        answer:
          'Make es una plataforma de automatización que conecta aplicaciones entre sí mediante escenarios visuales. Sirve para automatizar tareas repetitivas como mover datos entre herramientas, enviar notificaciones o procesar formularios, sin necesidad de escribir código, integrando también servicios de inteligencia artificial.',
      },
      {
        question: '¿Make es gratis?',
        answer:
          'Make ofrece un plan gratuito con un número limitado de operaciones al mes, útil para automatizaciones pequeñas o para probar la herramienta. A partir de ahí, los planes de pago aumentan las operaciones disponibles y la frecuencia de ejecución. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Make funciona en español?',
        answer:
          'Make ofrece su interfaz y documentación en varios idiomas, incluido el español, aunque parte del material técnico y de la comunidad está en inglés. Los escenarios pueden procesar contenido en español sin problema, ya que la herramienta trabaja con los datos que le proporciones.',
      },
    ],
  },
  'Power Automate': {
    name: 'Power Automate',
    tagline: 'Automatización de procesos empresariales integrada en el ecosistema Microsoft',
    intro:
      'Power Automate es la herramienta de automatización de Microsoft, parte de la familia Power Platform. Permite crear flujos que conectan servicios de Microsoft 365, Dynamics, Azure y aplicaciones de terceros, además de automatizar tareas de escritorio mediante RPA. Incorpora capacidades de IA para procesar documentos, extraer datos de formularios y añadir asistencia conversacional a los flujos.',
    useCases: [
      'Automatizar aprobaciones de documentos y gastos en la empresa',
      'Extraer datos de facturas escaneadas y volcarlos a Excel',
      'Sincronizar SharePoint, Outlook y Teams automáticamente',
      'Automatizar tareas repetitivas de escritorio con RPA',
      'Enviar alertas cuando se cumplen condiciones en un sistema',
    ],
    features: [
      'Integración nativa con Microsoft 365 y Azure',
      'Automatización de escritorio (RPA) con Power Automate Desktop',
      'Modelos de IA para procesar documentos y formularios',
      'Plantillas predefinidas para procesos habituales',
      'Controles de gobernanza y seguridad para entornos corporativos',
    ],
    pros: [
      'Encaja de forma natural en empresas que ya usan Microsoft 365',
      'Combina automatización en la nube y RPA de escritorio',
      'Buenas opciones de administración y cumplimiento para grandes organizaciones',
    ],
    cons: [
      'El modelo de licencias es complejo de entender',
      'Menos ágil para integraciones fuera del ecosistema Microsoft',
      'Algunas capacidades avanzadas requieren licencias adicionales',
    ],
    pricingNote:
      'Power Automate sigue un modelo freemium dentro del ecosistema Microsoft: ciertas licencias de Microsoft 365 incluyen funcionalidades básicas de automatización. Las capacidades avanzadas, como RPA o el procesamiento de documentos con IA, requieren planes de pago por usuario o por proceso.',
    faqs: [
      {
        question: '¿Qué es Power Automate?',
        answer:
          'Power Automate es la plataforma de automatización de Microsoft. Permite crear flujos que conectan aplicaciones y servicios para ejecutar tareas de forma automática, como aprobaciones, notificaciones o traspaso de datos, e incluye automatización de escritorio mediante robots de software (RPA).',
      },
      {
        question: '¿Power Automate está incluido en Microsoft 365?',
        answer:
          'Algunas licencias de Microsoft 365 incluyen funcionalidades básicas de Power Automate, suficientes para flujos sencillos entre aplicaciones de Microsoft. Las capacidades avanzadas, como RPA asistida o conectores premium, requieren licencias adicionales. Consulta su web para conocer qué incluye cada plan.',
      },
      {
        question: '¿Para qué sirve Power Automate en una empresa?',
        answer:
          'Sirve para eliminar tareas manuales repetitivas: aprobar solicitudes, mover información entre sistemas, generar informes o extraer datos de documentos. Al integrarse con Microsoft 365, Dynamics y Azure, resulta especialmente útil en organizaciones que ya trabajan con herramientas de Microsoft.',
      },
    ],
  },
  IFTTT: {
    name: 'IFTTT',
    tagline: 'Automatizaciones sencillas entre apps y dispositivos conectados para uso cotidiano',
    intro:
      'IFTTT (siglas de "If This Then That") es un servicio de automatización que permite crear reglas simples del tipo "si ocurre esto, haz aquello". Conecta aplicaciones web, redes sociales, dispositivos domóticos y asistentes de voz mediante recetas llamadas applets. Está orientado sobre todo a usuarios particulares y a automatizaciones ligeras, más que a procesos empresariales complejos.',
    useCases: [
      'Guardar automáticamente fotos de una app en la nube',
      'Encender luces inteligentes al llegar a casa',
      'Publicar en varias redes sociales de una vez',
      'Recibir alertas meteorológicas o de calendario en el móvil',
      'Registrar actividad de dispositivos conectados en una hoja de cálculo',
    ],
    features: [
      'Applets preconfigurados listos para activar',
      'Amplia compatibilidad con dispositivos de domótica',
      'Integraciones con redes sociales y servicios de nube',
      'Creación de reglas sin necesidad de programar',
      'Aplicaciones móviles para iOS y Android',
    ],
    pros: [
      'Muy fácil de usar, apenas requiere configuración',
      'Excelente cobertura de dispositivos del hogar conectado',
      'Miles de applets ya creados por la comunidad',
    ],
    cons: [
      'Poca capacidad para flujos complejos con múltiples pasos o condiciones',
      'El plan gratuito limita el número de applets activos',
      'Menos adecuado para automatizaciones empresariales serias',
    ],
    pricingNote:
      'IFTTT tiene un modelo freemium: el plan gratuito permite mantener activo un número reducido de applets. Los planes de pago amplían ese límite, dan acceso a applets con varias acciones y a ejecuciones más rápidas.',
    faqs: [
      {
        question: '¿Qué es IFTTT y cómo funciona?',
        answer:
          'IFTTT es un servicio que conecta aplicaciones y dispositivos mediante reglas sencillas: cuando ocurre un evento concreto (el disparador), se ejecuta una acción. Estas reglas se llaman applets y se activan en pocos clics, sin necesidad de conocimientos técnicos ni programación.',
      },
      {
        question: '¿IFTTT es gratis?',
        answer:
          'IFTTT ofrece un plan gratuito que permite tener activos unos pocos applets a la vez. Para crear más automatizaciones, usar varias acciones por applet o reducir los tiempos de ejecución, hay que pasar a un plan de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿IFTTT sirve para automatizar la domótica del hogar?',
        answer:
          'Sí, es uno de sus usos más habituales. IFTTT es compatible con numerosos dispositivos inteligentes (luces, enchufes, termostatos, cámaras, asistentes de voz) y permite crear rutinas que los coordinan entre sí o los conectan con servicios en la nube.',
      },
    ],
  },
  Manus: {
    name: 'Manus',
    tagline: 'Agente de IA autónomo que ejecuta tareas complejas de principio a fin',
    intro:
      'Manus es un agente de inteligencia artificial de propósito general capaz de ejecutar tareas de varios pasos de forma autónoma. A diferencia de un chatbot convencional, no se limita a responder: planifica, navega por la web, escribe código, genera documentos y entrega un resultado terminado. Está pensado para delegar encargos completos, desde investigaciones hasta la creación de informes o pequeñas aplicaciones.',
    useCases: [
      'Investigar un mercado y entregar un informe estructurado',
      'Analizar hojas de cálculo y generar visualizaciones de datos',
      'Crear una web o prototipo sencillo a partir de una descripción',
      'Comparar proveedores o productos y resumir conclusiones',
      'Automatizar búsquedas y recopilación de información repetitivas',
    ],
    features: [
      'Ejecución autónoma de tareas de varios pasos',
      'Navegación web y uso de herramientas externas',
      'Generación de documentos, hojas de cálculo y código',
      'Trabajo en segundo plano mientras cierras la sesión',
      'Historial del proceso seguido para revisar cada paso',
    ],
    pros: [
      'Entrega resultados terminados, no solo respuestas de texto',
      'Muy útil para tareas de investigación y recopilación de información',
      'Permite delegar encargos largos sin supervisión constante',
    ],
    cons: [
      'Puede cometer errores en tareas largas y conviene revisar el resultado',
      'El consumo de créditos se agota rápido en tareas complejas',
      'Menos control fino que si ejecutas los pasos manualmente',
    ],
    pricingNote:
      'Manus opera con un modelo freemium basado en créditos: suele ofrecer una cantidad gratuita de créditos para probar el servicio, que se consumen según la complejidad de cada tarea. Los planes de pago amplían los créditos disponibles y la ejecución simultánea.',
    faqs: [
      {
        question: '¿Qué es Manus?',
        answer:
          'Manus es un agente de inteligencia artificial autónomo capaz de realizar tareas completas por sí mismo. Planifica los pasos necesarios, navega por internet, usa herramientas, escribe código y entrega el trabajo terminado, en lugar de limitarse a conversar como un chatbot tradicional.',
      },
      {
        question: '¿Manus es gratis?',
        answer:
          'Manus suele ofrecer créditos gratuitos para probar la herramienta, que se consumen según la complejidad de las tareas encargadas. Para un uso continuado hay que contratar un plan de pago que amplía los créditos disponibles. Consulta su web para precios actualizados.',
      },
      {
        question: '¿En qué se diferencia Manus de un chatbot como ChatGPT?',
        answer:
          'La diferencia está en la autonomía. Un chatbot responde a lo que le preguntas dentro de la conversación; Manus descompone el encargo en pasos, los ejecuta usando herramientas y navegación web, y devuelve un entregable final, como un informe, una web o un análisis.',
      },
    ],
  },
  'Trigger.dev': {
    name: 'Trigger.dev',
    tagline: 'Framework open source para crear tareas en segundo plano y flujos con IA',
    intro:
      'Trigger.dev es una plataforma de código abierto orientada a desarrolladores para escribir y ejecutar tareas en segundo plano con TypeScript. Permite definir trabajos de larga duración, procesos programados y flujos con reintentos automáticos sin gestionar colas ni infraestructura propia. Se usa con frecuencia para orquestar llamadas a modelos de IA, procesar ficheros o encadenar pasos que tardan minutos en completarse.',
    useCases: [
      'Ejecutar tareas largas de IA sin que caduque la petición web',
      'Procesar vídeos, imágenes o documentos en segundo plano',
      'Programar trabajos recurrentes como informes o sincronizaciones',
      'Encadenar llamadas a varias APIs con reintentos automáticos',
      'Enviar emails o notificaciones diferidas desde una aplicación',
    ],
    features: [
      'Definición de tareas mediante código TypeScript',
      'Reintentos y control de errores integrados',
      'Ejecuciones programadas y disparadas por eventos',
      'Panel para monitorizar el estado de cada ejecución',
      'Opción de autoalojamiento al ser código abierto',
    ],
    pros: [
      'Enfoque en código, ideal para equipos de desarrollo',
      'Evita montar y mantener colas de trabajos propias',
      'Al ser open source, permite autoalojarlo sin coste de licencia',
    ],
    cons: [
      'Requiere saber programar, no es una herramienta no-code',
      'Centrado en el ecosistema JavaScript y TypeScript',
      'Menos plantillas e integraciones listas que las plataformas visuales',
    ],
    pricingNote:
      'Trigger.dev es open source y puede autoalojarse sin coste de licencia, asumiendo la infraestructura. Su versión gestionada en la nube suele incluir un tramo gratuito y planes de pago según el uso y la concurrencia.',
    faqs: [
      {
        question: '¿Qué es Trigger.dev?',
        answer:
          'Trigger.dev es una plataforma open source que permite a los desarrolladores escribir tareas en segundo plano en TypeScript y ejecutarlas de forma fiable. Gestiona reintentos, ejecuciones programadas y trabajos de larga duración sin necesidad de montar colas ni infraestructura propia.',
      },
      {
        question: '¿Trigger.dev es gratis?',
        answer:
          'Al ser código abierto, Trigger.dev puede autoalojarse sin pagar licencia, asumiendo solo el coste del servidor. Su servicio gestionado en la nube ofrece habitualmente un tramo gratuito y planes de pago según el volumen de ejecuciones. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Trigger.dev en proyectos con IA?',
        answer:
          'Sirve para ejecutar procesos con modelos de IA que tardan demasiado para una petición web normal: generar contenido largo, procesar documentos, encadenar varias llamadas a modelos o construir agentes. Se encarga de los reintentos y del seguimiento de cada ejecución.',
      },
    ],
  },
  'Notion AI': {
    name: 'Notion AI',
    tagline: 'Asistente de IA integrado en Notion para escribir, resumir y buscar',
    intro:
      'Notion AI es el conjunto de funciones de inteligencia artificial integradas en Notion, el espacio de trabajo todo en uno desarrollado por Notion Labs. Funciona dentro de las páginas y bases de datos del propio Notion, ayudando a redactar borradores, resumir documentos largos, traducir textos y buscar información en todo el espacio de trabajo. Su ventaja es que trabaja sobre el contenido que el equipo ya tiene almacenado.',
    useCases: [
      'Resumir actas de reuniones y extraer los puntos clave',
      'Redactar borradores de documentos y correos internos',
      'Buscar información dispersa en el espacio de trabajo',
      'Traducir contenido entre idiomas dentro de una página',
      'Rellenar automáticamente campos en bases de datos',
    ],
    features: [
      'Asistente de escritura integrado en el editor',
      'Búsqueda inteligente en todo el espacio de trabajo',
      'Resúmenes automáticos de documentos y notas',
      'Propiedades de base de datos generadas con IA',
      'Traducción y corrección de textos',
    ],
    pros: [
      'No hay que cambiar de herramienta: vive dentro de Notion',
      'Aprovecha el contexto de la documentación existente del equipo',
      'Interfaz sencilla, sin curva de aprendizaje añadida',
    ],
    cons: [
      'Solo tiene sentido si ya usas Notion como espacio de trabajo',
      'Es un complemento de pago sobre la suscripción existente',
      'Menos potente que asistentes de IA especializados en tareas concretas',
    ],
    pricingNote:
      'Notion tiene un plan gratuito para uso personal, pero las funciones de IA suelen comercializarse como complemento de pago o incluidas en determinados planes de suscripción. El coste se calcula por usuario y mes.',
    faqs: [
      {
        question: '¿Qué es Notion AI y para qué sirve?',
        answer:
          'Notion AI es el asistente de inteligencia artificial integrado en Notion. Sirve para redactar y mejorar textos, resumir documentos, traducir contenido y buscar información dentro del espacio de trabajo, sin salir de las páginas y bases de datos donde ya trabaja el equipo.',
      },
      {
        question: '¿Notion AI es gratis?',
        answer:
          'Notion ofrece un plan gratuito para uso personal, pero las funciones de IA no están disponibles de forma ilimitada en él. Normalmente se contratan como complemento de pago por usuario o vienen incluidas en ciertos planes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Notion AI funciona en español?',
        answer:
          'Sí, Notion AI comprende y genera texto en español, además de traducir entre varios idiomas. La calidad de la redacción en español es buena, aunque conviene revisar el resultado para ajustarlo al tono y a la terminología concretos de cada organización.',
      },
    ],
  },
  'Microsoft 365 Copilot': {
    name: 'Microsoft 365 Copilot',
    tagline: 'Asistente de IA de Microsoft integrado en Word, Excel, Outlook y Teams',
    intro:
      'Microsoft 365 Copilot es el asistente de inteligencia artificial que Microsoft integra en sus aplicaciones de productividad. Funciona dentro de Word, Excel, PowerPoint, Outlook y Teams, y trabaja con los datos y documentos de la propia organización a través de Microsoft Graph. Su objetivo es reducir el tiempo dedicado a tareas de ofimática: redactar, resumir, analizar datos y preparar presentaciones.',
    useCases: [
      'Resumir hilos de correo largos y reuniones de Teams',
      'Redactar y reescribir documentos en Word',
      'Analizar datos y crear fórmulas en Excel',
      'Generar presentaciones de PowerPoint a partir de un documento',
      'Buscar información en los archivos de la organización',
    ],
    features: [
      'Integración nativa en las aplicaciones de Microsoft 365',
      'Acceso al contexto de documentos, correos y calendario',
      'Resúmenes de reuniones con puntos de acción',
      'Asistencia para fórmulas y análisis en Excel',
      'Controles de seguridad y cumplimiento empresariales',
    ],
    pros: [
      'Trabaja sobre los datos reales de la empresa, no solo conocimiento general',
      'Ahorra tiempo en tareas de ofimática cotidianas',
      'Respeta los permisos y políticas de seguridad ya configurados',
    ],
    cons: [
      'Es caro y se factura por usuario y mes',
      'Requiere licencias de Microsoft 365 compatibles',
      'La calidad depende de lo bien organizados que estén los datos internos',
    ],
    pricingNote:
      'Microsoft 365 Copilot es un producto de pago que se factura como complemento por usuario y mes sobre una licencia de Microsoft 365 existente. Su precio se sitúa en la franja alta de los asistentes de IA empresariales.',
    faqs: [
      {
        question: '¿Qué es Microsoft 365 Copilot?',
        answer:
          'Es el asistente de inteligencia artificial de Microsoft integrado en Word, Excel, PowerPoint, Outlook y Teams. Utiliza los documentos, correos y reuniones de la propia organización para ayudar a redactar, resumir, analizar datos y preparar presentaciones sin salir de las aplicaciones habituales.',
      },
      {
        question: '¿Microsoft 365 Copilot es gratis?',
        answer:
          'No. Copilot para Microsoft 365 es un producto de pago que se contrata como complemento por usuario y mes sobre una licencia de Microsoft 365. Existen versiones gratuitas más limitadas del asistente Copilot, pero no incluyen la integración con los datos de la empresa.',
      },
      {
        question: '¿Microsoft 365 Copilot funciona en español?',
        answer:
          'Sí, Copilot admite el español entre sus idiomas y puede redactar, resumir y responder en castellano. Algunas funciones y mejoras llegan antes en inglés, por lo que puede haber diferencias puntuales de calidad o disponibilidad según la aplicación.',
      },
    ],
  },
  'Google Workspace Duet': {
    name: 'Google Workspace Duet',
    tagline: 'Asistente de IA de Google integrado en Gmail, Docs, Sheets y Meet',
    intro:
      'Google Workspace Duet fue el nombre con el que Google presentó sus funciones de inteligencia artificial generativa dentro de Workspace, integradas en Gmail, Documentos, Hojas de cálculo, Presentaciones y Meet. Ayuda a redactar correos y documentos, generar imágenes para presentaciones, organizar datos en hojas de cálculo y tomar notas en reuniones. Estas capacidades se han ido reorganizando bajo la marca Gemini para Workspace.',
    useCases: [
      'Redactar y responder correos en Gmail con ayuda de IA',
      'Generar borradores de documentos a partir de un guion',
      'Crear tablas y organizar datos en Hojas de cálculo',
      'Generar imágenes originales para presentaciones',
      'Tomar notas automáticas durante reuniones en Meet',
    ],
    features: [
      'Asistencia de escritura en Gmail y Documentos',
      'Generación de imágenes dentro de Presentaciones',
      'Ayuda para clasificar y estructurar datos en Hojas de cálculo',
      'Resúmenes y notas automáticas de reuniones',
      'Integración con los permisos y la seguridad de Workspace',
    ],
    pros: [
      'Se usa dentro de las aplicaciones de Google que ya conoce el equipo',
      'Aprovecha el contexto de los archivos y correos de la organización',
      'Cubre varios tipos de tarea: texto, datos, imágenes y reuniones',
    ],
    cons: [
      'Requiere una licencia de pago adicional sobre Workspace',
      'La marca y el empaquetado han cambiado, lo que genera confusión',
      'Algunas funciones llegan antes en inglés que en español',
    ],
    pricingNote:
      'Las funciones de IA de Google Workspace son de pago y se contratan como complemento por usuario y mes sobre una licencia de Workspace, aunque Google ha ido incluyéndolas en determinados planes.',
    faqs: [
      {
        question: '¿Qué es Google Workspace Duet?',
        answer:
          'Duet fue la denominación de las funciones de IA generativa de Google integradas en Workspace: ayuda de escritura en Gmail y Documentos, generación de imágenes en Presentaciones, organización de datos en Hojas de cálculo y notas automáticas en Meet. Estas capacidades se han reagrupado bajo la marca Gemini.',
      },
      {
        question: '¿Google Workspace Duet es gratis?',
        answer:
          'No. Se trata de funciones de pago que se contratan como complemento por usuario sobre una licencia de Google Workspace, si bien Google ha ido incorporándolas a determinados planes de suscripción. Consulta su web para conocer los precios y el empaquetado actuales.',
      },
      {
        question: '¿Para qué sirve la IA de Google Workspace?',
        answer:
          'Sirve para acelerar el trabajo de oficina: redactar correos y documentos, resumir hilos largos, crear imágenes para presentaciones, estructurar datos en hojas de cálculo y generar notas automáticas de reuniones, todo dentro de las aplicaciones de Google que el equipo ya utiliza.',
      },
    ],
  },
  Gamma: {
    name: 'Gamma',
    tagline: 'Generador de presentaciones, documentos y webs con IA en minutos',
    intro:
      'Gamma es una herramienta que genera presentaciones, documentos y páginas web a partir de una indicación de texto o de un archivo existente. En lugar de trabajar con diapositivas rígidas, usa un formato de tarjetas que se adapta al contenido y al dispositivo. Está pensada para quienes necesitan preparar material visual rápido sin dedicar horas al diseño ni dominar herramientas complejas.',
    useCases: [
      'Crear una presentación de empresa a partir de un guion',
      'Convertir un documento largo en diapositivas visuales',
      'Preparar propuestas comerciales con buen acabado gráfico',
      'Montar una página web sencilla para un proyecto',
      'Elaborar material formativo o de onboarding',
    ],
    features: [
      'Generación de presentaciones completas desde un prompt',
      'Importación de documentos y archivos existentes',
      'Plantillas y temas visuales aplicables con un clic',
      'Contenido responsive que se adapta a móvil y escritorio',
      'Analíticas de visualización de las presentaciones compartidas',
    ],
    pros: [
      'Ahorra mucho tiempo frente a diseñar diapositivas manualmente',
      'El resultado tiene un acabado visual cuidado sin esfuerzo',
      'Permite compartir por enlace y ver quién lo consulta',
    ],
    cons: [
      'Menos control sobre el diseño fino que en PowerPoint o Keynote',
      'El sistema de créditos del plan gratuito se agota pronto',
      'La exportación a otros formatos puede perder parte del diseño',
    ],
    pricingNote:
      'Gamma funciona con un modelo freemium basado en créditos: el plan gratuito incluye una cantidad inicial de créditos para generar contenido, con marca de agua en algunos casos. Los planes de pago amplían los créditos y desbloquean opciones avanzadas de personalización.',
    faqs: [
      {
        question: '¿Qué es Gamma y para qué sirve?',
        answer:
          'Gamma es una herramienta de IA que crea presentaciones, documentos y páginas web a partir de un texto o de un archivo. Sirve para preparar material visual atractivo en poco tiempo, sin tener conocimientos de diseño ni dedicar horas a maquetar diapositivas.',
      },
      {
        question: '¿Gamma es gratis?',
        answer:
          'Gamma ofrece un plan gratuito con una cantidad limitada de créditos para generar presentaciones y documentos. Cuando se agotan, hay que esperar o pasar a un plan de pago, que amplía los créditos y elimina limitaciones como la marca de agua. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Gamma funciona en español?',
        answer:
          'Sí, Gamma genera presentaciones y documentos en español a partir de indicaciones escritas en castellano. La calidad del texto generado es correcta, aunque conviene revisar el contenido y ajustar la terminología antes de presentarlo ante un cliente o equipo.',
      },
    ],
  },
  'Magic Write': {
    name: 'Magic Write',
    tagline: 'Asistente de escritura con IA integrado en el editor de Canva',
    intro:
      'Magic Write es el asistente de redacción con inteligencia artificial de Canva. Funciona dentro del propio editor y genera textos para presentaciones, publicaciones en redes sociales, documentos o carteles a partir de una breve indicación. Está orientado a usuarios que ya diseñan en Canva y necesitan resolver la parte textual sin salir de la herramienta ni recurrir a un servicio externo.',
    useCases: [
      'Generar copy para publicaciones de redes sociales',
      'Redactar los textos de una presentación desde cero',
      'Crear titulares y llamadas a la acción para carteles',
      'Escribir descripciones de producto breves',
      'Ampliar o reescribir un texto existente en el diseño',
    ],
    features: [
      'Generación de texto directamente en el lienzo de Canva',
      'Ajuste de tono y estilo del contenido',
      'Reescritura, resumen y ampliación de textos',
      'Compatible con documentos, presentaciones y diseños',
      'Soporte para varios idiomas, incluido el español',
    ],
    pros: [
      'Muy cómodo si ya trabajas con Canva a diario',
      'Elimina el salto entre herramienta de diseño y generador de texto',
      'Fácil de usar, sin necesidad de aprender a escribir prompts complejos',
    ],
    cons: [
      'El plan gratuito limita bastante el número de generaciones',
      'Menos potente que un asistente de escritura especializado',
      'Los textos suelen requerir edición para sonar naturales',
    ],
    pricingNote:
      'Magic Write forma parte de las funciones de IA de Canva y sigue un modelo freemium: la cuenta gratuita incluye un número limitado de usos, mientras que las suscripciones de pago de Canva amplían considerablemente ese límite.',
    faqs: [
      {
        question: '¿Qué es Magic Write de Canva?',
        answer:
          'Magic Write es el asistente de escritura con inteligencia artificial integrado en Canva. Permite generar textos para diseños, presentaciones y publicaciones a partir de una indicación breve, así como reescribir, resumir o ampliar contenido existente sin salir del editor.',
      },
      {
        question: '¿Magic Write es gratis?',
        answer:
          'Canva incluye Magic Write en su cuenta gratuita con un número limitado de generaciones. Las suscripciones de pago de Canva amplían ese límite y dan acceso al resto de funciones de IA de la plataforma. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Magic Write funciona en español?',
        answer:
          'Sí, Magic Write puede generar y reescribir textos en español. Los resultados son útiles como punto de partida, aunque conviene revisarlos y adaptarlos al tono de la marca, ya que la redacción automática tiende a sonar algo genérica.',
      },
    ],
  },
  'Canva Magic Studio': {
    name: 'Canva Magic Studio',
    tagline: 'Conjunto de herramientas de IA para diseñar, editar y crear contenido',
    intro:
      'Canva Magic Studio es el paquete de funciones de inteligencia artificial de Canva, la plataforma australiana de diseño gráfico en línea. Reúne herramientas para generar imágenes, ampliar o borrar elementos de una foto, crear vídeos, redactar textos y diseñar presentaciones automáticamente. Todo se maneja desde el mismo editor, lo que lo convierte en una opción práctica para pymes, docentes y equipos de marketing sin diseñador.',
    useCases: [
      'Generar imágenes originales para campañas de marketing',
      'Eliminar objetos o fondos de una fotografía',
      'Crear presentaciones completas a partir de una descripción',
      'Redimensionar un diseño para varios formatos automáticamente',
      'Editar vídeos cortos para redes sociales',
    ],
    features: [
      'Generación de imágenes a partir de texto',
      'Borrado y sustitución de elementos en fotos',
      'Redimensionado automático de diseños entre formatos',
      'Creación de presentaciones y documentos asistida por IA',
      'Herramientas de edición de vídeo con IA',
    ],
    pros: [
      'Reúne muchas funciones de IA en una sola plataforma conocida',
      'Muy accesible para usuarios sin experiencia en diseño',
      'Gran biblioteca de plantillas y recursos gráficos',
    ],
    cons: [
      'Las funciones de IA tienen límites de uso en el plan gratuito',
      'Calidad de generación de imágenes por debajo de herramientas especializadas',
      'Los diseños pueden parecer genéricos si se abusa de las plantillas',
    ],
    pricingNote:
      'Canva sigue un modelo freemium: la cuenta gratuita da acceso a las funciones de Magic Studio con límites de uso mensuales. Las suscripciones de pago, como Canva Pro o Teams, amplían esos límites y añaden recursos premium.',
    faqs: [
      {
        question: '¿Qué es Canva Magic Studio?',
        answer:
          'Magic Studio es el conjunto de herramientas de inteligencia artificial integradas en Canva. Incluye generación de imágenes, borrado de objetos, redimensionado automático de diseños, creación de presentaciones y edición de vídeo, todo dentro del mismo editor de la plataforma.',
      },
      {
        question: '¿Canva Magic Studio es gratis?',
        answer:
          'Las funciones de Magic Studio están disponibles en la cuenta gratuita de Canva, pero con límites mensuales de uso. Las suscripciones de pago amplían esos límites y desbloquean funciones y recursos adicionales. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Canva Magic Studio?',
        answer:
          'Sirve para acelerar la creación de contenido visual: generar imágenes, retocar fotos, montar presentaciones, adaptar un diseño a varios formatos y redactar textos. Está pensado para equipos de marketing, pymes y docentes que necesitan resultados rápidos sin un diseñador dedicado.',
      },
    ],
  },
  'Power BI': {
    name: 'Power BI',
    tagline: 'Plataforma de business intelligence de Microsoft con capacidades de IA',
    intro:
      'Power BI es la solución de inteligencia de negocio de Microsoft. Permite conectar múltiples fuentes de datos, modelarlos y crear cuadros de mando interactivos que se comparten dentro de la organización. Incorpora funciones de IA como preguntas en lenguaje natural, detección de anomalías y análisis de factores clave, y se integra con Excel, Azure y el resto del ecosistema Microsoft.',
    useCases: [
      'Construir cuadros de mando de ventas y finanzas',
      'Consultar datos haciendo preguntas en lenguaje natural',
      'Detectar anomalías y tendencias en series temporales',
      'Unificar datos de varias fuentes en un mismo informe',
      'Compartir informes interactivos con toda la organización',
    ],
    features: [
      'Conectores a cientos de fuentes de datos',
      'Preguntas y respuestas en lenguaje natural sobre los datos',
      'Modelado de datos con DAX y Power Query',
      'Publicación y distribución de informes en la nube',
      'Integración con Excel, Teams y Azure',
    ],
    pros: [
      'Relación potencia-precio muy competitiva frente a otras suites de BI',
      'Integración excelente con Excel y el resto de Microsoft 365',
      'Gran comunidad y abundante material de aprendizaje',
    ],
    cons: [
      'El lenguaje DAX tiene una curva de aprendizaje pronunciada',
      'Compartir informes requiere licencias de pago para los destinatarios',
      'La versión de escritorio solo está disponible para Windows',
    ],
    pricingNote:
      'Power BI tiene un modelo freemium: Power BI Desktop se puede descargar y usar gratis para crear informes. Compartirlos y colaborar requiere licencias de pago por usuario, con planes superiores para grandes volúmenes.',
    faqs: [
      {
        question: '¿Qué es Power BI y para qué sirve?',
        answer:
          'Power BI es la herramienta de business intelligence de Microsoft. Sirve para conectar y transformar datos de distintas fuentes y convertirlos en cuadros de mando e informes interactivos que ayudan a tomar decisiones, con funciones de IA como consultas en lenguaje natural.',
      },
      {
        question: '¿Power BI es gratis?',
        answer:
          'Power BI Desktop, la aplicación para crear informes, es gratuita. Sin embargo, publicar y compartir esos informes con otros usuarios dentro de la organización requiere licencias de pago. Consulta su web para conocer los planes y precios vigentes.',
      },
      {
        question: '¿Es difícil aprender Power BI?',
        answer:
          'Crear informes básicos es relativamente sencillo si se tiene experiencia con Excel. La dificultad aparece al modelar datos y usar el lenguaje DAX para cálculos avanzados, que requiere práctica. Existe abundante formación gratuita y una comunidad muy activa.',
      },
    ],
  },
  Tableau: {
    name: 'Tableau',
    tagline: 'Plataforma líder de visualización de datos con analítica aumentada por IA',
    intro:
      'Tableau es una plataforma de visualización y análisis de datos, propiedad de Salesforce, muy extendida en el ámbito corporativo. Destaca por la calidad de sus visualizaciones y por su enfoque de exploración interactiva, que permite a los analistas profundizar en los datos sin escribir código. Sus funciones de IA añaden explicaciones automáticas, predicciones y consultas en lenguaje natural sobre los conjuntos de datos.',
    useCases: [
      'Explorar grandes volúmenes de datos de forma visual',
      'Crear cuadros de mando corporativos para dirección',
      'Obtener explicaciones automáticas de valores atípicos',
      'Realizar previsiones sobre series de datos históricos',
      'Compartir análisis interactivos entre departamentos',
    ],
    features: [
      'Visualizaciones interactivas de alta calidad',
      'Conexión a numerosas bases de datos y fuentes',
      'Analítica aumentada con explicaciones y predicciones',
      'Consultas en lenguaje natural sobre los datos',
      'Integración con el ecosistema de Salesforce',
    ],
    pros: [
      'Capacidades de visualización y exploración muy potentes',
      'Estándar consolidado en grandes organizaciones',
      'Comunidad amplia con muchos recursos y formación',
    ],
    cons: [
      'Precio elevado, especialmente para equipos grandes',
      'Curva de aprendizaje importante para sacarle partido',
      'La preparación de datos es menos fluida que en otras suites',
    ],
    pricingNote:
      'Tableau es una plataforma de pago con licencias por usuario diferenciadas según el rol: creador, explorador o visualizador. El coste por creador se sitúa en la franja alta del mercado de BI.',
    faqs: [
      {
        question: '¿Qué es Tableau?',
        answer:
          'Tableau es una plataforma de visualización y análisis de datos propiedad de Salesforce. Permite conectar fuentes de datos y construir cuadros de mando interactivos con visualizaciones de alta calidad, incorporando funciones de IA para explicar resultados y generar previsiones.',
      },
      {
        question: '¿Tableau es gratis?',
        answer:
          'No. Tableau es una plataforma de pago con licencias por usuario según el rol de cada persona. Existe Tableau Public, una versión gratuita, pero publica los trabajos de forma abierta, por lo que no sirve para datos confidenciales. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Qué es mejor, Tableau o Power BI?',
        answer:
          'Depende del contexto. Tableau suele destacar en la calidad de las visualizaciones y en la exploración libre de datos; Power BI resulta más económico y se integra mejor con Microsoft 365. La elección habitual depende del ecosistema tecnológico y del presupuesto de cada organización.',
      },
    ],
  },
  ThoughtSpot: {
    name: 'ThoughtSpot',
    tagline: 'Analítica de datos mediante búsquedas y preguntas en lenguaje natural',
    intro:
      'ThoughtSpot es una plataforma de analítica que permite consultar datos empresariales escribiendo preguntas en lenguaje natural, como si se usara un buscador. Está pensada para que perfiles no técnicos obtengan respuestas sin depender del departamento de datos. Se conecta directamente a almacenes de datos en la nube y genera visualizaciones e informaciones relevantes de forma automática.',
    useCases: [
      'Consultar métricas de negocio escribiendo preguntas',
      'Permitir que perfiles no técnicos exploren datos sin SQL',
      'Detectar automáticamente cambios relevantes en indicadores',
      'Incrustar analítica en aplicaciones y productos propios',
      'Reducir la dependencia del equipo de datos para informes puntuales',
    ],
    features: [
      'Búsqueda de datos en lenguaje natural',
      'Conexión directa a almacenes de datos en la nube',
      'Generación automática de gráficos e informaciones',
      'Alertas y seguimiento de indicadores clave',
      'Analítica embebida en aplicaciones de terceros',
    ],
    pros: [
      'Facilita el acceso a los datos a usuarios sin perfil técnico',
      'Buen rendimiento sobre almacenes de datos en la nube',
      'Reduce la cola de peticiones al equipo de análisis',
    ],
    cons: [
      'Precio orientado a mediana y gran empresa',
      'Requiere un modelo de datos bien preparado para funcionar bien',
      'Menos flexible que otras herramientas para visualizaciones muy personalizadas',
    ],
    pricingNote:
      'ThoughtSpot es una plataforma de pago dirigida principalmente al segmento empresarial, con precios que dependen del volumen de datos y del número de usuarios. Suele ofrecer periodos de prueba y ediciones diferenciadas.',
    faqs: [
      {
        question: '¿Qué es ThoughtSpot?',
        answer:
          'ThoughtSpot es una plataforma de analítica que permite consultar datos de la empresa escribiendo preguntas en lenguaje natural. Genera automáticamente gráficos y respuestas, de modo que perfiles no técnicos pueden explorar la información sin escribir SQL ni depender del equipo de datos.',
      },
      {
        question: '¿ThoughtSpot es gratis?',
        answer:
          'No, ThoughtSpot es una plataforma de pago orientada al ámbito empresarial. El precio depende del volumen de datos y del número de usuarios, y suele negociarse con el proveedor. Habitualmente ofrece periodos de prueba. Consulta su web para conocer las condiciones actuales.',
      },
      {
        question: '¿Para qué sirve ThoughtSpot en una empresa?',
        answer:
          'Sirve para democratizar el acceso a los datos: cualquier empleado puede preguntar por una métrica y obtener la respuesta en forma de gráfico. Esto agiliza la toma de decisiones y reduce la carga de peticiones que recibe el departamento de análisis.',
      },
    ],
  },
  AlphaSense: {
    name: 'AlphaSense',
    tagline: 'Buscador con IA de inteligencia de mercado para analistas e inversores',
    intro:
      'AlphaSense es una plataforma de inteligencia de mercado que aplica IA a la búsqueda y el análisis de documentos financieros y empresariales. Indexa informes de resultados, presentaciones a inversores, transcripciones de conferencias, estudios de analistas y noticias, y permite localizar información relevante con búsquedas semánticas. Sus usuarios habituales son analistas financieros, equipos de estrategia corporativa y firmas de inversión.',
    useCases: [
      'Buscar menciones concretas en transcripciones de resultados',
      'Seguir la evolución de un sector o competidor',
      'Preparar informes de due diligence antes de una operación',
      'Detectar señales tempranas de cambio en un mercado',
      'Resumir documentos financieros extensos automáticamente',
    ],
    features: [
      'Búsqueda semántica sobre millones de documentos',
      'Acceso a transcripciones, informes y estudios de analistas',
      'Resúmenes generados con IA de documentos largos',
      'Alertas personalizadas sobre empresas y temas',
      'Posibilidad de indexar documentos internos de la organización',
    ],
    pros: [
      'Ahorra muchas horas de lectura a analistas financieros',
      'Fuentes documentales amplias y de calidad contrastada',
      'Las búsquedas semánticas encuentran matices que se escaparían con palabras clave',
    ],
    cons: [
      'Coste elevado, orientado a clientes profesionales',
      'Poco útil fuera del ámbito financiero y de inversión',
      'Parte del contenido premium depende de suscripciones adicionales',
    ],
    pricingNote:
      'AlphaSense es un servicio de pago dirigido a profesionales, con suscripciones anuales cuyo precio se negocia con el proveedor y se sitúa en la franja alta del mercado. No suele existir plan gratuito, aunque sí demostraciones.',
    faqs: [
      {
        question: '¿Qué es AlphaSense?',
        answer:
          'AlphaSense es una plataforma de inteligencia de mercado que utiliza IA para buscar y analizar documentos financieros: informes de resultados, transcripciones de conferencias, estudios de analistas y noticias. Permite localizar información relevante mediante búsquedas semánticas y obtener resúmenes automáticos.',
      },
      {
        question: '¿AlphaSense es gratis?',
        answer:
          'No. AlphaSense es una herramienta profesional de pago con suscripciones anuales cuyo precio se acuerda con el proveedor y resulta elevado. Está orientada a firmas de inversión, analistas y equipos de estrategia. Consulta su web para solicitar información y precios actualizados.',
      },
      {
        question: '¿Para quién es útil AlphaSense?',
        answer:
          'Es especialmente útil para analistas financieros, gestores de fondos, equipos de estrategia corporativa y consultoras que necesitan revisar grandes volúmenes de documentación de mercado. Su valor está en reducir el tiempo de búsqueda y lectura, no en sustituir el criterio del analista.',
      },
    ],
  },
  Kavout: {
    name: 'Kavout',
    tagline: 'Análisis de inversión con IA y puntuación cuantitativa de acciones',
    intro:
      'Kavout es una plataforma que aplica inteligencia artificial y aprendizaje automático al análisis de mercados financieros. Su propuesta principal es la puntuación cuantitativa de valores, que combina múltiples indicadores para ofrecer una valoración sintética de cada acción. Se dirige a inversores, gestores y firmas que quieren incorporar señales cuantitativas a su proceso de decisión.',
    useCases: [
      'Filtrar acciones según puntuaciones cuantitativas',
      'Complementar el análisis fundamental con señales de datos',
      'Construir listas de seguimiento de valores prometedores',
      'Comparar el comportamiento relativo de distintos valores',
      'Apoyar la construcción de carteras cuantitativas',
    ],
    features: [
      'Puntuación de valores basada en modelos de aprendizaje automático',
      'Filtros y cribados sobre universos de acciones',
      'Análisis basado en múltiples fuentes de datos de mercado',
      'Herramientas de seguimiento de carteras',
      'Informes y señales periódicas',
    ],
    pros: [
      'Sintetiza muchos indicadores en una señal fácil de interpretar',
      'Útil como filtro previo para reducir el universo de análisis',
      'Enfoque cuantitativo que complementa el análisis tradicional',
    ],
    cons: [
      'Las señales no garantizan rentabilidad y requieren criterio propio',
      'Cobertura centrada sobre todo en el mercado estadounidense',
      'Poca transparencia sobre el funcionamiento interno de los modelos',
    ],
    pricingNote:
      'Kavout es un servicio de pago con suscripciones dirigidas tanto a inversores particulares avanzados como a clientes institucionales, con distintos niveles según las funciones y los datos incluidos.',
    faqs: [
      {
        question: '¿Qué es Kavout?',
        answer:
          'Kavout es una plataforma de análisis financiero que utiliza inteligencia artificial para puntuar acciones a partir de múltiples indicadores de mercado. Su objetivo es ofrecer señales cuantitativas que ayuden a inversores y gestores a filtrar valores y apoyar sus decisiones de inversión.',
      },
      {
        question: '¿Kavout es gratis?',
        answer:
          'No. Kavout funciona con suscripciones de pago, con distintos niveles según las funciones y los datos incluidos, dirigidos tanto a inversores particulares avanzados como a clientes institucionales. Consulta su web para conocer los planes y precios actualizados.',
      },
      {
        question: '¿Es fiable la IA para invertir en bolsa?',
        answer:
          'Las herramientas de IA pueden procesar muchos más datos que una persona y detectar patrones útiles, pero ninguna señal garantiza rentabilidad ni elimina el riesgo. Conviene usarlas como apoyo al análisis propio y nunca como única base para tomar decisiones de inversión.',
      },
    ],
  },
  ClickUp: {
    name: 'ClickUp',
    tagline: 'Gestión de proyectos todo en uno con asistente de IA integrado',
    intro:
      'ClickUp es una plataforma de gestión de proyectos y productividad que reúne tareas, documentos, objetivos, chat y paneles en un mismo espacio. Su capa de inteligencia artificial, ClickUp Brain, permite resumir tareas y documentos, generar actualizaciones de estado, redactar contenido y responder preguntas sobre el trabajo del equipo apoyándose en la información ya registrada en la plataforma.',
    useCases: [
      'Resumir el avance de un proyecto automáticamente',
      'Generar actualizaciones de estado para clientes o dirección',
      'Redactar documentos y descripciones de tareas',
      'Convertir notas de reunión en tareas asignadas',
      'Responder preguntas sobre el estado del trabajo del equipo',
    ],
    features: [
      'Gestión de tareas con múltiples vistas (lista, tablero, gantt)',
      'Asistente de IA que trabaja sobre el contexto del espacio',
      'Documentos colaborativos integrados',
      'Automatizaciones internas sin código',
      'Paneles e informes personalizables',
    ],
    pros: [
      'Reúne muchas funciones que normalmente requieren varias herramientas',
      'Plan gratuito bastante generoso para equipos pequeños',
      'La IA aprovecha el contexto real de las tareas y documentos',
    ],
    cons: [
      'Puede resultar abrumador por la cantidad de opciones',
      'El rendimiento se resiente en espacios de trabajo muy grandes',
      'El asistente de IA suele ser un complemento de pago aparte',
    ],
    pricingNote:
      'ClickUp funciona con un modelo freemium: dispone de un plan gratuito con tareas ilimitadas y funciones básicas. Los planes de pago, por usuario y mes, añaden capacidades avanzadas, y el asistente de IA suele contratarse como complemento.',
    faqs: [
      {
        question: '¿Qué es ClickUp y para qué sirve?',
        answer:
          'ClickUp es una plataforma de gestión de proyectos que integra tareas, documentos, objetivos y paneles en un solo lugar. Sirve para organizar el trabajo de un equipo, hacer seguimiento del avance y automatizar procesos, con un asistente de IA que resume y redacta contenido.',
      },
      {
        question: '¿ClickUp es gratis?',
        answer:
          'ClickUp ofrece un plan gratuito bastante completo, con tareas ilimitadas y funciones básicas de colaboración, suficiente para equipos pequeños. Las funciones avanzadas y el asistente de IA requieren planes de pago por usuario. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Qué es ClickUp Brain?',
        answer:
          'ClickUp Brain es el asistente de inteligencia artificial de la plataforma. Responde preguntas sobre el estado del trabajo, resume tareas y documentos, genera actualizaciones de proyecto y ayuda a redactar contenido, apoyándose en la información que el equipo ya tiene registrada.',
      },
    ],
  },
  Asana: {
    name: 'Asana',
    tagline: 'Gestión del trabajo en equipo con IA para priorizar y resumir',
    intro:
      'Asana es una plataforma de gestión del trabajo utilizada por equipos para organizar proyectos, asignar tareas y hacer seguimiento de objetivos. Sus funciones de inteligencia artificial ayudan a resumir el estado de los proyectos, identificar riesgos, sugerir prioridades y redactar contenido dentro de las tareas. Su enfoque es más estructurado y orientado a procesos que el de otras herramientas del sector.',
    useCases: [
      'Coordinar proyectos con múltiples equipos implicados',
      'Obtener resúmenes automáticos del estado de un proyecto',
      'Identificar riesgos y bloqueos antes de que escalen',
      'Definir objetivos y seguir su cumplimiento',
      'Redactar descripciones de tareas y actualizaciones',
    ],
    features: [
      'Vistas de lista, tablero, cronograma y calendario',
      'Resúmenes de proyecto generados con IA',
      'Detección de riesgos y sugerencias de priorización',
      'Objetivos y seguimiento de resultados',
      'Reglas de automatización sin código',
    ],
    pros: [
      'Interfaz clara y ordenada, fácil de adoptar por el equipo',
      'Buenas capacidades de seguimiento de objetivos y dependencias',
      'Integraciones sólidas con las herramientas de trabajo habituales',
    ],
    cons: [
      'Las funciones avanzadas y de IA se reservan a planes superiores',
      'El precio por usuario sube rápido en equipos grandes',
      'Menos personalizable que otras plataformas más flexibles',
    ],
    pricingNote:
      'Asana tiene un modelo freemium: el plan gratuito cubre las necesidades básicas de equipos pequeños. Las funciones avanzadas, incluidas las capacidades de IA, se incluyen en los planes de pago por usuario y mes.',
    faqs: [
      {
        question: '¿Qué es Asana y para qué sirve?',
        answer:
          'Asana es una plataforma de gestión del trabajo que permite organizar proyectos, asignar tareas, definir objetivos y hacer seguimiento del avance. Sus funciones de IA añaden resúmenes automáticos de proyecto, detección de riesgos y ayuda en la redacción de tareas y actualizaciones.',
      },
      {
        question: '¿Asana es gratis?',
        answer:
          'Asana ofrece un plan gratuito válido para equipos pequeños, con tareas y proyectos básicos. Las funciones avanzadas, como cronogramas, objetivos o las capacidades de inteligencia artificial, requieren planes de pago por usuario. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Asana funciona en español?',
        answer:
          'Sí, Asana está disponible en español, tanto la interfaz como su documentación y soporte. Las funciones de IA también pueden trabajar con contenido en castellano, aunque algunas novedades pueden llegar antes en inglés.',
      },
    ],
  },
  'Monday.com': {
    name: 'Monday.com',
    tagline: 'Sistema operativo de trabajo con automatizaciones y funciones de IA',
    intro:
      'Monday.com es una plataforma de gestión del trabajo con un enfoque muy visual, basada en tableros personalizables donde cada equipo modela sus procesos. Además de proyectos, cubre CRM, desarrollo y operaciones mediante productos específicos. Sus funciones de IA permiten generar tareas, resumir contenido, clasificar elementos automáticamente y crear fórmulas o automatizaciones a partir de instrucciones en lenguaje natural.',
    useCases: [
      'Gestionar proyectos y cargas de trabajo del equipo',
      'Construir un CRM adaptado al proceso comercial propio',
      'Automatizar avisos y cambios de estado en los tableros',
      'Resumir y clasificar automáticamente elementos y comentarios',
      'Crear paneles de seguimiento para dirección',
    ],
    features: [
      'Tableros visuales altamente personalizables',
      'Automatizaciones configurables sin escribir código',
      'Bloques de IA para generar, resumir y clasificar contenido',
      'Paneles e informes con datos de varios tableros',
      'Amplio catálogo de integraciones y aplicaciones',
    ],
    pros: [
      'Muy visual e intuitivo, con buena adopción por parte de los equipos',
      'Gran flexibilidad para adaptar los tableros a cualquier proceso',
      'Las automatizaciones son fáciles de configurar',
    ],
    cons: [
      'El precio se cobra por bloques mínimos de usuarios, lo que encarece equipos pequeños',
      'Las funciones de IA consumen créditos limitados',
      'Puede volverse desordenado si no se define bien la estructura inicial',
    ],
    pricingNote:
      'Monday.com sigue un modelo freemium: dispone de un plan gratuito muy limitado en número de usuarios y elementos. Los planes de pago se facturan por usuario y mes con mínimos de asientos, y las funciones de IA se consumen mediante créditos.',
    faqs: [
      {
        question: '¿Qué es Monday.com?',
        answer:
          'Monday.com es una plataforma de gestión del trabajo basada en tableros visuales personalizables. Permite organizar proyectos, tareas, procesos comerciales y operaciones, con automatizaciones sin código y funciones de inteligencia artificial que generan, resumen y clasifican contenido dentro de los tableros.',
      },
      {
        question: '¿Monday.com es gratis?',
        answer:
          'Monday.com ofrece un plan gratuito muy limitado, pensado para uso individual o pruebas. Para trabajar en equipo con funciones reales hay que contratar un plan de pago por usuario, con un mínimo de asientos. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve la IA de Monday.com?',
        answer:
          'Sirve para reducir el trabajo manual dentro de los tableros: generar tareas a partir de una descripción, resumir hilos de comentarios, clasificar elementos automáticamente, detectar sentimiento en respuestas de clientes y crear fórmulas o automatizaciones describiendo lo que se necesita en lenguaje natural.',
      },
    ],
  },
  Trello: {
    name: 'Trello',
    tagline: 'Gestor de proyectos visual con tableros kanban para equipos de cualquier tamaño',
    intro:
      'Trello es una herramienta de gestión de proyectos basada en tableros kanban, desarrollada por Atlassian. Organiza el trabajo en tableros, listas y tarjetas que se arrastran entre columnas, de modo que cualquiera entiende el estado de un proyecto de un vistazo. Se usa tanto para tareas personales como para coordinar equipos de marketing, desarrollo o soporte, y ha ido incorporando funciones de automatización e integración con asistentes de IA.',
    useCases: [
      'Organizar el backlog y el sprint de un equipo pequeño',
      'Seguir el pipeline de un calendario editorial o de contenidos',
      'Coordinar campañas de marketing con fechas y responsables',
      'Gestionar candidaturas en un proceso de selección',
      'Planificar tareas personales y rutinas semanales',
    ],
    features: [
      'Tableros kanban con listas y tarjetas arrastrables',
      'Automatizaciones sin código mediante reglas y disparadores',
      'Vistas alternativas: calendario, cronograma y tabla',
      'Integraciones (Power-Ups) con Slack, Google Drive y más',
      'Aplicaciones móviles y de escritorio sincronizadas',
    ],
    pros: [
      'Curva de aprendizaje muy corta: se empieza a usar en minutos',
      'Plan gratuito suficiente para equipos pequeños y uso personal',
      'Ecosistema amplio de integraciones y plantillas listas para usar',
    ],
    cons: [
      'Se queda corto en proyectos complejos con dependencias y recursos',
      'Las vistas avanzadas y los límites amplios requieren plan de pago',
      'Sin informes ni métricas potentes de serie',
    ],
    pricingNote:
      'Trello es freemium: mantiene un plan gratuito con tableros ilimitados y ciertos límites de colaboradores y automatizaciones. Los planes de pago se facturan por usuario y mes, con tramos aproximados que suelen empezar en torno a los 5-6 $ y subir según funciones (vistas avanzadas, administración, seguridad).',
    faqs: [
      {
        question: '¿Qué es Trello y para qué sirve?',
        answer:
          'Trello es una herramienta de gestión de proyectos visual basada en tableros kanban. Sirve para organizar tareas en tarjetas que se mueven entre listas según su estado, de forma que un equipo o una persona vea de un vistazo qué está pendiente, en curso y terminado.',
      },
      {
        question: '¿Trello es gratis?',
        answer:
          'Sí, Trello tiene un plan gratuito que permite crear tableros y colaborar con otras personas, con límites en automatizaciones y ciertas funciones. Las vistas avanzadas, la administración de equipos y los límites más amplios pertenecen a los planes de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Trello está en español?',
        answer:
          'Sí, Trello ofrece interfaz en español y está disponible en web, escritorio, iOS y Android. Puedes cambiar el idioma desde la configuración de tu cuenta y trabajar íntegramente en castellano, incluidas las plantillas y la documentación de ayuda.',
      },
    ],
  },
  Harvey: {
    name: 'Harvey',
    tagline: 'Asistente de IA generativa para despachos de abogados y departamentos legales',
    intro:
      'Harvey es una plataforma de inteligencia artificial generativa diseñada específicamente para el sector legal. Está pensada para bufetes y departamentos jurídicos de empresa, y ayuda a profesionales del derecho en tareas como revisión documental, investigación jurídica, redacción de borradores y análisis de contratos. A diferencia de un chatbot genérico, se orienta a flujos de trabajo legales y a la integración con los repositorios documentales del propio despacho.',
    useCases: [
      'Revisar y resumir grandes volúmenes de documentación legal',
      'Apoyar la investigación jurídica sobre un asunto concreto',
      'Redactar primeros borradores de escritos y cláusulas',
      'Analizar contratos e identificar riesgos y desviaciones',
      'Preparar due diligence en operaciones corporativas',
    ],
    features: [
      'Modelos de IA adaptados al lenguaje y contexto jurídico',
      'Análisis y resumen de documentos legales extensos',
      'Asistencia en redacción de borradores y escritos',
      'Integración con los repositorios documentales del despacho',
      'Controles de seguridad y confidencialidad de nivel empresarial',
    ],
    pros: [
      'Especialización real en el dominio legal, no un chatbot genérico',
      'Ahorra tiempo en tareas repetitivas de revisión documental',
      'Enfoque serio en seguridad y confidencialidad del cliente',
    ],
    cons: [
      'Orientado a grandes despachos y empresas: no apto para autónomos',
      'Precio empresarial bajo presupuesto, sin autoservicio',
      'Requiere siempre revisión de un profesional: no sustituye criterio jurídico',
    ],
    pricingNote:
      'Harvey es una herramienta de pago con modelo empresarial: no publica tarifas abiertas ni ofrece registro autoservicio. El acceso se negocia mediante contrato con el despacho o el departamento legal, normalmente con licencias por usuario y condiciones a medida. Hay que solicitar una demo para conocer las condiciones.',
    faqs: [
      {
        question: '¿Qué es Harvey AI?',
        answer:
          'Harvey es una plataforma de inteligencia artificial generativa creada para el sector legal. La utilizan despachos de abogados y departamentos jurídicos para acelerar tareas como la revisión de documentos, la investigación jurídica, la redacción de borradores y el análisis de contratos.',
      },
      {
        question: '¿Harvey es gratis?',
        answer:
          'No. Harvey es una herramienta de pago con modelo empresarial y no ofrece plan gratuito ni registro autoservicio. El acceso se contrata directamente con la empresa, habitualmente mediante licencias por usuario y presupuesto a medida. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Harvey sustituye a un abogado?',
        answer:
          'No. Harvey es una herramienta de apoyo que acelera tareas documentales y de investigación, pero sus resultados deben ser siempre revisados por un profesional. La responsabilidad, el criterio jurídico y el asesoramiento al cliente siguen recayendo en el abogado.',
      },
    ],
  },
  Luminance: {
    name: 'Luminance',
    tagline: 'IA para revisión y análisis de contratos en departamentos legales y despachos',
    intro:
      'Luminance es una plataforma de inteligencia artificial legal centrada en el ciclo de vida del contrato. Analiza documentos jurídicos para detectar cláusulas, anomalías y riesgos, y se utiliza en due diligence, revisión contractual y gestión documental. Está dirigida a despachos de abogados y departamentos legales de empresa que manejan volúmenes altos de documentación y necesitan acelerar tareas de lectura y comparación.',
    useCases: [
      'Revisar cientos de contratos en un proceso de due diligence',
      'Detectar cláusulas atípicas o que se desvían del estándar',
      'Negociar y marcar cambios sobre contratos entrantes',
      'Auditar la cartera contractual ante un cambio normativo',
      'Localizar rápidamente obligaciones y fechas clave',
    ],
    features: [
      'Análisis automático de contratos y extracción de cláusulas',
      'Detección de anomalías y desviaciones respecto a la plantilla',
      'Comparación masiva de documentos similares',
      'Integración con el flujo de trabajo y edición en Word',
      'Paneles de control sobre la cartera contractual',
    ],
    pros: [
      'Muy sólida en revisión masiva de contratos y due diligence',
      'Reduce de forma notable el tiempo de lectura documental',
      'Pensada para volúmenes altos y entornos corporativos exigentes',
    ],
    cons: [
      'Precio empresarial, poco accesible para despachos pequeños',
      'Requiere configuración y aprendizaje inicial del equipo',
      'Los resultados necesitan siempre validación de un jurista',
    ],
    pricingNote:
      'Luminance es una solución de pago con enfoque empresarial. No publica tarifas públicas: el precio depende del número de usuarios, los módulos contratados y el volumen documental, y se negocia mediante presupuesto tras una demo.',
    faqs: [
      {
        question: '¿Qué es Luminance?',
        answer:
          'Luminance es una plataforma de inteligencia artificial para el sector legal centrada en el análisis y la revisión de contratos. Ayuda a despachos y departamentos jurídicos a leer, comparar y auditar grandes volúmenes de documentación, detectando cláusulas relevantes, anomalías y riesgos.',
      },
      {
        question: '¿Para qué sirve Luminance?',
        answer:
          'Sirve principalmente para acelerar la revisión contractual: due diligence, negociación de contratos, auditoría de la cartera contractual y localización de obligaciones o cláusulas concretas. Su valor está en procesar en horas lo que manualmente llevaría días de lectura.',
      },
      {
        question: '¿Luminance tiene versión gratuita?',
        answer:
          'No. Es una herramienta de pago dirigida a empresas y despachos, sin plan gratuito ni registro autoservicio. El acceso se contrata mediante presupuesto personalizado, normalmente tras una demostración con su equipo comercial. Consulta su web para precios actualizados.',
      },
    ],
  },
  DoNotPay: {
    name: 'DoNotPay',
    tagline:
      'Servicio de asistencia legal automatizada para trámites y reclamaciones de consumidores',
    intro:
      'DoNotPay es un servicio en línea que automatiza trámites y reclamaciones legales cotidianas para particulares. Nació como una herramienta para recurrir multas de aparcamiento y ha ido añadiendo asistentes para cancelar suscripciones, reclamar devoluciones o generar cartas y formularios. Está enfocada al consumidor final en el mercado estadounidense y funciona a base de plantillas y flujos guiados apoyados en IA.',
    useCases: [
      'Recurrir multas de aparcamiento y sanciones administrativas',
      'Cancelar suscripciones y pruebas gratuitas no deseadas',
      'Generar cartas de reclamación a empresas y proveedores',
      'Preparar documentación para reclamaciones de pequeña cuantía',
      'Rellenar formularios administrativos de forma guiada',
    ],
    features: [
      'Asistentes guiados por chat para cada tipo de trámite',
      'Generación automática de cartas y formularios',
      'Catálogo amplio de servicios de reclamación al consumidor',
      'Acceso desde web y aplicación móvil',
      'Plantillas legales preconfiguradas por caso de uso',
    ],
    pros: [
      'Hace accesibles trámites que normalmente requieren asesoramiento',
      'Coste muy bajo comparado con un servicio jurídico tradicional',
      'Interfaz sencilla y orientada a personas sin formación legal',
    ],
    cons: [
      'Enfocado a la legislación de EE. UU.: poca utilidad directa en España',
      'No sustituye asesoramiento jurídico profesional en casos serios',
      'Ha recibido críticas y litigios sobre el alcance real de su servicio',
    ],
    pricingNote:
      'DoNotPay funciona con un modelo freemium tirando a suscripción: permite explorar el servicio, pero para completar la mayoría de trámites hay que pagar una cuota, habitualmente mensual o trimestral de importe reducido. Los precios varían según el país y el servicio concreto.',
    faqs: [
      {
        question: '¿Qué es DoNotPay?',
        answer:
          'DoNotPay es un servicio en línea que automatiza trámites y reclamaciones legales sencillas para particulares: recurrir multas, cancelar suscripciones, generar cartas de reclamación o rellenar formularios. Se presenta como una alternativa económica a la asesoría legal para gestiones cotidianas.',
      },
      {
        question: '¿DoNotPay funciona en España?',
        answer:
          'Su catálogo está diseñado en torno a la legislación y los procedimientos de Estados Unidos, por lo que su utilidad práctica en España es muy limitada. Para reclamaciones en España conviene recurrir a servicios y plantillas adaptados a la normativa local.',
      },
      {
        question: '¿DoNotPay es gratis?',
        answer:
          'No del todo. Aunque puedes explorar sus servicios, la mayoría de trámites requieren una suscripción de pago de importe reducido. El modelo es freemium con cuota periódica, y los importes varían por servicio y país. Consulta su web para precios actualizados.',
      },
    ],
  },
  Spellbook: {
    name: 'Spellbook',
    tagline: 'Copiloto de IA para redactar y revisar contratos dentro de Microsoft Word',
    intro:
      'Spellbook es un asistente de inteligencia artificial para abogados que funciona como complemento de Microsoft Word. Ayuda a redactar y revisar contratos directamente sobre el documento: sugiere cláusulas, detecta términos problemáticos y propone redacciones alternativas sin salir del editor. Está dirigido sobre todo a despachos pequeños y medianos y a asesorías jurídicas que trabajan a diario con contratos.',
    useCases: [
      'Redactar cláusulas nuevas a partir de una instrucción en texto',
      'Revisar un contrato entrante y detectar términos desfavorables',
      'Proponer redacciones alternativas durante una negociación',
      'Resumir contratos largos antes de una reunión con el cliente',
      'Comprobar que un contrato no omite cláusulas habituales',
    ],
    features: [
      'Complemento nativo para Microsoft Word',
      'Sugerencia y redacción automática de cláusulas contractuales',
      'Detección de términos agresivos o inusuales',
      'Resumen y explicación de secciones complejas',
      'Sugerencias basadas en el contexto del contrato completo',
    ],
    pros: [
      'Se integra en Word, donde los abogados ya trabajan',
      'Curva de adopción baja frente a plataformas legales completas',
      'Accesible para despachos pequeños y medianos',
    ],
    cons: [
      'Depende de Microsoft Word: sin uso fuera de ese entorno',
      'No hay plan gratuito permanente, solo pago por licencia',
      'Todas las sugerencias requieren revisión profesional',
    ],
    pricingNote:
      'Spellbook es una herramienta de pago con licencias por usuario, orientada a profesionales y despachos. Suele ofrecer una prueba o demo antes de contratar, pero no un plan gratuito permanente. El precio depende del número de licencias y del plan elegido.',
    faqs: [
      {
        question: '¿Qué es Spellbook?',
        answer:
          'Spellbook es un asistente de IA para abogados que se integra como complemento en Microsoft Word. Sirve para redactar y revisar contratos: sugiere cláusulas, detecta términos problemáticos y propone redacciones alternativas sin salir del documento en el que ya estás trabajando.',
      },
      {
        question: '¿Para qué sirve Spellbook?',
        answer:
          'Sirve para acelerar el trabajo contractual del día a día: redactar cláusulas nuevas, revisar contratos entrantes en busca de términos desfavorables, resumir documentos largos y proponer redacciones durante una negociación, siempre bajo supervisión del abogado.',
      },
      {
        question: '¿Spellbook es gratis?',
        answer:
          'No. Spellbook es de pago y funciona con licencias por usuario. Normalmente permite solicitar una demo o una prueba antes de contratar, pero no mantiene un plan gratuito permanente. Consulta su web para precios actualizados.',
      },
    ],
  },
  Evisort: {
    name: 'Evisort',
    tagline: 'Plataforma de gestión del ciclo de vida contractual con IA para empresas',
    intro:
      'Evisort es una plataforma de gestión del ciclo de vida de los contratos (CLM) que aplica inteligencia artificial para extraer y estructurar la información de los documentos. Permite a departamentos legales, de compras y de finanzas centralizar su cartera contractual, buscar cláusulas concretas y automatizar flujos de aprobación. Está orientada a organizaciones medianas y grandes con volúmenes altos de contratos.',
    useCases: [
      'Centralizar todos los contratos de la empresa en un repositorio',
      'Buscar cláusulas o condiciones concretas en toda la cartera',
      'Automatizar flujos de revisión y aprobación de contratos',
      'Controlar vencimientos, renovaciones y obligaciones contractuales',
      'Evaluar la exposición contractual ante un cambio normativo',
    ],
    features: [
      'Extracción automática de metadatos y cláusulas contractuales',
      'Repositorio contractual con búsqueda avanzada',
      'Automatización de flujos de aprobación y firma',
      'Alertas de vencimientos y renovaciones',
      'Integraciones con herramientas corporativas y almacenamiento documental',
    ],
    pros: [
      'Convierte contratos en datos consultables y accionables',
      'Buen encaje para equipos legales, compras y finanzas a la vez',
      'Reduce el riesgo de renovaciones o vencimientos no controlados',
    ],
    cons: [
      'Solución empresarial: implantación y coste elevados',
      'Requiere trabajo previo de migración y limpieza documental',
      'Poco adecuada para despachos pequeños o autónomos',
    ],
    pricingNote:
      'Evisort es una plataforma de pago con modelo empresarial. No publica tarifas abiertas: el precio se calcula según el número de usuarios, el volumen contractual y los módulos contratados, y se negocia mediante presupuesto tras una demostración.',
    faqs: [
      {
        question: '¿Qué es Evisort?',
        answer:
          'Evisort es una plataforma de gestión del ciclo de vida contractual (CLM) que usa inteligencia artificial para leer contratos y extraer automáticamente sus cláusulas y metadatos. Permite centralizar la cartera contractual, buscar condiciones concretas y automatizar aprobaciones y renovaciones.',
      },
      {
        question: '¿Para qué sirve Evisort?',
        answer:
          'Sirve para que una empresa deje de tratar sus contratos como archivos sueltos y los convierta en información consultable: localizar cláusulas en segundos, controlar vencimientos y obligaciones, y automatizar los flujos de revisión entre legal, compras y finanzas.',
      },
      {
        question: '¿Evisort tiene plan gratuito?',
        answer:
          'No. Es una solución empresarial de pago, sin plan gratuito ni registro autoservicio. El acceso se contrata mediante presupuesto personalizado según usuarios, volumen de contratos y módulos. Consulta su web para precios actualizados.',
      },
    ],
  },
  LawGeex: {
    name: 'LawGeex',
    tagline: 'IA que revisa y aprueba contratos entrantes según las políticas de la empresa',
    intro:
      'LawGeex es una herramienta de inteligencia artificial legal centrada en la revisión automatizada de contratos entrantes. Compara cada documento con las políticas y estándares definidos por la empresa, señala las cláusulas que se desvían y propone redacciones alternativas. Está pensada para departamentos jurídicos corporativos que reciben un flujo constante de contratos rutinarios (NDA, acuerdos con proveedores) y quieren descargar esa revisión.',
    useCases: [
      'Revisar automáticamente acuerdos de confidencialidad (NDA)',
      'Aprobar contratos rutinarios de proveedores sin cuello de botella legal',
      'Comprobar que un contrato cumple las políticas internas',
      'Marcar y proponer cambios sobre cláusulas desviadas',
      'Reducir el tiempo de respuesta del departamento jurídico',
    ],
    features: [
      'Revisión automática frente a las políticas legales de la empresa',
      'Detección de cláusulas ausentes o desviadas del estándar',
      'Sugerencias de redacción alternativa (redlining)',
      'Playbooks configurables por tipo de contrato',
      'Informes sobre volumen y tiempos de revisión',
    ],
    pros: [
      'Descarga al equipo legal de la revisión de contratos repetitivos',
      'Aplica de forma consistente las políticas internas de la empresa',
      'Acorta mucho los tiempos de aprobación de contratos rutinarios',
    ],
    cons: [
      'Requiere definir bien los playbooks antes de dar valor',
      'Mejor rendimiento en contratos estándar que en acuerdos a medida',
      'Coste empresarial, no orientado a pymes ni autónomos',
    ],
    pricingNote:
      'LawGeex es de pago con modelo empresarial y no publica tarifas abiertas. El precio depende del volumen de contratos revisados, el número de usuarios y los tipos de acuerdo configurados, y se negocia por presupuesto tras una demo.',
    faqs: [
      {
        question: '¿Qué es LawGeex?',
        answer:
          'LawGeex es una herramienta de IA legal que revisa automáticamente los contratos que entran en una empresa. Los compara con las políticas internas definidas por el departamento jurídico, señala las cláusulas que se desvían del estándar y propone redacciones alternativas.',
      },
      {
        question: '¿Para qué sirve LawGeex?',
        answer:
          'Sirve para descargar al equipo legal de la revisión de contratos rutinarios como NDA o acuerdos con proveedores. Automatiza esa primera revisión aplicando las políticas de la empresa, de modo que el jurista solo interviene en los puntos realmente conflictivos.',
      },
      {
        question: '¿LawGeex es gratis?',
        answer:
          'No. Es una solución de pago dirigida a departamentos jurídicos corporativos, sin plan gratuito. El precio se ajusta al volumen de contratos y al número de usuarios, y se contrata mediante presupuesto. Consulta su web para precios actualizados.',
      },
    ],
  },
  Ghostwriter: {
    name: 'Ghostwriter',
    tagline: 'Asistente de código con IA integrado en el entorno de desarrollo de Replit',
    intro:
      'Ghostwriter es el asistente de código con inteligencia artificial de Replit, la plataforma de desarrollo en el navegador. Ofrece autocompletado, explicación de código, generación de funciones y ayuda para depurar, todo dentro del propio editor de Replit. Está pensado para quien programa directamente en el navegador, desde estudiantes que aprenden a programar hasta desarrolladores que montan prototipos rápidos.',
    useCases: [
      'Autocompletar código mientras escribes en el editor',
      'Generar funciones completas a partir de una descripción',
      'Explicar fragmentos de código ajeno o poco claros',
      'Depurar errores con sugerencias de corrección',
      'Aprender a programar con ayuda contextual en tiempo real',
    ],
    features: [
      'Autocompletado de código en línea con contexto del proyecto',
      'Chat integrado para preguntas sobre el código',
      'Generación de código a partir de lenguaje natural',
      'Explicación y transformación de fragmentos seleccionados',
      'Integrado de forma nativa en el IDE web de Replit',
    ],
    pros: [
      'No requiere configurar nada: funciona dentro de Replit',
      'Muy útil para aprender y para prototipar rápido',
      'Combina editor, ejecución y despliegue en un solo sitio',
    ],
    cons: [
      'Atado al ecosistema Replit: no se usa en VS Code ni en local',
      'Las funciones de IA más completas requieren suscripción',
      'El código generado necesita revisión y pruebas',
    ],
    pricingNote:
      'Replit funciona con un modelo freemium: hay un nivel gratuito con el que empezar a programar, y las capacidades de IA más amplias se incluyen en los planes de pago por suscripción mensual. Los tramos y los nombres de los planes han ido cambiando con el tiempo.',
    faqs: [
      {
        question: '¿Qué es Ghostwriter de Replit?',
        answer:
          'Ghostwriter es el asistente de código con IA de Replit. Vive dentro del editor en el navegador y ofrece autocompletado, generación de código a partir de instrucciones en lenguaje natural, explicación de fragmentos y ayuda para depurar errores.',
      },
      {
        question: '¿Ghostwriter es gratis?',
        answer:
          'Replit tiene un nivel gratuito con el que se puede programar, pero las funciones de IA más completas forman parte de los planes de pago por suscripción. La oferta ha cambiado con el tiempo. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Se puede usar Ghostwriter fuera de Replit?',
        answer:
          'No. Ghostwriter está integrado en el entorno de desarrollo de Replit y no funciona como extensión independiente para editores locales como VS Code. Si buscas un asistente para tu editor de escritorio, tendrás que usar otra alternativa.',
      },
    ],
  },
  Bolt: {
    name: 'Bolt',
    tagline: 'Genera y despliega aplicaciones web completas a partir de una descripción',
    intro:
      'Bolt (bolt.new) es una herramienta de desarrollo asistido por IA de StackBlitz que permite crear aplicaciones web completas describiéndolas en lenguaje natural. Genera el código, lo ejecuta en el navegador y deja iterar sobre el resultado mediante conversación, sin instalar nada en local. Está orientada a desarrolladores y a perfiles técnicos que quieren pasar de una idea a un prototipo funcional en poco tiempo.',
    useCases: [
      'Crear un prototipo funcional de aplicación web en minutos',
      'Montar una landing page o una demo para un cliente',
      'Explorar una idea de producto antes de invertir tiempo',
      'Generar el andamiaje inicial de un proyecto frontend',
      'Iterar sobre una app existente mediante instrucciones en texto',
    ],
    features: [
      'Generación de aplicaciones completas desde un prompt',
      'Entorno de ejecución en el navegador, sin instalación local',
      'Iteración conversacional sobre el código generado',
      'Despliegue directo del proyecto resultante',
      'Soporte para frameworks web modernos populares',
    ],
    pros: [
      'Rapidísimo para pasar de idea a prototipo funcional',
      'No requiere configurar entorno de desarrollo local',
      'Permite editar el código generado, no es una caja negra',
    ],
    cons: [
      'El consumo de créditos se agota rápido en proyectos grandes',
      'El código generado suele necesitar refactorización para producción',
      'Menos control que un flujo de desarrollo tradicional',
    ],
    pricingNote:
      'Bolt es freemium y funciona con un sistema de créditos o tokens: hay una asignación gratuita diaria o mensual limitada, y los planes de pago amplían ese consumo. Las suscripciones suelen arrancar en torno a los 20 $/mes y escalar según el volumen.',
    faqs: [
      {
        question: '¿Qué es Bolt.new?',
        answer:
          'Bolt.new es una herramienta de IA que genera aplicaciones web completas a partir de una descripción en lenguaje natural. Crea el código, lo ejecuta directamente en el navegador y permite seguir mejorándolo mediante conversación, sin instalar nada en el ordenador.',
      },
      {
        question: '¿Bolt es gratis?',
        answer:
          'Bolt tiene un nivel gratuito con una cantidad limitada de créditos de uso, suficiente para probar la herramienta y hacer proyectos pequeños. Para proyectos más grandes hay planes de pago que amplían los créditos disponibles. Consulta su web para precios actualizados.',
      },
      {
        question: '¿El código que genera Bolt sirve para producción?',
        answer:
          'Sirve como punto de partida sólido, pero conviene revisarlo. Bolt es excelente para prototipos y demos; para llevar un proyecto a producción normalmente hace falta refactorizar, añadir pruebas y revisar la seguridad y el rendimiento del código generado.',
      },
    ],
  },
  Testbot: {
    name: 'Testbot',
    tagline: 'Plataforma cloud de testing automatizado y cross-browser para equipos de QA',
    intro:
      'TestingBot es una plataforma en la nube para ejecutar pruebas automatizadas de aplicaciones web y móviles en cientos de combinaciones de navegador, sistema operativo y dispositivo. Se integra con frameworks habituales como Selenium, Cypress o Playwright y con los sistemas de integración continua, de modo que los equipos de QA pueden lanzar sus suites sin mantener una infraestructura propia de máquinas y dispositivos.',
    useCases: [
      'Ejecutar pruebas cross-browser sin mantener máquinas propias',
      'Validar una web en dispositivos móviles reales',
      'Integrar la suite de tests en el pipeline de CI/CD',
      'Depurar fallos con vídeo y capturas de cada ejecución',
      'Probar aplicaciones en versiones antiguas de navegadores',
    ],
    features: [
      'Grid en la nube con múltiples navegadores y sistemas operativos',
      'Compatibilidad con Selenium, Cypress, Playwright y Appium',
      'Pruebas en dispositivos móviles reales y emuladores',
      'Grabación de vídeo y logs de cada ejecución',
      'Integraciones con herramientas de integración continua',
    ],
    pros: [
      'Evita el coste de montar y mantener un laboratorio de dispositivos',
      'Amplia cobertura de navegadores, versiones y dispositivos',
      'Encaja con los frameworks de testing que ya se usan',
    ],
    cons: [
      'El coste crece con la ejecución paralela y los minutos de test',
      'Las pruebas en la nube son más lentas que en local',
      'Requiere conocimientos previos de automatización de tests',
    ],
    pricingNote:
      'TestingBot funciona con un modelo freemium: ofrece una prueba gratuita y planes de pago por suscripción mensual que varían según los minutos de test, la ejecución en paralelo y el acceso a dispositivos reales. Los tramos suelen empezar en cifras modestas y escalar bastante para equipos grandes.',
    faqs: [
      {
        question: '¿Qué es TestingBot?',
        answer:
          'TestingBot es una plataforma en la nube para ejecutar pruebas automatizadas de aplicaciones web y móviles sobre múltiples navegadores, sistemas operativos y dispositivos reales, sin necesidad de mantener una infraestructura propia de máquinas de prueba.',
      },
      {
        question: '¿Para qué sirve TestingBot?',
        answer:
          'Sirve para hacer testing cross-browser y móvil a escala: lanzar suites de Selenium, Cypress o Playwright en cientos de combinaciones de navegador y dispositivo, integrarlas en el pipeline de CI/CD y depurar los fallos con vídeo y logs.',
      },
      {
        question: '¿TestingBot tiene versión gratuita?',
        answer:
          'Ofrece una prueba gratuita para evaluar la plataforma, pero el uso continuado requiere un plan de pago. Los precios dependen de los minutos de test, la ejecución en paralelo y el acceso a dispositivos reales. Consulta su web para precios actualizados.',
      },
    ],
  },
  Mabl: {
    name: 'Mabl',
    tagline: 'Testing automatizado de bajo código con IA para equipos de QA y desarrollo',
    intro:
      'Mabl es una plataforma de testing automatizado que combina bajo código con inteligencia artificial. Permite crear pruebas funcionales de extremo a extremo grabando la interacción con la aplicación, y usa IA para mantenerlas cuando la interfaz cambia (autorreparación). Está orientada a equipos de QA y desarrollo que quieren automatizar pruebas sin escribir y mantener grandes cantidades de código de test.',
    useCases: [
      'Crear pruebas end-to-end sin escribir código',
      'Reducir el mantenimiento de tests cuando cambia la interfaz',
      'Integrar pruebas automatizadas en el pipeline de CI/CD',
      'Detectar regresiones visuales entre versiones de la aplicación',
      'Ejecutar pruebas de API junto a las de interfaz',
    ],
    features: [
      'Creación de tests de bajo código mediante grabación',
      'Autorreparación de tests ante cambios en la interfaz',
      'Pruebas cross-browser en la nube',
      'Testing de API y comprobaciones de rendimiento',
      'Integraciones con CI/CD y herramientas de gestión de incidencias',
    ],
    pros: [
      'Reduce mucho el mantenimiento de la suite de pruebas',
      'Accesible para perfiles de QA sin experiencia en programación',
      'Buena integración en flujos de entrega continua',
    ],
    cons: [
      'Menos flexible que escribir tests a medida en código',
      'Coste elevado frente a alternativas open source como Playwright',
      'La autorreparación no siempre acierta y hay que supervisarla',
    ],
    pricingNote:
      'Mabl es freemium en la práctica: ofrece una prueba gratuita para evaluar la plataforma y planes de pago por suscripción dirigidos a equipos, con precio en función del volumen de ejecuciones y usuarios. No publica una tarifa pública detallada.',
    faqs: [
      {
        question: '¿Qué es Mabl?',
        answer:
          'Mabl es una plataforma de testing automatizado de bajo código que usa inteligencia artificial. Permite crear pruebas de extremo a extremo grabando la interacción con la aplicación y mantenerlas automáticamente cuando la interfaz cambia, sin reescribir el test a mano.',
      },
      {
        question: '¿Para qué sirve Mabl?',
        answer:
          'Sirve para automatizar pruebas funcionales, de regresión y de API sin escribir grandes cantidades de código. Su punto fuerte es la autorreparación: cuando la interfaz cambia, la IA ajusta los tests, reduciendo el mantenimiento que suele lastrar las suites automatizadas.',
      },
      {
        question: '¿Mabl es gratis?',
        answer:
          'No de forma permanente. Mabl ofrece una prueba gratuita para evaluar la plataforma, pero el uso continuado requiere un plan de pago cuyo precio depende del volumen de ejecuciones y del número de usuarios. Consulta su web para precios actualizados.',
      },
    ],
  },
  SonarQube: {
    name: 'SonarQube',
    tagline: 'Análisis estático de código para detectar bugs, vulnerabilidades y deuda técnica',
    intro:
      'SonarQube es una plataforma de análisis estático de código desarrollada por Sonar. Revisa el código fuente sin ejecutarlo y detecta errores, vulnerabilidades de seguridad, code smells y duplicidades, presentando los resultados en un panel con métricas de calidad. Se integra en el pipeline de CI/CD y soporta decenas de lenguajes, por lo que es un estándar habitual en equipos de desarrollo que quieren controlar la deuda técnica.',
    useCases: [
      'Detectar bugs y vulnerabilidades antes de desplegar a producción',
      'Bloquear pull requests que no cumplen el quality gate',
      'Medir y controlar la deuda técnica de un proyecto',
      'Comprobar la cobertura de tests y el código duplicado',
      'Auditar la calidad de un código heredado',
    ],
    features: [
      'Análisis estático para decenas de lenguajes de programación',
      'Quality gates configurables que bloquean código de baja calidad',
      'Detección de vulnerabilidades de seguridad y hotspots',
      'Integración con GitHub, GitLab, Jenkins y otros CI/CD',
      'Panel con métricas históricas de calidad y deuda técnica',
    ],
    pros: [
      'Edición Community open source y gratuita, autoalojable',
      'Cobertura de lenguajes muy amplia',
      'Estándar de facto: mucha documentación y comunidad',
    ],
    cons: [
      'La edición Community deja fuera lenguajes y análisis avanzados',
      'Autoalojarlo implica mantener servidor y base de datos',
      'Puede generar mucho ruido si no se ajustan bien las reglas',
    ],
    pricingNote:
      'SonarQube tiene una edición Community open source y gratuita que se puede autoalojar. Las ediciones de pago (Developer, Enterprise) añaden más lenguajes, análisis de ramas y funciones de seguridad, con precio según líneas de código analizadas. También existe SonarCloud como versión gestionada, gratuita para proyectos públicos.',
    faqs: [
      {
        question: '¿Qué es SonarQube y para qué sirve?',
        answer:
          'SonarQube es una plataforma de análisis estático de código. Sirve para revisar el código fuente sin ejecutarlo y detectar bugs, vulnerabilidades de seguridad, código duplicado y code smells, ofreciendo métricas de calidad y deuda técnica sobre las que actuar.',
      },
      {
        question: '¿SonarQube es gratis?',
        answer:
          'Sí, tiene una edición Community open source y gratuita que puedes instalar en tu propio servidor. Las ediciones de pago añaden más lenguajes, análisis de ramas y funciones avanzadas de seguridad, con precio según el tamaño del código. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Qué diferencia hay entre SonarQube y SonarCloud?',
        answer:
          'SonarQube se instala y se gestiona en tu propia infraestructura, mientras que SonarCloud es la versión alojada en la nube por Sonar, sin mantenimiento por tu parte. SonarCloud suele ser gratuito para proyectos de código abierto y de pago para repositorios privados.',
      },
    ],
  },
  CodeClimate: {
    name: 'CodeClimate',
    tagline: 'Análisis de calidad de código y métricas de ingeniería para equipos de desarrollo',
    intro:
      'Code Climate es una plataforma que combina análisis estático de código con métricas de rendimiento del equipo de ingeniería. Su producto Quality revisa cada pull request y señala problemas de mantenibilidad, complejidad, duplicidad y cobertura de tests, mientras que Velocity aporta datos sobre el flujo de trabajo del equipo. Se integra directamente con GitHub, GitLab y Bitbucket.',
    useCases: [
      'Revisar automáticamente la calidad de cada pull request',
      'Controlar la complejidad y la duplicidad del código',
      'Seguir la evolución de la cobertura de tests',
      'Identificar los ficheros más problemáticos de un repositorio',
      'Medir el rendimiento y los cuellos de botella del equipo',
    ],
    features: [
      'Análisis de mantenibilidad y complejidad del código',
      'Comentarios automáticos en los pull requests',
      'Seguimiento de la cobertura de tests a lo largo del tiempo',
      'Métricas de ingeniería y flujo de trabajo (Velocity)',
      'Integración nativa con GitHub, GitLab y Bitbucket',
    ],
    pros: [
      'Gratuito para proyectos de código abierto',
      'Se integra en el flujo de pull requests sin fricción',
      'Aporta una nota de mantenibilidad fácil de comunicar',
    ],
    cons: [
      'Menos lenguajes soportados que alternativas como SonarQube',
      'Las métricas de equipo pueden malinterpretarse como control individual',
      'Los repositorios privados requieren plan de pago',
    ],
    pricingNote:
      'Code Climate es freemium: su análisis de calidad es gratuito para repositorios de código abierto, mientras que los repositorios privados y las funciones de métricas de equipo se facturan por usuario y mes en planes de pago.',
    faqs: [
      {
        question: '¿Qué es Code Climate?',
        answer:
          'Code Climate es una plataforma de análisis de calidad de código que revisa automáticamente cada pull request y señala problemas de mantenibilidad, complejidad, duplicidad y cobertura de tests. También ofrece métricas sobre el flujo de trabajo del equipo de ingeniería.',
      },
      {
        question: '¿Code Climate es gratis?',
        answer:
          'Su análisis de calidad es gratuito para proyectos de código abierto. Para repositorios privados y para las funciones de métricas de equipo hay planes de pago facturados por usuario y mes. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Qué diferencia hay entre Code Climate y SonarQube?',
        answer:
          'Ambos hacen análisis estático, pero SonarQube cubre más lenguajes y puede autoalojarse, con un enfoque fuerte en seguridad. Code Climate está más orientado a la mantenibilidad y a integrarse en el flujo de pull requests, y añade métricas de rendimiento del equipo.',
      },
    ],
  },
  CodeFactor: {
    name: 'CodeFactor',
    tagline: 'Revisión automática de código en cada commit y pull request de tu repositorio',
    intro:
      'CodeFactor es un servicio de análisis estático de código que se conecta a tu repositorio de GitHub, GitLab o Bitbucket y revisa automáticamente cada commit y pull request. Señala problemas de estilo, complejidad y posibles errores, y asigna una nota de calidad al proyecto. Está pensado para equipos que quieren una revisión automatizada continua sin montar ni mantener infraestructura propia.',
    useCases: [
      'Revisar automáticamente cada commit y pull request',
      'Mantener un estilo de código consistente en todo el equipo',
      'Detectar problemas de complejidad y posibles errores',
      'Mostrar una insignia de calidad en el README del proyecto',
      'Priorizar qué ficheros necesitan refactorización',
    ],
    features: [
      'Análisis automático en cada commit y pull request',
      'Soporte para múltiples lenguajes y linters populares',
      'Nota de calidad y insignias para el repositorio',
      'Integración con GitHub, GitLab y Bitbucket',
      'Configuración de reglas y exclusiones por proyecto',
    ],
    pros: [
      'Configuración muy rápida: se conecta al repositorio y ya analiza',
      'Gratuito para proyectos de código abierto',
      'No requiere mantener servidores propios de análisis',
    ],
    cons: [
      'Menos profundo que herramientas de análisis más completas',
      'Los repositorios privados requieren plan de pago',
      'Puede generar ruido si no se afinan las reglas al inicio',
    ],
    pricingNote:
      'CodeFactor es freemium: gratuito para repositorios públicos y de código abierto, con planes de pago por suscripción para repositorios privados, normalmente escalados según el número de repositorios o de usuarios.',
    faqs: [
      {
        question: '¿Qué es CodeFactor?',
        answer:
          'CodeFactor es un servicio de análisis estático de código que se conecta a tu repositorio y revisa automáticamente cada commit y pull request. Detecta problemas de estilo, complejidad y posibles errores, y asigna una nota de calidad al proyecto.',
      },
      {
        question: '¿CodeFactor es gratis?',
        answer:
          'Sí para repositorios públicos y proyectos de código abierto. Para repositorios privados hay planes de pago por suscripción, cuyo precio escala según el número de repositorios o usuarios. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve CodeFactor?',
        answer:
          'Sirve para automatizar la revisión de código: en lugar de depender solo de la revisión manual, cada pull request recibe un análisis que señala problemas de estilo, complejidad y errores potenciales, ayudando a mantener la calidad del repositorio de forma continua.',
      },
    ],
  },
  Aidoc: {
    name: 'Aidoc',
    tagline: 'IA para radiología que prioriza hallazgos críticos en imágenes médicas',
    intro:
      'Aidoc es una compañía de inteligencia artificial médica especializada en el análisis de imágenes de radiología. Sus algoritmos revisan estudios como TAC y ayudan a los radiólogos a detectar y priorizar hallazgos potencialmente críticos, de modo que los casos urgentes suban en la lista de trabajo. Se implanta en hospitales y centros de diagnóstico e integra sus resultados en los sistemas PACS y de flujo radiológico existentes.',
    useCases: [
      'Priorizar estudios con hallazgos críticos en la lista de trabajo',
      'Apoyar la detección de hemorragias o embolias en TAC',
      'Reducir el tiempo hasta el diagnóstico en urgencias',
      'Servir como segunda lectura de apoyo al radiólogo',
      'Coordinar equipos clínicos ante un hallazgo urgente',
    ],
    features: [
      'Algoritmos de análisis de imagen radiológica',
      'Priorización automática de casos urgentes (triaje)',
      'Integración con PACS y flujos de trabajo hospitalarios',
      'Notificaciones a los equipos clínicos implicados',
      'Cartera de algoritmos para distintas patologías',
    ],
    pros: [
      'Acorta el tiempo hasta detectar casos urgentes',
      'Se integra en el flujo radiológico existente sin cambiarlo',
      'Cuenta con aprobaciones regulatorias para varios de sus algoritmos',
    ],
    cons: [
      'Solo para entornos sanitarios: no es una herramienta de consumo',
      'Implantación compleja y coste institucional elevado',
      'Es una ayuda al diagnóstico, no un sustituto del radiólogo',
    ],
    pricingNote:
      'Aidoc es una solución de pago dirigida a instituciones sanitarias. No publica tarifas: el precio se negocia por contrato con el hospital o la red de centros, en función de los algoritmos contratados y el volumen de estudios.',
    faqs: [
      {
        question: '¿Qué es Aidoc?',
        answer:
          'Aidoc es una plataforma de inteligencia artificial para radiología. Analiza estudios de imagen médica, como TAC, para ayudar a detectar hallazgos potencialmente críticos y priorizar esos casos en la lista de trabajo del radiólogo, acortando el tiempo hasta el diagnóstico.',
      },
      {
        question: '¿Aidoc sustituye al radiólogo?',
        answer:
          'No. Aidoc es una herramienta de apoyo al diagnóstico: señala y prioriza posibles hallazgos, pero la interpretación y el diagnóstico final siguen siendo responsabilidad del profesional médico. Su valor está en el triaje y en reducir el tiempo de detección de casos urgentes.',
      },
      {
        question: '¿Aidoc es gratis?',
        answer:
          'No. Es una solución de pago dirigida a hospitales y centros de diagnóstico, sin versión gratuita ni acceso para particulares. El precio se acuerda mediante contrato institucional según los algoritmos y el volumen de estudios. Consulta su web para precios actualizados.',
      },
    ],
  },
  PathAI: {
    name: 'PathAI',
    tagline: 'IA para patología digital que asiste en el análisis de muestras histológicas',
    intro:
      'PathAI es una empresa de inteligencia artificial aplicada a la patología digital. Desarrolla algoritmos que analizan imágenes de tejidos (portaobjetos digitalizados) para apoyar a los patólogos en la detección y cuantificación de hallazgos, y trabaja tanto con laboratorios clínicos como con farmacéuticas en el desarrollo de fármacos y ensayos clínicos. No es una herramienta de consumo: se implanta en entornos de investigación y diagnóstico profesional.',
    useCases: [
      'Analizar portaobjetos digitalizados en patología digital',
      'Cuantificar biomarcadores en muestras de tejido',
      'Apoyar la selección de pacientes en ensayos clínicos',
      'Reducir la variabilidad entre distintos patólogos',
      'Acelerar el flujo de trabajo de un laboratorio de anatomía patológica',
    ],
    features: [
      'Algoritmos de análisis de imagen histopatológica',
      'Cuantificación automática de biomarcadores',
      'Plataforma de patología digital para laboratorios',
      'Colaboración con farmacéuticas en ensayos clínicos',
      'Herramientas de anotación y revisión para patólogos',
    ],
    pros: [
      'Aporta cuantificación objetiva donde suele haber variabilidad humana',
      'Especialización profunda en patología, no una IA médica genérica',
      'Uso contrastado en investigación y desarrollo de fármacos',
    ],
    cons: [
      'Dirigido exclusivamente a laboratorios, hospitales y farmacéuticas',
      'Requiere digitalización previa de los portaobjetos',
      'Coste y despliegue de nivel institucional',
    ],
    pricingNote:
      'PathAI es una solución de pago con modelo empresarial e institucional. No ofrece tarifas públicas ni acceso para particulares: los acuerdos se negocian con laboratorios, hospitales y compañías farmacéuticas según el proyecto.',
    faqs: [
      {
        question: '¿Qué es PathAI?',
        answer:
          'PathAI es una empresa de inteligencia artificial especializada en patología digital. Sus algoritmos analizan imágenes de tejido digitalizadas para ayudar a los patólogos a detectar y cuantificar hallazgos, y se emplean tanto en diagnóstico como en investigación farmacéutica.',
      },
      {
        question: '¿Para qué sirve PathAI?',
        answer:
          'Sirve para apoyar el trabajo de los patólogos: analizar portaobjetos digitalizados, cuantificar biomarcadores de forma objetiva y reducir la variabilidad entre observadores. También se usa en ensayos clínicos para seleccionar pacientes y evaluar respuesta a tratamientos.',
      },
      {
        question: '¿PathAI es gratis?',
        answer:
          'No. Es una solución de pago dirigida a laboratorios, hospitales y compañías farmacéuticas, sin versión gratuita ni acceso para particulares. Los acuerdos se negocian de forma institucional según el proyecto. Consulta su web para precios actualizados.',
      },
    ],
  },
  MedPaLM: {
    name: 'MedPaLM',
    tagline: 'Modelo de lenguaje de Google Research orientado a preguntas médicas y clínicas',
    intro:
      'Med-PaLM es un modelo de lenguaje de gran tamaño desarrollado por Google Research y adaptado al dominio médico. Está entrenado para responder preguntas clínicas y de conocimiento médico, y se ha evaluado con conjuntos de preguntas de tipo examen de licencia médica. Es fundamentalmente un proyecto de investigación: Google lo ha ido poniendo a disposición de organizaciones sanitarias seleccionadas más que como producto abierto al público general.',
    useCases: [
      'Responder preguntas de conocimiento médico y clínico',
      'Apoyar la investigación en IA aplicada a la salud',
      'Resumir literatura médica y documentación clínica',
      'Explorar asistentes de información sanitaria para profesionales',
      'Evaluar el rendimiento de modelos en exámenes médicos',
    ],
    features: [
      'Modelo de lenguaje adaptado específicamente al dominio médico',
      'Evaluado sobre bancos de preguntas de tipo examen clínico',
      'Capacidad multimodal en versiones orientadas a imagen médica',
      'Desarrollado y evaluado por Google Research',
      'Acceso a través de programas y socios seleccionados',
    ],
    pros: [
      'Respaldo investigador sólido y evaluación publicada',
      'Especialización real en conocimiento médico frente a modelos generales',
      'Impulsa el avance de la IA clínica de forma documentada',
    ],
    cons: [
      'No es un producto abierto: acceso limitado a socios seleccionados',
      'No debe usarse para autodiagnóstico ni decisiones clínicas directas',
      'Puede generar respuestas incorrectas y requiere supervisión médica',
    ],
    pricingNote:
      'Med-PaLM es principalmente un proyecto de investigación de Google, sin un modelo comercial de suscripción abierto al público. El acceso se ha canalizado a través de programas para organizaciones sanitarias seleccionadas y de la plataforma cloud de Google, donde el uso se factura por consumo.',
    faqs: [
      {
        question: '¿Qué es Med-PaLM?',
        answer:
          'Med-PaLM es un modelo de lenguaje de gran tamaño creado por Google Research y adaptado al ámbito médico. Está diseñado para responder preguntas clínicas y de conocimiento sanitario, y se ha evaluado con bancos de preguntas de tipo examen de licencia médica.',
      },
      {
        question: '¿Med-PaLM es gratis?',
        answer:
          'No es un producto de suscripción abierto al público. Se ha desarrollado como proyecto de investigación y su acceso se ha limitado a organizaciones sanitarias y socios seleccionados, canalizado a través de la plataforma cloud de Google. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Puedo usar Med-PaLM para diagnosticarme?',
        answer:
          'No. Med-PaLM no es una herramienta de autodiagnóstico ni sustituye la consulta con un profesional sanitario. Está orientado a investigación y a apoyar a profesionales, y sus respuestas pueden contener errores, por lo que siempre requieren supervisión médica.',
      },
    ],
  },
  'Zebra Medical': {
    name: 'Zebra Medical',
    tagline: 'Algoritmos de IA para el análisis automático de imágenes médicas radiológicas',
    intro:
      'Zebra Medical Vision es una compañía de inteligencia artificial aplicada a la imagen médica. Desarrolla algoritmos que analizan radiografías, TAC y otras pruebas para detectar de forma automática hallazgos como fracturas, patología pulmonar o indicadores cardiovasculares. Sus soluciones se dirigen a hospitales y sistemas de salud, y se integran en los flujos radiológicos existentes. La empresa pasó a formar parte de Nanox.',
    useCases: [
      'Detectar hallazgos radiológicos de forma automatizada',
      'Cribado poblacional a partir de imágenes ya existentes',
      'Priorizar estudios con posibles hallazgos relevantes',
      'Servir como apoyo de segunda lectura al radiólogo',
      'Analizar de forma retrospectiva archivos de imagen hospitalarios',
    ],
    features: [
      'Cartera de algoritmos para distintas modalidades de imagen',
      'Integración con sistemas PACS hospitalarios',
      'Detección automática de hallazgos en radiografía y TAC',
      'Aplicaciones orientadas a cribado y prevención',
      'Despliegue en la nube o en la infraestructura del hospital',
    ],
    pros: [
      'Aprovecha imágenes ya realizadas para detectar hallazgos adicionales',
      'Enfoque interesante en cribado y prevención poblacional',
      'Integración pensada para no alterar el flujo radiológico',
    ],
    cons: [
      'Solo para instituciones sanitarias, no para particulares',
      'La marca se ha integrado en Nanox y su oferta ha evolucionado',
      'Siempre requiere validación del hallazgo por un radiólogo',
    ],
    pricingNote:
      'Zebra Medical es una solución de pago dirigida a hospitales y sistemas de salud. No publica tarifas: el modelo habitual en este sector es el contrato institucional con precio por algoritmo o por estudio analizado. Su oferta se ha integrado en la de Nanox.',
    faqs: [
      {
        question: '¿Qué es Zebra Medical Vision?',
        answer:
          'Zebra Medical Vision es una compañía de inteligencia artificial para imagen médica. Desarrolla algoritmos que analizan radiografías y TAC para detectar automáticamente hallazgos clínicos, con el fin de apoyar a los radiólogos y facilitar programas de cribado. Actualmente forma parte de Nanox.',
      },
      {
        question: '¿Para qué sirve Zebra Medical?',
        answer:
          'Sirve para analizar de forma automática pruebas de imagen ya realizadas y detectar hallazgos como fracturas, patología pulmonar o indicadores cardiovasculares. Se usa como apoyo al radiólogo y en iniciativas de cribado que aprovechan el archivo de imágenes existente.',
      },
      {
        question: '¿Zebra Medical es gratis?',
        answer:
          'No. Es una solución de pago dirigida a hospitales y sistemas de salud, sin versión gratuita ni acceso para particulares. El precio se acuerda mediante contrato institucional, habitualmente por algoritmo o por estudio analizado. Consulta su web para precios actualizados.',
      },
    ],
  },
  Lunit: {
    name: 'Lunit',
    tagline: 'IA médica para detección de cáncer en imagen radiológica y patología digital',
    intro:
      'Lunit es una empresa surcoreana de inteligencia artificial médica centrada en la detección precoz del cáncer. Sus productos analizan imágenes radiológicas, como mamografías y radiografías de tórax, y muestras de patología digital para ayudar a los profesionales a identificar lesiones sospechosas y a predecir la respuesta a determinados tratamientos oncológicos. Se dirige a hospitales, centros de cribado y compañías farmacéuticas.',
    useCases: [
      'Apoyar la lectura de mamografías en programas de cribado',
      'Detectar nódulos y anomalías en radiografía de tórax',
      'Analizar biomarcadores en muestras de patología digital',
      'Predecir respuesta a inmunoterapia en pacientes oncológicos',
      'Reducir la variabilidad entre lectores en cribado poblacional',
    ],
    features: [
      'Algoritmos de detección en mamografía y radiografía de tórax',
      'Análisis de patología digital y biomarcadores tumorales',
      'Integración con los sistemas de imagen del hospital',
      'Marcado visual de las regiones sospechosas',
      'Aprobaciones regulatorias en varios mercados',
    ],
    pros: [
      'Especialización clara en oncología y detección precoz',
      'Presencia en programas de cribado y validación clínica publicada',
      'Cubre tanto imagen radiológica como patología digital',
    ],
    cons: [
      'Solución institucional: no accesible para particulares',
      'Requiere integración técnica con los sistemas del hospital',
      'Herramienta de apoyo: el diagnóstico sigue siendo del médico',
    ],
    pricingNote:
      'Lunit es una solución de pago dirigida a instituciones sanitarias y farmacéuticas. No publica tarifas públicas: el precio se acuerda mediante contrato según los productos contratados y el volumen de estudios analizados.',
    faqs: [
      {
        question: '¿Qué es Lunit?',
        answer:
          'Lunit es una empresa surcoreana de inteligencia artificial médica centrada en la detección precoz del cáncer. Sus algoritmos analizan mamografías, radiografías de tórax y muestras de patología digital para ayudar a los profesionales a identificar lesiones sospechosas y biomarcadores relevantes.',
      },
      {
        question: '¿Para qué sirve Lunit?',
        answer:
          'Sirve como apoyo al diagnóstico oncológico: marca regiones sospechosas en imágenes radiológicas, ayuda en programas de cribado de cáncer de mama y pulmón, y analiza biomarcadores en patología digital para orientar decisiones de tratamiento, siempre bajo supervisión médica.',
      },
      {
        question: '¿Lunit es gratis?',
        answer:
          'No. Es una solución de pago dirigida a hospitales, centros de cribado y compañías farmacéuticas, sin versión gratuita ni acceso para particulares. El precio se acuerda por contrato según los productos y el volumen. Consulta su web para precios actualizados.',
      },
    ],
  },
  Enlitic: {
    name: 'Enlitic',
    tagline: 'IA que estandariza y enriquece los datos de imagen médica en hospitales',
    intro:
      'Enlitic es una compañía de inteligencia artificial aplicada a la imagen médica. Su enfoque se centra en analizar y estandarizar los datos de los estudios radiológicos (metadatos DICOM incluidos), corrigiendo etiquetados inconsistentes, anonimizando información sensible y facilitando que los departamentos de radiología organicen y aprovechen sus archivos de imagen. Está dirigida a hospitales y redes sanitarias que gestionan grandes volúmenes de estudios.',
    useCases: [
      'Estandarizar los metadatos DICOM de un archivo radiológico',
      'Anonimizar estudios de imagen para investigación o intercambio',
      'Corregir etiquetados inconsistentes entre distintos equipos',
      'Optimizar el almacenamiento y la migración de archivos PACS',
      'Preparar conjuntos de datos de imagen para entrenar modelos',
    ],
    features: [
      'Análisis y normalización de metadatos DICOM',
      'Anonimización automática de datos de paciente',
      'Integración con sistemas PACS y flujos radiológicos',
      'Herramientas de gestión y curación del archivo de imagen',
      'Preparación de datos para casos de uso de IA clínica',
    ],
    pros: [
      'Ataca un problema real y poco cubierto: la calidad del dato radiológico',
      'Facilita la interoperabilidad entre sistemas y equipos distintos',
      'Habilita proyectos posteriores de IA clínica sobre datos limpios',
    ],
    cons: [
      'Producto de nicho, orientado solo a departamentos de radiología',
      'No es una herramienta de diagnóstico directo al paciente',
      'Coste e implantación de nivel institucional',
    ],
    pricingNote:
      'Enlitic es una solución de pago con modelo empresarial dirigida a hospitales y redes sanitarias. No publica tarifas abiertas: el precio se negocia por contrato según el volumen de estudios y los módulos contratados, normalmente tras una demostración.',
    faqs: [
      {
        question: '¿Qué es Enlitic?',
        answer:
          'Enlitic es una compañía de inteligencia artificial para imagen médica centrada en la gestión del dato radiológico. Analiza y estandariza los metadatos de los estudios, anonimiza información sensible y ayuda a los hospitales a organizar y aprovechar su archivo de imágenes.',
      },
      {
        question: '¿Para qué sirve Enlitic?',
        answer:
          'Sirve para poner orden en el archivo de imagen de un hospital: corregir etiquetados inconsistentes, normalizar metadatos DICOM, anonimizar estudios y preparar los datos para su uso en investigación, intercambio entre centros o entrenamiento de modelos de IA clínica.',
      },
      {
        question: '¿Enlitic tiene versión gratuita?',
        answer:
          'No. Es una solución empresarial de pago dirigida a hospitales y redes sanitarias, sin plan gratuito ni acceso para particulares. El precio se acuerda por contrato en función del volumen de estudios y los módulos contratados. Consulta su web para precios actualizados.',
      },
    ],
  },
  'Ada Health': {
    name: 'Ada Health',
    tagline: 'Evaluador de síntomas con IA para orientar a pacientes antes de acudir al médico',
    intro:
      'Ada Health es una aplicación de evaluación de síntomas desarrollada por la empresa alemana Ada Health GmbH. Mediante un cuestionario conversacional, recoge los síntomas del usuario, su historial y sus factores de riesgo, y devuelve una lista de posibles causas junto con una recomendación sobre el nivel de atención que podría necesitar. Está pensada como apoyo informativo y de orientación previa, no como sustituto de un diagnóstico médico profesional.',
    useCases: [
      'Orientarte sobre posibles causas de un síntoma nuevo',
      'Decidir si conviene acudir a urgencias o esperar',
      'Preparar la consulta médica con un resumen de síntomas',
      'Hacer seguimiento de molestias recurrentes a lo largo del tiempo',
      'Ofrecer triaje inicial dentro de servicios de salud digital',
    ],
    features: [
      'Cuestionario conversacional adaptativo sobre síntomas',
      'Listado de posibles causas ordenadas por probabilidad',
      'Recomendación del nivel de atención sugerido',
      'Historial de evaluaciones guardadas en el perfil',
      'Aplicaciones móviles para iOS y Android',
    ],
    pros: [
      'Interfaz sencilla que guía paso a paso sin conocimientos médicos',
      'Base de conocimiento revisada por profesionales sanitarios',
      'Uso básico accesible sin coste para el usuario final',
      'Ayuda a estructurar los síntomas antes de hablar con un médico',
    ],
    cons: [
      'No emite diagnósticos ni sustituye la valoración de un profesional',
      'Los resultados dependen de la precisión con que describas los síntomas',
      'Las funciones avanzadas se orientan sobre todo a empresas y aseguradoras',
    ],
    pricingNote:
      'Ada Health sigue un modelo freemium: la evaluación de síntomas para particulares se ofrece sin coste en su aplicación, mientras que la monetización llega por acuerdos con sistemas sanitarios, aseguradoras y empresas. No hay tarifas públicas cerradas para el uso corporativo, que se negocia caso a caso.',
    faqs: [
      {
        question: '¿Qué es Ada Health?',
        answer:
          'Ada Health es una aplicación de evaluación de síntomas con inteligencia artificial. Te hace preguntas sobre lo que sientes y devuelve posibles causas y una orientación sobre si deberías consultar a un médico. Funciona como apoyo informativo previo, nunca como diagnóstico clínico.',
      },
      {
        question: '¿Ada Health es gratis?',
        answer:
          'El uso básico de la app para evaluar síntomas es gratuito para los usuarios particulares. La empresa obtiene ingresos principalmente a través de acuerdos con aseguradoras, sistemas sanitarios y compañías. Conviene revisar su web para conocer las condiciones vigentes en cada país.',
      },
      {
        question: '¿Ada Health está disponible en español?',
        answer:
          'Ada Health ofrece su aplicación en varios idiomas, incluido el español, aunque la disponibilidad de funciones concretas puede variar según el país. Lo más fiable es descargar la app y comprobar los idiomas soportados en la configuración antes de empezar la evaluación.',
      },
    ],
  },
  eMed: {
    name: 'eMed',
    tagline: 'Plataforma de salud digital con triaje y atención médica en remoto',
    intro:
      'eMed es una plataforma de salud digital que combina herramientas de orientación de síntomas con servicios de atención sanitaria a distancia, como consultas en remoto y pruebas supervisadas. Su enfoque es acompañar al paciente desde la primera duda hasta la derivación al profesional adecuado, integrando triaje asistido por tecnología con acceso a clínicos reales. Se dirige tanto a usuarios finales como a empresas y aseguradoras que quieren ofrecer servicios de salud digital.',
    useCases: [
      'Recibir una orientación inicial sobre síntomas antes de consultar',
      'Acceder a consultas médicas en remoto sin desplazarte',
      'Realizar pruebas de salud con supervisión a distancia',
      'Ofrecer servicios de telemedicina como beneficio para empleados',
      'Integrar triaje digital en un servicio sanitario existente',
    ],
    features: [
      'Cuestionario de síntomas para orientar la derivación',
      'Consultas con profesionales sanitarios en remoto',
      'Supervisión de pruebas de salud a distancia',
      'Aplicación móvil con seguimiento del historial',
      'Servicios pensados para empresas y aseguradoras',
    ],
    pros: [
      'Combina triaje digital con acceso a profesionales reales',
      'Evita desplazamientos para consultas y pruebas rutinarias',
      'Enfoque pensado tanto para particulares como para organizaciones',
      'Reduce el tiempo de espera frente a la vía presencial',
    ],
    cons: [
      'La disponibilidad de servicios clínicos varía mucho según el país',
      'Parte de la atención está sujeta a pago o a un plan corporativo',
      'No sustituye la atención presencial en casos urgentes o complejos',
    ],
    pricingNote:
      'eMed opera con un modelo freemium: algunas funciones de orientación pueden usarse sin coste, mientras que las consultas clínicas y las pruebas supervisadas se facturan por servicio o a través de un plan corporativo o de aseguradora. Los precios dependen del país y del tipo de servicio contratado.',
    faqs: [
      {
        question: '¿Qué es eMed?',
        answer:
          'eMed es una plataforma de salud digital que une orientación de síntomas con atención sanitaria en remoto. Permite hacer una evaluación inicial y, si procede, conectar con profesionales para consultas o pruebas supervisadas a distancia, sin necesidad de acudir a un centro.',
      },
      {
        question: '¿eMed es gratis?',
        answer:
          'eMed funciona con un modelo freemium. Algunas herramientas de orientación pueden estar disponibles sin coste, pero las consultas médicas y las pruebas supervisadas suelen ser de pago o estar cubiertas por un plan de empresa o aseguradora. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve eMed?',
        answer:
          'Sirve para orientarte cuando tienes síntomas y para acceder a atención sanitaria sin desplazarte. Ofrece triaje inicial, consultas en remoto y supervisión de pruebas, y también se comercializa como servicio para empresas y aseguradoras que quieren dar cobertura sanitaria digital.',
      },
    ],
  },
  'Buoy Health': {
    name: 'Buoy Health',
    tagline: 'Comprobador de síntomas con IA que orienta sobre el siguiente paso asistencial',
    intro:
      'Buoy Health es un comprobador de síntomas basado en inteligencia artificial creado por una empresa estadounidense del mismo nombre. A través de una conversación guiada, hace preguntas cada vez más concretas sobre lo que siente el usuario y ofrece posibles explicaciones junto con recomendaciones sobre qué hacer a continuación, desde el autocuidado hasta acudir a urgencias. Trabaja con sistemas sanitarios y empleadores que lo integran en sus servicios de atención.',
    useCases: [
      'Averiguar posibles causas de un síntoma concreto',
      'Saber si un problema requiere atención médica inmediata',
      'Orientar a empleados hacia el recurso sanitario adecuado',
      'Reducir visitas innecesarias a urgencias con un triaje previo',
      'Preparar información ordenada antes de una consulta',
    ],
    features: [
      'Entrevista conversacional que se adapta a tus respuestas',
      'Sugerencias de posibles causas con explicación asociada',
      'Recomendación del nivel de atención más adecuado',
      'Contenido clínico elaborado con profesionales sanitarios',
      'Integraciones para sistemas de salud y empleadores',
    ],
    pros: [
      'Uso gratuito y sin registro para el comprobador de síntomas',
      'Preguntas encadenadas que afinan bien la orientación',
      'Explicaciones claras y comprensibles para el usuario medio',
      'Enfoque práctico centrado en qué hacer a continuación',
    ],
    cons: [
      'Diseñado principalmente para el contexto sanitario estadounidense',
      'No emite diagnósticos ni sustituye la valoración médica',
      'La versión avanzada e integrable está orientada a organizaciones',
    ],
    pricingNote:
      'Buoy Health tiene un modelo freemium: el comprobador de síntomas es de uso gratuito para el público general, y los ingresos proceden de los acuerdos con sistemas sanitarios, aseguradoras y empresas que integran la herramienta. No publica tarifas cerradas para ese uso corporativo.',
    faqs: [
      {
        question: '¿Qué es Buoy Health?',
        answer:
          'Buoy Health es un comprobador de síntomas con inteligencia artificial. Mantiene una conversación guiada contigo, va afinando las preguntas según lo que respondes y sugiere posibles causas junto con una recomendación sobre el tipo de atención que podrías necesitar.',
      },
      {
        question: '¿Buoy Health es gratis?',
        answer:
          'Sí, el comprobador de síntomas para usuarios particulares se puede utilizar sin coste. La empresa monetiza su tecnología a través de acuerdos con sistemas sanitarios, aseguradoras y empleadores que la integran en sus propios servicios de atención.',
      },
      {
        question: '¿Buoy Health funciona en español?',
        answer:
          'Buoy Health se ha desarrollado principalmente en inglés y para el sistema sanitario de Estados Unidos, por lo que el soporte en español puede ser limitado o inexistente según la versión. Lo mejor es comprobar los idiomas disponibles directamente en su web.',
      },
    ],
  },
  'Your.MD': {
    name: 'Your.MD',
    tagline: 'Asistente de salud personal que orienta sobre síntomas y hábitos',
    intro:
      'Your.MD es un asistente de salud digital que ayuda a los usuarios a entender sus síntomas y a recibir orientación sobre cuidados y hábitos saludables. Combina un comprobador de síntomas conversacional con contenido de salud y recomendaciones personalizadas, con la idea de acompañar al usuario antes y después de la consulta médica. Está pensado como recurso informativo de acceso libre, no como herramienta de diagnóstico clínico.',
    useCases: [
      'Consultar posibles causas de un síntoma cotidiano',
      'Recibir orientación sobre cuándo acudir al médico',
      'Informarte sobre una condición de salud concreta',
      'Seguir recomendaciones de hábitos y autocuidado',
      'Resolver dudas de salud sin coste desde el móvil',
    ],
    features: [
      'Comprobador de síntomas en formato conversacional',
      'Biblioteca de contenidos de salud contrastados',
      'Recomendaciones personalizadas según el perfil',
      'Aplicación móvil de acceso gratuito',
      'Orientación sobre el siguiente paso asistencial',
    ],
    pros: [
      'Acceso gratuito sin barreras para el usuario final',
      'Interfaz conversacional fácil de usar en el móvil',
      'Combina orientación de síntomas con contenido educativo',
      'Útil para resolver dudas menores sin saturar la consulta',
    ],
    cons: [
      'No sustituye el criterio de un profesional sanitario',
      'La cobertura de condiciones y el idioma pueden ser limitados',
      'La disponibilidad del servicio ha variado con el tiempo',
    ],
    pricingNote:
      'Your.MD se ha ofrecido como servicio gratuito para el usuario final, sin coste por consultar síntomas ni acceder a sus contenidos de salud. El modelo de negocio se apoya en acuerdos con terceros del sector sanitario más que en suscripciones de particulares.',
    faqs: [
      {
        question: '¿Qué es Your.MD?',
        answer:
          'Your.MD es un asistente de salud digital que permite describir síntomas en una conversación y recibir orientación sobre posibles causas, cuidados y cuándo acudir al médico. Incluye además contenidos de salud y recomendaciones de hábitos, siempre con carácter informativo.',
      },
      {
        question: '¿Your.MD es gratis?',
        answer:
          'Sí, Your.MD se ha ofrecido de forma gratuita para los usuarios particulares, tanto para el comprobador de síntomas como para sus contenidos de salud. Aun así, conviene revisar su web para confirmar la disponibilidad del servicio y las condiciones vigentes.',
      },
      {
        question: '¿Para qué sirve Your.MD?',
        answer:
          'Sirve para orientarte cuando no sabes si un síntoma requiere atención médica. Te ayuda a ordenar lo que sientes, te da posibles explicaciones y te sugiere el siguiente paso, además de ofrecerte información fiable sobre salud y autocuidado.',
      },
    ],
  },
  AlphaFold: {
    name: 'AlphaFold',
    tagline: 'IA de DeepMind que predice la estructura tridimensional de las proteínas',
    intro:
      'AlphaFold es un sistema de inteligencia artificial desarrollado por Google DeepMind que predice la estructura tridimensional de las proteínas a partir de su secuencia de aminoácidos. Su irrupción supuso un avance notable en biología estructural, un problema que llevaba décadas abierto. Los investigadores lo utilizan para estudiar proteínas, entender enfermedades y acelerar fases tempranas del descubrimiento de fármacos, apoyándose además en una base de datos pública de estructuras predichas.',
    useCases: [
      'Predecir la estructura de una proteína a partir de su secuencia',
      'Acelerar fases tempranas del descubrimiento de fármacos',
      'Estudiar el efecto estructural de mutaciones en proteínas',
      'Apoyar el diseño de enzimas y proteínas de interés industrial',
      'Consultar estructuras ya predichas en su base de datos pública',
    ],
    features: [
      'Predicción de estructura proteica desde la secuencia',
      'Puntuaciones de confianza asociadas a cada predicción',
      'Base de datos pública con millones de estructuras',
      'Código de referencia disponible para la comunidad científica',
      'Predicción de interacciones entre proteínas y otras moléculas',
    ],
    pros: [
      'Precisión muy alta en muchas predicciones de estructura',
      'Base de datos abierta y gratuita para investigación',
      'Ahorra meses de trabajo experimental de laboratorio',
      'Amplia adopción y validación en la comunidad científica',
    ],
    cons: [
      'Requiere conocimientos de bioinformática para sacarle partido',
      'Las predicciones no siempre sustituyen la validación experimental',
      'El uso comercial puede estar sujeto a licencias específicas',
    ],
    pricingNote:
      'AlphaFold y su base de datos de estructuras se ofrecen de forma gratuita para la comunidad investigadora, con acceso abierto a las predicciones publicadas. Algunas versiones y aplicaciones comerciales pueden estar sujetas a licencias o condiciones de uso concretas. Consulta su web para conocer los términos actualizados antes de un uso profesional.',
    faqs: [
      {
        question: '¿Qué es AlphaFold?',
        answer:
          'AlphaFold es un sistema de inteligencia artificial de Google DeepMind que predice cómo se pliega una proteína en tres dimensiones a partir de su secuencia de aminoácidos. Resolvió en buena medida un problema clásico de la biología estructural y hoy es una herramienta habitual en investigación.',
      },
      {
        question: '¿AlphaFold es gratis?',
        answer:
          'Sí, tanto el acceso a la base de datos de estructuras predichas como el uso con fines de investigación son gratuitos. Determinadas versiones o aplicaciones comerciales pueden requerir licencias específicas, así que conviene revisar las condiciones publicadas en su web.',
      },
      {
        question: '¿Para qué sirve AlphaFold?',
        answer:
          'Sirve para conocer la forma tridimensional de una proteína sin necesidad de experimentos costosos. Se usa en investigación biomédica, estudio de enfermedades, diseño de fármacos y biotecnología, ya que la estructura de una proteína ayuda a entender cómo funciona e interactúa.',
      },
    ],
  },
  AlphaMissense: {
    name: 'AlphaMissense',
    tagline: 'Modelo de IA que estima el impacto patogénico de mutaciones genéticas',
    intro:
      'AlphaMissense es un modelo de inteligencia artificial desarrollado por Google DeepMind para clasificar variantes de tipo missense, es decir, mutaciones que cambian un aminoácido en una proteína. Estima la probabilidad de que una variante sea benigna o potencialmente patogénica, lo que ayuda a priorizar cuáles merecen estudio en genética clínica e investigación biomédica. Sus predicciones se han publicado como recurso abierto para la comunidad científica.',
    useCases: [
      'Priorizar variantes genéticas candidatas en un estudio',
      'Apoyar la interpretación de variantes de significado incierto',
      'Investigar la base genética de enfermedades raras',
      'Complementar pipelines de análisis genómico existentes',
      'Estudiar el efecto de mutaciones sobre proteínas concretas',
    ],
    features: [
      'Clasificación de variantes missense como benignas o patogénicas',
      'Puntuación de patogenicidad asociada a cada variante',
      'Catálogo abierto de predicciones para el proteoma humano',
      'Aprovecha el conocimiento estructural de proteínas',
      'Recurso pensado para integrarse en flujos de investigación',
    ],
    pros: [
      'Predicciones publicadas de forma abierta y gratuita',
      'Cubre un volumen muy amplio de variantes posibles',
      'Ayuda a reducir el número de variantes a estudiar manualmente',
      'Respaldo científico y publicación revisada por pares',
    ],
    cons: [
      'No es una herramienta de diagnóstico clínico por sí sola',
      'Requiere perfil técnico en genómica o bioinformática',
      'Sus predicciones deben validarse con evidencia adicional',
    ],
    pricingNote:
      'AlphaMissense se ha liberado como recurso gratuito para la comunidad investigadora, con acceso abierto a su catálogo de predicciones. No funciona como producto comercial con planes de suscripción, aunque determinados usos pueden estar sujetos a condiciones de licencia.',
    faqs: [
      {
        question: '¿Qué es AlphaMissense?',
        answer:
          'AlphaMissense es un modelo de inteligencia artificial de Google DeepMind que evalúa mutaciones missense y estima si son probablemente benignas o patogénicas. Se utiliza en investigación genética para priorizar qué variantes merecen un análisis más profundo.',
      },
      {
        question: '¿AlphaMissense es gratis?',
        answer:
          'Sí, sus predicciones se han publicado como recurso abierto y gratuito para la comunidad científica. No se comercializa con planes de pago, aunque algunos usos concretos pueden estar sujetos a condiciones de licencia que conviene revisar en la documentación oficial.',
      },
      {
        question: '¿Para qué sirve AlphaMissense?',
        answer:
          'Sirve para interpretar variantes genéticas cuyo efecto se desconoce. Al estimar la probabilidad de que una mutación sea dañina, ayuda a investigadores y laboratorios a centrar el esfuerzo en las variantes más relevantes, siempre como apoyo y no como diagnóstico definitivo.',
      },
    ],
  },
  BenevolentAI: {
    name: 'BenevolentAI',
    tagline:
      'Plataforma de IA para descubrimiento de fármacos dirigida a la industria biofarmacéutica',
    intro:
      'BenevolentAI es una compañía de descubrimiento de fármacos que aplica inteligencia artificial al análisis de literatura científica, datos biomédicos y experimentos para identificar nuevas dianas terapéuticas. Su plataforma integra grandes volúmenes de información biológica en un grafo de conocimiento que los científicos consultan para generar y priorizar hipótesis. Trabaja con farmacéuticas y equipos de investigación, no como herramienta de consumo general.',
    useCases: [
      'Identificar nuevas dianas terapéuticas para una enfermedad',
      'Reposicionar fármacos existentes hacia otras indicaciones',
      'Explorar relaciones biológicas en grandes volúmenes de literatura',
      'Priorizar hipótesis de investigación antes de pasar al laboratorio',
      'Apoyar programas de I+D en compañías farmacéuticas',
    ],
    features: [
      'Grafo de conocimiento biomédico a gran escala',
      'Extracción de relaciones a partir de literatura científica',
      'Modelos de IA para priorizar dianas terapéuticas',
      'Herramientas de exploración para equipos científicos',
      'Colaboraciones con compañías farmacéuticas',
    ],
    pros: [
      'Integra fuentes biomédicas muy dispersas en un único modelo',
      'Reduce el tiempo de las fases tempranas de descubrimiento',
      'Equipo con experiencia real en programas de I+D farmacéutica',
      'Enfoque basado en evidencia y trazabilidad de las hipótesis',
    ],
    cons: [
      'No está pensada para usuarios individuales ni uso casual',
      'Requiere perfiles científicos especializados para aprovecharla',
      'Precios no públicos y orientados a acuerdos corporativos',
    ],
    pricingNote:
      'BenevolentAI es un producto de pago dirigido a la industria biofarmacéutica y a organizaciones de investigación, sin plan gratuito ni autoservicio. El acceso suele articularse mediante licencias de plataforma o acuerdos de colaboración negociados caso a caso. No publica tarifas cerradas;',
    faqs: [
      {
        question: '¿Qué es BenevolentAI?',
        answer:
          'BenevolentAI es una compañía que aplica inteligencia artificial al descubrimiento de fármacos. Su plataforma organiza datos biomédicos y literatura científica en un grafo de conocimiento que ayuda a los investigadores a encontrar y priorizar nuevas dianas terapéuticas.',
      },
      {
        question: '¿BenevolentAI es gratis?',
        answer:
          'No. Es una solución de pago orientada a empresas farmacéuticas y centros de investigación, con acceso mediante licencias o acuerdos de colaboración. No ofrece un plan gratuito ni registro abierto para particulares. Consulta su web para solicitar precios actualizados.',
      },
      {
        question: '¿Para qué sirve BenevolentAI?',
        answer:
          'Sirve para acelerar las fases iniciales de la investigación de medicamentos. Permite explorar relaciones entre genes, enfermedades y compuestos a partir de enormes volúmenes de datos, generando hipótesis que después se validan experimentalmente en el laboratorio.',
      },
    ],
  },
  Khanmigo: {
    name: 'Khanmigo',
    tagline: 'Tutor virtual de Khan Academy para estudiantes y docentes de cualquier nivel',
    intro:
      'Khanmigo es el asistente de inteligencia artificial desarrollado por Khan Academy, la organización educativa sin ánimo de lucro. Actúa como tutor virtual que guía al estudiante con preguntas en lugar de darle la respuesta directamente, y como apoyo para el profesorado en la preparación de clases y materiales. Está integrado en la propia plataforma de Khan Academy y cubre materias como matemáticas, ciencias o humanidades.',
    useCases: [
      'Resolver dudas de matemáticas paso a paso sin copiar la respuesta',
      'Practicar comprensión lectora conversando sobre un texto',
      'Preparar planes de clase y actividades como docente',
      'Repasar una materia con explicaciones adaptadas al nivel',
      'Ayudar a los alumnos a estudiar de forma autónoma en casa',
    ],
    features: [
      'Tutor conversacional que guía mediante preguntas socráticas',
      'Integración con los ejercicios y vídeos de Khan Academy',
      'Herramientas específicas para el profesorado',
      'Apoyo en varias materias y niveles educativos',
      'Controles pensados para entornos escolares y familiares',
    ],
    pros: [
      'Enfoque pedagógico que evita dar la respuesta hecha',
      'Respaldo de una organización educativa consolidada',
      'Integrado en un catálogo de contenidos ya existente',
      'Acceso sin coste para docentes en muchos casos',
    ],
    cons: [
      'La disponibilidad puede estar limitada por país o cuenta',
      'El contenido está más desarrollado en inglés que en español',
      'Puede cometer errores en explicaciones complejas y conviene revisarlas',
    ],
    pricingNote:
      'Khanmigo se ofrece de forma gratuita para el profesorado y, en el caso de familias y distritos escolares, ha existido una suscripción de bajo coste destinada a cubrir gastos de funcionamiento. Al tratarse de una organización sin ánimo de lucro, las condiciones pueden variar por región.',
    faqs: [
      {
        question: '¿Qué es Khanmigo?',
        answer:
          'Khanmigo es el tutor virtual con inteligencia artificial de Khan Academy. Acompaña al estudiante haciéndole preguntas para que llegue por sí mismo a la solución, y ofrece al profesorado ayuda para preparar clases, actividades y materiales didácticos.',
      },
      {
        question: '¿Khanmigo es gratis?',
        answer:
          'Para el profesorado se ofrece sin coste en muchos territorios, mientras que para familias ha existido una suscripción muy asequible que ayuda a sostener el proyecto. Al ser una entidad sin ánimo de lucro, conviene revisar las condiciones vigentes en su web.',
      },
      {
        question: '¿Khanmigo funciona en español?',
        answer:
          'Khan Academy dispone de contenidos en español y trabaja en ampliar el soporte multilingüe de Khanmigo, aunque la experiencia suele estar más pulida en inglés. Comprueba en tu cuenta qué idiomas y materias están disponibles en tu país.',
      },
    ],
  },
  Socratic: {
    name: 'Socratic',
    tagline: 'App de Google que resuelve dudas escolares a partir de una foto',
    intro:
      'Socratic es una aplicación educativa de Google que ayuda a estudiantes de secundaria y bachillerato a entender sus deberes. Basta con fotografiar un ejercicio o escribir una pregunta para que la app localice explicaciones, vídeos y recursos relacionados con el concepto que hay detrás. En lugar de limitarse a dar el resultado, prioriza los materiales que ayudan a comprender el tema.',
    useCases: [
      'Entender un ejercicio de matemáticas fotografiándolo con el móvil',
      'Buscar explicaciones sobre un concepto de ciencias',
      'Repasar una materia con vídeos y recursos seleccionados',
      'Resolver dudas puntuales mientras se hacen los deberes',
      'Preparar un examen revisando conceptos clave',
    ],
    features: [
      'Reconocimiento de ejercicios a partir de una foto',
      'Búsqueda por escritura o por voz',
      'Explicaciones y recursos organizados por concepto',
      'Cobertura de varias asignaturas escolares',
      'Aplicación móvil gratuita para iOS y Android',
    ],
    pros: [
      'Totalmente gratuita y sin publicidad intrusiva',
      'Muy rápida de usar: fotografiar y obtener recursos',
      'Enfoque en comprender el concepto, no solo en el resultado',
      'Respaldada por Google y con interfaz sencilla',
    ],
    cons: [
      'Cobertura limitada en materias muy avanzadas o especializadas',
      'El contenido está orientado sobre todo al currículo en inglés',
      'El reconocimiento por foto falla con la letra poco legible',
    ],
    pricingNote:
      'Socratic es una aplicación completamente gratuita: no tiene suscripciones, compras dentro de la app ni versión de pago. Google la mantiene como herramienta educativa dentro de su ecosistema. Conviene comprobar en su web o en las tiendas de aplicaciones la disponibilidad actual en tu país.',
    faqs: [
      {
        question: '¿Qué es Socratic?',
        answer:
          'Socratic es una app educativa de Google que resuelve dudas escolares. Haces una foto al ejercicio o escribes la pregunta y la aplicación te devuelve explicaciones, vídeos y recursos que te ayudan a entender el concepto que necesitas.',
      },
      {
        question: '¿Socratic es gratis?',
        answer:
          'Sí, Socratic es totalmente gratuita. No incluye suscripciones ni compras dentro de la aplicación. Solo necesitas descargarla en tu móvil para empezar a usarla, aunque su disponibilidad puede variar según el país y la tienda de aplicaciones.',
      },
      {
        question: '¿Socratic funciona en español?',
        answer:
          'La app admite consultas en varios idiomas, pero buena parte de sus recursos y explicaciones están en inglés, ya que se creó pensando en el currículo estadounidense. En español la cobertura es más limitada, sobre todo en materias avanzadas.',
      },
    ],
  },
  'Scribe AI': {
    name: 'Scribe AI',
    tagline: 'Generador de guías paso a paso que documenta procesos mientras trabajas',
    intro:
      'Scribe AI es la capa de inteligencia artificial de Scribe, una herramienta que graba lo que haces en pantalla y lo convierte automáticamente en una guía paso a paso con capturas y texto. Su IA redacta títulos, descripciones y contexto, y permite generar documentación más completa a partir de las capturas recogidas. Se utiliza sobre todo para formación, onboarding y documentación de procesos internos.',
    useCases: [
      'Documentar un proceso interno sin escribirlo manualmente',
      'Crear material de formación para nuevos empleados',
      'Generar tutoriales de uso de una herramienta o software',
      'Preparar guías de soporte para clientes',
      'Estandarizar procedimientos operativos dentro de un equipo',
    ],
    features: [
      'Captura automática de pasos mientras usas la pantalla',
      'Generación de texto y títulos descriptivos con IA',
      'Difuminado automático de datos sensibles en las capturas',
      'Exportación a PDF, HTML y otros formatos',
      'Extensión de navegador y aplicación de escritorio',
    ],
    pros: [
      'Ahorra mucho tiempo frente a documentar procesos a mano',
      'Las guías quedan visuales y fáciles de seguir',
      'Función de ocultación de datos sensibles muy útil en empresa',
      'Curva de aprendizaje mínima para cualquier usuario',
    ],
    cons: [
      'Las funciones de IA y equipo están en los planes de pago',
      'El texto generado suele necesitar revisión y ajustes',
      'El plan gratuito tiene límites en captura y personalización',
    ],
    pricingNote:
      'Scribe funciona con un modelo freemium: hay un plan gratuito con funciones básicas de captura y creación de guías, y planes de pago para profesionales y equipos que añaden IA avanzada, difuminado automático y controles de administración. Los planes de pago suelen partir de unos 20 $ por usuario y mes.',
    faqs: [
      {
        question: '¿Qué es Scribe AI?',
        answer:
          'Scribe AI es la funcionalidad de inteligencia artificial de Scribe, una herramienta que graba tus acciones en pantalla y las convierte en una guía paso a paso con capturas y texto. La IA se encarga de redactar títulos, descripciones y documentación complementaria.',
      },
      {
        question: '¿Scribe AI es gratis?',
        answer:
          'Scribe tiene un plan gratuito que permite crear guías básicas, pero las funciones de IA más avanzadas, el difuminado automático y las opciones de equipo están reservadas a los planes de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Scribe AI?',
        answer:
          'Sirve para documentar procesos sin esfuerzo manual. Es útil en formación, onboarding, soporte y creación de procedimientos internos: haces el proceso una vez, la herramienta lo captura y genera un tutorial listo para compartir con el equipo.',
      },
    ],
  },
  'MagicSchool AI': {
    name: 'MagicSchool AI',
    tagline: 'Suite de herramientas de IA para docentes que ahorran tiempo de preparación',
    intro:
      'MagicSchool AI es una plataforma con decenas de herramientas de inteligencia artificial pensadas específicamente para el profesorado. Permite generar planes de clase, rúbricas, cuestionarios, informes, adaptaciones curriculares o comunicaciones con familias a partir de indicaciones sencillas. También ofrece un espacio para estudiantes supervisado por el docente, con el objetivo de reducir la carga administrativa y liberar tiempo de aula.',
    useCases: [
      'Generar planes de clase adaptados a un curso concreto',
      'Crear rúbricas de evaluación en pocos minutos',
      'Redactar comunicaciones y correos para las familias',
      'Adaptar materiales al nivel de cada alumno',
      'Diseñar actividades y preguntas de comprensión',
    ],
    features: [
      'Catálogo amplio de herramientas específicas para docentes',
      'Generación de planes de clase, rúbricas y cuestionarios',
      'Adaptación de textos a distintos niveles de lectura',
      'Espacio para estudiantes con supervisión del profesor',
      'Controles de privacidad orientados al entorno escolar',
    ],
    pros: [
      'Herramientas muy concretas y directamente aplicables al aula',
      'Ahorra tiempo real en tareas administrativas repetitivas',
      'Plan gratuito bastante completo para uso individual',
      'Interfaz sencilla, sin necesidad de saber escribir prompts',
    ],
    cons: [
      'Los materiales generados requieren revisión pedagógica',
      'Orientado principalmente al sistema educativo estadounidense',
      'Las funciones de centro y administración son de pago',
    ],
    pricingNote:
      'MagicSchool AI sigue un modelo freemium: ofrece un plan gratuito para docentes con acceso a buena parte de sus herramientas y planes de pago con más funciones, capacidad y administración para centros o distritos. Las tarifas dependen del número de usuarios.',
    faqs: [
      {
        question: '¿Qué es MagicSchool AI?',
        answer:
          'MagicSchool AI es una plataforma con múltiples herramientas de inteligencia artificial diseñadas para docentes. Ayuda a generar planes de clase, rúbricas, cuestionarios, adaptaciones de textos y comunicaciones, con el objetivo de reducir el tiempo dedicado a tareas administrativas.',
      },
      {
        question: '¿MagicSchool AI es gratis?',
        answer:
          'Dispone de un plan gratuito bastante generoso para docentes individuales, con acceso a la mayoría de herramientas. Los planes de pago añaden funciones avanzadas, gestión de centro y mayor capacidad. Consulta su web para precios actualizados.',
      },
      {
        question: '¿MagicSchool AI funciona en español?',
        answer:
          'La plataforma permite generar contenidos en varios idiomas, incluido el español, aunque la interfaz y muchos recursos están pensados para el contexto educativo en inglés. El resultado en español suele ser correcto, pero conviene revisarlo antes de llevarlo al aula.',
      },
    ],
  },
  Grammarly: {
    name: 'Grammarly',
    tagline: 'Asistente de escritura con IA que corrige gramática, estilo y tono',
    intro:
      'Grammarly es un asistente de escritura basado en inteligencia artificial que revisa textos en inglés y sugiere correcciones de gramática, ortografía, puntuación, claridad y tono. Funciona como extensión de navegador, aplicación de escritorio y teclado móvil, integrándose en correo, documentos y redes sociales. Lo utilizan estudiantes, profesionales y equipos que quieren mejorar la calidad y la consistencia de sus textos.',
    useCases: [
      'Corregir correos y documentos profesionales en inglés',
      'Mejorar la claridad y concisión de un texto largo',
      'Ajustar el tono de un mensaje según el destinatario',
      'Revisar trabajos académicos antes de entregarlos',
      'Mantener un estilo homogéneo dentro de un equipo',
    ],
    features: [
      'Corrección de gramática, ortografía y puntuación',
      'Sugerencias de claridad, concisión y tono',
      'Extensión de navegador y aplicaciones de escritorio y móvil',
      'Detector de tono y reescritura de frases',
      'Guías de estilo y funciones de equipo en los planes superiores',
    ],
    pros: [
      'Se integra en casi cualquier sitio donde escribas',
      'Detecta errores sutiles que un corrector normal pasa por alto',
      'Plan gratuito suficiente para correcciones básicas',
      'Interfaz clara con explicaciones de cada sugerencia',
    ],
    cons: [
      'Su corrección está centrada en el inglés, no en español',
      'Las funciones más útiles requieren suscripción de pago',
      'Puede sugerir cambios que alteran el estilo propio del autor',
    ],
    pricingNote:
      'Grammarly funciona con un modelo freemium: el plan gratuito cubre correcciones básicas de gramática y ortografía, mientras que los planes de pago añaden sugerencias de estilo, tono y funciones avanzadas de IA. Las suscripciones individuales suelen rondar los 12-30 $ al mes según la modalidad, y existen planes por equipo.',
    faqs: [
      {
        question: '¿Qué es Grammarly?',
        answer:
          'Grammarly es un asistente de escritura con inteligencia artificial que revisa tus textos y sugiere correcciones de gramática, ortografía, claridad y tono. Se integra en el navegador, el escritorio y el móvil, de modo que corrige mientras escribes en cualquier aplicación.',
      },
      {
        question: '¿Grammarly es gratis?',
        answer:
          'Tiene una versión gratuita que corrige gramática, ortografía y puntuación básicas. Las sugerencias de estilo, tono, reescritura y las funciones para equipos pertenecen a los planes de pago. Consulta su web para conocer los precios actualizados.',
      },
      {
        question: '¿Grammarly funciona en español?',
        answer:
          'La corrección de Grammarly está diseñada para el inglés, así que no revisa textos en español con la misma calidad. Si escribes en español, es preferible recurrir a correctores específicos; Grammarly resulta útil sobre todo cuando redactas en inglés.',
      },
    ],
  },
  Writable: {
    name: 'Writable',
    tagline: 'Plataforma de escritura escolar con feedback asistido por IA',
    intro:
      'Writable es una plataforma educativa centrada en la escritura que ayuda al profesorado a asignar tareas de redacción y a devolver feedback de forma más rápida. Sus funciones de inteligencia artificial generan comentarios y puntuaciones preliminares que el docente revisa y ajusta antes de enviarlos al alumno. Está pensada para centros escolares que quieren aumentar la práctica de escritura sin disparar la carga de corrección.',
    useCases: [
      'Asignar tareas de escritura a un grupo de alumnos',
      'Generar feedback preliminar sobre una redacción',
      'Puntuar textos con rúbricas de forma más rápida',
      'Hacer seguimiento del progreso escritor de la clase',
      'Aumentar la frecuencia de práctica de escritura en el aula',
    ],
    features: [
      'Feedback asistido por IA revisado por el docente',
      'Rúbricas y puntuación alineadas con estándares',
      'Banco de tareas de escritura preparadas',
      'Panel de seguimiento del progreso del alumnado',
      'Integración con plataformas educativas habituales',
    ],
    pros: [
      'Reduce mucho el tiempo de corrección de redacciones',
      'El docente mantiene el control final sobre el feedback',
      'Facilita practicar escritura con más frecuencia',
      'Se integra con los sistemas de gestión de aula habituales',
    ],
    cons: [
      'Diseñada para escritura en inglés y currículo estadounidense',
      'El feedback automático necesita siempre supervisión docente',
      'Las funciones completas requieren licencia de centro',
    ],
    pricingNote:
      'Writable opera con un modelo freemium: existe acceso gratuito con funciones limitadas para docentes y licencias de pago para centros y distritos que amplían el alcance, la integración y la administración. Las tarifas se negocian según el número de alumnos.',
    faqs: [
      {
        question: '¿Qué es Writable?',
        answer:
          'Writable es una plataforma educativa de escritura que permite al profesorado asignar redacciones y devolver feedback con ayuda de inteligencia artificial. La IA propone comentarios y puntuaciones, y el docente los revisa antes de compartirlos con el alumnado.',
      },
      {
        question: '¿Writable es gratis?',
        answer:
          'Ofrece un acceso gratuito con funciones limitadas para docentes, mientras que el uso completo suele requerir una licencia de centro o distrito. El precio depende del número de alumnos y de las integraciones necesarias. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Writable?',
        answer:
          'Sirve para que los alumnos practiquen escritura con más frecuencia sin que el profesor se colapse corrigiendo. Automatiza la primera capa de feedback y puntuación con rúbricas, dejando al docente la revisión final y el acompañamiento pedagógico.',
      },
    ],
  },
  Eduaide: {
    name: 'Eduaide',
    tagline: 'Asistente de IA para docentes que genera recursos y feedback de clase',
    intro:
      'Eduaide es una herramienta de inteligencia artificial dirigida al profesorado que ayuda a diseñar recursos didácticos, actividades, cuestionarios y feedback para el alumnado. Ofrece un catálogo amplio de tipos de recurso y un espacio de trabajo donde editar y refinar lo generado antes de llevarlo al aula. Su objetivo es reducir el tiempo de preparación manteniendo el criterio pedagógico del docente.',
    useCases: [
      'Generar actividades y recursos para una unidad didáctica',
      'Crear cuestionarios y preguntas de comprensión',
      'Redactar feedback personalizado para el alumnado',
      'Diseñar planes de clase alineados con objetivos concretos',
      'Adaptar materiales a distintos niveles del grupo',
    ],
    features: [
      'Catálogo amplio de tipos de recurso didáctico',
      'Espacio de trabajo para editar lo generado',
      'Generación de feedback y comentarios de evaluación',
      'Soporte para varios idiomas en la generación',
      'Exportación de materiales a formatos habituales',
    ],
    pros: [
      'Gran variedad de recursos generables desde un mismo sitio',
      'Permite editar y refinar antes de usar el material',
      'Plan gratuito útil para probar el flujo de trabajo',
      'Pensado desde el principio para el contexto docente',
    ],
    cons: [
      'El material generado siempre requiere revisión previa',
      'El plan gratuito limita el número de generaciones',
      'La calidad en español puede ser inferior a la del inglés',
    ],
    pricingNote:
      'Eduaide sigue un modelo freemium: dispone de un plan gratuito con un número limitado de generaciones y planes de pago con uso ampliado y funciones adicionales. Las suscripciones individuales para docentes suelen situarse en una franja asequible mensual o anual.',
    faqs: [
      {
        question: '¿Qué es Eduaide?',
        answer:
          'Eduaide es un asistente de inteligencia artificial para docentes que genera recursos didácticos, actividades, cuestionarios, planes de clase y feedback. Incluye un espacio de edición para ajustar el contenido generado antes de utilizarlo con los alumnos.',
      },
      {
        question: '¿Eduaide es gratis?',
        answer:
          'Tiene un plan gratuito con un número limitado de generaciones, suficiente para probarlo. Para un uso intensivo hay planes de pago que amplían el límite y añaden funciones. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Eduaide funciona en español?',
        answer:
          'Permite generar contenidos en varios idiomas, incluido el español, aunque la herramienta se desarrolló pensando sobre todo en el inglés. Los resultados en español suelen ser correctos, pero es recomendable revisarlos antes de utilizarlos en clase.',
      },
    ],
  },
  Quizlet: {
    name: 'Quizlet',
    tagline: 'Plataforma de estudio con fichas y generación de exámenes de práctica con IA',
    intro:
      'Quizlet es una plataforma de estudio muy extendida entre estudiantes, conocida por sus fichas de memorización y sus modos de repaso. Sus funciones de inteligencia artificial permiten generar exámenes de práctica y preguntas a partir de tus apuntes o de un conjunto de fichas existente, adaptando el repaso a lo que peor dominas. Se usa sobre todo para preparar exámenes y consolidar vocabulario y conceptos.',
    useCases: [
      'Generar un examen de práctica a partir de tus apuntes',
      'Memorizar vocabulario de un idioma con fichas',
      'Repasar conceptos antes de un examen',
      'Convertir material de clase en preguntas de repaso',
      'Estudiar con repetición espaciada centrada en tus fallos',
    ],
    features: [
      'Fichas de estudio creables o importables',
      'Generación de exámenes de práctica con IA',
      'Modos de repaso y juegos de memorización',
      'Biblioteca enorme de conjuntos creados por usuarios',
      'Aplicaciones móviles con sincronización',
    ],
    pros: [
      'Muy fácil de usar y con una comunidad enorme de contenidos',
      'Los exámenes de práctica ahorran tiempo de preparación',
      'Funciona bien tanto en móvil como en escritorio',
      'Plan gratuito suficiente para estudiar con fichas',
    ],
    cons: [
      'Las funciones de IA más potentes están en el plan de pago',
      'El contenido creado por usuarios puede tener errores',
      'La versión gratuita muestra publicidad y tiene límites',
    ],
    pricingNote:
      'Quizlet funciona con un modelo freemium: puedes crear y estudiar fichas gratis, mientras que las funciones avanzadas de IA, los exámenes de práctica ilimitados y la experiencia sin anuncios pertenecen a la suscripción de pago. Los planes individuales suelen rondar unos pocos euros al mes en su modalidad anual.',
    faqs: [
      {
        question: '¿Qué es Quizlet?',
        answer:
          'Quizlet es una plataforma de estudio basada en fichas de memorización que incorpora funciones de inteligencia artificial. Permite crear o importar material, generar exámenes de práctica y repasar con distintos modos adaptados a lo que peor dominas.',
      },
      {
        question: '¿Quizlet es gratis?',
        answer:
          'Sí, se puede usar gratis para crear y estudiar fichas, con publicidad y algunas limitaciones. El generador de exámenes de práctica y otras funciones de IA están asociadas a la suscripción de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Quizlet funciona en español?',
        answer:
          'Sí, Quizlet está disponible en español y permite estudiar y generar material en este idioma. Existe además una gran cantidad de conjuntos de fichas creados por usuarios hispanohablantes, aunque conviene revisar su calidad antes de fiarte de ellos.',
      },
    ],
  },
  QuestionWell: {
    name: 'QuestionWell',
    tagline: 'Generador de preguntas y exámenes a partir de cualquier texto o recurso',
    intro:
      'QuestionWell es una herramienta de inteligencia artificial que genera preguntas de comprensión, cuestionarios y exámenes a partir de un texto, un artículo o un recurso que le proporciones. Está pensada para docentes que quieren evaluar la comprensión lectora o los contenidos de una unidad sin tener que redactar las preguntas una a una. Permite exportar el resultado a otras plataformas de evaluación.',
    useCases: [
      'Generar preguntas de comprensión sobre un texto de clase',
      'Crear un cuestionario a partir de un artículo o lectura',
      'Preparar exámenes de repaso de una unidad',
      'Producir preguntas alineadas con objetivos de aprendizaje',
      'Exportar cuestionarios a plataformas de evaluación externas',
    ],
    features: [
      'Generación de preguntas a partir de texto o enlaces',
      'Preguntas esenciales y objetivos de aprendizaje',
      'Distintos formatos de pregunta, incluida la opción múltiple',
      'Exportación a herramientas de cuestionarios habituales',
      'Ajuste del nivel y la dificultad de las preguntas',
    ],
    pros: [
      'Muy rápido para convertir un texto en un cuestionario',
      'Se integra con plataformas de evaluación conocidas',
      'Permite ajustar dificultad y tipo de pregunta',
      'Interfaz simple, sin curva de aprendizaje',
    ],
    cons: [
      'Las preguntas generadas requieren revisión del docente',
      'El plan gratuito limita el volumen de generaciones',
      'La calidad depende mucho del texto de partida',
    ],
    pricingNote:
      'QuestionWell es freemium: ofrece un plan gratuito con un número limitado de generaciones al mes y planes de pago para docentes o centros que amplían el uso y añaden funciones. Los precios individuales se sitúan en una franja asequible mensual o anual.',
    faqs: [
      {
        question: '¿Qué es QuestionWell?',
        answer:
          'QuestionWell es una herramienta de inteligencia artificial que convierte un texto, artículo o recurso en preguntas de comprensión y cuestionarios. Está pensada para docentes que necesitan evaluar contenidos sin redactar cada pregunta manualmente.',
      },
      {
        question: '¿QuestionWell es gratis?',
        answer:
          'Dispone de un plan gratuito con un límite de generaciones mensuales, suficiente para un uso ocasional. Para un volumen mayor y funciones adicionales existen planes de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve QuestionWell?',
        answer:
          'Sirve para generar exámenes y cuestionarios en minutos a partir de material que ya usas en clase. Ahorra tiempo de preparación y permite exportar las preguntas a plataformas de evaluación, aunque siempre conviene revisarlas antes de usarlas.',
      },
    ],
  },
  Curipod: {
    name: 'Curipod',
    tagline: 'Creador de lecciones interactivas con actividades y preguntas generadas por IA',
    intro:
      'Curipod es una plataforma que permite al profesorado crear lecciones interactivas en pocos minutos con ayuda de la inteligencia artificial. A partir de un tema, genera diapositivas con preguntas, encuestas, nubes de palabras y actividades de escritura que los alumnos responden en tiempo real desde sus dispositivos. Su enfoque es aumentar la participación en clase sin dedicar horas a preparar materiales.',
    useCases: [
      'Crear una lección interactiva sobre un tema en minutos',
      'Lanzar encuestas y preguntas en directo durante la clase',
      'Evaluar la comprensión del grupo en tiempo real',
      'Fomentar la participación con nubes de palabras y votaciones',
      'Generar actividades de escritura con feedback automático',
    ],
    features: [
      'Generación de lecciones completas a partir de un tema',
      'Actividades interactivas: encuestas, votaciones y nubes de palabras',
      'Respuestas de los alumnos en tiempo real',
      'Feedback automático en actividades de escritura',
      'Biblioteca de lecciones creadas por otros docentes',
    ],
    pros: [
      'Muy rápido para preparar una sesión participativa',
      'Alta implicación del alumnado gracias a las actividades en directo',
      'Plan gratuito válido para uso individual en el aula',
      'No requiere que los alumnos se registren para participar',
    ],
    cons: [
      'Las lecciones generadas necesitan ajustes del docente',
      'Las funciones avanzadas y de centro son de pago',
      'El contenido está más pulido en inglés que en español',
    ],
    pricingNote:
      'Curipod es freemium: cuenta con un plan gratuito que permite crear y lanzar lecciones con límites, y planes de pago para docentes y centros que amplían las funciones, el almacenamiento y la gestión. Las tarifas dependen del tipo de licencia.',
    faqs: [
      {
        question: '¿Qué es Curipod?',
        answer:
          'Curipod es una herramienta para crear lecciones interactivas con inteligencia artificial. Escribes un tema y genera diapositivas con preguntas, encuestas y actividades a las que los alumnos responden en directo desde sus dispositivos.',
      },
      {
        question: '¿Curipod es gratis?',
        answer:
          'Sí, tiene un plan gratuito con el que un docente puede crear y lanzar lecciones interactivas, aunque con ciertos límites. Los planes de pago añaden funciones avanzadas y gestión de centro. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Curipod funciona en español?',
        answer:
          'Permite generar lecciones en varios idiomas, incluido el español, aunque la plataforma se desarrolló principalmente en inglés. El contenido en español suele ser aprovechable, pero conviene revisarlo y ajustarlo antes de usarlo en clase.',
      },
    ],
  },
  'TeachMate AI': {
    name: 'TeachMate AI',
    tagline: 'Conjunto de herramientas de IA que reducen la carga de trabajo del profesorado',
    intro:
      'TeachMate AI es una plataforma con múltiples herramientas de inteligencia artificial orientadas a aligerar el trabajo administrativo y de preparación del profesorado. Permite generar planes de clase, cuestionarios, informes de alumnos, comunicaciones y recursos didácticos a partir de indicaciones sencillas. Nació en el ámbito educativo británico y se dirige tanto a docentes individuales como a centros escolares.',
    useCases: [
      'Generar planes de clase para una unidad concreta',
      'Redactar informes de evaluación de alumnos',
      'Crear cuestionarios y actividades de repaso',
      'Preparar comunicaciones con familias',
      'Diseñar recursos adaptados a distintos niveles',
    ],
    features: [
      'Amplio catálogo de generadores específicos para docentes',
      'Creación de planes de clase y recursos didácticos',
      'Generación de informes y comentarios de evaluación',
      'Herramientas alineadas con el currículo británico',
      'Opciones de licencia para centros escolares',
    ],
    pros: [
      'Herramientas muy concretas orientadas a tareas reales del aula',
      'Ahorro claro de tiempo en tareas administrativas',
      'Plan gratuito para probar buena parte de las funciones',
      'Interfaz simple, sin necesidad de dominar prompts',
    ],
    cons: [
      'Muy enfocada al currículo y contexto del Reino Unido',
      'El material generado requiere revisión pedagógica',
      'El uso intensivo y las funciones de centro son de pago',
    ],
    pricingNote:
      'TeachMate AI funciona con un modelo freemium: hay un plan gratuito con acceso limitado a sus generadores y suscripciones de pago para docentes y centros que amplían el uso y añaden funciones de gestión. Las tarifas varían según el tipo de licencia.',
    faqs: [
      {
        question: '¿Qué es TeachMate AI?',
        answer:
          'TeachMate AI es una plataforma con herramientas de inteligencia artificial diseñadas para docentes. Genera planes de clase, cuestionarios, informes de alumnos, recursos y comunicaciones, con el objetivo de reducir el tiempo dedicado a tareas administrativas y de preparación.',
      },
      {
        question: '¿TeachMate AI es gratis?',
        answer:
          'Tiene un plan gratuito con acceso limitado a sus generadores, útil para probar la herramienta. El uso intensivo y las funciones para centros requieren una suscripción de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve TeachMate AI?',
        answer:
          'Sirve para que el profesorado dedique menos tiempo a papeleo y preparación. Automatiza la creación de planes de clase, informes, recursos y comunicaciones, dejando al docente la revisión final y más margen para el trabajo directo con el alumnado.',
      },
    ],
  },
  Diffit: {
    name: 'Diffit',
    tagline: 'Herramienta que adapta cualquier texto al nivel de lectura de cada alumno',
    intro:
      'Diffit es una herramienta de inteligencia artificial pensada para docentes que necesitan diferenciar materiales según el nivel de sus alumnos. A partir de un texto, un artículo, un enlace o un tema, genera una versión adaptada al nivel de lectura elegido, junto con vocabulario clave, preguntas de comprensión y actividades. Facilita atender a la diversidad del aula sin reescribir los materiales a mano.',
    useCases: [
      'Adaptar un artículo al nivel de lectura de la clase',
      'Generar vocabulario clave y preguntas sobre un texto',
      'Preparar materiales diferenciados para alumnos con distinto nivel',
      'Crear recursos a partir de un tema o un enlace web',
      'Traducir materiales adaptados a otros idiomas',
    ],
    features: [
      'Adaptación de textos a distintos niveles de lectura',
      'Generación de vocabulario clave y preguntas de comprensión',
      'Entrada desde texto, tema, enlace o documento',
      'Exportación a Google Docs y otros formatos',
      'Traducción de los materiales generados',
    ],
    pros: [
      'Resuelve muy bien la diferenciación de materiales en el aula',
      'Genera recursos completos, no solo el texto adaptado',
      'Plan gratuito suficiente para un uso moderado',
      'Exportación cómoda a los formatos que ya usa el docente',
    ],
    cons: [
      'El texto adaptado necesita revisión antes de repartirlo',
      'Las funciones avanzadas y de equipo son de pago',
      'Los niveles de lectura siguen referencias del sistema estadounidense',
    ],
    pricingNote:
      'Diffit es freemium: ofrece un plan gratuito con funciones básicas para docentes y planes de pago que amplían las generaciones, la exportación y las opciones de equipo o centro. Las tarifas dependen del tipo de licencia y del número de usuarios.',
    faqs: [
      {
        question: '¿Qué es Diffit?',
        answer:
          'Diffit es una herramienta de inteligencia artificial que adapta textos al nivel de lectura de cada alumno. A partir de un artículo, un enlace o un tema, genera una versión ajustada junto con vocabulario, preguntas de comprensión y actividades.',
      },
      {
        question: '¿Diffit es gratis?',
        answer:
          'Cuenta con un plan gratuito que permite generar y adaptar materiales con ciertos límites. Los planes de pago añaden más generaciones, opciones de exportación y funciones para equipos y centros. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Diffit funciona en español?',
        answer:
          'Sí, Diffit puede generar y traducir materiales a varios idiomas, incluido el español, lo que resulta útil en aulas con alumnado plurilingüe. Aun así, conviene revisar la adaptación, ya que los niveles de lectura se basan en referencias anglosajonas.',
      },
    ],
  },
  'Speaker Coach': {
    name: 'Speaker Coach',
    tagline: 'Entrenador de presentaciones de Microsoft que analiza tu forma de hablar',
    intro:
      'Speaker Coach es una función de Microsoft integrada en PowerPoint que ayuda a ensayar presentaciones. Mientras hablas, analiza aspectos como el ritmo, el uso de muletillas, la repetición de palabras, el tono monótono o si te limitas a leer las diapositivas, y al terminar te ofrece un informe con recomendaciones. Está pensada para estudiantes, docentes y profesionales que quieren mejorar su exposición oral.',
    useCases: [
      'Ensayar una presentación antes de exponerla en público',
      'Detectar muletillas y repeticiones al hablar',
      'Ajustar el ritmo y las pausas de una exposición',
      'Practicar la exposición oral en el aula',
      'Evitar leer literalmente las diapositivas',
    ],
    features: [
      'Análisis del ritmo y las pausas durante el ensayo',
      'Detección de muletillas y palabras repetidas',
      'Aviso cuando lees directamente la diapositiva',
      'Informe de resumen con recomendaciones al terminar',
      'Integración directa en PowerPoint',
    ],
    pros: [
      'Integrado en PowerPoint, sin instalar nada adicional',
      'Feedback concreto y accionable sobre la exposición',
      'Disponible sin coste adicional para usuarios de PowerPoint',
      'Muy útil para practicar en solitario antes de exponer',
    ],
    cons: [
      'El soporte de idiomas distintos del inglés puede ser limitado',
      'Requiere conexión a internet y una cuenta Microsoft',
      'El análisis se centra en la forma, no en el contenido del mensaje',
    ],
    pricingNote:
      'Speaker Coach se incluye sin coste adicional dentro de PowerPoint, tanto en su versión web como en las aplicaciones asociadas a una cuenta Microsoft. No requiere una suscripción específica, aunque la disponibilidad de la función puede depender del plan de Microsoft 365 y del idioma.',
    faqs: [
      {
        question: '¿Qué es Speaker Coach?',
        answer:
          'Speaker Coach es una función de PowerPoint que te ayuda a ensayar presentaciones. Escucha tu exposición y analiza el ritmo, las muletillas, la repetición de palabras o si lees las diapositivas, y al terminar te entrega un informe con consejos de mejora.',
      },
      {
        question: '¿Speaker Coach es gratis?',
        answer:
          'Sí, se incluye sin coste adicional en PowerPoint y está disponible para usuarios con una cuenta Microsoft, incluida la versión web. No hay que pagar una suscripción aparte, aunque la disponibilidad puede variar según el plan y el idioma.',
      },
      {
        question: '¿Speaker Coach funciona en español?',
        answer:
          'La función se desarrolló principalmente para el inglés y el soporte de otros idiomas, incluido el español, puede ser limitado o parcial. Conviene consultar la documentación oficial de Microsoft para comprobar qué idiomas admite tu versión de PowerPoint.',
      },
    ],
  },
  Numerai: {
    name: 'Numerai',
    tagline: 'Hedge fund colaborativo donde científicos de datos compiten con modelos bursátiles',
    intro:
      'Numerai es un fondo de inversión que funciona como una competición abierta de ciencia de datos. La empresa publica datasets financieros anonimizados y cualquier participante puede entrenar modelos de aprendizaje automático y enviar sus predicciones, que se combinan en una única señal usada para operar en bolsa. Los participantes ponen en juego (stake) criptomoneda propia del proyecto y son recompensados o penalizados según el rendimiento de sus predicciones.',
    useCases: [
      'Competir enviando predicciones bursátiles generadas con modelos propios',
      'Practicar machine learning aplicado a datos financieros reales',
      'Monetizar habilidades de ciencia de datos sin gestionar capital',
      'Experimentar con validación de modelos sobre series temporales',
      'Aprender sobre señales de mercado y evaluación out-of-sample',
    ],
    features: [
      'Datasets financieros anonimizados y ya normalizados',
      'Competición recurrente con envíos periódicos de predicciones',
      'Sistema de staking con recompensas ligadas al rendimiento',
      'Rankings y métricas públicas de cada participante',
      'API y herramientas para automatizar los envíos',
    ],
    pros: [
      'Participar no requiere pagar: el acceso a los datos es gratuito',
      'Los datos ya vienen limpios y preparados para modelar',
      'Comunidad activa con foros y recursos para principiantes',
      'Permite ingresos ligados al rendimiento sin invertir en bolsa directamente',
    ],
    cons: [
      'Curva de aprendizaje alta: requiere conocimientos sólidos de machine learning',
      'El staking implica riesgo real de perder lo aportado',
      'Los datos están anonimizados, lo que dificulta interpretar las variables',
    ],
    pricingNote:
      'Participar en la competición y descargar los datasets es gratuito. El componente económico está en el staking: se aporta criptomoneda propia del proyecto y se gana o se pierde según el rendimiento de las predicciones, por lo que no es una suscripción sino un modelo de riesgo y recompensa.',
    faqs: [
      {
        question: '¿Qué es Numerai?',
        answer:
          'Numerai es un hedge fund que externaliza sus predicciones bursátiles mediante una competición abierta. Publica datos financieros anonimizados, y científicos de datos de todo el mundo entrenan modelos y envían predicciones. El fondo combina esas señales para operar en los mercados y recompensa a quienes aciertan.',
      },
      {
        question: '¿Numerai es gratis?',
        answer:
          'Sí, registrarse, descargar los datasets y enviar predicciones no cuesta nada. La parte opcional de pago es el staking, donde el participante aporta criptomoneda propia del proyecto y puede ganar o perder según el rendimiento de su modelo.',
      },
      {
        question: '¿Hace falta saber programar para usar Numerai?',
        answer:
          'En la práctica sí. Aunque existen modelos de ejemplo listos para usar, competir con opciones reales exige entrenar modelos de machine learning, normalmente en Python, y automatizar los envíos con su API. No es una herramienta pensada para inversores sin perfil técnico.',
      },
    ],
  },
  EquBot: {
    name: 'EquBot',
    tagline: 'Análisis bursátil con IA que alimenta índices y fondos de inversión',
    intro:
      'EquBot es una empresa de tecnología financiera que aplica inteligencia artificial y procesamiento de lenguaje natural al análisis de miles de compañías cotizadas. Su sistema revisa información de mercado, documentación corporativa, noticias y otras fuentes para identificar patrones y oportunidades, y esos resultados se utilizan para construir índices e instrumentos de inversión. Está orientada a gestoras, entidades financieras e inversores institucionales más que al usuario particular.',
    useCases: [
      'Construir índices de inversión basados en señales de IA',
      'Analizar grandes volúmenes de información corporativa y de mercado',
      'Detectar oportunidades y riesgos entre miles de valores cotizados',
      'Apoyar decisiones de gestión de carteras institucionales',
      'Complementar el análisis fundamental humano con señales cuantitativas',
    ],
    features: [
      'Procesamiento de lenguaje natural sobre noticias e informes',
      'Análisis sistemático de miles de compañías cotizadas',
      'Construcción de índices basados en señales de IA',
      'Actualización continua de las señales de mercado',
      'Enfoque orientado a clientes institucionales',
    ],
    pros: [
      'Procesa mucha más información de la que cubriría un equipo humano',
      'Reduce el sesgo emocional en la selección de valores',
      'Enfoque sistemático y replicable en la generación de señales',
      'Respaldo de aplicación real en productos de inversión',
    ],
    cons: [
      'No está pensada para inversores particulares',
      'Los precios no son públicos y requieren contacto comercial',
      'La lógica interna de los modelos es poco transparente para el cliente',
    ],
    pricingNote:
      'EquBot opera con un modelo de pago orientado al mercado institucional, sin planes públicos ni versión gratuita de autoservicio. El acceso suele negociarse mediante licencia o acuerdo comercial, y el coste depende del alcance y del tipo de cliente.',
    faqs: [
      {
        question: '¿Qué es EquBot?',
        answer:
          'EquBot es una plataforma de análisis bursátil con inteligencia artificial que revisa información de mercado, noticias e informes corporativos para generar señales de inversión. Esas señales se emplean en la construcción de índices y productos financieros dirigidos principalmente a entidades e inversores institucionales.',
      },
      {
        question: '¿EquBot es gratis?',
        answer:
          'No. Es un servicio de pago orientado al ámbito profesional e institucional, sin plan gratuito de autoservicio. El acceso se gestiona mediante acuerdos comerciales y los precios no se publican, por lo que hay que contactar con la empresa para conocerlos.',
      },
      {
        question: '¿Para qué sirve EquBot?',
        answer:
          'Sirve para analizar de forma automática grandes volúmenes de información financiera y detectar oportunidades entre miles de valores cotizados. Su utilidad principal está en apoyar la construcción de índices y la gestión de carteras con criterios sistemáticos en lugar de puramente discrecionales.',
      },
    ],
  },
  'Zest AI': {
    name: 'Zest AI',
    tagline: 'Modelos de scoring crediticio con IA para bancos y prestamistas',
    intro:
      'Zest AI es una empresa estadounidense que desarrolla modelos de scoring crediticio basados en aprendizaje automático para entidades financieras, bancos y cooperativas de crédito. Su propuesta es sustituir o complementar los modelos de riesgo tradicionales por sistemas que analizan más variables, con el objetivo de aprobar más solicitudes sin aumentar la morosidad. Incluye herramientas de explicabilidad y control de sesgos, un requisito clave en el sector financiero regulado.',
    useCases: [
      'Automatizar la evaluación de riesgo en solicitudes de préstamo',
      'Aprobar más operaciones manteniendo el nivel de morosidad',
      'Reducir el sesgo en las decisiones de concesión de crédito',
      'Documentar y justificar decisiones crediticias ante reguladores',
      'Modernizar modelos de scoring heredados en entidades tradicionales',
    ],
    features: [
      'Modelos de scoring basados en aprendizaje automático',
      'Herramientas de explicabilidad de las decisiones del modelo',
      'Análisis y mitigación de sesgos en la concesión',
      'Integración con los flujos de originación existentes',
      'Soporte a requisitos de cumplimiento normativo',
    ],
    pros: [
      'Mejora la tasa de aprobación sin disparar el riesgo',
      'Pensada desde el principio para entornos regulados',
      'Aporta trazabilidad y explicaciones de cada decisión',
      'Reduce el trabajo manual de los equipos de riesgo',
    ],
    cons: [
      'Dirigida a entidades financieras, no a usuarios particulares',
      'Implantación compleja: requiere integración y datos históricos',
      'Enfoque muy centrado en el mercado estadounidense',
    ],
    pricingNote:
      'Zest AI funciona con un modelo de pago B2B, normalmente mediante licencia o contrato de servicio con la entidad financiera. No publica tarifas ni ofrece plan gratuito, y el coste depende del volumen de operaciones y del alcance de la implantación.',
    faqs: [
      {
        question: '¿Qué es Zest AI?',
        answer:
          'Zest AI es una plataforma que crea modelos de scoring crediticio con aprendizaje automático para bancos, prestamistas y cooperativas de crédito. Analiza más variables que los modelos tradicionales y ayuda a decidir qué solicitudes de préstamo aprobar, con herramientas de explicabilidad y control de sesgos.',
      },
      {
        question: '¿Zest AI es gratis?',
        answer:
          'No. Es un producto de pago dirigido a empresas del sector financiero, sin versión gratuita. El acceso se contrata mediante acuerdo comercial y el precio depende del volumen y del tipo de implantación, por lo que hay que contactar directamente con la compañía.',
      },
      {
        question: '¿Para qué sirve Zest AI?',
        answer:
          'Sirve para automatizar y mejorar la evaluación del riesgo crediticio. Permite a las entidades aprobar más solicitudes sin aumentar la morosidad, reducir el sesgo en las decisiones y justificar cada aprobación o denegación ante auditores y reguladores.',
      },
    ],
  },
  Upstart: {
    name: 'Upstart',
    tagline: 'Plataforma de préstamos que usa IA para evaluar el riesgo crediticio',
    intro:
      'Upstart es una plataforma estadounidense de préstamos que utiliza modelos de inteligencia artificial para evaluar la solvencia de los solicitantes. En lugar de basarse únicamente en la puntuación crediticia tradicional, incorpora variables adicionales como el historial educativo o laboral. Trabaja tanto con consumidores que buscan financiación como con bancos y entidades que integran su tecnología de scoring en sus propios procesos de concesión.',
    useCases: [
      'Solicitar préstamos personales con evaluación automatizada',
      'Refinanciar deudas con condiciones ajustadas al perfil de riesgo',
      'Permitir a bancos externalizar su modelo de scoring crediticio',
      'Ampliar el acceso al crédito a perfiles sin historial extenso',
      'Automatizar la aprobación de operaciones de financiación al consumo',
    ],
    features: [
      'Modelo de riesgo basado en IA con múltiples variables',
      'Proceso de solicitud online y aprobación en minutos',
      'Financiación de préstamos personales y de automoción',
      'Tecnología de scoring licenciable para entidades financieras',
      'Alto porcentaje de aprobaciones totalmente automatizadas',
    ],
    pros: [
      'Puede aprobar perfiles que los modelos tradicionales rechazarían',
      'Proceso de solicitud rápido y mayoritariamente automático',
      'Doble enfoque: producto al consumidor y tecnología para bancos',
      'Reduce la intervención manual en la concesión de crédito',
    ],
    cons: [
      'Servicio disponible solo en Estados Unidos',
      'Los tipos de interés pueden ser elevados según el perfil',
      'No es una herramienta que el usuario controle: es un producto financiero',
    ],
    pricingNote:
      'Upstart no se vende como suscripción de software: es un producto financiero. Para el solicitante, el coste está en los intereses y en posibles comisiones de apertura, que varían según su perfil de riesgo. Para las entidades, la tecnología se contrata mediante acuerdo comercial.',
    faqs: [
      {
        question: '¿Qué es Upstart?',
        answer:
          'Upstart es una plataforma de préstamos que aplica inteligencia artificial al scoring crediticio. Evalúa a los solicitantes con más variables que la puntuación crediticia clásica y ofrece financiación personal, además de licenciar su tecnología de riesgo a bancos y entidades de crédito.',
      },
      {
        question: '¿Upstart funciona en España?',
        answer:
          'No. Upstart opera en Estados Unidos y sus préstamos están dirigidos a residentes en ese país. En España existen alternativas locales de financiación al consumo, aunque no necesariamente basadas en el mismo tipo de modelos de scoring con inteligencia artificial.',
      },
      {
        question: '¿Cómo evalúa Upstart la solvencia?',
        answer:
          'Su modelo combina la información crediticia habitual con variables adicionales, como formación o trayectoria laboral, para estimar la probabilidad de impago. El objetivo es aprobar solicitantes que un modelo tradicional descartaría, manteniendo un nivel de riesgo controlado.',
      },
    ],
  },
  CredoLab: {
    name: 'CredoLab',
    tagline: 'Scoring crediticio alternativo a partir de metadatos del móvil del usuario',
    intro:
      'CredoLab es una empresa de tecnología financiera que genera puntuaciones de riesgo crediticio a partir de metadatos del smartphone o del navegador del usuario, siempre con su consentimiento. Está pensada para bancos, aseguradoras y prestamistas digitales que quieren evaluar a personas con historial crediticio escaso o inexistente, un problema habitual en mercados emergentes. Se integra en las apps del cliente mediante un SDK.',
    useCases: [
      'Evaluar el riesgo de solicitantes sin historial crediticio',
      'Ampliar la base de clientes en mercados con poca bancarización',
      'Reforzar los modelos de scoring existentes con datos alternativos',
      'Detectar solicitudes potencialmente fraudulentas',
      'Integrar scoring en apps de préstamos y seguros',
    ],
    features: [
      'SDK integrable en aplicaciones móviles y web',
      'Scoring basado en metadatos del dispositivo, no en contenido personal',
      'Puntuaciones generadas en segundos durante la solicitud',
      'Modelos ajustables al mercado y al producto del cliente',
      'Uso complementario a los burós de crédito tradicionales',
    ],
    pros: [
      'Permite evaluar a personas sin historial crediticio previo',
      'Los datos se recogen durante el propio proceso de solicitud',
      'Puntuación prácticamente inmediata',
      'Complementa modelos existentes en lugar de sustituirlos',
    ],
    cons: [
      'El uso de datos del dispositivo plantea dudas de privacidad para algunos usuarios',
      'Requiere desarrollo para integrar el SDK en la aplicación',
      'Producto B2B: no es utilizable por particulares',
    ],
    pricingNote:
      'CredoLab trabaja con un modelo de pago B2B, habitualmente basado en el volumen de puntuaciones consultadas o en una licencia acordada con la entidad. No hay planes públicos ni versión gratuita para usuarios finales, aunque suele ofrecer pruebas piloto a empresas.',
    faqs: [
      {
        question: '¿Qué es CredoLab?',
        answer:
          'CredoLab es una plataforma de scoring crediticio alternativo que analiza metadatos del smartphone o navegador del solicitante, con su consentimiento, para estimar su riesgo de impago. La usan bancos, aseguradoras y prestamistas digitales para evaluar a clientes sin historial crediticio.',
      },
      {
        question: '¿CredoLab accede a mis datos personales?',
        answer:
          'Según la compañía, su tecnología analiza metadatos del dispositivo (patrones de uso agregados) y no el contenido de mensajes, fotos o contactos, y requiere el consentimiento explícito del usuario. Aun así, conviene revisar la política de privacidad de la entidad que la integra.',
      },
      {
        question: '¿Para qué sirve CredoLab?',
        answer:
          'Sirve para que entidades financieras puedan conceder crédito a personas que los burós tradicionales no pueden puntuar por falta de historial. Genera una puntuación de riesgo en segundos durante la solicitud y también ayuda a detectar posibles fraudes.',
      },
    ],
  },
  Cleo: {
    name: 'Cleo',
    tagline: 'Asistente financiero conversacional que ayuda a controlar tus gastos',
    intro:
      'Cleo es una aplicación de finanzas personales con un asistente conversacional que se conecta a tus cuentas bancarias y analiza tus movimientos. Responde por chat a preguntas sobre en qué te gastas el dinero, ayuda a fijar presupuestos y objetivos de ahorro, y avisa de gastos recurrentes o suscripciones olvidadas. Su tono es deliberadamente informal y directo, con un modo que critica tus gastos sin rodeos.',
    useCases: [
      'Consultar por chat cuánto has gastado y en qué categorías',
      'Fijar presupuestos mensuales y recibir avisos al superarlos',
      'Automatizar pequeñas aportaciones a un objetivo de ahorro',
      'Detectar suscripciones y cargos recurrentes olvidados',
      'Recibir recordatorios antes de que se agote el saldo',
    ],
    features: [
      'Chat conversacional para consultar tus finanzas',
      'Conexión con cuentas bancarias y categorización de gastos',
      'Presupuestos, objetivos de ahorro y alertas automáticas',
      'Modo con tono humorístico y crítico sobre tus gastos',
      'Aplicación móvil para iOS y Android',
    ],
    pros: [
      'Interfaz conversacional muy sencilla, sin curva de aprendizaje',
      'Buen apoyo para quien nunca ha llevado un presupuesto',
      'Categorización automática que evita el registro manual',
      'Plan gratuito suficiente para el seguimiento básico de gastos',
    ],
    cons: [
      'Su disponibilidad y la conexión bancaria dependen del país',
      'Las funciones más útiles están tras la suscripción de pago',
      'El tono informal no gusta a todo el mundo',
    ],
    pricingNote:
      'Cleo sigue un modelo freemium: hay una versión gratuita con seguimiento de gastos y presupuestos básicos, y una suscripción de pago que desbloquea funciones adicionales de ahorro y análisis. La cuota mensual suele situarse en el entorno de unos pocos euros o dólares.',
    faqs: [
      {
        question: '¿Qué es Cleo?',
        answer:
          'Cleo es una app de finanzas personales con un asistente de inteligencia artificial que funciona por chat. Se conecta a tus cuentas, clasifica tus gastos y te ayuda a hacer presupuestos, ahorrar y detectar cargos recurrentes, todo respondiendo a preguntas en lenguaje natural.',
      },
      {
        question: '¿Cleo es gratis?',
        answer:
          'Tiene una versión gratuita que cubre el seguimiento de gastos, la categorización y los presupuestos básicos. Las funciones avanzadas están en una suscripción de pago con una cuota mensual reducida. Consulta su web para conocer los precios actualizados y la disponibilidad en tu país.',
      },
      {
        question: '¿Cleo funciona en España?',
        answer:
          'Su disponibilidad y las conexiones bancarias varían según el país, y su mercado principal ha sido el anglosajón. Antes de registrarte conviene comprobar en su web si admite bancos españoles, ya que sin conexión bancaria la app pierde gran parte de su utilidad.',
      },
    ],
  },
  Plum: {
    name: 'Plum',
    tagline: 'App de ahorro e inversión automática con reglas inteligentes',
    intro:
      'Plum es una aplicación de finanzas personales que analiza tus ingresos y gastos para calcular cuánto puedes ahorrar sin notarlo, y aparta ese dinero de forma automática. Además del ahorro por reglas, ofrece opciones de inversión en fondos y carteras diversificadas, seguimiento de gastos y detección de suscripciones. Está pensada para quien quiere empezar a ahorrar e invertir sin dedicarle tiempo ni conocimientos previos.',
    useCases: [
      'Ahorrar de forma automática según tus ingresos y gastos',
      'Invertir pequeñas cantidades en carteras diversificadas',
      'Crear reglas de ahorro personalizadas y objetivos concretos',
      'Controlar gastos y detectar suscripciones innecesarias',
      'Redondear compras y destinar la diferencia al ahorro',
    ],
    features: [
      'Cálculo automático del importe que puedes ahorrar',
      'Reglas de ahorro configurables y redondeos',
      'Carteras de inversión con distintos perfiles de riesgo',
      'Análisis de gastos y alertas de suscripciones',
      'Aplicación móvil con conexión a tus cuentas bancarias',
    ],
    pros: [
      'El ahorro automático elimina la fricción de tener que decidir cada mes',
      'Permite empezar a invertir con cantidades pequeñas',
      'Combina control de gastos e inversión en una sola app',
      'Interfaz sencilla, orientada a usuarios sin experiencia financiera',
    ],
    cons: [
      'Las funciones de inversión y las reglas avanzadas requieren plan de pago',
      'La oferta de productos varía según el país',
      'Invertir implica riesgo de pérdida, algo que la automatización puede hacer olvidar',
    ],
    pricingNote:
      'Plum funciona con un modelo freemium: hay un plan gratuito con ahorro automático básico y varios niveles de suscripción que añaden reglas avanzadas, más opciones de inversión y análisis. Las cuotas mensuales suelen ser de unos pocos euros, y algunos productos de inversión llevan comisiones adicionales.',
    faqs: [
      {
        question: '¿Qué es Plum?',
        answer:
          'Plum es una app de ahorro e inversión que analiza tus movimientos bancarios y aparta automáticamente el dinero que puedes permitirte ahorrar. También ofrece carteras de inversión, seguimiento de gastos y detección de suscripciones, todo desde el móvil y sin gestión manual.',
      },
      {
        question: '¿Plum es gratis?',
        answer:
          'Ofrece un plan gratuito con el ahorro automático básico. Las reglas avanzadas, las opciones de inversión y los análisis más detallados están en planes de suscripción de pago, con cuotas mensuales reducidas. Consulta su web para conocer los precios y planes actualizados.',
      },
      {
        question: '¿Es seguro invertir con Plum?',
        answer:
          'Plum opera como entidad regulada y trabaja con proveedores financieros establecidos, pero cualquier inversión conlleva riesgo de pérdida: el valor de las carteras puede bajar. Conviene revisar el perfil de riesgo elegido y no invertir dinero que puedas necesitar a corto plazo.',
      },
    ],
  },
  'Wallet AI': {
    name: 'Wallet AI',
    tagline: 'Asistente financiero con IA para entender y mejorar tus finanzas',
    intro:
      'Wallet AI es una herramienta de asesoramiento financiero que aplica inteligencia artificial al análisis de datos económicos personales. Su planteamiento es procesar la información de gastos, ingresos y hábitos financieros para ofrecer recomendaciones y ayudar a tomar mejores decisiones con el dinero. Se sitúa en la categoría de asesores financieros virtuales, un segmento que busca sustituir parte del trabajo del asesor tradicional por análisis automatizado.',
    useCases: [
      'Analizar hábitos de gasto e ingresos de forma automática',
      'Recibir recomendaciones personalizadas sobre tus finanzas',
      'Identificar patrones de consumo poco eficientes',
      'Apoyar decisiones de ahorro con datos en lugar de intuición',
      'Hacer seguimiento de objetivos financieros a lo largo del tiempo',
    ],
    features: [
      'Análisis automatizado de datos financieros personales',
      'Recomendaciones basadas en tus patrones de comportamiento',
      'Panel de seguimiento de la situación financiera',
      'Detección de tendencias en gastos e ingresos',
      'Enfoque de asesoramiento continuo, no puntual',
    ],
    pros: [
      'Aporta análisis financiero sin necesidad de contratar un asesor',
      'Las recomendaciones se basan en tus datos reales, no en supuestos genéricos',
      'Automatiza el seguimiento que la mayoría no hace manualmente',
    ],
    cons: [
      'Servicio de pago, sin versión gratuita de acceso libre',
      'La información pública sobre el producto es limitada',
      'El asesoramiento automatizado no sustituye a un profesional en casos complejos',
    ],
    pricingNote:
      'Wallet AI se presenta como un servicio de pago, sin plan gratuito abierto. El modelo concreto y los tramos no están publicados de forma clara, por lo que conviene contactar con la empresa o revisar su web para conocer las condiciones y los precios actualizados antes de contratar.',
    faqs: [
      {
        question: '¿Qué es Wallet AI?',
        answer:
          'Wallet AI es un asesor financiero virtual que aplica inteligencia artificial al análisis de datos económicos personales. Procesa información sobre gastos, ingresos y hábitos financieros para ofrecer recomendaciones y ayudar al usuario a tomar decisiones más informadas sobre su dinero.',
      },
      {
        question: '¿Wallet AI es gratis?',
        answer:
          'No consta un plan gratuito de acceso libre: se trata de un servicio de pago. Los precios concretos no aparecen publicados de forma detallada, así que lo recomendable es consultar su web o contactar con la empresa para conocer las condiciones actualizadas.',
      },
      {
        question: '¿Para qué sirve un asesor financiero con IA?',
        answer:
          'Sirve para analizar de forma continua tus finanzas y detectar patrones que pasarías por alto: gastos recurrentes, desviaciones respecto a tu presupuesto o margen de ahorro. Ofrece recomendaciones basadas en tus datos, aunque no sustituye a un profesional en decisiones complejas.',
      },
    ],
  },
  FICO: {
    name: 'FICO',
    tagline: 'Plataforma de análisis y prevención de fraude para entidades financieras',
    intro:
      'FICO es una compañía estadounidense de software analítico, conocida sobre todo por su puntuación de crédito, que también desarrolla soluciones de detección y prevención de fraude para bancos y emisores de tarjetas. Sus sistemas analizan transacciones en tiempo real con modelos de aprendizaje automático para identificar operaciones sospechosas antes de que se completen. Es uno de los proveedores de referencia del sector financiero a escala global.',
    useCases: [
      'Detectar transacciones fraudulentas con tarjeta en tiempo real',
      'Reducir falsos positivos en los bloqueos de operaciones',
      'Analizar riesgo de fraude en pagos y transferencias',
      'Automatizar decisiones de riesgo en entidades financieras',
      'Apoyar el cumplimiento normativo en materia de fraude',
    ],
    features: [
      'Puntuación de riesgo de fraude en tiempo real',
      'Modelos de aprendizaje automático entrenados con datos del sector',
      'Reglas de decisión configurables por la entidad',
      'Integración con sistemas de pago y core bancario',
      'Herramientas de investigación y gestión de casos',
    ],
    pros: [
      'Trayectoria larga y amplia adopción en el sector bancario',
      'Detección en tiempo real, antes de que la operación se complete',
      'Combina modelos automáticos con reglas definidas por la entidad',
      'Escala a volúmenes muy altos de transacciones',
    ],
    cons: [
      'Solución empresarial: no accesible para particulares ni pymes',
      'Implantación compleja y con plazos largos',
      'Precios no públicos y coste elevado',
    ],
    pricingNote:
      'FICO comercializa sus soluciones de fraude con un modelo empresarial de pago, mediante licencias o contratos plurianuales adaptados a cada entidad. No hay planes públicos ni versión gratuita, y el coste depende del volumen de transacciones y de los módulos contratados.',
    faqs: [
      {
        question: '¿Qué es FICO?',
        answer:
          'FICO es una empresa de software analítico conocida por su puntuación de crédito, que además ofrece soluciones de prevención de fraude para bancos y emisores de tarjetas. Sus sistemas analizan transacciones en tiempo real y asignan una puntuación de riesgo para bloquear operaciones sospechosas.',
      },
      {
        question: '¿FICO es gratis?',
        answer:
          'No. Sus soluciones de fraude son productos empresariales de pago que se contratan mediante licencia o acuerdo comercial con la entidad financiera. No existe una versión gratuita ni tarifas públicas, por lo que el coste debe consultarse directamente con la compañía.',
      },
      {
        question: '¿Cómo detecta FICO el fraude?',
        answer:
          'Analiza cada transacción en tiempo real comparándola con los patrones habituales del titular y con modelos entrenados sobre datos del sector. Si la operación se desvía de lo esperado, recibe una puntuación de riesgo alta y la entidad puede bloquearla o solicitar una verificación adicional.',
      },
    ],
  },
  Feedzai: {
    name: 'Feedzai',
    tagline: 'Plataforma de prevención de fraude financiero en tiempo real con IA',
    intro:
      'Feedzai es una empresa de origen portugués especializada en prevención de fraude y delitos financieros mediante aprendizaje automático. Su plataforma analiza transacciones y comportamiento de usuarios en tiempo real para detectar pagos fraudulentos, apertura de cuentas falsas o blanqueo de capitales. Trabaja con bancos, procesadores de pago y comercios de gran volumen, y suele destacar por su enfoque en reducir los falsos positivos.',
    useCases: [
      'Bloquear pagos fraudulentos antes de que se ejecuten',
      'Detectar apertura fraudulenta de cuentas y suplantación de identidad',
      'Vigilar operaciones sospechosas de blanqueo de capitales',
      'Reducir falsos positivos que molestan a clientes legítimos',
      'Gestionar e investigar casos de fraude desde una única plataforma',
    ],
    features: [
      'Análisis de transacciones en tiempo real',
      'Modelos de aprendizaje automático con explicabilidad de decisiones',
      'Detección de fraude en pagos, cuentas y blanqueo',
      'Herramientas de gestión e investigación de casos',
      'Integración con sistemas bancarios y procesadores de pago',
    ],
    pros: [
      'Muy fuerte en reducción de falsos positivos',
      'Cubre varios tipos de fraude en una sola plataforma',
      'Ofrece explicaciones de por qué el modelo marca una operación',
      'Diseñada para volúmenes muy altos de transacciones',
    ],
    cons: [
      'Producto empresarial, fuera del alcance de particulares y pymes',
      'Requiere integración técnica y datos históricos para funcionar bien',
      'Precios no públicos, negociados caso por caso',
    ],
    pricingNote:
      'Feedzai opera con un modelo de pago empresarial: licencias o contratos adaptados al volumen de transacciones y a los módulos contratados. No dispone de plan gratuito ni de tarifas publicadas. Lo habitual es solicitar una demostración y negociar las condiciones con su equipo comercial.',
    faqs: [
      {
        question: '¿Qué es Feedzai?',
        answer:
          'Feedzai es una plataforma de prevención de fraude financiero que utiliza aprendizaje automático para analizar transacciones y comportamientos en tiempo real. Detecta pagos fraudulentos, cuentas falsas y operaciones de blanqueo, y la emplean bancos, procesadores de pago y grandes comercios.',
      },
      {
        question: '¿Feedzai es gratis?',
        answer:
          'No. Es una solución empresarial de pago que se contrata mediante licencia o acuerdo comercial. No hay versión gratuita ni precios publicados: dependen del volumen de transacciones y de los módulos que necesite cada cliente, por lo que hay que contactar con la empresa.',
      },
      {
        question: '¿Para qué sirve Feedzai?',
        answer:
          'Sirve para que entidades financieras y comercios detengan operaciones fraudulentas antes de que se completen, sin bloquear por error a clientes legítimos. También cubre la detección de suplantación de identidad y el seguimiento de operaciones sospechosas de blanqueo de capitales.',
      },
    ],
  },
  Darktrace: {
    name: 'Darktrace',
    tagline: 'Ciberseguridad con IA que detecta amenazas y fraude por comportamiento anómalo',
    intro:
      'Darktrace es una compañía británica de ciberseguridad cuya tecnología aprende el comportamiento normal de los usuarios y sistemas de una organización para detectar desviaciones que puedan indicar un ataque, un fraude interno o una intrusión. En lugar de basarse solo en firmas de amenazas conocidas, identifica anomalías en tiempo real y puede responder de forma autónoma conteniendo la actividad sospechosa mientras el equipo de seguridad investiga.',
    useCases: [
      'Detectar intrusiones y ataques que evaden las defensas tradicionales',
      'Identificar comportamientos internos anómalos o fraudulentos',
      'Contener automáticamente actividad sospechosa en la red',
      'Proteger correo electrónico y entornos cloud',
      'Reducir el tiempo de respuesta ante incidentes de seguridad',
    ],
    features: [
      'Aprendizaje del comportamiento normal de cada organización',
      'Detección de anomalías en tiempo real sin depender de firmas',
      'Respuesta autónoma para contener amenazas activas',
      'Cobertura de red, correo, cloud y endpoints',
      'Paneles de investigación con contexto del incidente',
    ],
    pros: [
      'Detecta amenazas nuevas que las soluciones basadas en firmas no ven',
      'La respuesta autónoma limita el daño sin esperar a un analista',
      'Se adapta al entorno concreto de cada organización',
      'Cobertura amplia de superficies de ataque',
    ],
    cons: [
      'Puede generar alertas que requieren afinado durante los primeros meses',
      'Coste elevado y precios no públicos',
      'Orientada a organizaciones con equipo de seguridad, no a usuarios individuales',
    ],
    pricingNote:
      'Darktrace se vende con un modelo empresarial de pago mediante suscripción o licencia, con precios no publicados que dependen del tamaño de la organización, del número de dispositivos y de los módulos contratados. Suele ofrecer pruebas piloto antes de la contratación.',
    faqs: [
      {
        question: '¿Qué es Darktrace?',
        answer:
          'Darktrace es una plataforma de ciberseguridad basada en inteligencia artificial. Aprende cómo se comportan habitualmente los usuarios y sistemas de una organización y detecta desviaciones que puedan indicar un ataque o un fraude, con capacidad de responder automáticamente para contener la amenaza.',
      },
      {
        question: '¿Darktrace es gratis?',
        answer:
          'No. Es una solución empresarial de pago que se contrata por suscripción o licencia, con precios que dependen del tamaño de la organización y de los módulos elegidos. No hay versión gratuita, aunque la compañía suele ofrecer pruebas piloto a clientes potenciales.',
      },
      {
        question: '¿Cómo detecta Darktrace las amenazas?',
        answer:
          'En lugar de buscar firmas de amenazas conocidas, construye un modelo del comportamiento habitual de cada usuario y dispositivo. Cuando algo se sale de ese patrón (accesos inusuales, transferencias raras de datos), lo marca como anómalo y puede intervenir automáticamente mientras el equipo investiga.',
      },
    ],
  },
  Fotor: {
    name: 'Fotor',
    tagline: 'Editor de imágenes online con generación y retoque asistidos por IA',
    intro:
      'Fotor es un editor de imágenes online, con aplicaciones de escritorio y móvil, que combina las herramientas clásicas de retoque con funciones de inteligencia artificial. Permite generar imágenes a partir de descripciones de texto, eliminar fondos, mejorar fotos, quitar objetos o crear diseños a partir de plantillas. Está orientado a usuarios sin formación en diseño que necesitan resultados rápidos para redes sociales, comercio electrónico o proyectos personales.',
    useCases: [
      'Generar imágenes a partir de descripciones de texto',
      'Eliminar el fondo de fotos de producto o retratos',
      'Retocar y mejorar fotografías de forma automática',
      'Crear publicaciones y banners con plantillas prediseñadas',
      'Borrar objetos o personas no deseadas de una imagen',
    ],
    features: [
      'Generador de imágenes con IA a partir de texto',
      'Eliminación de fondos y de objetos en un clic',
      'Mejora automática de fotos y retoque de retratos',
      'Biblioteca amplia de plantillas para redes y marketing',
      'Disponible en navegador, escritorio y móvil',
    ],
    pros: [
      'Muy fácil de usar sin conocimientos de diseño',
      'Reúne edición clásica y funciones de IA en una sola herramienta',
      'Plan gratuito suficiente para tareas puntuales',
      'Plantillas listas para los formatos habituales de redes sociales',
    ],
    cons: [
      'La versión gratuita añade marcas de agua y limita créditos de IA',
      'Menos potencia y control que un editor profesional',
      'La calidad de las imágenes generadas es irregular según el caso',
    ],
    pricingNote:
      'Fotor sigue un modelo freemium: hay una versión gratuita con funciones básicas, créditos limitados de IA y marca de agua en algunas salidas. Los planes de pago, con cuotas mensuales que suelen situarse en el rango bajo de las herramientas de diseño, eliminan esas limitaciones y amplían plantillas y almacenamiento.',
    faqs: [
      {
        question: '¿Qué es Fotor?',
        answer:
          'Fotor es un editor de imágenes online que combina retoque fotográfico tradicional con herramientas de inteligencia artificial: generación de imágenes desde texto, eliminación de fondos, borrado de objetos y mejora automática de fotos, además de plantillas de diseño para redes sociales.',
      },
      {
        question: '¿Fotor es gratis?',
        answer:
          'Tiene una versión gratuita con funciones básicas y un número limitado de créditos para las herramientas de IA, aunque algunas exportaciones llevan marca de agua. Los planes de pago eliminan esas restricciones. Consulta su web para conocer los precios actualizados.',
      },
      {
        question: '¿Fotor funciona en español?',
        answer:
          'Sí, su interfaz está disponible en varios idiomas, incluido el español. En cuanto al generador de imágenes, las descripciones en inglés suelen dar resultados algo más precisos, aunque también admite indicaciones en español para la mayoría de los usos habituales.',
      },
    ],
  },
  'Figma AI': {
    name: 'Figma AI',
    tagline: 'Funciones de IA integradas en Figma para acelerar el diseño de interfaces',
    intro:
      'Figma AI es el conjunto de funciones de inteligencia artificial que Figma incorpora en su editor de diseño de interfaces. Incluye herramientas para generar primeras versiones de diseños a partir de descripciones, renombrar capas automáticamente, buscar componentes por similitud visual, sustituir textos de relleno por contenido realista o retirar fondos de imágenes. Están pensadas para reducir el trabajo repetitivo dentro del flujo habitual de un diseñador de producto.',
    useCases: [
      'Generar un primer borrador de interfaz a partir de una descripción',
      'Renombrar capas y ordenar archivos de forma automática',
      'Buscar componentes existentes por similitud visual',
      'Sustituir textos de relleno por contenido realista',
      'Eliminar fondos de imágenes sin salir del editor',
    ],
    features: [
      'Generación de diseños iniciales desde texto',
      'Renombrado automático de capas',
      'Búsqueda visual dentro de los archivos del equipo',
      'Reemplazo de contenido de relleno por texto plausible',
      'Integración nativa en el flujo de trabajo de Figma',
    ],
    pros: [
      'Todo ocurre dentro de Figma, sin herramientas externas',
      'Elimina buena parte del trabajo repetitivo de organización',
      'Útil para arrancar rápido en fases de exploración',
      'Se apoya en los sistemas de diseño y componentes ya existentes',
    ],
    cons: [
      'Los diseños generados suelen ser genéricos y necesitan mucho ajuste',
      'La disponibilidad de funciones depende del plan contratado',
      'No sustituye el criterio de diseño ni la investigación de usuario',
    ],
    pricingNote:
      'Figma trabaja con un modelo freemium: hay un plan gratuito con limitaciones y planes de pago por editor, cuyo precio mensual varía según el nivel. El acceso a las funciones de IA y sus límites de uso dependen del plan contratado y han ido cambiando.',
    faqs: [
      {
        question: '¿Qué es Figma AI?',
        answer:
          'Figma AI es el conjunto de funciones de inteligencia artificial integradas en el editor de Figma. Permiten generar borradores de interfaz desde una descripción, renombrar capas automáticamente, buscar componentes por similitud visual y sustituir contenido de relleno, entre otras tareas.',
      },
      {
        question: '¿Figma AI es gratis?',
        answer:
          'Figma ofrece un plan gratuito, pero el acceso a las funciones de IA y sus límites de uso dependen del plan contratado y han ido variando. Lo recomendable es revisar la página de precios de Figma para ver qué incluye cada nivel actualmente.',
      },
      {
        question: '¿Puede Figma AI diseñar una app entera?',
        answer:
          'No de forma realista. Genera borradores y estructuras iniciales útiles para arrancar, pero los resultados tienden a ser genéricos y requieren trabajo de diseño posterior: jerarquía, sistema de diseño, casos límite y validación con usuarios siguen siendo tarea humana.',
      },
    ],
  },
  Uizard: {
    name: 'Uizard',
    tagline: 'Prototipado rápido de apps y webs a partir de texto o bocetos',
    intro:
      'Uizard es una herramienta de diseño de interfaces que permite crear prototipos de aplicaciones y páginas web sin experiencia previa en diseño. Puede generar pantallas a partir de una descripción de texto, convertir bocetos dibujados a mano en diseños digitales o transformar capturas de pantalla en maquetas editables. Está orientada a fundadores, product managers y equipos que necesitan validar una idea rápidamente antes de invertir en diseño detallado.',
    useCases: [
      'Generar prototipos de app o web desde una descripción de texto',
      'Convertir bocetos dibujados a mano en pantallas digitales',
      'Transformar capturas de pantalla en maquetas editables',
      'Validar ideas de producto con stakeholders antes de diseñar',
      'Crear wireframes rápidos para reuniones y presentaciones',
    ],
    features: [
      'Generación de pantallas a partir de indicaciones de texto',
      'Conversión de bocetos y capturas en diseños editables',
      'Prototipos navegables con enlaces entre pantallas',
      'Plantillas y componentes listos para usar',
      'Aplicación de estilos y temas a todo el proyecto',
    ],
    pros: [
      'Permite prototipar sin saber diseñar ni usar herramientas complejas',
      'Muy rápido para pasar de idea a prototipo navegable',
      'La conversión de bocetos y capturas ahorra mucho trabajo manual',
      'Plan gratuito suficiente para probar el flujo completo',
    ],
    cons: [
      'Menos control y precisión que herramientas como Figma',
      'Los diseños generados tienden a resultar genéricos',
      'El plan gratuito limita el número de proyectos',
    ],
    pricingNote:
      'Uizard sigue un modelo freemium: un plan gratuito con un número limitado de proyectos y funciones, y planes de pago por usuario que amplían proyectos, generaciones de IA y opciones de colaboración. Los tramos de pago suelen situarse en el entorno de unas decenas de euros al mes por usuario.',
    faqs: [
      {
        question: '¿Qué es Uizard?',
        answer:
          'Uizard es una herramienta de prototipado con inteligencia artificial que genera diseños de apps y webs a partir de descripciones de texto, bocetos a mano o capturas de pantalla. Está pensada para crear prototipos navegables rápidamente sin necesidad de experiencia en diseño.',
      },
      {
        question: '¿Uizard es gratis?',
        answer:
          'Ofrece un plan gratuito con un número limitado de proyectos y funciones, suficiente para probar la herramienta. Los planes de pago amplían proyectos, generaciones de IA y colaboración en equipo. Consulta su web para conocer los precios actualizados.',
      },
      {
        question: '¿Uizard sustituye a Figma?',
        answer:
          'No en trabajos de diseño detallado. Uizard destaca en la fase inicial de exploración y validación de ideas, pero ofrece menos control, precisión y capacidad de sistema de diseño que Figma. Muchos equipos lo usan para prototipar rápido y luego pasan a Figma.',
      },
    ],
  },
  'Galileo AI': {
    name: 'Galileo AI',
    tagline: 'Generación de interfaces de producto a partir de descripciones en texto',
    intro:
      'Galileo AI es una herramienta de diseño asistido por IA que genera interfaces de usuario editables a partir de descripciones escritas en lenguaje natural. Su propuesta es acortar la fase de partida en blanco: describes la pantalla o el flujo que necesitas y obtienes un diseño de alta fidelidad sobre el que iterar. El proyecto fue adquirido por Google y su tecnología se ha ido integrando en las iniciativas de diseño con IA de la compañía.',
    useCases: [
      'Generar pantallas de alta fidelidad desde una descripción de texto',
      'Explorar varias direcciones visuales en poco tiempo',
      'Crear un punto de partida para iterar en un editor de diseño',
      'Ilustrar conceptos de producto en presentaciones internas',
      'Prototipar flujos de app sin empezar desde cero',
    ],
    features: [
      'Generación de interfaces a partir de lenguaje natural',
      'Resultados editables en lugar de imágenes estáticas',
      'Diseños de alta fidelidad, no solo wireframes',
      'Exploración de múltiples variantes de una misma pantalla',
      'Exportación hacia herramientas de diseño',
    ],
    pros: [
      'Elimina la fricción del lienzo en blanco',
      'Los resultados son editables, no capturas fijas',
      'Rápido para explorar varias opciones visuales',
      'Buen apoyo para perfiles no diseñadores que necesitan mockups',
    ],
    cons: [
      'Tras la adquisición por Google, el producto original ha cambiado de forma',
      'Los diseños generados requieren revisión y ajuste humano',
      'Poco adecuado para sistemas de diseño complejos o marcas muy definidas',
    ],
    pricingNote:
      'Galileo AI se planteó con un modelo freemium, con acceso limitado gratuito y planes de pago para un uso más intensivo. Tras su integración en Google, las condiciones de acceso y precios han cambiado y conviene comprobarlas directamente en su web actual antes de asumir cualquier tarifa.',
    faqs: [
      {
        question: '¿Qué es Galileo AI?',
        answer:
          'Galileo AI es una herramienta que genera interfaces de usuario editables a partir de descripciones escritas en lenguaje natural. En lugar de partir de un lienzo en blanco, describes la pantalla que necesitas y obtienes un diseño de alta fidelidad sobre el que iterar.',
      },
      {
        question: '¿Galileo AI es gratis?',
        answer:
          'Su planteamiento original era freemium, con un acceso gratuito limitado y planes de pago. Tras la adquisición por parte de Google, las condiciones han cambiado, así que conviene revisar su web actual para conocer la disponibilidad y los precios actualizados.',
      },
      {
        question: '¿Para qué sirve Galileo AI?',
        answer:
          'Sirve para acelerar la fase inicial del diseño de producto: genera pantallas y flujos a partir de texto, permite explorar varias direcciones visuales en minutos y da un punto de partida editable. El refinamiento y la adecuación a la marca siguen siendo trabajo humano.',
      },
    ],
  },
  Looka: {
    name: 'Looka',
    tagline: 'Generador de logos e identidad de marca para pequeños negocios',
    intro:
      'Looka es una plataforma que crea logotipos e identidad visual de forma automática. El usuario indica el nombre del negocio, el sector, los colores y los estilos que prefiere, y la herramienta propone múltiples opciones de logo que se pueden personalizar. Además del logo, genera un kit de marca con tarjetas, plantillas para redes sociales y directrices básicas de uso. Está pensada para autónomos y pequeños negocios sin presupuesto para un estudio de diseño.',
    useCases: [
      'Crear un logotipo para un negocio nuevo sin contratar diseñador',
      'Generar un kit de marca con colores, tipografías y aplicaciones',
      'Obtener plantillas para redes sociales coherentes con la marca',
      'Probar varias direcciones visuales antes de decidir la identidad',
      'Renovar la imagen de un negocio existente de forma económica',
    ],
    features: [
      'Generación de logos a partir de preferencias de estilo y color',
      'Editor para ajustar tipografías, iconos y disposición',
      'Kit de marca con tarjetas, papelería y plantillas sociales',
      'Descarga de archivos en distintos formatos y resoluciones',
      'Directrices básicas de uso de la marca',
    ],
    pros: [
      'Resultados rápidos y con acabado aceptable para pequeños negocios',
      'Mucho más barato que un estudio de diseño',
      'Permite ver muchas opciones antes de decidir',
      'El kit de marca ahorra trabajo posterior de aplicación',
    ],
    cons: [
      'Puedes explorar gratis, pero descargar el logo requiere pago',
      'Los resultados pueden parecerse a los de otros usuarios',
      'No sustituye el trabajo estratégico de una identidad de marca real',
    ],
    pricingNote:
      'Looka permite generar y previsualizar logos sin coste, pero la descarga de los archivos exige una compra puntual del logo o una suscripción al kit de marca. Los paquetes suelen situarse en el rango de unas decenas de euros para el logo y una cuota anual para el kit completo.',
    faqs: [
      {
        question: '¿Qué es Looka?',
        answer:
          'Looka es una plataforma que genera logotipos e identidad de marca de forma automática. A partir del nombre del negocio y de tus preferencias de estilo y color, propone múltiples logos personalizables y puede crear un kit de marca con tarjetas y plantillas para redes sociales.',
      },
      {
        question: '¿Looka es gratis?',
        answer:
          'Puedes generar y previsualizar logos sin pagar, pero para descargar los archivos hay que comprar el logo o suscribirse al kit de marca. Es un modelo freemium en el que la exploración es gratuita y la entrega final es de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Puedo usar el logo de Looka comercialmente?',
        answer:
          'Sí: al comprar el logo obtienes los archivos y derechos de uso comercial según sus condiciones. Conviene revisar su licencia en detalle, sobre todo si prevés registrar la marca, ya que los elementos generados podrían coincidir con los de otros usuarios.',
      },
    ],
  },
  Brandmark: {
    name: 'Brandmark',
    tagline: 'Creador de logos con IA y paquete de identidad visual completo',
    intro:
      'Brandmark es una herramienta que genera logotipos mediante inteligencia artificial a partir del nombre del negocio, unas palabras clave y el estilo deseado. Además del logo, produce paletas de color, combinaciones tipográficas y un conjunto de archivos listos para usar en web, redes sociales y material impreso. Se dirige a emprendedores y pequeños negocios que necesitan una identidad visual coherente sin pasar por un proceso de diseño tradicional.',
    useCases: [
      'Diseñar un logo para un proyecto o negocio nuevo',
      'Obtener una paleta de color y tipografías coherentes',
      'Conseguir archivos del logo en formatos listos para usar',
      'Probar distintos estilos visuales para una marca',
      'Crear material básico de marca sin diseñador',
    ],
    features: [
      'Generación de logos a partir de nombre y palabras clave',
      'Sugerencias automáticas de paletas de color y tipografías',
      'Editor para ajustar detalles del logo generado',
      'Paquete de archivos en varios formatos y usos',
      'Herramientas complementarias de identidad visual',
    ],
    pros: [
      'Proceso muy rápido, de nombre a logo en minutos',
      'El paquete incluye colores y tipografías, no solo el logo',
      'Coste muy inferior al de un encargo de diseño',
      'Permite iterar y ver alternativas sin compromiso',
    ],
    cons: [
      'La generación es gratuita pero la descarga es de pago',
      'Resultados con estética reconocible de herramienta automática',
      'Personalización más limitada que en un editor profesional',
    ],
    pricingNote:
      'Brandmark funciona con un esquema freemium: crear y previsualizar logos no cuesta nada, pero descargar los archivos requiere un pago único, con distintos paquetes según los formatos y extras incluidos. Los precios suelen situarse en el rango de unas decenas de dólares.',
    faqs: [
      {
        question: '¿Qué es Brandmark?',
        answer:
          'Brandmark es un generador de logos con inteligencia artificial. A partir del nombre del negocio, unas palabras clave y el estilo elegido, crea propuestas de logotipo junto con paletas de color y tipografías, y entrega los archivos listos para usar en web e impresión.',
      },
      {
        question: '¿Brandmark es gratis?',
        answer:
          'Generar y previsualizar los logos es gratuito, pero descargar los archivos requiere un pago único. Existen varios paquetes según los formatos y extras que incluyan. Consulta su web para conocer los precios actualizados antes de decidir.',
      },
      {
        question: '¿Brandmark o Looka: cuál elegir?',
        answer:
          'Ambos generan logos e identidad visual con IA y tienen un planteamiento parecido. Looka apuesta más por el kit de marca por suscripción y Brandmark por el pago único del paquete de archivos. Lo práctico es probar los dos gratis y comparar los resultados.',
      },
    ],
  },
  Hatchful: {
    name: 'Hatchful',
    tagline: 'Creador de logos gratuito de Shopify para negocios y tiendas online',
    intro:
      'Hatchful es un generador de logotipos gratuito desarrollado por Shopify. Funciona con un proceso guiado: eliges el sector de tu negocio, el estilo visual y dónde vas a usar el logo, y la herramienta propone varias opciones que puedes ajustar en color, tipografía e icono. Descarga los archivos listos para web y redes sociales, y está especialmente orientado a quien está montando una tienda online o un negocio pequeño.',
    useCases: [
      'Crear un logo gratis para una tienda online',
      'Obtener imágenes de perfil y cabeceras para redes sociales',
      'Probar ideas de identidad visual sin coste',
      'Dar imagen a un proyecto en fase inicial',
      'Generar un logo provisional antes de encargar uno profesional',
    ],
    features: [
      'Proceso guiado por sector y estilo visual',
      'Propuestas de logo personalizables en color, icono y tipografía',
      'Descarga gratuita de archivos listos para usar',
      'Formatos preparados para redes sociales y web',
      'Sin necesidad de registro complejo ni conocimientos de diseño',
    ],
    pros: [
      'Completamente gratuito, incluida la descarga de archivos',
      'Muy rápido y sencillo, apto para cualquier usuario',
      'Genera también los recursos para perfiles sociales',
      'Respaldado por Shopify, con enfoque claro en comercio electrónico',
    ],
    cons: [
      'Opciones de personalización bastante limitadas',
      'Los logos pueden resultar genéricos y parecidos entre sí',
      'No entrega archivos vectoriales completos ni kit de marca avanzado',
    ],
    pricingNote:
      'Hatchful es gratuito: puedes generar el logo y descargar los archivos sin pagar ni introducir tarjeta. Shopify lo ofrece como herramienta de captación para su plataforma de comercio electrónico. Al no haber planes de pago, no hay funciones premium que desbloquear.',
    faqs: [
      {
        question: '¿Qué es Hatchful?',
        answer:
          'Hatchful es el generador de logos gratuito de Shopify. Mediante un proceso guiado por sector y estilo, propone varios logotipos personalizables y permite descargar los archivos listos para usar en una web, una tienda online o los perfiles de redes sociales.',
      },
      {
        question: '¿Hatchful es realmente gratis?',
        answer:
          'Sí. Tanto la generación del logo como la descarga de los archivos son gratuitas, sin necesidad de pagar ni introducir una tarjeta. Shopify lo mantiene como herramienta de captación hacia su plataforma de comercio electrónico.',
      },
      {
        question: '¿Puedo usar el logo de Hatchful en mi negocio?',
        answer:
          'Sí, está pensado precisamente para eso y puedes emplearlo en tu tienda, tu web y tus redes. Conviene revisar sus condiciones de uso si planeas registrar la marca, ya que los elementos gráficos son plantillas que otros usuarios también pueden generar.',
      },
    ],
  },
  Durable: {
    name: 'Durable',
    tagline: 'Constructor de webs con IA que genera un sitio completo en minutos',
    intro:
      'Durable es una plataforma que genera sitios web completos mediante inteligencia artificial. Basta con indicar el tipo de negocio y la ubicación para que cree una web con estructura, textos e imágenes que después se puede editar. Más allá del sitio, incluye herramientas de gestión pensadas para autónomos y pequeños negocios: CRM básico, facturación y asistentes para marketing y contenidos.',
    useCases: [
      'Crear una web de negocio completa en pocos minutos',
      'Poner en marcha la presencia online de un autónomo o pequeño negocio',
      'Generar textos y contenido inicial para el sitio',
      'Gestionar contactos y facturas desde la misma plataforma',
      'Publicar una landing sencilla sin conocimientos técnicos',
    ],
    features: [
      'Generación automática de la web a partir del tipo de negocio',
      'Editor visual para ajustar secciones, textos e imágenes',
      'Alojamiento y dominio gestionados desde la plataforma',
      'CRM y facturación integrados',
      'Asistentes de IA para marketing y creación de contenidos',
    ],
    pros: [
      'Rapidez extrema: web publicable en cuestión de minutos',
      'Reúne web, CRM y facturación en un solo producto',
      'No requiere conocimientos técnicos ni de diseño',
      'Buena opción para validar un negocio con poca inversión',
    ],
    cons: [
      'Personalización limitada frente a constructores más flexibles',
      'Los textos generados son genéricos y conviene reescribirlos',
      'Publicar con dominio propio requiere plan de pago',
    ],
    pricingNote:
      'Durable emplea un modelo freemium: se puede generar y previsualizar la web sin coste, pero publicarla con dominio propio y usar las funciones de negocio requiere suscripción. Los planes de pago suelen situarse en el entorno de unas decenas de euros al mes, con descuento en pago anual.',
    faqs: [
      {
        question: '¿Qué es Durable?',
        answer:
          'Durable es un constructor de webs con inteligencia artificial que genera un sitio completo (estructura, textos e imágenes) a partir del tipo de negocio y la ubicación. Además incorpora CRM, facturación y asistentes de marketing, orientados a autónomos y pequeños negocios.',
      },
      {
        question: '¿Durable es gratis?',
        answer:
          'Puedes generar y previsualizar tu web sin coste, pero publicarla con dominio propio y acceder a las funciones de negocio requiere un plan de pago. Las cuotas mensuales se sitúan en el rango habitual de los constructores web. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Durable funciona en español?',
        answer:
          'La plataforma admite contenido en español y puedes editar o reescribir todos los textos generados. Aun así, el contenido inicial que produce la IA suele ser genérico, así que conviene revisarlo y adaptarlo al tono y a los servicios reales de tu negocio.',
      },
    ],
  },
  'Wix ADI': {
    name: 'Wix ADI',
    tagline: 'Diseño web automático de Wix a partir de unas pocas preguntas',
    intro:
      'Wix ADI (Artificial Design Intelligence) es la función de Wix que crea automáticamente un sitio web a partir de las respuestas del usuario a unas preguntas sobre su negocio y sus preferencias. Genera una estructura de páginas, un diseño y contenidos iniciales que después se pueden editar con las herramientas habituales de Wix. Está pensada para usuarios sin experiencia que quieren un sitio funcional sin partir de una plantilla en blanco.',
    useCases: [
      'Crear una web sin experiencia previa en diseño',
      'Obtener una estructura de páginas inicial adaptada al sector',
      'Montar rápidamente la web de un negocio local',
      'Generar un punto de partida para editar luego en el editor de Wix',
      'Publicar un sitio con dominio y alojamiento gestionados',
    ],
    features: [
      'Creación automática del sitio a partir de un cuestionario',
      'Estructura y contenido inicial adaptados al tipo de negocio',
      'Edición posterior con el editor visual de Wix',
      'Integración con el ecosistema de apps y funciones de Wix',
      'Alojamiento, dominio y publicación desde la misma plataforma',
    ],
    pros: [
      'Reduce mucho el tiempo de arranque de un sitio web',
      'Accesible para cualquier usuario sin conocimientos técnicos',
      'Se apoya en toda la infraestructura y las apps de Wix',
      'Permite editar libremente el resultado generado',
    ],
    cons: [
      'Los sitios resultantes tienden a ser genéricos',
      'El plan gratuito muestra publicidad de Wix y subdominio propio',
      'Menos control sobre el código y el rendimiento que otras opciones',
    ],
    pricingNote:
      'Wix funciona con un modelo freemium: puedes crear y publicar un sitio gratis con subdominio de Wix y anuncios de la plataforma. Para usar dominio propio, quitar la publicidad y activar comercio electrónico hay que contratar un plan de pago, con cuotas mensuales de un rango amplio.',
    faqs: [
      {
        question: '¿Qué es Wix ADI?',
        answer:
          'Wix ADI es la función de diseño automático de Wix. Te hace unas preguntas sobre tu negocio y tus preferencias y, a partir de ellas, genera un sitio web completo con estructura, diseño y contenido inicial, que después puedes editar con el editor visual de Wix.',
      },
      {
        question: '¿Wix ADI es gratis?',
        answer:
          'Puedes crear y publicar un sitio sin pagar, pero con un subdominio de Wix y anuncios de la plataforma. Para usar dominio propio, eliminar la publicidad o vender online necesitas un plan de pago. Consulta su web para conocer los planes y precios actualizados.',
      },
      {
        question: '¿Wix ADI o el editor de Wix?',
        answer:
          'ADI genera el sitio automáticamente y es más rápido, pero ofrece menos control. El editor de Wix da libertad total de diseño a cambio de más trabajo. Lo habitual es dejar que ADI cree la base y ajustar después el resultado con el editor.',
      },
    ],
  },
  'Framer AI': {
    name: 'Framer AI',
    tagline: 'Editor web visual con funciones de IA para diseñar y publicar sitios rápido',
    intro:
      'Framer es una herramienta de diseño y publicación web desarrollada por la empresa neerlandesa Framer B.V. Permite construir páginas en un lienzo visual, con control fino de maquetación, animaciones e interacciones, y publicarlas directamente sin escribir código. Sus funciones de IA ayudan a generar secciones y páginas iniciales a partir de una descripción en texto, además de asistir con textos y ajustes de estilo. Se usa sobre todo para landings, portfolios y webs de producto.',
    useCases: [
      'Crear landing pages de producto sin depender de desarrollo',
      'Publicar portfolios y webs personales con diseño cuidado',
      'Montar prototipos navegables que luego se convierten en web real',
      'Diseñar webs corporativas con CMS para blog y casos de éxito',
      'Iterar rápido sobre variantes de página para campañas',
    ],
    features: [
      'Lienzo visual con maquetación responsive por breakpoints',
      'Generación de páginas y secciones asistida por IA',
      'Animaciones e interacciones sin escribir código',
      'CMS integrado para blogs y colecciones de contenido',
      'Publicación con hosting y dominio propio incluidos',
    ],
    pros: [
      'Curva de aprendizaje suave para quien viene de herramientas de diseño',
      'Del diseño a la web publicada sin pasar por desarrollo',
      'Buen resultado visual y control real sobre animaciones',
      'Plantillas y componentes que aceleran el arranque',
    ],
    cons: [
      'Menos flexible que programar la web a medida en proyectos complejos',
      'Dependencia de la plataforma: migrar fuera no es trivial',
      'Los planes con más tráfico y funciones encarecen bastante el proyecto',
    ],
    pricingNote:
      'Framer sigue un modelo freemium: suele ofrecer un plan gratuito con limitaciones (subdominio propio de la plataforma y límites de páginas o tráfico) y varios planes de pago mensuales según el número de sitios, visitas y funciones de CMS o colaboración. Las funciones de IA pueden estar sujetas a límites de uso según el plan.',
    faqs: [
      {
        question: '¿Qué es Framer AI?',
        answer:
          'Framer es una plataforma de diseño y publicación web con funciones de inteligencia artificial. Permite crear páginas en un editor visual, generar secciones a partir de descripciones en texto y publicar el sitio directamente, sin necesidad de escribir código ni contratar hosting aparte.',
      },
      {
        question: '¿Framer es gratis?',
        answer:
          'Framer tiene un plan gratuito con límites, pensado para probar la herramienta y publicar proyectos sencillos en un subdominio de la plataforma. Para usar dominio propio, más páginas o funciones avanzadas hay que pasar a un plan de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Framer funciona en español?',
        answer:
          'Puedes crear webs íntegramente en español y publicar contenido multiidioma. La interfaz de la herramienta está principalmente en inglés, aunque es bastante visual, por lo que no supone un obstáculo grande para trabajar con ella en el día a día.',
      },
    ],
  },
  'Vectra AI': {
    name: 'Vectra AI',
    tagline: 'Plataforma NDR que detecta amenazas analizando el comportamiento de la red',
    intro:
      'Vectra AI es una empresa estadounidense de ciberseguridad centrada en la detección y respuesta ante amenazas mediante análisis del tráfico de red y de la actividad en entornos cloud e identidad. Su plataforma aplica modelos de aprendizaje automático para identificar comportamientos sospechosos (movimientos laterales, escalada de privilegios, exfiltración) que las firmas tradicionales no capturan. Está orientada a equipos SOC de empresas medianas y grandes que necesitan reducir el ruido de alertas.',
    useCases: [
      'Detectar movimientos laterales dentro de la red corporativa',
      'Identificar cuentas comprometidas y abuso de identidades',
      'Vigilar actividad anómala en entornos cloud e híbridos',
      'Priorizar alertas para equipos SOC saturados',
      'Apoyar investigaciones forenses tras un incidente',
    ],
    features: [
      'Detección de amenazas basada en comportamiento de red',
      'Priorización automática de entidades y alertas por riesgo',
      'Cobertura de entornos cloud, identidad y SaaS',
      'Integración con SIEM, EDR y herramientas de respuesta',
      'Paneles de investigación con contexto del ataque',
    ],
    pros: [
      'Detecta actividad maliciosa sin depender de firmas conocidas',
      'Reduce el ruido de alertas gracias a la priorización por riesgo',
      'Buena cobertura de entornos híbridos y de identidad',
    ],
    cons: [
      'Solución empresarial: precio y despliegue fuera del alcance de pymes pequeñas',
      'Requiere equipo de seguridad con experiencia para sacarle partido',
      'El ajuste inicial para reducir falsos positivos lleva tiempo',
    ],
    pricingNote:
      'Vectra AI es una plataforma comercial de pago dirigida al mercado empresarial. No publica tarifas cerradas: el coste se negocia con el fabricante o un partner y depende del número de usuarios, sensores, volumen de tráfico y módulos contratados. Lo habitual es solicitar una demostración y una propuesta a medida.',
    faqs: [
      {
        question: '¿Qué es Vectra AI?',
        answer:
          'Vectra AI es una plataforma de ciberseguridad que detecta amenazas analizando el comportamiento de la red, la nube y las identidades con modelos de aprendizaje automático. Su objetivo es descubrir ataques en curso que no dejan una firma conocida y priorizar las alertas más relevantes para el equipo de seguridad.',
      },
      {
        question: '¿Vectra AI es gratis?',
        answer:
          'No. Vectra AI es una solución empresarial de pago, con licencias que se contratan mediante presupuesto personalizado según el tamaño de la organización y los módulos elegidos. Suele ofrecer demostraciones y pruebas guiadas, pero no un plan gratuito de uso continuado.',
      },
      {
        question: '¿Para qué sirve Vectra AI?',
        answer:
          'Sirve para detectar y responder a ataques que ya están dentro de la organización: movimientos laterales, uso indebido de credenciales, escalada de privilegios o exfiltración de datos. Aporta contexto e integración con SIEM y EDR para que el equipo SOC investigue y contenga más rápido.',
      },
    ],
  },
  Cylance: {
    name: 'Cylance',
    tagline: 'Antivirus de nueva generación que bloquea malware con modelos predictivos',
    intro:
      'Cylance es una solución de protección de endpoints que popularizó el uso de aprendizaje automático para bloquear malware antes de su ejecución, sin depender de firmas ni de actualizaciones constantes. Nacida como empresa independiente, pasó a formar parte de BlackBerry y ha cambiado de manos en operaciones posteriores. Se dirige a organizaciones que buscan prevención en el puesto de trabajo con bajo consumo de recursos y funcionamiento incluso sin conexión.',
    useCases: [
      'Proteger portátiles y equipos de sobremesa frente a malware',
      'Sustituir antivirus tradicionales basados en firmas',
      'Cubrir equipos que trabajan a menudo sin conexión',
      'Reducir el impacto de ransomware en el puesto de trabajo',
      'Aportar telemetría de endpoint a un equipo de seguridad',
    ],
    features: [
      'Bloqueo de malware mediante modelos de aprendizaje automático',
      'Protección que funciona sin conexión permanente a la nube',
      'Control de scripts, memoria y dispositivos externos',
      'Consola centralizada de gestión de políticas',
      'Módulos complementarios de detección y respuesta',
    ],
    pros: [
      'Prevención antes de la ejecución, sin depender de firmas diarias',
      'Consumo de recursos contenido en el equipo del usuario',
      'Funciona aunque el equipo esté desconectado de la red',
    ],
    cons: [
      'Los cambios de propiedad han generado dudas sobre su hoja de ruta',
      'Puede requerir ajuste de políticas para evitar falsos positivos',
      'Sin plan gratuito: es un producto de pago para empresas',
    ],
    pricingNote:
      'Cylance es un producto comercial de pago con licenciamiento por endpoint y suscripción anual, normalmente contratado a través de partners o distribuidores. El precio varía según el número de equipos, los módulos incluidos y si se añade servicio gestionado. No suele publicarse una tarifa pública cerrada;',
    faqs: [
      {
        question: '¿Qué es Cylance?',
        answer:
          'Cylance es una solución de seguridad para endpoints que utiliza aprendizaje automático para identificar y bloquear archivos maliciosos antes de que se ejecuten. A diferencia de los antivirus clásicos, no depende de una base de firmas actualizada continuamente, lo que le permite funcionar también sin conexión.',
      },
      {
        question: '¿Cylance es gratis?',
        answer:
          'No. Cylance se comercializa mediante licencias de pago por equipo protegido, con contratación habitualmente anual y a través de distribuidores. Puede haber pruebas o demostraciones para empresas, pero no existe una versión gratuita de uso indefinido. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Cylance?',
        answer:
          'Sirve para proteger ordenadores y servidores frente a malware, ransomware y ataques basados en scripts. Está pensado como sustituto o complemento del antivirus tradicional en entornos corporativos, con una consola central desde la que aplicar políticas de seguridad a toda la flota de equipos.',
      },
    ],
  },
  Exabeam: {
    name: 'Exabeam',
    tagline: 'Plataforma SIEM y UEBA que detecta amenazas por comportamiento anómalo',
    intro:
      'Exabeam es una compañía de ciberseguridad conocida por su enfoque de analítica de comportamiento de usuarios y entidades (UEBA) aplicada sobre registros de seguridad. Su plataforma construye líneas base de actividad normal para cada usuario y dispositivo, y señala desviaciones que pueden indicar cuentas comprometidas o amenazas internas. Se dirige a centros de operaciones de seguridad que necesitan correlacionar grandes volúmenes de logs y automatizar parte de la investigación.',
    useCases: [
      'Detectar cuentas comprometidas por actividad fuera de lo normal',
      'Investigar amenazas internas y uso indebido de privilegios',
      'Centralizar y correlacionar logs de seguridad de toda la organización',
      'Reconstruir cronologías de incidentes para el equipo SOC',
      'Cumplir requisitos de auditoría y retención de registros',
    ],
    features: [
      'Analítica de comportamiento de usuarios y entidades (UEBA)',
      'Ingesta y correlación de logs a gran escala',
      'Cronologías automáticas de sesión para investigar incidentes',
      'Puntuación de riesgo por usuario y dispositivo',
      'Playbooks de respuesta y automatización de tareas',
    ],
    pros: [
      'El análisis de comportamiento detecta lo que las reglas fijas no ven',
      'Las cronologías automáticas ahorran horas de investigación manual',
      'Amplia capacidad de ingesta de fuentes de datos heterogéneas',
    ],
    cons: [
      'Producto complejo: requiere tiempo de implantación y afinado',
      'Coste elevado, orientado a organizaciones grandes',
      'El valor depende mucho de la calidad de los logs que se ingesten',
    ],
    pricingNote:
      'Exabeam es una plataforma de pago para empresas. El precio se establece mediante presupuesto personalizado y suele depender del volumen de datos ingeridos o del número de usuarios monitorizados, además de los módulos contratados. No publica tarifas cerradas ni ofrece plan gratuito;',
    faqs: [
      {
        question: '¿Qué es Exabeam?',
        answer:
          'Exabeam es una plataforma de seguridad que combina funciones de SIEM con analítica de comportamiento de usuarios y entidades. Analiza los registros de la organización, aprende qué es actividad normal para cada usuario y alerta cuando detecta desviaciones que puedan indicar un ataque o un uso indebido.',
      },
      {
        question: '¿Para qué sirve Exabeam?',
        answer:
          'Sirve para que un equipo SOC detecte cuentas comprometidas, amenazas internas y movimientos sospechosos dentro de la red. Además centraliza logs, puntúa el riesgo de cada usuario y genera cronologías de incidentes que aceleran la investigación y la respuesta.',
      },
      {
        question: '¿Exabeam es gratis?',
        answer:
          'No. Exabeam se comercializa como solución empresarial de pago, con licencias negociadas según el volumen de datos o el número de usuarios. No dispone de un plan gratuito de uso continuado, aunque sí ofrece demostraciones para organizaciones interesadas.',
      },
    ],
  },
  Securonix: {
    name: 'Securonix',
    tagline: 'SIEM en la nube con analítica de comportamiento para detectar amenazas',
    intro:
      'Securonix es una plataforma de seguridad estadounidense que ofrece SIEM en la nube junto con analítica de comportamiento de usuarios y entidades. Recopila registros de aplicaciones, redes, identidades y servicios cloud, y aplica modelos estadísticos y de aprendizaje automático para detectar desviaciones respecto al comportamiento habitual. Está orientada a equipos de seguridad de grandes organizaciones que quieren reducir falsos positivos y automatizar la respuesta a incidentes.',
    useCases: [
      'Detectar amenazas internas y abuso de cuentas privilegiadas',
      'Centralizar el análisis de logs en entornos cloud e híbridos',
      'Priorizar incidentes según puntuación de riesgo acumulada',
      'Automatizar tareas repetitivas de triaje en el SOC',
      'Cubrir requisitos regulatorios de monitorización y retención',
    ],
    features: [
      'SIEM entregado como servicio en la nube',
      'Analítica de comportamiento de usuarios y entidades (UEBA)',
      'Puntuación de riesgo acumulativa por entidad',
      'Casos de uso y contenido de detección predefinidos',
      'Capacidades de respuesta y orquestación integradas',
    ],
    pros: [
      'Modelo cloud que evita gestionar infraestructura de SIEM propia',
      'La analítica de comportamiento reduce el ruido frente a reglas fijas',
      'Amplio catálogo de conectores y casos de uso listos para usar',
    ],
    cons: [
      'Implantación larga y necesidad de afinar el contenido de detección',
      'Coste elevado y orientado a empresas grandes',
      'La interfaz puede resultar densa para usuarios noveles',
    ],
    pricingNote:
      'Securonix es una solución de pago dirigida al mercado empresarial. El coste se acuerda mediante presupuesto y suele calcularse por número de identidades o volumen de datos analizados, con contratos de suscripción anuales. No existe plan gratuito público;',
    faqs: [
      {
        question: '¿Qué es Securonix?',
        answer:
          'Securonix es una plataforma de seguridad en la nube que combina SIEM y analítica de comportamiento. Ingiere logs de toda la organización, aprende patrones de actividad normal y genera alertas priorizadas por riesgo cuando detecta comportamientos anómalos en usuarios, dispositivos o servicios cloud.',
      },
      {
        question: '¿Para qué sirve Securonix?',
        answer:
          'Sirve para detectar amenazas internas, cuentas comprometidas y ataques en curso, así como para centralizar la monitorización de seguridad y cumplir requisitos regulatorios. También ayuda al SOC a automatizar el triaje de alertas y reducir el tiempo de respuesta ante incidentes.',
      },
      {
        question: '¿Securonix es gratis?',
        answer:
          'No. Se trata de un producto empresarial de pago cuyo precio se negocia con el fabricante o un partner, normalmente en función del número de identidades monitorizadas o del volumen de datos. Ofrece demostraciones, pero no una versión gratuita de uso continuado.',
      },
    ],
  },
  LogRhythm: {
    name: 'LogRhythm',
    tagline: 'SIEM con analítica de comportamiento para monitorizar y responder a incidentes',
    intro:
      'LogRhythm es una plataforma SIEM veterana que centraliza la recogida de logs, la correlación de eventos y la analítica de comportamiento para detectar actividad sospechosa. Incluye funciones de monitorización de usuarios y de red, además de flujos de respuesta automatizada para el equipo de seguridad. Tras su unión con Exabeam, su oferta se ha integrado en un portfolio más amplio, pero sigue dirigiéndose a organizaciones que necesitan visibilidad y cumplimiento normativo.',
    useCases: [
      'Centralizar logs de servidores, redes y aplicaciones',
      'Detectar comportamientos anómalos en usuarios y endpoints',
      'Generar informes para auditorías y cumplimiento normativo',
      'Automatizar respuestas ante alertas de seguridad recurrentes',
      'Dar visibilidad a equipos SOC con recursos limitados',
    ],
    features: [
      'Recogida y normalización de logs de múltiples fuentes',
      'Correlación de eventos y reglas de detección personalizables',
      'Analítica de comportamiento de usuarios y de red',
      'Flujos de respuesta automatizada ante incidentes',
      'Informes preconfigurados para cumplimiento normativo',
    ],
    pros: [
      'Amplia cobertura de fuentes de datos y de casos de cumplimiento',
      'Informes regulatorios listos que ahorran trabajo en auditorías',
      'Buena opción para equipos SOC pequeños que empiezan con SIEM',
    ],
    cons: [
      'Despliegue y afinado exigentes en tiempo y conocimiento',
      'La integración tras la fusión genera incertidumbre sobre el producto',
      'Coste de licencia y de almacenamiento de logs a largo plazo',
    ],
    pricingNote:
      'LogRhythm se comercializa mediante licencias de pago para empresas, con modelos que han combinado el número de dispositivos o el volumen de datos procesados. El precio se solicita al fabricante o a un partner y depende de la arquitectura elegida y de los módulos contratados.',
    faqs: [
      {
        question: '¿Qué es LogRhythm?',
        answer:
          'LogRhythm es una plataforma SIEM que recoge y correlaciona registros de seguridad de toda la organización, aplica analítica de comportamiento para detectar anomalías y ofrece flujos de respuesta automatizada. Se utiliza tanto para detección de amenazas como para cumplir requisitos de auditoría.',
      },
      {
        question: '¿Para qué sirve LogRhythm?',
        answer:
          'Sirve para centralizar la monitorización de seguridad: reúne logs de servidores, red y aplicaciones, detecta actividad sospechosa, alerta al equipo SOC y genera informes de cumplimiento. También permite automatizar acciones de contención ante determinados tipos de incidente.',
      },
      {
        question: '¿LogRhythm es gratis?',
        answer:
          'No. Es una solución empresarial de pago con licencias que se contratan a través del fabricante o distribuidores. No dispone de un plan gratuito permanente, aunque puede facilitar demostraciones o pruebas a organizaciones interesadas. Consulta su web para precios actualizados.',
      },
    ],
  },
  SentinelOne: {
    name: 'SentinelOne',
    tagline: 'Plataforma XDR que detecta y revierte ataques en endpoints de forma autónoma',
    intro:
      'SentinelOne es una plataforma de ciberseguridad estadounidense centrada en la protección de endpoints, servidores y cargas de trabajo en la nube. Su agente aplica modelos de aprendizaje automático directamente en el dispositivo para detectar comportamientos maliciosos y responder de forma autónoma, incluyendo la capacidad de aislar equipos y revertir cambios provocados por ransomware. Se dirige tanto a empresas medianas como a grandes organizaciones con equipos SOC.',
    useCases: [
      'Bloquear ransomware y revertir los ficheros cifrados',
      'Aislar automáticamente un equipo comprometido de la red',
      'Investigar incidentes con la línea temporal del ataque',
      'Proteger cargas de trabajo en servidores y contenedores',
      'Sustituir antivirus tradicionales por una solución EDR/XDR',
    ],
    features: [
      'Agente con detección basada en comportamiento en el propio dispositivo',
      'Respuesta autónoma: aislamiento, eliminación y reversión de cambios',
      'Visibilidad EDR con reconstrucción del árbol de procesos',
      'Protección de servidores, contenedores y entornos cloud',
      'Consola unificada e integraciones con SIEM y SOAR',
    ],
    pros: [
      'La reversión automática limita el daño de un ataque de ransomware',
      'Funciona aunque el endpoint pierda conexión con la nube',
      'Buena visibilidad forense sin necesidad de herramientas adicionales',
    ],
    cons: [
      'Precio por endpoint que se acumula rápido en flotas grandes',
      'Requiere afinado de políticas para controlar falsos positivos',
      'La cantidad de módulos complica elegir la licencia adecuada',
    ],
    pricingNote:
      'SentinelOne es un producto de pago con licenciamiento por endpoint y suscripción anual, disponible en varios niveles según las capacidades de EDR, XDR y servicios gestionados incluidos. El coste depende del número de dispositivos y de los módulos contratados, y suele negociarse con el fabricante o un partner.',
    faqs: [
      {
        question: '¿Qué es SentinelOne?',
        answer:
          'SentinelOne es una plataforma de seguridad para endpoints y cargas de trabajo en la nube. Su agente detecta comportamientos maliciosos con modelos de aprendizaje automático que se ejecutan en el propio dispositivo y puede responder de forma autónoma aislando el equipo o revirtiendo los cambios del ataque.',
      },
      {
        question: '¿Para qué sirve SentinelOne?',
        answer:
          'Sirve para prevenir, detectar y responder a ataques en ordenadores, servidores y contenedores. Se usa como sustituto de antivirus tradicionales, aportando además capacidades EDR y XDR: investigación forense, aislamiento automático de equipos y reversión de ficheros cifrados por ransomware.',
      },
      {
        question: '¿SentinelOne es gratis?',
        answer:
          'No. Se comercializa mediante licencias de pago por dispositivo, con distintos niveles de producto y contratación anual. No existe un plan gratuito de uso continuado, aunque suele ofrecer pruebas y demostraciones a empresas. Consulta su web para precios actualizados.',
      },
    ],
  },
  CrowdStrike: {
    name: 'CrowdStrike',
    tagline: 'Plataforma de seguridad cloud que detiene brechas en endpoints e identidades',
    intro:
      'CrowdStrike es una compañía estadounidense de ciberseguridad cuya plataforma Falcon protege endpoints, identidades, cargas de trabajo cloud y datos desde un único agente ligero. Combina detección basada en comportamiento, inteligencia de amenazas y caza dirigida por analistas, con capacidades de respuesta automatizada. Es una de las soluciones EDR/XDR más extendidas en grandes organizaciones y también se ofrece con servicios gestionados de detección y respuesta.',
    useCases: [
      'Proteger flotas de endpoints frente a malware y ataques sin fichero',
      'Contener automáticamente equipos comprometidos durante un incidente',
      'Detectar ataques contra identidades y credenciales',
      'Vigilar cargas de trabajo y contenedores en la nube',
      'Apoyarse en servicios gestionados de caza de amenazas',
    ],
    features: [
      'Agente único y ligero con arquitectura nativa en la nube',
      'Detección por comportamiento e indicadores de ataque',
      'Respuesta automatizada y contención de dispositivos',
      'Inteligencia de amenazas integrada en las alertas',
      'Módulos para identidad, cloud, exposición y datos',
    ],
    pros: [
      'Un único agente cubre endpoint, identidad y cargas cloud',
      'Detección muy sólida frente a ataques sin fichero y en memoria',
      'Ecosistema maduro de integraciones y servicios gestionados',
    ],
    cons: [
      'Coste alto, sobre todo al sumar varios módulos',
      'El modelo por módulos complica calcular el precio final',
      'Aprovecharlo del todo exige un equipo de seguridad con experiencia',
    ],
    pricingNote:
      'CrowdStrike se vende por suscripción con licenciamiento por endpoint y por módulos, en distintos paquetes según las capacidades incluidas (prevención, EDR, identidad, cloud, servicios gestionados). Los precios de lista existen para algunos paquetes, pero lo habitual en empresa es un presupuesto negociado.',
    faqs: [
      {
        question: '¿Qué es CrowdStrike?',
        answer:
          'CrowdStrike es una plataforma de ciberseguridad nativa en la nube, conocida por su producto Falcon. Con un único agente ligero protege endpoints, identidades y cargas de trabajo cloud, detectando ataques por su comportamiento y permitiendo respuestas automatizadas como el aislamiento de un equipo comprometido.',
      },
      {
        question: '¿Para qué sirve CrowdStrike?',
        answer:
          'Sirve para prevenir y detener brechas de seguridad: bloquea malware y ataques sin fichero, detecta el uso indebido de credenciales, vigila entornos cloud y ofrece capacidades EDR y XDR para que el equipo de seguridad investigue y contenga incidentes con rapidez.',
      },
      {
        question: '¿CrowdStrike es gratis?',
        answer:
          'No. Es una solución de pago por suscripción, con precio por dispositivo protegido y por módulos contratados. Ofrece pruebas gratuitas limitadas en el tiempo para evaluar la plataforma, pero no un plan gratuito permanente. Consulta su web para precios actualizados.',
      },
    ],
  },
  'Siemens MindSphere': {
    name: 'Siemens MindSphere',
    tagline: 'Plataforma IoT industrial de Siemens para conectar máquinas y analizar datos',
    intro:
      'MindSphere es la plataforma de Internet de las cosas industrial desarrollada por Siemens, hoy integrada en su oferta de software bajo la marca Insights Hub. Permite conectar máquinas, autómatas y sensores de planta, recoger sus datos en la nube y analizarlos para optimizar procesos, controlar el rendimiento de los activos y anticipar averías. Está pensada para fabricantes y operadores industriales que quieren digitalizar sus líneas de producción.',
    useCases: [
      'Conectar máquinas y autómatas de planta a la nube',
      'Monitorizar en tiempo real el rendimiento de activos industriales',
      'Anticipar averías mediante analítica sobre datos de sensores',
      'Comparar la eficiencia entre líneas o plantas distintas',
      'Desarrollar aplicaciones industriales sobre datos de producción',
    ],
    features: [
      'Conectividad con equipos industriales y protocolos de planta',
      'Almacenamiento y contextualización de datos de máquina',
      'Analítica y paneles de rendimiento de activos',
      'Aplicaciones y módulos específicos para la industria',
      'APIs y entorno para desarrollar soluciones propias',
    ],
    pros: [
      'Integración natural con el ecosistema de automatización de Siemens',
      'Pensada específicamente para entornos industriales, no genérica',
      'Permite construir aplicaciones propias sobre los datos de planta',
    ],
    cons: [
      'Implantación compleja: exige proyecto de integración con OT',
      'Coste elevado y orientado a industria mediana y grande',
      'Riesgo de dependencia del ecosistema del fabricante',
    ],
    pricingNote:
      'Es una plataforma comercial de pago dirigida a empresas industriales. El coste depende del número de activos conectados, del volumen de datos y de los módulos o aplicaciones contratadas, y normalmente se articula mediante suscripción con presupuesto a medida.',
    faqs: [
      {
        question: '¿Qué es Siemens MindSphere?',
        answer:
          'MindSphere es la plataforma de IoT industrial de Siemens, actualmente comercializada como Insights Hub. Permite conectar máquinas y sensores de planta, recoger sus datos en la nube y analizarlos para monitorizar activos, mejorar la eficiencia de producción y anticipar mantenimientos.',
      },
      {
        question: '¿Para qué sirve MindSphere?',
        answer:
          'Sirve para digitalizar procesos industriales: conectar equipos, centralizar datos de producción, visualizar el rendimiento de los activos y aplicar analítica que permita reducir paradas no planificadas. También ofrece APIs para que las empresas desarrollen sus propias aplicaciones industriales.',
      },
      {
        question: '¿MindSphere es gratis?',
        answer:
          'No. Se trata de una plataforma empresarial de pago por suscripción, cuyo precio depende de los activos conectados y los módulos contratados. Siemens suele ofrecer demostraciones y entornos de evaluación, pero no un plan gratuito de uso productivo continuado.',
      },
    ],
  },
  Predix: {
    name: 'Predix',
    tagline: 'Plataforma industrial de GE para analizar datos de activos y equipos',
    intro:
      'Predix es la plataforma de software industrial impulsada por GE Digital para recoger, almacenar y analizar datos procedentes de maquinaria y activos conectados. Su enfoque son los sectores intensivos en equipos, como energía, aviación o manufactura, donde el análisis de datos operativos permite mejorar el rendimiento y planificar el mantenimiento. Sobre ella se apoyan aplicaciones de gestión de rendimiento de activos y de operaciones industriales.',
    useCases: [
      'Analizar datos operativos de turbinas y maquinaria pesada',
      'Planificar mantenimiento a partir del estado real del equipo',
      'Optimizar el rendimiento de activos en plantas industriales',
      'Centralizar datos de sensores de instalaciones distribuidas',
      'Construir aplicaciones industriales sobre datos históricos',
    ],
    features: [
      'Ingesta de datos de sensores y equipos industriales',
      'Modelado y contextualización de activos',
      'Analítica orientada al rendimiento y la fiabilidad',
      'Base para aplicaciones de gestión de activos (APM)',
      'Despliegue en nube y opciones para entornos locales',
    ],
    pros: [
      'Conocimiento profundo del dominio industrial y de activos pesados',
      'Buena base para casos de mantenimiento y fiabilidad',
      'Se integra con aplicaciones de gestión de rendimiento de activos',
    ],
    cons: [
      'Proyectos de implantación largos y costosos',
      'Orientada a grandes industrias, poco accesible para pymes',
      'La estrategia de producto ha ido cambiando con los años',
    ],
    pricingNote:
      'Predix es una oferta comercial de pago para empresas industriales. No publica tarifas cerradas: el coste se define por proyecto, en función de los activos conectados, el volumen de datos y las aplicaciones contratadas, normalmente con contratos de suscripción.',
    faqs: [
      {
        question: '¿Qué es Predix?',
        answer:
          'Predix es la plataforma de software industrial de GE Digital, diseñada para recoger y analizar datos de máquinas y activos conectados. Se utiliza en sectores como energía o manufactura para monitorizar equipos, mejorar su rendimiento y anticipar necesidades de mantenimiento.',
      },
      {
        question: '¿Para qué sirve Predix?',
        answer:
          'Sirve como base de datos y analítica industrial: centraliza la información de sensores y equipos, la contextualiza por activo y permite construir aplicaciones de gestión del rendimiento, fiabilidad y mantenimiento predictivo sobre esa información operativa.',
      },
      {
        question: '¿Predix es gratis?',
        answer:
          'No. Es una plataforma empresarial de pago cuyo coste se determina por proyecto y suscripción, según el número de activos y las aplicaciones contratadas. No existe un plan gratuito para uso productivo. Consulta su web para conocer las condiciones actualizadas.',
      },
    ],
  },
  Uptake: {
    name: 'Uptake',
    tagline: 'Software de analítica industrial para predecir fallos en equipos y flotas',
    intro:
      'Uptake es una empresa estadounidense de software que aplica analítica e inteligencia artificial a datos industriales para anticipar fallos en equipos y flotas. Sus soluciones procesan telemetría de máquinas, vehículos y activos de infraestructura, y generan alertas y recomendaciones de mantenimiento antes de que se produzca una avería. Trabaja con sectores como energía, transporte, minería y manufactura.',
    useCases: [
      'Anticipar averías en flotas de vehículos y maquinaria',
      'Reducir paradas no planificadas en plantas industriales',
      'Priorizar órdenes de trabajo según el riesgo de fallo',
      'Analizar telemetría de activos distribuidos geográficamente',
      'Mejorar la planificación de repuestos y mantenimiento',
    ],
    features: [
      'Modelos predictivos de fallo sobre datos de telemetría',
      'Alertas con diagnóstico y recomendaciones de actuación',
      'Conectores con sistemas de mantenimiento y ERP',
      'Paneles de estado de salud de activos',
      'Analítica específica por tipo de equipo o sector',
    ],
    pros: [
      'Enfoque muy centrado en el mantenimiento predictivo real',
      'Aporta recomendaciones accionables, no solo alertas',
      'Experiencia en sectores industriales con activos críticos',
    ],
    cons: [
      'Requiere datos históricos de calidad para que los modelos funcionen',
      'Coste y alcance pensados para empresas, no para pymes pequeñas',
      'La integración con sistemas existentes puede ser laboriosa',
    ],
    pricingNote:
      'Uptake se comercializa como solución de pago para empresas, con suscripciones cuyo precio depende del número y tipo de activos monitorizados y de los módulos contratados. No publica tarifas cerradas y lo habitual es solicitar una demostración y un presupuesto a medida.',
    faqs: [
      {
        question: '¿Qué es Uptake?',
        answer:
          'Uptake es una compañía de software industrial que aplica analítica e inteligencia artificial a los datos de máquinas, vehículos y equipos para predecir fallos. Su objetivo es avisar con antelación de posibles averías y recomendar acciones de mantenimiento que eviten paradas no planificadas.',
      },
      {
        question: '¿Para qué sirve Uptake?',
        answer:
          'Sirve para mantenimiento predictivo y gestión de la fiabilidad: procesa la telemetría de los activos, detecta patrones que preceden a un fallo, emite alertas priorizadas por riesgo y se integra con los sistemas de mantenimiento para convertir esas alertas en órdenes de trabajo.',
      },
      {
        question: '¿Uptake es gratis?',
        answer:
          'No. Es un producto empresarial de pago por suscripción, con precio calculado según los activos monitorizados y los módulos elegidos. No dispone de plan gratuito, aunque ofrece demostraciones y pruebas de concepto a las empresas interesadas. Consulta su web para precios actualizados.',
      },
    ],
  },
  Spot: {
    name: 'Spot',
    tagline: 'Robot cuadrúpedo de Boston Dynamics para inspección y captura de datos',
    intro:
      'Spot es el robot cuadrúpedo desarrollado por Boston Dynamics, capaz de desplazarse de forma autónoma por entornos industriales complejos, subir escaleras y sortear obstáculos. Se utiliza principalmente para inspecciones rutinarias y captura de datos en instalaciones donde el acceso es difícil o peligroso para las personas. Admite cargas útiles como cámaras térmicas, sensores acústicos o escáneres, y puede repetir rutas de inspección de forma programada.',
    useCases: [
      'Realizar rondas de inspección automáticas en plantas industriales',
      'Tomar lecturas térmicas y acústicas de equipos críticos',
      'Documentar el avance de obras mediante escaneo periódico',
      'Acceder a zonas peligrosas sin exponer a personas',
      'Recoger datos en subestaciones y entornos de energía',
    ],
    features: [
      'Locomoción cuadrúpeda con navegación autónoma',
      'Rutas de inspección programables y repetibles',
      'Cargas útiles intercambiables: cámaras, sensores, escáneres',
      'Brazo opcional para manipular elementos del entorno',
      'SDK y API para integrar el robot en flujos propios',
    ],
    pros: [
      'Accede a lugares donde ruedas y drones no llegan bien',
      'Automatiza inspecciones repetitivas con datos consistentes',
      'Ecosistema de cargas útiles y SDK abierto para integraciones',
    ],
    cons: [
      'Coste de adquisición muy elevado frente a otras alternativas',
      'Autonomía de batería limitada para jornadas largas',
      'Requiere formación y trabajo de integración para aportar valor real',
    ],
    pricingNote:
      'Spot es un producto de hardware de pago con un precio de adquisición alto, al que se suman cargas útiles, software y soporte. Boston Dynamics comercializa el robot mediante presupuesto y distribuidores, y el coste total depende de la configuración elegida.',
    faqs: [
      {
        question: '¿Qué es Spot de Boston Dynamics?',
        answer:
          'Spot es un robot cuadrúpedo capaz de caminar de forma autónoma por entornos difíciles, subir escaleras y evitar obstáculos. Se emplea sobre todo en la industria para hacer inspecciones repetitivas y recoger datos con sensores en zonas de acceso complicado o peligroso.',
      },
      {
        question: '¿Para qué sirve el robot Spot?',
        answer:
          'Sirve para automatizar inspecciones y captura de datos: rondas programadas en plantas, lecturas térmicas y acústicas de máquinas, escaneo de obras o revisión de instalaciones energéticas. Con el brazo opcional también puede interactuar con puertas, válvulas o palancas.',
      },
      {
        question: '¿Cuánto cuesta Spot?',
        answer:
          'Spot es un producto de gama alta cuyo precio se sitúa muy por encima del de un robot de consumo, y varía según las cargas útiles, el software y el soporte contratados. Boston Dynamics lo vende mediante presupuesto; consulta su web para precios actualizados.',
      },
    ],
  },
  Covariant: {
    name: 'Covariant',
    tagline: 'IA para robots de almacén capaces de manipular objetos desconocidos',
    intro:
      'Covariant es una empresa de robótica e inteligencia artificial fundada por investigadores procedentes del ámbito académico, centrada en dotar a los brazos robóticos de la capacidad de ver y manipular objetos variados sin programación específica para cada pieza. Su tecnología se aplica sobre todo en logística y almacenes, donde los robots deben coger artículos muy distintos que llegan mezclados. Parte de su equipo y tecnología han sido incorporados posteriormente por Amazon.',
    useCases: [
      'Automatizar el picking de artículos en almacenes logísticos',
      'Manipular objetos nuevos sin reprogramar el robot',
      'Clasificar paquetes y piezas mezcladas en cintas',
      'Reducir dependencia de mano de obra en tareas repetitivas',
      'Inducir artículos en sistemas de clasificación automática',
    ],
    features: [
      'Modelos de IA que generalizan a objetos nunca vistos',
      'Percepción visual integrada con el control del brazo',
      'Aprendizaje a partir de la experiencia acumulada en flota',
      'Compatibilidad con brazos robóticos de distintos fabricantes',
      'Enfoque orientado a operaciones de almacén y logística',
    ],
    pros: [
      'Evita programar cada referencia o pieza por separado',
      'Buen desempeño con catálogos de productos muy variados',
      'Se apoya en hardware robótico estándar del mercado',
    ],
    cons: [
      'Solución industrial: no es accesible para pequeños proyectos',
      'Requiere integración con el sistema logístico existente',
      'Su futuro depende de los movimientos corporativos recientes',
    ],
    pricingNote:
      'Covariant no es un producto de consumo con tarifa pública, sino una solución industrial de pago que se implanta mediante proyecto e integración con el hardware robótico del cliente. El coste depende del número de estaciones, del hardware y del alcance del despliegue.',
    faqs: [
      {
        question: '¿Qué es Covariant?',
        answer:
          'Covariant es una empresa de inteligencia artificial para robótica que desarrolla software capaz de dotar a los brazos robóticos de percepción y destreza suficientes para coger objetos que nunca han visto antes, sin necesidad de programarlos pieza a pieza. Se aplica sobre todo en almacenes.',
      },
      {
        question: '¿Para qué sirve Covariant?',
        answer:
          'Sirve para automatizar tareas de manipulación en logística: picking de artículos variados, clasificación de paquetes o inducción en sistemas de sorting. Su valor está en que el robot generaliza a productos nuevos sin reconfiguración, lo que encaja con catálogos amplios y cambiantes.',
      },
      {
        question: '¿Covariant es gratis?',
        answer:
          'No. Se trata de tecnología industrial que se contrata mediante proyecto, con coste asociado al software, al hardware robótico y a la integración con los sistemas del almacén. No existe una versión gratuita ni una tarifa pública estándar.',
      },
    ],
  },
  Osaro: {
    name: 'Osaro',
    tagline: 'Software de IA que da percepción y control a robots de almacén',
    intro:
      'Osaro es una empresa estadounidense que desarrolla software de percepción y control basado en aprendizaje automático para robots industriales, principalmente en el ámbito de la logística y el comercio electrónico. Su tecnología permite a los brazos robóticos identificar, coger y colocar artículos con formas, tamaños y materiales muy distintos, incluidos productos flexibles o en bolsa. Se integra con hardware robótico estándar y con los sistemas de gestión de almacén.',
    useCases: [
      'Coger y colocar artículos de e-commerce en cajas o bandejas',
      'Manipular productos difíciles como bolsas o envases flexibles',
      'Automatizar estaciones de picking en almacenes',
      'Clasificar piezas y paquetes en líneas de sorting',
      'Reducir tareas manuales repetitivas en logística',
    ],
    features: [
      'Percepción visual mediante aprendizaje profundo',
      'Control de agarre adaptado a objetos variados',
      'Integración con brazos robóticos comerciales',
      'Conexión con sistemas de gestión de almacén',
      'Mejora continua del modelo con datos de operación',
    ],
    pros: [
      'Buen manejo de artículos difíciles que otros sistemas fallan',
      'Compatible con hardware robótico ya existente',
      'Enfoque práctico centrado en operaciones reales de almacén',
    ],
    cons: [
      'Solución de proyecto, no un producto que se compre y use al momento',
      'Coste e implantación fuera del alcance de operaciones pequeñas',
      'Depende de una integración cuidadosa con el flujo logístico',
    ],
    pricingNote:
      'Osaro es una solución industrial de pago que se comercializa mediante proyecto y presupuesto personalizado, en función del número de estaciones robotizadas, el hardware empleado y el alcance de la integración. No publica tarifas públicas ni ofrece versión gratuita.',
    faqs: [
      {
        question: '¿Qué es Osaro?',
        answer:
          'Osaro es una empresa que desarrolla software de inteligencia artificial para robots industriales, centrado en percepción visual y control del agarre. Permite que brazos robóticos comerciales identifiquen y manipulen artículos muy diversos en almacenes y centros de distribución.',
      },
      {
        question: '¿Para qué sirve Osaro?',
        answer:
          'Sirve para automatizar la manipulación de productos en logística: picking, empaquetado y clasificación de artículos con formas y materiales distintos, incluidos envases flexibles. Se integra con el hardware robótico y los sistemas de gestión de almacén ya existentes.',
      },
      {
        question: '¿Osaro es gratis?',
        answer:
          'No. Es tecnología industrial que se contrata mediante proyecto, con un coste que depende del número de estaciones, el hardware robótico y la integración necesaria. No existe versión gratuita ni una tarifa pública estándar disponible.',
      },
    ],
  },
  Augury: {
    name: 'Augury',
    tagline: 'Sensores e IA que detectan fallos en máquinas antes de que ocurran',
    intro:
      'Augury es una empresa de tecnología industrial que combina sensores inalámbricos con analítica basada en inteligencia artificial para diagnosticar el estado de las máquinas. Sus dispositivos capturan vibración, temperatura y datos magnéticos de motores, bombas y ventiladores, y los modelos identifican patrones asociados a fallos incipientes. El objetivo es avisar con antelación de una avería y recomendar la acción de mantenimiento adecuada, evitando paradas no planificadas.',
    useCases: [
      'Detectar desalineaciones y desgaste en motores y bombas',
      'Evitar paradas no planificadas en líneas de producción',
      'Sustituir rondas manuales de análisis de vibraciones',
      'Priorizar el mantenimiento según la gravedad del diagnóstico',
      'Monitorizar equipos rotativos críticos de forma continua',
    ],
    features: [
      'Sensores inalámbricos de vibración, temperatura y magnetismo',
      'Diagnóstico automático de fallos mecánicos mediante IA',
      'Alertas con nivel de severidad y recomendación de acción',
      'Panel de estado de salud de la maquinaria',
      'Integración con sistemas de gestión de mantenimiento',
    ],
    pros: [
      'Diagnóstico concreto, no solo una alerta genérica de anomalía',
      'Instalación de sensores sencilla y sin cableado complejo',
      'Muy enfocado en equipos rotativos, donde da buenos resultados',
    ],
    cons: [
      'Cubre sobre todo maquinaria rotativa, no cualquier tipo de activo',
      'Coste recurrente de hardware y suscripción',
      'Necesita un periodo de aprendizaje antes de rendir al máximo',
    ],
    pricingNote:
      'Augury se comercializa como servicio de pago que combina hardware (sensores) y suscripción al software de diagnóstico. El precio suele calcularse por máquina monitorizada y no se publica en tarifa cerrada, por lo que hay que solicitar presupuesto.',
    faqs: [
      {
        question: '¿Qué es Augury?',
        answer:
          'Augury es una solución de mantenimiento predictivo que instala sensores inalámbricos en máquinas industriales y analiza con inteligencia artificial su vibración, temperatura y firma magnética. Con esos datos detecta fallos incipientes y avisa antes de que se produzca la avería.',
      },
      {
        question: '¿Para qué sirve Augury?',
        answer:
          'Sirve para vigilar la salud de motores, bombas, ventiladores y otros equipos rotativos. Detecta problemas como desalineación, desequilibrio o desgaste de rodamientos, indica la gravedad y recomienda la acción de mantenimiento, ayudando a reducir paradas no planificadas.',
      },
      {
        question: '¿Augury es gratis?',
        answer:
          'No. Es un servicio de pago que incluye los sensores y la suscripción al software de diagnóstico, con un coste habitualmente calculado por máquina monitorizada. No hay plan gratuito; se solicita presupuesto según el número de equipos a cubrir.',
      },
    ],
  },
  Senseye: {
    name: 'Senseye',
    tagline: 'Mantenimiento predictivo de Siemens que analiza datos de máquinas existentes',
    intro:
      'Senseye Predictive Maintenance es una solución de mantenimiento predictivo integrada en la oferta de software de Siemens. Analiza los datos que ya generan las máquinas y los sistemas de planta para estimar cuándo un activo puede fallar, sin necesidad de instalar necesariamente nuevos sensores. Está pensada para equipos de mantenimiento que quieren pasar de una planificación por calendario a una basada en el estado real de los equipos.',
    useCases: [
      'Estimar la vida útil restante de máquinas y componentes',
      'Planificar intervenciones según el estado real del activo',
      'Escalar el mantenimiento predictivo a muchas máquinas a la vez',
      'Reducir paradas imprevistas en líneas de producción',
      'Aprovechar los datos ya existentes en sistemas de planta',
    ],
    features: [
      'Análisis automático de datos de condición de máquinas',
      'Predicción de tiempo hasta el fallo por activo',
      'Escalado a grandes parques de maquinaria',
      'Integración con sistemas de gestión de mantenimiento',
      'Paneles con priorización de activos en riesgo',
    ],
    pros: [
      'Aprovecha datos existentes, sin obligar a desplegar sensores nuevos',
      'Diseñado para escalar a muchos activos con poco esfuerzo manual',
      'Respaldo y ecosistema de un fabricante industrial consolidado',
    ],
    cons: [
      'La calidad de la predicción depende de los datos disponibles',
      'Producto de pago orientado a empresas, sin opción gratuita',
      'Puede requerir integración con sistemas heredados de planta',
    ],
    pricingNote:
      'Senseye Predictive Maintenance es un producto de pago por suscripción dentro del catálogo de Siemens. El coste suele depender del número de activos o máquinas monitorizadas y de los servicios de implantación asociados, y se acuerda mediante presupuesto.',
    faqs: [
      {
        question: '¿Qué es Senseye?',
        answer:
          'Senseye Predictive Maintenance es una solución de mantenimiento predictivo de Siemens que analiza los datos que ya producen las máquinas para anticipar fallos. Estima cuándo puede averiarse cada activo y ayuda a priorizar las intervenciones de mantenimiento en función del riesgo.',
      },
      {
        question: '¿Para qué sirve Senseye?',
        answer:
          'Sirve para pasar de un mantenimiento por calendario a uno basado en la condición real de los equipos. Permite prever averías, planificar paradas, reducir tiempos de inactividad no planificados y escalar el análisis a un parque grande de maquinaria industrial.',
      },
      {
        question: '¿Senseye es gratis?',
        answer:
          'No. Es una solución empresarial de pago por suscripción, con precio ligado al número de activos monitorizados y a los servicios asociados. Siemens suele ofrecer demostraciones o pruebas de concepto, pero no un plan gratuito de uso continuado.',
      },
    ],
  },
  SparkCognition: {
    name: 'SparkCognition',
    tagline: 'IA industrial para mantenimiento predictivo y análisis de activos críticos',
    intro:
      'SparkCognition es una compañía estadounidense de inteligencia artificial aplicada a la industria, hoy operativa bajo la marca Avathon. Sus soluciones analizan datos de sensores y sistemas operativos para anticipar fallos en equipos, optimizar el rendimiento de activos y apoyar la toma de decisiones en sectores como energía, manufactura o defensa. También ha desarrollado tecnología de visión artificial y analítica avanzada para entornos industriales.',
    useCases: [
      'Anticipar fallos en turbinas, motores y equipos críticos',
      'Optimizar el rendimiento de activos en plantas de energía',
      'Detectar anomalías en procesos industriales complejos',
      'Aplicar visión artificial a la supervisión de instalaciones',
      'Apoyar decisiones operativas con analítica avanzada',
    ],
    features: [
      'Modelos de aprendizaje automático sobre datos de sensores',
      'Detección temprana de anomalías en activos industriales',
      'Analítica de rendimiento y fiabilidad de equipos',
      'Capacidades de visión artificial para entornos industriales',
      'Despliegue adaptado a sectores regulados y críticos',
    ],
    pros: [
      'Experiencia en sectores industriales exigentes y regulados',
      'Combina mantenimiento predictivo con visión artificial',
      'Enfoque en activos críticos donde una parada es muy costosa',
    ],
    cons: [
      'Producto de proyecto: implantación larga y personalizada',
      'Coste elevado, dirigido a grandes organizaciones',
      'El cambio de marca a Avathon puede generar confusión',
    ],
    pricingNote:
      'Es una solución empresarial de pago, comercializada por proyecto y suscripción. El coste depende del alcance del despliegue, de los activos analizados y de los servicios de implantación necesarios, y se acuerda mediante presupuesto. No existe plan gratuito;',
    faqs: [
      {
        question: '¿Qué es SparkCognition?',
        answer:
          'SparkCognition, que opera actualmente como Avathon, es una empresa de inteligencia artificial industrial. Desarrolla soluciones que analizan datos de sensores y sistemas operativos para anticipar fallos en equipos, optimizar activos y apoyar decisiones en sectores como energía, manufactura o defensa.',
      },
      {
        question: '¿Para qué sirve SparkCognition?',
        answer:
          'Sirve para mantenimiento predictivo y optimización de activos industriales: detecta anomalías antes de que provoquen una avería, evalúa el rendimiento de los equipos y aporta analítica avanzada, incluida visión artificial, en instalaciones donde una parada resulta muy costosa.',
      },
      {
        question: '¿SparkCognition es gratis?',
        answer:
          'No. Se trata de una solución empresarial de pago que se contrata por proyecto y suscripción, con precio ajustado al alcance del despliegue y a los activos analizados. No dispone de versión gratuita ni de tarifa pública estándar.',
      },
    ],
  },
  LandingLens: {
    name: 'LandingLens',
    tagline: 'Plataforma de visión artificial para crear modelos de inspección sin programar',
    intro:
      'LandingLens es la plataforma de visión artificial de Landing AI, la empresa fundada por Andrew Ng. Permite entrenar modelos de inspección visual a partir de imágenes etiquetadas por el propio usuario, sin necesidad de escribir código, y desplegarlos en línea de producción o en la nube. Está orientada a fabricantes que quieren automatizar el control de calidad detectando defectos en piezas, superficies o ensamblajes.',
    useCases: [
      'Detectar defectos de calidad en piezas de una línea de producción',
      'Clasificar productos en función de su aspecto visual',
      'Segmentar zonas dañadas en superficies o materiales',
      'Entrenar modelos de inspección con pocas imágenes etiquetadas',
      'Sustituir inspecciones visuales manuales y repetitivas',
    ],
    features: [
      'Etiquetado de imágenes y entrenamiento sin escribir código',
      'Modelos de clasificación, detección de objetos y segmentación',
      'Enfoque centrado en los datos para mejorar la precisión',
      'Despliegue en la nube o en el borde, junto a la línea',
      'Herramientas de colaboración entre ingeniería y calidad',
    ],
    pros: [
      'Permite a perfiles no técnicos entrenar modelos de visión',
      'Funciona razonablemente bien con conjuntos de imágenes pequeños',
      'Pensado específicamente para control de calidad industrial',
    ],
    cons: [
      'Menos flexible que desarrollar el modelo con código propio',
      'Los casos industriales exigen buena iluminación y montaje de cámaras',
      'El uso serio requiere plan de pago y coste de despliegue',
    ],
    pricingNote:
      'LandingLens funciona con un modelo de suscripción de pago para empresas, aunque suele existir un nivel de entrada o prueba con límites de uso para evaluar la plataforma. El precio depende del número de modelos, dispositivos de despliegue y usuarios.',
    faqs: [
      {
        question: '¿Qué es LandingLens?',
        answer:
          'LandingLens es la plataforma de visión artificial de Landing AI. Permite subir imágenes, etiquetarlas y entrenar modelos de inspección visual sin programar, para después desplegarlos en la nube o directamente en la línea de producción y automatizar el control de calidad.',
      },
      {
        question: '¿Para qué sirve LandingLens?',
        answer:
          'Sirve para automatizar la inspección visual en la industria: detectar defectos en piezas, clasificar productos por su aspecto o segmentar zonas dañadas. Está pensado para que ingenieros de calidad puedan crear y mantener modelos sin depender de un equipo de ciencia de datos.',
      },
      {
        question: '¿LandingLens es gratis?',
        answer:
          'Suele ofrecer un nivel de entrada o prueba con límites de uso para evaluar la herramienta, pero el uso productivo requiere una suscripción de pago cuyo precio depende de los modelos, usuarios y dispositivos de despliegue. Consulta su web para precios actualizados.',
      },
    ],
  },
  Matroid: {
    name: 'Matroid',
    tagline: 'Visión artificial que crea detectores de vídeo sin escribir código',
    intro:
      'Matroid es una plataforma de visión artificial estadounidense que permite crear detectores capaces de identificar personas, objetos, acciones o situaciones en imágenes y vídeo, incluido el procesamiento de cámaras en directo. El usuario entrena los detectores a partir de ejemplos, sin necesidad de programar, y puede configurar alertas y análisis sobre lo detectado. Se aplica en control de calidad, seguridad, cumplimiento de normas y monitorización de procesos industriales.',
    useCases: [
      'Detectar el uso de equipos de protección individual en planta',
      'Supervisar procesos y control de calidad mediante vídeo',
      'Alertar de situaciones de riesgo en cámaras de seguridad',
      'Contar y clasificar objetos en flujos de vídeo continuos',
      'Buscar eventos concretos dentro de grabaciones largas',
    ],
    features: [
      'Creación de detectores sin escribir código',
      'Análisis de vídeo en directo y de grabaciones',
      'Alertas configurables ante eventos detectados',
      'Paneles de métricas sobre lo que ve el detector',
      'Despliegue en nube o en servidores propios',
    ],
    pros: [
      'Accesible para usuarios sin experiencia en aprendizaje automático',
      'Trabaja bien con vídeo en directo, no solo imágenes sueltas',
      'Aplicable tanto a seguridad como a calidad industrial',
    ],
    cons: [
      'La precisión depende mucho de la calidad de los ejemplos aportados',
      'Uso de cámaras y personas implica consideraciones legales de privacidad',
      'Producto de pago orientado a empresas',
    ],
    pricingNote:
      'Matroid es una plataforma comercial de pago, con planes por suscripción cuyo coste depende del número de detectores, cámaras o flujos de vídeo procesados y del tipo de despliegue. Puede facilitar pruebas o demostraciones, pero no un plan gratuito para uso productivo.',
    faqs: [
      {
        question: '¿Qué es Matroid?',
        answer:
          'Matroid es una plataforma de visión artificial que permite crear detectores capaces de reconocer objetos, personas o situaciones en imágenes y vídeo. Se entrenan a partir de ejemplos y sin programar, y pueden analizar cámaras en directo o grabaciones ya existentes.',
      },
      {
        question: '¿Para qué sirve Matroid?',
        answer:
          'Sirve para automatizar la supervisión visual: comprobar que se usan equipos de protección, detectar defectos o incidencias en un proceso, generar alertas de seguridad a partir de cámaras y localizar eventos concretos dentro de horas de grabación.',
      },
      {
        question: '¿Matroid es gratis?',
        answer:
          'No para uso productivo. Matroid se comercializa mediante suscripción de pago, con precio ligado al número de detectores y flujos de vídeo procesados. Puede ofrecer demostraciones o pruebas limitadas para evaluar la plataforma. Consulta su web para precios actualizados.',
      },
    ],
  },
  Cognex: {
    name: 'Cognex',
    tagline: 'Visión artificial industrial con hardware y software para inspección en línea',
    intro:
      'Cognex es una compañía estadounidense veterana en visión artificial industrial, con un catálogo que combina cámaras inteligentes, lectores de códigos y software de inspección. Sus sistemas se instalan en líneas de producción para verificar calidad, leer identificadores, medir piezas y guiar robots. En los últimos años ha incorporado herramientas basadas en aprendizaje profundo que permiten resolver inspecciones difíciles de programar con reglas tradicionales.',
    useCases: [
      'Inspeccionar defectos de piezas en líneas de producción',
      'Leer códigos de barras y DataMatrix en entornos industriales',
      'Verificar presencia y posición de componentes en montaje',
      'Realizar mediciones dimensionales automatizadas',
      'Guiar robots mediante visión para coger o colocar piezas',
    ],
    features: [
      'Cámaras inteligentes y sensores de visión para planta',
      'Herramientas de inspección basadas en aprendizaje profundo',
      'Lectura fiable de códigos en condiciones difíciles',
      'Software de configuración de inspecciones sin programar',
      'Integración con PLC y sistemas de automatización',
    ],
    pros: [
      'Hardware y software de un mismo fabricante, bien integrados',
      'Fiabilidad probada en entornos industriales exigentes',
      'Amplia red de soporte y distribuidores',
    ],
    cons: [
      'Coste elevado frente a soluciones de visión más genéricas',
      'Ecosistema propietario que dificulta cambiar de proveedor',
      'Configurar inspecciones complejas requiere formación específica',
    ],
    pricingNote:
      'Cognex vende hardware y licencias de software de pago, normalmente a través de distribuidores e integradores. El coste depende del modelo de cámara o sensor, del software de visión elegido y del proyecto de integración, sin tarifa pública única.',
    faqs: [
      {
        question: '¿Qué es Cognex?',
        answer:
          'Cognex es un fabricante de sistemas de visión artificial industrial. Ofrece cámaras inteligentes, lectores de códigos y software de inspección que se instalan en líneas de producción para verificar la calidad de las piezas, leer identificadores y guiar robots.',
      },
      {
        question: '¿Para qué sirve Cognex?',
        answer:
          'Sirve para automatizar tareas visuales en fábrica: detectar defectos, comprobar que un montaje está completo, medir piezas, leer códigos de barras o DataMatrix y proporcionar coordenadas a un robot para que manipule la pieza correctamente.',
      },
      {
        question: '¿Cognex es gratis?',
        answer:
          'No. Cognex comercializa hardware y licencias de software de pago, cuyo precio depende del equipo y del software elegidos, además del proyecto de integración. La compra se realiza normalmente a través de distribuidores o integradores. Consulta su web para precios actualizados.',
      },
    ],
  },
  LLaVA: {
    name: 'LLaVA',
    tagline: 'Modelo multimodal abierto que entiende imágenes y responde preguntas sobre ellas',
    intro:
      'LLaVA (Large Language and Vision Assistant) es un modelo multimodal de código abierto nacido de la colaboración entre investigadores universitarios y Microsoft Research. Combina un codificador visual con un modelo de lenguaje para aceptar imágenes y texto en la misma conversación, de modo que puedes enseñarle una foto, un gráfico o una captura y pedirle que la describa, la interprete o responda preguntas sobre ella. Se usa sobre todo en investigación y en proyectos que necesitan visión y lenguaje sin depender de una API cerrada.',
    useCases: [
      'Describir imágenes y generar textos alternativos accesibles',
      'Responder preguntas visuales sobre fotos o capturas de pantalla',
      'Interpretar gráficos, diagramas y documentos escaneados',
      'Prototipar asistentes multimodales autoalojados en servidores propios',
      'Investigar y comparar modelos de visión y lenguaje',
    ],
    features: [
      'Entrada mixta de imagen y texto en una misma conversación',
      'Pesos abiertos descargables desde repositorios públicos',
      'Varios tamaños de modelo según la GPU disponible',
      'Ajuste fino con datos propios de instrucciones visuales',
      'Compatible con las bibliotecas habituales del ecosistema abierto',
    ],
    pros: [
      'Pesos abiertos: puedes ejecutarlo en tu propia infraestructura',
      'Sin coste de licencia ni consumo por consulta a una API',
      'Comunidad activa con variantes y ajustes finos disponibles',
      'Buen punto de partida para investigación multimodal',
    ],
    cons: [
      'Requiere GPU y conocimientos técnicos para desplegarlo',
      'Su precisión suele quedar por debajo de los modelos multimodales comerciales punteros',
      'No incluye interfaz de usuario lista para producción',
    ],
    pricingNote:
      'LLaVA es un proyecto de código abierto y sus pesos se distribuyen de forma gratuita, así que no hay planes ni suscripciones. El coste real es el de la infraestructura donde lo ejecutes: GPU propia o alquilada en la nube. Revisa las licencias del modelo y de los datos antes de un uso comercial y',
    faqs: [
      {
        question: '¿Qué es LLaVA?',
        answer:
          'LLaVA es un modelo multimodal de código abierto que une un codificador de imágenes con un modelo de lenguaje. Permite enviarle una imagen junto con una pregunta en texto y obtener una respuesta escrita, de forma parecida a los asistentes de visión comerciales, pero con pesos abiertos.',
      },
      {
        question: '¿LLaVA es gratis?',
        answer:
          'Sí, es un proyecto abierto y sus pesos pueden descargarse sin coste. No pagas licencia ni consumo, pero sí asumes el gasto de la máquina con GPU donde lo ejecutes. Conviene revisar la licencia concreta de cada variante antes de usarlo comercialmente.',
      },
      {
        question: '¿LLaVA funciona en español?',
        answer:
          'Puede responder en español, ya que el modelo de lenguaje que utiliza es multilingüe en distinto grado, aunque su entrenamiento se centra en inglés. Los resultados en español suelen ser aceptables para descripciones sencillas y menos fiables en tareas complejas o muy técnicas.',
      },
    ],
  },
  Fuyu: {
    name: 'Fuyu',
    tagline: 'Modelo multimodal abierto de Adept centrado en interfaces y documentos visuales',
    intro:
      'Fuyu es un modelo multimodal desarrollado por Adept y publicado con pesos abiertos en Hugging Face. Su planteamiento es simplificar la arquitectura habitual para procesar imágenes y texto dentro del mismo modelo, con especial atención a capturas de pantalla, interfaces de usuario, gráficos y documentos. Está orientado a desarrolladores e investigadores que quieren un modelo de visión y lenguaje autoalojado para agentes que leen pantallas o extraen información de material visual.',
    useCases: [
      'Leer e interpretar capturas de pantalla de aplicaciones web',
      'Extraer datos de gráficos, tablas y diagramas',
      'Construir agentes que navegan por interfaces de usuario',
      'Responder preguntas sobre documentos con imágenes y texto',
      'Investigar arquitecturas multimodales sin codificador de imagen separado',
    ],
    features: [
      'Entrada combinada de imagen y texto',
      'Arquitectura simplificada frente a los modelos multimodales clásicos',
      'Buen comportamiento con capturas de pantalla e interfaces',
      'Pesos disponibles públicamente en Hugging Face',
      'Integrable con las bibliotecas habituales de inferencia abierta',
    ],
    pros: [
      'Pesos abiertos y descarga directa desde Hugging Face',
      'Enfoque práctico en pantallas y documentos, no solo fotos',
      'Ejecutable en tu propia infraestructura sin llamadas externas',
      'Arquitectura sencilla, fácil de estudiar y modificar',
    ],
    cons: [
      'Necesita GPU y perfil técnico para ponerlo en marcha',
      'Menos actualizaciones y soporte que los modelos comerciales',
      'Rendimiento inferior a los multimodales cerrados más avanzados',
    ],
    pricingNote:
      'Fuyu se distribuye como modelo de pesos abiertos, sin suscripción ni pago por uso. El gasto proviene del hardware o del proveedor de nube en el que lo despliegues. Antes de un uso comercial conviene revisar la licencia publicada junto al modelo;',
    faqs: [
      {
        question: '¿Qué es Fuyu?',
        answer:
          'Fuyu es un modelo multimodal de Adept con pesos abiertos que procesa imágenes y texto en la misma entrada. Destaca en la lectura de capturas de pantalla, interfaces y documentos visuales, y está pensado para desarrolladores que quieran integrarlo en sus propios sistemas.',
      },
      {
        question: '¿Para qué sirve Fuyu?',
        answer:
          'Sirve para tareas que mezclan visión y lenguaje: describir imágenes, responder preguntas sobre un gráfico, extraer información de un documento escaneado o dar a un agente la capacidad de entender lo que aparece en una pantalla antes de actuar.',
      },
      {
        question: '¿Fuyu es de código abierto?',
        answer:
          'Sus pesos se publican abiertamente en Hugging Face y cualquiera puede descargarlos y ejecutarlos. Conviene leer la licencia asociada al modelo, ya que las condiciones de uso comercial pueden variar respecto a una licencia de software libre clásica.',
      },
    ],
  },
  Kosmos: {
    name: 'Kosmos',
    tagline:
      'Modelo multimodal de Microsoft Research que conecta lenguaje, imágenes y referencias visuales',
    intro:
      'Kosmos es una línea de modelos multimodales de Microsoft Research que integra percepción visual y lenguaje en un mismo sistema. Además de aceptar imágenes y texto como entrada, sus versiones más conocidas trabajan el anclaje visual: relacionar lo que se dice con regiones concretas de la imagen. Es un trabajo de investigación pensado para explorar cómo los modelos de lenguaje pueden apoyarse en el mundo visual, y se usa sobre todo en el ámbito académico y de prototipado.',
    useCases: [
      'Responder preguntas sobre el contenido de una imagen',
      'Localizar objetos concretos dentro de una escena',
      'Generar descripciones ancladas a regiones de la imagen',
      'Investigar el anclaje visual en modelos de lenguaje',
      'Prototipar asistentes que combinan texto e imágenes',
    ],
    features: [
      'Entrada mixta de texto e imagen',
      'Anclaje de expresiones del texto a zonas de la imagen',
      'Descripción y análisis del contenido visual',
      'Publicación académica con detalles de arquitectura y evaluación',
      'Recursos y código liberados por Microsoft Research',
    ],
    pros: [
      'Respaldo de un equipo de investigación consolidado',
      'Documentación técnica detallada en la publicación original',
      'Enfoque útil en anclaje visual, no solo descripción',
      'Recursos accesibles sin coste para experimentar',
    ],
    cons: [
      'Es un proyecto de investigación, no un producto con soporte',
      'Requiere conocimientos técnicos y GPU para reproducirlo',
      'No hay interfaz ni API comercial lista para producción',
    ],
    pricingNote:
      'Kosmos es un trabajo de investigación de Microsoft Research y sus recursos se publican sin coste de licencia. No existen planes de suscripción: el gasto es el de la infraestructura de cómputo que utilices. Revisa la publicación y el repositorio oficiales para conocer los términos de uso vigentes.',
    faqs: [
      {
        question: '¿Qué es Kosmos?',
        answer:
          'Kosmos es una familia de modelos multimodales de Microsoft Research que combina lenguaje y visión. Sus versiones más citadas añaden anclaje visual, es decir, la capacidad de vincular palabras del texto con regiones concretas de una imagen en lugar de limitarse a describirla.',
      },
      {
        question: '¿Kosmos es gratis?',
        answer:
          'Los materiales de investigación y los recursos publicados por Microsoft Research se ofrecen sin coste. No es un producto comercial con planes de pago, aunque sí asumes el gasto de la infraestructura donde lo ejecutes. Consulta la publicación oficial para los términos concretos.',
      },
      {
        question: '¿Para qué sirve Kosmos?',
        answer:
          'Sirve para tareas de visión y lenguaje: responder preguntas sobre imágenes, describir escenas, localizar objetos y estudiar cómo un modelo de lenguaje puede apoyarse en información visual. Su uso principal está en investigación y prototipos, no en aplicaciones de producción.',
      },
    ],
  },
  Flamingo: {
    name: 'Flamingo',
    tagline: 'Modelo de visión y lenguaje de DeepMind con aprendizaje a partir de pocos ejemplos',
    intro:
      'Flamingo es un modelo de visión y lenguaje desarrollado por DeepMind que puede recibir secuencias mezcladas de imágenes y texto y responder con texto. Su aportación más citada es la capacidad de resolver tareas visuales nuevas con muy pocos ejemplos en el propio prompt, sin necesidad de reentrenar el modelo. Es un trabajo de investigación de referencia que ha inspirado numerosas reproducciones abiertas y modelos multimodales posteriores.',
    useCases: [
      'Responder preguntas sobre imágenes con pocos ejemplos',
      'Generar descripciones y pies de foto automáticos',
      'Clasificar contenido visual sin reentrenar el modelo',
      'Servir de referencia académica en investigación multimodal',
      'Comparar arquitecturas de visión y lenguaje en benchmarks',
    ],
    features: [
      'Entrada intercalada de imágenes y texto',
      'Aprendizaje a partir de pocos ejemplos en el prompt',
      'Conexión de un codificador visual con un modelo de lenguaje',
      'Evaluación en múltiples tareas de visión y lenguaje',
      'Publicación técnica detallada de DeepMind',
    ],
    pros: [
      'Trabajo de investigación muy influyente en modelos multimodales',
      'Buenos resultados sin ajuste fino específico por tarea',
      'Documentación técnica pública y detallada',
      'Base conceptual de varias reproducciones abiertas',
    ],
    cons: [
      'No se ofrece como producto ni API pública de uso general',
      'Los pesos originales no están disponibles abiertamente',
      'Quien quiera usarlo debe recurrir a reproducciones de terceros',
    ],
    pricingNote:
      'Flamingo es un proyecto de investigación de DeepMind, no un servicio comercial con planes de precios. No existe suscripción ni pago por uso porque no se comercializa directamente. Quien quiera algo equivalente suele recurrir a reproducciones abiertas; consulta la web oficial de DeepMind para conocer su estado actual.',
    faqs: [
      {
        question: '¿Qué es Flamingo?',
        answer:
          'Flamingo es un modelo de visión y lenguaje creado por DeepMind. Acepta secuencias que combinan imágenes y texto y genera respuestas escritas, destacando por resolver tareas visuales nuevas a partir de unos pocos ejemplos incluidos en el propio prompt.',
      },
      {
        question: '¿Se puede usar Flamingo?',
        answer:
          'No se distribuye como producto comercial ni con pesos abiertos de uso general, por lo que no está disponible para descargar y ejecutar libremente. Quienes buscan una alternativa práctica suelen recurrir a reproducciones abiertas inspiradas en su arquitectura.',
      },
      {
        question: '¿Para qué sirve Flamingo?',
        answer:
          'Sirve para tareas que combinan imágenes y texto: responder preguntas visuales, describir escenas o clasificar contenido gráfico. Su valor principal es científico, ya que sentó las bases de buena parte de los modelos multimodales que se usan hoy.',
      },
    ],
  },
  BLOOM: {
    name: 'BLOOM',
    tagline:
      'Modelo de lenguaje abierto y multilingüe creado por una colaboración científica internacional',
    intro:
      'BLOOM es un gran modelo de lenguaje de código abierto desarrollado por la iniciativa BigScience, una colaboración internacional de cientos de investigadores coordinada en torno al ecosistema de Hugging Face. Su seña de identidad es el enfoque multilingüe: fue entrenado con decenas de idiomas, entre ellos el español, y varios lenguajes de programación. Se usa en investigación, en proyectos que necesitan un modelo con pesos abiertos y en contextos donde importa la transparencia del entrenamiento.',
    useCases: [
      'Generar y completar textos en varios idiomas',
      'Investigar el comportamiento de modelos de lenguaje abiertos',
      'Ajustar el modelo con datos propios de un dominio',
      'Desplegar un modelo de lenguaje sin depender de APIs cerradas',
      'Comparar rendimiento multilingüe frente a modelos comerciales',
    ],
    features: [
      'Modelo con pesos abiertos descargables públicamente',
      'Entrenamiento multilingüe con decenas de idiomas',
      'Varios tamaños de modelo para distintos presupuestos de cómputo',
      'Documentación pública sobre datos y proceso de entrenamiento',
      'Integración directa con el ecosistema de Hugging Face',
    ],
    pros: [
      'Transparencia poco habitual sobre datos y entrenamiento',
      'Cobertura multilingüe real, con el español incluido',
      'Pesos abiertos y desplegables en infraestructura propia',
      'Respaldo de una comunidad científica amplia',
    ],
    cons: [
      'Sus resultados han quedado por detrás de modelos más recientes',
      'Las versiones grandes exigen mucha memoria de GPU',
      'Su licencia incluye restricciones de uso que conviene revisar',
    ],
    pricingNote:
      'BLOOM se publica con pesos abiertos y descarga gratuita, sin suscripciones ni pago por consulta. El coste depende del hardware o del proveedor de nube donde lo ejecutes, que puede ser elevado en las variantes más grandes. Su licencia contiene cláusulas de uso responsable: revísala en Hugging Face antes de un despliegue comercial.',
    faqs: [
      {
        question: '¿Qué es BLOOM?',
        answer:
          'BLOOM es un gran modelo de lenguaje de código abierto creado por la iniciativa BigScience. Se entrenó de forma multilingüe, con decenas de idiomas y varios lenguajes de programación, y sus pesos están disponibles públicamente para descargarlos y ejecutarlos.',
      },
      {
        question: '¿BLOOM funciona en español?',
        answer:
          'Sí, el español formó parte de su corpus de entrenamiento multilingüe, así que genera y comprende texto en castellano. Aun así, su calidad puede quedar por debajo de modelos más recientes especializados o entrenados con más datos en nuestro idioma.',
      },
      {
        question: '¿BLOOM es gratis?',
        answer:
          'Los pesos se descargan sin coste desde Hugging Face y no hay suscripción. Lo que sí supone gasto es la infraestructura de GPU necesaria para ejecutarlo, sobre todo en las variantes grandes. Revisa su licencia, que impone ciertas restricciones de uso.',
      },
    ],
  },
  IDEFICS: {
    name: 'IDEFICS',
    tagline: 'Modelo multimodal abierto de Hugging Face que combina imágenes y texto',
    intro:
      'IDEFICS es un modelo multimodal de código abierto publicado por Hugging Face. Acepta secuencias que mezclan imágenes y texto y devuelve respuestas escritas, siguiendo la línea de los modelos de visión y lenguaje que aprenden con pocos ejemplos. Se concibió como una alternativa abierta y reproducible a los modelos multimodales cerrados, con datos y proceso documentados, y se utiliza tanto en investigación como en aplicaciones que necesitan visión y lenguaje autoalojados.',
    useCases: [
      'Describir imágenes y generar pies de foto automáticos',
      'Responder preguntas visuales sobre fotos o ilustraciones',
      'Analizar documentos que mezclan texto e imágenes',
      'Construir asistentes multimodales sobre infraestructura propia',
      'Investigar modelos de visión y lenguaje reproducibles',
    ],
    features: [
      'Entrada intercalada de imágenes y texto',
      'Pesos abiertos publicados en Hugging Face',
      'Varios tamaños de modelo según recursos disponibles',
      'Documentación sobre datos y proceso de entrenamiento',
      'Integración directa con la biblioteca Transformers',
    ],
    pros: [
      'Alternativa abierta y transparente a los multimodales cerrados',
      'Fácil de usar dentro del ecosistema de Hugging Face',
      'Sin coste de licencia ni pago por consulta',
      'Documentación clara sobre cómo se entrenó',
    ],
    cons: [
      'Requiere GPU y conocimientos técnicos para desplegarlo',
      'Calidad inferior a los modelos multimodales comerciales punteros',
      'Menos soporte y actualizaciones que un producto de pago',
    ],
    pricingNote:
      'IDEFICS se distribuye como modelo abierto y gratuito a través de Hugging Face, sin suscripción ni consumo por llamada. El coste es el de la infraestructura donde lo ejecutes, ya sea GPU propia o alquilada. Si prefieres no gestionar servidores, existen servicios de inferencia de pago;',
    faqs: [
      {
        question: '¿Qué es IDEFICS?',
        answer:
          'IDEFICS es un modelo multimodal de código abierto de Hugging Face que procesa imágenes y texto en la misma entrada. Permite describir fotos, responder preguntas sobre ellas o analizar documentos visuales, y sus pesos pueden descargarse y ejecutarse libremente.',
      },
      {
        question: '¿IDEFICS es gratis?',
        answer:
          'Sí, es un modelo abierto que se descarga sin coste desde Hugging Face. No hay suscripción ni pago por consulta, aunque sí necesitas hardware con GPU o un servicio de inferencia en la nube, que sí tiene coste. Revisa su licencia antes de usarlo comercialmente.',
      },
      {
        question: '¿Para qué sirve IDEFICS?',
        answer:
          'Sirve para tareas de visión y lenguaje: generar descripciones de imágenes, responder preguntas visuales, extraer información de documentos con gráficos o construir asistentes multimodales autoalojados. Es especialmente útil cuando no quieres depender de una API multimodal cerrada.',
      },
    ],
  },
  Transformers: {
    name: 'Transformers',
    tagline: 'Biblioteca de referencia para usar y ajustar modelos de IA de código abierto',
    intro:
      'Transformers es la biblioteca de código abierto de Hugging Face que se ha convertido en el estándar de facto para trabajar con modelos de aprendizaje profundo. Ofrece una interfaz común para descargar, ejecutar y ajustar miles de modelos de texto, imagen, audio y multimodales publicados en el Hub, con soporte para los principales frameworks de deep learning. La utilizan desarrolladores, investigadores y equipos de producto que quieren integrar IA sin construir cada arquitectura desde cero.',
    useCases: [
      'Ejecutar modelos de lenguaje abiertos en local o en servidor',
      'Ajustar modelos preentrenados con datos propios',
      'Prototipar tareas de NLP, visión o audio rápidamente',
      'Comparar distintos modelos con una API común',
      'Desplegar IA en producto sin depender de APIs cerradas',
    ],
    features: [
      'Acceso unificado a miles de modelos del Hub',
      'Pipelines listos para tareas habituales de IA',
      'Herramientas de entrenamiento y ajuste fino',
      'Compatibilidad con los principales frameworks de deep learning',
      'Documentación extensa y ejemplos reproducibles',
    ],
    pros: [
      'Estándar del sector, con enorme comunidad y ejemplos',
      'Ahorra semanas de trabajo al no reimplementar arquitecturas',
      'Licencia abierta y permisiva para uso comercial',
      'Actualizaciones frecuentes con los modelos más recientes',
    ],
    cons: [
      'Curva de aprendizaje real si no vienes de Python y machine learning',
      'El rendimiento en producción exige optimizaciones adicionales',
      'Las dependencias y versiones pueden dar problemas de compatibilidad',
    ],
    pricingNote:
      'Transformers es una biblioteca de código abierto y su uso es gratuito, sin suscripción ni límites de llamadas. Hugging Face sí ofrece servicios de pago complementarios, como inferencia gestionada o funcionalidades para empresas, que se contratan aparte.',
    faqs: [
      {
        question: '¿Qué es Transformers de Hugging Face?',
        answer:
          'Es una biblioteca de código abierto que permite descargar, ejecutar y ajustar modelos de IA con una interfaz común. Cubre texto, imagen, audio y modelos multimodales, y se ha convertido en la forma habitual de trabajar con modelos abiertos en Python.',
      },
      {
        question: '¿Transformers es gratis?',
        answer:
          'Sí, la biblioteca es de código abierto y su uso no tiene coste. Lo que puede costar dinero es la infraestructura donde ejecutes los modelos o los servicios gestionados que Hugging Face ofrece aparte, como la inferencia alojada o los planes para empresas.',
      },
      {
        question: '¿Para qué sirve Transformers?',
        answer:
          'Sirve para integrar modelos de IA en tus proyectos sin implementarlos desde cero: clasificar texto, generar contenido, transcribir audio, analizar imágenes o ajustar un modelo preentrenado con tus propios datos, todo con la misma API y una única biblioteca.',
      },
    ],
  },
  OpenLLM: {
    name: 'OpenLLM',
    tagline: 'Framework abierto para desplegar modelos de lenguaje como API propia',
    intro:
      'OpenLLM es un proyecto de código abierto de BentoML que facilita ejecutar y servir modelos de lenguaje abiertos como si fueran una API. Permite levantar un endpoint compatible con los estándares del sector para que tus aplicaciones consulten un modelo alojado en tu propia infraestructura, en lugar de depender de un proveedor externo. Está pensado para equipos de desarrollo que quieren control, privacidad y previsibilidad de costes en el despliegue de LLM.',
    useCases: [
      'Servir modelos de lenguaje abiertos como API interna',
      'Sustituir una API comercial por un modelo autoalojado',
      'Desplegar LLM en la nube privada de la empresa',
      'Probar y comparar varios modelos con el mismo endpoint',
      'Integrar modelos abiertos en aplicaciones ya existentes',
    ],
    features: [
      'Despliegue de modelos de lenguaje abiertos con pocos comandos',
      'Endpoint compatible con clientes estándar del ecosistema',
      'Soporte para múltiples modelos y backends de inferencia',
      'Empaquetado y contenedores para llevarlo a producción',
      'Integración con el resto del ecosistema BentoML',
    ],
    pros: [
      'Elimina buena parte del trabajo de infraestructura para servir LLM',
      'Mantiene los datos dentro de tu propia infraestructura',
      'Compatible con clientes existentes, migración sencilla',
      'Proyecto abierto con comunidad y desarrollo activo',
    ],
    cons: [
      'Necesitas GPU y capacidad de operar servidores',
      'El coste de infraestructura puede superar al de una API por uso',
      'Requiere conocimientos de MLOps para escalar bien',
    ],
    pricingNote:
      'OpenLLM es software de código abierto y su uso no tiene coste de licencia. El gasto real está en las GPU y servidores donde despliegues los modelos. BentoML ofrece además servicios gestionados de pago para quien no quiera administrar la infraestructura;',
    faqs: [
      {
        question: '¿Qué es OpenLLM?',
        answer:
          'OpenLLM es un framework de código abierto de BentoML que permite ejecutar modelos de lenguaje abiertos y exponerlos como una API en tu propia infraestructura, de forma que tus aplicaciones los consulten igual que consultarían un servicio comercial.',
      },
      {
        question: '¿OpenLLM es gratis?',
        answer:
          'El framework es de código abierto y gratuito. Lo que cuesta es la infraestructura: servidores con GPU capaces de ejecutar el modelo elegido. Si prefieres no gestionarla, BentoML comercializa opciones alojadas de pago que se contratan por separado.',
      },
      {
        question: '¿Para qué sirve OpenLLM?',
        answer:
          'Sirve para autoalojar modelos de lenguaje: montar tu propio endpoint de IA en lugar de depender de una API externa. Es útil cuando necesitas privacidad de datos, control sobre el modelo o costes previsibles con un volumen de uso alto.',
      },
    ],
  },
  MemGPT: {
    name: 'MemGPT',
    tagline: 'Sistema de memoria a largo plazo para agentes de IA con contexto limitado',
    intro:
      'MemGPT es un proyecto de código abierto que aborda una de las grandes limitaciones de los modelos de lenguaje: la ventana de contexto finita. Propone gestionar la memoria de un agente por niveles, moviendo información entre el contexto activo y un almacenamiento externo, de modo que el asistente recuerde conversaciones y hechos más allá de lo que cabe en un solo prompt. Lo usan desarrolladores que construyen agentes conversacionales persistentes.',
    useCases: [
      'Dotar de memoria persistente a un asistente conversacional',
      'Recordar preferencias del usuario entre sesiones distintas',
      'Gestionar documentos extensos sin saturar el contexto',
      'Construir agentes que aprenden de interacciones pasadas',
      'Investigar la gestión de memoria en sistemas con LLM',
    ],
    features: [
      'Gestión de memoria por niveles dentro y fuera del contexto',
      'Almacenamiento persistente de hechos y conversaciones',
      'Recuperación automática de información relevante',
      'Compatible con distintos proveedores de modelos de lenguaje',
      'Código abierto con comunidad de desarrolladores',
    ],
    pros: [
      'Resuelve un problema muy real de los agentes conversacionales',
      'Código abierto, adaptable a tu propia arquitectura',
      'Independiente del proveedor del modelo de lenguaje',
      'Enfoque bien documentado y respaldado por investigación',
    ],
    cons: [
      'Añade complejidad de infraestructura al sistema',
      'Requiere perfil técnico para integrarlo correctamente',
      'El proyecto ha evolucionado y cambiado de nombre y alcance',
    ],
    pricingNote:
      'MemGPT nació como proyecto de código abierto y su uso no tiene coste de licencia. Lo que sí supone gasto es el consumo del modelo de lenguaje que utilices por debajo y la base de datos donde guardes la memoria. El proyecto ha ido evolucionando hacia una plataforma con opciones alojadas:',
    faqs: [
      {
        question: '¿Qué es MemGPT?',
        answer:
          'MemGPT es un sistema de código abierto que dota de memoria a largo plazo a los agentes basados en modelos de lenguaje. Gestiona la información por niveles, moviéndola entre el contexto activo y un almacén externo para superar el límite de la ventana de contexto.',
      },
      {
        question: '¿Para qué sirve MemGPT?',
        answer:
          'Sirve para que un asistente de IA recuerde lo hablado en sesiones anteriores, las preferencias del usuario o los detalles de documentos largos. Sin una capa así, el agente olvida todo lo que no quepa en el prompt de la conversación actual.',
      },
      {
        question: '¿MemGPT es gratis?',
        answer:
          'El proyecto de código abierto puede usarse sin coste de licencia. Aparte pagarás el consumo del modelo de lenguaje y el almacenamiento que uses. Si optas por una versión alojada del proyecto, esta sí puede tener planes de pago; revisa su web.',
      },
    ],
  },
  MemO: {
    name: 'MemO',
    tagline: 'Capa de memoria para aplicaciones y agentes de IA que recuerdan al usuario',
    intro:
      'Mem0 es una capa de memoria para aplicaciones de IA que permite almacenar y recuperar lo que el sistema aprende de cada usuario a lo largo del tiempo. En lugar de reenviar todo el historial en cada consulta, extrae y guarda los hechos relevantes y los recupera cuando hacen falta, reduciendo el contexto necesario. Se ofrece como proyecto de código abierto y también como servicio gestionado, y se dirige a desarrolladores que construyen asistentes personalizados.',
    useCases: [
      'Personalizar respuestas según el historial de cada usuario',
      'Recordar preferencias y datos entre sesiones distintas',
      'Reducir el contexto enviado al modelo en cada consulta',
      'Dar memoria persistente a agentes y copilotos',
      'Construir asistentes de soporte que recuerdan casos anteriores',
    ],
    features: [
      'Extracción automática de hechos relevantes de las conversaciones',
      'Almacenamiento y recuperación de memorias por usuario',
      'SDK para integrarlo en aplicaciones y agentes',
      'Versión de código abierto y opción alojada',
      'Compatible con distintos modelos y bases de datos vectoriales',
    ],
    pros: [
      'Evita construir desde cero toda la lógica de memoria',
      'Reduce el contexto y, con ello, el coste por consulta',
      'Opción autoalojada gratuita para quien quiera control total',
      'Integración sencilla mediante SDK en proyectos existentes',
    ],
    cons: [
      'Introduce una dependencia más en tu arquitectura',
      'La calidad de la memoria depende de qué hechos extraiga',
      'Los planes gestionados tienen límites de uso en el nivel gratuito',
    ],
    pricingNote:
      'Mem0 sigue un modelo freemium: existe una versión de código abierto que puedes autoalojar sin coste de licencia y un servicio gestionado con plan gratuito limitado y planes de pago por volumen de memorias o consultas. Los precios cambian con frecuencia, así que',
    faqs: [
      {
        question: '¿Qué es Mem0?',
        answer:
          'Mem0 es una capa de memoria para aplicaciones de IA. Guarda los datos relevantes de cada usuario a partir de las conversaciones y los recupera cuando el asistente los necesita, de modo que el sistema recuerde preferencias y contexto entre sesiones.',
      },
      {
        question: '¿Mem0 es gratis?',
        answer:
          'Tiene una versión de código abierto que puedes desplegar por tu cuenta sin coste de licencia, y un servicio gestionado con un plan gratuito limitado y planes de pago según el uso. Consulta su web para conocer los tramos y precios actualizados.',
      },
      {
        question: '¿Para qué sirve Mem0?',
        answer:
          'Sirve para que un asistente de IA no empiece de cero en cada conversación. Al recordar hechos y preferencias del usuario, las respuestas son más personalizadas y además se envía menos contexto al modelo, lo que reduce el coste por consulta.',
      },
    ],
  },
  'Zep AI': {
    name: 'Zep AI',
    tagline: 'Memoria a largo plazo para agentes de IA basada en grafos de conocimiento',
    intro:
      'Zep es una plataforma de memoria para agentes y asistentes de IA. Almacena el historial de conversación y los datos del usuario, y los organiza para poder recuperar después la información relevante sin arrastrar todo el contexto en cada llamada al modelo. Su enfoque combina el histórico de mensajes con la construcción de un grafo de conocimiento que relaciona hechos y su evolución en el tiempo. Está dirigida a desarrolladores que construyen agentes en producción.',
    useCases: [
      'Dar memoria persistente a un asistente conversacional',
      'Recuperar hechos relevantes del usuario en cada consulta',
      'Mantener el contexto de conversaciones largas sin saturar el prompt',
      'Construir agentes de soporte con historial de cliente',
      'Relacionar datos del usuario mediante un grafo de conocimiento',
    ],
    features: [
      'Almacenamiento del historial de conversaciones por sesión y usuario',
      'Grafo de conocimiento que relaciona hechos y su evolución',
      'Recuperación de contexto relevante mediante búsqueda',
      'SDK para integrar la memoria en agentes existentes',
      'Servicio en la nube y componentes de código abierto',
    ],
    pros: [
      'Enfoque de grafo temporal, más rico que un simple historial',
      'Reduce el contexto enviado al modelo y, por tanto, el coste',
      'SDK y documentación orientados a uso en producción',
      'Existen componentes abiertos para quien quiera autoalojar',
    ],
    cons: [
      'Añade un servicio externo del que tu agente depende',
      'El nivel gratuito tiene límites que se quedan cortos al escalar',
      'Requiere perfil técnico para sacarle partido',
    ],
    pricingNote:
      'Zep funciona con un modelo freemium: suele ofrecer un plan gratuito con límites de uso para pruebas y desarrollo, y planes de pago escalonados según el volumen de mensajes o usuarios, además de opciones para empresas. También hay componentes de código abierto autoalojables.',
    faqs: [
      {
        question: '¿Qué es Zep AI?',
        answer:
          'Zep es una plataforma de memoria para agentes de IA. Guarda el historial de conversación y los datos del usuario, los organiza en un grafo de conocimiento y devuelve solo el contexto relevante cuando el agente lo necesita, en lugar de reenviar todo el historial.',
      },
      {
        question: '¿Zep es gratis?',
        answer:
          'Ofrece un plan gratuito con límites de uso, pensado para desarrollo y pruebas, junto a planes de pago que escalan con el volumen. Además publica componentes de código abierto que puedes autoalojar. Consulta su web para conocer los tramos actualizados.',
      },
      {
        question: '¿Para qué sirve Zep?',
        answer:
          'Sirve para que un agente de IA recuerde a sus usuarios entre sesiones: preferencias, datos y conversaciones anteriores. Al recuperar solo lo relevante, mejora la personalización de las respuestas y reduce el número de tokens enviados al modelo en cada consulta.',
      },
    ],
  },
  'Tree-of-Thought': {
    name: 'Tree-of-Thought',
    tagline: 'Técnica de razonamiento que explora varias vías antes de dar una respuesta',
    intro:
      'Tree of Thoughts es un método de razonamiento estructurado para modelos de lenguaje, formulado en un trabajo de investigación de Princeton y publicado con código abierto. En lugar de generar una única cadena de razonamiento, el modelo explora varias ramas de pensamiento, las evalúa y descarta las que no llevan a buen puerto, de forma parecida a una búsqueda en árbol. Se aplica a problemas donde el razonamiento lineal falla, como puzles o planificación.',
    useCases: [
      'Resolver problemas de lógica y puzles complejos',
      'Planificar tareas que requieren varios pasos encadenados',
      'Mejorar la fiabilidad del razonamiento en tareas difíciles',
      'Investigar estrategias de prompting avanzadas',
      'Comparar métodos de razonamiento en pruebas controladas',
    ],
    features: [
      'Exploración de múltiples ramas de razonamiento',
      'Evaluación y poda de las vías menos prometedoras',
      'Implementación de referencia publicada en código abierto',
      'Aplicable sobre distintos modelos de lenguaje',
      'Documentación en la publicación académica original',
    ],
    pros: [
      'Mejora los resultados en tareas donde el razonamiento lineal falla',
      'Código abierto y gratuito, fácil de estudiar y adaptar',
      'Método general, no atado a un modelo concreto',
      'Respaldado por una publicación académica de referencia',
    ],
    cons: [
      'Multiplica el número de llamadas al modelo y, con ello, el coste',
      'Es más lento que un prompt directo',
      'No aporta ventajas en tareas sencillas',
    ],
    pricingNote:
      'Tree of Thoughts es una técnica de investigación con implementación de código abierto, así que su uso no tiene coste de licencia. Lo que sí encarece es el consumo del modelo de lenguaje sobre el que se aplica, ya que explorar varias ramas implica muchas más llamadas que un prompt convencional.',
    faqs: [
      {
        question: '¿Qué es Tree of Thoughts?',
        answer:
          'Es un método de razonamiento para modelos de lenguaje que, en lugar de seguir una sola cadena de pensamiento, explora varias ramas posibles, las evalúa y se queda con las más prometedoras. Funciona como una búsqueda en árbol aplicada al razonamiento.',
      },
      {
        question: '¿Para qué sirve Tree of Thoughts?',
        answer:
          'Sirve para tareas donde el modelo suele equivocarse si responde de un tirón: puzles, problemas matemáticos con varios pasos o planificación. Al explorar y descartar alternativas, el resultado final es más fiable, aunque el proceso resulte más lento y costoso.',
      },
      {
        question: '¿Tree of Thoughts es gratis?',
        answer:
          'La implementación de referencia es de código abierto y no tiene coste. Ahora bien, aplicar la técnica requiere muchas más llamadas al modelo de lenguaje que un prompt normal, así que el gasto de la API subyacente puede ser considerablemente mayor.',
      },
    ],
  },
  GraphGPT: {
    name: 'GraphGPT',
    tagline: 'Herramienta abierta que convierte texto en grafos de conocimiento visuales',
    intro:
      'GraphGPT es un proyecto de código abierto que utiliza modelos de lenguaje para transformar texto en lenguaje natural en un grafo de conocimiento. A partir de un párrafo, identifica entidades y las relaciones entre ellas y las representa visualmente como nodos y aristas. Está pensado como herramienta de exploración y demostración para quienes quieren estructurar información no organizada o visualizar cómo se conectan los conceptos de un texto.',
    useCases: [
      'Extraer entidades y relaciones de un texto libre',
      'Visualizar cómo se conectan los conceptos de un documento',
      'Estructurar notas o apuntes en forma de grafo',
      'Explorar la extracción de conocimiento con modelos de lenguaje',
      'Preparar datos para una base de conocimiento',
    ],
    features: [
      'Conversión de texto natural en nodos y relaciones',
      'Visualización interactiva del grafo generado',
      'Demostración web accesible desde el navegador',
      'Código abierto disponible para adaptarlo',
      'Uso de modelos de lenguaje para la extracción',
    ],
    pros: [
      'Muy directo: pegas un texto y ves el grafo resultante',
      'Código abierto, adaptable a tus propios casos',
      'Sin coste de licencia ni suscripción',
      'Buena forma de entender la extracción de conocimiento',
    ],
    cons: [
      'Es más una demostración que un producto maduro',
      'Suele requerir tu propia clave de API del modelo de lenguaje',
      'La calidad del grafo depende mucho del texto de entrada',
    ],
    pricingNote:
      'GraphGPT es un proyecto de código abierto sin coste de licencia ni planes de suscripción. Normalmente necesitarás aportar tu propia clave de API del modelo de lenguaje que utilice por debajo, y ese consumo sí se factura por parte del proveedor correspondiente.',
    faqs: [
      {
        question: '¿Qué es GraphGPT?',
        answer:
          'GraphGPT es una herramienta de código abierto que convierte texto escrito en lenguaje natural en un grafo de conocimiento. Detecta las entidades mencionadas y las relaciones entre ellas, y las muestra de forma visual como una red de nodos conectados.',
      },
      {
        question: '¿GraphGPT es gratis?',
        answer:
          'El proyecto es de código abierto y no cobra licencia. Sin embargo, para funcionar suele necesitar una clave de API de un modelo de lenguaje, cuyo consumo sí te facturará el proveedor correspondiente según el volumen de texto que proceses.',
      },
      {
        question: '¿Para qué sirve GraphGPT?',
        answer:
          'Sirve para estructurar información desordenada: a partir de un texto obtienes entidades y relaciones listas para explorar visualmente. Es útil para analizar documentos, organizar notas o preparar datos que luego alimenten una base de conocimiento.',
      },
    ],
  },
  DSPy: {
    name: 'DSPy',
    tagline: 'Framework para programar modelos de lenguaje en lugar de escribir prompts a mano',
    intro:
      'DSPy es un framework de código abierto surgido en el entorno académico de Stanford que propone otra forma de trabajar con modelos de lenguaje: en vez de escribir y retocar prompts manualmente, defines módulos con sus entradas y salidas y dejas que el sistema optimice las instrucciones y los ejemplos a partir de métricas y datos. Está orientado a desarrolladores e investigadores que construyen sistemas complejos con LLM y quieren resultados reproducibles.',
    useCases: [
      'Construir pipelines de LLM sin ajustar prompts a mano',
      'Optimizar automáticamente instrucciones y ejemplos con datos',
      'Desarrollar sistemas de recuperación y respuesta más fiables',
      'Cambiar de modelo sin reescribir todos los prompts',
      'Evaluar sistemas con LLM de forma reproducible',
    ],
    features: [
      'Módulos programables con firmas de entrada y salida',
      'Optimizadores que ajustan prompts y ejemplos automáticamente',
      'Evaluación con métricas definidas por el usuario',
      'Compatible con distintos proveedores de modelos',
      'Código abierto con comunidad activa',
    ],
    pros: [
      'Reduce el trabajo manual y frágil de afinar prompts',
      'Facilita cambiar de modelo sin rehacer todo el sistema',
      'Enfoque medible: optimiza contra métricas reales',
      'Abierto, gratuito y con respaldo académico',
    ],
    cons: [
      'Curva de aprendizaje: exige cambiar la forma de pensar los prompts',
      'La optimización consume muchas llamadas al modelo',
      'La API ha evolucionado bastante entre versiones',
    ],
    pricingNote:
      'DSPy es un framework de código abierto y su uso no tiene coste de licencia ni suscripción. El gasto proviene del modelo de lenguaje que utilices por debajo, y conviene tenerlo en cuenta porque los procesos de optimización pueden generar bastantes llamadas a la API.',
    faqs: [
      {
        question: '¿Qué es DSPy?',
        answer:
          'DSPy es un framework de código abierto para construir sistemas con modelos de lenguaje programando módulos en lugar de escribir prompts a mano. Define qué entra y qué sale de cada paso y usa optimizadores que ajustan automáticamente las instrucciones a partir de datos y métricas.',
      },
      {
        question: '¿Para qué sirve DSPy?',
        answer:
          'Sirve para crear pipelines de IA más robustos y mantenibles: sistemas de preguntas y respuestas, clasificación o recuperación de información. Su ventaja es que, al no depender de prompts escritos a mano, resulta más fácil cambiar de modelo y medir mejoras reales.',
      },
      {
        question: '¿DSPy es gratis?',
        answer:
          'Sí, el framework es de código abierto y su uso no tiene coste. Lo que pagas es el consumo del modelo de lenguaje que conectes, y conviene vigilarlo, ya que los procesos de optimización pueden hacer muchas llamadas a la API.',
      },
    ],
  },
  'Program-Aided Reasoning': {
    name: 'Program-Aided Reasoning',
    tagline: 'Método que resuelve problemas haciendo que el modelo escriba y ejecute código',
    intro:
      'Program-Aided Language Models, conocido como PAL, es un enfoque de razonamiento en el que el modelo de lenguaje no calcula la respuesta directamente, sino que escribe un programa que resuelve el problema y deja la ejecución a un intérprete. Así se separa la parte de comprensión, en la que los LLM son buenos, de la parte de cálculo exacto, donde suelen fallar. Es un método de investigación publicado con código abierto y muy usado en tareas matemáticas y simbólicas.',
    useCases: [
      'Resolver problemas matemáticos con cálculo exacto',
      'Abordar razonamientos simbólicos paso a paso',
      'Reducir errores aritméticos de los modelos de lenguaje',
      'Automatizar respuestas verificables mediante código',
      'Investigar métodos de razonamiento asistido por programas',
    ],
    features: [
      'El modelo genera código en lugar de la respuesta final',
      'Ejecución del programa en un intérprete externo',
      'Separación entre comprensión del problema y cálculo',
      'Implementación de referencia de código abierto',
      'Aplicable sobre distintos modelos de lenguaje',
    ],
    pros: [
      'Elimina buena parte de los errores aritméticos típicos de los LLM',
      'El razonamiento queda explícito en el código, es auditable',
      'Método abierto y gratuito, sin dependencia de un proveedor',
      'Muy efectivo en problemas matemáticos y simbólicos',
    ],
    cons: [
      'Necesitas un entorno de ejecución de código, con sus riesgos de seguridad',
      'No aporta nada en tareas que no admiten formulación algorítmica',
      'Si el código generado es erróneo, la respuesta también lo será',
    ],
    pricingNote:
      'PAL es un método de investigación con implementación de código abierto, sin licencias ni suscripciones. Los costes son los del modelo de lenguaje que utilices y los del entorno donde ejecutes el código generado. Consulta la web y el repositorio oficiales para conocer los recursos disponibles.',
    faqs: [
      {
        question: '¿Qué es Program-Aided Reasoning?',
        answer:
          'Es un método, conocido como PAL, en el que el modelo de lenguaje no resuelve el problema por sí mismo, sino que escribe un programa que lo resuelve. Ese código se ejecuta en un intérprete y el resultado obtenido es la respuesta final.',
      },
      {
        question: '¿Para qué sirve PAL?',
        answer:
          'Sirve sobre todo para problemas matemáticos, lógicos o simbólicos, donde los modelos de lenguaje cometen errores de cálculo. Al delegar la ejecución en un intérprete, la aritmética es exacta y el razonamiento queda escrito de forma auditable en el código.',
      },
      {
        question: '¿PAL es gratis?',
        answer:
          'El método y su implementación de referencia son abiertos y gratuitos. Los costes asociados son el consumo del modelo de lenguaje que genere el código y la infraestructura donde lo ejecutes, que además debe estar aislada por seguridad.',
      },
    ],
  },
  AutoGen: {
    name: 'AutoGen',
    tagline: 'Framework de Microsoft para crear sistemas con varios agentes de IA que colaboran',
    intro:
      'AutoGen es un framework de código abierto impulsado por Microsoft para construir aplicaciones basadas en varios agentes de IA que conversan entre sí para resolver una tarea. Permite definir agentes con roles distintos, hacer que se coordinen, ejecuten código y pidan intervención humana cuando haga falta. Está dirigido a desarrolladores e investigadores que necesitan algo más que una sola llamada a un modelo: flujos de trabajo complejos repartidos entre varios agentes especializados.',
    useCases: [
      'Orquestar varios agentes especializados en una misma tarea',
      'Automatizar flujos de trabajo que requieren varios pasos',
      'Generar y ejecutar código de forma supervisada',
      'Incluir revisión humana en puntos concretos del proceso',
      'Investigar patrones de colaboración entre agentes',
    ],
    features: [
      'Definición de agentes con roles y capacidades distintas',
      'Conversaciones entre agentes para resolver tareas',
      'Ejecución de código y uso de herramientas externas',
      'Posibilidad de intervención humana en el bucle',
      'Compatible con varios proveedores de modelos',
    ],
    pros: [
      'Respaldo de Microsoft y comunidad de investigación amplia',
      'Muy flexible para diseñar patrones de colaboración a medida',
      'Código abierto y gratuito, sin dependencia de un proveedor',
      'Buena documentación y ejemplos disponibles',
    ],
    cons: [
      'Los sistemas multiagente son difíciles de depurar y controlar',
      'El consumo de tokens se dispara al conversar varios agentes',
      'La API ha cambiado de forma notable entre versiones',
    ],
    pricingNote:
      'AutoGen es un framework de código abierto y su uso no tiene coste de licencia. El gasto real está en las llamadas al modelo de lenguaje que utilices, que pueden crecer bastante en sistemas con varios agentes conversando.',
    faqs: [
      {
        question: '¿Qué es AutoGen?',
        answer:
          'AutoGen es un framework de código abierto de Microsoft para construir aplicaciones con varios agentes de IA que conversan entre sí. Cada agente puede tener un rol distinto, usar herramientas o ejecutar código, y entre todos resuelven tareas complejas por pasos.',
      },
      {
        question: '¿AutoGen es gratis?',
        answer:
          'Sí, el framework es de código abierto y no tiene coste de licencia. Lo que pagas es el consumo del modelo de lenguaje que conectes. Conviene vigilarlo porque los sistemas multiagente generan muchas más llamadas que un asistente convencional.',
      },
      {
        question: '¿Para qué sirve AutoGen?',
        answer:
          'Sirve para automatizar tareas que no se resuelven con una sola consulta a un modelo: análisis de datos, generación y revisión de código o flujos de trabajo con varias fases. Cada agente asume una parte y se coordinan mediante conversación.',
      },
    ],
  },
  CrewAI: {
    name: 'CrewAI',
    tagline: 'Framework para orquestar equipos de agentes de IA con roles y tareas definidas',
    intro:
      'CrewAI es un framework de código abierto en Python para construir sistemas multiagente organizados como un equipo de trabajo. Defines agentes con un rol, un objetivo y unas herramientas, les asignas tareas y estableces cómo se coordinan para completar un proceso. Su metáfora de tripulación resulta muy intuitiva y la utilizan desarrolladores que quieren automatizar flujos de trabajo complejos repartiéndolos entre varios agentes especializados.',
    useCases: [
      'Automatizar procesos de investigación y redacción de informes',
      'Repartir un flujo de trabajo entre agentes con roles distintos',
      'Coordinar tareas secuenciales o jerárquicas entre agentes',
      'Integrar herramientas externas y APIs en un proceso automatizado',
      'Prototipar automatizaciones de negocio con IA',
    ],
    features: [
      'Agentes definidos por rol, objetivo y herramientas',
      'Asignación de tareas y procesos de coordinación',
      'Integración con herramientas externas y fuentes de datos',
      'Compatible con distintos proveedores de modelos',
      'Framework de código abierto en Python',
    ],
    pros: [
      'Modelo mental sencillo: roles, tareas y equipo',
      'Puesta en marcha rápida frente a otros frameworks multiagente',
      'Comunidad activa con muchos ejemplos disponibles',
      'Código abierto, sin atadura a un proveedor de modelos',
    ],
    cons: [
      'El consumo de tokens crece rápido con varios agentes',
      'Los resultados pueden ser poco predecibles en tareas complejas',
      'Requiere saber Python y entender la lógica de agentes',
    ],
    pricingNote:
      'El framework de CrewAI es de código abierto y puede usarse sin coste de licencia; solo pagas el consumo del modelo de lenguaje que conectes. La empresa ofrece además una plataforma comercial con funciones de despliegue y gestión para empresas.',
    faqs: [
      {
        question: '¿Qué es CrewAI?',
        answer:
          'CrewAI es un framework de código abierto en Python para crear equipos de agentes de IA. Cada agente tiene un rol, un objetivo y unas herramientas, y el sistema coordina cómo se reparten las tareas hasta completar un flujo de trabajo.',
      },
      {
        question: '¿CrewAI es gratis?',
        answer:
          'El framework de código abierto se usa sin coste de licencia; solo pagas las llamadas al modelo de lenguaje que utilices. La compañía comercializa aparte una plataforma para empresas con funciones adicionales, con sus propios planes de pago. Consulta su web.',
      },
      {
        question: '¿Para qué sirve CrewAI?',
        answer:
          'Sirve para automatizar procesos que requieren varios pasos y perfiles distintos: investigar un tema, redactar un informe, revisarlo y publicarlo, por ejemplo. En lugar de un solo asistente, reparte el trabajo entre agentes especializados que se coordinan entre sí.',
      },
    ],
  },
  LangGraph: {
    name: 'LangGraph',
    tagline:
      'Librería de LangChain para construir agentes con flujos controlados y estado persistente',
    intro:
      'LangGraph es una librería de código abierto del equipo de LangChain para construir agentes y flujos de trabajo con modelos de lenguaje representados como grafos. Cada nodo es un paso y las aristas definen cómo se avanza, lo que permite ciclos, ramificaciones y estado compartido. Frente a los agentes puramente autónomos, aporta control explícito sobre lo que puede pasar, algo clave para llevar sistemas de IA a producción con garantías.',
    useCases: [
      'Construir agentes con flujos de trabajo controlados y repetibles',
      'Mantener el estado de una conversación entre pasos',
      'Introducir puntos de revisión humana en un proceso automático',
      'Orquestar varios agentes con ramificaciones y ciclos',
      'Llevar prototipos de agentes a entornos de producción',
    ],
    features: [
      'Definición de flujos como grafos con nodos y aristas',
      'Estado compartido y persistencia entre pasos',
      'Soporte para ciclos, ramificaciones y control de flujo',
      'Puntos de intervención humana dentro del proceso',
      'Integración con el ecosistema de LangChain',
    ],
    pros: [
      'Más control y previsibilidad que los agentes totalmente autónomos',
      'Persistencia de estado, útil para conversaciones largas',
      'Librería abierta y ampliamente adoptada en la industria',
      'Se integra bien con el resto de herramientas de LangChain',
    ],
    cons: [
      'Curva de aprendizaje al pensar los flujos como grafos',
      'Puede resultar excesivo para casos de uso sencillos',
      'Las funciones de despliegue gestionado tienen coste aparte',
    ],
    pricingNote:
      'La librería LangGraph es de código abierto y puede usarse sin coste de licencia; el gasto es el del modelo de lenguaje que conectes. LangChain ofrece además una plataforma de despliegue y observabilidad con plan gratuito limitado y planes de pago.',
    faqs: [
      {
        question: '¿Qué es LangGraph?',
        answer:
          'LangGraph es una librería de código abierto de LangChain para construir agentes de IA como grafos: cada nodo es un paso del flujo y las aristas definen cómo se avanza, permitiendo ciclos, ramificaciones y un estado compartido entre pasos.',
      },
      {
        question: '¿LangGraph es gratis?',
        answer:
          'La librería es de código abierto y su uso no tiene coste; solo pagas el consumo del modelo de lenguaje que utilices. LangChain comercializa aparte una plataforma de despliegue y monitorización con plan gratuito limitado y niveles de pago.',
      },
      {
        question: '¿En qué se diferencia LangGraph de LangChain?',
        answer:
          'LangChain es el ecosistema general de componentes para trabajar con modelos de lenguaje, mientras que LangGraph se centra en orquestar agentes y flujos con estado como grafos. LangGraph aporta control explícito del flujo, ciclos y persistencia, pensado para sistemas en producción.',
      },
    ],
  },
  'Weights & Biases': {
    name: 'Weights & Biases',
    tagline: 'Plataforma MLOps para seguir experimentos y gestionar modelos de machine learning',
    intro:
      'Weights & Biases es una plataforma de MLOps utilizada por equipos de machine learning para registrar experimentos, comparar resultados y colaborar durante el desarrollo de modelos. Con unas pocas líneas de código, registra métricas, hiperparámetros, versiones de datos y artefactos, y los presenta en paneles interactivos. Se ha convertido en una herramienta habitual en investigación y en empresas que entrenan modelos propios, y también incorpora funciones para el seguimiento de aplicaciones con LLM.',
    useCases: [
      'Registrar y comparar experimentos de entrenamiento',
      'Visualizar métricas de un modelo en paneles interactivos',
      'Versionar conjuntos de datos y artefactos del modelo',
      'Colaborar en equipo sobre los resultados de un proyecto',
      'Monitorizar aplicaciones basadas en modelos de lenguaje',
    ],
    features: [
      'Seguimiento de métricas e hiperparámetros en tiempo real',
      'Paneles y visualizaciones comparativas entre ejecuciones',
      'Versionado de datasets, modelos y artefactos',
      'Búsqueda automática de hiperparámetros',
      'Integración con los frameworks de ML más habituales',
    ],
    pros: [
      'Integración muy sencilla con pocas líneas de código',
      'Visualizaciones potentes que ahorran mucho trabajo manual',
      'Plan gratuito suficiente para uso personal y académico',
      'Amplia adopción, con integraciones para casi cualquier framework',
    ],
    cons: [
      'Los planes de equipo pueden resultar caros al escalar',
      'Envía datos de entrenamiento a la nube salvo despliegue privado',
      'La cantidad de funciones puede abrumar al principio',
    ],
    pricingNote:
      'Weights & Biases sigue un modelo freemium: suele ofrecer un plan gratuito para uso personal y proyectos académicos, con límites de almacenamiento e historial, y planes de pago por usuario para equipos, además de opciones para empresas con despliegue privado. Los precios cambian con frecuencia, así que',
    faqs: [
      {
        question: '¿Qué es Weights & Biases?',
        answer:
          'Weights & Biases es una plataforma de MLOps que registra y visualiza los experimentos de machine learning. Guarda métricas, hiperparámetros y artefactos de cada ejecución y permite compararlos en paneles interactivos para saber qué configuración funciona mejor.',
      },
      {
        question: '¿Weights & Biases es gratis?',
        answer:
          'Ofrece un plan gratuito pensado para uso personal y proyectos académicos, con ciertos límites de almacenamiento e historial. Para equipos y empresas dispone de planes de pago, normalmente por usuario. Consulta su web para conocer los tramos actualizados.',
      },
      {
        question: '¿Para qué sirve Weights & Biases?',
        answer:
          'Sirve para no perder el hilo al entrenar modelos: en lugar de anotar resultados a mano, registra automáticamente cada ejecución con sus métricas y parámetros. Así puedes comparar experimentos, reproducir resultados y compartir el progreso con tu equipo.',
      },
    ],
  },
  ClearML: {
    name: 'ClearML',
    tagline: 'Plataforma MLOps de código abierto para gestionar experimentos, datos y despliegue',
    intro:
      'ClearML es una plataforma de MLOps que cubre el ciclo completo de un proyecto de machine learning: seguimiento de experimentos, gestión de datos, orquestación de trabajos de entrenamiento y despliegue de modelos. Tiene un núcleo de código abierto que puedes autoalojar y un servicio gestionado en la nube. La utilizan equipos que buscan una alternativa integrada a combinar varias herramientas sueltas y que valoran poder ejecutarla en su propia infraestructura.',
    useCases: [
      'Registrar y comparar experimentos de entrenamiento',
      'Versionar conjuntos de datos y modelos',
      'Orquestar trabajos de entrenamiento en varias máquinas',
      'Automatizar pipelines de machine learning',
      'Desplegar modelos y monitorizar su rendimiento',
    ],
    features: [
      'Seguimiento automático de experimentos con poca configuración',
      'Gestión y versionado de datasets',
      'Orquestación de recursos de cómputo y colas de trabajos',
      'Pipelines de entrenamiento automatizados',
      'Núcleo de código abierto autoalojable',
    ],
    pros: [
      'Cubre todo el ciclo de MLOps en una sola plataforma',
      'Opción autoalojada, útil si los datos no pueden salir de casa',
      'Núcleo de código abierto sin coste de licencia',
      'Integración automática con los frameworks de ML habituales',
    ],
    cons: [
      'El autoalojamiento requiere esfuerzo de administración',
      'Su amplitud de funciones implica una curva de aprendizaje',
      'Las funciones avanzadas quedan reservadas a los planes de pago',
    ],
    pricingNote:
      'ClearML funciona con un modelo freemium: el núcleo es de código abierto y autoalojable sin coste de licencia, y el servicio en la nube suele incluir un plan gratuito con límites y planes de pago por usuario o por capacidad, además de opciones para empresas.',
    faqs: [
      {
        question: '¿Qué es ClearML?',
        answer:
          'ClearML es una plataforma de MLOps que cubre el ciclo completo de un proyecto de machine learning: seguimiento de experimentos, versionado de datos, orquestación del cómputo y despliegue de modelos. Tiene un núcleo de código abierto y una versión gestionada en la nube.',
      },
      {
        question: '¿ClearML es gratis?',
        answer:
          'Su núcleo es de código abierto y puedes autoalojarlo sin coste de licencia, asumiendo el gasto de infraestructura. El servicio en la nube ofrece un plan gratuito con límites y planes de pago para equipos y empresas. Consulta su web para los tramos actualizados.',
      },
      {
        question: '¿Para qué sirve ClearML?',
        answer:
          'Sirve para organizar el trabajo de un equipo de machine learning: registrar cada experimento con sus métricas, versionar los datos utilizados, lanzar entrenamientos en las máquinas disponibles y llevar los modelos a producción, todo desde una misma plataforma.',
      },
    ],
  },
  MLflow: {
    name: 'MLflow',
    tagline:
      'Plataforma open source para gestionar el ciclo de vida completo de modelos de machine learning',
    intro:
      'MLflow es una plataforma de código abierto para gestionar el ciclo de vida del machine learning, desde la experimentación hasta el despliegue en producción. Nació en Databricks y hoy se mantiene como proyecto de la comunidad, con integración en las principales librerías de ML. La usan equipos de ciencia de datos que necesitan registrar experimentos, versionar modelos y reproducir resultados sin depender de un proveedor concreto.',
    useCases: [
      'Registrar métricas y parámetros de cada experimento de entrenamiento',
      'Comparar versiones de un modelo antes de pasarlo a producción',
      'Versionar y catalogar modelos en un registro centralizado',
      'Empaquetar proyectos de ML para que sean reproducibles por el equipo',
      'Servir modelos entrenados a través de una API de inferencia',
    ],
    features: [
      'Seguimiento de experimentos con métricas, parámetros y artefactos',
      'Registro de modelos con versionado y etapas de promoción',
      'Empaquetado reproducible de proyectos de machine learning',
      'Despliegue de modelos en distintos entornos de inferencia',
      'Integración con las principales librerías de ML de Python',
    ],
    pros: [
      'Código abierto y sin coste de licencia',
      'Agnóstico respecto a librerías, nubes y frameworks',
      'Comunidad amplia y documentación extensa',
      'Se puede autoalojar y mantener el control de los datos',
    ],
    cons: [
      'Requiere conocimientos técnicos y trabajo de configuración',
      'El autoalojamiento implica mantener la infraestructura por tu cuenta',
      'La interfaz es funcional pero poco pulida frente a alternativas comerciales',
    ],
    pricingNote:
      'MLflow es un proyecto de código abierto y su uso es gratuito, tanto en local como autoalojado en tu propia infraestructura. El coste real proviene de los servidores y el almacenamiento que dediques. Existen versiones gestionadas dentro de plataformas comerciales con planes de pago;',
    faqs: [
      {
        question: '¿Qué es MLflow?',
        answer:
          'MLflow es una plataforma de código abierto para gestionar el ciclo de vida del machine learning. Permite registrar experimentos, comparar resultados, versionar modelos en un registro central y desplegarlos en producción, todo desde una misma herramienta compatible con las librerías de ML más habituales.',
      },
      {
        question: '¿MLflow es gratis?',
        answer:
          'Sí, MLflow es software libre y se puede usar sin coste de licencia, tanto en tu portátil como en un servidor propio. Solo pagas la infraestructura donde lo ejecutes. Algunas plataformas ofrecen versiones gestionadas de pago con soporte y funciones adicionales.',
      },
      {
        question: '¿Para qué sirve MLflow?',
        answer:
          'Sirve para ordenar el trabajo de un equipo de ciencia de datos: dejar constancia de cada entrenamiento, saber qué configuración dio mejores métricas, guardar los modelos con su versión correspondiente y llevarlos a producción de forma reproducible en lugar de depender de scripts sueltos.',
      },
    ],
  },
  SageMaker: {
    name: 'SageMaker',
    tagline:
      'Servicio gestionado de AWS para entrenar, ajustar y desplegar modelos de machine learning',
    intro:
      'Amazon SageMaker es el servicio de machine learning gestionado de AWS. Cubre todo el proceso: preparar datos, entrenar modelos con infraestructura bajo demanda, ajustar hiperparámetros y desplegar endpoints de inferencia escalables. Está pensado para equipos que ya trabajan en AWS y quieren evitar montar y mantener su propia infraestructura de entrenamiento y servicio de modelos.',
    useCases: [
      'Entrenar modelos con instancias GPU sin gestionar servidores',
      'Desplegar endpoints de inferencia escalables en producción',
      'Ajustar hiperparámetros de forma automatizada',
      'Preparar y etiquetar conjuntos de datos para entrenamiento',
      'Monitorizar la deriva de modelos ya desplegados',
    ],
    features: [
      'Entornos de desarrollo gestionados para ciencia de datos',
      'Entrenamiento distribuido con infraestructura bajo demanda',
      'Ajuste automático de hiperparámetros',
      'Endpoints de inferencia en tiempo real y por lotes',
      'Integración nativa con el resto de servicios de AWS',
    ],
    pros: [
      'Elimina la gestión de infraestructura de entrenamiento',
      'Escala de un experimento pequeño a cargas de producción',
      'Se integra bien con el ecosistema de datos de AWS',
      'Cubre el ciclo completo dentro de un mismo servicio',
    ],
    cons: [
      'Los costes pueden dispararse si no se vigila el uso',
      'Curva de aprendizaje notable y mucha superficie de producto',
      'Genera dependencia del ecosistema de AWS',
    ],
    pricingNote:
      'SageMaker es de pago por uso: se factura según las horas de cómputo, el almacenamiento y las peticiones de inferencia que consumas, sin cuota fija de licencia. AWS suele ofrecer una capa gratuita limitada para empezar. El coste real depende mucho del tipo de instancia;',
    faqs: [
      {
        question: '¿Qué es Amazon SageMaker?',
        answer:
          'Es el servicio de machine learning gestionado de AWS. Permite preparar datos, entrenar modelos usando infraestructura bajo demanda, ajustar hiperparámetros y desplegar endpoints de inferencia escalables, sin tener que aprovisionar ni mantener servidores propios para cada fase del proceso.',
      },
      {
        question: '¿SageMaker es gratis?',
        answer:
          'No es gratuito en general: funciona con un modelo de pago por uso basado en cómputo, almacenamiento e inferencia. AWS suele incluir una capa gratuita con límites para probar el servicio. Conviene revisar los precios actualizados en su web antes de lanzar cargas grandes.',
      },
      {
        question: '¿Para qué sirve SageMaker?',
        answer:
          'Sirve para que un equipo pueda entrenar y poner modelos en producción sin montar infraestructura propia. Es especialmente útil cuando los datos ya están en AWS y se necesitan GPUs puntuales para entrenar o endpoints que escalen según la demanda real.',
      },
    ],
  },
  TruLens: {
    name: 'TruLens',
    tagline:
      'Librería open source para evaluar y depurar aplicaciones basadas en modelos de lenguaje',
    intro:
      'TruLens es una herramienta de código abierto para evaluar aplicaciones construidas sobre modelos de lenguaje, especialmente sistemas RAG y agentes. Permite instrumentar la aplicación, registrar cada llamada y aplicar funciones de evaluación que puntúan aspectos como la relevancia de la respuesta o la fidelidad al contexto recuperado. La usan equipos que necesitan medir la calidad de sus prompts y cadenas más allá de la impresión subjetiva.',
    useCases: [
      'Medir la fidelidad de las respuestas al contexto recuperado',
      'Comparar distintas configuraciones de un sistema RAG',
      'Detectar alucinaciones en respuestas generadas por un LLM',
      'Registrar y revisar trazas de ejecución de agentes',
      'Validar cambios de prompt antes de llevarlos a producción',
    ],
    features: [
      'Funciones de evaluación para relevancia, fidelidad y calidad',
      'Instrumentación de cadenas y agentes con trazas detalladas',
      'Panel local para explorar y comparar ejecuciones',
      'Integración con frameworks habituales de aplicaciones LLM',
      'Evaluación automatizada usando modelos como jueces',
    ],
    pros: [
      'Código abierto y ejecutable en local sin coste',
      'Enfocado específicamente en evaluar RAG y agentes',
      'Permite comparar versiones de forma objetiva y repetible',
      'Se integra con los frameworks LLM más usados',
    ],
    cons: [
      'Requiere escribir código, no es una herramienta sin programación',
      'Las evaluaciones basadas en LLM consumen tokens y tienen coste',
      'Necesita criterio propio para interpretar las métricas',
    ],
    pricingNote:
      'TruLens es un proyecto de código abierto y su uso es gratuito. El gasto que puedes tener viene de las llamadas a los modelos que uses como evaluadores, que se facturan aparte por el proveedor correspondiente. No requiere suscripción; consulta su web para conocer las opciones actuales.',
    faqs: [
      {
        question: '¿Qué es TruLens?',
        answer:
          'TruLens es una librería de código abierto para evaluar aplicaciones basadas en modelos de lenguaje. Instrumenta tu cadena o agente, registra cada ejecución y aplica funciones de evaluación que puntúan aspectos como la relevancia de la respuesta o su fidelidad al contexto recuperado.',
      },
      {
        question: '¿TruLens es gratis?',
        answer:
          'Sí, es software libre y se puede usar sin coste de licencia. Ten en cuenta que, si empleas un modelo de lenguaje como evaluador, esas llamadas las factura el proveedor del modelo, así que hay un gasto indirecto en tokens según el volumen de evaluaciones.',
      },
      {
        question: '¿Para qué sirve TruLens?',
        answer:
          'Sirve para saber si tu sistema RAG o tu agente están respondiendo bien de verdad. En lugar de probar a ojo, obtienes métricas repetibles que permiten comparar prompts, modelos o estrategias de recuperación y detectar alucinaciones antes de que lleguen a los usuarios.',
      },
    ],
  },
  Helicone: {
    name: 'Helicone',
    tagline: 'Plataforma de observabilidad para monitorizar llamadas, costes y latencia de tus LLM',
    intro:
      'Helicone es una plataforma de observabilidad para aplicaciones que usan modelos de lenguaje. Actúa como capa intermedia entre tu código y el proveedor del modelo, registrando cada petición con su coste, latencia y respuesta. Es de código abierto y también ofrece versión en la nube, lo que la hace popular entre equipos que quieren entender qué está gastando su aplicación de IA sin montar toda la instrumentación a mano.',
    useCases: [
      'Controlar el gasto en tokens de una aplicación de IA',
      'Detectar peticiones lentas o con errores en producción',
      'Revisar el historial de prompts y respuestas reales',
      'Aplicar caché para reducir llamadas repetidas al modelo',
      'Segmentar el uso y el coste por usuario o cliente',
    ],
    features: [
      'Registro automático de peticiones mediante proxy o SDK',
      'Métricas de coste, latencia y volumen por modelo',
      'Caché de respuestas para reducir llamadas repetidas',
      'Límites de uso y control de tasa por usuario',
      'Versión open source autoalojable además de la nube',
    ],
    pros: [
      'Integración rápida, a menudo cambiando solo la URL base',
      'Visibilidad clara del coste real por usuario o funcionalidad',
      'Opción de autoalojar si no quieres enviar datos fuera',
      'Plan gratuito suficiente para proyectos pequeños',
    ],
    cons: [
      'Introduce una capa intermedia que hay que tener en cuenta',
      'Los planes de pago escalan con el volumen de peticiones',
      'El autoalojamiento requiere mantenimiento propio',
    ],
    pricingNote:
      'Helicone funciona con un modelo freemium: suele tener un plan gratuito con un límite de peticiones registradas al mes y planes de pago que crecen según el volumen y la retención de datos. Al ser open source, también puedes autoalojarlo y pagar solo la infraestructura.',
    faqs: [
      {
        question: '¿Qué es Helicone?',
        answer:
          'Helicone es una plataforma de observabilidad para aplicaciones que usan modelos de lenguaje. Se coloca entre tu código y el proveedor del modelo, y registra cada llamada con su coste, latencia, prompt y respuesta, para que puedas analizar qué está pasando en producción.',
      },
      {
        question: '¿Helicone es gratis?',
        answer:
          'Tiene un plan gratuito con un límite de peticiones registradas al mes, suficiente para prototipos y proyectos pequeños. A partir de ahí hay planes de pago según volumen y retención. Además es open source, así que puedes autoalojarlo pagando solo la infraestructura.',
      },
      {
        question: '¿Para qué sirve Helicone?',
        answer:
          'Sirve para no ir a ciegas con una aplicación de IA en producción. Te dice cuánto estás gastando en tokens, qué peticiones fallan o van lentas y qué prompts se están ejecutando realmente, lo que facilita optimizar costes y depurar comportamientos raros.',
      },
    ],
  },
  PromptLayer: {
    name: 'PromptLayer',
    tagline: 'Herramienta para gestionar, versionar y evaluar prompts de modelos de lenguaje',
    intro:
      'PromptLayer es una plataforma centrada en la gestión del ciclo de vida de los prompts. Permite registrar todas las llamadas a modelos de lenguaje, guardar los prompts en un repositorio versionado y editarlos desde una interfaz visual sin tocar el código. Está pensada para equipos donde perfiles no técnicos, como product o contenido, participan en la mejora de los prompts junto a desarrollo.',
    useCases: [
      'Versionar prompts y volver atrás si una versión empeora',
      'Editar prompts sin necesidad de desplegar código nuevo',
      'Revisar el historial de llamadas y respuestas del modelo',
      'Comparar el rendimiento de dos prompts en pruebas A/B',
      'Permitir que perfiles no técnicos ajusten prompts',
    ],
    features: [
      'Registro histórico de peticiones y respuestas del modelo',
      'Repositorio de prompts con versionado y etiquetas',
      'Editor visual de prompts en el navegador',
      'Evaluaciones y comparativas entre versiones de prompt',
      'Integración mediante SDK con proveedores de LLM habituales',
    ],
    pros: [
      'Separa los prompts del código y agiliza los cambios',
      'Facilita la colaboración entre perfiles técnicos y de negocio',
      'Historial completo para depurar respuestas concretas',
      'Plan gratuito para empezar a probar',
    ],
    cons: [
      'Añade una dependencia externa a tu flujo de peticiones',
      'Los planes de pago escalan con el volumen de registros',
      'Puede ser excesivo para proyectos con muy pocos prompts',
    ],
    pricingNote:
      'PromptLayer sigue un modelo freemium: suele ofrecer un plan gratuito con un número limitado de peticiones registradas y planes de pago por usuario o por volumen para equipos. Las funciones de colaboración y retención larga suelen estar en los planes superiores.',
    faqs: [
      {
        question: '¿Qué es PromptLayer?',
        answer:
          'PromptLayer es una plataforma para gestionar prompts de modelos de lenguaje. Registra cada llamada al modelo, guarda los prompts en un repositorio versionado y ofrece un editor visual, de forma que se pueden cambiar y probar sin tener que modificar y desplegar el código.',
      },
      {
        question: '¿PromptLayer es gratis?',
        answer:
          'Ofrece un plan gratuito con un límite de peticiones registradas, útil para probar la herramienta o para proyectos pequeños. Los equipos que necesitan más volumen, colaboración o retención de datos pasan a planes de pago. Consulta su web para ver los precios actualizados.',
      },
      {
        question: '¿Para qué sirve PromptLayer?',
        answer:
          'Sirve para tratar los prompts como un activo que se versiona y se mide, no como texto perdido dentro del código. Permite saber qué versión de prompt generó cada respuesta, comparar alternativas y dejar que product o contenido iteren sin depender de un despliegue.',
      },
    ],
  },
  'Arize AI': {
    name: 'Arize AI',
    tagline:
      'Plataforma de observabilidad y evaluación de modelos de machine learning e IA generativa',
    intro:
      'Arize AI es una plataforma de observabilidad para modelos de machine learning y aplicaciones de IA generativa en producción. Permite monitorizar el rendimiento, detectar deriva de datos, analizar por qué un modelo empeora y evaluar la calidad de respuestas de LLM. Está orientada a equipos de ML y MLOps que necesitan vigilar modelos ya desplegados y no solo medir métricas durante el entrenamiento.',
    useCases: [
      'Detectar deriva de datos en modelos ya desplegados',
      'Monitorizar el rendimiento de un modelo en producción',
      'Analizar segmentos donde el modelo falla más',
      'Evaluar la calidad de respuestas de aplicaciones LLM',
      'Investigar trazas de agentes y sistemas RAG',
    ],
    features: [
      'Monitorización continua de métricas de modelos en producción',
      'Detección de deriva de datos y de predicciones',
      'Análisis de segmentos con peor rendimiento',
      'Evaluación y trazado de aplicaciones basadas en LLM',
      'Alertas configurables ante degradación del modelo',
    ],
    pros: [
      'Cubre tanto machine learning clásico como IA generativa',
      'Buenas herramientas de análisis de causa raíz',
      'Ofrece una vía open source para empezar a trazar',
      'Alertas que avisan antes de que el problema escale',
    ],
    cons: [
      'Orientada a equipos con madurez en MLOps',
      'Los planes empresariales pueden resultar caros',
      'Requiere instrumentar la aplicación para sacarle partido',
    ],
    pricingNote:
      'Arize AI trabaja con un modelo freemium: suele haber una opción gratuita o de código abierto con límites para empezar a instrumentar, y planes de pago para equipos y empresas con más volumen, retención y soporte. Los precios empresariales se negocian según el caso;',
    faqs: [
      {
        question: '¿Qué es Arize AI?',
        answer:
          'Arize AI es una plataforma de observabilidad para modelos de machine learning y aplicaciones de IA generativa en producción. Permite vigilar su rendimiento, detectar deriva de datos, encontrar los segmentos donde falla y evaluar la calidad de las respuestas de sistemas basados en LLM.',
      },
      {
        question: '¿Arize AI es gratis?',
        answer:
          'Dispone de una opción gratuita con límites para empezar, además de componentes de código abierto para instrumentar aplicaciones. Los equipos con volúmenes altos, más retención de datos o necesidades empresariales usan planes de pago. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Arize AI?',
        answer:
          'Sirve para saber si un modelo sigue funcionando bien después de desplegarlo. Los datos reales cambian con el tiempo y el rendimiento cae; Arize detecta esa deriva, señala dónde se concentran los errores y avisa antes de que el problema afecte al negocio.',
      },
    ],
  },
  LoRA: {
    name: 'LoRA',
    tagline: 'Técnica de fine-tuning eficiente para adaptar modelos grandes con pocos recursos',
    intro:
      'LoRA (Low-Rank Adaptation) es una técnica de ajuste fino eficiente que permite adaptar modelos de lenguaje grandes entrenando solo un pequeño conjunto de parámetros adicionales, en lugar de todo el modelo. Está implementada en librerías abiertas como PEFT de Hugging Face. Se ha convertido en el método habitual para especializar modelos en un dominio o estilo concreto sin necesidad de hardware muy costoso.',
    useCases: [
      'Adaptar un modelo abierto al vocabulario de un sector',
      'Ajustar el estilo o tono de las respuestas generadas',
      'Especializar un modelo en una tarea concreta con pocos datos',
      'Entrenar adaptadores ligeros que se intercambian según el caso',
      'Hacer fine-tuning en una sola GPU de consumo',
    ],
    features: [
      'Entrenamiento de matrices de bajo rango en lugar del modelo completo',
      'Reducción drástica de memoria necesaria para el ajuste',
      'Adaptadores ligeros que se cargan y combinan fácilmente',
      'Implementación disponible en librerías de código abierto',
      'Compatible con variantes cuantizadas como QLoRA',
    ],
    pros: [
      'Permite hacer fine-tuning con hardware modesto',
      'Los adaptadores ocupan muy poco espacio',
      'Se pueden mantener varios adaptadores sobre un mismo modelo base',
      'Gratuito y respaldado por librerías open source maduras',
    ],
    cons: [
      'No es una aplicación, requiere programar y entender el proceso',
      'La calidad depende mucho de los datos de entrenamiento',
      'Puede no igualar un ajuste completo en tareas muy exigentes',
    ],
    pricingNote:
      'LoRA es una técnica, no un producto comercial, y sus implementaciones son de código abierto y gratuitas. El único coste es el cómputo que uses para entrenar, que puede ser una GPU propia o alquilada por horas en la nube. Consulta la documentación oficial para conocer los requisitos actuales.',
    faqs: [
      {
        question: '¿Qué es LoRA en inteligencia artificial?',
        answer:
          'LoRA es una técnica de ajuste fino que adapta un modelo grande entrenando solo unas matrices adicionales de bajo rango, dejando congelados los pesos originales. Así se consigue especializar el modelo con mucha menos memoria y tiempo que un entrenamiento completo.',
      },
      {
        question: '¿LoRA es gratis?',
        answer:
          'Sí. LoRA es una técnica publicada abiertamente y sus implementaciones, como la librería PEFT de Hugging Face, son de código abierto y gratuitas. El único gasto es el cómputo necesario para entrenar, ya sea con hardware propio o alquilando GPU en la nube.',
      },
      {
        question: '¿Para qué sirve LoRA?',
        answer:
          'Sirve para especializar un modelo de lenguaje en un dominio, un estilo o una tarea concreta sin reentrenarlo entero. Es la vía habitual para hacer fine-tuning cuando no se dispone de clústeres de GPU, y permite mantener varios adaptadores sobre un mismo modelo base.',
      },
    ],
  },
  Haystack: {
    name: 'Haystack',
    tagline: 'Framework open source para construir aplicaciones RAG y búsqueda semántica con LLM',
    intro:
      'Haystack es un framework de código abierto desarrollado por deepset para construir aplicaciones basadas en modelos de lenguaje, con especial foco en RAG y búsqueda semántica. Permite componer pipelines que conectan almacenes vectoriales, recuperadores, modelos y herramientas. Lo utilizan equipos que necesitan llevar a producción sistemas de preguntas y respuestas sobre documentación propia con un diseño explícito y controlable.',
    useCases: [
      'Crear un asistente que responda sobre documentación interna',
      'Montar búsqueda semántica sobre un catálogo o base documental',
      'Construir pipelines RAG con recuperación y generación',
      'Indexar y trocear documentos para consulta posterior',
      'Desarrollar agentes que usan herramientas externas',
    ],
    features: [
      'Pipelines componibles para indexación y consulta',
      'Integración con múltiples bases de datos vectoriales',
      'Compatibilidad con distintos proveedores de modelos',
      'Componentes de recuperación densa y por palabras clave',
      'Despliegue de pipelines como servicio REST',
    ],
    pros: [
      'Código abierto, sin coste de licencia',
      'Arquitectura de pipelines clara y fácil de razonar',
      'Amplio ecosistema de integraciones y componentes',
      'Pensado desde el principio para producción, no solo demos',
    ],
    cons: [
      'Requiere saber programar en Python',
      'Curva de aprendizaje si nunca has trabajado con RAG',
      'Necesitas montar tú la infraestructura de vectores y despliegue',
    ],
    pricingNote:
      'Haystack es un framework de código abierto y su uso es gratuito. Los costes vienen de la infraestructura donde lo despliegues y de las llamadas a los modelos o servicios que utilices dentro del pipeline. deepset ofrece además productos comerciales con planes de pago;',
    faqs: [
      {
        question: '¿Qué es Haystack?',
        answer:
          'Haystack es un framework open source de deepset para construir aplicaciones con modelos de lenguaje, sobre todo sistemas RAG y de búsqueda semántica. Se basa en pipelines que conectan recuperadores, almacenes vectoriales y modelos generativos de forma explícita y reutilizable.',
      },
      {
        question: '¿Haystack es gratis?',
        answer:
          'Sí, el framework es de código abierto y se usa sin coste de licencia. Pagarás la infraestructura donde lo ejecutes y las llamadas a los modelos que integres. deepset comercializa además plataformas de pago construidas alrededor del proyecto.',
      },
      {
        question: '¿Para qué sirve Haystack?',
        answer:
          'Sirve para construir asistentes que responden preguntas usando tus propios documentos. Se encarga de trocear e indexar el contenido, recuperar los fragmentos relevantes ante una consulta y pasárselos al modelo para que genere una respuesta fundamentada en esas fuentes.',
      },
    ],
  },
  Unstructured: {
    name: 'Unstructured',
    tagline: 'Herramienta para extraer y preparar datos de documentos para pipelines de IA',
    intro:
      'Unstructured es una herramienta que convierte documentos en datos limpios y estructurados listos para alimentar sistemas de IA. Procesa PDF, Word, HTML, presentaciones, correos e imágenes, extrayendo el texto y detectando su estructura: títulos, tablas, listas o pies de página. Se usa como paso previo en pipelines RAG, donde la calidad del troceado determina en buena medida la calidad de las respuestas.',
    useCases: [
      'Extraer texto y tablas de PDF para un sistema RAG',
      'Normalizar documentos de formatos muy distintos',
      'Trocear documentos largos respetando su estructura lógica',
      'Preparar corpus documentales para indexar en una base vectorial',
      'Procesar correos y adjuntos de forma automatizada',
    ],
    features: [
      'Soporte para numerosos formatos de documento',
      'Detección de estructura: títulos, tablas, listas y metadatos',
      'Estrategias de troceado configurables para RAG',
      'Librería open source además de API gestionada',
      'Conectores hacia bases de datos vectoriales habituales',
    ],
    pros: [
      'Resuelve una de las partes más tediosas de montar RAG',
      'Cubre muchos formatos con una sola interfaz',
      'Versión open source disponible sin coste',
      'El troceado consciente de la estructura mejora la recuperación',
    ],
    cons: [
      'Los PDF complejos siguen siendo difíciles y requieren ajustes',
      'El procesamiento avanzado puede ser lento con volúmenes grandes',
      'La API gestionada tiene coste según el volumen procesado',
    ],
    pricingNote:
      'Unstructured ofrece una librería de código abierto gratuita que puedes ejecutar por tu cuenta, y además una API y plataforma gestionadas de pago que suelen facturarse según el número de páginas o documentos procesados. Suele existir un tramo gratuito para probar;',
    faqs: [
      {
        question: '¿Qué es Unstructured?',
        answer:
          'Unstructured es una herramienta que transforma documentos en datos limpios y estructurados para usarlos en aplicaciones de IA. Procesa PDF, Word, HTML, presentaciones o correos, extrae el texto y reconoce su estructura, dejándolo listo para trocear e indexar en un sistema RAG.',
      },
      {
        question: '¿Unstructured es gratis?',
        answer:
          'La librería de código abierto es gratuita y puedes ejecutarla en tu propia infraestructura. La API y la plataforma gestionadas son de pago, normalmente en función del volumen de páginas o documentos procesados, con algún tramo gratuito para pruebas. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Unstructured?',
        answer:
          'Sirve para el paso previo de cualquier sistema RAG: convertir documentos desordenados en fragmentos de texto coherentes. Si el troceado es malo, el sistema recupera contexto irrelevante y el modelo responde peor, así que esta fase influye directamente en la calidad final.',
      },
    ],
  },
  RAGAS: {
    name: 'RAGAS',
    tagline: 'Framework open source para evaluar la calidad de sistemas RAG con métricas objetivas',
    intro:
      'RAGAS es un framework de código abierto centrado en evaluar sistemas de generación aumentada por recuperación. Proporciona métricas específicas para medir si el contexto recuperado es relevante, si la respuesta se apoya realmente en él y si responde a la pregunta planteada. Se usa para comparar configuraciones de RAG con datos en lugar de intuiciones, y puede funcionar sin necesidad de anotaciones manuales extensas.',
    useCases: [
      'Medir si las respuestas se apoyan en el contexto recuperado',
      'Evaluar la relevancia de los fragmentos que devuelve el recuperador',
      'Comparar estrategias de troceado o de embeddings',
      'Detectar alucinaciones en un sistema de preguntas y respuestas',
      'Integrar evaluaciones automáticas en el flujo de despliegue',
    ],
    features: [
      'Métricas específicas de fidelidad y relevancia para RAG',
      'Evaluación asistida por modelos de lenguaje como jueces',
      'Generación de conjuntos de prueba sintéticos',
      'Integración con frameworks RAG habituales en Python',
      'Resultados exportables para seguimiento continuo',
    ],
    pros: [
      'Aporta métricas objetivas donde antes solo había impresiones',
      'Código abierto y gratuito',
      'Reduce la necesidad de etiquetado manual masivo',
      'Encaja bien en pipelines de integración continua',
    ],
    cons: [
      'Las evaluaciones con LLM consumen tokens y cuestan dinero',
      'Las métricas automáticas no sustituyen del todo la revisión humana',
      'Requiere programar y entender bien qué mide cada métrica',
    ],
    pricingNote:
      'RAGAS es un proyecto de código abierto y su uso no tiene coste de licencia. El gasto proviene de las llamadas a los modelos de lenguaje que actúan como evaluadores, facturadas por el proveedor correspondiente según los tokens consumidos.',
    faqs: [
      {
        question: '¿Qué es RAGAS?',
        answer:
          'RAGAS es un framework open source para evaluar sistemas RAG. Ofrece métricas que miden si los fragmentos recuperados son relevantes, si la respuesta se apoya de verdad en ellos y si contesta a la pregunta, permitiendo comparar configuraciones con criterios objetivos.',
      },
      {
        question: '¿RAGAS es gratis?',
        answer:
          'Sí, el framework es de código abierto y no tiene coste de licencia. Eso sí, muchas de sus métricas usan un modelo de lenguaje como juez, y esas llamadas las cobra el proveedor del modelo, así que el gasto en tokens depende del volumen de evaluaciones.',
      },
      {
        question: '¿Para qué sirve RAGAS?',
        answer:
          'Sirve para dejar de evaluar un sistema RAG a ojo. Permite saber, con números, si un cambio de troceado, de embeddings o de prompt mejora o empeora la calidad, y detectar alucinaciones cuando el modelo responde cosas que el contexto recuperado no respalda.',
      },
    ],
  },
  Writesonic: {
    name: 'Writesonic',
    tagline:
      'Plataforma de IA para generar contenido de marketing, artículos y textos publicitarios',
    intro:
      'Writesonic es una plataforma de redacción con inteligencia artificial orientada a marketing y SEO. Genera artículos de blog, descripciones de producto, anuncios y textos para redes a partir de instrucciones breves, con plantillas específicas para cada formato. Suele incorporar funciones de búsqueda en la web y optimización SEO, y la usan sobre todo equipos de marketing y creadores de contenido que necesitan producir a volumen.',
    useCases: [
      'Redactar borradores de artículos de blog optimizados para SEO',
      'Generar descripciones de producto para tiendas online',
      'Crear variaciones de textos publicitarios para campañas',
      'Escribir publicaciones para redes sociales en serie',
      'Reescribir y ampliar contenido existente',
    ],
    features: [
      'Plantillas para múltiples formatos de contenido de marketing',
      'Generación de artículos largos con estructura y encabezados',
      'Funciones de optimización SEO y análisis de palabras clave',
      'Soporte multilingüe, incluido el español',
      'Editor integrado para revisar y ajustar el resultado',
    ],
    pros: [
      'Cubre muchos formatos de contenido en una sola herramienta',
      'Acelera mucho la fase de borrador',
      'Enfoque claro en SEO y marketing, no solo escritura genérica',
      'Dispone de plan gratuito para probarla',
    ],
    cons: [
      'El texto generado necesita revisión y edición humana',
      'El contenido puede sonar genérico si no se guía bien',
      'El plan gratuito tiene límites de uso ajustados',
    ],
    pricingNote:
      'Writesonic funciona con un modelo freemium: suele tener un plan gratuito con créditos limitados y planes de pago mensuales que escalan según el volumen de palabras o créditos y el número de usuarios. Los planes básicos suelen situarse en unas pocas decenas de euros al mes;',
    faqs: [
      {
        question: '¿Qué es Writesonic?',
        answer:
          'Writesonic es una plataforma de redacción con IA enfocada a marketing y SEO. A partir de una instrucción breve genera artículos de blog, descripciones de producto, anuncios o publicaciones para redes, con plantillas por formato y un editor para pulir el resultado.',
      },
      {
        question: '¿Writesonic es gratis?',
        answer:
          'Ofrece un plan gratuito con créditos limitados que permite probar la herramienta. Para un uso continuado hay planes de pago mensuales que escalan según el volumen de contenido y los usuarios. Consulta su web para conocer los precios actualizados.',
      },
      {
        question: '¿Writesonic funciona en español?',
        answer:
          'Sí, admite varios idiomas, entre ellos el español. Aun así, conviene revisar el resultado: la IA puede introducir giros poco naturales o expresiones más propias del español latinoamericano, así que una edición posterior es recomendable si publicas para España.',
      },
    ],
  },
  'Hypotenuse AI': {
    name: 'Hypotenuse AI',
    tagline: 'Generador de contenido con IA especializado en ecommerce y catálogos de producto',
    intro:
      'Hypotenuse AI es una plataforma de generación de contenido con inteligencia artificial con un foco marcado en ecommerce. Además de artículos y textos de marketing, destaca por producir descripciones de producto a escala, incluso a partir de datos de catálogo o imágenes. La usan tiendas online y equipos de marketing que necesitan cubrir muchos productos sin redactar cada ficha a mano.',
    useCases: [
      'Generar descripciones de producto en lote para un catálogo',
      'Redactar artículos de blog orientados a SEO',
      'Crear textos de marketing para campañas y anuncios',
      'Enriquecer fichas de producto a partir de datos existentes',
      'Adaptar contenido a distintos idiomas y mercados',
    ],
    features: [
      'Generación masiva de descripciones de producto',
      'Plantillas para contenido de blog y marketing',
      'Funciones de investigación de palabras clave y SEO',
      'Personalización del tono y la voz de marca',
      'Soporte multilingüe para catálogos internacionales',
    ],
    pros: [
      'Muy útil para catálogos grandes de ecommerce',
      'Permite fijar un tono de marca y mantenerlo',
      'Ahorra mucho tiempo en tareas repetitivas de redacción',
      'Cubre también contenido editorial, no solo fichas',
    ],
    cons: [
      'Los textos requieren revisión para evitar imprecisiones',
      'Menos conocida que otras alternativas del sector',
      'Los planes de pago pueden ser altos para usuarios individuales',
    ],
    pricingNote:
      'Hypotenuse AI sigue un modelo freemium: suele ofrecer una prueba gratuita limitada y después planes de pago mensuales según el volumen de palabras o productos generados y el número de usuarios. Los planes para ecommerce con grandes catálogos son los más caros;',
    faqs: [
      {
        question: '¿Qué es Hypotenuse AI?',
        answer:
          'Hypotenuse AI es una plataforma de generación de contenido con inteligencia artificial especializada en ecommerce. Produce descripciones de producto a gran escala a partir de datos de catálogo, además de artículos de blog y textos de marketing con un tono de marca configurable.',
      },
      {
        question: '¿Hypotenuse AI es gratis?',
        answer:
          'Suele ofrecer una prueba gratuita con límites para evaluar la herramienta, pero el uso continuado requiere un plan de pago que escala según el volumen de contenido y los usuarios. Consulta su web para conocer los tramos y precios actualizados.',
      },
      {
        question: '¿Para qué sirve Hypotenuse AI?',
        answer:
          'Sirve, sobre todo, para tiendas online con catálogos amplios que no pueden redactar cada ficha a mano. Genera descripciones consistentes en lote y también contenido editorial de apoyo, liberando tiempo del equipo para tareas de estrategia y revisión.',
      },
    ],
  },
  'HubSpot AI': {
    name: 'HubSpot AI',
    tagline: 'Funciones de IA integradas en el CRM de HubSpot para marketing, ventas y soporte',
    intro:
      'HubSpot AI es el conjunto de funciones de inteligencia artificial integradas en la plataforma de HubSpot. Cubre desde la redacción asistida de correos y contenido hasta la puntuación de leads, resúmenes de conversaciones y asistentes conversacionales para atención al cliente. Está pensado para equipos que ya usan HubSpot como CRM y quieren automatizar tareas sin salir de la herramienta.',
    useCases: [
      'Redactar correos de ventas y secuencias de seguimiento',
      'Resumir automáticamente conversaciones y llamadas con clientes',
      'Priorizar leads según su probabilidad de conversión',
      'Generar contenido para blog y landing pages dentro del CRM',
      'Atender consultas frecuentes con un asistente conversacional',
    ],
    features: [
      'Asistentes de redacción integrados en correo y contenido',
      'Resúmenes automáticos de conversaciones y registros',
      'Puntuación predictiva de leads',
      'Chatbots y agentes para atención al cliente',
      'Análisis e informes asistidos por IA sobre datos del CRM',
    ],
    pros: [
      'Aprovecha los datos que ya tienes en el CRM',
      'No requiere integrar herramientas externas',
      'Cubre marketing, ventas y soporte en un mismo lugar',
      'Existe una capa gratuita de HubSpot para empezar',
    ],
    cons: [
      'Las funciones más potentes están en planes superiores',
      'Solo tiene sentido si ya usas HubSpot como plataforma',
      'El coste de HubSpot escala rápido al crecer los contactos',
    ],
    pricingNote:
      'HubSpot funciona con un modelo freemium: hay herramientas gratuitas de CRM y algunas funciones de IA accesibles con límites, mientras que las capacidades avanzadas se reservan a los planes de pago, que escalan según el número de contactos y usuarios.',
    faqs: [
      {
        question: '¿Qué es HubSpot AI?',
        answer:
          'HubSpot AI es el conjunto de funciones de inteligencia artificial integradas en la plataforma de HubSpot. Incluye redacción asistida de correos y contenido, resúmenes de conversaciones, puntuación predictiva de leads y asistentes conversacionales, todo dentro del propio CRM.',
      },
      {
        question: '¿HubSpot AI es gratis?',
        answer:
          'HubSpot tiene una capa gratuita de CRM que incluye algunas funciones de IA con límites de uso. Las capacidades más avanzadas están en los planes de pago, cuyo precio crece con el número de contactos y usuarios. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve HubSpot AI?',
        answer:
          'Sirve para automatizar el trabajo repetitivo de los equipos de marketing, ventas y soporte que ya trabajan en HubSpot: escribir correos, resumir llamadas, decidir a qué leads llamar primero o responder preguntas habituales sin intervención humana.',
      },
    ],
  },
  'Salesforce Einstein AI': {
    name: 'Salesforce Einstein AI',
    tagline:
      'Capa de inteligencia artificial integrada en el CRM de Salesforce para ventas y servicio',
    intro:
      'Salesforce Einstein AI es la capa de inteligencia artificial de Salesforce, integrada en su CRM. Aporta predicciones sobre oportunidades de venta, puntuación de leads, recomendaciones de siguiente acción, generación de correos y resúmenes de casos de soporte. Está dirigida a empresas que ya trabajan con Salesforce y quieren aplicar IA sobre los datos comerciales que la plataforma ya almacena.',
    useCases: [
      'Predecir qué oportunidades tienen más probabilidad de cerrarse',
      'Puntuar leads y priorizar la actividad comercial',
      'Generar borradores de correos y respuestas a clientes',
      'Resumir casos de soporte y conversaciones largas',
      'Recomendar la siguiente mejor acción a los comerciales',
    ],
    features: [
      'Puntuación predictiva de leads y oportunidades',
      'Generación de contenido y respuestas dentro del CRM',
      'Resúmenes automáticos de casos y conversaciones',
      'Recomendaciones de siguiente acción para equipos de ventas',
      'Integración nativa con los datos del ecosistema Salesforce',
    ],
    pros: [
      'Trabaja directamente sobre los datos ya existentes en el CRM',
      'Pensado para necesidades y controles de nivel empresarial',
      'Cubre ventas, servicio y marketing de forma unificada',
      'Evita integrar herramientas de IA externas',
    ],
    cons: [
      'Coste elevado, con complementos que se suman a la licencia',
      'Implantación compleja y a menudo con consultoría',
      'Solo tiene sentido dentro del ecosistema Salesforce',
    ],
    pricingNote:
      'Einstein AI es de pago y suele comercializarse como parte de las ediciones superiores de Salesforce o como complemento sobre la licencia existente, con precio por usuario y mes. El coste final depende mucho de la edición y de los módulos contratados;',
    faqs: [
      {
        question: '¿Qué es Salesforce Einstein AI?',
        answer:
          'Es la capa de inteligencia artificial integrada en el CRM de Salesforce. Añade predicciones sobre oportunidades, puntuación de leads, generación de correos, resúmenes de casos y recomendaciones de siguiente acción, todo apoyado en los datos comerciales que ya están en la plataforma.',
      },
      {
        question: '¿Salesforce Einstein AI es gratis?',
        answer:
          'No. Es una funcionalidad de pago que se incluye en las ediciones superiores de Salesforce o se contrata como complemento sobre la licencia existente, normalmente con precio por usuario y mes. Consulta su web o a su equipo comercial para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Salesforce Einstein AI?',
        answer:
          'Sirve para que los equipos comerciales y de servicio saquen partido a los datos que ya tienen en Salesforce: saber qué oportunidades merecen más atención, redactar respuestas más rápido y resumir historiales largos sin leerlos enteros.',
      },
    ],
  },
  'Unbounce Smart Copy': {
    name: 'Unbounce Smart Copy',
    tagline: 'Redactor con IA de Unbounce para textos de landing pages, anuncios y correos',
    intro:
      'Smart Copy es el asistente de redacción con inteligencia artificial de Unbounce, la plataforma de landing pages. Genera titulares, textos de landing, anuncios, correos y publicaciones para redes a partir de una breve descripción del producto. Está integrado con el constructor de landing pages de Unbounce, lo que permite generar y probar variantes de copy directamente sobre la página que se está montando.',
    useCases: [
      'Generar titulares y subtítulos para una landing page',
      'Crear variantes de copy para pruebas A/B',
      'Redactar textos de anuncios para campañas de pago',
      'Escribir correos de captación y seguimiento',
      'Reformular textos existentes con otro tono',
    ],
    features: [
      'Plantillas específicas para landing pages y anuncios',
      'Generación de múltiples variantes del mismo mensaje',
      'Integración con el constructor de landing pages de Unbounce',
      'Reescritura y ajuste de tono de textos existentes',
      'Soporte para varios idiomas',
    ],
    pros: [
      'Muy enfocado a conversión, no a escritura genérica',
      'Facilita generar variantes para probar rápido',
      'Encaja de forma natural en el flujo de Unbounce',
      'Dispone de opción gratuita para empezar',
    ],
    cons: [
      'Su valor se maximiza si usas Unbounce como plataforma',
      'Los textos requieren revisión para ajustarlos a la marca',
      'Menos versátil que un redactor de IA de propósito general',
    ],
    pricingNote:
      'Smart Copy sigue un modelo freemium: suele haber una opción gratuita con un número limitado de generaciones y planes de pago para uso ilimitado, además de estar disponible dentro de los planes de la plataforma Unbounce.',
    faqs: [
      {
        question: '¿Qué es Unbounce Smart Copy?',
        answer:
          'Smart Copy es el redactor con inteligencia artificial de Unbounce. Genera titulares, textos de landing page, anuncios, correos y publicaciones para redes a partir de una descripción breve del producto, e integra la generación de copy con el constructor de landing pages de la plataforma.',
      },
      {
        question: '¿Smart Copy es gratis?',
        answer:
          'Ofrece una opción gratuita con un número limitado de generaciones, suficiente para probarlo. Para un uso intensivo hay planes de pago, y también está disponible dentro de las suscripciones de la plataforma Unbounce. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Unbounce Smart Copy?',
        answer:
          'Sirve para acelerar la creación de textos orientados a conversión. Es especialmente útil cuando necesitas varias versiones de un mismo titular o anuncio para hacer pruebas A/B y descubrir cuál funciona mejor, sin escribir cada variante desde cero.',
      },
    ],
  },
  'GetResponse AI': {
    name: 'GetResponse AI',
    tagline: 'Asistente de IA integrado en GetResponse para crear correos y campañas de marketing',
    intro:
      'GetResponse AI es el conjunto de funciones de inteligencia artificial de GetResponse, una plataforma de email marketing y automatización. Incluye un asistente que redacta correos completos a partir de una descripción, genera líneas de asunto, crea landing pages y sugiere mejoras de contenido. Está dirigido a pymes y equipos de marketing que quieren lanzar campañas sin depender de un redactor dedicado.',
    useCases: [
      'Redactar correos de campaña a partir de una descripción breve',
      'Generar líneas de asunto y probar variantes',
      'Crear landing pages con texto y estructura sugeridos',
      'Diseñar secuencias de automatización de correos',
      'Adaptar el tono de un mensaje a distintos públicos',
    ],
    features: [
      'Generador de correos con estructura y diseño incluidos',
      'Sugerencias de líneas de asunto optimizadas',
      'Creación asistida de landing pages',
      'Integración con las automatizaciones de GetResponse',
      'Soporte para varios idiomas, incluido el español',
    ],
    pros: [
      'Todo el flujo de campaña en una sola plataforma',
      'Reduce el tiempo de creación de correos',
      'Útil para equipos pequeños sin redactor propio',
      'Incluye plan gratuito de entrada',
    ],
    cons: [
      'Las funciones de IA dependen de estar suscrito a GetResponse',
      'El contenido generado es correcto pero poco diferenciador',
      'Los planes escalan con el tamaño de la lista de contactos',
    ],
    pricingNote:
      'GetResponse sigue un modelo freemium: dispone de un plan gratuito con funciones básicas y límite de contactos, y planes de pago mensuales que escalan según el tamaño de la lista y las funcionalidades incluidas. Algunas capacidades de IA se reservan a los planes superiores;',
    faqs: [
      {
        question: '¿Qué es GetResponse AI?',
        answer:
          'Son las funciones de inteligencia artificial integradas en GetResponse, una plataforma de email marketing y automatización. Permiten generar correos completos, líneas de asunto y landing pages a partir de una descripción del negocio y la campaña que se quiere lanzar.',
      },
      {
        question: '¿GetResponse AI es gratis?',
        answer:
          'GetResponse tiene un plan gratuito con funciones básicas y un límite de contactos que permite probar la plataforma. Varias capacidades de IA están asociadas a los planes de pago, cuyo precio crece con el tamaño de la lista. Consulta su web para precios actualizados.',
      },
      {
        question: '¿GetResponse AI funciona en español?',
        answer:
          'Sí, la plataforma admite el español tanto en la interfaz como en la generación de contenido. Como con cualquier redacción automática, conviene revisar el texto para ajustar el tono y asegurarse de que las expresiones encajan con tu público en España.',
      },
    ],
  },
  'Mailchimp AI': {
    name: 'Mailchimp AI',
    tagline: 'Funciones de IA en Mailchimp para redactar, diseñar y optimizar campañas de email',
    intro:
      'Mailchimp AI agrupa las capacidades de inteligencia artificial de Mailchimp, una de las plataformas de email marketing más extendidas. Incluye asistentes de redacción, generación de diseños de correo, recomendaciones de contenido y sugerencias sobre el mejor momento de envío o la segmentación de la audiencia. Está pensado para pymes, tiendas online y creadores que gestionan sus campañas sin un equipo grande detrás.',
    useCases: [
      'Redactar el texto de una campaña de correo desde cero',
      'Generar diseños de correo acordes a la marca',
      'Segmentar la audiencia según comportamiento previo',
      'Optimizar la hora de envío de una campaña',
      'Probar variantes de asunto para mejorar la apertura',
    ],
    features: [
      'Asistente de redacción para correos y asuntos',
      'Generación de diseños y plantillas personalizadas',
      'Recomendaciones de segmentación de audiencia',
      'Sugerencias de mejor momento de envío',
      'Informes con análisis asistido de resultados',
    ],
    pros: [
      'Plataforma muy conocida y con integraciones abundantes',
      'Las funciones de IA se integran en el flujo habitual',
      'Buen punto de partida para pymes y ecommerce',
      'Dispone de plan gratuito con límites',
    ],
    cons: [
      'El precio crece rápido al aumentar los contactos',
      'Las funciones de IA más completas están en planes superiores',
      'El contenido generado suele necesitar retoques',
    ],
    pricingNote:
      'Mailchimp funciona con un modelo freemium: hay un plan gratuito con límites de contactos y envíos, y planes de pago mensuales que escalan según el tamaño de la lista y las funciones. Algunas capacidades de IA solo están en los planes superiores;',
    faqs: [
      {
        question: '¿Qué es Mailchimp AI?',
        answer:
          'Son las funciones de inteligencia artificial integradas en Mailchimp. Ayudan a redactar el texto de las campañas, generar diseños de correo, recomendar segmentos de audiencia y sugerir el mejor momento de envío, todo dentro de la propia plataforma de email marketing.',
      },
      {
        question: '¿Mailchimp AI es gratis?',
        answer:
          'Mailchimp cuenta con un plan gratuito con límites de contactos y envíos que da acceso a funciones básicas. Las capacidades de IA más avanzadas suelen requerir un plan de pago, cuyo precio depende del tamaño de la lista. Consulta su web para precios actualizados.',
      },
      {
        question: '¿Para qué sirve Mailchimp AI?',
        answer:
          'Sirve para que un equipo pequeño pueda lanzar campañas de correo decentes sin redactor ni diseñador. Genera el texto y el diseño, propone a quién enviar y cuándo, y deja al usuario el trabajo de revisión en lugar de la creación desde cero.',
      },
    ],
  },
  DeepL: {
    name: 'DeepL',
    tagline: 'Traductor automático de alta calidad para textos y documentos profesionales',
    intro:
      'DeepL es un traductor automático desarrollado por la empresa alemana del mismo nombre, reconocido por producir traducciones que suenan especialmente naturales. Traduce texto, documentos completos manteniendo el formato y ofrece una API para integrarlo en aplicaciones. Lo utilizan tanto usuarios particulares como empresas y traductores profesionales que lo emplean como base para después revisar y pulir el resultado.',
    useCases: [
      'Traducir documentos manteniendo su formato original',
      'Traducir correos y comunicaciones profesionales',
      'Integrar traducción automática en una aplicación mediante API',
      'Localizar contenido web a varios idiomas',
      'Usarlo como primera pasada en traducción profesional',
    ],
    features: [
      'Traducción de texto y de documentos con formato preservado',
      'API para integración en aplicaciones y flujos de trabajo',
      'Glosarios personalizados para términos concretos',
      'Ajuste de tono formal o informal en varios idiomas',
      'Aplicaciones de escritorio, web y extensiones de navegador',
    ],
    pros: [
      'Calidad de traducción muy natural, sobre todo en idiomas europeos',
      'Conserva el formato al traducir documentos',
      'Glosarios que garantizan coherencia terminológica',
      'Plan gratuito utilizable para uso ocasional',
    ],
    cons: [
      'Cubre menos idiomas que otros traductores generalistas',
      'El plan gratuito limita caracteres y documentos',
      'Necesita revisión humana en textos técnicos o legales',
    ],
    pricingNote:
      'DeepL sigue un modelo freemium: hay una versión gratuita con límite de caracteres y de documentos traducidos, y planes de pago por usuario y mes con más volumen, glosarios ampliados y garantías de privacidad. La API tiene también un tramo gratuito y otro de pago por uso;',
    faqs: [
      {
        question: '¿Qué es DeepL?',
        answer:
          'DeepL es un traductor automático basado en inteligencia artificial, conocido por generar traducciones que suenan naturales. Traduce texto y documentos conservando el formato, permite crear glosarios y ofrece una API para integrar la traducción en aplicaciones y flujos de trabajo.',
      },
      {
        question: '¿DeepL es gratis?',
        answer:
          'Tiene una versión gratuita con límites de caracteres y de documentos traducidos al mes, suficiente para un uso ocasional. Los planes de pago añaden más volumen, glosarios ampliados y garantías de privacidad de datos. Consulta su web para precios actualizados.',
      },
      {
        question: '¿DeepL es mejor que Google Translate?',
        answer:
          'En idiomas europeos, muchos usuarios consideran que DeepL produce traducciones más naturales y mejor matizadas. Google Translate, en cambio, cubre muchos más idiomas y es gratuito sin límites prácticos. La elección depende de si prima la calidad del texto o la cobertura de idiomas.',
      },
    ],
  },
  'Google Translate': {
    name: 'Google Translate',
    tagline: 'Traductor gratuito de Google con soporte para más de cien idiomas',
    intro:
      'Google Translate es el servicio de traducción automática de Google. Traduce texto, páginas web, documentos, imágenes y conversaciones habladas en más de cien idiomas, desde el navegador o desde su aplicación móvil. Es la opción más extendida para traducciones rápidas y cotidianas, y también está disponible como API de pago para integrarlo en productos y servicios.',
    useCases: [
      'Traducir textos y frases sueltas al instante',
      'Traducir páginas web completas mientras navegas',
      'Traducir carteles y menús con la cámara del móvil',
      'Mantener conversaciones habladas entre dos idiomas',
      'Descargar idiomas para traducir sin conexión',
    ],
    features: [
      'Soporte para más de cien idiomas',
      'Traducción por cámara, voz y escritura a mano',
      'Traducción de páginas web y documentos',
      'Modo sin conexión con idiomas descargados',
      'API de traducción de pago dentro de Google Cloud',
    ],
    pros: [
      'Gratuito y accesible desde cualquier dispositivo',
      'La mayor cobertura de idiomas del mercado',
      'Funciones prácticas como traducción por cámara',
      'Integrado en Chrome y en el ecosistema de Google',
    ],
    cons: [
      'La calidad baja en idiomas poco frecuentes',
      'No apto para textos legales o técnicos sin revisión',
      'El uso profesional vía API sí tiene coste',
    ],
    pricingNote:
      'Google Translate es gratuito para uso personal desde la web y la aplicación móvil, sin necesidad de suscripción. El uso profesional a través de la API de Google Cloud sí es de pago, facturado por volumen de caracteres traducidos, con un tramo gratuito inicial.',
    faqs: [
      {
        question: '¿Qué es Google Translate?',
        answer:
          'Google Translate es el servicio de traducción automática de Google. Permite traducir texto, voz, imágenes, páginas web y documentos en más de cien idiomas, desde el navegador o su aplicación móvil, e incluso sin conexión si descargas los idiomas previamente.',
      },
      {
        question: '¿Google Translate es gratis?',
        answer:
          'Sí, es gratuito para uso personal tanto en la web como en la aplicación móvil, sin límite práctico ni suscripción. Lo que sí tiene coste es la API de traducción de Google Cloud, pensada para integrarla en productos, que se factura por volumen de caracteres.',
      },
      {
        question: '¿Es fiable Google Translate?',
        answer:
          'Es fiable para entender el sentido general de un texto y para uso cotidiano, sobre todo en idiomas mayoritarios. Para documentos legales, técnicos o de marca conviene una revisión humana, ya que puede cometer errores de matiz o de terminología especializada.',
      },
    ],
  },
  ModernMT: {
    name: 'ModernMT',
    tagline: 'Traductor automático adaptativo que aprende del contexto y de las correcciones',
    intro:
      'ModernMT es un motor de traducción automática neuronal con un enfoque adaptativo: aprende en tiempo real de las correcciones del traductor y del contexto del documento, sin necesidad de reentrenar el modelo cada vez. Está pensado sobre todo para empresas de localización y traductores profesionales que trabajan con memorias de traducción y necesitan coherencia terminológica en proyectos largos.',
    useCases: [
      'Traducir grandes volúmenes con coherencia terminológica',
      'Integrar traducción automática en herramientas de traducción asistida',
      'Aprovechar memorias de traducción existentes de un cliente',
      'Localizar documentación técnica y de producto',
      'Adaptar el motor al lenguaje concreto de un sector',
    ],
    features: [
      'Adaptación en tiempo real a partir de correcciones del traductor',
      'Uso del contexto del documento para desambiguar',
      'Integración con memorias de traducción y herramientas CAT',
      'API para incorporarlo a flujos de localización',
      'Soporte para un amplio conjunto de idiomas',
    ],
    pros: [
      'Mejora con el uso sin necesidad de reentrenar el modelo',
      'Buena coherencia terminológica en proyectos largos',
      'Encaja bien en flujos profesionales de localización',
      'Aprovecha memorias de traducción ya existentes',
    ],
    cons: [
      'Orientado a un público profesional, no al usuario ocasional',
      'Requiere integración técnica para sacarle partido',
      'Menos conocido que los traductores generalistas',
    ],
    pricingNote:
      'ModernMT trabaja con un modelo freemium: suele ofrecer un plan gratuito o de prueba con límites de caracteres y planes de pago por volumen, además de licencias empresariales para grandes flujos de localización. El coste depende mucho del uso previsto;',
    faqs: [
      {
        question: '¿Qué es ModernMT?',
        answer:
          'ModernMT es un motor de traducción automática neuronal adaptativo. Su particularidad es que aprende sobre la marcha de las correcciones del traductor y del contexto del documento, mejorando la coherencia sin necesidad de reentrenar el modelo para cada proyecto o cliente.',
      },
      {
        question: '¿ModernMT es gratis?',
        answer:
          'Ofrece una opción gratuita o de prueba con límites de caracteres, pero está orientado sobre todo al uso profesional mediante planes de pago por volumen y licencias empresariales. Consulta su web para conocer los tramos y precios actualizados.',
      },
      {
        question: '¿Para qué sirve ModernMT?',
        answer:
          'Sirve para empresas de localización y traductores profesionales que traducen grandes volúmenes y necesitan que el motor respete la terminología del cliente. Al aprender de las correcciones, reduce el trabajo de posedición conforme avanza el proyecto.',
      },
    ],
  },
  'Amazon Translate': {
    name: 'Amazon Translate',
    tagline: 'Traducción automática neuronal de AWS para aplicaciones y contenidos a gran escala',
    intro:
      'Amazon Translate es el servicio de traducción automática neuronal de Amazon Web Services. Permite traducir texto entre numerosos idiomas mediante una API, integrándose con el resto del ecosistema de AWS para procesar desde cadenas sueltas hasta grandes volúmenes de documentos. Está pensado sobre todo para equipos técnicos que necesitan incorporar traducción dentro de aplicaciones, webs o flujos de datos, más que para el usuario final que traduce de forma puntual.',
    useCases: [
      'Traducir contenido de una web o aplicación multilingüe',
      'Localizar catálogos de producto de comercio electrónico',
      'Traducir tickets y conversaciones de atención al cliente',
      'Procesar grandes lotes de documentos almacenados en la nube',
      'Añadir traducción en tiempo real dentro de un producto propio',
    ],
    features: [
      'API de traducción en tiempo real y por lotes',
      'Soporte para un amplio abanico de idiomas',
      'Terminología personalizada para respetar nombres y términos propios',
      'Integración con otros servicios de AWS',
      'Detección automática del idioma de origen',
    ],
    pros: [
      'Escala bien para volúmenes altos de traducción',
      'Se integra de forma natural si ya trabajas en AWS',
      'Permite personalizar la terminología del sector o marca',
      'Pago por uso, sin licencias fijas',
    ],
    cons: [
      'Requiere conocimientos técnicos y una cuenta de AWS',
      'No es cómodo para traducciones puntuales sin desarrollo',
      'El coste puede crecer con volúmenes muy grandes',
    ],
    pricingNote:
      'Amazon Translate sigue el modelo de pago por uso habitual de AWS: se factura según el volumen de caracteres traducidos. AWS suele ofrecer un nivel gratuito inicial con un límite mensual de caracteres durante los primeros meses.',
    faqs: [
      {
        question: '¿Qué es Amazon Translate?',
        answer:
          'Es el servicio de traducción automática neuronal de Amazon Web Services. Ofrece una API con la que traducir texto entre distintos idiomas, tanto en tiempo real como por lotes, para integrarlo dentro de aplicaciones, webs o procesos de datos ya existentes.',
      },
      {
        question: '¿Amazon Translate es gratis?',
        answer:
          'No es un servicio gratuito: funciona con pago por uso según los caracteres traducidos. AWS suele incluir un nivel gratuito inicial con un límite mensual durante un periodo de prueba. Conviene revisar su web para conocer las condiciones y tarifas vigentes.',
      },
      {
        question: '¿Amazon Translate funciona en español?',
        answer:
          'Sí, el español está entre los idiomas soportados, tanto como origen como destino. Además admite terminología personalizada, lo que permite fijar cómo se traducen nombres de marca o términos técnicos concretos para mantener la coherencia en tus contenidos.',
      },
    ],
  },
  Papercup: {
    name: 'Papercup',
    tagline: 'Doblaje con IA y voces sintéticas para llevar vídeo a nuevos idiomas',
    intro:
      'Papercup es una empresa británica especializada en doblaje automático de vídeo mediante inteligencia artificial. Genera pistas de audio en otros idiomas con voces sintéticas que buscan sonar naturales, combinando el trabajo del modelo con revisión humana para garantizar la calidad. Se dirige sobre todo a productoras, medios y empresas con catálogos grandes de vídeo que quieren llegar a audiencias internacionales sin grabar de nuevo cada locución.',
    useCases: [
      'Doblar catálogos de vídeo a varios idiomas',
      'Localizar formación corporativa y cursos internos',
      'Adaptar contenido de medios para audiencias internacionales',
      'Traducir vídeos de marketing manteniendo la voz en off',
      'Ampliar el alcance de un canal de vídeo existente',
    ],
    features: [
      'Doblaje automático de vídeo con voces sintéticas',
      'Revisión humana de la calidad del resultado',
      'Soporte para varios idiomas de destino',
      'Sincronización del audio con el vídeo original',
      'Flujo pensado para volúmenes grandes de contenido',
    ],
    pros: [
      'Mucho más rápido y barato que un doblaje tradicional',
      'La supervisión humana reduce errores de traducción',
      'Pensado para escalar catálogos completos, no vídeos sueltos',
    ],
    cons: [
      'Orientado a empresas, poco accesible para creadores individuales',
      'Los precios no son públicos y requieren contacto comercial',
      'La voz sintética puede no encajar en contenido muy expresivo',
    ],
    pricingNote:
      'Papercup trabaja con un modelo de pago orientado a empresas, normalmente mediante presupuesto a medida según el volumen de vídeo y los idiomas necesarios. No suele publicar tarifas cerradas ni ofrecer un plan gratuito de autoservicio.',
    faqs: [
      {
        question: '¿Qué es Papercup?',
        answer:
          'Papercup es un servicio de doblaje de vídeo con inteligencia artificial. Genera pistas de audio en otros idiomas usando voces sintéticas y añade revisión humana para asegurar la calidad, con el objetivo de localizar catálogos de vídeo sin regrabar las locuciones.',
      },
      {
        question: '¿Papercup es gratis?',
        answer:
          'No. Es una herramienta de pago dirigida a empresas y medios, con presupuestos personalizados según el volumen de vídeo y los idiomas. No dispone de un plan gratuito abierto. Conviene contactar con ellos desde su web para conocer las condiciones actuales.',
      },
      {
        question: '¿Papercup dobla vídeos al español?',
        answer:
          'El español está entre los idiomas que suele cubrir un servicio de doblaje de este tipo. La disponibilidad concreta de idiomas y variantes puede cambiar, así que lo más fiable es confirmarlo directamente en su web antes de contratar.',
      },
    ],
  },
  HeyGen: {
    name: 'HeyGen',
    tagline: 'Vídeos con avatares IA y doblaje multilingüe con sincronización labial',
    intro:
      'HeyGen es una plataforma de generación de vídeo con inteligencia artificial conocida por sus avatares digitales y por su función de traducción de vídeo. Su herramienta de doblaje toma un vídeo existente, traduce el audio a otro idioma y ajusta el movimiento de los labios para que el resultado parezca grabado en ese idioma. Se usa mucho en marketing, formación y creación de contenido para redes.',
    useCases: [
      'Traducir vídeos de marketing a varios idiomas',
      'Crear vídeos con avatares sin grabar con cámara',
      'Localizar formación corporativa y onboarding',
      'Adaptar contenido de redes sociales a otros mercados',
      'Generar vídeos personalizados para campañas comerciales',
    ],
    features: [
      'Traducción de vídeo con sincronización labial',
      'Avatares digitales y avatares personalizados',
      'Clonación de voz para mantener el tono original',
      'Generación de vídeo a partir de texto',
      'Soporte para numerosos idiomas de destino',
    ],
    pros: [
      'La sincronización labial da un resultado muy convincente',
      'Interfaz sencilla, sin necesidad de conocimientos de edición',
      'Permite probar la herramienta antes de pagar',
      'Cubre bastantes idiomas en el doblaje',
    ],
    cons: [
      'El plan gratuito tiene límites de duración y marca de agua',
      'El coste sube rápido si generas mucho vídeo',
      'El resultado puede sonar artificial en contenidos muy expresivos',
    ],
    pricingNote:
      'HeyGen funciona con un modelo freemium: suele ofrecer un plan gratuito con un número limitado de vídeos y marca de agua, y planes de pago por suscripción con más minutos, avatares y funciones. Las tarifas de entrada suelen situarse en el entorno de unas decenas de euros al mes.',
    faqs: [
      {
        question: '¿Qué es HeyGen?',
        answer:
          'HeyGen es una plataforma de vídeo con inteligencia artificial que permite crear vídeos con avatares digitales y traducir vídeos existentes a otros idiomas, ajustando la voz y el movimiento de los labios para que el doblaje resulte natural.',
      },
      {
        question: '¿HeyGen es gratis?',
        answer:
          'Tiene un plan gratuito con límites: menos minutos de vídeo, funciones reducidas y normalmente marca de agua. Para uso profesional hay planes de pago por suscripción con más capacidad. Revisa su web para conocer los límites y precios vigentes.',
      },
      {
        question: '¿HeyGen traduce vídeos al español?',
        answer:
          'Sí, el español figura entre los idiomas soportados por su función de traducción de vídeo, junto a muchos otros. Además de traducir el audio, ajusta la sincronización labial para que el vídeo doblado se vea coherente con la nueva pista.',
      },
    ],
  },
  'Subly AI': {
    name: 'Subly AI',
    tagline: 'Subtítulos y transcripciones automáticas para vídeo y audio en varios idiomas',
    intro:
      'Subly es una herramienta en línea para generar subtítulos, transcripciones y traducciones de contenido audiovisual de forma automática. Sube un vídeo o un audio y la plataforma transcribe el contenido, permite editar el texto y exportar los subtítulos en distintos formatos o incrustados en el propio vídeo. Es habitual en equipos de marketing, formación y comunicación que publican vídeo con frecuencia en redes.',
    useCases: [
      'Subtitular vídeos para redes sociales automáticamente',
      'Transcribir entrevistas, pódcast o reuniones grabadas',
      'Traducir subtítulos a varios idiomas para audiencias internacionales',
      'Hacer el contenido de vídeo más accesible',
      'Exportar archivos SRT o VTT para plataformas de vídeo',
    ],
    features: [
      'Transcripción automática de audio y vídeo',
      'Editor de subtítulos con corrección manual',
      'Traducción de subtítulos a otros idiomas',
      'Exportación en formatos estándar como SRT o VTT',
      'Personalización del estilo de los subtítulos incrustados',
    ],
    pros: [
      'Ahorra mucho tiempo frente a subtitular a mano',
      'Editor cómodo para corregir errores de transcripción',
      'Cubre subtitulado y traducción en la misma herramienta',
    ],
    cons: [
      'El plan gratuito limita bastante los minutos disponibles',
      'La transcripción automática siempre necesita repaso humano',
      'La precisión baja con audios ruidosos o acentos marcados',
    ],
    pricingNote:
      'Subly usa un modelo freemium: suele haber un plan gratuito con una cantidad limitada de minutos de transcripción al mes y planes de pago por suscripción que amplían minutos, idiomas y funciones de exportación. Los planes de entrada rondan las pocas decenas de euros mensuales.',
    faqs: [
      {
        question: '¿Qué es Subly?',
        answer:
          'Subly es una herramienta de subtitulado automático con inteligencia artificial. Transcribe vídeos y audios, permite editar el texto resultante, traducir los subtítulos a otros idiomas y exportarlos como archivo o incrustados directamente en el vídeo.',
      },
      {
        question: '¿Subly es gratis?',
        answer:
          'Ofrece un plan gratuito con un número limitado de minutos y funciones, suficiente para probarlo. Para un uso continuado hay suscripciones de pago que amplían los minutos disponibles, los idiomas y las opciones de exportación. Consulta su web para las tarifas actuales.',
      },
      {
        question: '¿Subly funciona en español?',
        answer:
          'Sí, admite español tanto para transcribir como para traducir subtítulos, junto a muchos otros idiomas. Como en cualquier transcripción automática, conviene repasar el resultado, sobre todo si el audio tiene ruido de fondo o varios interlocutores.',
      },
    ],
  },
  'Hive AI': {
    name: 'Hive AI',
    tagline: 'Modelos de IA para moderar contenido y detectar material generado por IA',
    intro:
      'Hive es una empresa estadounidense que ofrece modelos de inteligencia artificial en la nube para clasificar y moderar contenido. Entre sus servicios hay clasificadores capaces de detectar si una imagen, un vídeo o un texto han sido generados por IA, además de detección de deepfakes y de contenido no apropiado. Sus clientes suelen ser plataformas, medios y empresas que necesitan filtrar contenido a gran escala.',
    useCases: [
      'Moderar contenido subido por usuarios en una plataforma',
      'Detectar imágenes y vídeos generados por inteligencia artificial',
      'Identificar posibles deepfakes en material audiovisual',
      'Filtrar contenido sensible o no apto automáticamente',
      'Integrar clasificación de contenido dentro de un producto',
    ],
    features: [
      'API de detección de contenido generado por IA',
      'Clasificadores de moderación para imagen, vídeo y texto',
      'Detección de deepfakes en material audiovisual',
      'Modelos preentrenados listos para integrar',
      'Procesamiento a gran escala mediante servicio en la nube',
    ],
    pros: [
      'Cubre moderación y detección de IA en una sola plataforma',
      'Pensado para volúmenes altos y uso en producción',
      'Modelos ya entrenados, sin necesidad de crear los tuyos',
    ],
    cons: [
      'Requiere integración técnica mediante API',
      'Orientado a empresas, no a usuarios particulares',
      'Ninguna detección de IA es infalible: hay falsos positivos',
    ],
    pricingNote:
      'Hive es un servicio de pago orientado a empresas, con precios normalmente basados en el volumen de contenido procesado y presupuestos a medida. No suele ofrecer un plan gratuito abierto, aunque sí permite probar algunos modelos.',
    faqs: [
      {
        question: '¿Qué es Hive AI?',
        answer:
          'Hive es una plataforma de modelos de inteligencia artificial en la nube centrada en la moderación y clasificación de contenido. Ofrece, entre otros, detectores de contenido generado por IA y de deepfakes, accesibles mediante API para integrarlos en aplicaciones y plataformas.',
      },
      {
        question: '¿Hive AI detecta imágenes generadas por IA?',
        answer:
          'Sí, dispone de clasificadores diseñados para estimar si una imagen o un vídeo han sido generados por inteligencia artificial. Como cualquier detector, ofrece una probabilidad, no una certeza absoluta, y puede equivocarse en casos límite o con contenido muy editado.',
      },
      {
        question: '¿Hive AI es gratis?',
        answer:
          'No es una herramienta gratuita: funciona con un modelo de pago pensado para empresas, normalmente basado en el volumen de contenido analizado. Lo habitual es solicitar presupuesto desde su web, donde también encontrarás las condiciones actualizadas.',
      },
    ],
  },
  'AI or Not': {
    name: 'AI or Not',
    tagline: 'Comprueba en segundos si una imagen o audio los generó una IA',
    intro:
      'AI or Not es un servicio web que analiza imágenes, audios y otros archivos para estimar si han sido creados por una inteligencia artificial o proceden de una fuente real. El funcionamiento es directo: se sube el archivo y la herramienta devuelve un veredicto con su nivel de confianza. Se usa tanto de forma puntual por curiosidad como en verificación de contenido y prevención del fraude.',
    useCases: [
      'Comprobar si una foto viral fue generada por IA',
      'Verificar imágenes antes de publicarlas en un medio',
      'Detectar posibles perfiles falsos con fotos sintéticas',
      'Analizar audios sospechosos de ser voz clonada',
      'Integrar la detección en flujos antifraude mediante API',
    ],
    features: [
      'Detección de imágenes generadas por inteligencia artificial',
      'Análisis de audio para detectar voces sintéticas',
      'Resultado con nivel de confianza asociado',
      'API para integrar la detección en otros sistemas',
      'Uso desde el navegador sin instalar nada',
    ],
    pros: [
      'Muy fácil de usar: subir archivo y ver el resultado',
      'Permite hacer comprobaciones puntuales sin registrarse mucho',
      'Cubre imagen y audio, no solo un tipo de archivo',
    ],
    cons: [
      'El plan gratuito limita el número de comprobaciones',
      'Puede fallar con imágenes muy retocadas o comprimidas',
      'El resultado es una estimación, no una prueba concluyente',
    ],
    pricingNote:
      'AI or Not funciona con un modelo freemium: suele permitir un número limitado de comprobaciones gratuitas y ofrece planes de pago con más análisis mensuales y acceso a la API. Los planes de entrada suelen ser económicos, en el entorno de unos pocos euros al mes.',
    faqs: [
      {
        question: '¿Qué es AI or Not?',
        answer:
          'Es una herramienta en línea que analiza imágenes y audios para estimar si fueron generados por inteligencia artificial. Basta con subir el archivo para recibir un veredicto acompañado de un nivel de confianza, sin necesidad de conocimientos técnicos.',
      },
      {
        question: '¿AI or Not es gratis?',
        answer:
          'Ofrece un uso gratuito limitado, con un número reducido de comprobaciones. Para analizar más archivos o usar su API existen planes de pago mensuales. Revisa su web para conocer los límites del plan gratuito y las tarifas actuales.',
      },
      {
        question: '¿Es fiable la detección de imágenes generadas por IA?',
        answer:
          'Ninguna herramienta de este tipo acierta siempre. Los detectores dan una probabilidad, no una certeza, y pueden fallar con imágenes muy comprimidas, retocadas o creadas con modelos recientes. Conviene usar el resultado como un indicio más, no como prueba definitiva.',
      },
    ],
  },
  'Sensity AI': {
    name: 'Sensity AI',
    tagline: 'Plataforma de detección de deepfakes y medios manipulados para empresas',
    intro:
      'Sensity AI es una empresa europea especializada en la detección de deepfakes y contenido audiovisual manipulado. Su plataforma analiza imágenes, vídeos, audios y documentos para identificar señales de manipulación o generación sintética, con informes orientados a equipos de verificación, seguridad y cumplimiento. Trabaja sobre todo con empresas del sector financiero, medios de comunicación y organismos que necesitan verificar identidades o contenidos.',
    useCases: [
      'Detectar deepfakes en procesos de verificación de identidad',
      'Verificar vídeos y fotos en medios de comunicación',
      'Prevenir fraude con documentos o rostros manipulados',
      'Monitorizar contenido sintético que afecte a una marca',
      'Integrar la detección en flujos de onboarding digital',
    ],
    features: [
      'Detección de deepfakes en vídeo, imagen y audio',
      'Análisis de documentos en busca de manipulaciones',
      'Informes detallados con indicadores de manipulación',
      'API para integrar la verificación en sistemas propios',
      'Panel de control para equipos de verificación',
    ],
    pros: [
      'Enfoque especializado en deepfakes, no genérico',
      'Cubre varios tipos de medios y también documentos',
      'Pensado para requisitos empresariales de cumplimiento',
    ],
    cons: [
      'Precio y contratación orientados a empresas',
      'No es una herramienta para comprobaciones puntuales gratuitas',
      'Requiere integración técnica para aprovecharlo del todo',
    ],
    pricingNote:
      'Sensity AI es un servicio de pago dirigido a empresas, con planes normalmente a medida según el volumen de análisis y los módulos contratados. No suele publicar tarifas cerradas ni ofrecer un plan gratuito abierto, aunque permite solicitar demostraciones.',
    faqs: [
      {
        question: '¿Qué es Sensity AI?',
        answer:
          'Sensity AI es una plataforma especializada en detectar deepfakes y contenido manipulado. Analiza vídeos, imágenes, audios y documentos en busca de señales de generación sintética o edición, y se usa sobre todo en verificación de identidad, antifraude y comprobación periodística.',
      },
      {
        question: '¿Sensity AI es gratis?',
        answer:
          'No. Es una solución de pago orientada a empresas, con precios a medida según el volumen y los módulos que se necesiten. Lo habitual es pedir una demostración o presupuesto desde su web, donde figuran las condiciones actualizadas.',
      },
      {
        question: '¿Para qué sirve un detector de deepfakes?',
        answer:
          'Sirve para estimar si un vídeo, una foto o un audio han sido manipulados o generados artificialmente. Es útil en verificación de identidad, prevención del fraude y comprobación de contenido, aunque los resultados son probabilísticos y conviene combinarlos con revisión humana.',
      },
    ],
  },
  TruEra: {
    name: 'TruEra',
    tagline: 'Análisis, explicabilidad y monitorización de modelos de machine learning e IA',
    intro:
      'TruEra es una plataforma de calidad y observabilidad para modelos de inteligencia artificial. Ayuda a los equipos de ciencia de datos a entender por qué un modelo toma una decisión, a detectar sesgos y degradación del rendimiento, y a monitorizar los modelos una vez están en producción. Se orienta a empresas con requisitos de gobernanza y a equipos que necesitan justificar el comportamiento de sus modelos.',
    useCases: [
      'Explicar por qué un modelo toma una decisión concreta',
      'Detectar sesgos en modelos de scoring o clasificación',
      'Monitorizar la degradación de un modelo en producción',
      'Documentar modelos para auditorías y cumplimiento normativo',
      'Comparar versiones de un modelo antes de desplegarlo',
    ],
    features: [
      'Explicabilidad de modelos y análisis de características',
      'Detección de sesgos y métricas de equidad',
      'Monitorización de deriva de datos y rendimiento',
      'Herramientas de depuración de modelos',
      'Integración con flujos de trabajo de ciencia de datos',
    ],
    pros: [
      'Cubre explicabilidad, sesgos y monitorización en un mismo sitio',
      'Útil para cumplir requisitos de gobernanza de IA',
      'Enfocado a equipos técnicos con modelos en producción',
    ],
    cons: [
      'Requiere conocimientos de machine learning para sacarle partido',
      'No aporta valor si no tienes modelos propios',
      'Los planes completos están pensados para empresas',
    ],
    pricingNote:
      'TruEra ha ofrecido un modelo freemium, con una versión gratuita o de prueba limitada para equipos pequeños y planes de pago para empresas con más volumen y funciones de gobernanza. Las tarifas empresariales suelen negociarse a medida.',
    faqs: [
      {
        question: '¿Qué es TruEra?',
        answer:
          'TruEra es una plataforma de calidad y observabilidad de modelos de inteligencia artificial. Permite explicar las decisiones de un modelo, detectar sesgos, depurar su comportamiento y monitorizar su rendimiento cuando ya está funcionando en producción.',
      },
      {
        question: '¿Para qué sirve la explicabilidad de modelos?',
        answer:
          'Sirve para entender qué variables influyen en las predicciones de un modelo y por qué llega a un resultado concreto. Es clave para detectar sesgos, corregir errores y justificar decisiones ante auditorías o requisitos normativos, sobre todo en sectores regulados.',
      },
      {
        question: '¿TruEra es gratis?',
        answer:
          'Ha ofrecido una versión gratuita o de prueba con funciones limitadas, además de planes de pago para empresas con necesidades de gobernanza y volúmenes mayores. La disponibilidad y las condiciones pueden cambiar, así que conviene comprobarlas en su web.',
      },
    ],
  },
  'Fiddler AI': {
    name: 'Fiddler AI',
    tagline: 'Observabilidad y auditoría de modelos de IA y aplicaciones con LLM',
    intro:
      'Fiddler AI es una plataforma de observabilidad para modelos de machine learning y aplicaciones basadas en modelos de lenguaje. Permite monitorizar el comportamiento de los modelos en producción, explicar sus predicciones, detectar sesgos y deriva, y generar informes para auditoría y cumplimiento. Está pensada para equipos de datos y responsables de gobernanza que necesitan controlar los riesgos de sus sistemas de IA.',
    useCases: [
      'Monitorizar modelos en producción y detectar anomalías',
      'Auditar sesgos y equidad en modelos de decisión',
      'Explicar predicciones ante equipos de negocio o reguladores',
      'Vigilar la calidad de respuestas de aplicaciones con LLM',
      'Detectar deriva de datos que degrade el rendimiento',
    ],
    features: [
      'Monitorización continua de modelos en producción',
      'Explicabilidad de predicciones individuales y globales',
      'Métricas de sesgo y equidad configurables',
      'Observabilidad específica para aplicaciones con LLM',
      'Alertas e informes para auditoría y cumplimiento',
    ],
    pros: [
      'Cubre tanto modelos clásicos como aplicaciones con LLM',
      'Buenas herramientas de explicabilidad y detección de sesgos',
      'Orientado a gobernanza y cumplimiento normativo',
    ],
    cons: [
      'Curva de aprendizaje alta para equipos no técnicos',
      'Los planes completos están dirigidos a empresas',
      'Requiere integrar la plataforma con tu infraestructura',
    ],
    pricingNote:
      'Fiddler AI combina una versión de acceso gratuito o de prueba con planes de pago empresariales cuyo precio depende del número de modelos, el volumen de datos y las funciones de gobernanza. Las tarifas suelen acordarse mediante presupuesto.',
    faqs: [
      {
        question: '¿Qué es Fiddler AI?',
        answer:
          'Fiddler AI es una plataforma de observabilidad y auditoría de modelos de inteligencia artificial. Monitoriza modelos en producción, explica sus predicciones, detecta sesgos y deriva, y ayuda a documentar el comportamiento del sistema para cumplimiento y auditoría.',
      },
      {
        question: '¿Fiddler AI sirve para auditar sesgos?',
        answer:
          'Sí. Incluye métricas de equidad y herramientas de análisis que permiten comprobar si un modelo trata de forma distinta a diferentes grupos. Estos informes son útiles para revisiones internas y para justificar decisiones ante auditorías o reguladores.',
      },
      {
        question: '¿Fiddler AI es gratis?',
        answer:
          'Ofrece una vía de acceso gratuita o de prueba con funciones limitadas, pero su uso completo es de pago y está orientado a empresas, con precios según volumen y necesidades. Consulta su web para conocer las condiciones vigentes.',
      },
    ],
  },
  'Credo AI': {
    name: 'Credo AI',
    tagline: 'Gobernanza de IA para cumplir normativas y gestionar riesgos de modelos',
    intro:
      'Credo AI es una plataforma de gobernanza de inteligencia artificial. Ayuda a las organizaciones a inventariar sus sistemas de IA, evaluar sus riesgos, documentar su comportamiento y alinearlos con normativas y políticas internas. A diferencia de las herramientas puramente técnicas, se centra en el proceso: quién es responsable de cada modelo, qué evidencias existen y cómo se demuestra el cumplimiento ante auditores o reguladores.',
    useCases: [
      'Inventariar todos los sistemas de IA de una organización',
      'Evaluar riesgos antes de desplegar un modelo',
      'Documentar evidencias para auditorías de cumplimiento',
      'Alinear proyectos de IA con normativas como el reglamento europeo',
      'Coordinar equipos técnicos, legales y de negocio en torno a la IA',
    ],
    features: [
      'Registro e inventario de sistemas de IA',
      'Evaluaciones de riesgo y cuestionarios de cumplimiento',
      'Generación de informes y evidencias de gobernanza',
      'Políticas configurables según normativa o sector',
      'Espacio de trabajo compartido entre equipos técnicos y legales',
    ],
    pros: [
      'Enfoque claro en gobernanza y cumplimiento, no solo métricas',
      'Facilita la coordinación entre perfiles técnicos y legales',
      'Útil ante normativas de IA cada vez más exigentes',
    ],
    cons: [
      'Aporta poco si no gestionas varios sistemas de IA',
      'Orientado a organizaciones medianas y grandes',
      'Exige un esfuerzo interno de documentación y proceso',
    ],
    pricingNote:
      'Credo AI se dirige principalmente a empresas y trabaja con planes a medida según el número de sistemas de IA y las necesidades de gobernanza. Suele existir alguna vía de acceso gratuito o de prueba para explorar la plataforma.',
    faqs: [
      {
        question: '¿Qué es Credo AI?',
        answer:
          'Credo AI es una plataforma de gobernanza de inteligencia artificial. Permite inventariar los sistemas de IA de una organización, evaluar sus riesgos, documentar evidencias y comprobar que cumplen las políticas internas y las normativas aplicables.',
      },
      {
        question: '¿Para qué sirve la gobernanza de IA?',
        answer:
          'Sirve para saber qué sistemas de IA usa una organización, qué riesgos implican y quién responde de ellos. Aporta trazabilidad y evidencias, algo cada vez más necesario ante normativas que exigen documentar y justificar el uso de la inteligencia artificial.',
      },
      {
        question: '¿Credo AI es gratis?',
        answer:
          'Suele ofrecer alguna forma de acceso gratuito o de prueba para conocer la plataforma, pero su uso real está pensado para empresas con planes de pago a medida. Las condiciones cambian, así que conviene consultarlas en su web.',
      },
    ],
  },
  ChatPDF: {
    name: 'ChatPDF',
    tagline: 'Conversa con tus documentos PDF y obtén respuestas al instante',
    intro:
      'ChatPDF es una herramienta web que permite subir un documento PDF y hacerle preguntas en lenguaje natural. En lugar de leer el archivo entero, el usuario plantea dudas concretas y la herramienta responde citando el contenido del documento. Se usa mucho para estudiar, revisar informes, contratos, artículos científicos o manuales extensos sin tener que buscar la información página por página.',
    useCases: [
      'Resumir informes o artículos largos en minutos',
      'Estudiar apuntes y libros preguntando dudas concretas',
      'Revisar contratos buscando cláusulas específicas',
      'Extraer datos clave de manuales técnicos',
      'Preparar reuniones a partir de documentación densa',
    ],
    features: [
      'Subida de PDF y chat en lenguaje natural',
      'Respuestas con referencia a las páginas del documento',
      'Resúmenes automáticos del contenido',
      'Soporte para documentos en varios idiomas',
      'Uso directo desde el navegador, sin instalación',
    ],
    pros: [
      'Muy sencillo: subir el PDF y empezar a preguntar',
      'Las citas a página facilitan verificar las respuestas',
      'Ahorra tiempo con documentación extensa',
    ],
    cons: [
      'El plan gratuito limita páginas y preguntas diarias',
      'Puede equivocarse al interpretar tablas o gráficos',
      'No sustituye la lectura completa en documentos críticos',
    ],
    pricingNote:
      'ChatPDF sigue un modelo freemium: ofrece un plan gratuito con límites diarios de documentos, páginas y preguntas, y una suscripción de pago que amplía esos límites. El plan de pago suele situarse en el entorno de unos pocos euros al mes.',
    faqs: [
      {
        question: '¿Qué es ChatPDF?',
        answer:
          'ChatPDF es una herramienta en línea que permite hacer preguntas sobre un documento PDF en lenguaje natural. Tras subir el archivo, responde a las dudas del usuario basándose en el contenido del documento e indicando en qué páginas se apoya.',
      },
      {
        question: '¿ChatPDF es gratis?',
        answer:
          'Tiene un plan gratuito con límites diarios en número de documentos, páginas por archivo y preguntas. Para un uso más intensivo ofrece una suscripción de pago que amplía esos límites. Consulta su web para conocer las tarifas actuales.',
      },
      {
        question: '¿ChatPDF funciona con documentos en español?',
        answer:
          'Sí, admite documentos en español y responde en el mismo idioma en el que se le pregunta. Aun así, conviene revisar las respuestas en documentos importantes, ya que puede interpretar mal tablas, gráficos o textos escaneados de baja calidad.',
      },
    ],
  },
  AskYourPDF: {
    name: 'AskYourPDF',
    tagline: 'Pregunta a tus PDF y extrae información sin leerlos enteros',
    intro:
      'AskYourPDF es una herramienta que permite cargar documentos PDF y consultarlos mediante un chat en lenguaje natural. Además del uso web, ofrece integraciones y una API para incorporar la consulta de documentos en otros flujos de trabajo. Resulta útil para estudiantes, investigadores y profesionales que manejan grandes volúmenes de documentación y necesitan localizar información concreta rápidamente.',
    useCases: [
      'Consultar artículos académicos y trabajos de investigación',
      'Resumir informes corporativos extensos',
      'Buscar información concreta dentro de manuales largos',
      'Comparar el contenido de varios documentos a la vez',
      'Integrar consulta de documentos mediante su API',
    ],
    features: [
      'Chat sobre documentos PDF subidos',
      'Respuestas con referencias al documento original',
      'Gestión de varios documentos en una misma consulta',
      'API para integrar la herramienta en otros sistemas',
      'Resúmenes automáticos del contenido',
    ],
    pros: [
      'Permite trabajar con varios documentos simultáneamente',
      'Dispone de API para automatizar flujos',
      'Interfaz sencilla, sin conocimientos técnicos',
    ],
    cons: [
      'El plan gratuito limita documentos y consultas',
      'Puede fallar con PDF escaneados o mal estructurados',
      'Conviene verificar las respuestas en usos críticos',
    ],
    pricingNote:
      'AskYourPDF funciona con un modelo freemium: hay un plan gratuito con límites en número de documentos, tamaño y preguntas, y planes de suscripción que amplían capacidad y dan acceso a la API. Los planes de pago suelen situarse en unos pocos euros al mes.',
    faqs: [
      {
        question: '¿Qué es AskYourPDF?',
        answer:
          'AskYourPDF es una herramienta de IA que permite hacer preguntas sobre documentos PDF. Se sube el archivo y se consulta su contenido mediante un chat, obteniendo respuestas basadas en el documento, con referencias a las partes utilizadas.',
      },
      {
        question: '¿AskYourPDF es gratis?',
        answer:
          'Ofrece un plan gratuito con límites en número de documentos, tamaño de archivo y preguntas. Para más capacidad o acceso a la API existen planes de pago por suscripción. Revisa su web para conocer los límites y precios vigentes.',
      },
      {
        question: '¿Para qué sirve AskYourPDF?',
        answer:
          'Sirve para localizar información dentro de documentos largos sin leerlos enteros: resúmenes, búsqueda de datos concretos, comparación entre archivos o consultas sobre informes, contratos y artículos académicos. También puede integrarse en otros sistemas mediante su API.',
      },
    ],
  },
  Glean: {
    name: 'Glean',
    tagline: 'Buscador y asistente de IA que conecta todas las apps de tu empresa',
    intro:
      'Glean es una plataforma de búsqueda empresarial y asistente de IA que conecta las herramientas internas de una organización, como el correo, el almacenamiento en la nube, los gestores de tickets o la documentación. Indexa esa información y permite consultarla en lenguaje natural, respetando los permisos de cada usuario. Se dirige a empresas donde el conocimiento está repartido entre muchas aplicaciones distintas.',
    useCases: [
      'Buscar información dispersa en las herramientas internas',
      'Preguntar en lenguaje natural sobre documentación de empresa',
      'Acelerar la incorporación de nuevos empleados',
      'Encontrar al experto interno en un tema concreto',
      'Crear asistentes internos apoyados en el conocimiento corporativo',
    ],
    features: [
      'Búsqueda unificada sobre múltiples aplicaciones conectadas',
      'Asistente conversacional sobre el conocimiento interno',
      'Respeto de los permisos existentes en cada fuente',
      'Conectores para herramientas de trabajo habituales',
      'Resultados personalizados según el rol del usuario',
    ],
    pros: [
      'Unifica el conocimiento repartido entre muchas herramientas',
      'Mantiene los permisos de acceso originales',
      'Reduce mucho el tiempo dedicado a buscar información',
    ],
    cons: [
      'Solución empresarial: no tiene sentido para uso individual',
      'Requiere despliegue e integración con los sistemas internos',
      'El coste por usuario puede ser elevado en plantillas grandes',
    ],
    pricingNote:
      'Glean es una plataforma orientada a empresas, con precios habitualmente por usuario y presupuestos a medida según el número de conectores y el tamaño de la organización. No suele haber un plan gratuito de autoservicio, sino demostraciones y pruebas guiadas.',
    faqs: [
      {
        question: '¿Qué es Glean?',
        answer:
          'Glean es un buscador empresarial con inteligencia artificial. Conecta las aplicaciones internas de una empresa, indexa su contenido y permite consultarlo en lenguaje natural, devolviendo respuestas y documentos relevantes según los permisos de cada usuario.',
      },
      {
        question: '¿Glean es gratis?',
        answer:
          'No es una herramienta gratuita. Se comercializa como solución empresarial, normalmente con tarifas por usuario y presupuesto a medida según los conectores y el tamaño de la organización. Lo habitual es solicitar una demostración desde su web.',
      },
      {
        question: '¿Para qué sirve Glean en una empresa?',
        answer:
          'Sirve para dejar de perder tiempo buscando información entre correo, documentos, chats y herramientas de gestión. Centraliza la búsqueda y permite preguntar en lenguaje natural, lo que ayuda especialmente en incorporaciones, soporte interno y equipos muy distribuidos.',
      },
    ],
  },
  Klu: {
    name: 'Klu',
    tagline: 'Plataforma para crear, probar y desplegar aplicaciones basadas en LLM',
    intro:
      'Klu es una plataforma pensada para equipos que desarrollan aplicaciones con modelos de lenguaje. Permite crear y versionar prompts, conectar distintos modelos, evaluar resultados y desplegar funciones de IA sobre datos propios, incluida la consulta de documentos internos. Está orientada a perfiles técnicos y de producto que quieren iterar rápido sin montar toda la infraestructura desde cero.',
    useCases: [
      'Crear asistentes que respondan sobre documentación propia',
      'Gestionar y versionar prompts de forma ordenada',
      'Comparar resultados entre distintos modelos de lenguaje',
      'Evaluar la calidad de las respuestas de una aplicación IA',
      'Desplegar funciones de IA dentro de un producto existente',
    ],
    features: [
      'Gestión y versionado de prompts',
      'Conexión con varios proveedores de modelos',
      'Evaluación y comparación de respuestas',
      'Consulta sobre datos y documentos propios',
      'API y SDK para integrar en aplicaciones',
    ],
    pros: [
      'Acelera el desarrollo de aplicaciones basadas en LLM',
      'Permite comparar modelos sin reescribir la integración',
      'Centraliza prompts y evaluaciones en un mismo sitio',
    ],
    cons: [
      'Dirigido a perfiles técnicos, no a usuarios finales',
      'El plan gratuito tiene límites de uso claros',
      'Añade una capa más de dependencia externa',
    ],
    pricingNote:
      'Klu emplea un modelo freemium: suele ofrecer un plan gratuito con límites de uso para probar la plataforma y planes de pago por suscripción según el volumen y las funciones de equipo. Las tarifas de entrada rondan las pocas decenas de euros al mes.',
    faqs: [
      {
        question: '¿Qué es Klu?',
        answer:
          'Klu es una plataforma para construir aplicaciones basadas en modelos de lenguaje. Permite crear y versionar prompts, conectar distintos modelos, evaluar la calidad de las respuestas y desplegar funciones de IA que consultan datos o documentos propios.',
      },
      {
        question: '¿Klu es gratis?',
        answer:
          'Suele ofrecer un plan gratuito con límites de uso pensado para probar la herramienta, además de planes de pago con más volumen y funciones de colaboración. Conviene revisar su web para conocer los límites y las tarifas actualizadas.',
      },
      {
        question: '¿Para qué sirve Klu?',
        answer:
          'Sirve para que un equipo técnico desarrolle e itere aplicaciones con IA sin montar toda la infraestructura: gestionar prompts, comparar modelos, medir la calidad de las respuestas y conectar los datos propios de la organización a un asistente.',
      },
    ],
  },
  Danswer: {
    name: 'Danswer',
    tagline: 'Buscador y asistente de IA de código abierto para el conocimiento interno',
    intro:
      'Danswer es una plataforma de código abierto que permite hacer preguntas en lenguaje natural sobre el conocimiento interno de una organización. Conecta fuentes como documentación, repositorios, chats o gestores de tickets, indexa su contenido y responde citando los documentos de origen. Al ser open source, puede desplegarse en servidores propios, algo relevante para equipos con requisitos de privacidad.',
    useCases: [
      'Consultar la documentación interna en lenguaje natural',
      'Buscar respuestas en chats y tickets de soporte',
      'Desplegar un asistente de conocimiento en servidores propios',
      'Ayudar a nuevos empleados a encontrar información',
      'Conectar varias fuentes de datos en un único buscador',
    ],
    features: [
      'Código abierto y despliegue autoalojado',
      'Conectores para herramientas de trabajo habituales',
      'Respuestas con citas a los documentos de origen',
      'Búsqueda semántica sobre el contenido indexado',
      'Control de permisos según la fuente conectada',
    ],
    pros: [
      'Open source: sin coste de licencia y con código auditable',
      'Puede autoalojarse, útil para datos sensibles',
      'Evita la dependencia de un proveedor único',
    ],
    cons: [
      'El autoalojamiento exige recursos y mantenimiento técnico',
      'El coste real incluye infraestructura y modelos usados',
      'Menos pulido que las alternativas comerciales cerradas',
    ],
    pricingNote:
      'Danswer es un proyecto de código abierto, por lo que el software puede usarse sin coste de licencia si se autoaloja; los gastos vienen de la infraestructura y de los modelos que se utilicen. Suele existir además una opción gestionada en la nube de pago.',
    faqs: [
      {
        question: '¿Qué es Danswer?',
        answer:
          'Danswer es una herramienta de código abierto que permite preguntar en lenguaje natural sobre el conocimiento interno de una organización. Conecta e indexa fuentes como documentación, chats o tickets, y responde citando los documentos en los que se apoya.',
      },
      {
        question: '¿Danswer es gratis?',
        answer:
          'El proyecto es de código abierto y puede usarse sin coste de licencia si lo despliegas en tu propia infraestructura. Eso sí, asumes los gastos de servidores y del uso de modelos. También suele haber una versión gestionada de pago.',
      },
      {
        question: '¿Se puede autoalojar Danswer?',
        answer:
          'Sí, esa es una de sus principales ventajas. Al ser open source, puede instalarse en servidores propios, lo que resulta interesante para organizaciones con requisitos estrictos de privacidad o que prefieren no enviar su documentación interna a servicios externos.',
      },
    ],
  },
  'You.com': {
    name: 'You.com',
    tagline: 'Buscador con IA que responde con fuentes y modo conversacional',
    intro:
      'You.com es un buscador que combina resultados web tradicionales con respuestas generadas por inteligencia artificial. En lugar de devolver solo una lista de enlaces, elabora respuestas en lenguaje natural apoyadas en fuentes citadas y permite continuar la búsqueda en forma de conversación. Ofrece además distintos modos de uso y acceso a varios modelos de lenguaje según el plan contratado.',
    useCases: [
      'Buscar información y obtener una respuesta resumida',
      'Investigar un tema consultando varias fuentes citadas',
      'Hacer búsquedas de seguimiento sin repetir el contexto',
      'Comparar respuestas de distintos modelos de lenguaje',
      'Buscar con más privacidad que en buscadores tradicionales',
    ],
    features: [
      'Respuestas generadas con citación de fuentes',
      'Búsqueda conversacional con contexto entre preguntas',
      'Acceso a varios modelos de lenguaje en planes de pago',
      'Distintos modos de búsqueda según la necesidad',
      'Enfoque en la privacidad del usuario',
    ],
    pros: [
      'Las respuestas incluyen fuentes verificables',
      'Combina búsqueda web y chat en una misma interfaz',
      'Permite probarlo sin pagar nada',
    ],
    cons: [
      'El plan gratuito limita las consultas avanzadas',
      'Las respuestas generadas pueden contener errores',
      'El índice web es menor que el de los grandes buscadores',
    ],
    pricingNote:
      'You.com funciona con un modelo freemium: ofrece búsqueda gratuita con límites en las funciones de IA y planes de suscripción que dan más consultas y acceso a modelos avanzados. Los planes de pago suelen rondar los 15-20 euros al mes.',
    faqs: [
      {
        question: '¿Qué es You.com?',
        answer:
          'You.com es un buscador con inteligencia artificial que responde en lenguaje natural apoyándose en resultados web y citando sus fuentes. Permite seguir preguntando en forma de conversación y, en sus planes de pago, acceder a distintos modelos de lenguaje.',
      },
      {
        question: '¿You.com es gratis?',
        answer:
          'Sí, se puede usar gratis con límites en las funciones de inteligencia artificial y en el número de consultas avanzadas. Existen suscripciones de pago que amplían el uso y dan acceso a modelos más potentes. Consulta su web para las tarifas actuales.',
      },
      {
        question: '¿You.com funciona en español?',
        answer:
          'Sí, permite buscar y recibir respuestas en español, además de otros idiomas. Como en cualquier respuesta generada por IA, conviene comprobar las fuentes citadas antes de dar por buena una información, especialmente si es un dato sensible o reciente.',
      },
    ],
  },
  Phind: {
    name: 'Phind',
    tagline: 'Buscador con IA orientado a programadores y preguntas técnicas',
    intro:
      'Phind es un buscador con inteligencia artificial pensado específicamente para desarrolladores. Responde a preguntas técnicas y de programación con explicaciones, ejemplos de código y enlaces a las fuentes utilizadas, en lugar de limitarse a devolver una lista de resultados. Es una alternativa a buscar en foros y documentación cuando se necesita resolver un error o entender cómo usar una biblioteca concreta.',
    useCases: [
      'Resolver errores de programación con explicaciones y código',
      'Entender cómo usar una biblioteca o framework',
      'Buscar ejemplos de código con contexto explicado',
      'Comparar enfoques técnicos antes de implementar algo',
      'Consultar documentación técnica sin abrir varias pestañas',
    ],
    features: [
      'Respuestas técnicas con ejemplos de código',
      'Citación de las fuentes y documentación consultadas',
      'Búsqueda conversacional con contexto de seguimiento',
      'Modelos orientados a razonamiento sobre código',
      'Interfaz pensada para el flujo de trabajo de desarrollo',
    ],
    pros: [
      'Respuestas mucho más útiles que un buscador genérico para código',
      'Incluye fuentes, lo que facilita verificar la solución',
      'Se puede usar gratis para consultas habituales',
    ],
    cons: [
      'El plan gratuito limita las consultas con modelos avanzados',
      'Puede generar código incorrecto que hay que revisar',
      'Menos útil fuera del ámbito técnico',
    ],
    pricingNote:
      'Phind sigue un modelo freemium: permite un número de búsquedas gratuitas al día y ofrece una suscripción de pago con más consultas y acceso a modelos más potentes. El plan de pago suele situarse en torno a los 20 euros mensuales.',
    faqs: [
      {
        question: '¿Qué es Phind?',
        answer:
          'Phind es un buscador con inteligencia artificial orientado a programadores. Responde preguntas técnicas con explicaciones, fragmentos de código y enlaces a las fuentes consultadas, en lugar de devolver simplemente una lista de resultados como un buscador tradicional.',
      },
      {
        question: '¿Phind es gratis?',
        answer:
          'Sí, ofrece un uso gratuito con un número limitado de consultas diarias, especialmente con sus modelos más avanzados. Para un uso intensivo hay una suscripción de pago. Revisa su web para conocer los límites y precios en vigor.',
      },
      {
        question: '¿Phind es mejor que buscar en Google para programar?',
        answer:
          'Para dudas técnicas concretas suele ser más directo, porque sintetiza la respuesta y muestra código con sus fuentes. Aun así, puede equivocarse, así que conviene revisar el código antes de usarlo y contrastar con la documentación oficial.',
      },
    ],
  },
};
