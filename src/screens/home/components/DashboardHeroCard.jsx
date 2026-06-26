import { Calendar, ChevronRight } from 'lucide-react';

export function DashboardHeroCard({ appointment }) {
  return (
    <section className="heroCard">
      <div className="heroTop">
        <span>PROXIMA CONSULTA</span>
        <Calendar size={22} />
      </div>
      <h2>{appointment.doctor}</h2>
      <p>{formatSpecialty(appointment.specialty)}</p>
      <div className="heroDivider" />
      <div className="heroBottom">
        <div>
          <small>{appointment.fullDate}</small>
          <strong>{appointment.time}</strong>
        </div>
        <ChevronRight size={26} />
      </div>
    </section>
  );
}

function formatSpecialty(value) {
  return value.charAt(0) + value.slice(1).toLowerCase();
}
