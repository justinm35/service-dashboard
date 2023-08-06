'use client'
import {fetchDocumentById } from '@/app/(firebase)/firebaseFetchMethods'
import CustomerInfoSide from '@/app/components/CustomerInfoSide'
import CustomerNav from '@/app/components/CustomerNav'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { DocumentData } from 'firebase/firestore'
import Link from 'next/link'
import { toast } from 'react-toastify'
import DocumentCounts from '../DocumentCounts'
import { useEffect, useState } from 'react'

interface layoutProps {
  children: React.ReactNode,
  params: {id: string}
}

const layout = ({children, params} : layoutProps) => {
  const [customer, setCustomer] = useState<DocumentData | undefined>()
  useEffect(() => {
    fetchDocumentById('Customers', params?.id)
    .then((customerData) => {
      setCustomer(customerData)
    }).catch((err)=> {
      toast.error(`Errror: ${JSON.stringify(err)}`)
    })
  }, [])

  return (
  <div className='p-10 h-screen'>
    <Link href="/dashboard/customer" className='opacity-40 flex mb-6 items-center text-[14px] hover:text-indigo-500 hover:opacity-100'><ArrowLeftIcon className='w-4 h-4 mr-1'/>Back to the Customer Dashboard</Link>
    <h2 className='font-semibold text-2xl text-gray-800 pb-2'>{customer?.firstName + " " + customer?.lastName}</h2>
    {/* <div className='flex text-600 opacity-40 space-x-5 pb-6'>
        <p className='flex items-center'><PuzzlePieceIcon className='w-4 h-4 mr-2'/>{}0 Equipment</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-2'/>{}0 Invoices</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-2'/>{}0 Services</p>
    </div> */}
     {/* @ts-expect-error Server Component */}
    <DocumentCounts id={params?.id}/>
    <div className='flex justify-between'>
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
