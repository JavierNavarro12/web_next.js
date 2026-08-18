'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  toolName: string;
  source: 'ficha' | 'comparativa';
  className?: string;
  children: React.ReactNode;
};

export default function AffiliateCta({ href, toolName, source, className, children }: Props) {
  const handleClick = () => {
    window.gtag?.('event', 'affiliate_click', {
      tool: toolName,
      source,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
