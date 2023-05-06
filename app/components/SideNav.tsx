"use client"

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import { signOut } from '../(firebase)/authMethods'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { notFound, useRouter } from 'next/navigation'
import AuthProvider, { useAuth } from '../helpers/AuthProvider'
import Link from 'next/link'

interface SideNavProps {
  
}

const SideNav: FC<SideNavProps> = ({}) => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<any>()  

  // const { user } = useAuth();
  // useEffect(() => {
  //   if (!user.uid) {
  //     router.push("/");
  //   }else{
  //     setUserInfo(user)
  //   }
  // },[router, user])

  //   const auth = getAuth();
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {if(user){setUserInfo(user)}else{router.push('/')}})
  //   },[])
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const [signOutLoading, setSignOutLoading] = useState<boolean>(false)


    const signOutUser = async() => {
      setSignOutLoading(true)
      const result = signOut()
    }

    return (
    <div className="fixed flex flex-col top-0 left-0 w-full lg:w-64 bg-white h-full border-r text-gray-800 z-10">
      <div className="flex items-center justify-center h-fit border-b pl-3">
        <div className='w-full flex items-center space-x-2 py-3'>
          <Link href="/dashboard" className='w-full flex items-center space-x-2'>
            <div className='w-10 h-10 relative'>
                <Image src={TASlogo} alt="TAS Logo" fill />
            </div>
            <h2 className='font-bold'>Service Dashboard</h2>
            </Link>
        </div>
        <div></div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden flex-grow flex justify-between flex-col">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-500">Admin Menu</div>
            </div>
          </li>
          <li>
            <Link href="/dashboard/clients" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Clients</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
            </Link>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Products</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </a>
          </li>
          
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-500">Tasks</div>
            </div>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Available Tasks</span>
            </a>
          </li>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
            </div>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
            </a>
          </li>
        </ul>
        <ul className=''>
          <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <div className='w-11/12'>
                  <p className="ml-2 text-sm font-medium tracking-wide truncate">{userInfo?.displayName}</p>
                  <p className="ml-2 text-xs text-gray-400 tracking-wide truncate">{userInfo?.email}</p>
                </div>
              </a>
            </li>
            <li>
              <button className="relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate" onClick={()=>signOut()}>Logout</span>
              </button>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav