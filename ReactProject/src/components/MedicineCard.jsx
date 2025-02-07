import { useEffect } from "react"

    function MedicineCard() {
        useEffect(() => {
            fetch("http://localhost:8080/medicines/view/2")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(error => console.error("Error:", error));
        }, [])
    
  return (
    <li className="Medicine-card">

    </li>
  )
}
export default MedicineCard

