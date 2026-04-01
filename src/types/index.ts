export interface Document {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  lastVisited: string;
  updatedAt: string;
  isFavorite: boolean;
  category: string;
}

export interface Activity {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: 'update' | 'create' | 'delete' | 'comment';
  documentId: string;
  documentTitle: string;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export type NavItem = 'all' | 'recent' | 'favorites' | 'team' | 'trash';
