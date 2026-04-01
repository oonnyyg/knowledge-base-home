import { DocumentCard } from './DocumentCard';
import { EmptyState } from './EmptyState';
import { useKnowledgeBase } from '../context/KnowledgeBaseContext';

export function FavoriteDocuments() {
  const { favoriteDocuments, searchQuery } = useKnowledgeBase();
  const hasFavorites = favoriteDocuments.length > 0;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">收藏文档</h2>
          <p className="text-sm text-gray-500">你收藏的重要文档，快速访问</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          管理收藏 →
        </button>
      </div>

      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200">
          {searchQuery ? (
            <EmptyState
              title="收藏中无匹配结果"
              description={`你的收藏中没有包含"${searchQuery}"的文档`}
              icon={
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
            />
          ) : (
            <EmptyState
              title="还没有收藏任何文档"
              description="点击文档卡片上的星标，将重要文档添加到收藏"
              icon={
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
