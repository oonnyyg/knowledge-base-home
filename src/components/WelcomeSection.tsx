export default function WelcomeSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white mb-2">欢迎回来，张明 👋</h1>
        <p className="text-blue-100 mb-6 max-w-lg">
          今天是美好的一天！团队共有 5 篇文档有更新，3 篇文档等待您的审阅。
        </p>
        <div className="flex items-center gap-3">
          <button className="px-6 h-11 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-sm">
            创建新文档
          </button>
          <button className="px-6 h-11 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors">
            浏览全部文档
          </button>
        </div>
      </div>
    </div>
  );
}
