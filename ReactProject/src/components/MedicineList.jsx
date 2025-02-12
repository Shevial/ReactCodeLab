import { useState, useEffect } from "react"
import MedicineCard from "./MedicineCard"

function MedicineList() {
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getMedicines = async (quantity) => {
      try {
        const mdcnArr = []
        
        for (let i = 1; i <= quantity; i++) {
          try {
            const medicine = await fetchMedicine(i)
            if (medicine && medicine.id) mdcnArr.push(medicine)
          } catch (err) {
            console.error(`Error fetching medicine ${i}:`, err)
          }
        }
        
        setMedicines(mdcnArr)
        setLoading(false)
      } catch (mainErr) {
        setError(mainErr.message)
        setLoading(false)
      }
    }

    getMedicines(3)
  }, [])

  const fetchMedicine = async (index) => {
    const response = await fetch(`http://localhost:8080/api/medicines/view/${index}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }

  if (loading) return <div className="loading">Cargando...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <MedicineCard 
          key={medicine.id} 
          medicine={medicine} 
        />
      ))}
    </ul>
  )
}

export default MedicineList