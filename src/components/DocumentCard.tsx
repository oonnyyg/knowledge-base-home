import { Document } from '../types';

interface DocumentCardProps {
  document: Document;
  onToggleFavorite: (id: string) => void;
}

export default function DocumentCard({ document, onToggleFavorite }: DocumentCardProps) {
  const categoryColors: Record<string, string> = {
    产品: 'bg-orange-100 text-orange-700',
    技术: 'bg-blue-100 text-blue-700',
    运营: 'bg-green-100 text-green-700',
    设计: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${
              categoryColors[document.category] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {document.category}
          </span>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
            {document.title}
          </h3>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(document.id);
          }}
          className={`p-1.5 rounded-lg transition-colors ${
            document.isFavorite
              ? 'text-yellow-500 hover:bg-yellow-50'
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
          }`}
        >
          {document.isFavorite ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          )}
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {document.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
            {document.authorAvatar}
          </div>
          <span className="text-sm text-gray-600">{document.author}</span>
        </div>
        <span className="text-xs text-gray-400">{document.updatedAt}</span>
      </div>
    </div>
  );
}
