export function WeeklyEvolutionCard({ data }) {
  return (
    <section className="chartCard">
      <div className="sectionTitle">
        <h2>{data.title}</h2>
        <span>{data.metric}</span>
      </div>
      <div className="chartSpace" />
      <div className="week">
        {data.days.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
    </section>
  );
}
