export type DiscontinuedTool = {
  /** Qué pasó, en una frase, para mostrarlo en la ficha. */
  note: string;
  /** Fuente donde se puede comprobar. */
  sourceUrl: string;
};

/**
 * Herramientas del catálogo que han cerrado o están en proceso de cierre.
 *
 * No las borramos: la gente sigue buscándolas y una ficha que explica que
 * cerró y a dónde ir después es más útil que un 404. Pero se marcan con un
 * aviso y se quedan fuera de las secciones de recomendación.
 */
export const discontinuedTools: Record<string, DiscontinuedTool> = {
  'Play.ht': {
    note: 'Play.ht dejó de funcionar tras la adquisición del equipo de PlayAI por parte de Meta en julio de 2025. La API se cortó ese mismo mes y la plataforma se apagó el 31 de diciembre de 2025. Su dominio ya no resuelve.',
    sourceUrl: 'https://techcrunch.com/2025/07/22/meta-acquires-voice-startup-play-ai/',
  },
  Phind: {
    note: 'Phind cerró el 16 de enero de 2026, sin periodo de transición. Los usuarios pudieron descargar su historial hasta el 30 de enero y los suscriptores de pago recibieron un reembolso proporcional. El equipo señaló que los grandes modelos habían absorbido su caso de uso al integrar búsqueda web y programación.',
    sourceUrl: 'https://www.aipedia.wiki/tools/phind/',
  },
  Sora: {
    note: 'OpenAI anunció el cierre de Sora el 24 de marzo de 2026. La app y la web dejaron de funcionar el 26 de abril de 2026 y la API se apagó el 24 de septiembre de 2026. No es posible darse de alta ni generar vídeo con ella.',
    sourceUrl:
      'https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation',
  },
  ChatSpot: {
    note: 'HubSpot retiró ChatSpot como producto independiente en 2024 y lo integró en su plataforma como Breeze, su asistente de IA. El dominio chatspot.ai redirige a la página de Breeze y ya no es posible usar ChatSpot por separado.',
    sourceUrl: 'https://www.hubspot.com/products/artificial-intelligence/breeze-ai-assistant',
  },
  Papercup: {
    note: 'RWS adquirió la tecnología de Papercup en junio de 2025 y el producto dejó de operar de forma independiente. Su web redirige al servicio de doblaje con IA de RWS, donde continúa la tecnología.',
    sourceUrl:
      'https://www.rws.com/localization/services/translation-services/video-and-audio-translation/ai-dubbing-and-vo',
  },
};
