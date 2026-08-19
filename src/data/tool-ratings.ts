/**
 * Nota editorial de AIFinder por herramienta (1-10, un decimal), keyed por
 * el `name` exacto del catálogo, igual que tool-details.ts.
 *
 * Cómo se puntúa (la metodología pública está en /sobre#como-puntuamos):
 * la nota es una valoración editorial global guiada por cuatro criterios,
 * no una media aritmética:
 *   - Capacidades y resultados en su caso de uso (useCases/features/pros de la ficha)
 *   - Facilidad de uso y adopción
 *   - Precio frente a lo que ofrece (tool-pricing.ts cuando hay precios verificados)
 *   - Gravedad de las limitaciones documentadas (cons de la ficha)
 *
 * Bandas orientativas: 9+ referente de su categoría; 8-8,9 muy sólida;
 * 7-7,9 buena con peros; 6-6,9 correcta con limitaciones serias; <6 difícil
 * de recomendar frente a sus alternativas. Nada por debajo de 5: lo que no
 * llega ahí no entra en el directorio (ver /directrices).
 *
 * Mantenimiento: al abrir una tanda nueva en publishing.ts hay que puntuar
 * sus herramientas (hay un test que lo exige). Las herramientas retiradas
 * (discontinued.ts) no llevan nota. Si una ficha cambia de forma relevante
 * (precios, capacidades), revisar su nota.
 */
export const toolRatings: Record<string, number> = {
  Ada: 7.2,
  'Adobe Firefly': 8.2,
  AgentGPT: 6.3,
  Alexa: 7.8,
  AskTheCode: 6.5,
  AskYourPDF: 7.0,
  Assistant: 7.5,
  AudioCraft: 6.8,
  Aurora: 7.0,
  AutoGen: 7.8,
  AutoGPT: 6.6,
  BioGPT: 6.4,
  Bolt: 7.9,
  Brandmark: 7.3,
  'Canva Magic Studio': 8.3,
  ChatGPT: 9.3,
  'ChatGPT Agents': 8.0,
  ChatPDF: 7.0,
  Claude: 9.1,
  Codium: 7.2,
  Colossyan: 7.1,
  'Copilot Agents': 7.4,
  'Copy.ai': 6.2,
  CrewAI: 7.9,
  CrowdStrike: 8.6,
  Cursor: 8.9,
  'DALL·E': 8.0,
  Darktrace: 7.8,
  DeepL: 8.8,
  DeepSeek: 8.4,
  DeepSource: 7.4,
  Descript: 8.3,
  Diffblue: 7.0,
  Dubverse: 6.9,
  Einstein: 7.5,
  ElevenLabs: 9.0,
  Falcon: 6.7,
  Fliki: 6.9,
  FLUX: 8.5,
  Gamma: 8.4,
  Gemini: 8.8,
  'GitHub Copilot': 8.7,
  'Google Flow': 8.1,
  'Google Translate': 8.2,
  Grammarly: 7.4,
  Grok: 8.0,
  Haystack: 7.7,
  HeyGen: 8.4,
  Ideogram: 8.0,
  IFTTT: 7.3,
  Imagen: 8.0,
  Intercom: 8.2,
  InVideo: 6.8,
  Jasper: 7.2,
  Jules: 7.4,
  Kling: 7.5,
  LangChain: 7.8,
  'LangChain Agents': 7.6,
  LangGraph: 8.1,
  'Leonardo AI': 8.0,
  LivePerson: 7.0,
  LLaMA: 8.3,
  Looka: 7.2,
  Make: 8.6,
  Manus: 7.8,
  MetaGPT: 7.0,
  'Microsoft 365 Copilot': 7.9,
  Midjourney: 8.8,
  MiniMax: 7.1,
  Mistral: 8.2,
  Murf: 7.9,
  n8n: 8.5,
  'Notion AI': 7.6,
  Perplexity: 8.6,
  Pi: 6.6,
  'Pika Labs': 7.6,
  'Playground AI': 7.1,
  'Power Automate': 7.7,
  'Power BI': 8.6,
  Qwen: 8.0,
  Recraft: 8.1,
  Replika: 6.3,
  'Resemble AI': 7.6,
  Runway: 8.4,
  Seedream: 7.6,
  SentinelOne: 8.4,
  Siri: 7.2,
  Speechify: 7.8,
  'Stable Diffusion': 8.7,
  Sudowrite: 7.3,
  Suno: 8.5,
  Synthesia: 8.3,
  Tableau: 8.2,
  Tabnine: 7.1,
  Testim: 7.4,
  'Trigger.dev': 7.7,
  'Vectra AI': 7.7,
  Veo: 8.4,
  'Voice.ai': 6.5,
  Voicemod: 7.4,
  Writable: 6.4,
  Writesonic: 7.0,
  'xAI Agents': 7.0,
  'You.com': 7.4,
  Zapier: 8.5,
  Zendesk: 8.3,
};

export function getToolRating(toolName: string): number | undefined {
  return toolRatings[toolName];
}
