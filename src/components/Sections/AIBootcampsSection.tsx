'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AIBootcampsSectionProps {
  onViewAll?: () => void;
}

export default function AIBootcampsSection({ onViewAll: _onViewAll }: AIBootcampsSectionProps) {
  const [displayCount, setDisplayCount] = useState(3);

  const allBootcamps = [
    {
      name: 'Bootcamp AI',
      creator: 'BootcampAI.org',
      price: '$59.00',
      description: 'Suscripción mensual - acceso ilimitado a cursos prácticos sobre IA',
      image: '/images/bootcampai-web.webp',
      logo: '/logos/bootcampai-movil.png',
      url: 'https://www.bootcampai.org/plans/?utm_source=chatgpt.com',
    },
    {
      name: 'Udacity AI Programming with Python Nanodegree',
      creator: 'Udacity',
      price: '$220.00',
      description: 'Suscripción mensual - Programación IA con Python',
      image: '/images/aiprogramming-web.webp',
      logo: '/logos/aiprogramming-movil.png',
      url: 'https://www.udacity.com/course/ai-programming-python-nanodegree--nd089',
    },
    {
      name: 'Simplilearn Machine Learning Using Python Bootcamp',
      creator: 'Simplilearn',
      price: '$399.00',
      description: 'Suscripción mensual - Machine Learning con Python',
      image: '/images/machinelearningpython-web.webp',
      logo: '/logos/machinelearningpython-movil.jpg',
      url: 'https://www.simplilearn.com/big-data-and-analytics/machine-learning-certification-training-course#trainingOptionsPos',
    },
    {
      name: 'Springboard AI/Machine Learning Prep Bootcamp',
      creator: 'Springboard',
      price: '$499.00',
      description: 'Suscripción mensual - Preparación en IA y Machine Learning',
      image: '/images/springboard-web.webp',
      logo: '/logos/springboard-movil.png',
      url: 'https://www.springboard.com/courses/ai-machine-learning-career-track/',
    },
    {
      name: 'AI-Camp.org AI Bootcamp',
      creator: 'AI-Camp.org',
      price: '$500.00',
      description: 'Suscripción mensual - Bootcamp de IA para principiantes',
      image: '/images/aibootcamp-web.webp',
      logo: '/logos/aibootcamp-movil.png',
      url: 'https://www.ai-camp.org/ai-bootcamp',
    },
    {
      name: 'AI and Machine Learning Bootcamp',
      creator: 'Simplilearn',
      price: '$1333.00',
      description: 'Suscripción mensual - IA y Machine Learning',
      image: '/images/aimachinelearning-web.webp',
      logo: '/logos/aimachinelearning-movil.png',
      url: 'https://www.simplilearn.com/ai-machine-learning-bootcamp',
    },
    {
      name: 'DeepLearning.AI TensorFlow Developer Professional Certificate',
      creator: 'Coursera',
      price: '$49.00',
      description: 'Suscripción mensual - TensorFlow Developer Professional Certificate',
      image: '/images/deeplearningai-web.webp',
      logo: '/logos/aiforeveryone-movil.png',
      url: 'https://www.coursera.org/professional-certificates/tensorflow-in-practice',
    },
    {
      name: 'Data Science & AI Bootcamp',
      creator: 'Udemy',
      price: '$12.99',
      description: 'Suscripción mensual - Data Science & AI Bootcamp desde Python hasta Gen AI',
      image: '/images/datascienceudemy-web.webp',
      logo: '/logos/promptengineering-movil.png',
      url: 'https://www.udemy.com/course/data-science-ai-masters-from-python-to-gen-ai/?couponCode=MT300725G1',
    },
    {
      name: 'Skew The Script Data Science & AI Bootcamp',
      creator: 'K-12 educators',
      price: '$120.00',
      description: 'Suscripción mensual - Data Science & AI Bootcamp para educadores K-12',
      image: '/images/datascience-web.webp',
      logo: '/logos/datascience-movil.png',
      url: 'https://skewthescript.org/store/p/asyncbootcamp-6mpwf',
    },
  ];

  const displayedBootcamps = allBootcamps.slice(0, displayCount);

  const handleBootcampClick = (url: string) => {
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
        {/* Header con título */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Bootcamps
          </h2>
        </div>

        {/* Vista móvil: Tarjetas tipo Framer Templates */}
        <div className="md:hidden">
          <div className="space-y-6">
            {displayedBootcamps.map((bootcamp) => (
              <div
                key={bootcamp.name}
                className="group cursor-pointer"
                onClick={() => handleBootcampClick(bootcamp.url)}
              >
                {/* Imagen del bootcamp */}
                <div className="relative aspect-video bg-zinc-800 rounded-lg mb-3 overflow-hidden border border-[#232323]">
                  <Image
                    src={bootcamp.image}
                    alt={bootcamp.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                  />
                  {/* Overlay hover con descripción */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium text-center max-w-[80%] px-4">
                      {bootcamp.description}
                    </div>
                  </div>
                </div>

                {/* Información del bootcamp */}
                <div className="relative">
                  {/* Precio en esquina superior derecha */}
                  <div className="absolute top-0 right-0">
                    <p className="text-white text-sm font-medium">{bootcamp.price}</p>
                  </div>

                  {/* Título con NEW al final */}
                  <div className="pr-16 mb-1">
                    {bootcamp.name.length > 30 ? (
                      <h3 className="font-bold text-white text-base leading-tight transition-all">
                        {bootcamp.name.split(' ').slice(0, -3).join(' ')}
                        <br />
                        {bootcamp.name.split(' ').slice(-3).join(' ')}{' '}
                        <span className="text-zinc-500 text-xs">NEW</span>
                      </h3>
                    ) : (
                      <h3 className="font-bold text-white text-base leading-tight transition-all">
                        {bootcamp.name} <span className="text-zinc-500 text-xs">NEW</span>
                      </h3>
                    )}
                  </div>

                  <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={bootcamp.logo}
                        alt={`${bootcamp.creator} logo`}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain rounded"
                      />
                      <span>{bootcamp.creator}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista desktop: Grid de tarjetas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {displayedBootcamps.map((bootcamp) => (
            <div
              key={bootcamp.name}
              className="group cursor-pointer"
              onClick={() => handleBootcampClick(bootcamp.url)}
            >
              {/* Contenedor de imagen separado */}
              <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                <Image
                  src={bootcamp.image}
                  alt={bootcamp.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                />
                {/* Overlay hover con descripción */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium text-center max-w-[80%] px-4">
                    {bootcamp.description}
                  </div>
                </div>
              </div>

              {/* Título y descripción sueltos */}
              <div className="relative">
                {/* Precio en esquina superior derecha */}
                <div className="absolute top-0 right-0">
                  <p className="text-white text-sm font-medium">{bootcamp.price}</p>
                </div>

                {/* Título con NEW al final */}
                <div className="pr-16 mb-1">
                  {bootcamp.name.length > 30 ? (
                    <h3 className="font-bold text-white text-base leading-tight transition-all">
                      {bootcamp.name.split(' ').slice(0, -3).join(' ')}
                      <br />
                      {bootcamp.name.split(' ').slice(-3).join(' ')}{' '}
                      <span className="text-zinc-500 text-xs">NEW</span>
                    </h3>
                  ) : (
                    <h3 className="font-bold text-white text-base leading-tight transition-all">
                      {bootcamp.name} <span className="text-zinc-500 text-xs">NEW</span>
                    </h3>
                  )}
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                  <div className="flex items-center gap-2">
                    <Image
                      src={bootcamp.logo}
                      alt={`${bootcamp.creator} logo`}
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain rounded"
                    />
                    <span>{bootcamp.creator}</span>
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
