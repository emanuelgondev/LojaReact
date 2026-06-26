import { ChevronLeft, Plus } from 'lucide-react';

export function TopBar({ title, showNewButton = false }) {
  return (
    <header className="topBar">
      <button className="iconButton" aria-label="Voltar">
        <ChevronLeft size={24} />
      </button>
      <h1>{title}</h1>
      {showNewButton ? (
        <button className="newButton">
          <Plus size={18} />
          Nova
        </button>
      ) : (
        <span className="topSpacer" />
      )}
    </header>
  );
}
