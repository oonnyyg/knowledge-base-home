import { Document, Activity, NavItem } from '../types';
import WelcomeSection from './WelcomeSection';
import DocumentCard from './DocumentCard';
import TeamActivity from './TeamActivity';
import EmptyState from './EmptyState';

interface MainContentProps {
  activeNav: NavItem;
  searchTerm: string;
  recentDocuments: Document[];
  favoriteDocuments: Document[];
  allDocuments: Document[];
  activities: Activity[];
  onToggleFavorite: (id: string) => void;
}

export default function MainContent({
  activeNav,
  searchTerm,
  recentDocuments,
  favoriteDocuments,
  allDocuments,
  activities,
  onToggleFavorite,
}: MainContentProps) {
  const renderRecentSection = () => {
    if (searchTerm && recentDocuments.length === 0) {
      return (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">最近访问</h2>
          <EmptyState
            icon="🔍"
            title="未找到相关文档"
            description="尝试使用其他关键词搜索"
          />
        </div>
      );
    }

    if (recentDocuments.length === 0) {
      return (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">最近访问</h2>
          <EmptyState
            icon="🕐"
            title="暂无最近访问的文档"
            description="开始浏览文档，这里将显示您的访问记录"
          />
        </div>
      );
    }

    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">最近访问</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderFavoritesSection = () => {
    if (searchTerm && favoriteDocuments.length === 0) {
      return (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">我的收藏</h2>
          <EmptyState
            icon="🔍"
            title="未找到相关文档"
            description="尝试使用其他关键词搜索"
          />
        </div>
      );
    }

    if (favoriteDocuments.length === 0) {
      return (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">我的收藏</h2>
          <EmptyState
            icon="⭐"
            title="暂无收藏文档"
            description="点击文档卡片上的星形图标收藏重要文档"
          />
        </div>
      );
    }

    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">我的收藏</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderHomeContent = () => (
    <>
      <WelcomeSection />
      {renderRecentSection()}
      {renderFavoritesSection()}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        </div>
        <div>
          <TeamActivity activities={activities} />
        </div>
      </div>
    </>
  );

  const renderAllDocuments = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">全部文档</h2>
        <span className="text-sm text-gray-500">{allDocuments.length} 个文档</span>
      </div>
      {searchTerm && allDocuments.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="未找到相关文档"
          description="尝试使用其他关键词搜索"
        />
      ) : allDocuments.length === 0 ? (
        <EmptyState
          icon="📚"
          title="暂无文档"
          description="开始创建您的第一篇文档"
          actionText="新建文档"
          onAction={() => {}}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderRecentOnly = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">最近访问</h2>
        <span className="text-sm text-gray-500">{recentDocuments.length} 个文档</span>
      </div>
      {renderRecentSection()}
    </div>
  );

  const renderFavoritesOnly = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">我的收藏</h2>
        <span className="text-sm text-gray-500">{favoriteDocuments.length} 个文档</span>
      </div>
      {renderFavoritesSection()}
    </div>
  );

  const renderTeamSpace = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">团队空间</h2>
      <EmptyState
        icon="👥"
        title="团队空间功能开发中"
        description="团队空间将支持多人协作编辑和共享文档，敬请期待！"
      />
    </div>
  );

  const renderTrash = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">回收站</h2>
      <EmptyState
        icon="🗑️"
        title="回收站为空"
        description="删除的文档将暂时保存在这里"
      />
    </div>
  );

  return (
    <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      {activeNav === 'all' && renderHomeContent()}
      {activeNav === 'recent' && renderRecentOnly()}
      {activeNav === 'favorites' && renderFavoritesOnly()}
      {activeNav === 'team' && renderTeamSpace()}
      {activeNav === 'trash' && renderTrash()}
    </main>
  );
}
