import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter + 1)
    }
    
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Learning React concept Usestate (Hooks) </h1>
     <h3>Counter : {counter}</h3>
     <button
     onClick={addValue}
     >Add Value</button>
     <button
     onClick={removeValue}
     >
      Remove value</button>
    </>
  )
}

export default App
