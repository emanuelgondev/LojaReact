import { ProfileMenuItem } from './ProfileMenuItem';

export function ProfileMenu({ items }) {
  return (
    <section className="menuCard">
      {items.map((item) => (
        <ProfileMenuItem item={item} key={item.id} />
      ))}
    </section>
  );
}
