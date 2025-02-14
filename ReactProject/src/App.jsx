import './App.css'
import { useState } from 'react'
import MedicineDetails from './components/MedicineDetails'
import MedicineList from './components/MedicineList'

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState()
  return (
    <>
    {selectedMedicine && (
      <div>
        <h2>Selected medication</h2>
        <MedicineDetails medicine={selectedMedicine}></MedicineDetails>
      </div>

    )}
    <h2>Medicine List</h2>
    <MedicineList selectMedicine={setSelectedMedicine}></MedicineList>
    </>
  )
}

export default App
