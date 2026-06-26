import { IconBubble } from '../../../components/common/IconBubble';

export function HealthHighlightCard({ highlight }) {
  return (
    <article className="miniCard">
      <IconBubble icon={highlight.icon} className={highlight.iconTone} />
      <p>{highlight.label}</p>
      <h3>{highlight.title}</h3>
      <strong className={highlight.valueTone ?? ''}>{highlight.value}</strong>
    </article>
  );
}
