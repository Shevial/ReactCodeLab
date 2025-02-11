import { useEffect } from "react"
import { useState } from "react"

    function MedicineCard() {

      const[medicine, setMedicine] = useState({})
        useEffect(() => {
            fetch("http://localhost:8080/api/medicines/view")
            .then((response) => response.json())
            .then((data) => setMedicine(data))
        }, [])
    
  return (
    medicine.id ? (
    <li className="medicine-card">
      <h2 className="medicine-name">{medicine.name}</h2>
      <h3 className="text"> Minimum dosage: {medicine.details}</h3>
    </li>
  ) : (
    <p className="loading">Loading...</p>
  )
)
}
export default MedicineCard

