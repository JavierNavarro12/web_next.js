export const aiCategories = [
  {
    id: 1,
    name: 'IA Generativa',
    description: 'Produce contenido original en distintos formatos.',
    subcategories: [
      {
        name: 'Texto',
        tools: [
          { name: 'Chatbots', examples: ['ChatGPT', 'Claude', 'Gemini'] },
          { name: 'Redacción', examples: ['Grammarly', 'Jasper'] },
          { name: 'Creativa', examples: ['Sudowrite', 'Writesonic'] },
          { name: 'Traducción', examples: ['DeepL', 'You.com', 'QuillBot'] },
        ],
      },
      {
        name: 'Imágenes',
        tools: [
          { name: 'Arte', examples: ['Midjourney', 'DALL·E', 'Stable Diffusion'] },
          { name: 'Edición', examples: ['Runway ML', 'Adobe Firefly', 'Playground AI'] },
          { name: '3D', examples: ['Kaedim', 'Luma AI'] },
        ],
      },
      {
        name: 'Audio / Voz',
        tools: [
          { name: 'Voz', examples: ['ElevenLabs', 'Descript', 'Resemble.ai'] },
          { name: 'Música', examples: ['Suno AI', 'MusicGen', 'Amper Music'] },
          { name: 'Doblaje', examples: ['Voice.ai', 'Dubverse'] },
        ],
      },
      {
        name: 'Video',
        tools: [
          { name: 'Video', examples: ['Sora', 'Pika Labs', 'Runway Gen-3'] },
          { name: 'Edición', examples: ['Wisecut', 'Runway', 'Descript'] },
          { name: 'Avatar', examples: ['Synthesia', 'HeyGen'] },
        ],
      },
      {
        name: 'Código',
        tools: [
          { name: 'Asistentes', examples: ['GitHub Copilot', 'CodeWhisperer'] },
          { name: 'Depuración', examples: ['CodiumAI', 'AskTheCode'] },
          { name: 'Tests', examples: ['Mintlify', 'Tabnine'] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'IA Conversacional / Asistentes Virtuales',
    subcategories: [
      {
        name: 'Asistentes',
        tools: ['Siri', 'Alexa', 'Google Assistant', 'Pi (Inflection AI)'],
      },
      {
        name: 'Chatbots',
        tools: ['Intercom', 'Drift', 'Ada', 'LivePerson'],
      },
      {
        name: 'Agentes',
        tools: ['AutoGPT', 'AgentGPT', 'MetaGPT'],
      },
    ],
  },
  {
    id: 3,
    name: 'IA para Negocios y Productividad',
    subcategories: [
      {
        name: 'Automatización',
        tools: ['Zapier AI', 'Make', 'Microsoft Power Automate + Copilot'],
      },
      {
        name: 'Ofimática',
        tools: ['Notion AI', 'Google Workspace Duet AI', 'Microsoft Copilot'],
      },
      {
        name: 'Datos / BI',
        tools: ['Power BI + AI', 'Tableau GPT', 'ThoughtSpot Sage'],
      },
      {
        name: 'Proyectos',
        tools: ['ClickUp AI', 'Asana AI', 'Monday.com AI'],
      },
      {
        name: 'Legal',
        tools: ['Harvey AI', 'Luminance', 'Spellbook', 'DoNotPay'],
      },
    ],
  },
  {
    id: 4,
    name: 'IA para Desarrollo de Software',
    subcategories: [
      {
        name: 'Asistentes',
        tools: ['GitHub Copilot', 'Tabnine', 'Replit Ghostwriter'],
      },
      {
        name: 'Testing',
        tools: ['CodiumAI', 'Testim.io', 'Diffblue Cover'],
      },
      {
        name: 'Revisión',
        tools: ['DeepSource', 'SonarQube con IA'],
      },
    ],
  },
  {
    id: 5,
    name: 'IA en Medicina y Salud',
    subcategories: [
      {
        name: 'Diagnóstico',
        tools: ['Aidoc', 'PathAI', 'Google Med-PaLM'],
      },
      {
        name: 'Imágenes',
        tools: ['Zebra Medical', 'Lunit INSIGHT'],
      },
      {
        name: 'Síntomas',
        tools: ['Ada Health', 'Babylon Health'],
      },
      {
        name: 'Biomédica',
        tools: ['AlphaFold (DeepMind)', 'BioGPT (Microsoft)'],
      },
    ],
  },
  {
    id: 6,
    name: 'IA en Educación',
    subcategories: [
      {
        name: 'Tutores',
        tools: ['Khanmigo (Khan Academy + GPT)', 'Socratic', 'Scribe AI'],
      },
      {
        name: 'Corrección',
        tools: ['Grammarly', 'Writable', 'Eduaide'],
      },
      {
        name: 'Exámenes',
        tools: ['Quizlet AI', 'QuestionWell', 'Curipod'],
      },
      {
        name: 'Docentes',
        tools: ['MagicSchool AI', 'Diffit', 'TeachMate AI'],
      },
    ],
  },
  {
    id: 7,
    name: 'IA para Finanzas',
    subcategories: [
      {
        name: 'Bursátil',
        tools: ['Kavout', 'Numerai', 'EquBot'],
      },
      {
        name: 'Scoring',
        tools: ['Zest AI', 'Upstart', 'CredoLab'],
      },
      {
        name: 'Asesores',
        tools: ['Cleo AI', 'Plum', 'Wallet.AI'],
      },
      {
        name: 'Fraude',
        tools: ['FICO AI', 'Feedzai', 'Darktrace para finanzas'],
      },
    ],
  },
  {
    id: 8,
    name: 'IA en Diseño y Creatividad',
    subcategories: [
      {
        name: 'Gráfico',
        tools: ['Canva AI', 'Adobe Firefly', 'Fotor AI'],
      },
      {
        name: 'UX/UI',
        tools: ['Figma AI', 'Uizard', 'Galileo AI'],
      },
      {
        name: 'Branding',
        tools: ['Looka', 'Brandmark', 'Hatchful'],
      },
      {
        name: 'Web',
        tools: ['Durable AI', 'Wix ADI', 'Framer AI'],
      },
    ],
  },
  {
    id: 9,
    name: 'IA para Ciberseguridad',
    subcategories: [
      {
        name: 'Amenazas',
        tools: ['Darktrace', 'Vectra AI', 'Cylance'],
      },
      {
        name: 'Comportamiento',
        tools: ['Exabeam', 'LogRhythm', 'Securonix'],
      },
      {
        name: 'Respuesta',
        tools: ['SentinelOne', 'CrowdStrike Falcon'],
      },
    ],
  },
  {
    id: 10,
    name: 'IA Industrial / Robótica',
    subcategories: [
      {
        name: 'Procesos',
        tools: ['Siemens Industrial AI', 'GE Digital', 'Uptake'],
      },
      {
        name: 'Robótica',
        tools: ['Boston Dynamics', 'Covariant', 'Osaro'],
      },
      {
        name: 'Mantenimiento',
        tools: ['Augury', 'Senseye', 'SparkCognition'],
      },
      {
        name: 'Visión',
        tools: ['Landing AI', 'Matroid', 'Cognex'],
      },
    ],
  },
  {
    id: 11,
    name: 'IA General / Multimodal',
    subcategories: [
      {
        name: 'Multimodales',
        tools: ['GPT-4o (OpenAI)', 'Gemini 1.5 Pro', 'Claude 3 Opus'],
      },
      {
        name: 'Entradas mixtas',
        tools: ['LLaVA', 'Fuyu', 'Kosmos (Microsoft)', 'OpenFlamingo'],
      },
    ],
  },
  {
    id: 12,
    name: 'IA Open Source',
    subcategories: [
      {
        name: 'Texto',
        tools: ['Mistral', 'LLaMA', 'Falcon', 'BLOOM'],
      },
      {
        name: 'Multimodales',
        tools: ['LLaVA', 'IDEFICS', 'Fuyu'],
      },
      {
        name: 'Frameworks',
        tools: ['Hugging Face Transformers', 'LangChain', 'OpenLLM'],
      },
    ],
  },
  {
    id: 13,
    name: 'IA Cognitiva y Razonamiento',
    subcategories: [
      {
        name: 'Memoria a largo plazo / contexto extenso',
        tools: ['MemGPT', 'LTM Agents', 'LongChat'],
      },
      {
        name: 'Razonamiento estructurado',
        tools: ['Tree-of-Thought', 'GraphGPT', 'DSPy', 'Program-Aided Reasoning'],
      },
      { name: 'Agentes cognitivos avanzados', tools: ['AutoGen', 'CrewAI', 'ReAct', 'LangGraph'] },
    ],
  },
  {
    id: 14,
    name: 'MLOps y Desarrollo de Modelos',
    subcategories: [
      {
        name: 'Entrenamiento y despliegue',
        tools: ['Weights & Biases', 'ClearML', 'MLflow', 'SageMaker'],
      },
      { name: 'Evaluación y monitoreo', tools: ['TruLens', 'Helicone', 'PromptLayer', 'Arize AI'] },
      {
        name: 'Fine-tuning y RAG',
        tools: ['LoRA', 'LangChain', 'Haystack', 'Unstructured', 'RAGAS'],
      },
    ],
  },
  {
    id: 15,
    name: 'IA para Marketing y Ventas',
    subcategories: [
      {
        name: 'Generación de contenido y campañas',
        tools: ['Writesonic', 'Copy.ai', 'Jasper', 'Hypotenuse AI'],
      },
      {
        name: 'Optimización de embudos / CRM AI',
        tools: ['HubSpot AI', 'Salesforce Einstein AI', 'ChatSpot'],
      },
      {
        name: 'Email marketing y landing pages',
        tools: ['Unbounce Smart Copy', 'GetResponse AI', 'Mailchimp AI'],
      },
    ],
  },
  {
    id: 16,
    name: 'Traducción y Localización Automática',
    subcategories: [
      {
        name: 'Traducción de texto',
        tools: ['DeepL', 'Google Translate', 'ModernMT', 'Amazon Translate'],
      },
      { name: 'Subtitulación y doblaje IA', tools: ['Papercup', 'Dubverse', 'HeyGen', 'Subly AI'] },
    ],
  },
  {
    id: 17,
    name: 'Ética y Detección de IA',
    subcategories: [
      {
        name: 'Detección de deepfakes / contenido IA',
        tools: ['Hive AI', 'AI or Not', 'Sensity AI'],
      },
      { name: 'Explicabilidad y auditoría de IA', tools: ['TruEra', 'Fiddler AI', 'Credo AI'] },
    ],
  },
  {
    id: 18,
    name: 'Gestión del Conocimiento',
    subcategories: [
      { name: 'Document QA / RAG', tools: ['ChatPDF', 'AskYourPDF', 'Glean', 'Klu', 'Danswer'] },
      { name: 'Buscadores inteligentes', tools: ['Perplexity', 'You.com', 'Phind'] },
    ],
  },
];
