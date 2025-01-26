import './App.css'
import ButtonComponent from './components/ButtonComponent'
import HeaderComponents from './components/HeaderComponents'
import { useState } from 'react'

function App() {

  // let number = 0; // variable sin reactividad
  const [number, setNumber] = useState(0); // variable con reactividad

  const addOne = () => {
   // number++;
   setNumber(number + 1);
    console.log(number);
  }

  const sayHello = () => {
    console.log("Hello");
  }
  const handleChange = (e) => { 
    console.log(e.target.value); // recoger valor del input 
  }

  return (
    <>
    <HeaderComponents></HeaderComponents>
    <main className='main-content'>
      <h2 onClick={sayHello}>Hello world!</h2>

      <h2 onClick={addOne}>Number: {number}</h2>     {/* mostrar variable */}



      <input type text="text" onChange={handleChange} />

      <br />
      <br />
      <ButtonComponent></ButtonComponent>
    </main>
    </>
  )
}

export default App
