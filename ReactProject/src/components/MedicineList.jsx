import { useState, useEffect } from 'react'; 
import MedicineCard from './MedicineCard';


function MedicineList(props) {
  const { medicines, selectMedicine, onDelete } = props;

  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <MedicineCard 
          key={medicine.id} 
          medicine={medicine}
          onDelete={onDelete} 
          selectMedicine={selectMedicine}
        />
      ))}
    </ul>
  );
}

export default MedicineList;