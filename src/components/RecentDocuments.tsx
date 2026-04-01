import type { Document } from '../types';
import DocumentCard from './DocumentCard';
import EmptyState from './EmptyState';

interface RecentDocumentsProps {
  documents: Document[];
  onToggleFavorite: (id: string) => void;
}

export default function RecentDocuments({ documents, onToggleFavorite }: RecentDocumentsProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800">最近访问</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">查看全部</button>
      </div>

      {documents.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200">
          <EmptyState type="no-data" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} document={doc} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      )}
    </section>
  );
}
