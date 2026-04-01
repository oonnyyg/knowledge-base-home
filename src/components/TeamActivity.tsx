import type { Activity } from '../types';
import { EmptyState } from './EmptyState';
import { useKnowledgeBase } from '../context/KnowledgeBaseContext';

const actionLabels: Record<Activity['action'], string> = {
  update: '更新了',
  create: '创建了',
  delete: '删除了',
  comment: '评论了',
};

const actionColors: Record<Activity['action'], string> = {
  update: 'bg-blue-500',
  create: 'bg-green-500',
  delete: 'bg-red-500',
  comment: 'bg-purple-500',
};

export function TeamActivity() {
  const { activities } = useKnowledgeBase();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">团队动态</h2>
          <p className="text-sm text-gray-500">团队成员的最新活动</p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          查看全部 →
        </button>
      </div>

      {activities.length > 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
              <div className="relative">
                <img
                  src={activity.userAvatar}
                  alt={activity.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 ${actionColors[activity.action]} rounded-full border-2 border-white flex items-center justify-center`}>
                  {activity.action === 'update' && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                  {activity.action === 'create' && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                  {activity.action === 'comment' && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.userName}</span>
                  <span className="text-gray-500"> {actionLabels[activity.action]} </span>
                  <span className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                    {activity.documentTitle}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200">
          <EmptyState
            title="暂无团队动态"
            description="团队成员开始协作后，这里会显示相关活动记录"
          />
        </div>
      )}
    </div>
  );
}
