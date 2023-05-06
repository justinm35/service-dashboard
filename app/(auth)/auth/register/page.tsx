"use client"
import { FC, ReactEventHandler, useState, MouseEvent } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { signUp } from '@/app/(firebase)/authMethods'
import { useRouter } from 'next/navigation'


interface pageProps {
  
}

interface ISignUpData {
    email : string,
    password: string,
    confPassword: string
}

const Recovery: FC<pageProps> = ({}) => {
    const router = useRouter()
    const [formData, setFormData] = useState<ISignUpData>({email : "",password: "",confPassword: ""})
    const [errorState, setErrorState] = useState<any>()

    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
    }
    const handleSignUp = async (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(formData.confPassword !== formData.password) {
            setErrorState("error pass dont match")
            return;
        }
        const { result, error } = await signUp(formData.email, formData.password)
        if(error) {
            setErrorState(error)
            return;
        }
        console.log(result)
        return router.push('/dashboard')
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
            <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md   sm:p-8">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create Account
                </h2>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                        <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input value={formData.confPassword} onChange={handleChange} type="confirm-password" name="confPassword" id="confPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "/>
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="newsletter" className="font-light text-gray-500 ">I accept the <a className="font-medium text-orange-400 hover:underline " href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" onClick={(e)=>handleSignUp(e)} className=" transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                    <p className="text-sm font-light text-gray-500">
                      Already have an account? <Link href="/auth" className="font-medium text-orange-400 hover:underline">Login here</Link>
                  </p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Recovery