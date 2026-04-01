export default function WelcomeSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-3">欢迎回来！</h1>
        <p className="text-blue-100 text-lg mb-6">
          今天是高效工作的一天。快速访问您的文档，与团队协作，让知识流动起来。
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            快速创建文档
          </button>
          <button className="px-6 py-3 bg-blue-500/30 text-white rounded-lg font-medium hover:bg-blue-500/50 transition-colors border border-white/20">
            浏览团队空间
          </button>
        </div>
      </div>
    </div>
  );
}
