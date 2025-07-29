import { aiCategories, AITool } from '../data/ai-tools';

// Función para formatear el texto de pricing
export const getPricingText = (pricing?: string) => {
  switch (pricing) {
    case 'free':
      return 'Gratis';
    case 'paid':
      return 'Pago';
    case 'freemium':
      return 'Gratis y pago';
    default:
      return 'Gratis y pago';
  }
};

// Función para manejar click en herramienta
export const handleToolClick = (tool: AITool) => {
  if (tool.url) {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  }
};

// Función para filtrar herramientas según el filtro y búsqueda
export const filterTools = (
  tools: AITool[],
  activeFilter: 'all' | 'free' | 'paid',
  searchTerm: string,
) => {
  let filtered = tools;
  if (activeFilter === 'free') filtered = filtered.filter((t) => t.pricing === 'free');
  if (activeFilter === 'paid') filtered = filtered.filter((t) => t.pricing === 'paid');
  
  const trimmedSearchTerm = searchTerm.trim();
  if (trimmedSearchTerm) {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(trimmedSearchTerm.toLowerCase())),
    );
  }
  return filtered;
};

// Función para obtener herramientas por categoría específica
export const getToolsByCategory = (categoryName: string, limit?: number) => {
  const category = aiCategories.find((cat) => cat.name === categoryName);
  if (!category) return [];

  const tools: AITool[] = [];
  category.subcategories.forEach((subcat) => {
    if (subcat.tools) {
      tools.push(...subcat.tools);
    }
  });

  return limit ? tools.slice(0, limit) : tools;
};

// Función para contar herramientas por categoría
export const getToolsCount = (categoryName: string) => {
  const tools = getToolsByCategory(categoryName);
  return tools.length;
};

// Función para obtener herramientas destacadas (mezcla de diferentes categorías)
export const getFeaturedTools = (): AITool[] => {
  const allTools: AITool[] = [];
  aiCategories.forEach((category) => {
    category.subcategories.forEach((subcat) => {
      if (subcat.tools) {
        allTools.push(...subcat.tools);
      }
    });
  });

  // Las 8 IAs más populares basadas en datos reales de uso y reconocimiento
  const popularToolNames = [
    'ChatGPT', // #1 - OpenAI, líder indiscutible en IA conversacional
    'Claude', // #2 - Anthropic, competidor directo de ChatGPT
    'Midjourney', // #3 - Líder en generación de imágenes
    'DALL·E', // #4 - OpenAI, pionero en generación de imágenes
    'Sora', // #5 - OpenAI, líder en generación de video
    'Gemini', // #6 - Google, competidor principal
    'Stable Diffusion', // #7 - Open source, muy popular
    'ElevenLabs', // #8 - Líder en síntesis de voz y audio IA
  ];

  const featured = popularToolNames
    .map((name) => allTools.find((t) => t.name === name))
    .filter((tool): tool is AITool => tool !== undefined);

  // Si no encontramos suficientes herramientas populares, usar las primeras disponibles
  if (featured.length < 8) {
    const remaining = allTools
      .filter((tool) => !featured.some((f) => f.name === tool.name))
      .slice(0, 8 - featured.length);
    featured.push(...remaining);
  }

  return featured;
};
