import './MedicineCard.css'
import { useState } from 'react'

function MedicineCard(props) {
  const {medicine, selectMedicine, onDelete}= props;
  if (!medicine) return null // Bloquea renderizado si no hay datos
  
  return (
    <li className="medicine-card" onClick={() => selectMedicine(medicine)}>
      <h2 className="medicine-name">{medicine.name || 'Medicamento desconocido'}</h2>
      <p className="details">{medicine.details || 'Sin detalles adicionales'}</p>
    </li>
  )
}

export default MedicineCard