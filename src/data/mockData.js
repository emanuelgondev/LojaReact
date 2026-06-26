import { Bell, Calendar, HelpCircle, Pill, Shield, Smile } from 'lucide-react';

export const user = {
  firstName: 'Maria',
  fullName: 'Maria Oliveira',
  email: 'maria@medquest.app',
  initials: 'M',
  greetingIcon: '!',
};

export const appointments = [
  {
    id: 'appointment-1',
    specialty: 'CARDIOLOGIA',
    doctor: 'Dr. Roberto Lima',
    date: 'Qui, 28 nov',
    fullDate: 'Quinta, 28 nov',
    time: '14:30',
    place: 'Hospital Sao Lucas',
    featured: true,
  },
  {
    id: 'appointment-2',
    specialty: 'ENDOCRINOLOGIA',
    doctor: 'Dra. Camila Souza',
    date: 'Sex, 06 dez',
    fullDate: 'Sexta, 06 dez',
    time: '09:00',
    place: 'Clinica Vida',
    featured: false,
  },
  {
    id: 'appointment-3',
    specialty: 'OFTALMOLOGIA',
    doctor: 'Dr. Andre Pinto',
    date: 'Ter, 17 dez',
    fullDate: 'Terca, 17 dez',
    time: '16:15',
    place: 'Centro Medico Norte',
    featured: false,
  },
];

export const medicines = [
  { id: 'medicine-1', name: 'Losartana', dose: '50mg - 1 comprimido', time: '08:00', taken: true },
  { id: 'medicine-2', name: 'Metformina', dose: '850mg - 1 comprimido', time: '12:30', taken: true },
  { id: 'medicine-3', name: 'Losartana', dose: '50mg - 1 comprimido', time: '14:00', taken: false },
  { id: 'medicine-4', name: 'Omeprazol', dose: '20mg - 1 capsula', time: '19:00', taken: false },
  { id: 'medicine-5', name: 'Sinvastatina', dose: '20mg - 1 comprimido', time: '22:00', taken: false },
];

export const todaySummary = {
  label: 'Hoje',
  pending: medicines.filter((item) => !item.taken).length,
  total: medicines.length,
};

export const healthHighlights = [
  {
    id: 'next-medicine',
    icon: Pill,
    iconTone: 'blueSoft',
    label: 'Proximo remedio',
    title: 'Losartana',
    value: 'em 45 min',
  },
  {
    id: 'wellbeing',
    icon: Smile,
    iconTone: 'greenSoft',
    label: 'Bem-estar de hoje',
    title: 'Bem :)',
    value: 'Check-in feito',
    valueTone: 'greenText',
  },
];

export const weeklyMood = {
  title: 'Evolucao semanal',
  metric: 'Humor',
  days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
};

export const shortcuts = [
  { id: 'shortcut-medicines', icon: Pill, label: 'Remedios', target: 'medicines' },
  { id: 'shortcut-appointments', icon: Calendar, label: 'Consultas', target: 'appointments' },
  { id: 'shortcut-checkin', icon: Smile, label: 'Check-in', target: 'home' },
];

export const profileMenuItems = [
  { id: 'notifications', icon: Bell, label: 'Notificacoes' },
  { id: 'privacy', icon: Shield, label: 'Privacidade e seguranca' },
  { id: 'support', icon: HelpCircle, label: 'Ajuda e suporte' },
];
