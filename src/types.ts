export interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorAvatar: string;
  updatedAt: string;
  isFavorite: boolean;
}

export interface Activity {
  id: string;
  type: 'update' | 'create' | 'delete' | 'comment';
  user: string;
  userAvatar: string;
  documentTitle: string;
  documentId: string;
  timestamp: string;
}

export type NavItem = 'all' | 'recent' | 'favorites' | 'team' | 'trash';
