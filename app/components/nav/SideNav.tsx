"use client"

import Image from 'next/image'
import { FC, Suspense, useEffect, useState } from 'react'
import TASlogo from '/public/TAS-logo.webp'
import { signOut } from '../../(firebase)/authMethods'
import { getAuth, getIdTokenResult, onAuthStateChanged } from 'firebase/auth'
import { notFound, useRouter, useSelectedLayoutSegment } from 'next/navigation'
import AuthProvider, { useAuth } from '../../helpers/AuthProvider'
import Link from 'next/link'
import { Bars3Icon, UsersIcon, CubeIcon, Cog6ToothIcon, UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import AdminNav from './AdminNav'
import CustomerNav from './CustomerNav'

interface SideNavProps {
  authStatus: string
}

const SideNav: FC<SideNavProps> = ({authStatus}) => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<any>()  


    const auth = getAuth()
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {if(user){setUserInfo(user)}})
    },[auth])

    auth.currentUser?.getIdTokenResult()
      .then((idTokenResult)=>{
        if(!!idTokenResult.claims.admin) {
          setIsAdmin(true)
          console.log('showadminui')
        }else{
          setIsAdmin(false)
          console.log('show Regular UI')
        }
      }).catch((err)=>{
        console.log(err)
      })
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
    const [showSidebar, setShowSidebar] = useState<boolean>(true)
    const [signOutLoading, setSignOutLoading] = useState<boolean>(false)


    const signOutUser = async() => {
      setSignOutLoading(true)
      signOut()
      .then(()=> {
        setSignOutLoading(false)
        router.refresh()
        router.push('/')
      }).catch(() => {
          console.log('signout error')
      })
    }
    const NavElements = () => {
      if(authStatus === 'admin') {
        return (<AdminNav/>)
      }else if(authStatus === 'customer') {
        return (<CustomerNav/>)
      }else{
        return null
      } 
    }
    return (
    <div className="fixed flex flex-col top-0 left-0 w-full lg:w-64 h-auto lg:h-full border-r text-gray-800 z-10">
      <div className="flex items-center justify-center h-fit border-b pl-3 bg-white">
        <div className='w-full flex items-center space-x-2 py-3'>
          <Link href="/dashboard" className='w-full flex items-center space-x-2'>
            <div className='w-10 h-10 relative'>
                <Image src={TASlogo} alt="TAS Logo" fill />
            </div>
            <h2 className='font-bold'>Service Dashboard</h2>
            </Link>
        </div>
        <div className='block lg:hidden'>
          <button className='p-3' onClick={()=>setShowSidebar(!showSidebar)}>
            <Bars3Icon className='w-6 h-6'/>
          </button>
        </div>
      </div>
      {showSidebar ? 
      <div className="overflow-y-auto overflow-x-hidden flex-grow flex justify-between flex-col bg-white backdrop-blur-sm backdrop-opacity-40 h-full">
        {/* Renders either admin or customer elements */}
        <Suspense fallback={<p>Hello World</p>}>
          <NavElements /> 
        </Suspense>
        <ul className=''>
          <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <UserIcon className='w-6 h-6 text-gray-700'/>
                </span>
                <div className='w-11/12'>
                  <p className="ml-2 text-sm font-medium tracking-wide truncate">{userInfo?.displayName}</p>
                  <p className="ml-2 text-xs text-gray-400 tracking-wide truncate">{userInfo?.email}</p>
                </div>
              </a>
            </li>
            <li>
              <button onClick={()=>signOutUser()} className="relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <ArrowRightOnRectangleIcon className='w-6 h-6 text-gray-700'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                {signOutLoading ? <p>Loading...</p> : null}
              </button>
            </li>
        </ul>
      </div>
      : null}
    </div>
  )
}

export default SideNav