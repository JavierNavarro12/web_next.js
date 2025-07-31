'use client';

import React, { useState } from 'react';
// import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer/Footer';

// Inicializar EmailJS una sola vez
emailjs.init('d0LlJPzXxEJn_vAf4');

interface AddAIToolPageProps {
  isOpen: boolean;
  onClose: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveCategory: (category: string | null) => void;
  setActiveSubcategory: (subcategory: string | null) => void;
}

export default function AddAIToolPage({
  isOpen,
  onClose,
  setSidebarOpen,
  setActiveCategory,
  setActiveSubcategory,
}: AddAIToolPageProps) {
  const [formData, setFormData] = useState({
    toolName: '',
    toolUrl: '',
    email: '',
    isOwnTool: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        tool_name: formData.toolName,
        tool_url: formData.toolUrl,
        user_email: formData.email,
        is_own_tool: formData.isOwnTool ? 'Sí' : 'No',
      });

      console.log('Email enviado exitosamente:', result);
      setShowSuccess(true);
      // Cerrar después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert('Error al enviar la sugerencia. Por favor, inténtalo de nuevo.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header */}
      <MobileHeader
        currentCategory={null}
        activeSubcategory={null}
        setActiveCategory={() => {}}
        setActiveSubcategory={() => {}}
        setSidebarOpen={setSidebarOpen}
        isClient={true}
        tabRefs={{ current: {} }}
        tabsContainerRef={{ current: null }}
        onSubcategoryClick={() => {}}
      />

      {/* Contenido */}
      <div className="flex-1 overflow-y-auto px-4 py-6 pt-28">
        {showSuccess ? (
          /* Modal de Éxito */
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-green-900 border border-green-700 rounded-xl p-8 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">¡Enviado con Éxito!</h2>
              <p className="text-green-200 text-sm">
                Tu sugerencia ha sido enviada. Te notificaremos cuando sea revisada.
              </p>
            </div>
          </div>
        ) : (
          /* Formulario */
          <div className="max-w-md mx-auto">
            {/* Título */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Sugerir una IA</h2>
              <p className="text-zinc-400 text-sm">
                ¡Apreciamos que tomes el tiempo para sugerir una IA a AIFinder!
              </p>
            </div>

            {/* Formulario */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="toolName" className="block text-sm font-medium text-white mb-2">
                    Nombre de la IA
                  </label>
                  <input
                    type="text"
                    id="toolName"
                    name="toolName"
                    value={formData.toolName}
                    onChange={handleInputChange}
                    placeholder="Ej: ChatGPT"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="toolUrl" className="block text-sm font-medium text-white mb-2">
                    URL de la IA
                  </label>
                  <input
                    type="url"
                    id="toolUrl"
                    name="toolUrl"
                    value={formData.toolUrl}
                    onChange={handleInputChange}
                    placeholder="https://ejemplo.com"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email (Opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isOwnTool"
                    name="isOwnTool"
                    checked={formData.isOwnTool}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-700 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="isOwnTool" className="ml-2 text-sm text-zinc-300">
                    Esta es mi propia IA/Herramienta
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Sugerencia
                </button>
              </form>

              {/* Mensaje de agradecimiento */}
              <p className="text-center text-zinc-400 text-sm mt-6">
                ¡Gracias por contribuir sugiriendo nuevas IAs!
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer
          setShowFeedback={() => {}}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
        />
      </div>
    </div>
  );
}
