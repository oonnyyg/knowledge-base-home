import type { NavItem } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { WelcomeSection } from './components/WelcomeSection';
import { RecentDocuments } from './components/RecentDocuments';
import { FavoriteDocuments } from './components/FavoriteDocuments';
import { TeamActivity } from './components/TeamActivity';
import { EmptyState } from './components/EmptyState';
import { DocumentCard } from './components/DocumentCard';
import { useKnowledgeBase } from './context/KnowledgeBaseContext';

function MainContent() {
  const { activeNav, filteredDocuments, favoriteDocuments } = useKnowledgeBase();

  const renderContent = () => {
    switch (activeNav) {
      case 'all':
        return (
          <>
            <WelcomeSection />
            <RecentDocuments />
            <FavoriteDocuments />
            <TeamActivity />
          </>
        );
      case 'recent':
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">最近访问</h1>
              <p className="text-gray-500">你最近查看过的所有文档</p>
            </div>
            {filteredDocuments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="暂无最近访问的文档"
                description="开始浏览文档后，这里会显示你最近访问过的内容"
              />
            )}
          </>
        );
      case 'favorites':
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">我的收藏</h1>
              <p className="text-gray-500">你收藏的所有重要文档</p>
            </div>
            {favoriteDocuments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="还没有收藏任何文档"
                description="点击文档卡片上的星标，将重要文档添加到收藏"
              />
            )}
          </>
        );
      case 'team':
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">团队空间</h1>
              <p className="text-gray-500">团队共享的所有文档和资源</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDocuments.slice(0, 3).map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </>
        );
      case 'trash':
        return (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">回收站</h1>
              <p className="text-gray-500">已删除的文档，可以恢复或永久删除</p>
            </div>
            <EmptyState
              title="回收站为空"
              description="目前没有已删除的文档"
              icon={
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              }
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main className="ml-60 pt-16 min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl">
        {renderContent()}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}
