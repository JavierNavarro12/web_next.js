'use client';

import React from 'react';
import Image from 'next/image';

interface AIAutomationChatbotsSectionProps {
  onViewAllAutomatizacion: () => void;
  onViewAllChatbots: () => void;
}

export default function AIAutomationChatbotsSection({
  onViewAllAutomatizacion: _onViewAllAutomatizacion,
  onViewAllChatbots: _onViewAllChatbots,
}: AIAutomationChatbotsSectionProps) {
  const automationTools = [
    {
      name: 'Zapier',
      logo: '/logos/zapier-movil.jpeg',
      description: 'Automatización de flujos',
      url: 'https://zapier.com',
    },
    {
      name: 'Make',
      logo: '/logos/make-movil.svg',
      description: 'Automatización avanzada',
      url: 'https://www.make.com',
    },
    {
      name: 'n8n',
      logo: '/logos/n8n-movil.png',
      description: 'Automatización open source',
      url: 'https://n8n.io',
    },
    {
      name: 'Power Automate',
      logo: '/logos/powerautomate-movil.png',
      description: 'Automatización empresarial',
      url: 'https://powerautomate.microsoft.com',
    },
    {
      name: 'IFTTT',
      logo: '/logos/ifttt-movil.png',
      description: 'Automatización simple',
      url: 'https://ifttt.com',
    },
    {
      name: 'Trigger.dev',
      logo: '/logos/trigger.dev-web.jpeg',
      description: 'Automatización para devs',
      url: 'https://trigger.dev',
    },
  ];

  const chatbotTools = [
    {
      name: 'Intercom',
      logo: '/logos/intercom-movil.png',
      description: 'Chatbot empresarial',
      url: 'https://www.intercom.com',
    },
    {
      name: 'Drift',
      logo: '/logos/drift-movil.webp',
      description: 'Chatbot de ventas',
      url: 'https://www.drift.com',
    },
    {
      name: 'Ada',
      logo: '/logos/ada-movil.jpeg',
      description: 'Chatbot inteligente',
      url: 'https://ada.cx',
    },
    {
      name: 'LivePerson',
      logo: '/logos/liveperson-movil.png',
      description: 'Chatbot omnicanal',
      url: 'https://www.liveperson.com',
    },
    {
      name: 'ChatSpot',
      logo: '/logos/chatspot-movil.png',
      description: 'Chatbot CRM',
      url: 'https://chatspot.ai',
    },
    {
      name: 'Zendesk',
      logo: '/logos/zendesk-movil.png',
      description: 'Chatbot soporte',
      url: 'https://www.zendesk.com',
    },
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Vista móvil: Lista vertical con iconos */}
      <div className="md:hidden space-y-6">
        {/* Contenedor Automatización - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Automatización
            </h2>
          </div>

          <div className="space-y-3">
            {automationTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                onClick={() => handleToolClick(tool.url)}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenedor Chatbots - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Chatbots Empresariales
            </h2>
          </div>

          <div className="space-y-3">
            {chatbotTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                onClick={() => handleToolClick(tool.url)}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vista desktop: Grid de dos contenedores lado a lado */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contenedor Automatización */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2
              className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Automatización
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de automatización */}
          <div className="grid grid-cols-2 gap-2">
            {automationTools.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
                onClick={() => handleToolClick(tool.url)}
              >
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="48px"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{tool.name}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenedor Chatbots */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2
              className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Chatbots Empresariales
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de chatbots */}
          <div className="grid grid-cols-2 gap-2">
            {chatbotTools.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
                onClick={() => handleToolClick(tool.url)}
              >
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="48px"
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{tool.name}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
