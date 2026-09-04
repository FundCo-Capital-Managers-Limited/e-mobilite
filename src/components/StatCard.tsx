export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl sm:text-4xl font-bold text-brand">{value}</div>
      <div className="mt-3 text-sm text-text-secondary leading-relaxed">{label}</div>
    </div>
  );
}
