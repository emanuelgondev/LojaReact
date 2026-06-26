import { LogOut } from 'lucide-react';
import { profileMenuItems, user } from '../../data/mockData';
import { ProfileHeaderCard } from './components/ProfileHeaderCard';
import { ProfileMenu } from './components/ProfileMenu';

export function ProfileScreen() {
  return (
    <>
      <ProfileHeaderCard user={user} />
      <ProfileMenu items={profileMenuItems} />
      <button className="logout">
        <LogOut size={18} />
        Sair
      </button>
    </>
  );
}
