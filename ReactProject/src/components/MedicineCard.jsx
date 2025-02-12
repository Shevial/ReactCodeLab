import { useEffect } from "react"
import { useState } from "react"
import './MedicineCard.css'

function MedicineCard() {

    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/medicines/view/1")
        .then((response) => response.json())
        .then((data) => setMedicines(data))
    }, [])
    
  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <li key={medicine.id} className="medicine-card">
          <h2 className="medicine-name">{medicine.name}</h2>
          <div className="medicine-info">
          </div>
          <div className="dosage-info">

            <p>Dosis mínima: {medicine.dosage?.minimum_factor || 'N/A'}</p>
            <p>Dosis máxima: {medicine.dosage?.maximum_factor || 'N/A'}</p>
            <p>Frecuencia de dosificación: {medicine.dosage?.dosage_frequency || 'N/A'}</p>
            <p>Dosis máxima diaria: {medicine.dosage?.max_daily_dose || 'N/A'}</p>
            <p>Peso medio para el calculo: {medicine.dosage?.avg_weight || 'N/A'}</p>

          </div>
          <p className="details">{medicine.details}</p>
        </li>
      ))}
    </ul>
)
}
export default MedicineCard

