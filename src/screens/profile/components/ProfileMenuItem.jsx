import { ChevronRight } from 'lucide-react';

export function ProfileMenuItem({ item }) {
  const Icon = item.icon;

  return (
    <button className="menuItem">
      <Icon size={21} />
      <span>{item.label}</span>
      <ChevronRight size={20} />
    </button>
  );
}
