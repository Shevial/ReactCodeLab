import './App.css'
import { useState, useEffect } from 'react'
import MedicineDetails from './components/MedicineDetails'
import MedicineList from './components/MedicineList'
import MedicineForm from './components/MedicineForm'

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [isEditing, setIsEditing] = useState(false);


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
   // Nueva función para manejar la actualización
   const handleUpdateMedicine = async (updatedMedicine) => {
    try {
      const response = await fetch(`http://localhost:8080/api/medicines/form/${updatedMedicine.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMedicine),
      });

      if (response.ok) {
        setMedicines(prev => 
          prev.map(med => med.id === updatedMedicine.id ? updatedMedicine : med)
        );
        setSelectedMedicine(updatedMedicine);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating medicine:", error);
    }
  };

  return (
    <>
      {selectedMedicine && !isEditing && (
        <div 
        className="modal-backdrop"
        onClick={() => setSelectedMedicine(null)}
        >
        <div 
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Medicamento Seleccionado</h2>
          <MedicineDetails 
            medicine={selectedMedicine}
            onDelete={handleDeleteMedicine}
            onEdit={() => setIsEditing(true)}
          />
        </div>
        </div>

      )}

      {isEditing && (
      <div 
      className="modal-backdrop"
      onClick={() => setIsEditing(false)}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Editar Medicamento</h2>
        <MedicineForm
          medicine={selectedMedicine}
          onSubmit={handleUpdateMedicine}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    </div>
      )}

      <h2>Lista de Medicamentos</h2>
      <MedicineList
        medicines={medicines}
        selectMedicine={(med) => {
          setSelectedMedicine(med);
          setIsEditing(false);
        }}
        onDelete={handleDeleteMedicine}
      />
    </>
  );
}

export default App;