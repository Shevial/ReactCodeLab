import { useEffect } from "react"

    function MedicineCard() {
        useEffect(() => {
            fetch("http://localhost:8080/api/medicines/view")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(error => console.error("Error:", error));
        }, [])
    
  return (
    <li className="Medicine-card">
      <h2 className="medicine-name"></h2>
    </li>
  )
}
export default MedicineCard

