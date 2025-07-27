import { getToolsByCategory } from './toolUtils';

// Función para obtener herramientas de video AI
export const getVideoAITools = () => {
  return getToolsByCategory('Generativa', 8)
    .filter((tool) =>
      ['Sora', 'Veo', 'Runway', 'Pika Labs', 'Synthesia', 'Colossyan', 'InVideo', 'Fliki'].includes(
        tool.name,
      ),
    )
    .slice(0, 8);
};

// Función para obtener herramientas de código AI
export const getCodeAITools = () => {
  return getToolsByCategory('Generativa', 12)
    .filter((tool) =>
      [
        'GitHub Copilot',
        'Cursor',
        'Claude',
        'Gemini',
        'Tabnine',
        'Codium',
        'AskTheCode',
        'Testim',
        'Diffblue',
        'Jules',
        'DeepSource',
        'LangChain',
      ].includes(tool.name),
    )
    .slice(0, 8);
};

// Función para obtener herramientas de automatización
export const getAutomationTools = () => {
  return getToolsByCategory('Negocios', 8)
    .filter((tool) =>
      ['Zapier', 'n8n', 'Make', 'Power Automate', 'IFTTT', 'Manus', 'Trigger.dev'].includes(
        tool.name,
      ),
    )
    .slice(0, 8);
};

// Función para obtener herramientas de ofimática
export const getOfficeTools = () => {
  return getToolsByCategory('Negocios', 6)
    .filter((tool) =>
      [
        'Notion AI',
        'Microsoft 365 Copilot',
        'Google Workspace Duet',
        'Gamma',
        'Magic Write',
        'Canva Magic Studio',
      ].includes(tool.name),
    )
    .slice(0, 6);
};

// Función para obtener herramientas de análisis de datos
export const getDataAnalysisTools = () => {
  return getToolsByCategory('Negocios', 6)
    .filter((tool) =>
      ['Power BI', 'Tableau', 'ThoughtSpot', 'Perplexity', 'AlphaSense', 'Kavout'].includes(
        tool.name,
      ),
    )
    .slice(0, 6);
};

// Función para obtener herramientas de gestión de proyectos
export const getProjectManagementTools = () => {
  return getToolsByCategory('Negocios', 4)
    .filter((tool) => ['ClickUp', 'Asana', 'Monday.com', 'Trello'].includes(tool.name))
    .slice(0, 4);
};

// Función para obtener herramientas legales AI
export const getLegalAITools = () => {
  return getToolsByCategory('Negocios', 6)
    .filter((tool) =>
      ['Harvey', 'Luminance', 'DoNotPay', 'Spellbook', 'Evisort', 'LawGeex'].includes(tool.name),
    )
    .slice(0, 6);
};
