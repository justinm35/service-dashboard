import { db } from '@/app/(firebase)/firebaseConfig'
import CustomerInfoSide from '@/app/components/CustomerInfoSide'
import CustomerNav from '@/app/components/CustomerNav'
import { DocumentTextIcon, PencilSquareIcon, PuzzlePieceIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { DocumentData, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useState } from 'react'

interface layoutProps {
  children: React.ReactNode,
  params: {id: string}
}

const layout= async({children, params} : layoutProps) => {
    const customerRef = doc(db, "Customers", params?.id)
    const customerSnap = await getDoc(customerRef)
    let customer : DocumentData | undefined =  customerSnap.data()


  return (
  <div className='p-10 h-screen'>
    <Link href="/dashboard/clients" className='opacity-40 flex mb-6 items-center text-[14px] hover:text-indigo-500 hover:opacity-100'><ArrowLeftIcon className='w-4 h-4 mr-1'/>Back to the Customer Dashboard</Link>
    <h2 className='font-semibold text-2xl text-gray-800 pb-2'>{customer?.firstName + " " + customer?.lastName}</h2>
    <div className='flex text-600 opacity-40 space-x-5 pb-6'>
        <p className='flex items-center'><PuzzlePieceIcon className='w-4 h-4 mr-2'/>{}0 Equipment</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-2'/>{}0 Invoices</p>

    </div>
    <div className='flex justify-between h-full'>
        <div className='w-full pr-4'>
        <CustomerNav customerId={params?.id}/>
            <div>
                {children}
            </div>
        </div>
        <CustomerInfoSide customer={customer} params={params}/>
    </div>
  </div>
  
  )
}

export default layout