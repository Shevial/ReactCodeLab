import './App.css'
import { useState, useEffect } from 'react'
import MedicineDetails from './components/MedicineDetails'
import MedicineList from './components/MedicineList'

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [medicines, setMedicines] = useState([]);

  // Carga inicial de medicamentos
  useEffect(() => {
    fetchMedicines();
  }, []);

  // Función única para actualizar la lista
  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/medicines/view');
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  // Manejo único de eliminación
  const handleDeleteMedicine = async (medicineId) => {
    try {
      await fetch(`http://localhost:8080/api/medicines/delete/${medicineId}`, {
        method: 'DELETE',
      });
      
      // Actualización optimizada del estado
      setMedicines(prev => prev.filter(med => med.id !== medicineId));
      if (selectedMedicine?.id === medicineId) setSelectedMedicine(null);
      
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  return (
    <>
     {selectedMedicine && (
        <div>
          <h2>Selected Medication</h2>
          <MedicineDetails 
            medicine={selectedMedicine}
            onDelete={handleDeleteMedicine}
          />
        </div>
      )} 
      <h2>Medicine List</h2>
      <MedicineList
        medicines={medicines}
        selectMedicine={setSelectedMedicine}
        onDelete={handleDeleteMedicine}
      />
      
     
    </>
  );
}
export default App;
