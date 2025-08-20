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
];

// Exportar únicamente los 5 artículos creados
export const articles: Article[] = allArticles.filter((a) =>
  ['1', '2', '13', '14', '15'].includes(a.id),
);
