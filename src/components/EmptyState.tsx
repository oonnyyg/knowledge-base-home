interface EmptyStateProps {
  type: 'no-data' | 'no-results' | 'no-favorites';
}

export default function EmptyState({ type }: EmptyStateProps) {
  const configs = {
    'no-data': {
      icon: (
        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: '暂无文档',
      description: '创建您的第一篇文档，开始团队协作之旅'
    },
    'no-results': {
      icon: (
        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: '未找到匹配结果',
      description: '尝试调整搜索关键词或筛选条件'
    },
    'no-favorites': {
      icon: (
        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: '暂无收藏',
      description: '收藏重要文档，方便快速访问'
    }
  };

  const config = configs[type];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      {config.icon}
      <h3 className="mt-4 text-lg font-semibold text-slate-700">{config.title}</h3>
      <p className="mt-1 text-sm text-slate-500">{config.description}</p>
    </div>
  );
}
