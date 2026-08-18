export type AffiliateLink = {
  url: string;
  perk?: string;
};

/**
 * Enlaces de afiliado por herramienta. Solo programas activos con enlace en mano;
 * las herramientas sin entrada siguen enlazando a su web oficial normal.
 * Todo enlace de afiliado se marca con rel="sponsored" y aviso visible (LSSI art. 20).
 */
export const affiliateLinks: Record<string, AffiliateLink> = {
  ElevenLabs: { url: 'https://try.elevenlabs.io/rh6ijma1zo1l' },
  Make: {
    url: 'https://www.make.com/en/register?pc=aifinder',
    perk: 'Con este enlace: 1 mes del plan Core gratis, con 10.000 créditos incluidos.',
  },
};

export function getAffiliateLink(toolName: string): AffiliateLink | undefined {
  return affiliateLinks[toolName];
}
