import { Check, Clock3, Pill } from 'lucide-react';

export function MedicineCard({ medicine }) {
  return (
    <article className="medicineCard">
      <span className={`medicineIcon ${medicine.taken ? 'done' : ''}`}>
        {medicine.taken ? <Check size={24} /> : <Pill size={24} />}
      </span>
      <div className="medicineInfo">
        <h2>{medicine.name}</h2>
        <p>{medicine.dose}</p>
        <small>
          <Clock3 size={15} />
          {medicine.time}
        </small>
      </div>
      <strong className={`status ${medicine.taken ? 'taken' : 'pending'}`}>
        {medicine.taken ? 'Tomado' : 'Pendente'}
      </strong>
    </article>
  );
}
