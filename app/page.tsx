import { Metadata } from 'next';

interface PageProps {
  searchParams: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
  };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const title = searchParams.title || 'Compartilhe este link';
  const description = searchParams.description || 'Veja este conteúdo!';
  const imageUrl = searchParams.image || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: searchParams.url || '',
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      siteName: 'Compartilhamento',
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function Page({ searchParams }: PageProps) {
  const title = searchParams.title || 'Compartilhe este link';
  const description = searchParams.description || 'Veja este conteúdo!';
  const imageUrl = searchParams.image || '';

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
