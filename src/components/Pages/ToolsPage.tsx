'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Footer from '../Footer/Footer';
import MobileHeader from '../Header/MobileHeader';
import ReactCtx from 'react';
import { AICategory } from '../../data/ai-tools';
// import { useMobileNavigation } from '../../hooks/useMobileNavigation';
import { useSubcategoryHandlers } from '../../hooks/useSubcategoryHandlers';
import { useScrollEffects } from '../../hooks/useScrollEffects';
import {
  SidebarDrawerContext as SidebarDrawerContextFromProviders,
  useActiveNavContext as useActiveNavContextFromProviders,
  useAppContext as useAppContextFromProviders,
  useSubcategoryContext as useSubcategoryContextFromProviders,
} from '../../app/providers';
import { type AITool } from '../../data/ai-tools';
import { handleToolClick, getPricingText } from '../../utils/toolUtils';
import { prefetchImages, withBase } from '../../utils/imagePrefetch';

type ToolsGroup = {
  name: string;
  tools: AITool[];
};

// Limita la descripción a N caracteres sin añadir puntos suspensivos, para que quepa en una sola línea
const trimToOneLine = (text: string | undefined, maxChars: number) => {
  if (!text) return '';
  return text.length > maxChars ? text.slice(0, maxChars) : text;
};

// Datos preparados a partir de docs/HERRAMIENTAS_FUTURAS.md
const toolsGroups: ToolsGroup[] = [
  {
    name: 'Comparadores IA',
    tools: [
      {
        name: 'Chatbot Arena',
        image: '/images/chatbotarena-web.webp',
        logo: '/logos/chatbotarena-movil.png',
        description: 'Comparador crowdsourced de LLMs',
        pricing: 'free',
        url: 'https://lmsys.org/',
      },
      {
        name: 'Hugging Face Leaderboard',
        image: '/images/hugginfaceleaderboards-web.webp',
        logo: '/logos/huggingface-movil.svg',
        description: 'Ranking de modelos por tareas y datasets',
        pricing: 'free',
        url: 'https://huggingface.co/docs/leaderboards/index?utm_source=chatgpt.com',
      },
      {
        name: 'Papers with Code',
        image: '/images/paperswithcode-web.webp',
        logo: '/logos/paperswithcode-movil.png',
        description: 'Benchmarks académicos',
        pricing: 'free',
        url: 'https://paperswithcode.com/sota',
      },
      {
        name: 'OpenRouter Leaderboard + Pricing',
        image: '/images/openrouter-web.webp',
        logo: '/logos/openrouter-movil.png',
        description: 'Comparativa de modelos y precios',
        pricing: 'free',
        url: 'https://openrouter.ai/models',
      },
      {
        name: 'Zeno AI',
        image: '/images/zenoai-web.webp',
        logo: '/logos/zenoai-movil.png',
        description: 'Evaluación y depuración de modelos',
        pricing: 'freemium',
        url: 'https://zenoml.com',
      },
      {
        name: 'Stanford HELM',
        image: '/images/standfordhelm-web.webp',
        logo: '/logos/standfordhelm-movil.png',
        description: 'Evaluación académica con métricas',
        pricing: 'free',
        url: 'https://crfm.stanford.edu/helm/latest/',
      },
    ],
  },
  {
    name: 'Costos & Tokens',
    tools: [
      {
        name: 'OpenAI Pricing Calculator',
        image: '/images/openaipricing-web.webp',
        logo: '/logos/openaipricing-movil.png',
        description: 'Calcula costes por tokens y modelos de OpenAI',
        pricing: 'free',
        url: 'https://openai.com/pricing',
      },
      {
        name: 'OpenAI Tokenizer',
        image: '/images/openaitokenizer-web.webp',
        logo: '/logos/openaipricing-movil.png',
        description: 'Cuenta tokens de un texto antes de enviarlo',
        pricing: 'free',
        url: 'https://platform.openai.com/tokenizer',
      },
      {
        name: 'Anthropic Token Counting',
        image: '/images/anthropictokencalculator-web.webp',
        logo: '/logos/anthropictokencalculator-movil.jpg',
        description: 'Cuenta tokens para prompts y mensajes en Claude',
        pricing: 'free',
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/token-counting?utm_source=chatgpt.com',
      },
      {
        name: 'Google AI Studio Token Estimator',
        image: '/images/googleiastudio-web.webp',
        logo: '/logos/googleiastudio-movil.png',
        description: 'Estima tokens y costes para modelos de Google',
        pricing: 'free',
        url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/get-token-count?utm_source=chatgpt.com&hl=es-419',
      },
      {
        name: 'Replicate Cost Calculator',
        image: '/images/replicate-web.webp',
        logo: '/logos/replicate-movil.png',
        description: 'Calcula el coste de inferencia en Replicate',
        pricing: 'free',
        url: 'https://replicate.com/pricing',
      },
      {
        name: 'RunPod Pricing Estimator',
        image: '/images/runpod-web.webp',
        logo: '/logos/runpod-movil.png',
        description: 'Estima coste de uso de GPU en RunPod',
        pricing: 'free',
        url: 'https://www.runpod.io/pricing',
      },
      {
        name: 'Suno Cost Calculator',
        image: '/images/sunocalculator-web.webp',
        logo: '/logos/suno-movil.png',
        description: 'Estimador de costes para generación de audio (no oficial)',
        pricing: 'free',
        url: 'https://sunnoai.com/pricing/?utm_source=chatgpt.com#google_vignette',
      },
      {
        name: 'ElevenLabs Cost Estimator',
        image: '/images/elevenlabscalculator-web.webp',
        logo: '/logos/elevenlabs-movil.png',
        description: 'Estimador de costes para TTS en ElevenLabs',
        pricing: 'free',
        url: 'https://elevenlabs.io/es/pricing?utm_source=chatgpt.com',
      },
    ],
  },
  {
    name: 'Prompts IA',
    tools: [
      {
        name: 'FlowGPT',
        image: '/images/flowgpt-web.webp',
        logo: '/logos/flowgpt-movil.png',
        description: 'Comunidad con prompts listos',
        pricing: 'freemium',
        url: 'https://flowgpt.com',
      },
      {
        name: 'PromptPerfect',
        image: '/images/promptperfect-web.webp',
        logo: '/logos/promptperfect-movil.png',
        description: 'Optimización automática de prompts',
        pricing: 'paid',
        url: 'https://promptperfect.jina.ai',
      },
      {
        name: 'AIPRM',
        image: '/images/aiprm-web.webp',
        logo: '/logos/aiprm-movil.png',
        description: 'Catálogo de prompts por categorías',
        pricing: 'freemium',
        url: 'https://www.aiprm.com/prompts/',
      },
      {
        name: 'PromptBase',
        image: '/images/promptbase-web.webp',
        logo: '/logos/promptbase-movil.png',
        description: 'Marketplace de prompts',
        pricing: 'paid',
        url: 'https://promptbase.com/',
      },
      {
        name: 'PromptHero',
        image: '/images/prompthero-web.webp',
        logo: '/logos/prompthero-movil.png',
        description: 'Biblioteca visual de prompts',
        pricing: 'free',
        url: 'https://prompthero.com/',
      },
      {
        name: 'Jasper Prompt Generator',
        image: '/images/jasperprompt-web.webp',
        logo: '/logos/jasper-movil.png',
        description: 'Generador de prompts para marketing',
        pricing: 'paid',
        url: 'https://www.jasper.ai/prompts?utm_source=chatgpt.com',
      },
      {
        name: 'ChatX Prompt Generator',
        image: '/images/chatx-web.webp',
        logo: '/logos/chatx-movil.png',
        description: 'Prompts a partir de objetivos',
        pricing: 'freemium',
        url: 'https://chatx.ai',
      },
      {
        name: 'PromptHub',
        image: '/images/prompthub-web.webp',
        logo: '/logos/prompthub-movil.webp',
        description: 'Gestor y repositorio de prompts',
        pricing: 'freemium',
        url: 'https://www.prompthub.us',
      },
      {
        name: 'Promptist',
        image: '/images/promptist-web.webp',
        logo: '/logos/promptist-movil.png',
        description: 'Asistente de prompts',
        pricing: 'free',
        url: 'https://www.godaddy.com/forsale/promptist.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2&',
      },
      {
        name: 'prompts.chat',
        image: '/images/prompts.chat-web.webp',
        logo: '/logos/prompts.chat-movil.svg',
        description: 'Directorio de prompts y UX para copiar/editar',
        pricing: 'free',
        url: 'https://prompts.chat/?utm_source=chatgpt.com',
      },
    ],
  },
  {
    name: 'Evaluación IA',
    tools: [
      {
        name: 'TruLens',
        image: '/images/trulens-web.webp',
        logo: '/logos/trulens-movil.png',
        description: 'Evalúa respuestas de LLMs',
        pricing: 'free',
        url: 'https://www.trulens.org/',
      },
      {
        name: 'Helicone',
        image: '/images/helicone-web.webp',
        logo: '/logos/helicone-movil.png',
        description: 'Métricas y feedback de modelos',
        pricing: 'freemium',
        url: 'https://helicone.ai',
      },
      {
        name: 'PromptLayer',
        image: '/images/promptlayer-web.webp',
        logo: '/logos/promptlayer-movil.webp',
        description: 'Análisis de prompts en producción',
        pricing: 'freemium',
        url: 'https://promptlayer.com/',
      },
      {
        name: 'Arize AI',
        image: '/images/arizeai-web.webp',
        logo: '/logos/arizeai-movil.webp',
        description: 'Evaluación de precisión y sesgo',
        pricing: 'freemium',
        url: 'https://arize.com',
      },
      {
        name: 'Humanloop',
        image: '/images/humanloop-web.webp',
        logo: '/logos/humanloop-movil.webp',
        description: 'Testing de prompts y outputs',
        pricing: 'freemium',
        url: 'https://humanloop.com',
      },
      {
        name: 'LM Evaluation Harness',
        image: '/images/lmevaluation-web.webp',
        logo: '/logos/lmevaluation-movil.png',
        description: 'Framework de evaluación LLMs',
        pricing: 'free',
        url: 'https://github.com/EleutherAI/lm-evaluation-harness',
      },
      {
        name: 'Genei Evaluator',
        image: '/images/genei-web.webp',
        logo: '/logos/genei-movil.png',
        description: 'Evalúa resúmenes y respuestas',
        pricing: 'freemium',
        url: 'https://www.genei.io',
      },
      {
        name: 'LangSmith',
        image: '/images/langsmith-web.webp',
        logo: '/logos/langsmith-movil.png',
        description: 'Trazabilidad y evaluaciones',
        pricing: 'freemium',
        url: 'https://www.langchain.com/langsmith',
      },
      {
        name: 'Langfuse',
        image: '/images/langfuse-web.webp',
        logo: '/logos/langfuse-movil.png',
        description: 'Tracing y métricas para LLMs',
        pricing: 'free',
        url: 'https://langfuse.com',
      },
      {
        name: 'Ragas',
        image: '/images/ragas-web.webp',
        logo: '/logos/ragas-movil.webp',
        description: 'Evaluación para RAG',
        pricing: 'free',
        url: 'https://www.ragas.io/',
      },
      {
        name: 'DeepEval',
        image: '/images/deepval-web.webp',
        logo: '/logos/deepval-movil.webp',
        description: 'Asserts y test de calidad',
        pricing: 'free',
        url: 'https://deepeval.com/docs/getting-started',
      },
      {
        name: 'Giskard',
        image: '/images/giskard-web.webp',
        logo: '/logos/giskard-movil.webp',
        description: 'Testing y QA de modelos',
        pricing: 'free',
        url: 'https://www.giskard.ai/?utm_source=chatgpt.com',
      },
    ],
  },
];

export default function ToolsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [activeTab, setActiveTab] = useState<string>(toolsGroups[0].name);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRow1Ref = useRef<HTMLDivElement | null>(null);
  const headerRow2Ref = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const isProgrammaticScroll = useRef(false);

  // Crear un objeto AICategory real para MobileHeader
  const herramientasCategory: AICategory = {
    name: 'Herramientas',
    subcategories: toolsGroups.map((group) => ({
      name: group.name,
      tools: group.tools,
    })),
  };

  // Providers/contexts para MobileHeader
  const { setSidebarOpen } = ReactCtx.useContext(SidebarDrawerContextFromProviders);
  const { activeNav, setActiveNav } = useActiveNavContextFromProviders();
  const { setActiveCategory } = useAppContextFromProviders();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContextFromProviders();

  // Usar el mismo hook que las categorías para navegación móvil
  const { handleMobileSubcategoryClick } = useSubcategoryHandlers(
    setActiveSubcategory,
    setIsScrolled,
    headerRow1Ref,
    headerRow2Ref,
    tabRefs,
    tabsContainerRef,
  );

  // Usar el mismo hook de scroll effects que las categorías
  useScrollEffects(
    herramientasCategory,
    activeSubcategory,
    setActiveSubcategory,
    setIsScrolled,
    isProgrammaticScroll,
    tabRefs,
    tabsContainerRef,
  );

  // Custom scroll detection para ToolsPage usando Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Considera visible cuando está en el 20% superior del viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section-name');
          if (sectionName && sectionName !== activeTab) {
            if (process.env.NODE_ENV !== 'production') {
              console.log('ToolsPage - Sección visible:', sectionName);
            }
            setActiveTab(sectionName);
            setActiveSubcategory(sectionName);
          }
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    toolsGroups.forEach((group) => {
      const element = document.getElementById(sanitizeId(group.name));
      if (element) {
        element.setAttribute('data-section-name', group.name);
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab, setActiveSubcategory]);

  useEffect(() => setIsClient(true), []);

  // Prefetch imágenes del grupo activo y el siguiente para que aparezcan instantáneas al navegar
  useEffect(() => {
    try {
      const currentIndex = toolsGroups.findIndex((g) => g.name === activeTab);
      const groupsToPrefetch = [toolsGroups[currentIndex], toolsGroups[currentIndex + 1]].filter(
        Boolean,
      ) as ToolsGroup[];

      const urls: string[] = [];
      for (const g of groupsToPrefetch) {
        for (const t of g.tools) {
          if (t.logo) urls.push(withBase(t.logo));
          if (t.image) urls.push(withBase(t.image));
        }
      }
      prefetchImages(urls);
    } catch {}
  }, [activeTab]);

  // Sincronizar activeTab local con activeSubcategory global
  useEffect(() => {
    if (activeSubcategory && activeSubcategory !== activeTab) {
      setActiveTab(activeSubcategory);
    }
  }, [activeSubcategory, activeTab]);

  const sanitizeId = (name: string) => name.replace(/\s+/g, '-');

  const getFilteredToolsForGroup = (tools: AITool[]) => {
    return tools.filter((t) => {
      if (activeFilter === 'free' && t.pricing !== 'free') return false;
      if (activeFilter === 'paid' && t.pricing !== 'paid') return false;
      const term = searchTerm.trim().toLowerCase();
      if (!term) return true;
      return (
        t.name.toLowerCase().includes(term) ||
        (t.description && t.description.toLowerCase().includes(term))
      );
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const mainElement = document.querySelector('main');
      const scrollTop = mainElement ? (mainElement as HTMLElement).scrollTop : window.scrollY;
      setIsScrolled(scrollTop > 30);
    };
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', onScroll, { passive: true });
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', onScroll);
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  const scrollToGroup = (groupName: string) => {
    const id = sanitizeId(groupName);
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mainElement = document.querySelector('main');
    const baseScroll = mainElement ? (mainElement as HTMLElement).scrollTop : window.scrollY;
    // Calcular offset dinámico sumando alturas del header doble
    const headerRow1 = document.querySelector('[data-header-row="1"]') as HTMLElement | null;
    const headerRow2 = document.querySelector('[data-header-row="2"]') as HTMLElement | null;
    const row1Height = headerRow1 && headerRow1.offsetHeight ? headerRow1.offsetHeight : 0;
    const row2Height = headerRow2 && headerRow2.offsetHeight ? headerRow2.offsetHeight : 0;
    // Cuando se hace scroll, la fila 1 puede estar colapsada
    const isRow1Collapsed = headerRow1 && headerRow1.style.height === '0px';
    const offset = (isRow1Collapsed ? 0 : row1Height) + row2Height + 12; // pequeño margen
    const top = rect.top + baseScroll - offset;
    if (mainElement) {
      (mainElement as HTMLElement).scrollTo({ top, behavior: 'smooth' });
    } else {
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Remover el useEffect custom de scroll que no funciona bien
  // useEffect(() => { ... }, [activeTab]);

  return (
    <div className="min-h-screen bg-black">
      {/* MobileHeader para que el estilo/UX sea idéntico al de categorías en móvil */}
      <MobileHeader
        currentCategory={herramientasCategory}
        activeSubcategory={activeTab}
        setActiveCategory={(c) => setActiveCategory(c)}
        setActiveSubcategory={(s) => {
          if (s) {
            setActiveTab(s);
            setActiveSubcategory(s); // Sincronizar con el estado global
            scrollToGroup(s);
          }
        }}
        setSidebarOpen={setSidebarOpen}
        isClient={isClient}
        tabRefs={tabRefs}
        tabsContainerRef={tabsContainerRef}
        onSubcategoryClick={handleMobileSubcategoryClick}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      {/* Fila 1: título + filtros (igual que categorías) */}
      <div
        ref={headerRow1Ref}
        data-header-row="1"
        className={`hidden md:block bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-200 ${
          isScrolled ? 'h-0 p-0 m-0 overflow-hidden opacity-0 border-0' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Herramientas</div>
          <div className="flex gap-[0.5px] mr-0 relative">
            {[
              { key: 'all', label: 'Ver Todas' },
              { key: 'free', label: 'Gratis' },
              { key: 'paid', label: 'Pago' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`relative px-3 py-1.5 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${
                  activeFilter === (key as 'all' | 'free' | 'paid')
                    ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]'
                    : ''
                }`}
                onClick={() => setActiveFilter(key as 'all' | 'free' | 'paid')}
              >
                {label}
                {activeFilter === key && (
                  <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white rounded drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                )}
              </button>
            ))}
            <div className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white/10 rounded" />
          </div>
        </div>
      </div>

      {/* Fila 2: tabs + búsqueda (igual que categorías) */}
      <div
        ref={headerRow2Ref}
        data-header-row="2"
        className={`hidden md:flex items-center justify-between bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-150 ${
          isScrolled
            ? 'fixed top-0 left-[calc(4px+270px+1px)] right-[calc(12px+1px)] z-50 shadow-lg border-t border-zinc-800'
            : 'relative z-20'
        }`}
      >
        <div className="flex gap-1 ml-1">
          {toolsGroups.map((group) => (
            <button
              key={group.name}
              onClick={() => scrollToGroup(group.name)}
              className={`px-3 py-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none rounded-full ${
                activeTab === group.name
                  ? 'bg-blue-600 text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'
                  : 'text-white/90 hover:bg-blue-600 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
        <div className="flex items-center w-full max-w-[280px] mr-0">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar IAs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar herramientas de IA"
              className="w-full bg-black border border-zinc-600 rounded-md pl-3 pr-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Header móvil: reutiliza el MobileHeader global para consistencia */}
      <div className="md:hidden">
        {/* MobileHeader ya se renderiza en ExploreView/Home, aquí solo dejamos espacio superior si es necesario */}
      </div>

      {/* Contenido */}
      <div className="px-2 py-1 md:px-4 md:py-6 md:pt-4 pt-[108px] max-w-7xl mx-auto">
        {/* Espacio entre header y primera categoría */}
        <div className="pt-8 md:pt-10"></div>

        {/* Renderizar todas las subcategorías */}
        {toolsGroups.map((group) => {
          const list = getFilteredToolsForGroup(group.tools);
          return (
            <div key={group.name} id={sanitizeId(group.name)} className="mb-4 md:mb-6">
              {/* Vista móvil: Lista en contenedores */}
              <div className="md:hidden">
                <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
                  <h2 className="text-xl font-bold mb-4 text-white pl-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                    {group.name}
                  </h2>
                  <div className="space-y-3">
                    {list.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-all duration-300 p-2"
                        onClick={() => handleToolClick(tool)}
                      >
                        <Image
                          src={tool.logo || tool.image}
                          alt={tool.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed whitespace-nowrap">
                            {trimToOneLine(tool.description, 48)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vista desktop: Grid de tarjetas */}
              <div className="hidden md:block">
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                  <h2 className="text-xl font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                    {group.name}
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {list.map((tool, i) => (
                      <div
                        key={tool.name}
                        className="group cursor-pointer transition-all duration-300"
                        onClick={() => handleToolClick(tool)}
                      >
                        <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                          <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            sizes="(max-width: 1024px) 25vw, 25vw"
                            priority={group.name === toolsGroups[0].name && i < 8}
                            loading={group.name === toolsGroups[0].name && i < 8 ? 'eager' : 'lazy'}
                            className="w-full h-full object-cover rounded transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="bg-zinc-800/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                              {getPricingText(tool.pricing)}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                            {tool.name}
                          </h3>
                          <p className="text-zinc-400 text-sm leading-relaxed whitespace-nowrap">
                            {trimToOneLine(tool.description, 60)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer setShowFeedback={() => {}} setShowBugReport={() => {}} />
    </div>
  );
}
