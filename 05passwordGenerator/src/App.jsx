import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [length, setLength] = useState(8)
  let [numberAllowed, setNumberAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSRTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*+-)({~}"
    }
    for (let index = 1; index <= length; index++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
     
    }
    setPassword(pass)
  
  },[length,numberAllowed,charAllowed,setPassword])

  const passwordRef = useRef()

  const passwordCopyToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  } , [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 mb-3'
        onClick={passwordCopyToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={50}
          value={length}
          className='custom-pointer' 
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked= {numberAllowed}
          id= 'numberInput'
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked= {charAllowed}
          id= 'charInput'
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
