import type { Document, Activity, User } from '../types';

export const mockUser: User = {
  id: 'user-1',
  name: '张明',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
  role: '产品经理'
};

export const mockDocuments: Document[] = [
  {
    id: 'doc-1',
    title: 'Q2 产品路线图规划',
    description: '包含本季度所有核心功能的里程碑和交付计划，涉及用户增长、体验优化等方向',
    author: '李华',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-15 14:30',
    updatedAt: '2024-01-15 14:30',
    isFavorite: true,
    category: '产品规划'
  },
  {
    id: 'doc-2',
    title: '用户调研分析报告',
    description: '基于 500+ 用户访谈的深度分析，总结了当前产品的主要痛点和机会点',
    author: '王芳',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-15 11:20',
    updatedAt: '2024-01-15 11:20',
    isFavorite: true,
    category: '用户研究'
  },
  {
    id: 'doc-3',
    title: '技术架构设计方案',
    description: '新版本的微服务架构设计，包含服务拆分原则和技术选型',
    author: '张伟',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-14 16:45',
    updatedAt: '2024-01-14 16:45',
    isFavorite: false,
    category: '技术文档'
  },
  {
    id: 'doc-4',
    title: '运营策略执行手册',
    description: '详细的运营活动执行流程和注意事项，帮助新人快速上手',
    author: '赵敏',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-14 09:15',
    updatedAt: '2024-01-14 09:15',
    isFavorite: false,
    category: '运营'
  },
  {
    id: 'doc-5',
    title: '团队 OKR 对齐文档',
    description: '2024 年度各部门目标拆解和对齐，确保全员方向一致',
    author: '陈磊',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-13 15:00',
    updatedAt: '2024-01-13 15:00',
    isFavorite: true,
    category: '团队管理'
  },
  {
    id: 'doc-6',
    title: '品牌视觉设计规范',
    description: '统一的品牌视觉识别系统，包含色彩、字体、Logo 使用规范',
    author: '刘洋',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
    lastVisited: '2024-01-12 10:30',
    updatedAt: '2024-01-12 10:30',
    isFavorite: false,
    category: '设计'
  }
];

export const mockActivities: Activity[] = [
  {
    id: 'act-1',
    userId: 'user-2',
    userName: '李华',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    action: 'update',
    documentId: 'doc-1',
    documentTitle: 'Q2 产品路线图规划',
    timestamp: '10 分钟前'
  },
  {
    id: 'act-2',
    userId: 'user-3',
    userName: '王芳',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    action: 'create',
    documentId: 'doc-7',
    documentTitle: '新功能用户测试方案',
    timestamp: '1 小时前'
  },
  {
    id: 'act-3',
    userId: 'user-4',
    userName: '张伟',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
    action: 'comment',
    documentId: 'doc-3',
    documentTitle: '技术架构设计方案',
    timestamp: '2 小时前'
  },
  {
    id: 'act-4',
    userId: 'user-5',
    userName: '赵敏',
    userAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100',
    action: 'update',
    documentId: 'doc-4',
    documentTitle: '运营策略执行手册',
    timestamp: '昨天'
  },
  {
    id: 'act-5',
    userId: 'user-6',
    userName: '陈磊',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    action: 'update',
    documentId: 'doc-5',
    documentTitle: '团队 OKR 对齐文档',
    timestamp: '昨天'
  }
];
