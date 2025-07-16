import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Card username = "Ajmal" btnText = "Click Me"/>
      <Card />
    </>
  )
}

export default App
