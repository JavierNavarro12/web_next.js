'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AICoursesSectionProps {
  onViewAll: () => void;
}

export default function AICoursesSection({ onViewAll }: AICoursesSectionProps) {
  const [displayCount, setDisplayCount] = useState(3);

  const allCourses = [
    {
      name: 'Elements of AI',
      creator: 'University of Helsinki',
      price: 'Gratis',
      description: 'Curso gratuito de IA para principiantes',
      image: '/images/elementsofai-web.png',
      logo: '/logos/elementsofai-movil.svg',
      url: 'https://course.elementsofai.com',
    },
    {
      name: 'AI for Everyone',
      creator: 'Andrew Ng - Coursera',
      price: '$49.00',
      description: 'Introducción a la IA para no técnicos',
      image: '/images/aiforeveryone-web.png',
      logo: '/logos/aiforeveryone-movil.png',
      url: 'https://www.coursera.org/learn/ai-for-everyone',
    },
    {
      name: 'Prompt Engineering',
      creator: 'Udemy',
      price: '$19.99',
      description: 'Aprende a escribir prompts efectivos',
      image: '/images/promptengineering-web.png',
      logo: '/logos/promptengineering-movil.png',
      url: 'https://www.udemy.com/course/prompt-engineering-for-beginners-a-step-by-step-guide/?srsltid=AfmBOordEFjwiDMbPUQiuiq20gqDJ9aJES9J__YQKgDXVNYMKhb-Lljk&utm_source=chatgpt.com&couponCode=MT300725G1',
    },
    {
      name: 'The AI Engineer Bootcamp 2025',
      creator: 'Udemy',
      price: '$14.99',
      description: 'Bootcamp completo de ingeniería de IA',
      image: '/images/aiengineer-web.png',
      logo: '/logos/promptengineering-movil.png',
      url: 'https://www.udemy.com/course/the-ai-engineer-course-complete-ai-engineer-bootcamp/?utm_source=chatgpt.com&couponCode=MT300725G1',
    },
    {
      name: 'Master LLM Engineering & AI Agents',
      creator: 'Udemy',
      price: '$15.99',
      description: 'Ingeniería de LLMs y agentes de IA',
      image: '/images/udemy-web.png',
      logo: '/logos/promptengineering-movil.png',
      url: 'https://www.udemy.com/course/llm-engineering-ai-agents',
    },
    {
      name: 'Prompt Engineering for ChatGPT',
      creator: 'Vanderbilt University - Coursera',
      price: 'Gratis',
      description: 'Prompt engineering para ChatGPT',
      image: '/images/promptengineeringchatpgt-web.png',
      logo: '/logos/aiforeveryone-movil.png',
      url: 'https://www.coursera.org/learn/prompt-engineering?utm_source=chatgpt.com',
    },
    {
      name: 'Generative AI with LLMs',
      creator: 'AWS & DeepLearning.AI - Coursera',
      price: 'Gratis',
      description: 'IA generativa con modelos de lenguaje',
      image: '/images/generativeai-web.png',
      logo: '/logos/aiforeveryone-movil.png',
      url: 'https://www.coursera.org/learn/generative-ai-with-llms?utm_source=chatgpt.com',
    },
    {
      name: 'Practical Deep Learning for Coders',
      creator: 'fast.ai',
      price: 'Gratis',
      description: 'Deep learning práctico para programadores',
      image: '/images/fastai-web.png',
      logo: '/logos/fastai-movil.png',
      url: 'https://course.fast.ai',
    },
    {
      name: 'The Complete Prompt Engineering for AI Bootcamp',
      creator: 'Udemy',
      price: '$22.99',
      description: 'Bootcamp completo de prompt engineering',
      image: '/images/udemy-web.png',
      logo: '/logos/promptengineering-movil.png',
      url: 'https://www.udemy.com/course/prompt-engineering-bootcamp',
    },
  ];

  const displayedCourses = allCourses.slice(0, displayCount);

  const handleCourseClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleLoadMore = () => {
    if (displayCount === 3) {
      setDisplayCount(6);
    } else if (displayCount === 6) {
      setDisplayCount(9);
    } else {
      setDisplayCount(3);
    }
  };

  const handleLoadLess = () => {
    if (displayCount === 9) {
      setDisplayCount(6);
    } else if (displayCount === 6) {
      setDisplayCount(3);
    }
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Contenedor principal con bordes */}
      <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
        {/* Header con título y botón */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Cursos IA</h2>
          <button
            className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
            onClick={onViewAll}
          >
            Ver todo
          </button>
        </div>

        {/* Vista móvil: Lista vertical con iconos */}
        <div className="md:hidden">
          <div className="space-y-3">
            {displayedCourses.map((course) => (
              <div
                key={course.name}
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                onClick={() => handleCourseClick(course.url)}
              >
                <Image
                  src={course.logo}
                  alt={course.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{course.name}</h3>
                  <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={course.logo}
                        alt={`${course.creator} logo`}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain rounded"
                      />
                      <span>{course.creator}</span>
                    </div>
                  </div>
                  <p className="text-green-400 text-sm font-medium">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista desktop: Grid de tarjetas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {displayedCourses.map((course) => (
            <div
              key={course.name}
              className="group cursor-pointer"
              onClick={() => handleCourseClick(course.url)}
            >
              {/* Contenedor de imagen separado */}
              <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                />
                {/* Overlay hover con descripción */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium text-center max-w-[80%] px-4">
                    {course.description}
                  </div>
                </div>
              </div>

              {/* Título y descripción sueltos */}
              <div className="relative">
                {/* Precio en esquina superior derecha */}
                <div className="absolute top-0 right-0">
                  <p className="text-white text-sm font-medium">{course.price}</p>
                </div>

                {/* Título con NEW al final */}
                <div className="pr-16 mb-1">
                  {course.name.length > 20 ? (
                    <h3 className="font-bold text-white text-base group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all leading-tight">
                      {course.name.split(' ').slice(0, -2).join(' ')}
                      <br />
                      {course.name.split(' ').slice(-2).join(' ')}{' '}
                      <span className="text-zinc-500 text-xs">NEW</span>
                    </h3>
                  ) : (
                    <h3 className="font-bold text-white text-base group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all leading-tight">
                      {course.name} <span className="text-zinc-500 text-xs">NEW</span>
                    </h3>
                  )}
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.logo}
                      alt={`${course.creator} logo`}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain rounded"
                    />
                    <span>{course.creator}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones Cargar más/menos */}
        <div className="flex justify-center gap-4 mt-8">
          {displayCount > 3 && (
            <button
              onClick={handleLoadLess}
              className="text-white text-sm font-medium hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Cargar menos
            </button>
          )}
          {displayCount < 9 && (
            <button
              onClick={handleLoadMore}
              className="text-white text-sm font-medium hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Cargar más
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
