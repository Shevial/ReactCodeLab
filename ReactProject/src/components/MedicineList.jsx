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
    console.log("Medicamentos cargados:", data); 
    setMedicines(data);
  };

  // Eliminar medicamento
  const handleDelete = async (id) => {
    console.log("Eliminando medicamento con ID:", id);  
    const response = await fetch(`http://localhost:8080/api/medicines/delete/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Eliminar localmente si la respuesta es exitosa
      setMedicines((prevMedicines) => {
        const updatedMedicines = prevMedicines.filter(medicine => medicine.id !== id);
        console.log("Medicamentos después de eliminar:", updatedMedicines);  // Verificación
        return updatedMedicines;
      });

      // Llamar a la función de eliminación en App.js para actualizar el estado seleccionado
      if (props.selectMedicine) {
        props.selectMedicine(null); 
      }
    } else {
      console.error("Error al eliminar el medicamento");  // Si la respuesta no es OK
    }
  };


  return (
    <ul className="medicine-list">
      {medicines.map(medicine => (
        <MedicineCard 
          key={medicine.id} 
          medicine={medicine}
          onDelete={() => handleDelete(medicine.id)} 
          selectMedicine={props.selectMedicine}
        />
      ))}
    </ul>
  );
}
export default MedicineList; 
