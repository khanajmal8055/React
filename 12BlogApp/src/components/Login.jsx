import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth_service'
import {useForm} from 'react-hook-form'
import {Button ,Input ,Logo} from './index'
import {login as authLogin} from '../store/authSlice'
import {useDispatch} from 'react-redux'


function Login() {
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getUser()

                if(userData) dispatch(authLogin(userData));
                    
                navigate("/")
            }
            
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width = "100px"/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any account? &nbsp;
                <Link
                to="/signup"
                className='font-medium text-primary transition-all duration-200 hover:underline'
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center '>{error}</p>}
        
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label="Email : "
                    type = "email"
                    placeholder = "Enter Email Address"
                    {...register("email",{
                        required : true,
                        validate :{
                            matchPattern : (value) => /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/. test(value) || "Email address must be valid address"
                        }
                    })}

                    />
                    <Input
                    label = "Password :"
                    type="password"
                    placeholder = "Enter Password"
                    {...register("password" , {
                        required:true
                    })}
                    />
                    <Button
                    type="submit"
                    className='w-full'
                    >Sign In</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login