import './App.css'
import MedicineList from './components/MedicineList'

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState()
  return (
    <>
    {selectedMedicine && (
      <div>
        <h2>Selected medication</h2>

      </div>

    )}
    <h2>Medicine List</h2>
    <MedicineList></MedicineList>
    </>
  )
}

export default App
