import { Pill } from 'lucide-react';

export function TodayMedicineBanner({ summary }) {
  return (
    <section className="todayBanner">
      <span>
        <Pill size={26} />
      </span>
      <div>
        <h2>{summary.label}</h2>
        <p>{summary.pending} pendentes de {summary.total}</p>
      </div>
    </section>
  );
}
