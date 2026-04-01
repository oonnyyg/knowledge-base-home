import type { Document } from '../types';

interface DocumentCardProps {
  document: Document;
  onToggleFavorite: (id: string) => void;
}

export default function DocumentCard({ document, onToggleFavorite }: DocumentCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
          {document.category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(document.id);
          }}
          className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
        >
          <svg
            className={`w-5 h-5 transition-colors ${
              document.isFavorite
                ? 'text-amber-500 fill-amber-500'
                : 'text-slate-400 group-hover:text-slate-600'
            }`}
            fill={document.isFavorite ? 'currentColor' : 'none'}
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
        </button>
      </div>

      <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
        {document.title}
      </h3>
      <p className="text-sm text-slate-500 mb-4 line-clamp-2">
        {document.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <img
            src={document.avatar}
            alt={document.author}
            className="w-6 h-6 rounded-lg object-cover"
          />
          <span className="text-sm text-slate-600">{document.author}</span>
        </div>
        <span className="text-xs text-slate-400">更新于 {document.updatedAt}</span>
      </div>
    </div>
  );
}
