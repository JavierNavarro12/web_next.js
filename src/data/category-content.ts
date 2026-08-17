import type { CategoryContent, SubcategoryContent } from '../types/tool';

/**
 * Textos propios de cada categoría y subcategoría.
 * Sin esto, /categoria/* servía el mismo HTML que la portada.
 */
export const categoryContent: CategoryContent[] = [
  {
    cat: 'Generativa',
    title: 'Las mejores herramientas de IA generativa',
    intro:
      'La IA generativa agrupa los modelos capaces de crear contenido nuevo a partir de una instrucción escrita: textos, imágenes, voces, vídeos o código fuente. Es la familia más visible de la inteligencia artificial actual y la que más ha cambiado el día a día de quien escribe, diseña, programa o produce contenido audiovisual. Aquí encontrarás desde grandes modelos de lenguaje como ChatGPT, Claude o Gemini hasta generadores de imagen como Midjourney o Stable Diffusion, sintetizadores de voz, motores de vídeo y asistentes de programación que completan código mientras escribes.',
    body: 'Antes de elegir, conviene tener claro qué vas a generar y con qué frecuencia. Para uso puntual, casi cualquier herramienta con plan gratuito sirve; para trabajo profesional pesan más la calidad del resultado, el control sobre el estilo, los derechos de uso comercial del material generado y la posibilidad de integrarla vía API en tus procesos. Si trabajas con datos sensibles, revisa qué hace cada proveedor con tus entradas. Y si necesitas volumen, compara cuántas generaciones incluye cada plan y si permite ejecutar el modelo en local.',
    faqs: [
      {
        question: '¿Qué es exactamente la IA generativa?',
        answer:
          'Es el conjunto de modelos entrenados para producir contenido original en lugar de limitarse a clasificar o predecir. A partir de una instrucción en lenguaje natural devuelven un texto, una imagen, un archivo de audio, un vídeo o un fragmento de código que no existía antes. Aprenden patrones de enormes cantidades de ejemplos y los recombinan para generar resultados nuevos.',
      },
      {
        question: '¿Hay herramientas de IA generativa gratis?',
        answer:
          'Sí. La mayoría de los grandes servicios ofrecen un nivel gratuito con límites de uso diario, y modelos abiertos como Stable Diffusion o LLaMA pueden ejecutarse en tu propio equipo sin coste de licencia. El plan gratuito suele bastar para probar y para necesidades ocasionales; el trabajo continuado casi siempre acaba requiriendo una suscripción.',
      },
      {
        question: '¿Puedo usar comercialmente lo que genero con estas herramientas?',
        answer:
          'Depende de cada servicio y de su licencia, no de la tecnología. Algunos ceden los derechos del resultado al usuario incluso en planes gratuitos, otros solo en los de pago y otros restringen ciertos usos. Consulta siempre los términos concretos antes de publicar material generado en campañas, productos o publicaciones comerciales.',
      },
    ],
  },
  {
    cat: 'Chatbots',
    title: 'Los mejores chatbots y asistentes de IA conversacional',
    intro:
      'Un chatbot de IA es una interfaz de conversación que entiende lenguaje natural y responde con criterio, no con respuestas enlatadas. En esta categoría conviven tres mundos distintos: los asistentes personales que usas para resolver dudas, escribir o buscar información; los chatbots empresariales que atienden a clientes y filtran incidencias en soporte; y los agentes autónomos, capaces de descomponer un objetivo en tareas y ejecutarlas encadenando herramientas. Todos parten de la misma base conversacional, pero el propósito y el nivel de autonomía cambian por completo.',
    body: 'Para uso personal, lo que decide suele ser la calidad de las respuestas, si accede a internet y cuánto contexto es capaz de mantener en una conversación larga. En atención al cliente importan otras cosas: integración con tu CRM y tu ticketing, escalado a un agente humano cuando el bot no llega, idiomas soportados y capacidad de alimentarse de tu documentación. Si te planteas un agente autónomo, asume que necesitará supervisión: cuanta más libertad le das para actuar, más caro sale un error no detectado.',
    faqs: [
      {
        question: '¿Qué diferencia hay entre un chatbot y un agente autónomo?',
        answer:
          'El chatbot responde a lo que le preguntas y espera tu siguiente mensaje. El agente autónomo recibe un objetivo, lo divide en pasos, decide qué herramientas usar y los ejecuta sin pedirte permiso en cada uno, revisando su propio avance. Gana en autonomía, pero también en probabilidad de desviarse, así que conviene acotar bien su alcance.',
      },
      {
        question: '¿Merece la pena poner un chatbot de IA en mi web?',
        answer:
          'Tiene sentido si recibes muchas consultas repetitivas que ya están respondidas en tu documentación. Un bot bien alimentado resuelve buena parte de ellas en el momento y deja a tu equipo las que de verdad requieren criterio. Si tu volumen es bajo o cada consulta es distinta, el esfuerzo de montarlo y mantenerlo rara vez compensa.',
      },
      {
        question: '¿Los chatbots de IA se inventan respuestas?',
        answer:
          'Pueden hacerlo. Los modelos de lenguaje generan la continuación más probable, y cuando no tienen el dato pueden producir algo verosímil pero falso. El riesgo baja mucho cuando el bot consulta una base documental propia y cita sus fuentes, pero nunca desaparece: en contextos críticos conviene revisar las respuestas.',
      },
    ],
  },
  {
    cat: 'Negocios',
    title: 'Herramientas de IA para empresas y productividad',
    intro:
      'Aquí entra la IA que no genera contenido llamativo pero ahorra horas cada semana: la que conecta aplicaciones y automatiza flujos, la que redacta y resume dentro de tu suite ofimática, la que convierte una tabla en un cuadro de mando, la que ordena proyectos y la que revisa contratos. Encontrarás plataformas de automatización como Zapier, Make o n8n, copilotos integrados en Microsoft 365 o Notion, herramientas de análisis como Power BI o Tableau, gestores de proyectos con IA y soluciones legales especializadas como Harvey o Luminance.',
    body: 'El criterio principal no es cuál es la herramienta más potente, sino cuál encaja con lo que ya usas. Una IA que no se integra con tu correo, tu CRM o tu almacenamiento acaba generando trabajo manual en vez de quitarlo. Mira también quién la va a usar: si tu equipo no es técnico, prioriza interfaces visuales sobre plataformas que exigen configurar lógica compleja. Y empieza automatizando un proceso concreto y medible antes de rediseñar toda la operativa de golpe.',
    faqs: [
      {
        question: '¿Por dónde empiezo a aplicar IA en mi empresa?',
        answer:
          'Por una tarea repetitiva, frecuente y con un resultado fácil de comprobar: clasificar correos entrantes, resumir reuniones, generar primeros borradores de informes o pasar datos de un sistema a otro. Si funciona, tendrás una mejora medible y un caso interno con el que convencer al resto. Empezar por el proceso más crítico suele salir mal.',
      },
      {
        question: '¿Es segura la IA con datos confidenciales de la empresa?',
        answer:
          'Depende del proveedor y del plan contratado. Las versiones empresariales suelen comprometerse por escrito a no entrenar con tus datos y ofrecen alojamiento en regiones concretas, algo relevante con el RGPD. Las versiones gratuitas no siempre dan esas garantías. Revisa el acuerdo de tratamiento de datos antes de subir información sensible.',
      },
      {
        question: '¿Qué tareas de oficina conviene automatizar primero?',
        answer:
          'Las que hoy hace una persona copiando y pegando entre herramientas: alta de clientes, notificaciones, informes recurrentes, seguimiento de facturas o traspaso de formularios al CRM. Son procesos con reglas claras, mucho volumen y poco valor añadido, justo donde la automatización rinde antes y con menos riesgo.',
      },
    ],
  },
  {
    cat: 'DevTools',
    title: 'Herramientas de IA para desarrolladores',
    intro:
      'La IA se ha instalado en el ciclo de desarrollo completo: escribe código contigo en el editor, propone tests para las funciones que acabas de crear y revisa cada pull request buscando fallos y deuda técnica. En esta categoría encontrarás asistentes de programación como GitHub Copilot, Cursor o Tabnine, herramientas de testing automatizado como Codium, Diffblue o Mabl, y plataformas de análisis estático como SonarQube o DeepSource que vigilan la calidad del repositorio sin que nadie tenga que pedirlo.',
    body: 'Al elegir, mira primero si soporta bien tu stack: la calidad de las sugerencias cae mucho en lenguajes poco representados en el entrenamiento. Después, la integración con tu editor y tu CI, porque una herramienta que exige salir del flujo de trabajo acaba sin usarse. En equipos con código privado, comprueba si el proveedor permite despliegue autoalojado o garantiza que tus repositorios no alimentan sus modelos. Y mide el resultado: más código generado no equivale a más software entregado.',
    faqs: [
      {
        question: '¿Sustituirá la IA a los programadores?',
        answer:
          'No a corto plazo. La IA acelera mucho la parte mecánica —boilerplate, tests, refactors, funciones conocidas— pero sigue necesitando a alguien que decida la arquitectura, entienda el dominio, valide lo generado y asuma la responsabilidad de lo que se despliega. Lo que sí cambia es el reparto del tiempo dentro del trabajo diario.',
      },
      {
        question: '¿Es fiable el código que genera la IA?',
        answer:
          'Es un buen punto de partida, no un resultado final. Suele funcionar, pero puede incluir dependencias innecesarias, casos límite sin cubrir o patrones inseguros que en una lectura rápida pasan desapercibidos. Trátalo como código de un compañero júnior: útil, rápido, y siempre sujeto a revisión y tests antes de entrar en producción.',
      },
      {
        question: '¿Qué herramientas de IA hay para hacer tests?',
        answer:
          'Existen dos enfoques. Uno genera tests unitarios a partir del código existente, analizando ramas y casos límite. El otro cubre el extremo a extremo: define flujos de interfaz y mantiene los selectores cuando la UI cambia, reduciendo los tests frágiles. La elección depende de dónde tengas hoy el mayor coste de mantenimiento.',
      },
    ],
  },
  {
    cat: 'Salud',
    title: 'Inteligencia artificial aplicada a la salud y la medicina',
    intro:
      'En sanidad la IA no reemplaza al médico: le da una segunda lectura. Los sistemas de esta categoría detectan hallazgos en radiografías y TAC, priorizan casos urgentes en la lista de trabajo del radiólogo, analizan muestras de anatomía patológica, orientan al paciente sobre sus síntomas antes de acudir a consulta y aceleran la investigación biomédica prediciendo estructuras de proteínas o cribando compuestos. Verás herramientas clínicas como Aidoc, PathAI o Lunit junto a proyectos de investigación como AlphaFold o BioGPT.',
    body: 'Aquí los criterios de elección no son los de una app cualquiera. Lo que importa es si el sistema tiene marcado CE o autorización sanitaria para el uso concreto que le vas a dar, si hay estudios revisados que respalden su rendimiento en poblaciones parecidas a la tuya, y si se integra con el PACS y la historia clínica sin obligar a duplicar trabajo. Para el paciente, las herramientas de síntomas orientan, pero no diagnostican: cualquier decisión clínica sigue siendo del profesional.',
    faqs: [
      {
        question: '¿Puede la IA diagnosticar enfermedades?',
        answer:
          'Puede detectar patrones y señalar hallazgos sospechosos con mucha precisión en tareas concretas, sobre todo en imagen médica, pero el diagnóstico es un acto clínico que integra historia, exploración y contexto del paciente. La IA funciona como apoyo a la decisión y como filtro de priorización, siempre bajo supervisión de un profesional sanitario.',
      },
      {
        question: '¿Son fiables las apps de IA para consultar síntomas?',
        answer:
          'Sirven para orientarse: te dicen si conviene acudir a urgencias, pedir cita o esperar. No sustituyen una consulta médica y pueden equivocarse, sobre todo con síntomas inespecíficos o cuadros poco frecuentes. Úsalas como una primera referencia, nunca para descartar un problema serio ni para automedicarte.',
      },
      {
        question: '¿Cómo se protegen los datos médicos con IA?',
        answer:
          'Los sistemas sanitarios se rigen por el RGPD y por normativa específica de datos de salud, considerados de categoría especial. En la práctica implica seudonimizar, cifrar, limitar el acceso al personal autorizado y firmar acuerdos de tratamiento con el proveedor. Muchas soluciones clínicas procesan además dentro de la infraestructura del propio hospital.',
      },
    ],
  },
  {
    cat: 'Educación',
    title: 'Herramientas de IA para educación y aprendizaje',
    intro:
      'La IA educativa cubre dos frentes: el del alumno y el del profesor. Al alumno le ofrece tutores que explican un concepto tantas veces como haga falta y con ejemplos distintos, corrección instantánea de textos y ejercicios de repaso adaptados a lo que falla. Al docente le quita horas de preparación y evaluación: generación de exámenes, adaptación de un mismo texto a varios niveles de lectura y feedback sobre redacciones. Están aquí Khanmigo, Socratic, Grammarly, Quizlet, MagicSchool AI y Diffit, entre otras.',
    body: 'Al escoger, pesa el idioma y el currículo: muchas herramientas están pensadas para el sistema educativo estadounidense y su encaje con el español y con la programación de aquí es desigual. Comprueba también qué datos recoge del alumnado, especialmente si son menores, y si permite al profesor revisar y editar lo que la IA propone antes de entregarlo. La regla práctica: la IA prepara el material y ahorra tiempo, pero la decisión pedagógica sigue siendo humana.',
    faqs: [
      {
        question: '¿Los alumnos pueden usar IA para hacer los deberes?',
        answer:
          'Pueden, y lo hacen. La cuestión es para qué: usarla para que le expliquen un concepto, comprobar un razonamiento o pedir ejercicios extra refuerza el aprendizaje; usarla para que entregue por ellos, lo anula. Muchos centros están reescribiendo sus normas para permitir lo primero y detectar lo segundo mediante trabajo en clase.',
      },
      {
        question: '¿Qué IA ayuda a los profesores a preparar clases?',
        answer:
          'Las hay para generar cuestionarios y exámenes a partir de un temario, adaptar un texto a distintos niveles de lectura, crear rúbricas de evaluación, preparar actividades y redactar feedback individualizado. El ahorro real está en la preparación de material y la corrección, que es donde se concentran las horas invisibles del trabajo docente.',
      },
      {
        question: '¿Puede la IA detectar si un texto lo ha escrito otra IA?',
        answer:
          'Los detectores existen, pero no son concluyentes. Producen falsos positivos que penalizan a alumnos que escribieron su texto, y fallan ante trabajos ligeramente reescritos. Como prueba de sanción es un terreno resbaladizo; funciona mejor combinar producción escrita en clase con defensas orales del trabajo entregado.',
      },
    ],
  },
  {
    cat: 'Finanzas',
    title: 'Herramientas de IA para finanzas e inversión',
    intro:
      'El sector financiero lleva décadas usando modelos, así que la IA aquí no es una novedad sino una capa más profunda. En esta categoría se agrupan sistemas que puntúan acciones y buscan señales en datos alternativos, motores de scoring que evalúan solvencia más allá del historial bancario tradicional, asistentes que revisan tus gastos y te ayudan a ahorrar, y plataformas antifraude que detectan operaciones anómalas en tiempo real. Aparecen nombres como Kavout, Numerai, Upstart, Zest AI, Cleo, Feedzai o FICO.',
    body: 'Distingue siempre entre herramienta para particular y herramienta institucional. Si eres inversor minorista, ninguna IA te garantiza rentabilidad: como mucho te da análisis y quita ruido, y la decisión y el riesgo siguen siendo tuyos. Si eres una entidad, lo que decide es la explicabilidad —tienes que poder justificar por qué se deniega un crédito—, la tasa de falsos positivos y el cumplimiento normativo. En ambos casos, desconfía de cualquier producto que prometa aciertos consistentes en el mercado.',
    faqs: [
      {
        question: '¿Sirve la IA para invertir en bolsa?',
        answer:
          'Sirve para procesar mucha más información de la que puede leer una persona: resultados, noticias, informes y datos alternativos. Lo que no hace es predecir el mercado de forma fiable. Puede afinar el análisis y ahorrar horas de investigación, pero cualquier producto que prometa rentabilidad segura debe tratarse con desconfianza.',
      },
      {
        question: '¿Cómo detecta la IA el fraude bancario?',
        answer:
          'Aprende cómo opera normalmente cada cliente —importes, horarios, comercios, dispositivos habituales— y marca lo que se desvía de ese patrón. Al evaluar cada operación en milisegundos, permite bloquear pagos sospechosos antes de que se completen. El reto no es detectar, sino hacerlo sin bloquear compras legítimas y generar fricción.',
      },
      {
        question: '¿Qué es el scoring crediticio con IA?',
        answer:
          'Es evaluar la solvencia de un solicitante con modelos que incorporan muchas más variables que el historial crediticio clásico. Puede dar acceso a financiación a personas sin historial previo, pero conlleva un riesgo real: si los datos de entrenamiento arrastran sesgos, el modelo los reproduce. Por eso la normativa exige que las decisiones sean explicables.',
      },
    ],
  },
  {
    cat: 'Creatividad',
    title: 'Herramientas de IA para diseño y creatividad',
    intro:
      'Esta categoría reúne la IA que ha entrado en el trabajo de diseño real, no en la demo. Sirve para maquetar piezas gráficas sin abrir un editor complejo, convertir un boceto en un prototipo de interfaz navegable, sacar una identidad visual y un logo en minutos o levantar una web entera describiendo lo que quieres. Verás herramientas como Canva Magic Studio, Adobe Firefly y Fotor en diseño gráfico, Figma AI, Uizard y Galileo AI en producto, Looka o Brandmark en branding, y Framer AI, Durable o Wix ADI en web.',
    body: 'El punto clave es a qué distancia del resultado final quieres llegar. Si necesitas una pieza rápida y correcta —un post, una portada, una landing sencilla—, estas herramientas resuelven solas. Si el resultado tiene que sostener una marca a largo plazo, funcionan mejor como acelerador de las fases iniciales: exploración de conceptos, variaciones, primeros borradores que después refina un diseñador. Comprueba siempre que puedas exportar en formatos editables y que la licencia permita uso comercial.',
    faqs: [
      {
        question: '¿Puede la IA diseñar un logo profesional?',
        answer:
          'Genera propuestas correctas y utilizables, especialmente para proyectos pequeños que necesitan una identidad rápida. Lo que no hace es el trabajo previo: entender el posicionamiento, el mercado y la competencia, y justificar por qué esa marca se ve así. Para un proyecto que quiere durar, sirve mejor como exploración inicial que como entrega final.',
      },
      {
        question: '¿Sustituye la IA a los diseñadores?',
        answer:
          'Se está comiendo la parte más mecánica del oficio: redimensionar piezas, generar variaciones, maquetar plantillas o recortar fondos. Lo que no toca es el criterio: decidir qué comunica una pieza, qué se descarta y por qué. El perfil que más valor gana es el que dirige la herramienta, no el que compite con ella en velocidad.',
      },
      {
        question: '¿Hay IA gratis para crear diseños?',
        answer:
          'Sí. Varias plataformas ofrecen planes gratuitos con funciones de IA limitadas en número de generaciones, resolución de exportación o acceso a recursos premium. Suelen bastar para uso personal y proyectos pequeños. Antes de usar el resultado en algo comercial, revisa la licencia del plan gratuito, que a menudo es más restrictiva.',
      },
    ],
  },
  {
    cat: 'Seguridad',
    title: 'IA para ciberseguridad y detección de amenazas',
    intro:
      'En ciberseguridad la IA aporta lo que no puede dar un equipo humano: vigilancia continua sobre volúmenes de tráfico y registros imposibles de revisar a mano. Los sistemas de esta categoría aprenden cómo se comporta normalmente una red y sus usuarios, y levantan la alarma cuando algo se sale de ese patrón, aunque el ataque sea nuevo y no exista una firma conocida. Encontrarás plataformas de detección como Darktrace, Vectra AI o Cylance, análisis de comportamiento con Exabeam o Securonix, y respuesta automatizada con CrowdStrike o SentinelOne.',
    body: 'Lo primero que hay que valorar es el ruido. Una herramienta que dispara cientos de alertas al día acaba ignorada, así que la tasa de falsos positivos importa tanto como la capacidad de detección. Después, el grado de automatización que estás dispuesto a conceder: aislar un equipo comprometido de forma automática corta el ataque, pero también puede tumbar un servicio crítico por un error. Y comprueba que se integre con tu SIEM y con las fuentes de datos que ya recoges.',
    faqs: [
      {
        question: '¿Cómo ayuda la IA en ciberseguridad?',
        answer:
          'Analiza continuamente tráfico, registros y comportamiento de usuarios para encontrar anomalías que una revisión manual no vería. Detecta ataques sin firma conocida, prioriza las alertas relevantes por encima del ruido y, cuando se le permite, ejecuta contenciones automáticas como aislar un equipo o bloquear una cuenta comprometida.',
      },
      {
        question: '¿Puede la IA detener un ataque automáticamente?',
        answer:
          'Sí. Las plataformas de respuesta automatizada pueden aislar un endpoint, cortar una sesión o revocar credenciales en segundos, mucho antes de que un analista reaccione. El riesgo es el falso positivo: una contención agresiva sobre un servicio legítimo causa una caída. Por eso lo habitual es empezar en modo aviso y automatizar solo lo ya validado.',
      },
      {
        question: '¿También usan IA los atacantes?',
        answer:
          'Sí, y es una de las razones por las que defenderse sin ella se ha vuelto difícil. La IA ha abaratado el phishing bien redactado y personalizado, la clonación de voz para fraudes de suplantación y la generación de variantes de malware. La defensa ya no puede depender de detectar errores de ortografía en un correo sospechoso.',
      },
    ],
  },
  {
    cat: 'Robótica',
    title: 'IA en robótica, industria y visión artificial',
    intro:
      'Esta categoría cubre la IA que trabaja con máquinas y con el mundo físico. Incluye plataformas de automatización industrial que conectan sensores de planta con modelos predictivos, robots capaces de moverse y manipular objetos en entornos no estructurados, sistemas de mantenimiento predictivo que anticipan la avería de un motor semanas antes de que ocurra, y visión artificial que inspecciona piezas en la línea de producción. Aparecen nombres como Siemens MindSphere, Spot, Covariant, Augury, Senseye, LandingLens o Cognex.',
    body: 'Aquí el proyecto casi nunca falla por el modelo, sino por los datos y la integración. Antes de elegir, comprueba si tu planta ya recoge la telemetría que el sistema necesita y durante cuánto tiempo, porque un modelo predictivo sin histórico no predice nada. Valora también la conectividad con tu SCADA o tu MES, si puede funcionar en el borde cuando la conexión falla, y quién mantiene el modelo cuando cambie el proceso. El retorno se mide en paradas evitadas y scrap reducido.',
    faqs: [
      {
        question: '¿Qué es el mantenimiento predictivo con IA?',
        answer:
          'Consiste en analizar vibración, temperatura, consumo o ruido de una máquina para detectar el deterioro antes de que provoque una avería. En lugar de sustituir piezas por calendario o repararlas cuando ya han fallado, se interviene justo cuando hace falta. Reduce paradas no planificadas y alarga la vida útil del equipo.',
      },
      {
        question: '¿Para qué sirve la visión artificial en la industria?',
        answer:
          'Sobre todo para control de calidad: detectar defectos, arañazos, piezas mal montadas o etiquetas incorrectas a la velocidad de la línea, sin la fatiga ni la variabilidad de la inspección humana. También se usa para leer códigos, medir dimensiones, guiar robots hacia una pieza y controlar seguridad en zonas restringidas.',
      },
      {
        question: '¿Necesito muchos datos para aplicar IA industrial?',
        answer:
          'Menos de lo que se cree en visión, donde a veces bastan cientos de imágenes bien etiquetadas por tipo de defecto. Más en predicción de averías, donde hace falta histórico que incluya fallos reales: si una máquina nunca ha fallado durante el periodo registrado, el modelo no tiene de qué aprender.',
      },
    ],
  },
  {
    cat: 'Multimodal',
    title: 'Las mejores IA multimodales',
    intro:
      'Una IA multimodal no se limita al texto: entiende imágenes, documentos, audio o vídeo dentro de la misma conversación. Puedes enseñarle la foto de un error en pantalla, una factura escaneada, un gráfico o un diagrama y pedirle que lo interprete y actúe en consecuencia. Es lo que ha convertido a los grandes asistentes en herramientas de trabajo reales. En esta categoría están los modelos comerciales que lideran el terreno, como ChatGPT, Gemini o Claude, junto a la investigación en entrada mixta con LLaVA, Fuyu, Kosmos o Flamingo.',
    body: 'Al comparar, fíjate en qué formatos acepta de verdad y con qué límites: no es lo mismo leer una imagen suelta que procesar un PDF de doscientas páginas con tablas. La precisión al extraer datos de documentos escaneados varía bastante entre modelos, y con letra manuscrita o escaneos malos todos pierden fiabilidad. Si vas a automatizar algo sobre estas capacidades, valida el resultado con tus propios documentos antes de confiar: una cifra mal leída se propaga sin avisar.',
    faqs: [
      {
        question: '¿Qué significa que una IA sea multimodal?',
        answer:
          'Que procesa varios tipos de entrada dentro del mismo modelo y los relaciona entre sí, en lugar de tratar cada uno por separado. Puede leer una imagen y un texto a la vez, razonar sobre ambos y responder teniendo en cuenta los dos. Es lo que permite preguntarle sobre una captura de pantalla o un documento escaneado.',
      },
      {
        question: '¿Qué puedo hacer con una IA que entiende imágenes?',
        answer:
          'Extraer datos de facturas y tickets, interpretar gráficos y tablas, describir una foto, entender un diagrama técnico, transcribir texto de un documento escaneado, resolver un ejercicio fotografiado o depurar un error a partir de una captura. En la práctica, cualquier tarea donde antes tenías que transcribir a mano lo que veías.',
      },
      {
        question: '¿Las IA multimodales entienden vídeo?',
        answer:
          'Cada vez más, aunque con límites. Muchas lo procesan como una secuencia de fotogramas más el audio, lo que funciona bien para resumir contenido o localizar un momento concreto, pero peor para razonar sobre movimiento fino o secuencias largas. La duración máxima admitida suele ser corta y varía mucho entre servicios.',
      },
    ],
  },
  {
    cat: 'OpenSource',
    title: 'Las mejores IA de código abierto',
    intro:
      'La IA de código abierto permite descargar el modelo, ejecutarlo en tu propia máquina o servidor y adaptarlo a tu caso sin depender de la API de nadie. Es la vía natural cuando trabajas con datos que no pueden salir de tu infraestructura, cuando el coste por llamada se dispara o cuando necesitas un modelo especializado. En esta categoría hay modelos de texto como LLaMA, Mistral, Falcon o BLOOM, multimodales como LLaVA, Fuyu o IDEFICS, y frameworks como Transformers, LangChain u OpenLLM para construir sobre ellos.',
    body: 'Antes de decidirte, lee la licencia con atención: abierto no siempre significa libre para uso comercial, y algunas imponen restricciones por número de usuarios o por tipo de aplicación. Después, dimensiona el hardware, porque un modelo grande necesita GPU con memoria suficiente y ahí es donde muchos proyectos se quedan. La regla útil: el modelo más pequeño que resuelva bien tu tarea concreta suele ganar al más grande, porque es más barato, más rápido y más fácil de mantener.',
    faqs: [
      {
        question: '¿Puedo ejecutar una IA en mi propio ordenador?',
        answer:
          'Sí. Los modelos abiertos pequeños y cuantizados funcionan en un portátil moderno con suficiente RAM, y en un equipo con GPU dedicada rinden con soltura. La calidad es menor que la de los grandes servicios comerciales, pero para muchas tareas concretas basta, y a cambio los datos no salen de tu máquina.',
      },
      {
        question: '¿Qué ventajas tiene una IA open source?',
        answer:
          'Privacidad, porque los datos nunca salen de tu entorno; control, porque puedes ajustar y especializar el modelo; coste predecible, sin pagar por llamada; y ausencia de dependencia de un proveedor que puede cambiar precios, condiciones o retirar un modelo. A cambio asumes el despliegue, el hardware y el mantenimiento.',
      },
      {
        question: '¿Son gratis los modelos de IA de código abierto?',
        answer:
          'El modelo se descarga sin coste de licencia, pero ejecutarlo no es gratis: consume GPU, electricidad o alquiler de servidores, y alguien tiene que mantenerlo. Para volúmenes altos suele salir más barato que pagar por API; para uso ocasional, casi nunca compensa frente a un servicio comercial.',
      },
    ],
  },
  {
    cat: 'IA Cognitiva y Razonamiento',
    title: 'IA cognitiva: memoria, razonamiento y agentes avanzados',
    intro:
      'Un modelo de lenguaje, por defecto, no recuerda nada de una sesión a otra y responde de forma directa aunque el problema requiera varios pasos. Esta categoría reúne las técnicas y herramientas que atacan esas dos limitaciones: sistemas de memoria persistente como Letta (antes MemGPT), MemO o Zep AI, que dan continuidad entre conversaciones; métodos de razonamiento estructurado como Tree-of-Thought, DSPy o GraphGPT, que fuerzan al modelo a descomponer el problema; y frameworks de agentes cognitivos como AutoGen, CrewAI o LangGraph.',
    body: 'Es la parte menos madura del ecosistema y conviene entrar con expectativas ajustadas. Si lo que necesitas es que un asistente recuerde preferencias entre sesiones, una capa de memoria bien diseñada aporta mucho con poco. Si lo que buscas es un sistema multiagente que se coordine solo, prepárate para depurar comportamientos difíciles de reproducir. Elige el framework por su capacidad de trazar y controlar el flujo de ejecución: sin observabilidad, cuando algo falla no sabrás por qué.',
    faqs: [
      {
        question: '¿Por qué una IA no recuerda conversaciones anteriores?',
        answer:
          'Porque los modelos de lenguaje no tienen memoria propia: solo ven lo que cabe en su ventana de contexto en esa llamada concreta. Cuando la sesión termina, ese contexto desaparece. Para dar continuidad hay que añadir una capa externa que guarde información relevante y la reinyecte cuando toca.',
      },
      {
        question: '¿Qué es el razonamiento estructurado en IA?',
        answer:
          'Es obligar al modelo a resolver un problema por pasos en vez de saltar directamente a la respuesta: explorar varias líneas, evaluarlas, descartar las malas y componer el resultado. En tareas de lógica, matemáticas o planificación mejora bastante la fiabilidad, a cambio de más tiempo de cómputo y más coste por consulta.',
      },
      {
        question: '¿Qué son los sistemas multiagente?',
        answer:
          'Son arquitecturas donde varios agentes con roles distintos —uno investiga, otro escribe, otro revisa— colaboran en una misma tarea y se pasan resultados. Funcionan bien cuando el trabajo se divide de forma natural, pero añaden complejidad, coste y modos de fallo nuevos: un agente que se equivoca contamina a los siguientes.',
      },
    ],
  },
  {
    cat: 'Desarrollo de Modelos',
    title: 'Herramientas para entrenar, evaluar y desplegar modelos de IA',
    intro:
      'Esta es la categoría de quien construye con IA, no solo de quien la usa. Cubre el ciclo completo de MLOps y LLMOps: seguimiento de experimentos y despliegue con Weights & Biases, MLflow, ClearML o SageMaker; evaluación y monitorización en producción con TruLens, Helicone, PromptLayer o Arize AI; y personalización con técnicas de fine-tuning como LoRA y pipelines de RAG construidos sobre LangChain, Haystack, Unstructured o RAGAS. Es la infraestructura que separa un prototipo que funciona en una demo de un sistema que aguanta en producción.',
    body: 'La decisión más importante llega antes de elegir herramienta: si tu problema se resuelve con RAG o necesita fine-tuning. RAG es lo adecuado cuando el modelo debe manejar información propia que cambia; el ajuste fino tiene sentido cuando necesitas un formato, tono o comportamiento específico que el prompt no logra. Una vez decidido, prioriza herramientas que te den trazabilidad real: sin registrar entradas, salidas y coste por llamada, es imposible saber si un cambio ha mejorado algo o lo ha roto.',
    faqs: [
      {
        question: '¿Qué diferencia hay entre RAG y fine-tuning?',
        answer:
          'RAG recupera fragmentos relevantes de tus documentos y se los pasa al modelo en cada consulta, así que la información puede actualizarse sin reentrenar nada. El fine-tuning modifica los pesos del modelo para fijar un comportamiento, estilo o formato. Para conocimiento propio y cambiante, RAG. Para forma de responder, fine-tuning.',
      },
      {
        question: '¿Cómo se evalúa si un modelo de IA funciona bien?',
        answer:
          'Con un conjunto de casos representativos de tu problema y métricas ligadas a él, no con impresiones sueltas. En sistemas RAG se mide si la respuesta se apoya en el contexto recuperado y si contesta lo que se preguntó. Además hay que monitorizar en producción: latencia, coste, tasa de error y quejas reales.',
      },
      {
        question: '¿Qué es MLOps?',
        answer:
          'Es el conjunto de prácticas para llevar modelos de aprendizaje automático a producción y mantenerlos ahí: versionar datos y modelos, automatizar entrenamiento y despliegue, monitorizar el rendimiento y reentrenar cuando los datos cambian. Es a los modelos lo que DevOps es al software, con el problema añadido de que los datos se degradan con el tiempo.',
      },
    ],
  },
  {
    cat: 'Marketing y Ventas',
    title: 'Herramientas de IA para marketing y ventas',
    intro:
      'En marketing la IA ha pasado de curiosidad a herramienta de producción diaria: redacta anuncios y artículos, genera variantes para testear, puntúa leads según su probabilidad de cerrar, personaliza correos a escala y escribe landings enteras a partir de una propuesta de valor. En esta categoría conviven generadores de contenido como Jasper, Copy.ai, Writesonic o Hypotenuse AI, plataformas de embudo como HubSpot AI, Salesforce Einstein AI o ChatSpot, y herramientas de email y páginas como Mailchimp AI, GetResponse AI o Unbounce Smart Copy.',
    body: 'El error más común es usarla para producir más contenido, sin más. Google no premia el volumen y el lector lo detecta. Rinde mejor donde hay repetición con criterio: generar veinte variantes de un anuncio para testear, adaptar un mismo mensaje a distintos segmentos, resumir llamadas de ventas o priorizar la lista de contactos. Al elegir, mira la integración con tu CRM y tu plataforma de email, la calidad del español —muchas escriben en un castellano traducido— y si permite fijar el tono de tu marca.',
    faqs: [
      {
        question: '¿Penaliza Google el contenido escrito con IA?',
        answer:
          'No por ser generado con IA, sino por ser malo. Google penaliza el contenido creado para manipular rankings sin aportar valor, lo escriba una máquina o una persona. Un texto útil, original y revisado posiciona igual. Publicar decenas de artículos genéricos sin edición es lo que acaba hundiendo un dominio.',
      },
      {
        question: '¿Qué IA es mejor para escribir copys publicitarios?',
        answer:
          'Las especializadas en marketing suelen dar mejores resultados que un asistente genérico porque incorporan estructuras probadas y generan muchas variantes de golpe para testear. Aun así, el factor decisivo es la calidad del brief: sin público, propuesta de valor y tono definidos, cualquier herramienta devuelve texto correcto pero intercambiable.',
      },
      {
        question: '¿Cómo ayuda la IA a cerrar más ventas?',
        answer:
          'Sobre todo priorizando. Puntúa los leads según su probabilidad real de conversión, señala cuáles se están enfriando, resume llamadas y correos para que nadie llegue a la reunión sin contexto y sugiere el siguiente paso. El comercial dedica su tiempo a las oportunidades vivas en lugar de repartirlo por igual.',
      },
    ],
  },
  {
    cat: 'Traducción y Localización Automática',
    title: 'Las mejores IA para traducir y localizar contenido',
    intro:
      'La traducción automática ya no suena a traducción automática. Los motores neuronales actuales entienden el contexto de la frase completa y producen textos que en muchos casos solo necesitan una revisión ligera. Esta categoría cubre tanto la traducción de texto —con DeepL, Google Translate, ModernMT o Amazon Translate— como la localización audiovisual: subtitulado automático y doblaje con voz sintética que clona el timbre del hablante original, con herramientas como Papercup, Dubverse, HeyGen o Subly AI.',
    body: 'Elige según lo que esté en juego. Para entender un correo o un documento interno, cualquier motor gratuito sobra. Para contenido publicado —web, producto, documentación legal— la traducción automática es un primer borrador que necesita revisión humana: los matices de registro, los nombres propios y la terminología de sector siguen siendo terreno de errores caros. Si traduces mucho y de forma continua, valora si el servicio permite glosarios propios y memoria de traducción, que es donde se nota la diferencia.',
    faqs: [
      {
        question: '¿Cuál es la mejor IA para traducir textos?',
        answer:
          'Depende del par de idiomas. Para las combinaciones europeas más habituales, los motores especializados suelen dar un resultado más natural y con mejor registro que los generalistas. Para idiomas menos frecuentes, los grandes servicios tienen más cobertura. Y para textos con jerga de sector, el que te deje definir un glosario propio.',
      },
      {
        question: '¿Puede la IA doblar vídeos a otro idioma?',
        answer:
          'Sí. Las herramientas actuales transcriben el audio, lo traducen y generan una voz sintética que puede conservar el timbre del hablante original, sincronizándola con el vídeo. El resultado es sólido para contenido formativo o corporativo. En material con carga emocional o interpretación, todavía se nota una entonación algo plana.',
      },
      {
        question: '¿La traducción automática necesita revisión humana?',
        answer:
          'Para uso interno, casi nunca. Para contenido publicado, sí. La máquina falla precisamente donde más caro sale: registro inadecuado, términos de sector traducidos literalmente, ambigüedades resueltas mal y matices legales. La práctica habitual es la posedición: la IA hace el grueso y una persona corrige y valida.',
      },
    ],
  },
  {
    cat: 'Ética y Detección de IA',
    title: 'Herramientas para detectar contenido generado con IA y auditar modelos',
    intro:
      'Cuanto más contenido sintético circula, más falta hace saber qué es real y por qué un modelo decide lo que decide. Esta categoría reúne dos respuestas a ese problema. Por un lado, los detectores de deepfakes y de contenido generado —Hive AI, AI or Not o Sensity AI—, que analizan imágenes, vídeo y audio buscando rastros de síntesis. Por otro, las plataformas de explicabilidad y auditoría como TruEra, Fiddler AI o Credo AI, que examinan modelos en producción para detectar sesgos, degradación y decisiones injustificables.',
    body: 'Si tu problema es verificar contenido, asume que ningún detector es concluyente: dan probabilidades, no veredictos, y fallan tanto en falsos positivos como en negativos. Sirven como señal dentro de un proceso de verificación, no como prueba. Si tu problema es de cumplimiento, el criterio cambia: necesitas herramientas que generen documentación auditable, midan sesgo por grupo protegido y detecten deriva del modelo con el tiempo, algo cada vez más exigible con el reglamento europeo de IA.',
    faqs: [
      {
        question: '¿Se puede detectar si una imagen la ha creado una IA?',
        answer:
          'A veces. Los detectores buscan artefactos y patrones estadísticos propios de la generación, y aciertan a menudo, pero no siempre. Una imagen editada, recomprimida o de un modelo reciente puede escapárseles, y también marcan como falsas fotos reales. Es una señal a valorar, nunca una prueba definitiva por sí sola.',
      },
      {
        question: '¿Qué es la explicabilidad en inteligencia artificial?',
        answer:
          'Es la capacidad de entender por qué un modelo ha tomado una decisión concreta: qué variables han pesado y en qué dirección. Resulta imprescindible cuando la decisión afecta a personas —un crédito denegado, una candidatura descartada— porque la normativa exige poder justificarla y el afectado tiene derecho a una explicación.',
      },
      {
        question: '¿Es obligatorio auditar los sistemas de IA en Europa?',
        answer:
          'El reglamento europeo de IA clasifica los sistemas por nivel de riesgo e impone obligaciones crecientes a los considerados de alto riesgo, como los usados en empleo, crédito, educación o servicios esenciales: documentación técnica, gestión de riesgos, supervisión humana y trazabilidad. Los sistemas de riesgo mínimo apenas tienen requisitos más allá de la transparencia.',
      },
    ],
  },
  {
    cat: 'Gestión del Conocimiento',
    title: 'IA para buscar y consultar tus documentos',
    intro:
      'El problema no suele ser que falte información, sino que está repartida entre cientos de PDF, wikis, correos y unidades compartidas donde nadie la encuentra. Esta categoría agrupa las herramientas que resuelven eso: por un lado, las que permiten preguntar directamente a tus documentos y obtener la respuesta con la cita de la página, como ChatPDF, AskYourPDF, Glean, Klu u Onyx. Por otro, los buscadores inteligentes que responden en lenguaje natural con fuentes enlazadas, como Perplexity, You.com o Phind.',
    body: 'Para consultas puntuales sobre un archivo suelto, una herramienta ligera de subir y preguntar es suficiente. Para una empresa, lo determinante es otra cosa: que se conecte a tus fuentes reales —Drive, SharePoint, Confluence, Slack— y, sobre todo, que respete los permisos de cada usuario, porque un buscador que enseña a todos lo que solo debían ver algunos es un incidente de seguridad. Exige también que cite la fuente de cada respuesta: sin cita, no hay forma de comprobar si se lo ha inventado.',
    faqs: [
      {
        question: '¿Cómo puedo preguntarle cosas a un PDF con IA?',
        answer:
          'Subiendo el documento a una herramienta que lo trocea, lo indexa y recupera los fragmentos relevantes para responder a cada pregunta, indicando en qué página está la respuesta. Funciona muy bien con informes, manuales o contratos largos. Con escaneos de mala calidad o tablas complejas, la extracción pierde fiabilidad.',
      },
      {
        question: '¿Es fiable un buscador con IA frente a Google?',
        answer:
          'Resuelve mejor las preguntas que requieren sintetizar varias fuentes, porque te da una respuesta redactada con enlaces en vez de diez pestañas. A cambio, puede resumir mal o apoyarse en una fuente floja. Para datos críticos, sigue las citas y compruébalas: si una respuesta no enlaza a nada verificable, desconfía.',
      },
      {
        question: '¿Cómo busca la IA dentro de los documentos de una empresa?',
        answer:
          'Se conecta a las fuentes internas, indexa el contenido y lo convierte en representaciones que permiten buscar por significado, no solo por palabra exacta. Al preguntar, recupera los fragmentos más relevantes y compone la respuesta citándolos. Las soluciones serias heredan los permisos de cada sistema, de modo que nadie ve lo que no debería.',
      },
    ],
  },
];

export const subcategoryContent: SubcategoryContent[] = [
  {
    cat: 'Generativa',
    sub: 'Texto',
    title: 'Las mejores IA para generar texto',
    intro:
      'Los modelos de lenguaje son la puerta de entrada a la IA para casi todo el mundo. Escriben, resumen, reescriben, traducen, corrigen y responden preguntas complejas a partir de una instrucción. Aquí encontrarás los grandes asistentes generalistas —ChatGPT, Claude, Gemini, Grok y DeepSeek entre ellos—, los modelos abiertos que puedes ejecutar por tu cuenta como LLaMA, Mistral, Falcon o Qwen, y los especializados en redacción, desde Jasper y Copy.ai para marketing hasta Sudowrite para narrativa o BioGPT para literatura biomédica.',
    body: 'La diferencia entre uno y otro se nota en tres cosas: cuánto texto puede manejar de una vez, cómo escribe en español y hasta qué punto sigue instrucciones largas sin desviarse. Para escritura creativa manda el estilo; para trabajo técnico, el rigor y la longitud de contexto; para producción de contenido a escala, la integración por API y el coste por palabra. Prueba el mismo encargo real en dos o tres candidatos: las diferencias entre ellos son mucho más visibles en tu caso que en cualquier comparativa genérica.',
  },
  {
    cat: 'Generativa',
    sub: 'Imágenes',
    title: 'Las mejores IA para generar imágenes',
    intro:
      'Generar una imagen a partir de una descripción escrita es, probablemente, la aplicación de IA que más ha cambiado el trabajo visual. Cada motor tiene su carácter: Midjourney destaca por su acabado estético, Stable Diffusion y FLUX por el control y la posibilidad de ejecutarlos en local, Ideogram por resolver el texto dentro de la imagen —el punto débil clásico del sector—, Adobe Firefly por su entrenamiento con material licenciado, y Leonardo AI, Recraft, Playground AI, DALL·E, Imagen, Seedream o Aurora por cubrir estilos y flujos de trabajo distintos.',
    body: 'Para elegir, empieza por el uso: si es material comercial, la licencia y el origen del entrenamiento pesan tanto como la calidad. Si necesitas coherencia de personaje o de marca entre varias imágenes, mira qué motores admiten referencias y ajuste fino. Si buscas control técnico —composición exacta, poses, inpainting—, los modelos abiertos con su ecosistema de extensiones ganan por goleada. Y si solo quieres resultados bonitos rápido y sin curva de aprendizaje, un servicio cerrado te ahorrará muchas horas.',
  },
  {
    cat: 'Generativa',
    sub: 'Audio / Voz',
    title: 'Las mejores IA para generar voz y audio',
    intro:
      'La síntesis de voz ha dejado atrás el tono robótico: hoy se generan locuciones con entonación natural, se clona una voz a partir de unos minutos de grabación y se compone música completa desde una descripción. En esta subcategoría están ElevenLabs y Resemble AI para clonación y voz realista, Murf, Play.ht, Lovo y Colossyan para locución corporativa, Descript para edición de audio y vídeo escribiendo texto, Speechify para escuchar documentos, Voicemod y Voice.ai para transformar la voz en directo, Dubverse para doblaje, y Suno o AudioCraft para música.',
    body: 'El criterio decisivo suele ser la naturalidad en español y, en concreto, el acento: muchos motores rinden mucho mejor en inglés y devuelven un castellano con entonación rara. Comprueba también el catálogo de voces disponibles, si permite ajustar ritmo, énfasis y pausas, y si el plan cubre uso comercial. Si vas a clonar una voz, asegúrate de tener el consentimiento explícito de su titular: es un requisito legal, y varias plataformas lo exigen con verificación antes de habilitar la función.',
  },
  {
    cat: 'Generativa',
    sub: 'Video',
    title: 'Las mejores IA para crear vídeos',
    intro:
      'Generar vídeo con IA ya no es una demo: se producen clips desde una descripción escrita, se anima una imagen fija y se crean presentadores sintéticos que hablan a cámara en varios idiomas. Aquí conviven dos enfoques distintos. El generativo puro, con Sora, Veo, Runway, Pika Labs, Kling, MiniMax o Google Flow, orientado a crear planos desde cero. Y el corporativo, con Synthesia, Colossyan, InVideo o Fliki, pensado para convertir un guion o un artículo en un vídeo formativo con avatar y subtítulos, sin cámara ni plató.',
    body: 'Piensa primero qué necesitas producir. Para formación interna, tutoriales o comunicación corporativa, un generador con avatar te da un resultado utilizable en minutos y sin equipo de rodaje. Para piezas creativas o publicitarias, los motores generativos dan planos impactantes pero exigen muchas iteraciones y todavía se les resiste la coherencia entre tomas y la duración larga. Mira siempre el límite de segundos por clip, la resolución de exportación y si el plan permite usar el resultado comercialmente.',
  },
  {
    cat: 'Generativa',
    sub: 'Código',
    title: 'Las mejores IA para programar y generar código',
    intro:
      'Los asistentes de código han pasado de autocompletar líneas a escribir funciones enteras, refactorizar módulos y explicar repositorios que no conoces. GitHub Copilot y Tabnine trabajan dentro de tu editor sugiriendo mientras escribes; Cursor lleva el modelo al centro del entorno de desarrollo; Claude y Gemini resuelven bien tareas largas de razonamiento sobre código; Codium, Testim y Diffblue se centran en generar tests; DeepSource revisa calidad; AskTheCode ayuda a entender un repositorio ajeno; y LangChain o Jules cubren la construcción de aplicaciones y agentes.',
    body: 'Lo primero que debes comprobar es el soporte de tu lenguaje y tu framework, porque la calidad de las sugerencias cae mucho fuera de lo más común. Después, dónde vive la herramienta: si no se integra en tu editor y tu flujo, no la usarás. Si trabajas con código propietario, revisa si el proveedor entrena con tus repositorios y si ofrece despliegue autoalojado. Y mantén la disciplina de revisar: el código generado compila y parece correcto, que es justo lo que hace peligroso no leerlo.',
  },
  {
    cat: 'Chatbots',
    sub: 'Asistentes personales',
    title: 'Los mejores asistentes personales de IA',
    intro:
      'Es la categoría que más gente usa a diario, muchas veces sin pensar que está usando IA. Incluye los grandes asistentes conversacionales —ChatGPT, Gemini, Claude, Grok— que resuelven dudas, escriben, programan y analizan documentos; los asistentes de voz integrados en el móvil y el altavoz, como Siri, Alexa o Assistant, orientados a tareas rápidas y control del hogar; Perplexity, centrado en buscar y responder con fuentes; y propuestas más personales como Pi o Replika, diseñadas para conversar en lugar de ejecutar encargos.',
    body: 'Elige según lo que hagas realmente con él. Si lo quieres para trabajar, mira la calidad al redactar en español, cuánto contexto aguanta sin perder el hilo y si puede leer tus archivos. Si lo quieres para el día a día, pesa más la integración con tu móvil, tu calendario y tu correo. Y si te importa la privacidad, revisa si tus conversaciones se usan para entrenar y si puedes desactivarlo: en la mayoría de servicios se puede, pero viene activado por defecto.',
  },
  {
    cat: 'Chatbots',
    sub: 'Chatbots empresariales',
    title: 'Los mejores chatbots de IA para empresas',
    intro:
      'Un chatbot empresarial no está para conversar, está para resolver. Se conecta a tu documentación, tu catálogo y tu sistema de tickets, atiende las consultas repetitivas a cualquier hora y escala al equipo humano cuando la cosa se complica. En esta subcategoría están plataformas de atención al cliente como Intercom, Zendesk, Ada o LivePerson, herramientas de conversión y ventas como Drift o ChatSpot, la capa de IA de Salesforce con Einstein, y modelos como Qwen o DeepSeek para quien prefiere construir su propio bot sobre una base abierta.',
    body: 'Lo que decide aquí no es lo bien que habla el bot, sino su integración. Debe leer tu base de conocimiento, consultar el estado de un pedido, abrir un ticket y pasar la conversación completa a un agente humano sin que el cliente tenga que repetirse. Mide el porcentaje de consultas resueltas sin intervención y la satisfacción tras la conversación, no el número de mensajes atendidos. Un bot que responde mucho y resuelve poco solo añade un obstáculo antes de llegar a una persona.',
  },
  {
    cat: 'Chatbots',
    sub: 'Agentes autónomos',
    title: 'Los mejores agentes de IA autónomos',
    intro:
      'Un agente autónomo no espera tu siguiente mensaje: recibe un objetivo, lo descompone en tareas, decide qué herramientas necesita —navegar, ejecutar código, llamar a una API— y va ejecutando mientras revisa su propio progreso. En esta subcategoría están los pioneros del enfoque, como AutoGPT, AgentGPT o MetaGPT, junto a las implementaciones integradas en los grandes asistentes, como ChatGPT Agents, Copilot Agents o xAI Agents, y los frameworks para construir los tuyos, como LangChain Agents.',
    body: 'Funcionan bien cuando la tarea es acotada, verificable y con un coste bajo si algo sale mal: recopilar información, rellenar una hoja de cálculo, procesar un lote de archivos. Se complican cuando el objetivo es ambiguo o cuando el agente puede tomar acciones irreversibles, porque un error temprano se arrastra por toda la cadena. Empieza siempre con permisos mínimos, revisa los pasos antes de darle autonomía real y calcula el coste: un agente que itera sin control puede gastar mucho más de lo previsto.',
  },
  {
    cat: 'Negocios',
    sub: 'Automatización de flujos',
    title: 'Las mejores herramientas de IA para automatizar flujos de trabajo',
    intro:
      'Son las herramientas que conectan tus aplicaciones y hacen que las cosas pasen solas: llega un formulario, se crea el contacto en el CRM, se envía el correo y se avisa al equipo en Slack, sin que nadie copie ni pegue nada. Zapier es la opción más accesible por su enorme catálogo de integraciones; Make destaca en flujos visuales con lógica compleja; n8n permite autoalojarlo y controlar dónde viven tus datos; Power Automate encaja si vives en el ecosistema Microsoft; e IFTTT, Manus o Trigger.dev cubren desde lo doméstico hasta lo técnico.',
    body: 'Elige por tres factores. Primero, si existe conector nativo con las aplicaciones que ya usas, porque construir una integración a mano te comerá el ahorro. Segundo, el modelo de precios: casi todas cobran por operación ejecutada, y un flujo mal diseñado que se dispara cada minuto puede salir caro. Tercero, quién lo va a mantener: si no hay perfil técnico en el equipo, prioriza interfaces visuales. Y automatiza primero el proceso más repetitivo y aburrido, no el más crítico.',
  },
  {
    cat: 'Negocios',
    sub: 'Ofimática inteligente',
    title: 'Las mejores herramientas de IA para ofimática y productividad',
    intro:
      'Aquí la IA no es una app aparte: vive dentro de las herramientas en las que ya trabajas. Microsoft 365 Copilot redacta en Word, resume hilos en Outlook y monta presentaciones desde un documento; Google Workspace Duet hace lo propio en Docs, Gmail y Sheets; Notion AI resume, traduce y estructura dentro de tus páginas; Gamma convierte un texto en una presentación presentable; Magic Write acelera la escritura en Canva; y Canva Magic Studio cubre la parte visual sin salir del mismo lienzo.',
    body: 'El criterio principal es dónde tienes ya los documentos y el correo, porque el valor de estas herramientas nace de acceder a tu contexto real: tus archivos, tus reuniones, tus hilos. Una IA ofimática desconectada de tus datos no pasa de asistente genérico. Valora también el coste por usuario y mes, que en despliegues grandes se acumula rápido, y haz una prueba con un equipo pequeño antes de comprar licencias para toda la plantilla: la adopción real suele ser menor de lo previsto.',
  },
  {
    cat: 'Negocios',
    sub: 'Análisis de datos',
    title: 'Las mejores herramientas de IA para análisis de datos',
    intro:
      'El análisis de datos con IA busca lo mismo de siempre por un camino más corto: que cualquiera pueda preguntar en lenguaje natural y obtener el gráfico o la cifra sin escribir una consulta. Power BI y Tableau han incorporado capas de IA que resumen tendencias, detectan anomalías y responden preguntas sobre el cuadro de mando; ThoughtSpot está construido directamente sobre la búsqueda en lenguaje natural; Perplexity y AlphaSense ayudan a investigar mercados y documentos financieros; y Kavout aplica modelos al análisis de mercado.',
    body: 'Antes de mirar herramientas, mira tus datos. Ninguna IA arregla un modelo de datos desordenado, con métricas duplicadas y sin definiciones compartidas: si en tu empresa cada departamento calcula la facturación de forma distinta, la IA solo acelerará la confusión. Una vez ordenado eso, lo que importa es la conexión con tus fuentes, la gobernanza de permisos y si el sistema muestra cómo ha calculado cada resultado. Un número sin trazabilidad no es un análisis: es una afirmación.',
  },
  {
    cat: 'Negocios',
    sub: 'Gestión de proyectos',
    title: 'Las mejores herramientas de IA para gestión de proyectos',
    intro:
      'Los gestores de proyectos han incorporado IA para reducir el trabajo administrativo que rodea al trabajo real: resumir el estado de un proyecto sin pedir informes a nadie, generar subtareas a partir de un objetivo, redactar actualizaciones para el cliente, detectar tareas atascadas y estimar plazos a partir del histórico del equipo. ClickUp, Asana, Monday.com y Trello ofrecen versiones de estas capacidades integradas en el mismo tablero donde ya vive el trabajo del equipo.',
    body: 'El valor depende por completo de la disciplina previa: la IA resume lo que hay en la herramienta, así que si tu equipo no actualiza las tareas, el resumen será tan pobre como los datos. Antes de cambiar de plataforma por su IA, pregúntate si el problema es de herramienta o de hábitos. Si ya usas una y el equipo la mantiene al día, activar sus funciones de IA suele dar más retorno que migrar. Comprueba también que el resumen automático sea editable antes de enviarlo a un cliente.',
  },
  {
    cat: 'Negocios',
    sub: 'IA legal',
    title: 'Las mejores herramientas de IA para el sector legal',
    intro:
      'La IA legal ataca el cuello de botella del despacho: revisar cantidades enormes de documentación. Harvey trabaja sobre investigación jurídica y redacción para grandes firmas; Luminance analiza contratos en due diligence y detecta cláusulas anómalas en un volumen que ningún equipo podría leer entero; Spellbook asiste en la redacción y negociación de contratos dentro del propio procesador de textos; Evisort y LawGeex automatizan la revisión y el ciclo de vida contractual; y DoNotPay se orienta al usuario particular en trámites y reclamaciones cotidianas.',
    body: 'Aquí el criterio es la verificabilidad. Una IA legal solo sirve si cita la fuente exacta —la cláusula, el artículo, la sentencia— y permite comprobarla en un clic, porque la responsabilidad profesional sigue siendo del abogado. Comprueba también el encaje con el derecho español y europeo: muchas herramientas están entrenadas principalmente con derecho anglosajón y su utilidad aquí es limitada. Y valora el tratamiento de la confidencialidad del cliente: los documentos que subes no deberían alimentar el modelo de nadie.',
  },
  {
    cat: 'DevTools',
    sub: 'Asistentes de código',
    title: 'Los mejores asistentes de IA para programar',
    intro:
      'Un asistente de código vive dentro de tu editor y trabaja con el contexto de tu proyecto: completa lo que estás escribiendo, propone la función entera, la refactoriza cuando se lo pides y explica un fragmento ajeno. GitHub Copilot es el más extendido y el que mejor se integra en los editores habituales; Cursor reconstruye el propio IDE alrededor del modelo; Claude destaca en tareas largas que exigen razonar sobre varios archivos; Tabnine ofrece despliegue privado; y Ghostwriter o Bolt apuntan a prototipar rápido desde el navegador.',
    body: 'Lo que más se nota en el día a día es cuánto contexto del repositorio ve la herramienta: un asistente que solo lee el archivo abierto sugiere código que ignora tus convenciones y tus utilidades ya existentes. Valora también la latencia, porque una sugerencia que llega tarde estorba más que ayuda, y la política de datos si tu código es privado. Con equipos grandes, acordar cómo se revisa el código generado importa más que la herramienta elegida: el cuello de botella se desplaza a la revisión.',
  },
  {
    cat: 'DevTools',
    sub: 'Testing y QA',
    title: 'Las mejores herramientas de IA para testing y QA',
    intro:
      'Escribir tests es lo primero que se sacrifica cuando aprieta la fecha de entrega, y ahí es donde la IA aporta valor real. Codium analiza tu código y propone tests que cubren casos límite que no habías considerado; Diffblue genera tests unitarios para Java de forma automática; Testim y Mabl se ocupan del extremo a extremo, manteniendo los tests de interfaz cuando la UI cambia y evitando que se rompan por un selector movido; y Testbot cubre la automatización de pruebas dentro del flujo de trabajo del equipo.',
    body: 'Decide primero dónde está tu dolor. Si tienes cobertura baja en lógica de negocio, un generador de tests unitarios te da recorrido inmediato. Si tus tests de interfaz se rompen cada semana por cambios triviales, una herramienta de mantenimiento automático de selectores ahorra más. Y recuerda que la IA genera tests que reflejan lo que el código hace, no lo que debería hacer: si hay un bug, puede fijarlo como comportamiento esperado. Los tests generados también se revisan.',
  },
  {
    cat: 'DevTools',
    sub: 'Análisis estático',
    title: 'Las mejores herramientas de análisis estático con IA',
    intro:
      'El análisis estático revisa el código sin ejecutarlo, buscando errores, vulnerabilidades, duplicidad y deuda técnica antes de que lleguen a producción. SonarQube es el referente en entornos empresariales, con reglas para prácticamente cualquier lenguaje y despliegue autoalojado; DeepSource añade una capa de detección más inteligente y correcciones automáticas de los problemas más comunes; y CodeClimate o CodeFactor puntúan la salud del repositorio e integran el análisis en cada pull request para bloquear lo que empeora la base.',
    body: 'El problema clásico de estas herramientas es el ruido: si el primer análisis te devuelve miles de avisos en un proyecto con años de historia, el equipo los ignorará todos. La estrategia que funciona es aplicar la regla solo al código nuevo o modificado, dejando la deuda antigua congelada, y endurecer los criterios poco a poco. Al elegir, comprueba la cobertura de tus lenguajes, la integración con tu CI y si puedes ajustar las reglas: una configuración por defecto rara vez encaja con tu proyecto.',
  },
  {
    cat: 'Salud',
    sub: 'Diagnóstico asistido',
    title: 'Las mejores IA para diagnóstico médico asistido',
    intro:
      'Estos sistemas no diagnostican: dan al clínico una segunda lectura y ordenan su trabajo. Aidoc revisa estudios de urgencias y sube al principio de la lista los casos con hallazgos críticos, para que el radiólogo los vea antes; PathAI aporta análisis de anatomía patológica sobre muestras digitalizadas; Lunit y Zebra Medical detectan hallazgos en radiografía y TAC; y MedPaLM representa la línea de modelos de lenguaje entrenados específicamente sobre conocimiento médico y preguntas clínicas.',
    body: 'El criterio de selección aquí es regulatorio antes que técnico: comprueba si el sistema tiene marcado CE para la indicación concreta que le vas a dar y si existen estudios que lo validen en poblaciones comparables a la tuya. Después viene la integración: una herramienta que obligue a exportar imágenes manualmente no se usará. Y define desde el principio el papel del sistema, que debe ser el de apoyo y priorización, con el juicio clínico y la responsabilidad siempre en manos del profesional.',
  },
  {
    cat: 'Salud',
    sub: 'Imágenes médicas',
    title: 'Las mejores IA para análisis de imágenes médicas',
    intro:
      'La imagen médica es el terreno donde la IA sanitaria lleva más recorrido, porque es una tarea de reconocimiento de patrones con datos abundantes y bien etiquetados. Aidoc se centra en la detección de hallazgos urgentes en TAC; Lunit y Zebra Medical trabajan sobre radiografía y cribado, con especial peso en mama y tórax; Enlitic organiza y clasifica automáticamente los estudios que entran en el PACS; y PathAI lleva el mismo enfoque a la patología digital sobre muestras de tejido.',
    body: 'Al valorar una solución, mira el rendimiento sobre tu población y tu equipamiento: un modelo entrenado con imágenes de otros escáneres y otra demografía puede caer notablemente en tu servicio. Exige métricas de sensibilidad y especificidad para la indicación concreta, no cifras globales de marketing. Y valora el impacto real en el flujo: el beneficio no suele estar en detectar lo que el radiólogo vería igualmente, sino en reordenar la lista de trabajo para que lo urgente se lea primero.',
  },
  {
    cat: 'Salud',
    sub: 'Síntomas',
    title: 'Las mejores apps de IA para consultar síntomas',
    intro:
      'Los verificadores de síntomas hacen una pregunta sencilla con implicaciones serias: dado lo que sientes, ¿debes ir a urgencias, pedir cita o esperar? Ada Health guía con un cuestionario estructurado y sugiere causas posibles junto a un nivel de urgencia; Buoy Health hace lo propio en formato conversacional; Your.MD orienta sobre síntomas cotidianos; y eMed enlaza la orientación con la consulta médica a distancia, cerrando el paso de la duda a la atención real.',
    body: 'Estas herramientas sirven para orientar y para decidir el siguiente paso, no para diagnosticar ni para tranquilizarse ante algo que preocupa. Fallan más con síntomas inespecíficos y cuadros poco frecuentes, y ninguna sustituye una exploración. Al elegir una, comprueba que esté disponible en español, que indique con claridad cuándo hay que buscar atención inmediata y qué hace con tus datos de salud, que son especialmente protegidos por el RGPD. Ante cualquier síntoma de alarma, la respuesta es siempre acudir al médico.',
  },
  {
    cat: 'Salud',
    sub: 'Investigación biomédica',
    title: 'Las mejores IA para investigación biomédica',
    intro:
      'Es probablemente el terreno donde la IA ha producido el impacto científico más claro. AlphaFold predijo la estructura tridimensional de prácticamente todas las proteínas conocidas, resolviendo un problema que llevaba décadas abierto y ahorrando años de trabajo experimental a laboratorios de todo el mundo; AlphaMissense estima el efecto patogénico de mutaciones concretas; BioGPT trabaja sobre el corpus de literatura biomédica para extraer y relacionar conocimiento; y BenevolentAI aplica IA al descubrimiento de fármacos y a la reutilización de compuestos ya existentes.',
    body: 'Estas herramientas se eligen por la tarea, no por preferencia. La predicción estructural acelera enormemente el trabajo previo, pero sus resultados siguen siendo hipótesis que hay que validar en el laboratorio: un modelo de alta confianza reduce el riesgo, no lo elimina. En cribado de compuestos, la IA reduce el espacio de búsqueda de millones a decenas, y ahí está su valor real. Comprueba siempre la licencia de uso si trabajas en un entorno comercial y no solo académico.',
  },
  {
    cat: 'Educación',
    sub: 'Tutores virtuales',
    title: 'Los mejores tutores de IA para estudiar',
    intro:
      'Un tutor de IA no da la respuesta: hace preguntas hasta que el alumno llega solo. Khanmigo, construido sobre el método de Khan Academy, guía con preguntas socráticas en lugar de resolver el ejercicio; Socratic ayuda a entender un problema fotografiado paso a paso; Scribe AI apoya el trabajo con material propio; y MagicSchool AI cubre tanto al alumno como al docente con un conjunto amplio de asistentes especializados por tarea.',
    body: 'Lo que distingue un buen tutor de un simple asistente es precisamente que se resista a dar la solución. Si el alumno puede sacarle la respuesta con dos mensajes, la herramienta se convierte en una máquina de copiar deberes. Al elegir, comprueba si permite al profesor ver la conversación, si funciona bien en español y con el currículo de aquí, y qué datos recoge del alumnado, especialmente si son menores. El valor está en las horas de práctica guiada, no en la rapidez de la respuesta.',
  },
  {
    cat: 'Educación',
    sub: 'Corrección y feedback',
    title: 'Las mejores IA para corregir textos y dar feedback',
    intro:
      'Corregir treinta redacciones con comentarios útiles es una de las tareas que más tiempo consume en la docencia, y una de las primeras donde la IA ha demostrado utilidad clara. Grammarly revisa gramática, estilo, claridad y tono, y es la referencia en escritura en inglés; Writable está pensado para el aula, con rúbricas y feedback sobre redacciones alineado con lo que el profesor evalúa; y Eduaide asiste al docente en la generación de recursos y en el comentario de trabajos.',
    body: 'La distinción importante es entre corrección superficial y feedback formativo. Detectar una falta de ortografía es fácil; decirle a un alumno por qué su argumento no se sostiene es lo que de verdad le hace mejorar, y ahí las herramientas rinden de forma desigual. Comprueba la calidad en español, porque varias están claramente orientadas al inglés. Y mantén al profesor en el circuito: la IA propone el comentario, pero quien decide qué se le dice al alumno y con qué tono es el docente.',
  },
  {
    cat: 'Educación',
    sub: 'Generación de exámenes',
    title: 'Las mejores IA para crear exámenes y cuestionarios',
    intro:
      'Preparar un examen bien planteado lleva horas: redactar enunciados claros, diseñar distractores creíbles en las opciones múltiples y cubrir todo el temario sin repetirse. Quizlet genera cuestionarios y material de repaso a partir de tus apuntes o de un temario; QuestionWell produce preguntas y objetivos de aprendizaje desde un texto de partida; y Curipod convierte un tema en una sesión interactiva con preguntas para lanzar en clase y ver al momento cómo va el grupo.',
    body: 'El uso más rentable no es delegar el examen entero, sino generar un banco amplio de preguntas y quedarte con las buenas tras revisarlas. La IA falla sobre todo en dos puntos: distractores absurdos que hacen la respuesta correcta evidente, y preguntas que evalúan memoria en vez de comprensión. Revisa siempre que cada enunciado tenga una única respuesta defendible. Y valora si la herramienta exporta a tu plataforma —Moodle, Classroom— o te obliga a copiar cada pregunta a mano.',
  },
  {
    cat: 'Educación',
    sub: 'Asistentes para docentes',
    title: 'Las mejores herramientas de IA para profesores',
    intro:
      'Buena parte del trabajo docente es invisible y ocurre fuera del aula: preparar material, adaptar textos a distintos niveles, redactar informes y comunicaciones a familias. TeachMate AI cubre un catálogo amplio de tareas de preparación y planificación; Diffit toma un texto y lo reescribe a varios niveles de lectura, resolviendo la atención a la diversidad sin multiplicar el trabajo; y Speaker Coach ayuda a mejorar la exposición oral, útil tanto para el docente como para que el alumnado prepare presentaciones.',
    body: 'Elige por la tarea que más horas te come, que casi nunca es la que uno cree. Si es la adaptación de material a distintos niveles, prioriza herramientas de reescritura por nivel de lectura. Si es la corrección, ve a las de feedback. Comprueba siempre que el resultado en español sea utilizable sin reescribirlo entero, porque muchas están pensadas para el inglés. Y revisa qué datos del alumnado introduces: la protección de menores exige prudencia con cualquier plataforma externa.',
  },
  {
    cat: 'Finanzas',
    sub: 'Análisis bursátil',
    title: 'Las mejores IA para análisis bursátil',
    intro:
      'Estas plataformas aplican aprendizaje automático a la selección de activos y a la búsqueda de señales en datos que una persona no podría procesar. Kavout puntúa acciones combinando fundamentales, técnicos y sentimiento del mercado; Numerai funciona como un fondo alimentado por modelos que envía una comunidad de científicos de datos que compiten entre sí; y EquBot aplica IA al análisis de información financiera y de noticias para construir carteras a partir de esas señales.',
    body: 'Conviene tener claro qué puede y qué no puede hacer una herramienta así. Procesa más información y de forma más consistente que un analista humano, y quita ruido. Lo que no hace es predecir el mercado de manera fiable, porque los precios ya incorporan la información disponible y cualquier ventaja tiende a desaparecer en cuanto se explota. Úsalas como una fuente más de análisis, nunca como una señal automática de compra, y desconfía por sistema de cualquier producto que prometa rentabilidades consistentes.',
  },
  {
    cat: 'Finanzas',
    sub: 'Scoring crediticio',
    title: 'Las mejores IA para scoring crediticio',
    intro:
      'El scoring tradicional deja fuera a quien no tiene historial: jóvenes, autónomos recientes, personas recién llegadas. Los modelos de esta subcategoría intentan resolverlo ampliando las variables que consideran. Zest AI construye modelos de riesgo más precisos manteniendo la explicabilidad exigida por el regulador; Upstart incorpora factores como formación y empleo para evaluar a solicitantes sin historial suficiente; y CredoLab genera puntuaciones a partir de metadatos del comportamiento digital del solicitante.',
    body: 'Aquí lo determinante es la explicabilidad y el sesgo, no la precisión bruta. Si el modelo deniega un crédito, la entidad debe poder explicar por qué, y esa exigencia es legal, no una preferencia. Además, un modelo entrenado con datos históricos sesgados reproducirá esos sesgos con eficiencia y a escala, perjudicando a los mismos colectivos de siempre con una apariencia de objetividad. Exige auditorías de sesgo por grupo protegido y documentación de las variables usadas antes de poner nada en producción.',
  },
  {
    cat: 'Finanzas',
    sub: 'Asesores financieros virtuales',
    title: 'Las mejores IA para gestionar tus finanzas personales',
    intro:
      'Son asistentes que se conectan a tus cuentas, entienden en qué se te va el dinero y te lo cuentan sin rodeos. Cleo revisa tus movimientos y comenta tus gastos con un tono directo, casi de amigo sincero, que a mucha gente le funciona mejor que un gráfico; Plum analiza tus ingresos y gastos para apartar automáticamente pequeñas cantidades que no echas en falta; y Wallet AI aplica el mismo enfoque de análisis de hábitos financieros y recomendaciones de ahorro.',
    body: 'Antes de conectar nada, mira dos cosas. La primera, si soporta bancos españoles: muchas de estas aplicaciones nacen en Reino Unido o Estados Unidos y aquí la conexión bancaria es limitada o inexistente. La segunda, cómo accede a tus cuentas y qué hace con los datos; en Europa se apoyan en la normativa de banca abierta, que da un marco de seguridad, pero conviene leer los permisos. Y ten claro que orientan sobre ahorro y hábitos, no dan asesoramiento financiero regulado.',
  },
  {
    cat: 'Finanzas',
    sub: 'Prevención de fraude',
    title: 'Las mejores IA para prevención de fraude',
    intro:
      'Detectar un pago fraudulento exige decidir en milisegundos y sin fastidiar al cliente legítimo. FICO lleva décadas siendo el estándar en scoring de fraude para tarjetas y pagos, con modelos que evalúan cada transacción en tiempo real; Feedzai aplica aprendizaje automático a grandes volúmenes de operaciones bancarias detectando patrones anómalos según el comportamiento habitual de cada cliente; y Darktrace, aunque nació en ciberseguridad, aporta detección de anomalías aplicable al fraude interno y a la actividad sospechosa en la red.',
    body: 'El indicador que importa no es cuánto fraude detectas, sino cuánto detectas sin bloquear compras legítimas. Un sistema agresivo corta el fraude y también las ventas, y el coste de un cliente cuya tarjeta se rechaza en caja es real aunque no aparezca en el informe de pérdidas. Valora la tasa de falsos positivos tanto como la de detección, la latencia de decisión, y si el modelo se adapta rápido a patrones nuevos: el fraude cambia de forma constantemente.',
  },
  {
    cat: 'Creatividad',
    sub: 'Diseño gráfico',
    title: 'Las mejores IA para diseño gráfico',
    intro:
      'La IA ha absorbido buena parte del trabajo repetitivo del diseño gráfico. Canva Magic Studio genera piezas, recorta fondos, amplía imágenes y adapta un diseño a todos los formatos de redes con un clic, todo dentro de un editor que no requiere formación previa. Adobe Firefly se integra en Photoshop e Illustrator y aporta generación y relleno inteligente con un modelo entrenado sobre material licenciado, algo relevante para uso comercial. Fotor cubre edición y retoque rápido con funciones automáticas.',
    body: 'La elección depende de dónde trabajas ya. Si tu flujo está en Adobe, la IA integrada ahorra más que cualquier herramienta externa, porque no rompe el proceso. Si no eres diseñador y necesitas piezas correctas y rápidas, un editor con plantillas y generación integrada te llevará más lejos con menos esfuerzo. Comprueba en ambos casos la licencia comercial del material generado y si puedes exportar en formatos editables y con la resolución que tu impresión o tu web necesitan.',
  },
  {
    cat: 'Creatividad',
    sub: 'UX/UI asistido',
    title: 'Las mejores IA para diseño UX/UI',
    intro:
      'El diseño de producto tiene una fase inicial cara en tiempo y barata en valor: convertir una idea en algo que se pueda ver y comentar. Ahí es donde entran estas herramientas. Figma AI acelera tareas dentro del entorno donde ya trabajan los equipos de producto, desde generar variantes hasta rellenar contenido realista; Uizard convierte un boceto en papel o una descripción escrita en un prototipo navegable; y Galileo AI genera interfaces completas y editables a partir de una instrucción en lenguaje natural.',
    body: 'Sirven sobre todo para llegar antes a la conversación: enseñar tres direcciones distintas en una reunión en lugar de describirlas. Lo que no hacen es el trabajo de UX de verdad, que es entender al usuario, decidir qué se quita y por qué, y validar con gente real. Al elegir, comprueba que exporte a componentes editables y no a una imagen plana, y que respete tu sistema de diseño: una interfaz bonita que ignora tus componentes genera más trabajo del que ahorra.',
  },
  {
    cat: 'Creatividad',
    sub: 'Branding y logos',
    title: 'Las mejores IA para crear logos y branding',
    intro:
      'Estas herramientas resuelven una necesidad muy concreta: un proyecto que arranca y necesita una identidad visual decente ya, sin el presupuesto ni los plazos de un estudio. Looka genera logos a partir de tu sector y tus preferencias de estilo, y entrega además un kit de marca con paleta, tipografías y aplicaciones; Brandmark propone identidades completas con variaciones y usos; y Hatchful ofrece un camino rápido y gratuito para salir con un logo y las piezas básicas de redes.',
    body: 'Son la opción sensata para un proyecto pequeño, una marca personal o una validación temprana: entregan algo correcto y coherente en minutos. Lo que no reemplazan es la estrategia de marca —posicionamiento, competencia, promesa— que es lo que hace que una identidad signifique algo. Antes de decidir, comprueba que puedas descargar el logo en vectorial, que la licencia sea comercial y sin límites, y que la marca no sea tan genérica que puedas encontrarla en la web de tu competencia.',
  },
  {
    cat: 'Creatividad',
    sub: 'Diseño web',
    title: 'Las mejores IA para crear páginas web',
    intro:
      'Describir tu negocio y obtener una web publicada en minutos ha dejado de ser una promesa de anuncio. Durable levanta un sitio completo con textos e imágenes a partir de unas pocas respuestas, orientado a negocios locales que necesitan presencia ya; Wix ADI construye la estructura y el diseño según tu sector y luego permite editarlo todo; y Framer AI genera páginas con un acabado visual notable, editable después con un control fino sobre el diseño y las animaciones.',
    body: 'Funcionan muy bien para lo que son: una web de presentación, una landing, un portfolio. Empiezan a quedarse cortas cuando necesitas lógica de negocio, integraciones a medida o un rendimiento y un SEO muy trabajados. Antes de comprometerte, comprueba tres cosas: si puedes usar tu propio dominio, qué pasa con el contenido si te vas de la plataforma, y cómo puntúa la web en velocidad. Y reescribe los textos generados: son el punto más flojo del resultado y donde se nota que no los ha escrito nadie.',
  },
  {
    cat: 'Seguridad',
    sub: 'Detección de amenazas',
    title: 'Las mejores IA para detección de amenazas',
    intro:
      'La detección basada en firmas solo reconoce lo que ya se ha visto antes, y eso deja fuera precisamente los ataques nuevos. Estas plataformas cambian el enfoque: aprenden qué es normal en tu red y avisan de lo que se sale. Darktrace construye un modelo del comportamiento habitual de cada dispositivo y usuario para detectar desviaciones sin conocer la amenaza previamente; Vectra AI se centra en identificar el movimiento lateral y la actividad de un atacante ya dentro; y Cylance aplica aprendizaje automático a la prevención de malware en el endpoint.',
    body: 'Al evaluar una de estas soluciones, exige una prueba en tu propia red: el rendimiento depende por completo del entorno, y las cifras de un folleto no dicen nada. Mide durante esa prueba cuántas alertas genera al día y cuántas resultan accionables, porque un sistema que satura al equipo con ruido se acaba silenciando y deja de proteger. Comprueba también la cobertura —red, endpoint, nube, correo— y si se integra con el SIEM que ya tienes en lugar de obligarte a mirar otra consola más.',
  },
  {
    cat: 'Seguridad',
    sub: 'Análisis de comportamiento',
    title: 'Las mejores herramientas de análisis de comportamiento con IA',
    intro:
      'El análisis de comportamiento de usuarios y entidades parte de una idea sencilla: las credenciales robadas parecen legítimas, pero quien las usa no se comporta como su dueño. Exabeam construye una línea base por usuario y detecta desviaciones, encadenando eventos dispersos en una única historia de ataque comprensible; Securonix aplica el mismo enfoque sobre grandes volúmenes de registros y añade detección de amenaza interna; y LogRhythm integra esta capa dentro de su plataforma de gestión de eventos de seguridad.',
    body: 'Es la respuesta natural a dos problemas que las firmas no cubren: el atacante que entra con credenciales válidas y el empleado que abusa de sus permisos. A cambio, exige datos: sin registros suficientes de identidad, acceso y actividad, no hay línea base que construir. Antes de elegir, comprueba qué fuentes necesita ingerir y si ya las tienes. Valora también cuánto tarda en calibrarse, porque durante las primeras semanas cualquier sistema de este tipo genera un volumen de falsas alertas alto.',
  },
  {
    cat: 'Seguridad',
    sub: 'Respuesta automática',
    title: 'Las mejores herramientas de respuesta automática ante incidentes',
    intro:
      'Cuando un ataque avanza, el tiempo entre la detección y la contención es lo que decide su alcance. Las plataformas de esta subcategoría cierran ese hueco actuando solas. SentinelOne detecta comportamiento malicioso en el endpoint y puede aislar el equipo, matar el proceso e incluso revertir los cambios que el malware haya hecho; CrowdStrike combina detección en el endpoint con inteligencia de amenazas y permite contener un host comprometido en segundos, antes de que nadie del equipo llegue a leer la alerta.',
    body: 'La automatización es lo que hace útiles a estas herramientas y también lo que las vuelve arriesgadas: aislar automáticamente un servidor por un falso positivo provoca una caída de servicio propia. El despliegue sensato empieza en modo detección, se estudia qué habría hecho el sistema y solo después se automatizan las respuestas ya validadas, empezando por las menos destructivas. Comprueba además la cobertura de sistemas operativos, el impacto del agente en el rendimiento y qué margen de reversión te deja una acción automática.',
  },
  {
    cat: 'Robótica',
    sub: 'Automatización industrial',
    title: 'Las mejores plataformas de IA para automatización industrial',
    intro:
      'Estas plataformas conectan la maquinaria de planta con modelos analíticos: recogen la telemetría de sensores y controladores, la centralizan y la convierten en decisiones sobre producción, calidad y mantenimiento. Siemens MindSphere es una de las referencias en el mundo industrial por su encaje con el equipamiento de planta ya instalado; Predix nació en el entorno de activos industriales pesados y equipos críticos; y Uptake aplica analítica predictiva sobre flotas de maquinaria para anticipar fallos y optimizar su operación.',
    body: 'El factor decisivo casi nunca es el algoritmo, sino la conectividad. Comprueba si la plataforma habla con tus PLC, tu SCADA y tu MES, y si soporta los protocolos que ya usa tu planta, porque adaptar el parque de máquinas es donde se va el presupuesto. Valora también si puede procesar en el borde cuando la conexión con la nube se cae, algo básico en producción continua. Y arranca con una línea o una célula concreta antes de escalar a toda la fábrica.',
  },
  {
    cat: 'Robótica',
    sub: 'Robótica',
    title: 'Los mejores sistemas de IA para robótica',
    intro:
      'La IA es lo que permite a un robot trabajar en entornos que no están perfectamente controlados. Spot, el cuadrúpedo de Boston Dynamics, se mueve por instalaciones industriales sorteando obstáculos y realizando inspecciones autónomas en zonas peligrosas para las personas; Covariant desarrolla modelos que permiten a brazos robóticos coger objetos variados y desconocidos, un problema clásico en almacenes con catálogos enormes; y Osaro aplica aprendizaje a la manipulación y el picking en logística y empaquetado.',
    body: 'El salto de la demo a la planta se juega en la variabilidad. Un robot que funciona con piezas idénticas y bien colocadas es automatización clásica; el valor de la IA aparece cuando los objetos cambian, llegan desordenados o son nuevos. Al evaluar, pregunta por la tasa de éxito con referencias que el sistema no ha visto antes y por qué pasa cuando falla. Y calcula el retorno con datos: ciclos por hora, tasa de error y coste de integración, no la impresión que deja el vídeo.',
  },
  {
    cat: 'Robótica',
    sub: 'Mantenimiento predictivo',
    title: 'Las mejores herramientas de IA para mantenimiento predictivo',
    intro:
      'Una parada no planificada cuesta mucho más que la pieza que ha fallado. Estas herramientas escuchan la máquina para anticiparlo. Augury coloca sensores de vibración y ultrasonido en motores y bombas y detecta el deterioro mecánico semanas antes de que provoque una avería; Senseye analiza los datos de tus sistemas existentes para estimar la vida útil restante de cada activo y priorizar intervenciones; y SparkCognition aplica modelos predictivos sobre activos industriales críticos y flotas de equipos.',
    body: 'Antes de elegir, responde a una pregunta incómoda: ¿tienes histórico de fallos? Un modelo predictivo aprende de averías pasadas, y si tus máquinas nunca han fallado dentro del periodo registrado, no hay nada de lo que aprender. Comprueba si el sistema necesita sensores nuevos o aprovecha los que ya tienes, porque instrumentar una planta entera cambia el presupuesto. Y mide el retorno donde de verdad está: en paradas no planificadas evitadas y en horas de producción salvadas, no en avisos generados.',
  },
  {
    cat: 'Robótica',
    sub: 'Visión artificial',
    title: 'Las mejores herramientas de visión artificial',
    intro:
      'La inspección visual humana se cansa, varía entre turnos y no aguanta la velocidad de una línea moderna. La visión artificial no. LandingLens permite entrenar modelos de detección de defectos con relativamente pocas imágenes etiquetadas, algo pensado para equipos de planta sin científicos de datos; Matroid detecta objetos y eventos en vídeo en tiempo real; y Cognex, referente clásico del sector, combina hardware de cámaras industriales con algoritmos de inspección y lectura de códigos.',
    body: 'Lo que suele decidir el éxito no es el modelo sino la iluminación y el montaje de la cámara: un mal encuadre o unas sombras mal resueltas hunden la precisión de cualquier sistema. Antes de comprar, haz una prueba con piezas reales, incluidos los defectos raros, y mide falsos positivos y falsos negativos por separado: dejar pasar una pieza mala y tirar una buena tienen costes distintos. Comprueba también cuánto cuesta reentrenar cuando aparece un tipo de defecto nuevo, porque aparecerá.',
  },
  {
    cat: 'Multimodal',
    sub: 'Multimodales',
    title: 'Las mejores IA multimodales',
    intro:
      'Aquí están los asistentes que no se limitan al texto: leen imágenes, documentos y archivos dentro de la misma conversación y razonan sobre todo a la vez. ChatGPT, Gemini y Claude comparten esta capacidad, aunque con matices propios. Puedes enseñarles una captura de un error, un contrato escaneado, un gráfico de ventas o la foto de una pizarra y pedirles que lo interpreten, extraigan los datos, los critiquen o los conviertan en otra cosa, sin transcribir nada a mano.',
    body: 'Las diferencias reales aparecen en los límites prácticos: cuántas páginas admite, cómo se comporta con tablas complejas, si mantiene el hilo cuando la conversación mezcla varios documentos y cuánta precisión conserva con escaneos mediocres o letra manuscrita. Si vas a montar un proceso encima de esta capacidad, prueba con tus propios documentos, no con los ejemplos del proveedor. Una cifra mal leída en una factura no da error: se propaga silenciosamente hasta que alguien la detecta demasiado tarde.',
  },
  {
    cat: 'Multimodal',
    sub: 'Entrada mixta',
    title: 'Los mejores modelos de IA de entrada mixta',
    intro:
      'Esta subcategoría reúne los modelos de investigación que abrieron el camino a la IA multimodal actual. LLaVA combina un modelo de lenguaje abierto con un codificador visual y demostró que se podía lograr comprensión de imágenes con recursos modestos; Fuyu simplifica la arquitectura procesando la imagen directamente, sin codificador separado; Kosmos explora la integración profunda de percepción y lenguaje; y Flamingo estableció buena parte de las bases del aprendizaje con pocos ejemplos sobre entradas visuales y textuales entrelazadas.',
    body: 'Son piezas para quien construye, no para quien busca una app terminada. Tienen sentido si necesitas un modelo visual que se ejecute en tu propia infraestructura, si trabajas con datos que no pueden salir de tu entorno o si vas a especializar el modelo en un dominio concreto —imagen médica, industrial, documental— donde los modelos generalistas rinden mal. Antes de decidirte, revisa la licencia, los requisitos de GPU y el estado del proyecto, porque en este terreno los repositorios envejecen deprisa.',
  },
  {
    cat: 'OpenSource',
    sub: 'Modelos de Texto',
    title: 'Los mejores modelos de lenguaje de código abierto',
    intro:
      'Los modelos de texto abiertos permiten ejecutar IA generativa en tu propio hardware, sin enviar datos a terceros ni pagar por llamada. LLaMA, de Meta, ha sido el motor de buena parte del ecosistema abierto y de sus variantes especializadas; Mistral destaca por ofrecer un rendimiento notable en tamaños pequeños, lo que permite ejecutarlo con hardware modesto; Falcon aporta modelos con licencias permisivas orientadas al uso comercial; y BLOOM nació de un esfuerzo colaborativo abierto con fuerte cobertura multilingüe.',
    body: 'Elige por tamaño antes que por reputación. Un modelo pequeño bien ajustado a tu tarea concreta suele batir a uno grande genérico, y además cabe en tu GPU, responde antes y cuesta menos de operar. Comprueba con atención la licencia, porque abierto no siempre significa libre para uso comercial. Y calibra la calidad en español: buena parte del entrenamiento de estos modelos es en inglés y el rendimiento cae de forma apreciable en otros idiomas, algo que solo verás probando con tus propios textos.',
  },
  {
    cat: 'OpenSource',
    sub: 'Multimodales',
    title: 'Los mejores modelos multimodales de código abierto',
    intro:
      'Cuando necesitas que una IA entienda imágenes pero esas imágenes no pueden salir de tu infraestructura, los modelos multimodales abiertos son la única vía razonable. LLaVA es el más extendido del ecosistema, con una comunidad amplia y muchas variantes ajustadas a dominios específicos; Fuyu propone una arquitectura más simple que facilita trabajar con imágenes de resolución variable; e IDEFICS, desarrollado de forma abierta, ofrece comprensión de imagen y texto con un enfoque claramente orientado a la reproducibilidad.',
    body: 'El caso de uso típico es el documento sensible: historiales clínicos, expedientes, imágenes industriales o material confidencial que no puedes subir a un servicio externo. Antes de decidir, verifica la licencia comercial, los requisitos de memoria de GPU y qué tal se defiende en español, porque casi todos estos modelos se entrenan y evalúan sobre todo en inglés. Y compara siempre con la alternativa: si tus datos no son sensibles, un servicio comercial te dará más calidad con mucho menos trabajo de despliegue.',
  },
  {
    cat: 'OpenSource',
    sub: 'Frameworks',
    title: 'Los mejores frameworks de código abierto para IA',
    intro:
      'Un modelo por sí solo no es una aplicación. Estos frameworks son la capa que convierte pesos en algo que funciona en producción. Transformers, de Hugging Face, es la librería estándar para cargar y ejecutar prácticamente cualquier modelo abierto, y es la puerta de entrada obligada del ecosistema; LangChain permite encadenar llamadas, conectar herramientas externas y construir agentes y pipelines de recuperación; y OpenLLM se centra en servir modelos abiertos como API con un despliegue sencillo.',
    body: 'El error típico es empezar por el framework más completo. Si tu caso es una llamada a un modelo y una plantilla de prompt, una abstracción pesada solo añade dependencias, capas de indirección y dificultad para depurar. Añade framework cuando la complejidad lo justifique: varias herramientas, memoria, recuperación, orquestación. Al elegir, valora la actividad del proyecto y la calidad de la documentación por encima del número de funciones: en un ecosistema que cambia cada mes, una librería abandonada es deuda técnica inmediata.',
  },
  {
    cat: 'IA Cognitiva y Razonamiento',
    sub: 'Memoria a largo plazo',
    title: 'Las mejores herramientas de memoria para IA',
    intro:
      'Los modelos de lenguaje olvidan todo al cerrar la conversación: solo existen dentro de su ventana de contexto. Estas herramientas añaden la capa que falta. Letta (antes MemGPT) gestiona la memoria como un sistema operativo, moviendo información entre el contexto activo y un almacén externo según haga falta; MemO ofrece una capa de memoria persistente para asistentes que deben recordar preferencias y hechos del usuario entre sesiones; y Zep AI mantiene el historial de conversación con recuperación de lo relevante y gestión de la caducidad de los datos.',
    body: 'Tiene sentido cuando construyes un asistente que se usa de forma continuada y donde repetir el contexto cada vez arruina la experiencia: soporte, tutoría, acompañamiento personal, agentes de trabajo. Al elegir, fíjate en cómo decide qué recordar y qué descartar, porque guardarlo todo encarece cada llamada y ensucia las respuestas. Comprueba también dónde se almacenan esos datos y si puedes borrar la memoria de un usuario concreto: la memoria persistente convierte a tu asistente en un tratamiento de datos personales.',
  },
  {
    cat: 'IA Cognitiva y Razonamiento',
    sub: 'Razonamiento estructurado',
    title: 'Las mejores técnicas de razonamiento estructurado con IA',
    intro:
      'Un modelo que responde de un tirón falla en problemas que requieren varios pasos. Estas técnicas le obligan a pensar de otra forma. Tree-of-Thought explora varias líneas de razonamiento en paralelo, las evalúa y descarta las que no llevan a ninguna parte; GraphGPT organiza el conocimiento en forma de grafo para razonar sobre relaciones entre entidades; DSPy sustituye el ajuste manual de prompts por una optimización programática de los mismos; y Program-Aided Reasoning delega el cálculo en código ejecutado, en vez de dejar que el modelo lo improvise.',
    body: 'Aplícalas donde la respuesta directa falla: lógica, matemáticas, planificación, tareas con muchas restricciones que hay que satisfacer a la vez. En consultas sencillas no aportan nada y multiplican coste y latencia sin mejorar el resultado. El caso más rentable y menos discutido es delegar el cálculo en código: un modelo de lenguaje es malo aritméticamente y bueno escribiendo el programa que hace la cuenta bien. Antes de adoptar cualquiera de estas técnicas, mide si la mejora compensa el coste extra.',
  },
  {
    cat: 'IA Cognitiva y Razonamiento',
    sub: 'Agentes cognitivos avanzados',
    title: 'Los mejores frameworks de agentes de IA',
    intro:
      'Estos frameworks sirven para construir sistemas donde varios agentes colaboran o donde uno solo sigue un flujo de trabajo complejo. AutoGen, de Microsoft, organiza conversaciones entre agentes con roles definidos que se pasan resultados entre sí; CrewAI plantea equipos de agentes especializados —investigador, redactor, revisor— con tareas asignadas y un orden de ejecución; y LangGraph modela el flujo como un grafo de estados, lo que da un control explícito sobre las transiciones y permite ciclos y puntos de decisión.',
    body: 'Elige según cuánto control necesites. Si el flujo es conocido y quieres poder depurarlo, un modelo de grafo con estados explícitos te dará trazabilidad; si el problema se presta a la colaboración entre roles y aceptas más imprevisibilidad, un enfoque conversacional puede ser más natural. En cualquier caso, exige observabilidad: sin poder ver qué hizo cada agente, con qué entrada y a qué coste, depurar un fallo se vuelve imposible. Y limita las iteraciones, o el coste se dispara.',
  },
  {
    cat: 'Desarrollo de Modelos',
    sub: 'Entrenamiento y despliegue',
    title: 'Las mejores herramientas para entrenar y desplegar modelos de IA',
    intro:
      'Entrenar un modelo genera decenas de experimentos, y sin registrar qué datos, qué parámetros y qué resultados tuvo cada uno, reproducir el bueno es imposible. Weights & Biases se ha convertido en el estándar para seguir experimentos, comparar ejecuciones y visualizar métricas; MLflow ofrece lo mismo en un proyecto abierto que puedes autoalojar, incluyendo registro de modelos; ClearML añade orquestación y gestión de recursos de cómputo; y SageMaker cubre el ciclo completo dentro del ecosistema de AWS.',
    body: 'La decisión suele reducirse a dónde vive tu infraestructura y qué autonomía quieres. Si ya estás en una nube concreta, su plataforma gestionada reduce fricción y trabajo de mantenimiento. Si te preocupa la dependencia o tienes requisitos de datos que no pueden salir de tu entorno, una solución abierta y autoalojada te da control a cambio de operarla tú. Sea cual sea, lo innegociable es esto: versiona datos, código y modelo juntos. Sin eso no puedes reproducir ni auditar nada.',
  },
  {
    cat: 'Desarrollo de Modelos',
    sub: 'Evaluación y monitoreo',
    title: 'Las mejores herramientas para evaluar y monitorizar modelos de IA',
    intro:
      'Un modelo que funcionaba en la demo puede degradarse en producción sin que nadie se entere, porque no lanza excepciones: simplemente responde peor. Estas herramientas hacen visible ese punto ciego. TruLens evalúa aplicaciones basadas en modelos de lenguaje midiendo si la respuesta se apoya en el contexto recuperado; Helicone y PromptLayer registran cada llamada con su coste, latencia y resultado, lo que permite depurar y controlar el gasto; y Arize AI monitoriza el rendimiento en producción y detecta deriva en los datos de entrada.',
    body: 'Empieza por lo básico y barato: registra todas las llamadas. Sin trazas de entrada, salida, coste y latencia, cualquier discusión sobre si un cambio ha mejorado el sistema es opinión. Después construye un conjunto de casos de evaluación con ejemplos reales, incluidos los que fallaron, y ejecútalo en cada cambio de prompt o de modelo. Y monitoriza el coste desde el primer día: en aplicaciones sobre modelos de lenguaje, la factura se dispara por sorpresa con mucha más facilidad que la latencia.',
  },
  {
    cat: 'Desarrollo de Modelos',
    sub: 'Fine-tuning y RAG',
    title: 'Las mejores herramientas para fine-tuning y RAG',
    intro:
      'Son las dos formas de conseguir que un modelo genérico sirva para tu caso concreto. LoRA permite ajustar un modelo entrenando solo una fracción mínima de parámetros, lo que abarata enormemente el fine-tuning y lo pone al alcance de hardware modesto. En el lado de la recuperación, LangChain y Haystack orquestan el pipeline completo de indexación y consulta; Unstructured se ocupa del trabajo sucio de extraer texto limpio de PDF, HTML y documentos ofimáticos; y RAGAS evalúa la calidad del sistema resultante.',
    body: 'La regla práctica es sencilla: si el problema es que el modelo no conoce tu información, RAG; si el problema es que no responde en el formato, tono o estilo que necesitas, fine-tuning. Se confunden a menudo y ajustar un modelo para meterle conocimiento sale caro, envejece mal y obliga a reentrenar cada vez que cambia un dato. En RAG, casi todo el resultado se juega antes del modelo: en cómo troceas los documentos y en la calidad de la extracción del texto.',
  },
  {
    cat: 'Marketing y Ventas',
    sub: 'Contenido y campañas',
    title: 'Las mejores IA para crear contenido de marketing',
    intro:
      'Producir contenido de marketing es un trabajo de volumen y de variantes, y ahí es donde estas herramientas encajan. Jasper está orientado a equipos, con voz de marca configurable y plantillas para campañas completas; Copy.ai genera copys, correos y anuncios en muchas variantes para testear; Writesonic combina redacción de artículos con optimización para buscadores; e Hypotenuse AI apunta al contenido de comercio electrónico, donde hay que describir cientos de productos sin repetir la misma frase.',
    body: 'El uso rentable es el de las variantes: veinte titulares de anuncio para testear, la misma propuesta adaptada a tres segmentos, doscientas fichas de producto. El uso que sale mal es publicar artículos genéricos sin editar, que no posicionan y desgastan la marca. Al elegir, comprueba la calidad del español —muchas escriben un castellano que suena a traducción— y si puedes fijar tono, terminología y cosas prohibidas. La edición humana sigue siendo lo que separa un texto publicable de uno intercambiable.',
  },
  {
    cat: 'Marketing y Ventas',
    sub: 'Optimización embudos',
    title: 'Las mejores IA para optimizar embudos de venta',
    intro:
      'El equipo comercial no tiene tiempo para todos los contactos, así que la pregunta importante es a quién llamar primero. Estas plataformas responden con datos. HubSpot AI puntúa leads, resume conversaciones y sugiere el siguiente paso dentro del propio CRM; Salesforce Einstein AI aplica predicción de conversión y previsión de ventas sobre el pipeline; y ChatSpot permite consultar el CRM en lenguaje natural y ejecutar acciones sin navegar por menús, lo que reduce la fricción del registro de actividad.',
    body: 'El requisito de partida es incómodo pero inevitable: la IA predice a partir de tu histórico, así que si tu CRM está incompleto o mal etiquetado, el modelo aprenderá de datos malos y sus predicciones no valdrán nada. Antes de activar nada, revisa la higiene de tus datos. Después, mide contra un grupo de control: la única prueba de que el scoring funciona es que los comerciales que lo siguen cierren más que los que no. Sin esa comparación, es fe.',
  },
  {
    cat: 'Marketing y Ventas',
    sub: 'Email y landing pages',
    title: 'Las mejores IA para email marketing y landing pages',
    intro:
      'El email sigue siendo uno de los canales con mejor retorno, y la IA ha atacado justo sus dos cuellos de botella: escribir y segmentar. Mailchimp AI genera asuntos y cuerpos de correo, sugiere el mejor momento de envío y ayuda a segmentar la lista según comportamiento; GetResponse AI redacta campañas completas y monta embudos; y Unbounce Smart Copy se centra en la página de destino, generando titulares y textos orientados a conversión y facilitando el test entre variantes.',
    body: 'Lo que más mueve la aguja no es la redacción, sino la segmentación y el test: el mismo correo enviado al segmento correcto rinde más que un texto brillante enviado a toda la lista. Usa la IA para generar variantes suficientes que permitan un test con significado, no para escribir un único correo perfecto. Comprueba la calidad del español y la integración con tu plataforma actual. Y vigila el cumplimiento: consentimiento, baja fácil y tratamiento de datos siguen siendo obligatorios en la UE.',
  },
  {
    cat: 'Traducción y Localización Automática',
    sub: 'Traducción de texto',
    title: 'Las mejores IA para traducir textos',
    intro:
      'La traducción neuronal ha cambiado el estándar de lo aceptable. DeepL es la referencia habitual para las combinaciones europeas por la naturalidad de su registro y su manejo del contexto de la frase; Google Translate compensa con una cobertura de idiomas enorme y disponibilidad inmediata en cualquier dispositivo; ModernMT se apoya en la memoria de traducción y aprende del estilo del usuario a medida que se le corrige; y Amazon Translate está pensada para integrarse por API en flujos de trabajo a escala.',
    body: 'Elige según el destino del texto. Para uso interno —entender un correo, un informe, una web—, cualquiera basta. Para contenido publicado, la traducción automática es un borrador que necesita posedición, porque los fallos que comete son sutiles y caros: registro inadecuado, términos de sector traducidos literalmente y ambigüedades resueltas mal. Si traduces de forma continua, prioriza que admita glosarios propios y memoria de traducción: es lo que garantiza que tu terminología se mantenga coherente entre documentos y con el tiempo.',
  },
  {
    cat: 'Traducción y Localización Automática',
    sub: 'Subtitulación y doblaje IA',
    title: 'Las mejores IA para subtitular y doblar vídeos',
    intro:
      'Localizar vídeo era caro y lento: transcribir, traducir, ajustar tiempos, contratar locutores, grabar. Estas herramientas comprimen todo ese proceso. Papercup dobla vídeo con voces sintéticas y revisión humana de la calidad final; Dubverse permite doblar a múltiples idiomas manteniendo una entonación razonable; HeyGen combina doblaje con sincronización labial del hablante en pantalla, lo que da un resultado notablemente más creíble; y Subly AI se centra en generar y traducir subtítulos con un flujo de edición rápido.',
    body: 'Decide primero si necesitas subtítulos o doblaje. Los subtítulos son mucho más baratos, rápidos y fáciles de corregir, y para buena parte del contenido son suficientes; además mejoran la accesibilidad y el SEO del vídeo. El doblaje tiene sentido cuando el espectador no va a leer: formación larga, contenido para móvil o audiencias con hábitos distintos. Revisa siempre la transcripción antes de traducir, porque un error ahí se propaga a todos los idiomas y multiplica el trabajo de corrección.',
  },
  {
    cat: 'Ética y Detección de IA',
    sub: 'Detección deepfakes',
    title: 'Las mejores herramientas para detectar deepfakes',
    intro:
      'Con la generación de imagen, voz y vídeo al alcance de cualquiera, verificar qué es real se ha vuelto un problema práctico para medios, plataformas y empresas. Hive AI ofrece detección de contenido generado por IA en imagen, vídeo y texto, e integra moderación a escala; AI or Not resuelve la pregunta básica sobre una imagen concreta de forma rápida y accesible; y Sensity AI se especializa en deepfakes de vídeo y en la monitorización de campañas de desinformación y suplantación de identidad.',
    body: 'Trátalos como una señal, no como un veredicto. Devuelven probabilidades, y fallan en las dos direcciones: marcan como sintéticas fotografías reales y dejan pasar generaciones recientes, sobre todo si la imagen ha sido recomprimida o editada. Si tu problema es el fraude por suplantación de voz o vídeo, la defensa más sólida no es un detector sino el proceso: verificación por un canal alternativo antes de autorizar un pago o un cambio de datos, independientemente de lo convincente que suene quien llama.',
  },
  {
    cat: 'Ética y Detección de IA',
    sub: 'Explicabilidad y auditoría',
    title: 'Las mejores herramientas para auditar y explicar modelos de IA',
    intro:
      'Cuando un modelo decide sobre personas —un crédito, una candidatura, una prima de seguro— no basta con que acierte: hay que poder explicar por qué. TruEra analiza modelos en desarrollo y en producción para detectar sesgos, degradación y comportamientos difíciles de justificar; Fiddler AI aporta monitorización y explicabilidad en producción, con atribución de la decisión a las variables que la han provocado; y Credo AI se centra en la gobernanza y el cumplimiento normativo, generando la documentación exigible.',
    body: 'El impulsor aquí es normativo. El reglamento europeo de IA impone a los sistemas de alto riesgo —empleo, crédito, educación, servicios esenciales— obligaciones de documentación, gestión de riesgos, supervisión humana y trazabilidad. Al elegir herramienta, mira si genera evidencia auditable y no solo gráficos bonitos para el equipo de datos, si mide sesgo por grupo protegido y si detecta deriva del modelo con el tiempo. Y monta la auditoría antes de desplegar: reconstruirla a posteriori es mucho más caro y a veces imposible.',
  },
  {
    cat: 'Gestión del Conocimiento',
    sub: 'Preguntas a Documentos',
    title: 'Las mejores IA para preguntar a tus documentos',
    intro:
      'Buscar un dato dentro de un contrato de doscientas páginas o de una wiki abandonada es un trabajo que nadie quiere hacer. Estas herramientas lo resuelven preguntando. ChatPDF y AskYourPDF permiten subir un documento y consultarlo en lenguaje natural, con la cita de la página donde está la respuesta; Glean indexa todas las fuentes internas de una empresa —Drive, Slack, Confluence— respetando permisos; Klu y Onyx (antes Danswer) ofrecen búsqueda conversacional sobre el conocimiento de la organización, con opción de autoalojamiento.',
    body: 'Para un archivo suelto, una herramienta ligera de subir y preguntar sobra. Para una empresa, lo determinante es que se conecte a tus fuentes reales y que respete los permisos de cada usuario: un buscador interno que muestra a cualquiera documentos de recursos humanos o de dirección es un incidente de seguridad, no una funcionalidad. Exige además que cite la fuente de cada afirmación. Sin cita verificable no hay forma de distinguir una respuesta correcta de una inventada con seguridad.',
  },
  {
    cat: 'Gestión del Conocimiento',
    sub: 'Buscadores inteligentes',
    title: 'Los mejores buscadores con inteligencia artificial',
    intro:
      'Un buscador con IA no te devuelve diez enlaces: te devuelve una respuesta redactada con las fuentes enlazadas debajo. Perplexity es el referente, con respuestas sintetizadas, citas visibles y la posibilidad de seguir preguntando sobre el mismo tema; You.com combina búsqueda con asistentes y modos especializados según el tipo de consulta; y Phind está orientado a programadores, con respuestas técnicas apoyadas en documentación oficial y código, algo que se agradece al depurar un error concreto.',
    body: 'Rinden mejor que un buscador clásico cuando la pregunta exige sintetizar varias fuentes o comparar opciones, y peor cuando buscas una web concreta o una transacción. El riesgo es que resuman mal o se apoyen en una fuente floja, así que la disciplina es siempre la misma: si el dato importa, abre las citas y compruébalas. Una respuesta sin enlaces verificables no es un resultado de búsqueda, es una afirmación sin respaldo por muy bien redactada que esté.',
  },
];
