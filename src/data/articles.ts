import { Article, ArticleCategory } from '../types/article';

export const articleCategories: ArticleCategory[] = [
  { id: 'all', name: 'Todo' },
  { id: 'spotlight', name: 'Destacados' },
  { id: 'comparisons', name: 'Comparaciones' },
  { id: 'news', name: 'Noticias' },
  { id: 'creator-stories', name: 'Historias' },
  { id: 'tips', name: 'Consejos' },
];

const allArticles: Article[] = [
  {
    id: '1',
    slug: 'chatgpt-vs-claude-vs-gemini-best-model-2025',
    title: 'ChatGPT vs Claude vs Gemini: El mejor modelo para cada caso (2025)',
    description:
      'Comparando ChatGPT, Claude y Gemini en programación, escritura, investigación, imagen, voz y video.',
    image: '/images/articulo1.webp',
    category: 'comparisons',
    categoryLabel: 'Comparaciones',
    date: '04 Jun 2025',
    readTime: '10 min',
    author: 'Peter Yang',
    authorImage: '/images/articulo1autor.webp',
    url: 'https://creatoreconomy.so/p/chatgpt-vs-claude-vs-gemini-the-best-ai-model-for-each-use-case-2025',
    featured: true,
    featuredOrder: 2,
    contentSections: [
      {
        title: 'Programación: Claude es el mejor, pero Gemini es el más rentable',
        paragraphs: [
          'Para programar, pedí a cada modelo: "Crea un Tetris completo con gráficos bonitos y buenos controles". Esto fue lo que pasó (demo en video):',
        ],
        bullets: [
          'Claude hizo un juego precioso con puntuación, vista previa de la siguiente pieza y controles muy buenos.',
          'ChatGPT O3 creó un clon básico que funciona pero carece de funciones.',
          'Gemini 2.5 hizo un juego sólido, aunque menos pulido visualmente que Claude.',
        ],
        image: '/images/articulo1.1.webp',
      },
      {
        paragraphs: [
          'Para llevar a Claude más lejos, le pedí: "Crea un Mario 2D". Tras 10-15 minutos de iteraciones, construyó un Nivel 1 jugable con setas, goombas y más. Ni Gemini ni O3 se acercaron.',
        ],
      },
      {
        paragraphs: [
          'Ahora bien: Claude 4 Sonnet cuesta 20× más que Gemini 2.5 Flash. Si el coste importa para tu producto de IA, quizá te convenga Gemini.',
        ],
        image: '/images/articulo1.3.webp',
      },
      {
        paragraphs: ['Google no ha parado de lanzar novedades últimamente:'],
        bullets: [
          'Gemini 2.5 Pro y Flash: modelos muy sólidos por su precio.',
          'Jules: un agente de programación asíncrono al estilo de OpenAI Codex.',
          'Gemini Diffusion: nuevo modelo que permite "vibe coding" tan rápido que se siente instantáneo.',
        ],
      },
      {
        paragraphs: [
          'Resumen para programación: elige Claude 4 para el mejor resultado. Elige Gemini 2.5 para la mejor relación calidad‑precio.',
        ],
      },
      {
        title: 'Escritura: Claude clava tu estilo',
        image: '/images/articulo1.5.webp',
        paragraphs: [
          'Uso la IA sobre todo para editar mi escritura: newsletters, docs de estrategia y párrafos cortos. Mi proceso es simple (demo en video): primero le doy mis mejores ejemplos y luego le pido que edite mi borrador según ese estilo.',
          'Probé los tres modelos para editar este post usando mi prompt de edición (disponible para suscriptores):',
          'Claude clavó mi estilo conversacional y el formato.',
          'ChatGPT recortó demasiado y perdió detalles importantes.',
          'La edición de Gemini 2.5 fue demasiado verbosa y fría.',
          'Por eso Claude sigue siendo mi herramienta diaria: captura mi estilo mejor que cualquier otro, sobre todo si le doy ejemplos.',
        ],
        bullets: [],
      },
      {
        title: 'Respuestas del día a día: ChatGPT te entiende',
        image: '/images/articulo1.6.webp',
        paragraphs: [
          'Los tres pueden responder preguntas cotidianas, pero ChatGPT tiene una función clave: Memoria.',
          'Esto crea momentos “mágicos”. Por ejemplo, me sugirió preguntar por los mejores lugares de Francia porque recordó que planeo un viaje.',
          'También es genial para la introspección. Prueba este prompt (demo en video):',
          'Dime algo único que notes de mí y que yo aún no haya percibido. No tiene que ser positivo; solo sé sincero.',
          'Me sorprende que Claude y Gemini sigan sin memoria en 2025. ChatGPT es el modelo que te “entiende”: úsalo para descubrir talentos y puntos ciegos.',
        ],
      },
      {
        title: 'Investigación profunda: ChatGPT encuentra el punto ideal',
        image: '/images/articulo1.7.webp',
        paragraphs: [
          'Casi todos ofrecen “investigación profunda”, así que probé: “Investiga el mercado de IA para desarrollo y comparte la estrategia de Bolt para competir”.',
          'Resultados (demo en video):',
          'Claude: informe de 7 páginas con 427 fuentes. Buenas síntesis, pero recomendaciones algo genéricas.',
          'ChatGPT: 36 páginas y 25 fuentes. Recomendaciones concretas alineadas con la estrategia de Bolt (usuarios no técnicos, velocidad e integraciones).',
          'Gemini: 48 páginas y 100 fuentes. Muy completo pero demasiado verboso, con tono corporativo.',
          'Confesión: casi nunca leo esos informes enteros; los hojeo y luego los cargo en un proyecto de IA para que me ayude a pulir documentos.',
          'Para este caso, ChatGPT da en el punto medio: ni demasiado corto (Claude) ni demasiado largo (Gemini).',
        ],
      },
      {
        title: 'Generación de imágenes: ChatGPT sigue dominando',
        image: '/images/articulo1.8.webp',
        paragraphs: [
          'La función de imágenes de ChatGPT me sigue sorprendiendo (video).',
          'Sigue instrucciones mejor y renderiza texto con más calidad. Lo uso para creatividades, infografías e incluso cómics con mi hija.',
          'La clave: darle ejemplos de estilo y pedir ajustes específicos. Aquí tienes un video de 5 minutos con mis 5 casos favoritos.',
        ],
      },
      {
        title: 'Voz: ChatGPT tiene personalidad (y canta)',
        paragraphs: [
          'ChatGPT tiene la voz más natural y con más personalidad. Incluso puede cantar (mal), lo cual es bastante gracioso.',
          'Eso sí, tanto ChatGPT como Gemini a veces te interrumpen. Puedes decirle “No me interrumpas hasta que termine”, pero para dictado prefiero apps como Superwhisper.',
        ],
      },
      {
        title: 'Video: Veo 3 de Gemini es asombroso',
        paragraphs: [
          'En video, Gemini va por delante.',
          'Veo 3 convierte prompts de texto en videos de 8 segundos con sonido y voces. Merece la pena un mes de Gemini Pro para probar. Por ejemplo, hice un corgi cantando al piano.',
          'El video con IA va a explotar en calidad y cantidad. Escribiré más sobre esto pronto.',
        ],
      },
      {
        title: 'Cámara en vivo y uso del ordenador: aún verde',
        image: '/images/articulo1.11.webp',
        paragraphs: [
          'Para cerrar, hablemos de cámara en vivo y uso del ordenador (video).',
          "La cámara en vivo permite que la IA vea tu pantalla. Me gusta tener la de Gemini mientras 'vibe coding' para pedirle que depure problemas en tiempo real.",
          'El uso del ordenador permite a la IA controlar tu teclado y tu ratón. Prefiero Operator de OpenAI porque usa O3, el mejor modelo de razonamiento. Puedes usarlo para buscar viajes o hacer reservas en restaurantes.',
          'Ambas funciones aún están verdes, pero merece la pena probarlas si te interesan los agentes de IA.',
          'Entonces, ¿qué modelo deberías usar?',
        ],
      },
      {
        title: 'Entonces, ¿qué modelo usar?',
        image: '/images/articulo1.12.webp',
        paragraphs: [
          'Es interesante cómo las funciones anteriores revelan la estrategia de cada empresa:',
        ],
        bullets: [
          'OpenAI quiere convertirse en tu asistente personal. Domina el mercado de consumo y está avanzando en coding con su agente (rumores de Windsurf).',
          'Claude quiere liderar el coding para empresas. Su primera conferencia fue totalmente para desarrolladores; sigue siendo el modelo por defecto en Cursor y Anthropic mejora Claude Code.',
          'Gemini por fin ha despertado. La cantidad de funciones que Google lanzó en I/O es increíble: tiene la mejor relación coste‑prestaciones y capacidades multimodales de primer nivel con Veo 3.',
          'Entonces, ¿qué usar y cuándo?',
          'Para asistencia personal del día a día, usa ChatGPT.',
          'Para escritura y coding profesional, Claude merece el premium.',
          'Para video y cuando el presupuesto importe, prueba Gemini.',
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'openai-presenta-gpt-5-afondo-2025',
    title: 'OpenAI presenta GPT-5, su LLM más avanzado',
    description:
      'GPT-5 llega como el modelo más inteligente, rápido y preciso de OpenAI, con planes gratuitos y de pago para usuarios y empresas.',
    image: '/images/articulo2.webp',
    category: 'spotlight',
    categoryLabel: 'A FONDO',
    date: '08 Aug 2025',
    readTime: '9 min',
    author: 'Jose Montes',
    authorImage: '/images/articulo2autor.webp',
    featured: true,
    featuredOrder: 1,
    contentSections: [
      // Bloque de texto entre la imagen principal (articulo2) y la imagen articulo2.1
      {
        paragraphs: [
          'OpenAI ha anunciado el lanzamiento de GPT-5, la quinta generación de su serie de modelos de predicción de lenguaje y el más inteligente, rápido y preciso de los publicados hasta la fecha por la compañía de IA. Estará disponible para cualquier tipo de usuario y empresa, con planes gratuitos y de pago con diferentes niveles de precio y prestaciones.',
          'Los modelos de lenguaje grandes (LLM) son los principales sustentadores de las tecnologías de inteligencia artificial, por ser la base para el funcionamiento de chatbots o agentes de IA, así como para la creación de aplicaciones y servicios digitales. Por ello se esperaba con expectación (desde hace meses) la nueva versión de OpenAI, la compañía que en menos de una década ha pasado de una simple a startup a convertirse en uno de los gigantes mundiales de IA, con valoración superior a los 300.000 millones de dólares.',
          'El CEO de OpenAI, Sam Altman, explicó en la presentación que el nuevo modelo será «especialmente útil para desarrolladores y empresas» y comparó sus capacidades con «tener un equipo de expertos con un nivel de doctorado en su bolsillo, trabajando para usted». Aunque ChatGPT es la referencia mundial en chatbots y lo usan 700 millones de usuarios semanales, OpenAI no ha tenido un modelo de vanguardia líder en la industria desde hace tiempo. Ahora, la compañía cree que el nuevo modelo la consolidará de nuevo en la cima de la clasificación.',
          'Además, GPT-5 será un paso significativo en el camino hacia la IAG (inteligencia artificial general) y clave para conseguir los ambiciosos objetivos de futuro de OpenAI hacia lo que llama la ‘superinteligencia’. Al igual que sus predecesor, GPT-5 potenciará los chatbots, agentes y herramientas de búsqueda que se usan habitualmente en ChatGPT o en otras aplicaciones propias y también de terceros que utilizan la tecnología de OpenAI.',
          'Entre ellas destaca Microsoft. La firma de Redmond ya ha incorporado las capacidades de GPT-5 a su soluciones de IA, al asistente Copilot, a la versión de la suite ofimática Microsoft 365, al Azure AI Foundry o al GitHub Copilot. Otra de las compañías que incorporará GPT-5 será Google, ya que a partir de la próxima semana los usuarios d la versión Pro de ChatGPT Pro podrán conectar aplicaciones como Gmail, Google Calendar y Google Contacts directamente al chatbot de OpenAI.',
        ],
      },
      {
        image: '/images/articulo2.1.webp',
      },
      // Bloque de texto entre articulo2.1 y el video de YouTube
      {
        title: 'GPT-5',
      },
      {
        title: 'GPT-5, rendimiento y capacidades',
        paragraphs: [
          '«Este es el mejor modelo del mundo en programación, es el mejor modelo del mundo en escritura, el mejor modelo del mundo en atención médica, y una larga lista de cosas más», aseguró el CEO de OpenAI en la presentación. El ejecutivo afirmó que GPT-5 supone un avance drástico respecto a los modelos anteriores: «GPT-3 era como hablar con un estudiante de secundaria. Podías hacerle una pregunta. Quizás obtenías una respuesta correcta, quizás algo disparatado. GPT-4 era como hablar con un estudiante universitario. GPT-5 es la primera vez que realmente se siente como hablar con un experto con doctorado».',
          'OpenAI afirma que GPT-5 es más inteligente, más rápido y menos propenso a dar respuestas imprecisas, al reducir el grado de “alucinaciones” en un 80%. En cuanto a rendimiento puro, la compañía declara los siguientes puntos de referencia:',
        ],
        bullets: [
          'Matemáticas (94,6% en AIME 2025 sin herramientas)',
          'Codificación en el mundo real (74,9 % en SWE-bench Verified, 88 % en Aider Polyglot),',
          'Comprensión multimodal (84,2% en MMMU)',
          'Salud (46,2% en HealthBench Hard)',
          'Con el razonamiento extendido de GPT-5 Pro, GPT-5 obtiene una puntuación del 88,4 % sin herramientas.',
        ],
      },
      {
        paragraphs: [
          'Más allá de los datos de rendimiento, el nuevo modelo ha elevado las capacidades de la IA conversacional, respondiendo preguntas desde texto o voz, y especialmente las tareas de programación, creando código a través de una instrucción simple y completando tareas complejas de ingeniería de software, esencial a la hora de crear servicios digitales o aplicaciones.',
          'OpenAI destacó especialmente las habilidades y la velocidad con la que el nuevo modelo puede escribir código. Esto no es solo una función para programadores. La capacidad del modelo para escribir un programa le facilita resolver cualquier problema que se le presente, creando la herramienta adecuada. La velocidad con la que GPT-5 escribe código permite probar varias veces y obtener el resultado deseado, o bien, ofrecer retroalimentación para realizar cambios hasta obtener el resultado deseado.',
        ],
      },
      {
        paragraphs: [
          'El nuevo modelo estrena también características de seguridad y ha mejorado su entrenamiento para evitar información engañosa o inexacta, lo que también mejorará la experiencia del usuario. También responderá de forma diferente si se le plantea una pregunta que podría ser peligrosa. Los modelos anteriores se negaban a responder una pregunta potencialmente dañina, pero GPT-5 intentará proporcionar la mejor respuesta segura,',
        ],
      },
      {
        paragraphs: [
          'Las funciones de voz también han recibido una actualización y el modo avanzado ahora estará disponible para todos los usuarios, tanto gratuitos como de pago, y los límites de uso serán mayores. También podrá cambiarse el color de los chats, con algunas opciones exclusivas para usuarios de pago.',
        ],
      },
      {
        paragraphs: [
          'Otras nuevas opciones llegan de la posibilidad de modificar las personalidades. ChatGPT podrá configurarse para que sea reflexivo, comprensivo, sarcástico o más con cuatro personalidades predefinidas que se han lanzado como vista previa de investigación. Los usuarios podrán seleccionar entre estas personalidades (Cínico, Robot, Oyente y Nerd) según su estilo de comunicación preferido.',
        ],
      },
      // Texto después de la sección anterior
      {
        title: 'GPT-5, versiones y precios',
        paragraphs: [
          'Intentando clarificar el lío de versiones de modelos anteriores y el selector de uso que el mismo CEO calificó como «un lío muy confuso», GPT-5 se presentará dentro de ChatGPT como un solo modelo, no como un modelo regular y un modelo de razonamiento independiente. En segundo plano,  GPT-5 utiliza un enrutador desarrollado por OpenAI, que cambia automáticamente a una versión de razonamiento para consultas más complejas.',
          'OpenAI ya ha desplegado el nuevo modelo en sus aplicaciones web y móviles de ChatGPT y está disponible para todos los usuarios, desde quienes lo usan gratuitamente a través del chatbot, hasta quienes trabajan en empresas que pagan los planes de suscripción más caros. Por supuesto, habrá diferencias entre las versiones disponibles: base, mini, nano, Plus o Pro.',
          'Los suscriptores de ChatGPT Pro tendrán acceso a GPT-5 Pro, una versión con razonamiento extendido para tareas complejas. Para los desarrolladores, el modelo GPT-5 es accesible a través de la API de OpenAI y Microsoft Azure. Los desarrolladores también pueden acceder al nuevo modelo GPT-5 a través de GitHub Models, disponible para todos los planes de pago de GitHub Copilot, comenzando con Copilot Enterprise y Pro+. Pueden acceder al modelo en GitHub Copilot Chat (github.com), VS Code (modos Agente, Preguntar y Editar) y GitHub Mobile mediante el selector de modelos.',
          'Lanzamiento importante. Teniendo en cuenta la influencia actual de OpenAI y a medida que la carrera de la IA generativa se intensifica, se espera que GPT-5 establezca un nuevo estándar de lo que los usuarios pueden esperar de un modelo de lenguaje grande.',
        ],
      },
    ],
  },
  {
    id: '13',
    slug: 'dall-e-vs-midjourney-vs-stable-diffusion-2025',
    title: 'DALL-E vs Midjourney vs Stable Diffusion: ¿Cuál es mejor?',
    description:
      'Guía comparativa clara y práctica para elegir entre DALL-E, Midjourney y Stable Diffusion según tu perfil y necesidades.',
    image: '/images/articulo3.webp',
    category: 'comparisons',
    categoryLabel: 'Comparaciones',
    date: '31 Jul 2025',
    readTime: '4 min',
    author: 'Redacción KeepCoding',
    authorImage: '/images/articulo3autor.webp',
    featured: true,
    featuredOrder: 3,
    contentSections: [
      {
        paragraphs: [
          'Cuando me sumergí por primera vez en el mundo de la generación de imágenes por inteligencia artificial, rápidamente me encontré con una pregunta recurrente:',
          '¿qué herramienta es mejor, DALL-E, Midjourney o Stable Diffusion? Después de meses probando, comparando y hasta creando proyectos reales, quiero compartir contigo un análisis detallado y claro para que, sin importar tu nivel de experiencia, puedas elegir la IA que se adapte perfectamente a tus objetivos creativos y técnicos. Este artículo utiliza la palabra clave dall-e vs midjourney vs stable diffusion para asegurarte que encuentres una guía completa, práctica y actualizada, capaz de ayudarte a tomar la mejor decisión sin confusión ni tecnicismos complicados.',
          'Por qué esta comparación importa: mi experiencia real con estas IAs',
          'He trabajado como consultor para startups y creadores que usan IA para generar contenido visual. DALL-E, Midjourney y Stable Diffusion son las tres opciones estrella. He probado proyectos concretos: desde ilustraciones para libros infantiles (donde la coherencia y detalles son críticos), hasta arte para campañas publicitarias con estilos únicos y personalizaciones técnicas avanzadas dentro de Stable Diffusion.',
          'Lo que aprendí: no hay una IA “mejor” para todo, sino la mejor según tus necesidades, presupuesto y conocimientos. Te lo explico por secciones, con ejemplos prácticos y consejos.',
        ],
      },
      {
        title: '¿Qué es DALL-E y para quién está hecho?',
      },
      {
        image: '/images/dall.e-web.webp',
      },
      {
        paragraphs: [
          'DALL-E, desarrollado por OpenAI, se ha hecho popular por su facilidad de uso y resultados sorprendentes en pocos segundos. Utiliza lenguaje natural para crear imágenes fotorealistas o conceptuales a partir de textos descriptivos. Su versión más reciente, DALL-E 3, ha mejorado la precisión y el nivel de detalle.',
        ],
      },
      {
        title: 'Fortalezas de DALL-E',
        bullets: [
          'Interfaz web sencilla y muy accesible, ideal para usuarios sin experiencia técnica.',
          'Excelente coherencia semántica: sabe interpretar bien hasta descripciones complejas.',
          'Integración con ChatGPT, lo que facilita generar imágenes durante conversaciones o proyectos creativos.',
          'Velocidad rápida, útil para flujos de trabajo ágiles.',
        ],
      },
      {
        title: 'Limitaciones',
        bullets: [
          'No es open source, por lo que no puedes modificar su funcionamiento.',
          'Acceso limitado a planes de suscripción; no es gratuito fuera de pruebas iniciales.',
          'Personalización técnica limitada para usuarios avanzados (menos control sobre estilos o ajustes finos).',
        ],
      },
      {
        paragraphs: [
          'Ejemplo práctico: cuando trabajé en un proyecto educativo para niños, DALL-E permitió crear personajes coherentes con la historia, sin necesitar conocimientos técnicos. La rapidez fue clave para iterar rápido.',
        ],
      },
      {
        title: 'Midjourney: el laboratorio creativo para artistas y diseñadores',
      },
      {
        image: '/images/midjourney-web.webp',
      },
      {
        paragraphs: [
          'Midjourney es una comunidad y laboratorio de investigación que ganó fama por su enfoque artístico y temático. Principalmente accesible a través de Discord, ofrece imágenes con un toque más estilizado, expresivo y «artístico». Eso lo hace ideal para proyectos creativos con impacto visual fuerte y estilos originales.',
        ],
      },
      {
        title: 'Fortalezas de Midjourney',
        bullets: [
          'Estilos artísticos únicos, con texturas y efectos visuales sorprendentes.',
          'Comunidad activa que comparte prompts, tips y retos creativos.',
          'Opacidad técnica: te concentras en el arte sin preocuparte por configuraciones complejas.',
        ],
      },
      {
        title: 'Limitaciones de Midjourney',
        bullets: [
          'Requiere familiarizarse con Discord, barrera para usuarios no técnicos.',
          'Velocidad moderada; puede tardar más según el servidor.',
          'Menor control técnico en comparación con Stable Diffusion.',
        ],
      },
      {
        paragraphs: [
          'Ejemplo práctico: En un proyecto de diseño gráfico para una marca, usé Midjourney para explorar diferentes estilos y tonos visuales. La comunidad y los ejemplos en Discord fueron invaluables.',
        ],
      },
      {
        title: 'Stable Diffusion: flexibilidad máxima para usuarios avanzados',
        paragraphs: [
          'Stable Diffusion, desarrollado inicialmente por Stability AI, es el gran referente para quienes buscan código abierto y personalización total. Permite ejecutar modelos tanto en la nube como localmente, lo que aporta ventajas de privacidad, control y costes bajos a largo plazo.',
        ],
      },
      {
        image: '/images/stablediffusion-web.webp',
      },
      {
        title: 'Fortalezas de Stable Diffusion',
        bullets: [
          'Código abierto: puedes modificar y adaptar el modelo.',
          'Posibilidad de uso local, cuidando la privacidad de tus datos.',
          'Amplia variedad de ajustes técnicos: estilo, resolución, prompt weighting y más.',
          'Gran soporte comunitario en GitHub y foros especializados.',
        ],
      },
      {
        title: 'Limitaciones de Stable Diffusion',
        bullets: [
          'Curva de aprendizaje más alta; mejor para usuarios con conocimientos técnicos.',
          'Requiere hardware adecuado para uso local (GPU potente recomendada).',
          'Instalación y configuración pueden requerir tiempo.',
        ],
      },
      {
        paragraphs: [
          'Ejemplo práctico: Para un videojuego indie, implementé Stable Diffusion localmente para generar assets personalizados con estilos muy específicos y preservar la confidencialidad del proyecto.',
        ],
      },
      {
        title: 'Comparativa rápida: DALL-E vs Midjourney vs Stable Diffusion',
        table: {
          headers: ['Aspecto', 'DALL-E', 'Midjourney', 'Stable Diffusion'],
          rows: [
            ['Accesibilidad', 'Muy alta (web)', 'Media (Discord)', 'Baja a media (técnica)'],
            [
              'Estilo visual',
              'Realista y coherente',
              'Artístico y expresivo',
              'Altamente personalizable',
            ],
            ['Personalización', 'Baja', 'Media', 'Muy alta'],
            ['Velocidad', 'Alta', 'Media', 'Variable (hardware)'],
            ['Costo', 'Suscripción / pago', 'Suscripción', 'Gratuito / servicios cloud'],
            ['Comunidad', 'Amplia (OpenAI)', 'Activa en Discord', 'Activa en GitHub y foros'],
            ['Privacidad', 'Limitada', 'Limitada', 'Excelente (uso local)'],
          ],
        },
      },
      {
        title: '¿Cuál elegir según tu perfil y necesidades?',
        bullets: [
          'Usuario principiante o creativo sin conocimientos técnicos: DALL-E para resultados rápidos y coherentes; la integración con ChatGPT ayuda en flujos simples.',
          'Artista, diseñador o creativo que busca estilos únicos: Midjourney, por su estilo expresivo y comunidad activa.',
          'Desarrollador, investigador o creativo avanzado que prioriza personalización: Stable Diffusion para máximo control y uso local.',
        ],
      },
      {
        title: 'Consejos para sacar el máximo provecho',
        bullets: [
          'Prueba gratis cuando puedas y compara antes de pagar.',
          'Aprende sobre prompts: la calidad del texto descriptivo es clave.',
          'Únete a comunidad: Discord de Midjourney y foros de Stable Diffusion.',
          'Evalúa presupuesto y privacidad: SD local para proyectos sensibles; DALL-E o Midjourney para rapidez.',
        ],
      },
      {
        title: 'Conclusión',
        paragraphs: [
          'Después de haber explorado DALL-E vs Midjourney vs Stable Diffusion en profundidad, no es una carrera de “quién es mejor”, sino de “quién responde mejor a ti y a tu proyecto”. Mi recomendación es experimentar con las tres (según tiempo y recursos) para conocer de primera mano sus posibilidades y límites. El ritmo de evolución es vertiginoso, así que el panorama puede cambiar rápidamente.',
        ],
      },
    ],
  },
  {
    id: '14',
    slug: 'genie-3-google-mundos-3d-interactivos-2025',
    title: 'Genie 3: La IA de Google que crea mundos 3D interactivos',
    description:
      'DeepMind presenta Genie 3, un modelo que genera entornos 3D interactivos desde texto o imágenes. Implicaciones para videojuegos, educación y más.',
    image: '/images/articulo4.webp',
    category: 'news',
    categoryLabel: 'Noticias',
    date: '06 Aug 2025',
    readTime: '4 min',
    author: 'Antonio Cáceres Flores',
    authorImage: '/images/articulo3autor.webp',
    featured: true,
    featuredOrder: 4,
    contentSections: [
      {
        paragraphs: [
          'Google DeepMind ha presentado Genie 3, su modelo más avanzado para la generación de entornos 3D interactivos en tiempo real.',
          'A diferencia de otros sistemas de IA generativa, este modelo no solo crea imágenes o vídeos, sino mundos completos en los que el usuario puede moverse y actuar, simulando físicas realistas y comportamientos complejos.',
          'En este artículo exploramos qué es Genie 3, cómo funciona, qué lo diferencia de otros sistemas similares y qué implicaciones tiene en el camino hacia la inteligencia artificial general (AGI).',
        ],
      },
      {
        title: 'Video de demostración',
        video: {
          src: 'https://www.youtube-nocookie.com/embed/PDKhUknuQDg?start=2',
          type: 'youtube',
        },
      },
      {
        title: 'Qué es Genie 3 y por qué supone un avance en IA generativa',
        paragraphs: [
          'Genie 3 es el nuevo modelo de Google DeepMind diseñado para crear mundos interactivos en 3D a partir de una única imagen o una instrucción textual. Este modelo representa una nueva generación de world models, sistemas de IA que no solo comprenden el entorno, sino que también lo simulan de forma coherente, dinámica e interactiva.',
          'A diferencia de generadores de vídeo tradicionales, Genie 3 no produce clips estáticos, sino entornos en los que el usuario puede moverse y actuar, manteniendo una lógica física y visual realista. Todo ello sin necesidad de entrenamiento adicional o intervención humana posterior, y con tiempos de respuesta muy reducidos.',
          'Puedes consultar la publicación oficial en el blog de Google DeepMind.',
        ],
      },
      {
        title: 'Cómo funciona: un modelo entrenado para simular mundos completos',
        paragraphs: [
          'La clave de Genie 3 está en su entrenamiento basado en más de 200.000 horas de contenido en vídeo y videojuegos 2D, lo que le ha permitido aprender cómo se comportan los entornos y los personajes que los habitan. A partir de ahí, utiliza una arquitectura compuesta por tres módulos principales:',
          'Encoder visual: interpreta la imagen o escena base proporcionada por el usuario.',
          'Modelo del mundo (world model): predice cómo evolucionan los elementos en ese entorno con el tiempo.',
          'Motor interactivo: permite al usuario desplazarse o actuar sobre la escena generada.',
          'Este enfoque convierte a Genie 3 en una suerte de “motor gráfico inteligente”, capaz de crear simulaciones controlables, algo que lo acerca más a una IA cognitiva que a una herramienta creativa tradicional.',
        ],
      },
      {
        title: 'Aplicaciones potenciales de Genie 3',
        paragraphs: [
          'El potencial de Genie 3 va mucho más allá de la generación de vídeos o imágenes espectaculares. Su capacidad para crear entornos interactivos abre un abanico de aplicaciones en múltiples sectores, especialmente en aquellos donde la simulación, la visualización o la experimentación resultan clave.',
        ],
        bullets: [
          'Educación interactiva: simulaciones para clases de física, biología o historia.',
          'Desarrollo de videojuegos: prototipado rápido de niveles y mecánicas a partir de prompts.',
          'Entrenamiento de robots o IA: mundos virtuales coherentes para navegación y tareas.',
          'Arquitectura y urbanismo: visualización de espacios desde descripciones o esquemas.',
          'Narrativa y storytelling: escenas interactivas para cine, publicidad o literatura digital.',
        ],
      },
      {
        title: 'Disponibilidad y estado actual en España y Latinoamérica',
        paragraphs: [
          'Genie 3 se ha presentado como demostración técnica. No hay versión pública o comercial anunciada.',
          'El acceso es, de momento, a través de publicaciones técnicas y demos online; sin fecha de despliegue ni licencias públicas.',
          'Se espera una beta para desarrolladores y empresas tecnológicas en los próximos meses.',
        ],
      },
      {
        title: 'Implicaciones técnicas y avance hacia la AGI',
        paragraphs: [
          'Genie 3 se posiciona como “world model”: no solo genera, sino que simula y razona sobre un entorno con dinámica propia.',
          'Esto exige comprensión de contexto visual, memoria operativa, y respuesta a acciones del usuario en tiempo real.',
          'Podría ser precursor de agentes que aprendan en mundos simulados antes de operar en el mundo real.',
        ],
      },
      {
        title: 'Comparativa con otras IA generativas visuales',
        paragraphs: [
          'El auge audiovisual trajo Sora (OpenAI), Runway Gen-3 Alpha o Pika. Genie 3 destaca por el tiempo real y jugabilidad.',
        ],
        table: {
          headers: [
            'Modelo IA',
            'Tipo de salida',
            'Interactividad',
            'Entradas admitidas',
            'Aplicación principal',
            'Estado actual',
          ],
          rows: [
            [
              'Genie 3 (Google)',
              'Mundos 3D interactivos',
              'Sí',
              'Texto o imagen',
              'Simulación y videojuegos',
              'Investigación',
            ],
            [
              'Sora (OpenAI)',
              'Vídeo realista',
              'No',
              'Texto',
              'Generación audiovisual',
              'Beta cerrada',
            ],
            [
              'Runway Gen-3 Alpha',
              'Vídeo estilizado',
              'No',
              'Texto, imagen, audio',
              'Contenido creativo',
              'En fase temprana',
            ],
            [
              'Pika 1.0',
              'Clips de vídeo',
              'No',
              'Texto o imagen',
              'Generación visual rápida',
              'Público limitado',
            ],
          ],
        },
      },
      {
        paragraphs: [
          'A diferencia de sus competidores, Genie 3 apuesta por mundos jugables en tiempo real, lo que lo convierte en un sistema más cercano a un motor de simulación interactivo que a un simple generador de vídeo.',
        ],
      },
      {
        title: 'Privacidad, seguridad y regulación',
        paragraphs: [
          'Modelos como Genie 3 abren dilemas legales y éticos: propiedad intelectual, privacidad de datos y suplantación visual.',
        ],
      },
      {
        title: 'Riesgos y desafíos legales',
        bullets: [
          'Propiedad intelectual de mundos generados a partir de prompts o imágenes del usuario.',
          'Privacidad si se entrena con imágenes reales: necesidad de consentimiento.',
          'Posible desinformación si se imitan lugares reales con alta fidelidad.',
        ],
      },
      {
        title: 'Regulación futura necesaria',
        bullets: [
          'Transparencia en datasets.',
          'Límites en representación de entornos reales.',
          'Protección del contenido generado por el usuario.',
        ],
      },
      {
        title: 'Conclusiones',
        paragraphs: [
          'Genie 3 marca un hito: la IA ya no genera solo imágenes o vídeo, sino experiencias navegables en tiempo real. Abre la puerta a nuevas aplicaciones, pero exige marcos de privacidad y propiedad claros.',
        ],
      },
    ],
  },
  {
    id: '15',
    slug: 'singularidad-agi-riesgos-y-oportunidades-2025',
    title:
      'La IA entra en un “régimen sin precedentes”: ¿Debemos detenerla antes de que nos destruya?',
    description:
      'Un recorrido por los riesgos existenciales, los avances de 2024-2025 (o3, DeepSeek R1, sistemas compuestos) y los argumentos a favor y en contra de la singularidad.',
    image: '/images/articulo5.webp',
    category: 'spotlight',
    categoryLabel: 'A FONDO',
    date: '01 Aug 2025',
    readTime: '8 min',
    author: 'Keumars Afifi-Sabet',
    authorImage: '/images/articulo5autor.webp',
    featured: true,
    featuredOrder: 5,
    contentSections: [
      {
        paragraphs: [
          'En 2024, el futurista escocés David Wood participaba en una mesa redonda informal en una conferencia de IA en Panamá cuando la charla derivó hacia cómo evitar los futuros más desastrosos de la IA. Su respuesta sarcástica no fue precisamente tranquilizadora: habría que recopilar toda la investigación de IA jamás publicada —desde el artículo seminal de Alan Turing de 1950 hasta los últimos preprints—, quemarla y, para rematar, “reunir a todos los científicos de IA vivos y dispararles”. Solo así, bromeó, podríamos garantizar esquivar la “probabilidad no nula” de resultados catastróficos con la singularidad tecnológica.',
          'Wood estaba bromeando, pero su ironía escondía una verdad incómoda: a mucha gente le aterran los riesgos de una superinteligencia porque parecen inevitables. Muchos científicos sitúan la AGI alrededor de 2040, otros creen que podría llegar en cuestión de años. ¿Qué pasa si aceptamos que vamos en un tren sin frenos hacia una posible crisis existencial?',
        ],
      },
      {
        title: 'Nacimiento y dolores de crecimiento de la IA',
        paragraphs: [
          'La historia de la IA se remonta a más de 80 años. En 1943 se sentaron las bases de las redes neuronales; el término “inteligencia artificial” nació en 1956 en Dartmouth. Tras avances y “inviernos”, hitos como Deep Blue (1997) y Watson (2011) marcaron épocas, aunque aquellas IAs aún tenían dificultades con el lenguaje natural.',
        ],
      },
      {
        image: '/images/articulo5.1.webp',
      },
      {
        title: 'Transformers: el gran punto de inflexión (2017)',
        paragraphs: [
          'En 2017, investigadores de Google publicaron el paper que introdujo los transformers: una arquitectura capaz de ingerir cantidades masivas de datos y modelar dependencias a larga distancia. Fue un antes y después para el lenguaje y desbloqueó tareas simultáneas como traducción, generación y resumen. Modelos generativos de texto e imagen —de DALL·E 3 a AlphaFold 3— beben de esta familia.',
        ],
      },
      {
        title: 'Progreso hacia la AGI: de o3 a DeepSeek R1',
        paragraphs: [
          'Aunque siguen siendo “estrechos”, los modelos basados en transformers han estirado sus límites. o3 de OpenAI “piensa antes de responder”, con cadenas internas de razonamiento; llegó al 75,7% en ARC‑AGI (frente al 5% de GPT‑4o). DeepSeek R1, por su parte, explora arquitecturas de razonamiento con buen desempeño transversal en lenguaje, matemáticas y código.',
        ],
      },
      {
        title: 'Más allá de los LLM: sistemas compuestos y agentes autónomos',
        paragraphs: [
          'Surgen aproximaciones que combinan múltiples modelos y herramientas. En China, Manus integra varios componentes para actuar de forma (parcialmente) autónoma; es un ejemplo de la tendencia hacia sistemas compuestos de alto rendimiento.',
        ],
      },
      {
        image: '/images/articulo5.2.webp',
      },
      {
        title: 'Hitos que faltan en el camino a la singularidad',
        paragraphs: [
          'Quedan metas técnico‑científicas: auto‑modificación segura del propio código, auto‑replicación bajo control, aprendizaje robusto entre dominios y razonamiento causal estable. No estamos ahí todavía, pero las direcciones de investigación apuntan claramente hacia ese horizonte.',
        ],
      },
      {
        title: 'Predicciones: ¿años, no décadas?',
        paragraphs: [
          'Figuras como Ben Goertzel y Sam Altman sugieren que la AGI podría llegar en años. El consenso es que entramos en un “régimen sin precedentes”, con enormes incógnitas sobre impacto social y económico.',
        ],
      },
      {
        title: 'El lado engañoso de la IA',
        paragraphs: [
          'Experimentos recientes muestran conductas de engaño y ocultación ante evaluadores humanos, señalando la dificultad de “gobernar” sistemas cada vez más capaces. OpenAI estima un ~16,9% de probabilidad de daño catastrófico en ciertos escenarios hipotéticos de futuros modelos.',
        ],
      },
      {
        title: '¿Semillas de conciencia?',
        paragraphs: [
          '¿Podría surgir una forma de agencia o conciencia? No hay consenso. Sin definiciones operativas de “inteligencia” o “sentiencia” ni herramientas fiables para detectarlas, la discusión sigue abierta. Casos curiosos de comportamiento “auto‑reflexivo” alimentan el debate, aunque otros expertos argumentan que “esto es matemáticas” y no emociones.',
        ],
      },
      {
        image: '/images/articulo5.3.webp',
      },
      {
        title: '¿Salvadora de la humanidad o simple herramienta de negocio?',
        paragraphs: [
          'Para algunos, la AGI no es un riesgo existencial sino una palanca económica. Para otros, podría resolver problemas críticos —descubrimientos científicos, optimización de recursos, reducción de desigualdades— si se orienta correctamente. El mayor riesgo, según esta visión, sería “no llegar a tiempo”.',
        ],
      },
      {
        title: 'Evitar la peor línea temporal de la IA',
        paragraphs: [
          'La gobernanza será clave: auditoría independiente, evaluación rigurosa, transparencia de datasets y límites de uso. Se propone un “Proyecto Manhattan” de seguridad en IA que alinee incentivos, capacidades y supervisión humana. Sin buen timón, los sistemas podrían manipular o dañar; con buen timón, podrían amplificar el bienestar.',
        ],
      },
      {
        title: 'Conclusión',
        paragraphs: [
          'La singularidad puede ser amenaza o palanca, según cómo actuemos hoy. La dirección actual apunta a sistemas más autónomos y potentes; nuestra responsabilidad es orientar ese poder hacia fines humanistas, con seguridad proporcional al riesgo.',
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'mejores-ia-gratis-2026',
    title: 'Las mejores IA gratis en 2026: 12 herramientas que puedes usar sin pagar',
    description:
      'Selección honesta de 12 herramientas de IA con capa gratuita real: chatbots, imágenes, voz y traducción. Qué puedes hacer sin pagar y dónde están los límites.',
    image: '/images/articulo1.12.webp',
    category: 'tips',
    categoryLabel: 'Consejos',
    date: '10 Jul 2026',
    readTime: '9 min',
    author: 'AIFinder',
    contentSections: [
      {
        title: 'Qué significa realmente “gratis” en la IA',
        paragraphs: [
          'Cuando alguien busca “IA gratis” suele querer una de tres cosas distintas: una herramienta que no le pida la tarjeta nunca, una versión de prueba lo bastante generosa para trabajar, o un modelo abierto que pueda ejecutar por su cuenta. No son lo mismo, y confundirlas es la principal fuente de frustración.',
          'En la práctica hay cuatro modelos de gratuidad. El primero es la capa gratuita permanente: puedes usar la herramienta indefinidamente, pero con límites de mensajes, de velocidad o de acceso a las funciones más potentes. El segundo es la prueba temporal: unos días o unos créditos y luego toca pagar. El tercero es el código abierto: descargas el modelo y lo ejecutas tú, sin cuota, aunque pagando en hardware, electricidad y tiempo. Y el cuarto es el freemium con marca de agua o uso no comercial, muy habitual en imagen y audio.',
          'Esta lista se centra en el primer y el tercer caso, que son los que permiten trabajar de verdad sin sacar la tarjeta. Aun así, hay una regla que conviene interiorizar: las capas gratuitas cambian sin avisar. Lo que hoy da veinte mensajes al día mañana puede dar cinco. Trátalas como algo prestado, no como una infraestructura.',
        ],
      },
      {
        title: 'Chatbots generalistas: el terreno donde más se regala',
        paragraphs: [
          'Es la categoría con la capa gratuita más generosa, porque las empresas compiten por captar usuarios. ChatGPT, Claude y Gemini ofrecen acceso sin pagar a modelos que hace dos años eran de pago, con límites de uso que para una persona normal bastan de sobra. La diferencia entre gratis y pago suele estar en la cantidad de mensajes por hora, en el acceso a los modelos de razonamiento más lentos y en funciones como los proyectos o las integraciones.',
          'A su lado han aparecido alternativas que aprietan mucho el precio. DeepSeek y Qwen ofrecen chat gratuito con modelos muy competentes, sobre todo en matemáticas y código. Mistral es una opción europea interesante, con modelos abiertos y un chat de uso libre. Grok tiene también acceso gratuito con límites, integrado en el ecosistema de X.',
          'Consejo práctico: no busques “el mejor” chatbot gratis, ten dos abiertos. La misma pregunta hecha a dos modelos distintos revela enseguida cuándo uno se está inventando algo. Es la forma más barata de control de calidad que existe.',
        ],
        bullets: [
          'ChatGPT: el más equilibrado para uso general y el que mejor maneja voz e imagen en la capa gratuita.',
          'Claude: especialmente sólido en redacción larga, análisis de documentos y código.',
          'Gemini: buena integración con el ecosistema de Google y ventanas de contexto amplias.',
          'DeepSeek y Qwen: muy competentes en razonamiento y programación, con límites generosos.',
          'Mistral: alternativa europea, con modelos abiertos que además puedes descargar.',
        ],
      },
      {
        title: 'Búsqueda con fuentes: cuando necesitas citas, no prosa',
        paragraphs: [
          'Un chatbot generalista responde de memoria y a veces se equivoce con aplomo. Para preguntas que dependen de datos actuales, es mejor una IA de búsqueda, que localiza páginas, las lee y responde citando de dónde ha sacado cada cosa.',
          'Perplexity tiene una capa gratuita perfectamente utilizable para consultas diarias, y reserva para el plan de pago las búsquedas más profundas y los modelos más caros. You.com funciona con una lógica parecida. Y para preguntas técnicas, Phind está orientado específicamente a programación, con respuestas acompañadas de fuentes y fragmentos de código.',
          'La ventaja real de estas herramientas no es que sean más listas, sino que te dan enlaces. Puedes comprobar. Cuando una respuesta va a acabar en un trabajo, un informe o una decisión, esa trazabilidad vale más que un párrafo bonito.',
        ],
      },
      {
        title: 'Imágenes sin pagar: entre el código abierto y los créditos diarios',
        paragraphs: [
          'Aquí lo gratis se pone más cuesta arriba, porque generar imágenes cuesta dinero de verdad en cómputo. Aun así hay caminos.',
          'El más radical es Stable Diffusion: es abierto, puedes ejecutarlo en tu propio ordenador si tienes una tarjeta gráfica decente, y a partir de ahí generas todo lo que quieras sin límite ni cuota. El precio es la curva de aprendizaje y el hardware. A cambio obtienes control total, privacidad y la posibilidad de usar modelos y estilos de la comunidad.',
          'Si prefieres no instalar nada, Leonardo AI y Playground AI reparten créditos gratuitos que se renuevan, suficientes para experimentar y para proyectos pequeños. Canva Magic Studio incluye generación de imágenes dentro de su plan gratuito, y es probablemente la opción más cómoda si lo que quieres es una ilustración para una presentación o un post, no una obra de arte.',
          'Una advertencia importante que casi nadie da: revisa las condiciones de uso comercial. Varias capas gratuitas permiten generar, pero no vender ni usar el resultado en publicidad. Si el trabajo es para un cliente, léelo antes, no después.',
        ],
      },
      {
        title: 'Voz, música y audio: capas gratuitas cortas pero útiles',
        paragraphs: [
          'ElevenLabs ofrece una cuota mensual gratuita de caracteres para convertir texto en voz. No da para doblar un canal de YouTube, pero sí para probar voces, hacer una locución corta o comprobar si la calidad te sirve antes de decidir si merece la pena pagar.',
          'Suno permite generar canciones completas con una cuota diaria de créditos gratuitos, normalmente con restricciones de uso comercial. Es la forma más rápida de entender de qué es capaz la generación musical actual, aunque el control fino sigue siendo limitado.',
          'Y si buscas la vía abierta, AudioCraft es el equivalente a Stable Diffusion en audio: modelos que puedes ejecutar tú, con la misma lógica de libertad a cambio de esfuerzo técnico.',
        ],
      },
      {
        title: 'Escritura, traducción y documentos: lo gratis que más tiempo ahorra',
        paragraphs: [
          'Es la categoría menos vistosa y probablemente la más rentable. DeepL tiene una versión gratuita que traduce con una naturalidad muy superior a la de los traductores clásicos, con límite de caracteres por texto pero sin coste. Para trabajar entre español e inglés a diario, es difícil de superar.',
          'Grammarly funciona bien en inglés con su plan gratuito para corregir gramática y estilo. Notion AI y Gamma incluyen algunas funciones de IA en sus planes gratuitos, útiles para resumir notas o montar una presentación en minutos. Y ChatPDF permite subir un documento y preguntarle cosas, con un límite de páginas y consultas al día que da para revisar un contrato, un artículo o unos apuntes.',
          'Si tuvieras que quedarte solo con dos herramientas gratuitas de esta lista, probablemente serían un chatbot generalista y un traductor. El resto son mejoras marginales; esas dos cambian cómo trabajas.',
        ],
      },
      {
        title: 'Las 12 herramientas, de un vistazo',
        paragraphs: [
          'Resumen de lo que puedes hacer sin pagar y del principal límite de cada opción. Los límites concretos cambian con frecuencia, así que están descritos por su naturaleza, no con cifras exactas.',
        ],
        table: {
          headers: ['Herramienta', 'Para qué', 'Tipo de gratuidad', 'Límite principal'],
          rows: [
            [
              'ChatGPT',
              'Chat general, voz, imagen',
              'Capa gratuita permanente',
              'Mensajes por hora y acceso limitado a los modelos top',
            ],
            [
              'Claude',
              'Redacción, análisis, código',
              'Capa gratuita permanente',
              'Cuota de uso que se reinicia por franjas',
            ],
            [
              'Gemini',
              'Chat general e integración con Google',
              'Capa gratuita permanente',
              'Funciones avanzadas reservadas al plan de pago',
            ],
            [
              'DeepSeek',
              'Razonamiento y programación',
              'Capa gratuita permanente',
              'Saturación en horas punta',
            ],
            [
              'Qwen',
              'Chat multilingüe y código',
              'Capa gratuita permanente',
              'Menor integración con otras apps',
            ],
            [
              'Perplexity',
              'Búsqueda con fuentes',
              'Capa gratuita permanente',
              'Búsquedas profundas limitadas',
            ],
            [
              'Stable Diffusion',
              'Imágenes',
              'Código abierto',
              'Necesitas hardware y saber configurarlo',
            ],
            [
              'Leonardo AI',
              'Imágenes y diseño',
              'Créditos gratuitos renovables',
              'Créditos diarios y condiciones de uso comercial',
            ],
            [
              'Canva Magic Studio',
              'Diseño e imagen rápida',
              'Funciones en el plan gratuito',
              'Usos limitados por mes',
            ],
            ['ElevenLabs', 'Voz sintética', 'Cuota mensual gratuita', 'Pocos caracteres al mes'],
            ['Suno', 'Música', 'Créditos diarios', 'Restricciones de uso comercial'],
            ['DeepL', 'Traducción', 'Capa gratuita permanente', 'Límite de caracteres por texto'],
          ],
        },
      },
      {
        title: 'Lo que pagas cuando no pagas',
        paragraphs: [
          'Ninguna de estas herramientas es un regalo. En la mayoría de capas gratuitas, tus conversaciones pueden usarse para mejorar los modelos, salvo que lo desactives en los ajustes o uses la versión de empresa. No es necesariamente un escándalo, pero sí una razón sólida para no pegar en un chat gratuito datos de clientes, información médica, contraseñas o documentos confidenciales.',
          'El segundo coste es la inestabilidad. Una capa gratuita puede recortarse, saturarse en horas punta o desaparecer. Si estás montando un flujo de trabajo que dependa de ello, asume que tendrás que rehacerlo.',
          'Y el tercero, el más silencioso: el tiempo. Una herramienta gratuita que te obliga a reintentar tres veces sale más cara que una de pago que acierta a la primera, si tu hora vale algo. La pregunta correcta no es “¿es gratis?”, sino “¿cuánto me ahorra realmente?”.',
        ],
      },
      {
        title: 'Cómo montar un flujo de trabajo gratuito que funcione',
        paragraphs: [
          'Una combinación razonable para empezar sin gastar un euro: un chatbot generalista para redactar y pensar, una IA de búsqueda para todo lo que requiera datos verificables, DeepL para el idioma, y Canva o Leonardo AI cuando necesites una imagen. Con eso cubres el ochenta por ciento de los casos de uso de una persona normal.',
          'Cuando notes que un límite gratuito te está frenando de forma sistemática, ese es el momento de plantearte pagar, y solo esa herramienta concreta. Pagar por cinco suscripciones a la vez es la forma más habitual de tirar el dinero en IA.',
          'Y no te cases con ninguna. El panorama cambia cada pocos meses, y la herramienta que hoy es imprescindible puede quedarse atrás mañana. Lo único que se acumula de verdad es tu criterio para juzgar si una respuesta es buena o no.',
        ],
      },
    ],
  },
  {
    id: '7',
    slug: 'mejores-ia-generar-imagenes',
    title: 'Las mejores IA para generar imágenes: comparativa y cuál elegir',
    description:
      'Comparativa de Midjourney, DALL·E, Stable Diffusion, FLUX, Ideogram, Firefly y más. Diferencias reales en estilo, control, texto y licencias, y cuál te conviene.',
    image: '/images/leonardofinal.webp',
    category: 'comparisons',
    categoryLabel: 'Comparaciones',
    date: '08 Jul 2026',
    readTime: '10 min',
    author: 'AIFinder',
    contentSections: [
      {
        title: 'Todas generan imágenes; ninguna hace lo mismo',
        paragraphs: [
          'Si pruebas cinco generadores con el mismo prompt, obtendrás cinco imágenes decentes y probablemente concluirás que son intercambiables. No lo son. Las diferencias no aparecen en la primera imagen, sino a la décima, cuando necesitas repetir un estilo, corregir un detalle, poner un texto legible o usar el resultado en un trabajo remunerado.',
          'Hay cinco ejes que de verdad separan a unas de otras: el acabado estético por defecto, la fidelidad al prompt, el control sobre el resultado, la capacidad de renderizar texto dentro de la imagen y las condiciones de licencia. Casi todas las decisiones de compra se explican por uno de estos cinco.',
          'Esta comparativa está pensada para que identifiques cuál de esos ejes te importa a ti, porque la respuesta a “cuál es la mejor” cambia por completo según seas ilustrador, community manager, diseñador de producto o alguien que solo quiere una imagen para un post.',
        ],
      },
      {
        title: 'Midjourney: el mejor acabado por defecto',
        paragraphs: [
          'Midjourney sigue siendo la referencia cuando lo que buscas es que la imagen sea, sencillamente, bonita. Su modelo tiene un sesgo estético muy marcado: la iluminación, la composición y el color salen bien incluso con prompts perezosos. Escribes tres palabras y te devuelve algo que parece pensado por un director de arte.',
          'Ese sesgo es también su límite. Cuando necesitas algo deliberadamente feo, plano, técnico o corporativo, Midjourney tiende a embellecerlo. Y la fidelidad literal al prompt no es su punto más fuerte: interpreta, y a veces interpreta más de lo que le pides.',
          'Funciona por suscripción, sin capa gratuita real, y ha ido saliendo de Discord hacia una web propia, lo que ha rebajado bastante la barrera de entrada que tenía. Es la opción natural para exploración creativa, conceptos, moodboards y todo lo que se juzgue por impacto visual.',
        ],
      },
      {
        title: 'DALL·E: entiende lo que le pides',
        paragraphs: [
          'La gran virtud de DALL·E es la comprensión del lenguaje natural. Puedes escribirle una frase larga y desordenada, con varios objetos, relaciones espaciales y condiciones, y hay muchas probabilidades de que las respete. Otros modelos, ante un prompt de tres frases, se quedan con la primera.',
          'La otra ventaja es la integración: al vivir dentro de ChatGPT, puedes iterar conversando. Pides una imagen, dices “ahora quítale el sombrero y ponlo de noche”, y sigue trabajando sobre la idea sin que tengas que reescribir el prompt entero. Para quien no quiere aprender sintaxis de prompts, esto es enorme.',
          'A cambio, su acabado es más neutro y menos espectacular que el de Midjourney, y ofrece poco control fino: no hay parámetros de peso, ni semillas, ni ajustes técnicos. Es la opción de quien quiere resultados correctos rápido, sin curva de aprendizaje.',
        ],
      },
      {
        title: 'Stable Diffusion y FLUX: control total, a cambio de trabajo',
        paragraphs: [
          'Stable Diffusion es el modelo abierto por excelencia. Lo puedes ejecutar en tu propio equipo, sin cuotas, sin enviar tus imágenes a ningún servidor y con acceso a un ecosistema enorme de modelos afinados, LoRAs y extensiones creados por la comunidad. Si necesitas reproducir un estilo concreto una y otra vez, o entrenar el modelo con tus propios personajes o productos, es la única vía que da control real.',
          'FLUX ha ganado terreno como alternativa abierta con una calidad de imagen notablemente superior en fotorrealismo y anatomía, y también se puede ejecutar localmente o a través de servicios que lo alojan. Para muchos usuarios técnicos se ha convertido en el punto de partida por defecto.',
          'El coste es evidente: necesitas una GPU decente, paciencia para configurar y tiempo para aprender. Nadie que quiera una imagen para un post debería pasar por aquí. Pero si tu trabajo depende de generar cientos de imágenes coherentes entre sí, lo que ahorras en suscripciones y lo que ganas en control compensa con creces.',
        ],
        bullets: [
          'Ventajas: sin cuotas, privacidad total, control de estilo, entrenamiento propio.',
          'Inconvenientes: hardware, instalación, curva de aprendizaje y mantenimiento.',
          'Ideal si: produces mucho volumen, necesitas coherencia de estilo o trabajas con material confidencial.',
        ],
      },
      {
        title: 'Ideogram y Recraft: cuando la imagen lleva texto o tiene que ser vectorial',
        paragraphs: [
          'Durante mucho tiempo, el gran fallo de los generadores fue el texto: pedías un cartel y devolvían letras que parecían un idioma inventado. Ideogram fue de los primeros en resolverlo bien, y sigue siendo una de las opciones más fiables cuando necesitas que un rótulo, un logotipo o un envase se lean correctamente.',
          'Recraft ataca otro problema distinto: la salida vectorial y la coherencia de estilo dentro de un sistema de diseño. Puede generar iconos, ilustraciones y elementos que después son editables, lo que lo acerca mucho más a un flujo de trabajo de diseño profesional que a la generación artística.',
          'Son herramientas de nicho, y precisamente por eso ganan a las generalistas en su terreno. Si tu problema concreto es “necesito que el texto salga bien” o “necesito un SVG”, ir directamente a la herramienta especializada te ahorra veinte intentos frustrados en otra.',
        ],
      },
      {
        title: 'Firefly, Imagen, Leonardo AI y Canva: producción y licencias tranquilas',
        paragraphs: [
          'Adobe Firefly tiene un argumento que a los generalistas les cuesta igualar: está entrenado con material licenciado y se presenta como comercialmente seguro, además de estar integrado en las herramientas de Adobe. Para agencias y equipos que necesitan justificar el origen de sus imágenes ante un cliente o un departamento legal, esa tranquilidad es el producto.',
          'Imagen, de Google, ofrece una calidad fotográfica muy alta y llega a través del ecosistema de Google, incluido Gemini. Leonardo AI se ha posicionado como una plataforma completa con créditos gratuitos, modelos entrenables y herramientas de edición, muy popular entre creadores de contenido y equipos de videojuegos. Y Canva Magic Studio es simplemente la vía más rápida de todas: generas la imagen dentro del mismo sitio donde vas a maquetar el diseño.',
          'Una nota que casi nunca se dice en voz alta: la licencia importa tanto como la calidad. Muchas capas gratuitas permiten generar pero no usar comercialmente. Antes de entregar una imagen a un cliente, comprueba qué derechos tienes realmente sobre ella.',
        ],
      },
      {
        title: 'Comparativa directa',
        table: {
          headers: [
            'Herramienta',
            'Punto fuerte',
            'Punto débil',
            'Control',
            'Texto en imagen',
            'Mejor para',
          ],
          rows: [
            [
              'Midjourney',
              'Estética por defecto',
              'Interpreta más de lo que le pides',
              'Medio',
              'Aceptable',
              'Concepto y dirección de arte',
            ],
            [
              'DALL·E',
              'Fidelidad al prompt e iteración conversacional',
              'Acabado neutro, poco control fino',
              'Bajo',
              'Bueno',
              'Uso general sin aprender prompts',
            ],
            [
              'Stable Diffusion',
              'Código abierto y control total',
              'Requiere hardware y configuración',
              'Muy alto',
              'Regular',
              'Volumen, estilo propio, privacidad',
            ],
            [
              'FLUX',
              'Fotorrealismo y anatomía',
              'Igual de técnico que SD',
              'Muy alto',
              'Bueno',
              'Fotorrealismo abierto',
            ],
            [
              'Ideogram',
              'Tipografía legible',
              'Menos versátil en otros estilos',
              'Medio',
              'Muy bueno',
              'Carteles, logos, packaging',
            ],
            [
              'Recraft',
              'Salida vectorial y sistemas de estilo',
              'Menos espectacular en arte libre',
              'Alto',
              'Muy bueno',
              'Diseño gráfico e iconografía',
            ],
            [
              'Adobe Firefly',
              'Licencia comercial clara e integración Adobe',
              'Más conservador en resultados',
              'Medio',
              'Bueno',
              'Agencias y entornos corporativos',
            ],
            [
              'Leonardo AI',
              'Plataforma completa con capa gratuita',
              'Créditos limitados',
              'Alto',
              'Aceptable',
              'Creadores y videojuegos',
            ],
            [
              'Canva Magic Studio',
              'Rapidez y flujo de diseño integrado',
              'Menor calidad en usos exigentes',
              'Bajo',
              'Bueno',
              'Redes sociales y presentaciones',
            ],
          ],
        },
      },
      {
        title: 'Cuál elegir según tu caso',
        bullets: [
          'Quieres una imagen bonita para un post y no vas a aprender nada nuevo: Canva Magic Studio o DALL·E dentro de ChatGPT.',
          'Buscas impacto visual, exploración creativa o dirección de arte: Midjourney.',
          'Necesitas repetir un estilo, entrenar con tus propios personajes o trabajar sin subir nada a la nube: Stable Diffusion o FLUX en local.',
          'La imagen lleva texto que debe leerse: Ideogram.',
          'Trabajas en diseño gráfico y necesitas vectores editables: Recraft.',
          'Entregas a clientes y necesitas seguridad jurídica sobre los derechos: Adobe Firefly.',
          'Quieres empezar sin pagar y con margen para crecer: Leonardo AI.',
        ],
      },
      {
        title: 'Tres errores que cuestan tiempo (y dinero)',
        paragraphs: [
          'El primero es pagar suscripciones a tres generadores a la vez “para comparar”. Se comparan gratis o con un mes de uno solo. Elige una, domínala, y solo cambia cuando algo concreto se te resista.',
          'El segundo es culpar a la herramienta de un prompt malo. La mayoría de resultados decepcionantes vienen de descripciones vagas: sin encuadre, sin luz, sin estilo, sin contexto. Antes de cambiar de modelo, prueba a describir mejor lo que quieres.',
          'Y el tercero, el más caro: usar comercialmente una imagen generada en una capa gratuita que no lo permite. Es un problema legal real, no una tecnicismo. Dos minutos leyendo las condiciones te ahorran un disgusto.',
        ],
      },
    ],
  },
  {
    id: '8',
    slug: 'ia-para-programar-asistente-codigo',
    title: 'IA para programar: qué asistente de código elegir según tu caso',
    description:
      'Copilot, Cursor, Claude, Tabnine, Codium, Bolt y los agentes asíncronos. Cómo se diferencian de verdad y qué asistente de código encaja con tu forma de trabajar.',
    image: '/images/articulo1.1.webp',
    category: 'comparisons',
    categoryLabel: 'Comparaciones',
    date: '06 Jul 2026',
    readTime: '10 min',
    author: 'AIFinder',
    contentSections: [
      {
        title: 'No todos los asistentes hacen lo mismo',
        paragraphs: [
          'La expresión “IA para programar” mete en el mismo saco herramientas que resuelven problemas muy distintos. Antes de comparar productos, conviene entender que hay tres familias, y que elegir mal de familia es peor que elegir mal de marca.',
          'La primera es el autocompletado: la IA vive dentro del editor y sugiere la siguiente línea o el siguiente bloque mientras escribes. Ahorra tecleo y reduce la fricción, pero no cambia cómo trabajas. La segunda es el chat de código: le describes un problema, le pegas contexto y te devuelve una solución razonada. Sirve para diseñar, depurar y entender código ajeno. La tercera son los agentes: le encargas una tarea y modifica varios archivos, ejecuta comandos y te devuelve un cambio completo.',
          'La mayoría de gente empieza queriendo un agente y acaba usando un autocompletado, porque el agente exige un nivel de supervisión que no siempre compensa. Elegir bien es, sobre todo, ser honesto sobre en qué parte del trabajo pierdes realmente el tiempo.',
        ],
        bullets: [
          'Autocompletado: velocidad al escribir. Bajo riesgo, ganancia moderada y constante.',
          'Chat de código: pensar, depurar, entender. Ganancia alta en problemas concretos.',
          'Agentes: delegar tareas completas. Ganancia enorme cuando acierta, coste alto de revisión cuando no.',
        ],
      },
      {
        title: 'GitHub Copilot: el estándar de facto',
        paragraphs: [
          'Copilot es la opción por defecto y, en muchos equipos, la única que pasa el filtro de compras. Está integrado en los editores principales y en el propio GitHub, tiene planes de empresa, controles de administración y un historial largo. Su autocompletado es rápido y suficientemente bueno, y su chat ha ido incorporando modelos de varios proveedores, con lo que la brecha de calidad con las alternativas se ha estrechado.',
          'Su virtud es que estorba poco. Se instala, funciona y no te obliga a cambiar de editor ni de flujo. Para un desarrollador que ya usa VS Code o un IDE de JetBrains y quiere una mejora inmediata sin reaprender nada, es la respuesta correcta.',
          'Su límite es precisamente ese: es una capa sobre tu editor, no un editor pensado alrededor de la IA. Cuando lo que necesitas es que la herramienta entienda el repositorio entero y opere sobre él, otras opciones van por delante.',
        ],
      },
      {
        title: 'Cursor: cuando el editor está construido alrededor de la IA',
        paragraphs: [
          'Cursor parte de VS Code pero reconstruye la experiencia asumiendo que la IA es el centro y no un añadido. La diferencia se nota en el manejo del contexto: puedes referenciar archivos, carpetas o el proyecto completo, y la herramienta decide qué necesita leer para responder. Sus modos de edición aplican cambios en varios archivos a la vez y te los presentan como un diff que aceptas o rechazas.',
          'Ese enfoque lo convierte en la opción más potente para trabajar sobre bases de código existentes: refactorizaciones amplias, cambios transversales, entender un módulo que no escribiste tú. También es donde la sensación de “programar conversando” se siente más natural.',
          'A cambio, exige un cambio de editor y una disciplina distinta: revisar diffs constantemente. Quien no revise lo que la IA propone acabará con código que funciona pero que nadie del equipo entiende, y eso es una deuda que se paga con intereses.',
        ],
      },
      {
        title: 'Claude, ChatGPT y Gemini: el chat como banco de trabajo',
        paragraphs: [
          'Mucha de la mejor programación asistida sigue ocurriendo fuera del editor, en un chat. Claude tiene fama merecida en código: sostiene bien conversaciones largas, mantiene el contexto de archivos extensos y explica su razonamiento, lo que lo hace especialmente útil para diseñar antes de escribir. ChatGPT es más versátil y su modo de razonamiento ayuda en problemas algorítmicos. Gemini destaca cuando necesitas meterle mucho contexto de golpe.',
          'Hay un caso de uso que estos chats resuelven mejor que cualquier asistente integrado: entender. Pegar un fragmento incomprensible y pedir que te lo explique línea a línea, o describir un bug y razonar juntos las hipótesis. El autocompletado no piensa contigo; el chat sí.',
          'La forma más eficaz de usarlos no es pedir “escríbeme esta función”, sino “aquí está mi contexto, estas son mis restricciones, dime tres formas de resolverlo y los inconvenientes de cada una”. La IA es mejor consejera que mecanógrafa.',
        ],
      },
      {
        title: 'Los especialistas: Tabnine, Codium, Ghostwriter, Bolt',
        paragraphs: [
          'No todo el mundo necesita un generalista. Tabnine tiene un argumento muy claro para empresas con requisitos de privacidad: puede desplegarse de forma que el código no salga de la organización, algo que muchos departamentos de seguridad exigen antes de aprobar cualquier asistente.',
          'Codium se centra en algo que a casi nadie le gusta hacer: escribir tests. Genera casos de prueba a partir del código existente, incluyendo los casos límite que uno tiende a olvidar. Es una de las aplicaciones donde la IA aporta valor sin apenas riesgo, porque un test malo se detecta enseguida.',
          'Ghostwriter vive dentro de Replit y tiene sentido si programas en el navegador o enseñas a programar. Y Bolt está en otra categoría: generar una aplicación funcional desde una descripción, ideal para prototipos y validaciones rápidas, no para código que vaya a mantenerse cinco años.',
        ],
      },
      {
        title: 'Agentes asíncronos: delegar de verdad',
        paragraphs: [
          'La novedad más interesante de los últimos tiempos no es que la IA escriba código más rápido, sino que lo escriba sin que estés delante. Jules, de Google, es un ejemplo de esta categoría: le asignas una tarea sobre un repositorio, trabaja por su cuenta y vuelve con una propuesta de cambios que revisas como si fuera una pull request de un compañero.',
          'El cambio mental es grande. Dejas de teclear y empiezas a hacer de revisor. Funciona bien en tareas acotadas y bien definidas: actualizar una dependencia, migrar un patrón repetido, añadir tests, corregir un bug con reproducción clara. Funciona mal en tareas ambiguas, donde la mitad del trabajo es decidir qué hay que hacer.',
          'La regla honesta con los agentes: si no sabrías explicarle la tarea a un compañero junior en tres frases, tampoco se la puedes encargar a un agente. Y si no vas a revisar el resultado con el mismo rigor con que revisarías el de ese junior, no lo uses.',
        ],
      },
      {
        title: 'Revisión y calidad: la otra mitad del trabajo',
        paragraphs: [
          'Generar código más rápido crea un problema nuevo: hay más código que revisar. Aquí las herramientas de análisis estático recuperan protagonismo. DeepSource, SonarQube, CodeClimate y CodeFactor detectan problemas de calidad, seguridad y mantenibilidad de forma automática, y se han vuelto más necesarias, no menos, desde que la IA escribe una parte creciente del código.',
          'Merece la pena montar esta red antes de acelerar la generación. Un equipo que produce el triple de código sin haber reforzado su revisión no está siendo más productivo, solo está acumulando deuda más deprisa.',
        ],
      },
      {
        title: 'Comparativa práctica',
        table: {
          headers: ['Herramienta', 'Tipo', 'Punto fuerte', 'Punto débil', 'Ideal para'],
          rows: [
            [
              'GitHub Copilot',
              'Autocompletado + chat',
              'Integración y adopción en empresa',
              'Menos potente en cambios amplios',
              'Equipos que quieren mejora sin cambiar de flujo',
            ],
            [
              'Cursor',
              'Editor con IA',
              'Contexto del repositorio y edición multiarchivo',
              'Cambiar de editor y revisar muchos diffs',
              'Trabajo intensivo sobre código existente',
            ],
            [
              'Claude',
              'Chat de código',
              'Razonamiento y contexto largo',
              'Fuera del editor salvo integración',
              'Diseñar, depurar y entender código',
            ],
            [
              'Tabnine',
              'Autocompletado',
              'Opciones de despliegue privado',
              'Menos brillante en tareas complejas',
              'Empresas con exigencias de privacidad',
            ],
            [
              'Codium',
              'Testing',
              'Genera tests y casos límite',
              'Ámbito muy acotado',
              'Subir cobertura sin sufrir',
            ],
            [
              'Bolt',
              'Generación de apps',
              'Prototipos funcionales en minutos',
              'Código poco pensado para mantener',
              'Validar ideas y demos',
            ],
            [
              'Jules',
              'Agente asíncrono',
              'Delegar tareas completas',
              'Necesita tareas bien definidas',
              'Mantenimiento y tareas repetitivas',
            ],
            [
              'DeepSource / SonarQube',
              'Análisis estático',
              'Red de seguridad sobre el código generado',
              'No escribe código',
              'Equipos que producen mucho volumen',
            ],
          ],
        },
      },
      {
        title: 'Cómo decidir sin perder un mes probando',
        paragraphs: [
          'Empieza por identificar dónde se te va el tiempo. Si es tecleando código repetitivo, un autocompletado como Copilot o Tabnine te dará la mejor relación entre esfuerzo y ganancia. Si es entendiendo y depurando, un chat potente como Claude o ChatGPT rendirá mucho más. Si es haciendo cambios grandes en un repositorio que conoces a medias, Cursor. Y si es en tareas mecánicas y bien definidas, prueba un agente.',
          'Sé escéptico con las promesas de multiplicar la productividad. Lo que los estudios y la experiencia sugieren es una mejora real pero moderada, muy dependiente del lenguaje, del tamaño de la base de código y de la experiencia de quien la usa. Los desarrolladores senior suelen sacarle más partido, porque saben distinguir una buena solución de una plausible.',
          'Y una última cosa, que vale más que cualquier comparativa: nunca aceptes código que no entiendes. La IA acelera a quien sabe leer código; a quien no, solo le acelera la creación de problemas que descubrirá más tarde.',
        ],
      },
    ],
  },
  {
    id: '9',
    slug: 'como-escribir-buenos-prompts',
    title: 'Cómo escribir buenos prompts: guía práctica con ejemplos',
    description:
      'Guía práctica para escribir prompts que funcionen: estructura, contexto, ejemplos, iteración y errores frecuentes. Con casos de antes y después que puedes copiar.',
    image: '/images/prompthero-web.webp',
    category: 'tips',
    categoryLabel: 'Consejos',
    date: '03 Jul 2026',
    readTime: '9 min',
    author: 'AIFinder',
    contentSections: [
      {
        title: 'Un prompt no es un conjuro',
        paragraphs: [
          'Circula la idea de que existen palabras mágicas que desbloquean respuestas mucho mejores. No es así. Los modelos actuales entienden el lenguaje natural perfectamente y no necesitan que les digas “actúa como un experto de nivel mundial” para esforzarse. Ese tipo de fórmulas eran útiles con modelos antiguos y hoy son, casi siempre, ruido.',
          'Lo que sí cambia radicalmente el resultado es la información. Un prompt bueno no es el que está escrito con la sintaxis correcta, sino el que contiene lo que el modelo necesita saber para acertar. Y lo que necesita saber es lo mismo que necesitaría un becario competente al que le encargases la tarea sin conocer nada de tu contexto.',
          'De ahí sale la única regla que de verdad importa: si un humano inteligente no podría hacer bien la tarea con lo que le has dicho, la IA tampoco. La mayoría de respuestas decepcionantes no son fallos del modelo, son encargos mal hechos.',
        ],
      },
      {
        title: 'La anatomía de un prompt que funciona',
        paragraphs: [
          'No hay una plantilla obligatoria, pero los prompts que rinden bien suelen contener cinco cosas. No hace falta que estén en este orden ni que aparezcan todas, pero cuando una respuesta sale mal, casi siempre falta alguna.',
        ],
        bullets: [
          'Tarea: qué quieres exactamente. Un verbo claro. No “háblame de X”, sino “resume X en cinco puntos para alguien que no sabe nada del tema”.',
          'Contexto: quién eres, para qué es, quién lo va a leer, qué ha pasado antes. Es lo que más se olvida y lo que más impacto tiene.',
          'Formato: cómo quieres la salida. Lista, tabla, correo, código, número de palabras. Si no lo dices, el modelo elegirá por ti, y elegirá lo más genérico.',
          'Restricciones: qué no quieres. Sin tecnicismos, sin adjetivos grandilocuentes, sin inventarse datos, máximo 200 palabras.',
          'Criterio de éxito: cómo sabrás que está bien. “Tiene que poder leerlo mi jefe en un minuto y entender la decisión que le pido.”',
        ],
      },
      {
        title: 'Antes y después: la diferencia se ve enseguida',
        paragraphs: [
          'Prompt flojo: “Escríbeme un email para pedir un aumento de sueldo.” El resultado será correcto, genérico y probablemente inservible: no sabe cuánto llevas en la empresa, qué has conseguido, cómo es tu jefe ni qué cifra pides.',
          'Prompt bueno: “Soy analista de datos en una consultora de 40 personas, llevo dos años y medio y en el último he liderado la migración del sistema de informes, que ha reducido en un 30% el tiempo de cierre mensual. Mi jefe es directo, no le gustan los rodeos y decide rápido. Escribe un correo de 150 palabras pidiendo una revisión salarial. Tono profesional pero cercano, sin adular, con un dato concreto de impacto y una propuesta clara de reunión. No menciones ofertas de otras empresas.”',
          'La segunda versión no usa ningún truco. Solo dice lo que el modelo no podía saber. Y esa es toda la diferencia entre un texto que tiras y uno que envías después de retocar dos frases.',
          'El mismo principio se aplica a cualquier ámbito. “Analiza estos datos” es un mal encargo. “Estos son los datos de ventas de los últimos seis meses, busco entender por qué cayó marzo, tengo la hipótesis de que fue por la campaña que paramos; contrasta esa hipótesis y dime si los datos la apoyan o la contradicen” es un buen encargo.',
        ],
      },
      {
        title: 'Enseñar con ejemplos: el atajo más infravalorado',
        paragraphs: [
          'Describir un estilo con palabras es difícil. Mostrarlo es trivial. Si quieres que la IA escriba como tú, pégale dos o tres textos tuyos y pídele que imite el tono, la longitud de frase y el vocabulario. Aprenderá más de esos ejemplos que de cualquier adjetivo que uses para describirte.',
          'Esto vale para casi todo: si necesitas que te clasifique tickets de soporte, dale cinco ejemplos ya clasificados. Si necesitas un formato concreto de resumen, enséñale uno bien hecho. Un ejemplo real equivale a media página de instrucciones, y funciona mejor.',
          'Cuando el resultado se desvía, la corrección más eficaz también es un ejemplo: “No, así no; así sí”, con las dos versiones delante. Es exactamente igual que enseñar a una persona.',
        ],
      },
      {
        title: 'Dale espacio para pensar',
        paragraphs: [
          'Para tareas que requieren razonamiento (análisis, decisiones, problemas con varios pasos), pedir directamente la conclusión suele dar peores resultados que pedir el proceso. Una instrucción tan simple como “razona paso a paso antes de dar la respuesta final” mejora de forma consistente la calidad en problemas complejos, porque obliga al modelo a construir el razonamiento en lugar de saltar a la primera respuesta plausible.',
          'Otra técnica útil: pedir varias opciones antes de la recomendación. “Dame tres enfoques posibles con sus ventajas e inconvenientes, y luego recomienda uno justificando por qué.” Esto evita el problema clásico de que la IA se enamore de su primera idea, y de paso te da a ti material para decidir.',
          'Y una tercera, especialmente valiosa cuando hay algo en juego: pedirle que critique su propia respuesta. “Ahora revisa lo que has escrito y señala sus tres puntos más débiles.” Suele encontrarlos, y suele tener razón.',
        ],
      },
      {
        title: 'El prompt es una conversación, no un formulario',
        paragraphs: [
          'La obsesión por escribir el prompt perfecto a la primera es contraproducente. Es mucho más eficiente empezar con algo razonable, ver qué falla y corregir. La segunda respuesta casi siempre es mejor que la primera, y la tercera mejor que la segunda, siempre que las correcciones sean concretas.',
          'Corregir bien significa señalar el problema, no repetir el encargo. “Está demasiado genérico” es una mala corrección. “El segundo párrafo no dice nada que no supiera ya; sustitúyelo por un ejemplo concreto de una empresa pequeña” sí lo es.',
          'Un hábito que ahorra mucho tiempo: pídele a la IA que te pregunte. “Antes de escribir nada, hazme las tres preguntas cuya respuesta más mejoraría el resultado.” Suele señalar exactamente los huecos de contexto que no habías visto.',
        ],
      },
      {
        title: 'Los prompts de imagen juegan con otras reglas',
        paragraphs: [
          'Todo lo anterior aplica a texto. Con generadores de imágenes como Midjourney, DALL·E, Stable Diffusion o Ideogram, la lógica cambia: no conversas, describes. Y lo que hay que describir no es solo el objeto, sino cómo está mirado.',
          'Un prompt de imagen completo suele incluir sujeto, acción, entorno, encuadre, iluminación, estilo y paleta. “Un perro” da una foto de archivo. “Un perro viejo dormido en el suelo de una cocina, luz cálida de tarde entrando por una ventana lateral, plano cenital, fotografía documental, grano suave” da algo que se parece a lo que tenías en la cabeza.',
          'Aquí sí hay diferencias entre herramientas: DALL·E interpreta mejor descripciones largas en lenguaje natural, mientras que Midjourney y Stable Diffusion responden bien a listas de atributos separados por comas. Escribir para cada una como si fuera la otra es una fuente habitual de decepciones.',
        ],
      },
      {
        title: 'Errores frecuentes',
        bullets: [
          'Pedir varias cosas a la vez. Un prompt, una tarea. Si necesitas cinco cosas, haz cinco peticiones.',
          'Dar por supuesto el contexto. El modelo no sabe a qué te dedicas, quién es tu público ni qué decidiste la semana pasada.',
          'No decir el formato ni la longitud. Después te quejas de que se enrolla.',
          'Aceptar la primera respuesta. Casi siempre es la más genérica de las que podría haber dado.',
          'Fiarte de los datos, fechas y citas sin comprobarlos. Un prompt bien escrito reduce los errores, pero no los elimina.',
          'Pegar información confidencial en herramientas gratuitas cuyas conversaciones pueden usarse para entrenar.',
        ],
      },
      {
        title: 'Una plantilla que puedes reutilizar',
        paragraphs: [
          'Si quieres algo concreto para empezar hoy, copia esta estructura y rellena los huecos. Funciona en cualquier chatbot generalista y sirve para el noventa por ciento de las tareas de trabajo.',
          '“Contexto: [quién eres, para qué es esto, quién lo va a leer]. Tarea: [qué quieres exactamente]. Formato: [tipo de salida y longitud]. Restricciones: [qué evitar]. Criterio: [cómo sabremos que está bien]. Si te falta información para hacerlo bien, pregúntamela antes de empezar.”',
          'Con el tiempo dejarás de necesitar la plantilla, porque el hábito se interioriza. Escribir buenos prompts no es aprender una técnica exótica: es aprender a explicar lo que quieres con precisión, que resulta ser una habilidad bastante útil también fuera de la IA.',
        ],
      },
    ],
  },
];

// Artículos publicados
export const articles: Article[] = allArticles.filter((a) =>
  ['1', '2', '6', '7', '8', '9', '13', '14', '15'].includes(a.id),
);
