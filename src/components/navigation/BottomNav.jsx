import { Calendar, Home, Pill, User } from 'lucide-react';

const items = [
  { key: 'home', icon: Home, label: 'Inicio' },
  { key: 'appointments', icon: Calendar, label: 'Consultas' },
  { key: 'medicines', icon: Pill, label: 'Medicamentos' },
  { key: 'profile', icon: User, label: 'Perfil' },
];

export function BottomNav({ active, onChange }) {
  return (
    <nav className="bottomNav">
      {items.map(({ key, icon: Icon, label }) => (
        <button
          className={active === key ? 'active' : ''}
          onClick={() => onChange(key)}
          key={key}
          aria-label={label}
        >
          <Icon size={23} />
        </button>
      ))}
    </nav>
  );
}
