'use client';

import React, { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

// Inicializar EmailJS una sola vez
emailjs.init('d0LlJPzXxEJn_vAf4');

interface AddAIToolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddAIToolModal({ isOpen, onClose }: AddAIToolModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay con blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal de Éxito */}
      {showSuccess && (
        <div className="relative bg-green-900 border border-green-700 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
          <div className="text-center">
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
      )}

      {/* Modal Principal */}
      {!showSuccess && (
        <div className="relative bg-black border border-zinc-800 rounded-xl p-8 max-w-lg w-full mx-4 shadow-2xl">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>

          {/* Contenido */}
          <div className="space-y-6">
            {/* Título */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Sugerir una IA</h2>
            </div>

            {/* Formulario */}
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
            <p className="text-center text-zinc-400 text-sm">
              ¡Gracias por contribuir sugiriendo nuevas IAs!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
