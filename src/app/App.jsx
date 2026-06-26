import { useMemo, useState } from 'react';
import { AppointmentsScreen } from '../screens/appointments/AppointmentsScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { MedicinesScreen } from '../screens/medicines/MedicinesScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { BottomNav } from '../components/navigation/BottomNav';
import { TopBar } from '../components/navigation/TopBar';

const screenTitles = {
  home: '',
  appointments: 'Consultas',
  medicines: 'Medicamentos',
  profile: 'Perfil',
};

export function App() {
  const [screen, setScreen] = useState('home');
  const title = useMemo(() => screenTitles[screen], [screen]);

  return (
    <main className="shell">
      <section className="phone">
        {screen !== 'home' && <TopBar title={title} showNewButton={screen === 'appointments'} />}
        <div className={`content ${screen === 'home' ? 'contentHome' : ''}`}>
          {screen === 'home' && <HomeScreen />}
          {screen === 'appointments' && <AppointmentsScreen />}
          {screen === 'medicines' && <MedicinesScreen />}
          {screen === 'profile' && <ProfileScreen />}
        </div>
        <BottomNav active={screen} onChange={setScreen} />
      </section>
    </main>
  );
}
