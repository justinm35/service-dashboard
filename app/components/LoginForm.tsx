"use client"
import Image from 'next/image'
import { FC, MouseEvent, useState } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import Link from 'next/link'
import { signIn } from '@/app/(firebase)/authMethods'
import { useRouter } from 'next/navigation'
import { TailSpin } from 'react-loader-spinner'


interface LoginformProps {
  
}
interface ISignInData {
    email : string,
    password: string,
}
const LoginForm: FC<LoginformProps> = ({}) => {

    const router = useRouter()
    const [formData, setFormData] = useState<ISignInData>({email : "",password: ""})
    const [errorState, setErrorState] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
    }
    const handleSignIn = async (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorState('')
        signIn(formData.email, formData.password)
        .then((data) => {
                router.refresh()
                router.push('/dashboard')
        })
        .catch((err)=>{
            setErrorState(err.message)
            }
        )
        .finally(() => {
            setIsLoading(false)
        })
    }


  return (
    <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                <div className='relative w-8 h-8 mr-2'>
                    <Image src={TASlogo} fill alt='TAS logo'/>
                </div>
                TAS Service
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input onChange={handleChange} value={formData.password} type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        <div className='h-1 -pt-4'>
                        {errorState ? <p className='text-sm font-semibold text-red-400'>{errorState}</p> : null}
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="flex items-start">
                            </div>
                            <Link href="/auth/recover" className="text-sm font-medium text-orange-400 hover:underline ">Forgot password?</Link>
                        </div>
                        <button onClick={(e)=>handleSignIn(e)} type="submit" 
                        className="transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center space-x-3">
                            <span>Sign in </span>
                            {isLoading ? <TailSpin color="#ffffff"  height="20" width="20" /> : null}</button>
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <Link href="/auth/register" className="font-medium text-orange-400 hover:underline ">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginForm