import './App.css'
import { useState } from 'react'
import MedicineDetails from './components/MedicineDetails'
import MedicineList from './components/MedicineList'

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState()
  const handleEditMedicine = (medicine) => {
    console.log("Editar:", medicine);
  };
  const handleDeleteMedicine = async (medicineId) => {
    console.log("Eliminar ID:", medicineId);
    await fetch(`http://localhost:8080/api/medicines/delete/${medicineId}`, {
      method: 'DELETE',
    });

    // Después de la eliminación, actualiza la lista de medicamentos
    setSelectedMedicine(null);  // Si el medicamento eliminado estaba seleccionado, deseleccionarlo
  };
  return (
    <>
    {selectedMedicine && (
      <div>
        <h2>Selected medication</h2>
        <MedicineDetails 
        medicine={selectedMedicine}
        onEdit={handleEditMedicine} 
        onDelete={handleDeleteMedicine}
        ></MedicineDetails>
      </div>

    )}
    <h2>Medicine List</h2>
    <MedicineList 
     selectMedicine={setSelectedMedicine}
     onDeleteMedicine={handleDeleteMedicine} 
    ></MedicineList>
    </>
  )
}

export default App
