'use client'

import { CubeIcon, Cog6ToothIcon, UsersIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react'

interface AdminNavProps {
  
}

const AdminNav: FC<AdminNavProps> = ({}) => {

  const activeSegment = useSelectedLayoutSegment();
  return (
    <ul className="flex flex-col py-4 space-y-1">
    <li className="px-5">
      <div className="flex flex-row items-center h-8">
        <div className="text-sm font-light tracking-wide text-gray-500">Admin Menu</div>
      </div>
    </li>
    <li>
      <Link href="/dashboard" className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 " + 
        (activeSegment === null ? " text-indigo-500 font-semibold " : " text-gray-600 ")}>
        <span className="inline-flex justify-center items-center ml-4">
          <Squares2X2Icon className='w-6 h-6'/>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
      </Link>
    </li>
    <li>
      <Link href="/dashboard/clients" className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" + 
        (activeSegment === 'clients' ? " text-indigo-500 font-semibold " : " text-gray-600 ")}>
        <span className="inline-flex justify-center items-center ml-4">
          <UsersIcon className='w-6 h-6'/>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Clients</span>
      </Link>
    </li>
    <li>
      <Link href="/dashboard/products" className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6" + 
        (activeSegment === 'products' ? " text-indigo-500 font-semibold " : " text-gray-600 ")}>
        <span className="inline-flex justify-center items-center ml-4">
        <CubeIcon className='w-6 h-6 '/>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Products</span>
      </Link>
    </li>

    <li className="px-5">
      <div className="flex flex-row items-center h-8">
        <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
      </div>
    </li>
    <li>
      <Link href="/dashboard/settings" className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"  + 
        (activeSegment === 'settings' ? " text-indigo-500 font-semibold " : " text-gray-600 ")}>
        <span className="inline-flex justify-center items-center ml-4">
          <Cog6ToothIcon className='w-6 h-6 '/>
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
      </Link>
    </li>
  </ul>)
}

export default AdminNav