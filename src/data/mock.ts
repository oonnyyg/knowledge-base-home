import type { Document, Activity } from '../types';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: '2026 年产品路线规划',
    description: '包含 Q1-Q4 产品迭代方向和里程碑规划',
    author: '张明',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-30',
    isFavorite: true,
    category: '产品规划'
  },
  {
    id: '2',
    title: '前端技术栈规范 v2.0',
    description: 'React 19 + TypeScript + Tailwind CSS 最佳实践',
    author: '李华',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-29',
    isFavorite: true,
    category: '技术文档'
  },
  {
    id: '3',
    title: '用户调研分析报告',
    description: 'Q1 用户满意度调研结果与改进建议',
    author: '王芳',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-28',
    isFavorite: false,
    category: '用户研究'
  },
  {
    id: '4',
    title: '团队协作流程优化方案',
    description: '敏捷开发流程改进与工具选型建议',
    author: '陈强',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-27',
    isFavorite: false,
    category: '团队管理'
  },
  {
    id: '5',
    title: 'API 接口设计文档',
    description: 'RESTful API 设计规范与示例',
    author: '赵伟',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-26',
    isFavorite: true,
    category: '技术文档'
  },
  {
    id: '6',
    title: '新员工入职培训手册',
    description: '包含公司文化、开发流程、常用工具介绍',
    author: '刘婷',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80&h=80',
    updatedAt: '2026-03-25',
    isFavorite: false,
    category: '人力资源'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    user: '张明',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80&h=80',
    action: '更新了',
    document: '2026 年产品路线规划',
    time: '10 分钟前'
  },
  {
    id: '2',
    user: '李华',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80',
    action: '创建了',
    document: '前端技术栈规范 v2.0',
    time: '1 小时前'
  },
  {
    id: '3',
    user: '王芳',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80',
    action: '评论了',
    document: '用户调研分析报告',
    time: '2 小时前'
  },
  {
    id: '4',
    user: '陈强',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80&h=80',
    action: '收藏了',
    document: '团队协作流程优化方案',
    time: '昨天'
  },
  {
    id: '5',
    user: '赵伟',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=80&h=80',
    action: '分享了',
    document: 'API 接口设计文档',
    time: '2 天前'
  }
];
