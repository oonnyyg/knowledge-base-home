import { createContext, useContext, useReducer, ReactNode } from 'react';
import type { Document, Activity, User, NavItem } from '../types';
import { mockDocuments, mockActivities, mockUser } from '../data/mock';

interface KnowledgeBaseState {
  documents: Document[];
  activities: Activity[];
  user: User;
  searchQuery: string;
  activeNav: NavItem;
}

type KnowledgeBaseAction =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_ACTIVE_NAV'; payload: NavItem }
  | { type: 'TOGGLE_FAVORITE'; payload: string };

interface KnowledgeBaseContextType extends KnowledgeBaseState {
  setSearchQuery: (query: string) => void;
  setActiveNav: (nav: NavItem) => void;
  toggleFavorite: (docId: string) => void;
  filteredDocuments: Document[];
  favoriteDocuments: Document[];
}

const KnowledgeBaseContext = createContext<KnowledgeBaseContextType | undefined>(undefined);

function knowledgeBaseReducer(state: KnowledgeBaseState, action: KnowledgeBaseAction): KnowledgeBaseState {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_ACTIVE_NAV':
      return { ...state, activeNav: action.payload };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        documents: state.documents.map((doc) =>
          doc.id === action.payload ? { ...doc, isFavorite: !doc.isFavorite } : doc
        ),
      };
    default:
      return state;
  }
}

const initialState: KnowledgeBaseState = {
  documents: mockDocuments,
  activities: mockActivities,
  user: mockUser,
  searchQuery: '',
  activeNav: 'all',
};

export function KnowledgeBaseProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(knowledgeBaseReducer, initialState);

  const setSearchQuery = (query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const setActiveNav = (nav: NavItem) => {
    dispatch({ type: 'SET_ACTIVE_NAV', payload: nav });
  };

  const toggleFavorite = (docId: string) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: docId });
  };

  const filteredDocuments = state.documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  const favoriteDocuments = filteredDocuments.filter((doc) => doc.isFavorite);

  return (
    <KnowledgeBaseContext.Provider
      value={{
        ...state,
        setSearchQuery,
        setActiveNav,
        toggleFavorite,
        filteredDocuments,
        favoriteDocuments,
      }}
    >
      {children}
    </KnowledgeBaseContext.Provider>
  );
}

export function useKnowledgeBase() {
  const context = useContext(KnowledgeBaseContext);
  if (!context) {
    throw new Error('useKnowledgeBase must be used within a KnowledgeBaseProvider');
  }
  return context;
}
