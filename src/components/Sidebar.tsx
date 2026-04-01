import { NavItem } from '../types';

interface SidebarProps {
  activeNav: NavItem;
  onNavChange: (nav: NavItem) => void;
}

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  const navItems = [
    { id: 'all' as NavItem, label: '全部文档', icon: '📚' },
    { id: 'recent' as NavItem, label: '最近访问', icon: '🕐' },
    { id: 'favorites' as NavItem, label: '我的收藏', icon: '⭐' },
    { id: 'team' as NavItem, label: '团队空间', icon: '👥' },
    { id: 'trash' as NavItem, label: '回收站', icon: '🗑️' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
        <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeNav === item.id
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          新建文档
        </button>
      </div>
    </aside>
  );
}
