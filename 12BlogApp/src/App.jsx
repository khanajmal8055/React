import {useDispatch} from 'react-redux'
import { useState ,useEffect } from 'react'
import authService from './appwrite/auth_service'
import {login ,logout} from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading , setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getUser()
      .then((userData)=>{
       if(userData){
         dispatch(login(userData))
       }
       else{
        dispatch(logout())
       }
      })
      .finally(() => setLoading(false))
  },[])

  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500  '>
      <div className='w-full block'>
        <Header/>
       <Outlet/>
      
        <Footer/>
      </div>
    </div>
  ) : null
  
}

export default App
