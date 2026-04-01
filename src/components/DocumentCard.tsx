import type { Document } from '../types';
import { useKnowledgeBase } from '../context/KnowledgeBaseContext';

interface DocumentCardProps {
  document: Document;
}

const categoryColors: Record<string, string> = {
  '产品规划': 'bg-blue-100 text-blue-700',
  '用户研究': 'bg-purple-100 text-purple-700',
  '技术文档': 'bg-green-100 text-green-700',
  '运营': 'bg-orange-100 text-orange-700',
  '团队管理': 'bg-pink-100 text-pink-700',
  '设计': 'bg-cyan-100 text-cyan-700',
};

export function DocumentCard({ document }: DocumentCardProps) {
  const { toggleFavorite } = useKnowledgeBase();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-3">
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${categoryColors[document.category] || 'bg-gray-100 text-gray-700'}`}>
          {document.category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(document.id);
          }}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {document.isFavorite ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )}
        </button>
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
        {document.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{document.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={document.avatar}
            alt={document.author}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs text-gray-500">{document.author}</span>
        </div>
        <span className="text-xs text-gray-400">{document.updatedAt}</span>
      </div>
    </div>
  );
}
