import { Inter } from 'next/font/google'
import Link from 'next/link'
import TASlogo from '/public/TAS-logo.webp'

const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='p-10 bg-white flex flex-col items-center rounded-lg shadow-lg'>
      <div className="flex items-center flex-col mb-6 text-2xl font-semibold text-gray-900">
          <div className='relative w-14 h-14 mr-2'>
              <Image src={TASlogo} fill alt='TAS logo'/>
          </div>
          <h1 className='pt-2 text-gray-700 font-bold'>TAS Service Dashboard</h1>
      </div>
      <div className='h-auto w-48 space-y-6 flex flex-col'>
        <Link href="/auth"> 
          <button className="transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-sm hover:shadow-xl">
            Login
          </button>
        </Link>

        <Link href="/dashboard"> 
          <button className="transition w-full bg-orange-400 text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-sm hover:shadow-xl">
            Dashboard (temp)
          </button>
        </Link>
      </div>
      </div>
    </div>
  )
}
