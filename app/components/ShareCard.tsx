'use client';

import { Share2, ExternalLink } from 'lucide-react';

interface ShareCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ShareCard({ title, description, imageUrl }: ShareCardProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {imageUrl && (
          <div className="w-full aspect-[16/10] relative overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        )}
        <div className="p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
            {imageUrl && (
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                View Image
              </a>
            )}
            <button
              onClick={() => navigator.share?.({
                title,
                text: description,
                url: window.location.href
              }).catch(() => {})}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}