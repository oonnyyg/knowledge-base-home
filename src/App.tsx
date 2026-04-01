import { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { mockDocuments, mockActivities } from './mock/data';
import { Document, NavItem } from './types';
import { filterDocuments } from './utils';

function App() {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeNav, setActiveNav] = useState<NavItem>('all');

  const toggleFavorite = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, isFavorite: !doc.isFavorite } : doc
      )
    );
  };

  const recentDocuments = useMemo(() => {
    return filterDocuments(documents, searchTerm);
  }, [documents, searchTerm]);

  const favoriteDocuments = useMemo(() => {
    return filterDocuments(
      documents.filter((doc) => doc.isFavorite),
      searchTerm
    );
  }, [documents, searchTerm]);

  const allDocuments = useMemo(() => {
    return filterDocuments(documents, searchTerm);
  }, [documents, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
        <MainContent
          activeNav={activeNav}
          searchTerm={searchTerm}
          recentDocuments={recentDocuments}
          favoriteDocuments={favoriteDocuments}
          allDocuments={allDocuments}
          activities={mockActivities}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;