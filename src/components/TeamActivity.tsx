import type { Activity } from '../types';

interface TeamActivityProps {
  activities: Activity[];
}

export default function TeamActivity({ activities }: TeamActivityProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800">团队动态</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">查看全部</button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {activities.map((activity, index) => (
          <div key={activity.id} className={`p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors ${index === 0 ? 'rounded-t-xl' : ''} ${index === activities.length - 1 ? 'rounded-b-xl' : ''}`}>
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-10 h-10 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-800">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium text-blue-600 hover:underline cursor-pointer">
                  {activity.document}
                </span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
