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
            image: '/images/chatpgt-web.png',
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
            pricing: 'freemium',
            url: 'https://qwenlm.github.io',
          },
          {
            name: 'Mistral',
            logo: '/logos/mistral-movil.png',
            image: '/images/mistral-web.png',
            description: 'Modelo open source',
            pricing: 'free',
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
            pricing: 'freemium',
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
            pricing: 'paid',
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
            pricing: 'paid',
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
          {
            name: 'Midjourney',
            logo: '/logos/midjourney-movil.png',
            image: '/images/midjourney-web.png',
            description: 'Arte generativo',
            pricing: 'paid',
            url: 'https://www.midjourney.com',
          },
          {
            name: 'DALL·E',
            logo: '/logos/dall.e-movil.png',
            image: '/images/dall.e-web.png',
            description: 'Imágenes IA',
            pricing: 'freemium',
            url: 'https://openai.com/dall-e-2',
          },
          {
            name: 'Stable Diffusion',
            logo: '/logos/stablediffusion-movil.png',
            image: '/images/stablediffusion-web.png',
            description: 'Modelo open source',
            pricing: 'free',
            url: 'https://stablediffusionweb.com/',
          },
          {
            name: 'Adobe Firefly',
            logo: '/logos/adobefirefly-logo.png',
            image: '/images/adobefirefly-web.png',
            description: 'Imágenes creativas',
            pricing: 'freemium',
            url: 'https://firefly.adobe.com/?media=featured',
          },
          {
            name: 'Imagen',
            logo: '/logos/imagen-movil.svg',
            image: '/images/imagen-web.png',
            description: 'Modelo de Google',
            pricing: 'free',
            url: 'https://deepmind.google/models/imagen/',
          },
          {
            name: 'FLUX',
            logo: '/logos/flux-movil.png',
            image: '/images/flux-web.png',
            description: 'Arte generativo',
            pricing: 'free',
            url: 'https://flux1.ai/es',
          },
          {
            name: 'Ideogram',
            logo: '/logos/ideogram-movil.jpg',
            image: '/images/ideogram-web.png',
            description: 'Texto a imagen',
            pricing: 'freemium',
            url: 'https://ideogram.ai',
          },
          {
            name: 'Recraft',
            logo: '/logos/recraft-movil.png',
            image: '/images/recraft-web.png',
            description: 'Diseño IA',
            pricing: 'freemium',
            url: 'https://recraft.ai',
          },
          {
            name: 'Leonardo AI',
            logo: '/logos/leonardoai-movil.jpg',
            image: '/images/leonardoai-web.png',
            description: 'Arte generativo',
            pricing: 'freemium',
            url: 'https://leonardo.ai',
          },
          {
            name: 'Seedream',
            logo: '/logos/seedream-movil.jpeg',
            image: '/images/seedream-web.png',
            description: 'Imágenes IA',
            pricing: 'free',
            url: 'https://seed.bytedance.com/en/tech/seedream3_0',
          },
          {
            name: 'Aurora',
            logo: '/logos/aurora-movil.png',
            image: '/images/aurora-web.png',
            description: 'Arte generativo',
            pricing: 'paid',
            url: 'https://x.ai/news/grok-image-generation-release',
          },
          {
            name: 'Playground AI',
            logo: '/logos/playgroundai-movil.png',
            image: '/images/playgroundai-web.png',
            description: 'Imágenes IA',
            pricing: 'freemium',
            url: 'https://playgroundai.com',
          },
        ],
      },
      {
        name: 'Audio / Voz',
        tools: [
          {
            name: 'ElevenLabs',
            logo: '/logos/elevenlabs-movil.png',
            image: '/images/elevenlabs-web.png',
            description: 'Voz sintética',
            pricing: 'freemium',
            url: 'https://elevenlabs.io',
          },
          {
            name: 'Voicemod',
            logo: '/logos/voicemods-movil.png',
            image: '/images/voicemods-web.png',
            description: 'Modificador de voz',
            pricing: 'freemium',
            url: 'https://www.voicemod.net',
          },
          {
            name: 'Descript',
            logo: '/logos/descript-movil.png',
            image: '/images/descript-web.png',
            description: 'Edición de audio',
            pricing: 'freemium',
            url: 'https://www.descript.com',
          },
          {
            name: 'Resemble AI',
            logo: '/logos/resembleai-movil.png',
            image: '/images/resembleai-web.png',
            description: 'Voz IA',
            pricing: 'freemium',
            url: 'https://www.resemble.ai',
          },
          {
            name: 'Murf',
            logo: '/logos/murfai-movil.png',
            image: '/images/murfai-web.png',
            description: 'Voz sintética',
            pricing: 'freemium',
            url: 'https://murf.ai',
          },
          {
            name: 'Play.ht',
            logo: '/logos/play.ht-movil.png',
            image: '/images/play.ht-web.png',
            description: 'Texto a voz',
            pricing: 'freemium',
            url: 'https://play.ht',
          },
          {
            name: 'Speechify',
            logo: '/logos/speechlify-movil.png',
            image: '/images/speechlify-web.png',
            description: 'Lectura de texto',
            pricing: 'freemium',
            url: 'https://speechify.com',
          },
          {
            name: 'Lovo',
            logo: '/logos/lovo-movil.png',
            image: '/images/lovo-web.png',
            description: 'Voz IA',
            pricing: 'freemium',
            url: 'https://lovo.ai',
          },
          {
            name: 'Dubverse',
            logo: '/logos/dubverse-movil.jpeg',
            image: '/images/dubverse-web.png',
            description: 'Doblaje IA',
            pricing: 'freemium',
            url: 'https://dubverse.ai',
          },
          {
            name: 'Voice.ai',
            logo: '/logos/voice.ai-movil.png',
            image: '/images/voice.ai-web.png',
            description: 'Voz IA',
            pricing: 'freemium',
            url: 'https://voice.ai',
          },
          {
            name: 'Suno',
            logo: '/logos/suno-movil.png',
            image: '/images/suno-web.png',
            description: 'Música IA',
            pricing: 'freemium',
            url: 'https://suno.ai',
          },
          {
            name: 'AudioCraft',
            logo: '/logos/audiocraft-movil.jpeg',
            image: '/images/audiocraft-web.png',
            description: 'Música IA',
            pricing: 'free',
            url: 'https://github.com/facebookresearch/audiocraft',
          },
          {
            name: 'Colossyan',
            logo: '/logos/colossyam-movil.jpeg',
            image: '/images/colossyam-web.png',
            description: 'Voz y video IA',
            pricing: 'paid',
            url: 'https://colossyan.com',
          },
        ],
      },
      {
        name: 'Video',
        tools: [
          {
            name: 'Sora',
            logo: '/logos/sora-movil.png',
            image: '/images/sora-web.png',
            description: 'Video generativo',
            pricing: 'free',
            url: 'https://openai.com/sora',
          },
          {
            name: 'Veo',
            logo: '/logos/veo-movil.png',
            image: '/images/veo-web.png',
            description: 'Video IA',
            pricing: 'free',
            url: 'https://deepmind.google/models/veo/',
          },
          {
            name: 'Runway',
            logo: '/logos/runway-movil.webp',
            image: '/images/runway-web.png',
            description: 'Edición de video',
            pricing: 'freemium',
            url: 'https://runwayml.com',
          },
          {
            name: 'Pika Labs',
            logo: '/logos/pikalabs-movil.png',
            image: '/images/pikalabs-web.png',
            description: 'Video IA',
            pricing: 'freemium',
            url: 'https://pika.art',
          },
          {
            name: 'Synthesia',
            logo: '/logos/Synthesia-movil.png',
            image: '/images/Synthesia-web.png',
            description: 'Avatares IA',
            pricing: 'paid',
            url: 'https://synthesia.io',
          },
          {
            name: 'Colossyan',
            logo: '/logos/colossyam-movil.jpeg',
            image: '/images/colossyam-web.png',
            description: 'Voz y video IA',
            pricing: 'paid',
            url: 'https://colossyan.com',
          },
          {
            name: 'InVideo',
            logo: '/logos/invideo-movil.webp',
            image: '/images/invideo-web.png',
            description: 'Video IA',
            pricing: 'freemium',
            url: 'https://invideo.io',
          },
          {
            name: 'Fliki',
            logo: '/logos/fliki-movil.png',
            image: '/images/fliki-web.png',
            description: 'Video IA',
            pricing: 'freemium',
            url: 'https://fliki.ai',
          },
          {
            name: 'Kling',
            logo: '/logos/fling-movil.png',
            image: '/images/kling-web.png',
            description: 'Video IA',
            pricing: 'free',
            url: 'https://klingai.org/?utm_source=chatgpt.com',
          },
          {
            name: 'MiniMax',
            logo: '/logos/minimax-movil.png',
            image: '/images/minimax-web.png',
            description: 'Video IA',
            pricing: 'free',
            url: 'https://minimaxaivideo.com',
          },
          {
            name: 'VideoFX',
            logo: '/logos/videofx-movil.png',
            image: '/images/videofx-web.png',
            description: 'Video IA',
            pricing: 'free',
            url: 'https://labs.google/fx/tools/flow',
          },
        ],
      },
      {
        name: 'Código',
        tools: [
          {
            name: 'GitHub Copilot',
            image: '/globe.svg',
            description: 'Asistente de código',
            pricing: 'paid',
          },
          {
            name: 'Claude',
            image: '/globe.svg',
            description: 'IA conversacional',
            pricing: 'freemium',
          },
          {
            name: 'Gemini',
            image: '/globe.svg',
            description: 'IA multimodal',
            pricing: 'freemium',
          },
          { name: 'Cursor', image: '/globe.svg', description: 'Editor IA', pricing: 'freemium' },
          {
            name: 'Tabnine',
            image: '/globe.svg',
            description: 'Autocompletado IA',
            pricing: 'freemium',
          },
          { name: 'Codium', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'AskTheCode', image: '/globe.svg', description: 'QA IA', pricing: 'free' },
          { name: 'Testim', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'Diffblue', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          {
            name: 'Jules',
            image: '/globe.svg',
            description: 'Asistente de código',
            pricing: 'freemium',
          },
          {
            name: 'DeepSource',
            image: '/globe.svg',
            description: 'Análisis estático',
            pricing: 'freemium',
          },
          { name: 'LangChain', image: '/globe.svg', description: 'Framework IA', pricing: 'free' },
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
          {
            name: 'ChatGPT',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          {
            name: 'Gemini',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          {
            name: 'Claude',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          {
            name: 'Grok',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          { name: 'Siri', image: '/globe.svg', description: 'Asistente personal', pricing: 'free' },
          {
            name: 'Alexa',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'free',
          },
          {
            name: 'Assistant',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'free',
          },
          {
            name: 'Pi',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          {
            name: 'Perplexity',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
          {
            name: 'Replika',
            image: '/globe.svg',
            description: 'Asistente personal',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Chatbots empresariales',
        tools: [
          {
            name: 'Intercom',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'paid',
          },
          {
            name: 'Drift',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'paid',
          },
          { name: 'Ada', image: '/globe.svg', description: 'Chatbot empresarial', pricing: 'paid' },
          {
            name: 'LivePerson',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'paid',
          },
          {
            name: 'Einstein',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'paid',
          },
          {
            name: 'ChatSpot',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'freemium',
          },
          {
            name: 'Zendesk',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'paid',
          },
          {
            name: 'Qwen',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'freemium',
          },
          {
            name: 'DeepSeek',
            image: '/globe.svg',
            description: 'Chatbot empresarial',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Agentes autónomos',
        tools: [
          { name: 'AutoGPT', image: '/globe.svg', description: 'Agente autónomo', pricing: 'free' },
          {
            name: 'AgentGPT',
            image: '/globe.svg',
            description: 'Agente autónomo',
            pricing: 'free',
          },
          { name: 'MetaGPT', image: '/globe.svg', description: 'Agente autónomo', pricing: 'free' },
          {
            name: 'ChatGPT Agents',
            image: '/globe.svg',
            description: 'Agente autónomo',
            pricing: 'freemium',
          },
          {
            name: 'Copilot Agents',
            image: '/globe.svg',
            description: 'Agente autónomo',
            pricing: 'paid',
          },
          {
            name: 'LangChain Agents',
            image: '/globe.svg',
            description: 'Agente autónomo',
            pricing: 'free',
          },
          {
            name: 'xAI Agents',
            image: '/globe.svg',
            description: 'Agente autónomo',
            pricing: 'freemium',
          },
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
          {
            name: 'Zapier',
            image: '/globe.svg',
            description: 'Automatización',
            pricing: 'freemium',
          },
          { name: 'n8n', image: '/globe.svg', description: 'Automatización', pricing: 'free' },
          { name: 'Make', image: '/globe.svg', description: 'Automatización', pricing: 'freemium' },
          {
            name: 'Power Automate',
            image: '/globe.svg',
            description: 'Automatización',
            pricing: 'freemium',
          },
          {
            name: 'IFTTT',
            image: '/globe.svg',
            description: 'Automatización',
            pricing: 'freemium',
          },
          {
            name: 'Manus',
            image: '/globe.svg',
            description: 'Automatización',
            pricing: 'freemium',
          },
          {
            name: 'Trigger.dev',
            image: '/globe.svg',
            description: 'Automatización',
            pricing: 'free',
          },
        ],
      },
      {
        name: 'Ofimática inteligente',
        tools: [
          {
            name: 'Notion AI',
            image: '/globe.svg',
            description: 'Ofimática IA',
            pricing: 'freemium',
          },
          {
            name: 'Microsoft 365 Copilot',
            image: '/globe.svg',
            description: 'Ofimática IA',
            pricing: 'paid',
          },
          {
            name: 'Google Workspace Duet',
            image: '/globe.svg',
            description: 'Ofimática IA',
            pricing: 'paid',
          },
          { name: 'Gamma', image: '/globe.svg', description: 'Ofimática IA', pricing: 'freemium' },
          {
            name: 'Magic Write',
            image: '/globe.svg',
            description: 'Ofimática IA',
            pricing: 'freemium',
          },
          {
            name: 'Canva Magic Studio',
            image: '/globe.svg',
            description: 'Ofimática IA',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Análisis de datos',
        tools: [
          {
            name: 'Power BI',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'freemium',
          },
          {
            name: 'Tableau',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'paid',
          },
          {
            name: 'ThoughtSpot',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'paid',
          },
          {
            name: 'Perplexity',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'freemium',
          },
          {
            name: 'AlphaSense',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'paid',
          },
          {
            name: 'Kavout',
            image: '/globe.svg',
            description: 'Análisis de datos',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Gestión de proyectos',
        tools: [
          {
            name: 'ClickUp',
            image: '/globe.svg',
            description: 'Gestión proyectos',
            pricing: 'freemium',
          },
          {
            name: 'Asana',
            image: '/globe.svg',
            description: 'Gestión proyectos',
            pricing: 'freemium',
          },
          {
            name: 'Monday.com',
            image: '/globe.svg',
            description: 'Gestión proyectos',
            pricing: 'freemium',
          },
          {
            name: 'Trello',
            image: '/globe.svg',
            description: 'Gestión proyectos',
            pricing: 'freemium',
          },
          {
            name: 'Jira',
            image: '/globe.svg',
            description: 'Gestión proyectos',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'IA legal',
        tools: [
          { name: 'Harvey', image: '/globe.svg', description: 'IA legal', pricing: 'paid' },
          { name: 'Luminance', image: '/globe.svg', description: 'IA legal', pricing: 'paid' },
          { name: 'DoNotPay', image: '/globe.svg', description: 'IA legal', pricing: 'freemium' },
          { name: 'Spellbook', image: '/globe.svg', description: 'IA legal', pricing: 'paid' },
          { name: 'Evisort', image: '/globe.svg', description: 'IA legal', pricing: 'paid' },
          { name: 'LawGeex', image: '/globe.svg', description: 'IA legal', pricing: 'paid' },
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
          {
            name: 'GitHub Copilot',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'paid',
          },
          {
            name: 'Claude',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'freemium',
          },
          {
            name: 'Tabnine',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'freemium',
          },
          {
            name: 'Ghostwriter',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'freemium',
          },
          {
            name: 'Cursor',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'freemium',
          },
          {
            name: 'Bolt',
            image: '/globe.svg',
            description: 'Asistente código',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Testing y QA',
        tools: [
          { name: 'Codium', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'Testim', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'Diffblue', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'Testbot', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
          { name: 'Mabl', image: '/globe.svg', description: 'Testing IA', pricing: 'freemium' },
        ],
      },
      {
        name: 'Análisis estático',
        tools: [
          {
            name: 'DeepSource',
            image: '/globe.svg',
            description: 'Análisis estático',
            pricing: 'freemium',
          },
          {
            name: 'SonarQube',
            image: '/globe.svg',
            description: 'Análisis estático',
            pricing: 'freemium',
          },
          {
            name: 'CodeClimate',
            image: '/globe.svg',
            description: 'Análisis estático',
            pricing: 'freemium',
          },
          {
            name: 'CodeFactor',
            image: '/globe.svg',
            description: 'Análisis estático',
            pricing: 'freemium',
          },
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
          { name: 'Aidoc', image: '/globe.svg', description: 'Diagnóstico IA', pricing: 'paid' },
          { name: 'PathAI', image: '/globe.svg', description: 'Diagnóstico IA', pricing: 'paid' },
          { name: 'MedPaLM', image: '/globe.svg', description: 'Diagnóstico IA', pricing: 'free' },
          {
            name: 'Zebra Medical',
            image: '/globe.svg',
            description: 'Diagnóstico IA',
            pricing: 'paid',
          },
          { name: 'Lunit', image: '/globe.svg', description: 'Diagnóstico IA', pricing: 'paid' },
        ],
      },
      {
        name: 'Imágenes médicas',
        tools: [
          { name: 'Aidoc', image: '/globe.svg', description: 'Imágenes médicas', pricing: 'paid' },
          { name: 'PathAI', image: '/globe.svg', description: 'Imágenes médicas', pricing: 'paid' },
          {
            name: 'Zebra Medical',
            image: '/globe.svg',
            description: 'Imágenes médicas',
            pricing: 'paid',
          },
          { name: 'Lunit', image: '/globe.svg', description: 'Imágenes médicas', pricing: 'paid' },
          {
            name: 'Enlitic',
            image: '/globe.svg',
            description: 'Imágenes médicas',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Síntomas',
        tools: [
          {
            name: 'Ada Health',
            image: '/globe.svg',
            description: 'Triage IA',
            pricing: 'freemium',
          },
          {
            name: 'Babylon Health',
            image: '/globe.svg',
            description: 'Triage IA',
            pricing: 'freemium',
          },
          {
            name: 'Buoy Health',
            image: '/globe.svg',
            description: 'Triage IA',
            pricing: 'freemium',
          },
          { name: 'Your.MD', image: '/globe.svg', description: 'Triage IA', pricing: 'free' },
        ],
      },
      {
        name: 'Investigación biomédica',
        tools: [
          {
            name: 'AlphaFold',
            image: '/globe.svg',
            description: 'Investigación biomédica',
            pricing: 'free',
          },
          {
            name: 'BioGPT',
            image: '/globe.svg',
            description: 'Investigación biomédica',
            pricing: 'free',
          },
          {
            name: 'AlphaMissense',
            image: '/globe.svg',
            description: 'Investigación biomédica',
            pricing: 'free',
          },
          {
            name: 'BenevolentAI',
            image: '/globe.svg',
            description: 'Investigación biomédica',
            pricing: 'paid',
          },
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
          { name: 'Khanmigo', image: '/globe.svg', description: 'Tutor virtual', pricing: 'free' },
          { name: 'Socratic', image: '/globe.svg', description: 'Tutor virtual', pricing: 'free' },
          {
            name: 'Scribe AI',
            image: '/globe.svg',
            description: 'Tutor virtual',
            pricing: 'freemium',
          },
          {
            name: 'MagicSchool AI',
            image: '/globe.svg',
            description: 'Tutor virtual',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Corrección y feedback',
        tools: [
          {
            name: 'Grammarly',
            image: '/globe.svg',
            description: 'Corrección IA',
            pricing: 'freemium',
          },
          {
            name: 'Writable',
            image: '/globe.svg',
            description: 'Corrección IA',
            pricing: 'freemium',
          },
          {
            name: 'Eduaide',
            image: '/globe.svg',
            description: 'Corrección IA',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Generación de exámenes',
        tools: [
          {
            name: 'Quizlet',
            image: '/globe.svg',
            description: 'Generación exámenes',
            pricing: 'freemium',
          },
          {
            name: 'QuestionWell',
            image: '/globe.svg',
            description: 'Generación exámenes',
            pricing: 'freemium',
          },
          {
            name: 'Curipod',
            image: '/globe.svg',
            description: 'Generación exámenes',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Asistentes para docentes',
        tools: [
          {
            name: 'TeachMate AI',
            image: '/globe.svg',
            description: 'Asistente docentes',
            pricing: 'freemium',
          },
          {
            name: 'Diffit',
            image: '/globe.svg',
            description: 'Asistente docentes',
            pricing: 'freemium',
          },
          {
            name: 'Speaker Coach',
            image: '/globe.svg',
            description: 'Asistente docentes',
            pricing: 'free',
          },
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
          {
            name: 'Kavout',
            image: '/globe.svg',
            description: 'Análisis bursátil',
            pricing: 'paid',
          },
          {
            name: 'Numerai',
            image: '/globe.svg',
            description: 'Análisis bursátil',
            pricing: 'free',
          },
          {
            name: 'EquBot',
            image: '/globe.svg',
            description: 'Análisis bursátil',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Scoring crediticio',
        tools: [
          {
            name: 'Zest AI',
            image: '/globe.svg',
            description: 'Scoring crediticio',
            pricing: 'paid',
          },
          {
            name: 'Upstart',
            image: '/globe.svg',
            description: 'Scoring crediticio',
            pricing: 'paid',
          },
          {
            name: 'CredoLab',
            image: '/globe.svg',
            description: 'Scoring crediticio',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Asesores financieros virtuales',
        tools: [
          {
            name: 'Cleo',
            image: '/globe.svg',
            description: 'Asesor financiero',
            pricing: 'freemium',
          },
          {
            name: 'Plum',
            image: '/globe.svg',
            description: 'Asesor financiero',
            pricing: 'freemium',
          },
          {
            name: 'Wallet AI',
            image: '/globe.svg',
            description: 'Asesor financiero',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Prevención de fraude',
        tools: [
          { name: 'FICO', image: '/globe.svg', description: 'Prevención fraude', pricing: 'paid' },
          {
            name: 'Feedzai',
            image: '/globe.svg',
            description: 'Prevención fraude',
            pricing: 'paid',
          },
          {
            name: 'Darktrace',
            image: '/globe.svg',
            description: 'Prevención fraude',
            pricing: 'paid',
          },
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
          {
            name: 'Canva Magic Studio',
            image: '/globe.svg',
            description: 'Diseño gráfico',
            pricing: 'freemium',
          },
          {
            name: 'Adobe Firefly',
            image: '/globe.svg',
            description: 'Diseño gráfico',
            pricing: 'freemium',
          },
          {
            name: 'Fotor',
            image: '/globe.svg',
            description: 'Diseño gráfico',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'UX/UI asistido',
        tools: [
          {
            name: 'Figma AI',
            image: '/globe.svg',
            description: 'UX/UI asistido',
            pricing: 'freemium',
          },
          {
            name: 'Uizard',
            image: '/globe.svg',
            description: 'UX/UI asistido',
            pricing: 'freemium',
          },
          {
            name: 'Galileo AI',
            image: '/globe.svg',
            description: 'UX/UI asistido',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Branding y logos',
        tools: [
          {
            name: 'Looka',
            image: '/globe.svg',
            description: 'Branding y logos',
            pricing: 'freemium',
          },
          {
            name: 'Brandmark',
            image: '/globe.svg',
            description: 'Branding y logos',
            pricing: 'freemium',
          },
          {
            name: 'Hatchful',
            image: '/globe.svg',
            description: 'Branding y logos',
            pricing: 'free',
          },
        ],
      },
      {
        name: 'Diseño web',
        tools: [
          { name: 'Durable', image: '/globe.svg', description: 'Diseño web', pricing: 'freemium' },
          { name: 'Wix ADI', image: '/globe.svg', description: 'Diseño web', pricing: 'freemium' },
          {
            name: 'Framer AI',
            image: '/globe.svg',
            description: 'Diseño web',
            pricing: 'freemium',
          },
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
          {
            name: 'Darktrace',
            image: '/globe.svg',
            description: 'Detección amenazas',
            pricing: 'paid',
          },
          {
            name: 'Vectra AI',
            image: '/globe.svg',
            description: 'Detección amenazas',
            pricing: 'paid',
          },
          {
            name: 'Cylance',
            image: '/globe.svg',
            description: 'Detección amenazas',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Análisis de comportamiento',
        tools: [
          {
            name: 'Exabeam',
            image: '/globe.svg',
            description: 'Análisis comportamiento',
            pricing: 'paid',
          },
          {
            name: 'LogRhythm',
            image: '/globe.svg',
            description: 'Análisis comportamiento',
            pricing: 'paid',
          },
          {
            name: 'Securonix',
            image: '/globe.svg',
            description: 'Análisis comportamiento',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Respuesta automática',
        tools: [
          {
            name: 'SentinelOne',
            image: '/globe.svg',
            description: 'Respuesta automática',
            pricing: 'paid',
          },
          {
            name: 'CrowdStrike',
            image: '/globe.svg',
            description: 'Respuesta automática',
            pricing: 'paid',
          },
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
            pricing: 'paid',
          },
          {
            name: 'Predix',
            image: '/globe.svg',
            description: 'Automatización industrial',
            pricing: 'paid',
          },
          {
            name: 'Uptake',
            image: '/globe.svg',
            description: 'Automatización industrial',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Robótica',
        tools: [
          { name: 'Spot', image: '/globe.svg', description: 'Robótica IA', pricing: 'paid' },
          { name: 'Covariant', image: '/globe.svg', description: 'Robótica IA', pricing: 'paid' },
          { name: 'Osaro', image: '/globe.svg', description: 'Robótica IA', pricing: 'paid' },
        ],
      },
      {
        name: 'Mantenimiento predictivo',
        tools: [
          {
            name: 'Augury',
            image: '/globe.svg',
            description: 'Mantenimiento predictivo',
            pricing: 'paid',
          },
          {
            name: 'Senseye',
            image: '/globe.svg',
            description: 'Mantenimiento predictivo',
            pricing: 'paid',
          },
          {
            name: 'SparkCognition',
            image: '/globe.svg',
            description: 'Mantenimiento predictivo',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Visión artificial',
        tools: [
          {
            name: 'LandingLens',
            image: '/globe.svg',
            description: 'Visión artificial',
            pricing: 'paid',
          },
          {
            name: 'Matroid',
            image: '/globe.svg',
            description: 'Visión artificial',
            pricing: 'paid',
          },
          {
            name: 'Cognex',
            image: '/globe.svg',
            description: 'Visión artificial',
            pricing: 'paid',
          },
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
          {
            name: 'ChatGPT',
            image: '/globe.svg',
            description: 'IA multimodal',
            pricing: 'freemium',
          },
          {
            name: 'Gemini',
            image: '/globe.svg',
            description: 'IA multimodal',
            pricing: 'freemium',
          },
          {
            name: 'Claude',
            image: '/globe.svg',
            description: 'IA multimodal',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Entrada mixta',
        tools: [
          { name: 'LLaVA', image: '/globe.svg', description: 'Entrada mixta', pricing: 'free' },
          { name: 'Fuyu', image: '/globe.svg', description: 'Entrada mixta', pricing: 'free' },
          { name: 'Kosmos', image: '/globe.svg', description: 'Entrada mixta', pricing: 'free' },
          { name: 'Flamingo', image: '/globe.svg', description: 'Entrada mixta', pricing: 'free' },
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
          {
            name: 'LLaMA',
            image: '/globe.svg',
            description: 'Modelo open source',
            pricing: 'free',
          },
          {
            name: 'Mistral',
            image: '/globe.svg',
            description: 'Modelo open source',
            pricing: 'free',
          },
          {
            name: 'Falcon',
            image: '/globe.svg',
            description: 'Modelo open source',
            pricing: 'free',
          },
          {
            name: 'BLOOM',
            image: '/globe.svg',
            description: 'Modelo open source',
            pricing: 'free',
          },
        ],
      },
      {
        name: 'Multimodales',
        tools: [
          {
            name: 'LLaVA',
            image: '/globe.svg',
            description: 'Multimodal open source',
            pricing: 'free',
          },
          {
            name: 'Fuyu',
            image: '/globe.svg',
            description: 'Multimodal open source',
            pricing: 'free',
          },
          {
            name: 'IDEFICS',
            image: '/globe.svg',
            description: 'Multimodal open source',
            pricing: 'free',
          },
        ],
      },
      {
        name: 'Frameworks',
        tools: [
          {
            name: 'Transformers',
            image: '/globe.svg',
            description: 'Framework IA',
            pricing: 'free',
          },
          { name: 'LangChain', image: '/globe.svg', description: 'Framework IA', pricing: 'free' },
          { name: 'OpenLLM', image: '/globe.svg', description: 'Framework IA', pricing: 'free' },
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
          { name: 'MemGPT', image: '/globe.svg', description: 'Memoria IA', pricing: 'free' },
          { name: 'LTM Agents', image: '/globe.svg', description: 'Memoria IA', pricing: 'free' },
          { name: 'LongChat', image: '/globe.svg', description: 'Memoria IA', pricing: 'free' },
        ],
      },
      {
        name: 'Razonamiento estructurado',
        tools: [
          {
            name: 'Tree-of-Thought',
            image: '/globe.svg',
            description: 'Razonamiento IA',
            pricing: 'free',
          },
          {
            name: 'GraphGPT',
            image: '/globe.svg',
            description: 'Razonamiento IA',
            pricing: 'free',
          },
          { name: 'DSPy', image: '/globe.svg', description: 'Razonamiento IA', pricing: 'free' },
          {
            name: 'Program-Aided Reasoning',
            image: '/globe.svg',
            description: 'Razonamiento IA',
            pricing: 'free',
          },
        ],
      },
      {
        name: 'Agentes cognitivos avanzados',
        tools: [
          {
            name: 'AutoGen',
            image: '/globe.svg',
            description: 'Agente cognitivo',
            pricing: 'free',
          },
          { name: 'CrewAI', image: '/globe.svg', description: 'Agente cognitivo', pricing: 'free' },
          { name: 'ReAct', image: '/globe.svg', description: 'Agente cognitivo', pricing: 'free' },
          {
            name: 'LangGraph',
            image: '/globe.svg',
            description: 'Agente cognitivo',
            pricing: 'free',
          },
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
          {
            name: 'Weights & Biases',
            image: '/globe.svg',
            description: 'MLOps',
            pricing: 'freemium',
          },
          { name: 'ClearML', image: '/globe.svg', description: 'MLOps', pricing: 'freemium' },
          { name: 'MLflow', image: '/globe.svg', description: 'MLOps', pricing: 'free' },
          { name: 'SageMaker', image: '/globe.svg', description: 'MLOps', pricing: 'paid' },
        ],
      },
      {
        name: 'Evaluación y monitoreo',
        tools: [
          { name: 'TruLens', image: '/globe.svg', description: 'Monitoreo IA', pricing: 'free' },
          {
            name: 'Helicone',
            image: '/globe.svg',
            description: 'Monitoreo IA',
            pricing: 'freemium',
          },
          {
            name: 'PromptLayer',
            image: '/globe.svg',
            description: 'Monitoreo IA',
            pricing: 'freemium',
          },
          {
            name: 'Arize AI',
            image: '/globe.svg',
            description: 'Monitoreo IA',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Fine-tuning y RAG',
        tools: [
          { name: 'LoRA', image: '/globe.svg', description: 'Fine-tuning', pricing: 'free' },
          { name: 'LangChain', image: '/globe.svg', description: 'RAG', pricing: 'free' },
          { name: 'Haystack', image: '/globe.svg', description: 'RAG', pricing: 'free' },
          { name: 'Unstructured', image: '/globe.svg', description: 'RAG', pricing: 'free' },
          { name: 'RAGAS', image: '/globe.svg', description: 'RAG', pricing: 'free' },
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
          {
            name: 'Writesonic',
            image: '/globe.svg',
            description: 'Marketing IA',
            pricing: 'freemium',
          },
          { name: 'Copy.ai', image: '/globe.svg', description: 'Marketing IA', pricing: 'paid' },
          { name: 'Jasper', image: '/globe.svg', description: 'Marketing IA', pricing: 'paid' },
          {
            name: 'Hypotenuse AI',
            image: '/globe.svg',
            description: 'Marketing IA',
            pricing: 'freemium',
          },
        ],
      },
      {
        name: 'Optimización de embudos',
        tools: [
          { name: 'HubSpot AI', image: '/globe.svg', description: 'CRM IA', pricing: 'freemium' },
          {
            name: 'Salesforce Einstein AI',
            image: '/globe.svg',
            description: 'CRM IA',
            pricing: 'paid',
          },
          { name: 'ChatSpot', image: '/globe.svg', description: 'CRM IA', pricing: 'freemium' },
        ],
      },
      {
        name: 'Email marketing y landing pages',
        tools: [
          {
            name: 'Unbounce Smart Copy',
            image: '/globe.svg',
            description: 'Email marketing',
            pricing: 'freemium',
          },
          {
            name: 'GetResponse AI',
            image: '/globe.svg',
            description: 'Email marketing',
            pricing: 'freemium',
          },
          {
            name: 'Mailchimp AI',
            image: '/globe.svg',
            description: 'Email marketing',
            pricing: 'freemium',
          },
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
          { name: 'DeepL', image: '/globe.svg', description: 'Traducción IA', pricing: 'freemium' },
          {
            name: 'Google Translate',
            image: '/globe.svg',
            description: 'Traducción IA',
            pricing: 'free',
          },
          {
            name: 'ModernMT',
            image: '/globe.svg',
            description: 'Traducción IA',
            pricing: 'freemium',
          },
          {
            name: 'Amazon Translate',
            image: '/globe.svg',
            description: 'Traducción IA',
            pricing: 'paid',
          },
        ],
      },
      {
        name: 'Subtitulación y doblaje IA',
        tools: [
          { name: 'Papercup', image: '/globe.svg', description: 'Doblaje IA', pricing: 'paid' },
          { name: 'Dubverse', image: '/globe.svg', description: 'Doblaje IA', pricing: 'freemium' },
          { name: 'HeyGen', image: '/globe.svg', description: 'Doblaje IA', pricing: 'freemium' },
          {
            name: 'Subly AI',
            image: '/globe.svg',
            description: 'Subtitulación IA',
            pricing: 'freemium',
          },
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
          { name: 'Hive AI', image: '/globe.svg', description: 'Detección IA', pricing: 'paid' },
          {
            name: 'AI or Not',
            image: '/globe.svg',
            description: 'Detección IA',
            pricing: 'freemium',
          },
          { name: 'Sensity AI', image: '/globe.svg', description: 'Detección IA', pricing: 'paid' },
        ],
      },
      {
        name: 'Explicabilidad y auditoría de IA',
        tools: [
          { name: 'TruEra', image: '/globe.svg', description: 'Auditoría IA', pricing: 'freemium' },
          {
            name: 'Fiddler AI',
            image: '/globe.svg',
            description: 'Auditoría IA',
            pricing: 'freemium',
          },
          {
            name: 'Credo AI',
            image: '/globe.svg',
            description: 'Auditoría IA',
            pricing: 'freemium',
          },
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
          {
            name: 'ChatPDF',
            image: '/globe.svg',
            description: 'QA documentos',
            pricing: 'freemium',
          },
          {
            name: 'AskYourPDF',
            image: '/globe.svg',
            description: 'QA documentos',
            pricing: 'freemium',
          },
          { name: 'Glean', image: '/globe.svg', description: 'QA documentos', pricing: 'freemium' },
          { name: 'Klu', image: '/globe.svg', description: 'QA documentos', pricing: 'freemium' },
          { name: 'Danswer', image: '/globe.svg', description: 'QA documentos', pricing: 'free' },
        ],
      },
      {
        name: 'Buscadores inteligentes',
        tools: [
          {
            name: 'Perplexity',
            image: '/globe.svg',
            description: 'Buscador IA',
            pricing: 'freemium',
          },
          { name: 'You.com', image: '/globe.svg', description: 'Buscador IA', pricing: 'freemium' },
          { name: 'Phind', image: '/globe.svg', description: 'Buscador IA', pricing: 'freemium' },
        ],
      },
    ],
  },
];
