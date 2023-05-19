'use client'


import { PhoneIcon, Cog6ToothIcon, CubeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react'

interface CustomerNavProps {}

const CustomerNav: FC<CustomerNavProps> = ({}) => {

  const activeSegment = useSelectedLayoutSegment();
    return (
        <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Options</div>
          </div>
        </li>
        <li>
          <Link href="/dashboard/myproducts" className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 " + 
              (activeSegment === 'myproducts')}>
            <span className="inline-flex justify-center items-center ml-4">
            <CubeIcon className='w-6 h-6 text-gray-700'/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">My Products</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/service" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            <PhoneIcon className='w-6 h-6 text-gray-700'/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Service</span>
          </Link>
        </li>
    
    
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
          </div>
        </li>
        <li>
          <Link href="/dashboard/settings" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <Cog6ToothIcon className='w-6 h-6 text-gray-700'/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
          </Link>
        </li>
      </ul>)
}

export default CustomerNav