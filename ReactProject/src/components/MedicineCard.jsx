import './MedicineCard.css'

function MedicineCard({ medicine }) {
  if (!medicine) return null // Bloquea renderizado si no hay datos
  
  return (
    <li className="medicine-card">
      <h2 className="medicine-name">{medicine.name || 'Medicamento desconocido'}</h2>
      <div className="dosage-info">
        <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
        <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
        <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
        <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
        <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>
      </div>
      <p className="details">{medicine.details || 'Sin detalles adicionales'}</p>
    </li>
  )
}

export default MedicineCard