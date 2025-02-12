import { use } from "react"
import MedicineCard from "./MedicineCard"

function MedicineList() {

useEffect(() => {
  getMedicines(10);
}, [])

  const fetchMedicine = async (index) => {
    const response = await fetch(`http://localhost:8080/api/medicines/view/${index}`)
    const data = await response.json()
    return data;
  }
  const getMedicines = async (quantity) => {
    const mdcnArr = [];

    for (let i = 1; i <= quantity; i++) {
      const medicine = await fetchMedicine(i);
      mdcnArr.push(medicine);
    }
  }
  return (
    <ul className="medicine-list">
      <MedicineCard></MedicineCard>
    </ul>
  )
}

export default MedicineList