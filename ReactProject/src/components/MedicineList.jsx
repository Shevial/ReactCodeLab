import { useState, useEffect } from 'react'; 
import MedicineCard from './MedicineCard';

function MedicineList(props) {
  const [medicines, setMedicines] = useState([]);

  // Cargar medicamentos al inicio
  useEffect(() => {
    fetchMedicines();
  }, []);

  // Obtener lista completa
  const fetchMedicines = async () => {
    const response = await fetch('http://localhost:8080/api/medicines/view');
    const data = await response.json();
    setMedicines(data);
  };

  // Eliminar medicamento
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/medicines/delete/${id}`, {
      method: 'DELETE'
    });
    
    // Actualización OPTIMIZADA (sin recargar toda la lista)
    setMedicines(prev => prev.filter(medicine => medicine.id !== id));
  };

  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <MedicineCard 
          key={medicine.id} 
          medicine={medicine}
          onDelete={handleDelete} 
          selectMedicine={props.selectMedicine}
        />
      ))}
    </ul>
  );
}
export default MedicineList; 
