export function formatDate(dateStr: string): string {
  return dateStr;
}

export function filterDocuments(documents: any[], searchTerm: string): any[] {
  if (!searchTerm.trim()) return documents;
  const term = searchTerm.toLowerCase();
  return documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(term) ||
      doc.description.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term)
  );
}
