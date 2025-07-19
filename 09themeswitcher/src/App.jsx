import { useEffect, useState } from 'react'

import './App.css'
import { ThemeContextProvider } from './context/theme'
import ThemeBtn from './component/ThemeButton/ThemeBtn'
import Card from './component/Card/Card'

function App() {
  const [theme, setTheme] = useState("light")

  const lightTheme = () => {
    setTheme("light")
  }
  const darkTheme = () => {
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light" , "dark");
    document.querySelector('html').classList.add(theme)
  } ,[theme])

  return (
      <ThemeContextProvider value={{theme,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Card/>
                </div>
            </div>
        </div>
      </ThemeContextProvider>
  )
}

export default App
