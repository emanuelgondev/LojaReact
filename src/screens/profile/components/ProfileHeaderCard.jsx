export function ProfileHeaderCard({ user }) {
  return (
    <section className="profileCard">
      <span>{user.initials}</span>
      <div>
        <h2>{user.fullName}</h2>
        <p>{user.email}</p>
      </div>
    </section>
  );
}
