import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// this code will  not work bcz  we have declared key of our choice but react dont know about our key 
// const reactElement = {
//     type: 'a',
//     props :{
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to vist google'
// }

function Myapp (){
  return(
    <h1>React Library</h1>
  )
}

const anotherElement = (
  <a href="https://google.com">Click me to visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' ,target : '_blank' },
  'Click me '
)

createRoot(document.getElementById('root')).render(
  // reactElement
  // Myapp()
  <>
    <App />
    <Myapp />
  </>
  // anotherElement
)
