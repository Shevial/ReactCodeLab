import { useEffect } from "react"
import { useState } from "react"

function MedicineCard() {

    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/medicines/view")
        .then((response) => response.json())
        .then((data) => setMedicines(data))
    }, [])
    
  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <li key={medicine.id} className="medicine-card">
          <h2 className="medicine-name">{medicine.name}</h2>
          <div className="dosage-info">
            <p>Dosis mínima: {medicine.dosage?.minimum_factor || 'N/A'}</p>
            <p>Frecuencia: {medicine.dosage?.dosage_frequency || 'N/A'}</p>
          </div>
          <p className="details">{medicine.details}</p>
        </li>
      ))}
    </ul>
)
}
export default MedicineCard

