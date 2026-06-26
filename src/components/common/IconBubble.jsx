export function IconBubble({ icon: Icon, className = '', size = 23 }) {
  return (
    <span className={`bubble ${className}`}>
      <Icon size={size} />
    </span>
  );
}
