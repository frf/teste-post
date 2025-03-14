'use client';

import { Share2, ExternalLink } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  description: string;
}

export default function ShareButtons({ title, description }: ShareButtonsProps) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
      <a
        href={window.location.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
      >
        <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        View Link
      </a>
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
  );
}