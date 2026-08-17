import React from 'react';
import dynamic from 'next/dynamic';
import MobileHeader from '../../Header/MobileHeader';
import DesktopHeader from '../../Header/DesktopHeader';
import Footer from '../../Footer/Footer';
import type { AICategory } from '../../../data/ai-tools';

function LoadingBlock() {
  return (
    <div
      className="h-24 animate-pulse bg-zinc-800/50 rounded-xl"
      role="status"
      aria-live="polite"
      aria-busy="true"
    />
  );
}

const HeroSection = dynamic(() => import('../../Hero/HeroSection'), {
  ssr: true,
  loading: () => <LoadingBlock />,
});
const FeaturedToolsSection = dynamic(() => import('../../Sections/FeaturedToolsSection'), {
  loading: () => <LoadingBlock />,
});
const NewestAdditionsSection = dynamic(() => import('../../Sections/NewestAdditionsSection'), {
  loading: () => <LoadingBlock />,
});
const PromotionalCard = dynamic(() => import('../../Sections/PromotionalCard'), {
  loading: () => <LoadingBlock />,
});
const SpotlightSection = dynamic(() => import('../../Sections/SpotlightSection'), {
  loading: () => <LoadingBlock />,
});
const AICoursesSection = dynamic(() => import('../../Sections/AICoursesSection'), {
  loading: () => <LoadingBlock />,
});
const AIRecommendationsSection = dynamic(() => import('../../Sections/AIRecommendationsSection'), {
  loading: () => <LoadingBlock />,
});
const AIBootcampsSection = dynamic(() => import('../../Sections/AIBootcampsSection'), {
  loading: () => <LoadingBlock />,
});
const AIAudioSection = dynamic(() => import('../../Sections/AIAudioSection'), {
  loading: () => <LoadingBlock />,
});
const AITextImageSection = dynamic(() => import('../../Sections/AITextImageSection'), {
  loading: () => <LoadingBlock />,
});
const AIFinanceSection = dynamic(() => import('../../Sections/AIFinanceSection'), {
  loading: () => <LoadingBlock />,
});
const AISecuritySection = dynamic(() => import('../../Sections/AISecuritySection'), {
  loading: () => <LoadingBlock />,
});
const AIAutomationChatbotsSection = dynamic(
  () => import('../../Sections/AIAutomationChatbotsSection'),
  { loading: () => <LoadingBlock /> },
);
const AILegalSection = dynamic(() => import('../../Sections/AILegalSection'), {
  loading: () => <LoadingBlock />,
});
const AISymptomsSection = dynamic(() => import('../../Sections/AISymptomsSection'), {
  loading: () => <LoadingBlock />,
});
const AITestingMedicalSection = dynamic(() => import('../../Sections/AITestingMedicalSection'), {
  loading: () => <LoadingBlock />,
});
const ArticlesSection = dynamic(() => import('../../Sections/ArticlesSection'), {
  loading: () => <LoadingBlock />,
});

type ExploreViewProps = {
  currentCategory: AICategory | null;
  activeSubcategory: string | null;
  setActiveCategory: (c: string | null) => void;
  setActiveSubcategory: (s: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  isClient: boolean;
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
  tabsContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  onMobileSubcategoryClick: (name: string) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  isScrolled: boolean;
  activeFilter: 'all' | 'free' | 'paid';
  setActiveFilter: (f: 'all' | 'free' | 'paid') => void;
  hoveredFilter: string | null;
  setHoveredFilter: (v: string | null) => void;
  searchTerm: string;
  setSearchTerm: (t: string) => void;
  headerRow1Ref: React.MutableRefObject<HTMLDivElement | null>;
  headerRow2Ref: React.MutableRefObject<HTMLDivElement | null>;
  onSubcategoryClick: (name: string) => void;
  navigateToSubcategory: (name: string) => void;
  onSetShowFeedback: (v: boolean) => void;
  onSetShowBugReport: (v: boolean) => void;
  children?: React.ReactNode;
};

export default function ExploreView({
  currentCategory,
  activeSubcategory,
  setActiveCategory,
  setActiveSubcategory,
  setSidebarOpen,
  isClient,
  tabRefs,
  tabsContainerRef,
  onMobileSubcategoryClick,
  activeNav,
  setActiveNav,
  isScrolled,
  activeFilter,
  setActiveFilter,
  hoveredFilter,
  setHoveredFilter,
  searchTerm,
  setSearchTerm,
  headerRow1Ref,
  headerRow2Ref,
  onSubcategoryClick,
  navigateToSubcategory,
  onSetShowFeedback,
  onSetShowBugReport,
  children,
}: ExploreViewProps) {
  return (
    <div className="min-h-screen bg-black">
      <MobileHeader
        currentCategory={currentCategory}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        setSidebarOpen={setSidebarOpen}
        isClient={isClient}
        tabRefs={tabRefs}
        tabsContainerRef={tabsContainerRef}
        onSubcategoryClick={onMobileSubcategoryClick}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <DesktopHeader
        currentCategory={currentCategory}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        isScrolled={isScrolled}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        hoveredFilter={hoveredFilter}
        setHoveredFilter={setHoveredFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        headerRow1Ref={headerRow1Ref}
        headerRow2Ref={headerRow2Ref}
        onSubcategoryClick={onSubcategoryClick}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <div className={`${activeNav === 'articulos' ? 'pt-[56px]' : 'pt-0'} md:pt-[60px]`}>
        <React.Suspense fallback={<LoadingBlock />}>
          {activeNav === 'explorar' ? (
            <>
              <HeroSection />
              <FeaturedToolsSection />
              <NewestAdditionsSection />
              <PromotionalCard />
              <SpotlightSection
                onViewAll={() => {
                  setActiveCategory('Generativa');
                  setTimeout(() => {
                    navigateToSubcategory('Video');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Video');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AICoursesSection onViewAll={undefined as never} />
              <AIRecommendationsSection onViewAll={undefined as never} />
              <AIBootcampsSection onViewAll={undefined as never} />
              <AIAudioSection
                onViewAll={() => {
                  setActiveCategory('Generativa');
                  setTimeout(() => {
                    navigateToSubcategory('Audio / Voz');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Audio / Voz');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AITextImageSection
                onViewAllTexto={() => {
                  setActiveCategory('Generativa');
                  setTimeout(() => {
                    navigateToSubcategory('Texto');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Texto');
                      }, 200);
                    }
                  }, 100);
                }}
                onViewAllImagenes={() => {
                  setActiveCategory('Generativa');
                  setTimeout(() => {
                    navigateToSubcategory('Imágenes');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Imágenes');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AIFinanceSection
                onViewAll={() => {
                  setActiveCategory('Finanzas');
                  setTimeout(() => {
                    navigateToSubcategory('Análisis bursátil');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Análisis bursátil');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AISecuritySection
                onViewAll={() => {
                  setActiveCategory('Seguridad');
                  setTimeout(() => {
                    navigateToSubcategory('Detección de amenazas');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Detección de amenazas');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AIAutomationChatbotsSection
                onViewAllAutomatizacion={() => {
                  setActiveCategory('Negocios');
                  setTimeout(() => {
                    navigateToSubcategory('Automatización de flujos');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Automatización de flujos');
                      }, 200);
                    }
                  }, 100);
                }}
                onViewAllChatbots={() => {
                  setActiveCategory('Chatbots');
                  setTimeout(() => {
                    navigateToSubcategory('Chatbots empresariales');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Chatbots empresariales');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AILegalSection
                onViewAll={() => {
                  setActiveCategory('Negocios');
                  setTimeout(() => {
                    navigateToSubcategory('IA legal');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('IA legal');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AISymptomsSection
                onViewAll={() => {
                  setActiveCategory('Salud');
                  setTimeout(() => {
                    navigateToSubcategory('Síntomas');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Síntomas');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              <AITestingMedicalSection
                onViewAllTesting={() => {
                  setActiveCategory('Desarrollo');
                  setTimeout(() => {
                    navigateToSubcategory('Testing y QA');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Testing y QA');
                      }, 200);
                    }
                  }, 100);
                }}
                onViewAllMedical={() => {
                  setActiveCategory('Salud');
                  setTimeout(() => {
                    navigateToSubcategory('Imágenes médicas');
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      setTimeout(() => {
                        onMobileSubcategoryClick('Imágenes médicas');
                      }, 200);
                    }
                  }, 100);
                }}
              />
              {children}
              <Footer
                setShowFeedback={onSetShowFeedback}
                setShowBugReport={onSetShowBugReport}
                setActiveCategory={setActiveCategory}
                setActiveSubcategory={setActiveSubcategory}
              />
            </>
          ) : activeNav === 'articulos' ? (
            <ArticlesSection />
          ) : null}
        </React.Suspense>
      </div>
    </div>
  );
}
