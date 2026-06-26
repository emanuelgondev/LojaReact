import { Bell } from 'lucide-react';
import { appointments, healthHighlights, shortcuts, user, weeklyMood } from '../../data/mockData';
import { DashboardHeroCard } from './components/DashboardHeroCard';
import { HealthHighlightCard } from './components/HealthHighlightCard';
import { WeeklyEvolutionCard } from './components/WeeklyEvolutionCard';
import { ShortcutButton } from './components/ShortcutButton';

export function HomeScreen() {
  const nextAppointment = appointments.find((appointment) => appointment.featured) ?? appointments[0];

  return (
    <>
      <header className="homeHeader">
        <div>
          <span>Ola,</span>
          <h1>{user.firstName} {user.greetingIcon}</h1>
        </div>
        <button className="notificationButton" aria-label="Notificacoes">
          <Bell size={23} />
          <i />
        </button>
      </header>

      <DashboardHeroCard appointment={nextAppointment} />

      <div className="miniGrid">
        {healthHighlights.map((highlight) => (
          <HealthHighlightCard highlight={highlight} key={highlight.id} />
        ))}
      </div>

      <WeeklyEvolutionCard data={weeklyMood} />

      <h2 className="shortcutsTitle">Atalhos</h2>
      <div className="shortcutGrid">
        {shortcuts.map((shortcut) => (
          <ShortcutButton shortcut={shortcut} key={shortcut.id} />
        ))}
      </div>
    </>
  );
}
