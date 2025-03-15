'use client'; // 🔥 Garante que o Next.js execute isso apenas no navegador

import { useEffect, useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState('Compartilhe este link');
  const [description, setDescription] = useState('Veja este conteúdo!');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('website'); // 🔥 Permite mudar o "type" dinamicamente

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTitle(params.get('title') || 'Compartilhe este link');
    setDescription(params.get('description') || 'Veja este conteúdo!');
    setImageUrl(params.get('image') || '');
    setType(params.get('type') || 'website'); // 🔥 Captura o type da URL

    // Atualiza o título da página dinamicamente
    document.title = params.get('title') || 'Compartilhe este link';

    // Atualiza as meta tags dinamicamente
    const updateMetaTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:type', type);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:card', 'summary_large_image');
  }, [title, description, imageUrl, type]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {imageUrl && (
          <div className="w-full aspect-video overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    </main>
  );
}
