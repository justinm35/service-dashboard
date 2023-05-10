"use client"

import { FC, MouseEventHandler, useState } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { resetPass } from '@/app/(firebase)/authMethods'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

interface RecoveryProps {
  
}

const Recovery: FC<RecoveryProps> = ({}) => {
  const [emailData, setEmailData] = useState("")
  const [errorState, setErrorState] = useState<string>('')
  const [successState, setSuccessState] = useState<string>('')

  // const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
  //   setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
  // }
  const handlePassReset = async (e: any) => {
    e.preventDefault()
    resetPass(emailData)
      .then((res) => {
        setErrorState('')
        console.log(res)
        setSuccessState(res)
      })
      .catch((err) => {
        setSuccessState('')
        console.log(err)
        setErrorState(err.message)
      })
  }

  return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
              <div className='relative w-8 h-8 mr-2'>
                  <Image src={TASlogo} fill alt='TAS logo'/>
              </div>
              TAS Service
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">Forgot your password?</h1>
            <p className="font-light text-gray-500">Don&apos;t fret! Just type in your email and we will send you a code to reset your password!</p>
                  <form className="mt-4 space-y-2 lg:mt-5 md:space-y-2">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                          <input onChange={(e) => {setEmailData(e.currentTarget.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                      </div>
                        <div className='h-2 pb-5'>
                            {errorState ? <p className='text-sm font-semibold text-red-400'>{errorState}</p> : null}
                            {successState ? <p className='text-sm font-semibold text-green-400'>{successState}</p> : null}
                        </div>
                      <button onClick={(e)=>handlePassReset(e)} type="submit" className="transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset Password</button>
                  </form>
                  <Link href="/auth" className='text-sm font-medium text-gray-700 opacity-40 flex items-center -mb-4 pt-6 hover:underline underline-offset-2 decoration-2 hover:text-orange-400 hover:opacity-100'>
                    <ArrowLongLeftIcon className='h-5 w-5 mr-1' />Back to login</Link>
              </div> 
          </div>
      </div>
    )
}

export default Recovery