import { FC } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import Image from 'next/image'
import Link from 'next/link'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
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
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">Forgot your password?</h1>
            <p className="font-light text-gray-500">Don&apos;t fret! Just type in your email and we will send you a code to reset your password!</p>
                  <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                      </div>
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-orange-400 hover:underline" href="#">Terms and Conditions</a></label>
                          </div>
                      </div>
                    
                      <button type="submit" className="transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset Password</button>
                  </form>
              </div>
          </div>
      </div>
  </section>
    )
}

export default page