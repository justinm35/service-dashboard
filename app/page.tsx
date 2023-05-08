import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='h-auto w-48 space-y-10 flex flex-col'>
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
  )
}
