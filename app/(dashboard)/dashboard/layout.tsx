"use client"
import SideNav from '@/app/components/SideNav'
import AuthProvider from '@/app/helpers/AuthProvider'
import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({children}) => {
  return (
    <>
    <AuthProvider>
        <SideNav />
        <div className='fixed right-0 w-[calc(100vw-16rem)]'>
            {children}
        </div>
    </AuthProvider>
    </>
    )
}

export default layout