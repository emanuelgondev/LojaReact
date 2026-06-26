export function ShortcutButton({ shortcut }) {
  const Icon = shortcut.icon;

  return (
    <button className="shortcut">
      <Icon size={24} />
      <span>{shortcut.label}</span>
    </button>
  );
}
