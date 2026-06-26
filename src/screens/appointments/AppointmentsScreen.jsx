import { appointments } from '../../data/mockData';
import { AppointmentCard } from './components/AppointmentCard';

export function AppointmentsScreen() {
  return (
    <div className="stack">
      {appointments.map((appointment) => (
        <AppointmentCard appointment={appointment} key={appointment.id} />
      ))}
    </div>
  );
}
