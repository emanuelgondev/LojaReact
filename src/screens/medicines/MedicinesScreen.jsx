import { FloatingActionButton } from '../../components/common/FloatingActionButton';
import { medicines, todaySummary } from '../../data/mockData';
import { MedicineCard } from './components/MedicineCard';
import { TodayMedicineBanner } from './components/TodayMedicineBanner';

export function MedicinesScreen() {
  return (
    <>
      <TodayMedicineBanner summary={todaySummary} />
      <div className="stack">
        {medicines.map((medicine) => (
          <MedicineCard medicine={medicine} key={medicine.id} />
        ))}
      </div>
      <FloatingActionButton label="Adicionar remedio" />
    </>
  );
}
