
import Chai from "./Chai"

function App() {

  const name = "Ajmal"
  

  // when we want retrun more than one element then we have to use fragments <></>
  return (
    <>
      <Chai />
      <h1>React with vite by Hitesh Choudhary leraning by {name}</h1>
   </>
  )
}

export default App
