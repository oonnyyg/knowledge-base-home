export interface Document {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  updatedAt: string;
  isFavorite: boolean;
  category: string;
}

export interface Activity {
  id: string;
  user: string;
  avatar: string;
  action: string;
  document: string;
  time: string;
}

export type NavItem = 'all' | 'recent' | 'favorites' | 'team' | 'trash';
