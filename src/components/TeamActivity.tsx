import { Activity } from '../types';

interface TeamActivityProps {
  activities: Activity[];
}

export default function TeamActivity({ activities }: TeamActivityProps) {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'update':
        return '✏️';
      case 'create':
        return '📄';
      case 'delete':
        return '🗑️';
      case 'comment':
        return '💬';
      default:
        return '📝';
    }
  };

  const getActivityText = (type: Activity['type']) => {
    switch (type) {
      case 'update':
        return '更新了';
      case 'create':
        return '创建了';
      case 'delete':
        return '删除了';
      case 'comment':
        return '评论了';
      default:
        return '修改了';
    }
  };

  if (activities.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <div className="text-gray-400 text-4xl mb-3">📰</div>
        <h3 className="text-gray-900 font-medium mb-1">暂无团队动态</h3>
        <p className="text-gray-500 text-sm">团队成员的活动将在这里显示</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900">团队动态</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 shrink-0">
                {activity.userAvatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-gray-500"> {getActivityText(activity.type)} </span>
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {activity.documentTitle}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
              <span className="text-lg">{getActivityIcon(activity.type)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
