import { Calendar, Clock3, MapPin, Stethoscope } from 'lucide-react';

export function AppointmentCard({ appointment }) {
  return (
    <article className={`appointmentCard ${appointment.featured ? 'featured' : ''}`}>
      <div className="appointmentHead">
        <span className="doctorIcon">
          <Stethoscope size={24} />
        </span>
        <div>
          <small>{appointment.specialty}</small>
          <h2>{appointment.doctor}</h2>
        </div>
      </div>
      <div className="metaRow">
        <span>
          <Calendar size={17} />
          {appointment.date}
        </span>
        <span>
          <Clock3 size={17} />
          {appointment.time}
        </span>
      </div>
      <p className="place">
        <MapPin size={17} />
        {appointment.place}
      </p>
      <div className="cardLine" />
      <div className="actions">
        <button className="primaryAction">Ver detalhes</button>
        <button className="secondaryAction">Add. agenda</button>
      </div>
    </article>
  );
}
