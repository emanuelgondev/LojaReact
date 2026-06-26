import { Plus } from 'lucide-react';

export function FloatingActionButton({ label }) {
  return (
    <button className="fab" aria-label={label}>
      <Plus size={32} />
    </button>
  );
}
