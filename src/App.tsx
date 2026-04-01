import { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WelcomeSection from './components/WelcomeSection';
import RecentDocuments from './components/RecentDocuments';
import FavoriteDocuments from './components/FavoriteDocuments';
import TeamActivity from './components/TeamActivity';
import EmptyState from './components/EmptyState';
import type { NavItem, Document } from './types';
import { mockDocuments, mockActivities } from './data/mock';

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);

  const toggleFavorite = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, isFavorite: !doc.isFavorite } : doc
      )
    );
  };

  const filteredDocuments = useMemo(() => {
    if (!searchQuery) return documents;
    const query = searchQuery.toLowerCase();
    return documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.author.toLowerCase().includes(query)
    );
  }, [documents, searchQuery]);

  const recentDocuments = useMemo(() => filteredDocuments.slice(0, 3), [filteredDocuments]);
  const favoriteDocuments = useMemo(() => filteredDocuments.filter((doc) => doc.isFavorite), [filteredDocuments]);
  const hasSearchQuery = searchQuery.length > 0;

  const renderContent = () => {
    switch (activeNav) {
      case 'recent':
        return (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6">最近访问</h2>
            {recentDocuments.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200">
                <EmptyState type={hasSearchQuery ? 'no-results' : 'no-data'} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentDocuments.map((doc) => (
                  <div key={doc.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                        {doc.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(doc.id);
                        }}
                        className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 transition-colors ${
                            doc.isFavorite
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                          fill={doc.isFavorite ? 'currentColor' : 'none'}
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
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <img
                          src={doc.avatar}
                          alt={doc.author}
                          className="w-6 h-6 rounded-lg object-cover"
                        />
                        <span className="text-sm text-slate-600">{doc.author}</span>
                      </div>
                      <span className="text-xs text-slate-400">更新于 {doc.updatedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        );

      case 'favorites':
        return (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6">我的收藏</h2>
            {favoriteDocuments.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200">
                <EmptyState type={hasSearchQuery ? 'no-results' : 'no-favorites'} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteDocuments.map((doc) => (
                  <div key={doc.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                        {doc.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(doc.id);
                        }}
                        className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 transition-colors ${
                            doc.isFavorite
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                          fill={doc.isFavorite ? 'currentColor' : 'none'}
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
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <img
                          src={doc.avatar}
                          alt={doc.author}
                          className="w-6 h-6 rounded-lg object-cover"
                        />
                        <span className="text-sm text-slate-600">{doc.author}</span>
                      </div>
                      <span className="text-xs text-slate-400">更新于 {doc.updatedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        );

      case 'team':
        return (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6">团队空间</h2>
            <TeamActivity activities={mockActivities} />
          </section>
        );

      case 'trash':
        return (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-6">回收站</h2>
            <div className="bg-white rounded-xl border border-slate-200">
              <EmptyState type="no-data" />
            </div>
          </section>
        );

      default:
        return (
          <>
            <WelcomeSection />
            <RecentDocuments documents={recentDocuments} onToggleFavorite={toggleFavorite} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <FavoriteDocuments
                  documents={favoriteDocuments}
                  onToggleFavorite={toggleFavorite}
                  hasSearchQuery={hasSearchQuery}
                />
              </div>
              <div>
                <TeamActivity activities={mockActivities} />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex">
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
