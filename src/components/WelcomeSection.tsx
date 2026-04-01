import { useKnowledgeBase } from '../context/KnowledgeBaseContext';

export function WelcomeSection() {
  const { user, documents } = useKnowledgeBase();
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '早上好';
    if (hour < 18) return '下午好';
    return '晚上好';
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 mb-6 text-white">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {getGreeting()}，{user.name} 👋
          </h1>
          <p className="text-blue-100 mb-4">
            今天有 {documents.length} 篇文档等待你探索，团队成员也更新了不少内容哦
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              创建新文档
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/30 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              从模板导入
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
            <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
