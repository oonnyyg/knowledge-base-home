import { DocumentCard } from './DocumentCard';
import { EmptyState } from './EmptyState';
import { useKnowledgeBase } from '../context/KnowledgeBaseContext';

export function RecentDocuments() {
  const { filteredDocuments, searchQuery } = useKnowledgeBase();
  const hasResults = filteredDocuments.length > 0;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">最近访问</h2>
          <p className="text-sm text-gray-500">你最近查看过的文档</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          查看全部 →
        </button>
      </div>

      {hasResults ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.slice(0, 6).map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200">
          {searchQuery ? (
            <EmptyState
              title="未找到匹配的文档"
              description={`没有找到包含"${searchQuery}"的文档，请尝试其他关键词`}
              icon={
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
          ) : (
            <EmptyState
              title="暂无最近访问的文档"
              description="开始浏览文档后，这里会显示你最近访问过的内容"
              action={{
                label: '浏览全部文档',
                onClick: () => {},
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
