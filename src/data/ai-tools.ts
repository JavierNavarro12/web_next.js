export type AITool = {
  name: string;
  image: string; // Ruta a la imagen grande (web)
  logo?: string; // Ruta al logo cuadrado (móvil)
  description: string; // 2-3 palabras
  pricing?: 'free' | 'paid' | 'freemium'; // Tipo de pricing
  url?: string; // URL de la herramienta
};

export type AISubcategory = {
  name: string;
  tools: AITool[];
};

export type AICategory = {
  name: string;
  subcategories: AISubcategory[];
};

export const aiCategories: AICategory[] = [
  {
    name: 'Generativa',
    subcategories: [
      {
        name: 'Texto',
        tools: [
          {
            name: 'ChatGPT',
            logo: '/logos/chatgpt-movil.png',
            image: '/images/chatgpt-web.png',
            description: 'Generador de texto',
            pricing: 'freemium',
            url: 'https://chat.openai.com',
          },
          {
            name: 'Claude',
            logo: '/logos/claude-movil.png',
            image: '/images/claude-web.png',
            description: 'IA conversacional',
            pricing: 'freemium',
            url: 'https://claude.ai',
          },
          {
            name: 'Gemini',
            logo: '/logos/gemini-movil.png',
            image: '/images/gemini-web.png',
            description: 'IA multimodal',
            pricing: 'freemium',
            url: 'https://gemini.google.com',
          },
          {
            name: 'LLaMA',
            logo: '/logos/llama-movil.webp',
            image: '/images/llama-web.png',
            description: 'Modelo open source',
            pricing: 'free',
            url: 'https://llama.meta.com',
          },
          {
            name: 'Qwen',
            logo: '/logos/qwen-movil.webp',
            image: '/images/qwen-web.png',
            description: 'Modelo de texto',
            pricing: 'free',
            url: 'https://qwenlm.github.io',
          },
          {
            name: 'Mistral',
            logo: '/logos/mistral-movil.png',
            image: '/images/mistral-web.png',
            description: 'Modelo open source',
            pricing: 'freemium',
            url: 'https://mistral.ai',
          },
          {
            name: 'Falcon',
            logo: '/logos/falcon-movil.jpeg',
            image: '/images/falcon-web.png',
            description: 'Modelo open source',
            pricing: 'free',
            url: 'https://huggingface.co/tiiuae/falcon-7b',
          },
          {
            name: 'Grok',
            logo: '/logos/grok-movil.png',
            image: '/images/grok-web.png',
            description: 'IA conversacional',
            pricing: 'paid',
            url: 'https://x.ai',
          },
          {
            name: 'BioGPT',
            logo: '/logos/biogpt-movil.png',
            image: '/images/biogpt-web.png',
            description: 'Texto biomédico',
            pricing: 'free',
            url: 'https://github.com/microsoft/BioGPT',
          },
          {
            name: 'Jasper',
            logo: '/logos/jasper-movil.png',
            image: '/images/jasper-web.png',
            description: 'Copywriting AI',
            pricing: 'paid',
            url: 'https://jasper.ai',
          },
          {
            name: 'Copy.ai',
            logo: '/logos/copyai-movil.jpg',
            image: '/images/copyai-web.png',
            description: 'Copywriting AI',
            pricing: 'freemium',
            url: 'https://copy.ai',
          },
          {
            name: 'Sudowrite',
            logo: '/logos/sudowrite-movil.webp',
            image: '/images/sudowrite-web.png',
            description: 'Asistente de escritura',
            pricing: 'paid',
            url: 'https://sudowrite.com',
          },
          {
            name: 'YouWrite',
            logo: '/logos/youwrite-movil.jpg',
            image: '/images/youwirite-web.png',
            description: 'Generador de texto',
            pricing: 'freemium',
            url: 'https://youwrite.ai',
          },
          {
            name: 'DeepSeek',
            logo: '/logos/deepseek-movil.png',
            image: '/images/deepseek-web.png',
            description: 'IA de texto',
            pricing: 'freemium',
            url: 'https://deepseek.com',
          },
        ],
      },
      {
        name: 'Imágenes',
        tools: [
          { name: 'Midjourney', image: '/globe.svg', description: 'Arte generativo' },
          { name: 'DALL·E', image: '/globe.svg', description: 'Imágenes IA' },
          { name: 'Stable Diffusion', image: '/globe.svg', description: 'Modelo open source' },
          { name: 'Adobe Firefly', image: '/globe.svg', description: 'Imágenes creativas' },
          { name: 'Imagen', image: '/globe.svg', description: 'Modelo de Google' },
          { name: 'FLUX', image: '/globe.svg', description: 'Arte generativo' },
          { name: 'Ideogram', image: '/globe.svg', description: 'Texto a imagen' },
          { name: 'Recraft', image: '/globe.svg', description: 'Diseño IA' },
          { name: 'Leonardo AI', image: '/globe.svg', description: 'Arte generativo' },
          { name: 'Seedream', image: '/globe.svg', description: 'Imágenes IA' },
          { name: 'Aurora', image: '/globe.svg', description: 'Arte generativo' },
          { name: 'Playground AI', image: '/globe.svg', description: 'Imágenes IA' },
        ],
      },
      {
        name: 'Audio / Voz',
        tools: [
          { name: 'ElevenLabs', image: '/globe.svg', description: 'Voz sintética' },
          { name: 'Voicemod', image: '/globe.svg', description: 'Modificador de voz' },
          { name: 'Descript', image: '/globe.svg', description: 'Edición de audio' },
          { name: 'Resemble AI', image: '/globe.svg', description: 'Voz IA' },
          { name: 'Murf', image: '/globe.svg', description: 'Voz sintética' },
          { name: 'Play.ht', image: '/globe.svg', description: 'Texto a voz' },
          { name: 'Speechify', image: '/globe.svg', description: 'Lectura de texto' },
          { name: 'Lovo', image: '/globe.svg', description: 'Voz IA' },
          { name: 'Dubverse', image: '/globe.svg', description: 'Doblaje IA' },
          { name: 'Voice.ai', image: '/globe.svg', description: 'Voz IA' },
          { name: 'Suno', image: '/globe.svg', description: 'Música IA' },
          { name: 'AudioCraft', image: '/globe.svg', description: 'Música IA' },
          { name: 'Colossyan', image: '/globe.svg', description: 'Voz y video IA' },
        ],
      },
      {
        name: 'Video',
        tools: [
          { name: 'Sora', image: '/globe.svg', description: 'Video generativo' },
          { name: 'Veo', image: '/globe.svg', description: 'Video IA' },
          { name: 'Runway', image: '/globe.svg', description: 'Edición de video' },
          { name: 'Pika Labs', image: '/globe.svg', description: 'Video IA' },
          { name: 'Synthesia', image: '/globe.svg', description: 'Avatares IA' },
          { name: 'Colossyan', image: '/globe.svg', description: 'Voz y video IA' },
          { name: 'InVideo', image: '/globe.svg', description: 'Video IA' },
          { name: 'Fliki', image: '/globe.svg', description: 'Video IA' },
          { name: 'Kling', image: '/globe.svg', description: 'Video IA' },
          { name: 'MiniMax', image: '/globe.svg', description: 'Video IA' },
          { name: 'VideoFX', image: '/globe.svg', description: 'Video IA' },
        ],
      },
      {
        name: 'Código',
        tools: [
          { name: 'GitHub Copilot', image: '/globe.svg', description: 'Asistente de código' },
          { name: 'Claude', image: '/globe.svg', description: 'IA conversacional' },
          { name: 'Gemini', image: '/globe.svg', description: 'IA multimodal' },
          { name: 'Cursor', image: '/globe.svg', description: 'Editor IA' },
          { name: 'Tabnine', image: '/globe.svg', description: 'Autocompletado IA' },
          { name: 'Codium', image: '/globe.svg', description: 'Testing IA' },
          { name: 'AskTheCode', image: '/globe.svg', description: 'QA IA' },
          { name: 'Testim', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Diffblue', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Jules', image: '/globe.svg', description: 'Asistente de código' },
          { name: 'DeepSource', image: '/globe.svg', description: 'Análisis estático' },
          { name: 'LangChain', image: '/globe.svg', description: 'Framework IA' },
        ],
      },
    ],
  },
  {
    name: 'Chatbots',
    subcategories: [
      {
        name: 'Asistentes personales',
        tools: [
          { name: 'ChatGPT', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Gemini', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Claude', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Grok', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Siri', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Alexa', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Assistant', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Pi', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Perplexity', image: '/globe.svg', description: 'Asistente personal' },
          { name: 'Replika', image: '/globe.svg', description: 'Asistente personal' },
        ],
      },
      {
        name: 'Chatbots empresariales',
        tools: [
          { name: 'Intercom', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'Drift', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'Ada', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'LivePerson', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'Einstein', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'ChatSpot', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'Zendesk', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'Qwen', image: '/globe.svg', description: 'Chatbot empresarial' },
          { name: 'DeepSeek', image: '/globe.svg', description: 'Chatbot empresarial' },
        ],
      },
      {
        name: 'Agentes autónomos',
        tools: [
          { name: 'AutoGPT', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'AgentGPT', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'MetaGPT', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'ChatGPT Agents', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'Copilot Agents', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'LangChain Agents', image: '/globe.svg', description: 'Agente autónomo' },
          { name: 'xAI Agents', image: '/globe.svg', description: 'Agente autónomo' },
        ],
      },
    ],
  },
  {
    name: 'Negocios',
    subcategories: [
      {
        name: 'Automatización de flujos',
        tools: [
          { name: 'Zapier', image: '/globe.svg', description: 'Automatización' },
          { name: 'n8n', image: '/globe.svg', description: 'Automatización' },
          { name: 'Make', image: '/globe.svg', description: 'Automatización' },
          { name: 'Power Automate', image: '/globe.svg', description: 'Automatización' },
          { name: 'IFTTT', image: '/globe.svg', description: 'Automatización' },
          { name: 'Manus', image: '/globe.svg', description: 'Automatización' },
          { name: 'Trigger.dev', image: '/globe.svg', description: 'Automatización' },
        ],
      },
      {
        name: 'Ofimática inteligente',
        tools: [
          { name: 'Notion AI', image: '/globe.svg', description: 'Ofimática IA' },
          { name: 'Microsoft 365 Copilot', image: '/globe.svg', description: 'Ofimática IA' },
          { name: 'Google Workspace Duet', image: '/globe.svg', description: 'Ofimática IA' },
          { name: 'Gamma', image: '/globe.svg', description: 'Ofimática IA' },
          { name: 'Magic Write', image: '/globe.svg', description: 'Ofimática IA' },
          { name: 'Canva Magic Studio', image: '/globe.svg', description: 'Ofimática IA' },
        ],
      },
      {
        name: 'Análisis de datos',
        tools: [
          { name: 'Power BI', image: '/globe.svg', description: 'Análisis de datos' },
          { name: 'Tableau', image: '/globe.svg', description: 'Análisis de datos' },
          { name: 'ThoughtSpot', image: '/globe.svg', description: 'Análisis de datos' },
          { name: 'Perplexity', image: '/globe.svg', description: 'Análisis de datos' },
          { name: 'AlphaSense', image: '/globe.svg', description: 'Análisis de datos' },
          { name: 'Kavout', image: '/globe.svg', description: 'Análisis de datos' },
        ],
      },
      {
        name: 'Gestión de proyectos',
        tools: [
          { name: 'ClickUp', image: '/globe.svg', description: 'Gestión proyectos' },
          { name: 'Asana', image: '/globe.svg', description: 'Gestión proyectos' },
          { name: 'Monday.com', image: '/globe.svg', description: 'Gestión proyectos' },
          { name: 'Trello', image: '/globe.svg', description: 'Gestión proyectos' },
          { name: 'Jira', image: '/globe.svg', description: 'Gestión proyectos' },
        ],
      },
      {
        name: 'IA legal',
        tools: [
          { name: 'Harvey', image: '/globe.svg', description: 'IA legal' },
          { name: 'Luminance', image: '/globe.svg', description: 'IA legal' },
          { name: 'DoNotPay', image: '/globe.svg', description: 'IA legal' },
          { name: 'Spellbook', image: '/globe.svg', description: 'IA legal' },
          { name: 'Evisort', image: '/globe.svg', description: 'IA legal' },
          { name: 'LawGeex', image: '/globe.svg', description: 'IA legal' },
        ],
      },
    ],
  },
  {
    name: 'DevTools',
    subcategories: [
      {
        name: 'Asistentes de código',
        tools: [
          { name: 'GitHub Copilot', image: '/globe.svg', description: 'Asistente código' },
          { name: 'Claude', image: '/globe.svg', description: 'Asistente código' },
          { name: 'Tabnine', image: '/globe.svg', description: 'Asistente código' },
          { name: 'Ghostwriter', image: '/globe.svg', description: 'Asistente código' },
          { name: 'Cursor', image: '/globe.svg', description: 'Asistente código' },
          { name: 'Bolt', image: '/globe.svg', description: 'Asistente código' },
        ],
      },
      {
        name: 'Testing y QA',
        tools: [
          { name: 'Codium', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Testim', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Diffblue', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Testbot', image: '/globe.svg', description: 'Testing IA' },
          { name: 'Mabl', image: '/globe.svg', description: 'Testing IA' },
        ],
      },
      {
        name: 'Análisis estático',
        tools: [
          { name: 'DeepSource', image: '/globe.svg', description: 'Análisis estático' },
          { name: 'SonarQube', image: '/globe.svg', description: 'Análisis estático' },
          { name: 'CodeClimate', image: '/globe.svg', description: 'Análisis estático' },
          { name: 'CodeFactor', image: '/globe.svg', description: 'Análisis estático' },
        ],
      },
    ],
  },
  {
    name: 'Salud',
    subcategories: [
      {
        name: 'Diagnóstico asistido',
        tools: [
          { name: 'Aidoc', image: '/globe.svg', description: 'Diagnóstico IA' },
          { name: 'PathAI', image: '/globe.svg', description: 'Diagnóstico IA' },
          { name: 'MedPaLM', image: '/globe.svg', description: 'Diagnóstico IA' },
          { name: 'Zebra Medical', image: '/globe.svg', description: 'Diagnóstico IA' },
          { name: 'Lunit', image: '/globe.svg', description: 'Diagnóstico IA' },
        ],
      },
      {
        name: 'Imágenes médicas',
        tools: [
          { name: 'Aidoc', image: '/globe.svg', description: 'Imágenes médicas' },
          { name: 'PathAI', image: '/globe.svg', description: 'Imágenes médicas' },
          { name: 'Zebra Medical', image: '/globe.svg', description: 'Imágenes médicas' },
          { name: 'Lunit', image: '/globe.svg', description: 'Imágenes médicas' },
          { name: 'Enlitic', image: '/globe.svg', description: 'Imágenes médicas' },
        ],
      },
      {
        name: 'Síntomas',
        tools: [
          { name: 'Ada Health', image: '/globe.svg', description: 'Triage IA' },
          { name: 'Babylon Health', image: '/globe.svg', description: 'Triage IA' },
          { name: 'Buoy Health', image: '/globe.svg', description: 'Triage IA' },
          { name: 'Your.MD', image: '/globe.svg', description: 'Triage IA' },
        ],
      },
      {
        name: 'Investigación biomédica',
        tools: [
          { name: 'AlphaFold', image: '/globe.svg', description: 'Investigación biomédica' },
          { name: 'BioGPT', image: '/globe.svg', description: 'Investigación biomédica' },
          { name: 'AlphaMissense', image: '/globe.svg', description: 'Investigación biomédica' },
          { name: 'BenevolentAI', image: '/globe.svg', description: 'Investigación biomédica' },
        ],
      },
    ],
  },
  {
    name: 'Educación',
    subcategories: [
      {
        name: 'Tutores virtuales',
        tools: [
          { name: 'Khanmigo', image: '/globe.svg', description: 'Tutor virtual' },
          { name: 'Socratic', image: '/globe.svg', description: 'Tutor virtual' },
          { name: 'Scribe AI', image: '/globe.svg', description: 'Tutor virtual' },
          { name: 'MagicSchool AI', image: '/globe.svg', description: 'Tutor virtual' },
        ],
      },
      {
        name: 'Corrección y feedback',
        tools: [
          { name: 'Grammarly', image: '/globe.svg', description: 'Corrección IA' },
          { name: 'Writable', image: '/globe.svg', description: 'Corrección IA' },
          { name: 'Eduaide', image: '/globe.svg', description: 'Corrección IA' },
        ],
      },
      {
        name: 'Generación de exámenes',
        tools: [
          { name: 'Quizlet', image: '/globe.svg', description: 'Generación exámenes' },
          { name: 'QuestionWell', image: '/globe.svg', description: 'Generación exámenes' },
          { name: 'Curipod', image: '/globe.svg', description: 'Generación exámenes' },
        ],
      },
      {
        name: 'Asistentes para docentes',
        tools: [
          { name: 'TeachMate AI', image: '/globe.svg', description: 'Asistente docentes' },
          { name: 'Diffit', image: '/globe.svg', description: 'Asistente docentes' },
          { name: 'Speaker Coach', image: '/globe.svg', description: 'Asistente docentes' },
        ],
      },
    ],
  },
  {
    name: 'Finanzas',
    subcategories: [
      {
        name: 'Análisis bursátil',
        tools: [
          { name: 'Kavout', image: '/globe.svg', description: 'Análisis bursátil' },
          { name: 'Numerai', image: '/globe.svg', description: 'Análisis bursátil' },
          { name: 'EquBot', image: '/globe.svg', description: 'Análisis bursátil' },
        ],
      },
      {
        name: 'Scoring crediticio',
        tools: [
          { name: 'Zest AI', image: '/globe.svg', description: 'Scoring crediticio' },
          { name: 'Upstart', image: '/globe.svg', description: 'Scoring crediticio' },
          { name: 'CredoLab', image: '/globe.svg', description: 'Scoring crediticio' },
        ],
      },
      {
        name: 'Asesores financieros virtuales',
        tools: [
          { name: 'Cleo', image: '/globe.svg', description: 'Asesor financiero' },
          { name: 'Plum', image: '/globe.svg', description: 'Asesor financiero' },
          { name: 'Wallet AI', image: '/globe.svg', description: 'Asesor financiero' },
        ],
      },
      {
        name: 'Prevención de fraude',
        tools: [
          { name: 'FICO', image: '/globe.svg', description: 'Prevención fraude' },
          { name: 'Feedzai', image: '/globe.svg', description: 'Prevención fraude' },
          { name: 'Darktrace', image: '/globe.svg', description: 'Prevención fraude' },
        ],
      },
    ],
  },
  {
    name: 'Creatividad',
    subcategories: [
      {
        name: 'Diseño gráfico',
        tools: [
          { name: 'Canva Magic Studio', image: '/globe.svg', description: 'Diseño gráfico' },
          { name: 'Adobe Firefly', image: '/globe.svg', description: 'Diseño gráfico' },
          { name: 'Fotor', image: '/globe.svg', description: 'Diseño gráfico' },
        ],
      },
      {
        name: 'UX/UI asistido',
        tools: [
          { name: 'Figma AI', image: '/globe.svg', description: 'UX/UI asistido' },
          { name: 'Uizard', image: '/globe.svg', description: 'UX/UI asistido' },
          { name: 'Galileo AI', image: '/globe.svg', description: 'UX/UI asistido' },
        ],
      },
      {
        name: 'Branding y logos',
        tools: [
          { name: 'Looka', image: '/globe.svg', description: 'Branding y logos' },
          { name: 'Brandmark', image: '/globe.svg', description: 'Branding y logos' },
          { name: 'Hatchful', image: '/globe.svg', description: 'Branding y logos' },
        ],
      },
      {
        name: 'Diseño web',
        tools: [
          { name: 'Durable', image: '/globe.svg', description: 'Diseño web' },
          { name: 'Wix ADI', image: '/globe.svg', description: 'Diseño web' },
          { name: 'Framer AI', image: '/globe.svg', description: 'Diseño web' },
        ],
      },
    ],
  },
  {
    name: 'Seguridad',
    subcategories: [
      {
        name: 'Detección de amenazas',
        tools: [
          { name: 'Darktrace', image: '/globe.svg', description: 'Detección amenazas' },
          { name: 'Vectra AI', image: '/globe.svg', description: 'Detección amenazas' },
          { name: 'Cylance', image: '/globe.svg', description: 'Detección amenazas' },
        ],
      },
      {
        name: 'Análisis de comportamiento',
        tools: [
          { name: 'Exabeam', image: '/globe.svg', description: 'Análisis comportamiento' },
          { name: 'LogRhythm', image: '/globe.svg', description: 'Análisis comportamiento' },
          { name: 'Securonix', image: '/globe.svg', description: 'Análisis comportamiento' },
        ],
      },
      {
        name: 'Respuesta automática',
        tools: [
          { name: 'SentinelOne', image: '/globe.svg', description: 'Respuesta automática' },
          { name: 'CrowdStrike', image: '/globe.svg', description: 'Respuesta automática' },
        ],
      },
    ],
  },
  {
    name: 'Robótica',
    subcategories: [
      {
        name: 'Automatización industrial',
        tools: [
          {
            name: 'Siemens MindSphere',
            image: '/globe.svg',
            description: 'Automatización industrial',
          },
          { name: 'Predix', image: '/globe.svg', description: 'Automatización industrial' },
          { name: 'Uptake', image: '/globe.svg', description: 'Automatización industrial' },
        ],
      },
      {
        name: 'Robótica',
        tools: [
          { name: 'Spot', image: '/globe.svg', description: 'Robótica IA' },
          { name: 'Covariant', image: '/globe.svg', description: 'Robótica IA' },
          { name: 'Osaro', image: '/globe.svg', description: 'Robótica IA' },
        ],
      },
      {
        name: 'Mantenimiento predictivo',
        tools: [
          { name: 'Augury', image: '/globe.svg', description: 'Mantenimiento predictivo' },
          { name: 'Senseye', image: '/globe.svg', description: 'Mantenimiento predictivo' },
          { name: 'SparkCognition', image: '/globe.svg', description: 'Mantenimiento predictivo' },
        ],
      },
      {
        name: 'Visión artificial',
        tools: [
          { name: 'LandingLens', image: '/globe.svg', description: 'Visión artificial' },
          { name: 'Matroid', image: '/globe.svg', description: 'Visión artificial' },
          { name: 'Cognex', image: '/globe.svg', description: 'Visión artificial' },
        ],
      },
    ],
  },
  {
    name: 'Multimodal',
    subcategories: [
      {
        name: 'Multimodales',
        tools: [
          { name: 'ChatGPT', image: '/globe.svg', description: 'IA multimodal' },
          { name: 'Gemini', image: '/globe.svg', description: 'IA multimodal' },
          { name: 'Claude', image: '/globe.svg', description: 'IA multimodal' },
        ],
      },
      {
        name: 'Entrada mixta',
        tools: [
          { name: 'LLaVA', image: '/globe.svg', description: 'Entrada mixta' },
          { name: 'Fuyu', image: '/globe.svg', description: 'Entrada mixta' },
          { name: 'Kosmos', image: '/globe.svg', description: 'Entrada mixta' },
          { name: 'Flamingo', image: '/globe.svg', description: 'Entrada mixta' },
        ],
      },
    ],
  },
  {
    name: 'OpenSource',
    subcategories: [
      {
        name: 'Texto',
        tools: [
          { name: 'LLaMA', image: '/globe.svg', description: 'Modelo open source' },
          { name: 'Mistral', image: '/globe.svg', description: 'Modelo open source' },
          { name: 'Falcon', image: '/globe.svg', description: 'Modelo open source' },
          { name: 'BLOOM', image: '/globe.svg', description: 'Modelo open source' },
        ],
      },
      {
        name: 'Multimodales',
        tools: [
          { name: 'LLaVA', image: '/globe.svg', description: 'Multimodal open source' },
          { name: 'Fuyu', image: '/globe.svg', description: 'Multimodal open source' },
          { name: 'IDEFICS', image: '/globe.svg', description: 'Multimodal open source' },
        ],
      },
      {
        name: 'Frameworks',
        tools: [
          { name: 'Transformers', image: '/globe.svg', description: 'Framework IA' },
          { name: 'LangChain', image: '/globe.svg', description: 'Framework IA' },
          { name: 'OpenLLM', image: '/globe.svg', description: 'Framework IA' },
        ],
      },
    ],
  },
  {
    name: 'IA Cognitiva y Razonamiento',
    subcategories: [
      {
        name: 'Memoria a largo plazo',
        tools: [
          { name: 'MemGPT', image: '/globe.svg', description: 'Memoria IA' },
          { name: 'LTM Agents', image: '/globe.svg', description: 'Memoria IA' },
          { name: 'LongChat', image: '/globe.svg', description: 'Memoria IA' },
        ],
      },
      {
        name: 'Razonamiento estructurado',
        tools: [
          { name: 'Tree-of-Thought', image: '/globe.svg', description: 'Razonamiento IA' },
          { name: 'GraphGPT', image: '/globe.svg', description: 'Razonamiento IA' },
          { name: 'DSPy', image: '/globe.svg', description: 'Razonamiento IA' },
          { name: 'Program-Aided Reasoning', image: '/globe.svg', description: 'Razonamiento IA' },
        ],
      },
      {
        name: 'Agentes cognitivos avanzados',
        tools: [
          { name: 'AutoGen', image: '/globe.svg', description: 'Agente cognitivo' },
          { name: 'CrewAI', image: '/globe.svg', description: 'Agente cognitivo' },
          { name: 'ReAct', image: '/globe.svg', description: 'Agente cognitivo' },
          { name: 'LangGraph', image: '/globe.svg', description: 'Agente cognitivo' },
        ],
      },
    ],
  },
  {
    name: 'Desarrollo de Modelos',
    subcategories: [
      {
        name: 'Entrenamiento y despliegue',
        tools: [
          { name: 'Weights & Biases', image: '/globe.svg', description: 'MLOps' },
          { name: 'ClearML', image: '/globe.svg', description: 'MLOps' },
          { name: 'MLflow', image: '/globe.svg', description: 'MLOps' },
          { name: 'SageMaker', image: '/globe.svg', description: 'MLOps' },
        ],
      },
      {
        name: 'Evaluación y monitoreo',
        tools: [
          { name: 'TruLens', image: '/globe.svg', description: 'Monitoreo IA' },
          { name: 'Helicone', image: '/globe.svg', description: 'Monitoreo IA' },
          { name: 'PromptLayer', image: '/globe.svg', description: 'Monitoreo IA' },
          { name: 'Arize AI', image: '/globe.svg', description: 'Monitoreo IA' },
        ],
      },
      {
        name: 'Fine-tuning y RAG',
        tools: [
          { name: 'LoRA', image: '/globe.svg', description: 'Fine-tuning' },
          { name: 'LangChain', image: '/globe.svg', description: 'RAG' },
          { name: 'Haystack', image: '/globe.svg', description: 'RAG' },
          { name: 'Unstructured', image: '/globe.svg', description: 'RAG' },
          { name: 'RAGAS', image: '/globe.svg', description: 'RAG' },
        ],
      },
    ],
  },
  {
    name: 'Marketing y Ventas',
    subcategories: [
      {
        name: 'Generación de contenido y campañas',
        tools: [
          { name: 'Writesonic', image: '/globe.svg', description: 'Marketing IA' },
          { name: 'Copy.ai', image: '/globe.svg', description: 'Marketing IA' },
          { name: 'Jasper', image: '/globe.svg', description: 'Marketing IA' },
          { name: 'Hypotenuse AI', image: '/globe.svg', description: 'Marketing IA' },
        ],
      },
      {
        name: 'Optimización de embudos',
        tools: [
          { name: 'HubSpot AI', image: '/globe.svg', description: 'CRM IA' },
          { name: 'Salesforce Einstein AI', image: '/globe.svg', description: 'CRM IA' },
          { name: 'ChatSpot', image: '/globe.svg', description: 'CRM IA' },
        ],
      },
      {
        name: 'Email marketing y landing pages',
        tools: [
          { name: 'Unbounce Smart Copy', image: '/globe.svg', description: 'Email marketing' },
          { name: 'GetResponse AI', image: '/globe.svg', description: 'Email marketing' },
          { name: 'Mailchimp AI', image: '/globe.svg', description: 'Email marketing' },
        ],
      },
    ],
  },
  {
    name: 'Traducción y Localización Automática',
    subcategories: [
      {
        name: 'Traducción de texto',
        tools: [
          { name: 'DeepL', image: '/globe.svg', description: 'Traducción IA' },
          { name: 'Google Translate', image: '/globe.svg', description: 'Traducción IA' },
          { name: 'ModernMT', image: '/globe.svg', description: 'Traducción IA' },
          { name: 'Amazon Translate', image: '/globe.svg', description: 'Traducción IA' },
        ],
      },
      {
        name: 'Subtitulación y doblaje IA',
        tools: [
          { name: 'Papercup', image: '/globe.svg', description: 'Doblaje IA' },
          { name: 'Dubverse', image: '/globe.svg', description: 'Doblaje IA' },
          { name: 'HeyGen', image: '/globe.svg', description: 'Doblaje IA' },
          { name: 'Subly AI', image: '/globe.svg', description: 'Subtitulación IA' },
        ],
      },
    ],
  },
  {
    name: 'Ética y Detección de IA',
    subcategories: [
      {
        name: 'Detección de deepfakes / contenido IA',
        tools: [
          { name: 'Hive AI', image: '/globe.svg', description: 'Detección IA' },
          { name: 'AI or Not', image: '/globe.svg', description: 'Detección IA' },
          { name: 'Sensity AI', image: '/globe.svg', description: 'Detección IA' },
        ],
      },
      {
        name: 'Explicabilidad y auditoría de IA',
        tools: [
          { name: 'TruEra', image: '/globe.svg', description: 'Auditoría IA' },
          { name: 'Fiddler AI', image: '/globe.svg', description: 'Auditoría IA' },
          { name: 'Credo AI', image: '/globe.svg', description: 'Auditoría IA' },
        ],
      },
    ],
  },
  {
    name: 'Gestión del Conocimiento',
    subcategories: [
      {
        name: 'Document QA / RAG',
        tools: [
          { name: 'ChatPDF', image: '/globe.svg', description: 'QA documentos' },
          { name: 'AskYourPDF', image: '/globe.svg', description: 'QA documentos' },
          { name: 'Glean', image: '/globe.svg', description: 'QA documentos' },
          { name: 'Klu', image: '/globe.svg', description: 'QA documentos' },
          { name: 'Danswer', image: '/globe.svg', description: 'QA documentos' },
        ],
      },
      {
        name: 'Buscadores inteligentes',
        tools: [
          { name: 'Perplexity', image: '/globe.svg', description: 'Buscador IA' },
          { name: 'You.com', image: '/globe.svg', description: 'Buscador IA' },
          { name: 'Phind', image: '/globe.svg', description: 'Buscador IA' },
        ],
      },
    ],
  },
];
