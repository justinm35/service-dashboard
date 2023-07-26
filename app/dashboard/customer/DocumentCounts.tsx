'use client'
import { fetchCollectionQuantity } from '@/app/(firebase)/firebaseFetchMethods'
import { CubeIcon, DocumentTextIcon, PuzzlePieceIcon, TruckIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import { toast } from 'react-toastify'

interface DocumentCountsProps {
    id: string
}

const DocumentCounts = async ({id}: DocumentCountsProps) => {
    let equipmentCount, invoiceCount, servicesCount
    await fetchCollectionQuantity(`Customers/${id}/Equipment`)
    .then((data)=>{equipmentCount = data})
    .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})
    await fetchCollectionQuantity(`Customers/${id}/Invoices`)
    .then((data)=>{invoiceCount = data})
    .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})
    await fetchCollectionQuantity(`Customers/${id}/Services`)
    .then((data)=>{servicesCount = data})
    .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})
  return (
    <div className='flex text-600 opacity-40 space-x-5 pb-6'>
        <p className='flex items-center'><CubeIcon className='w-4 h-4 mr-1'/>{equipmentCount} Equipment</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-1'/>{invoiceCount} Invoices</p>
        <p className='flex items-center'><TruckIcon className='w-4 h-4 mr-1'/>{servicesCount} Services</p>

    </div>
  )
}

export default DocumentCounts
