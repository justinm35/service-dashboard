'use client'
import { fetchCollectionQuantity } from '@/app/(firebase)/firebaseFetchMethods'
import { CubeIcon, DocumentTextIcon, PuzzlePieceIcon, TruckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { toast } from 'react-toastify'
interface DocumentCountsProps {
    id: string
}

const DocumentCounts = ({ id }: DocumentCountsProps) => {
    const [documentCounts, setDocumentCounts] = useState<{equipmentCount: number, invoiceCount: number, servicesCount: number}>({equipmentCount: 0, invoiceCount: 0, servicesCount: 0})
    fetchCollectionQuantity(`Customers/${id}/Equipment`)
      .then((data)=>{ setDocumentCounts({...documentCounts, equipmentCount: data})})
      .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})
    fetchCollectionQuantity(`Customers/${id}/Invoices`)
      .then((data)=>{ setDocumentCounts({...documentCounts, invoiceCount: data})})
      .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})
    fetchCollectionQuantity(`Customers/${id}/Services`)
      .then((data)=>{ setDocumentCounts({...documentCounts, servicesCount: data})})
      .catch((err) => {toast.error(`Error: ${JSON.stringify(err)}`)})

  return (
    <div className='flex text-600 opacity-40 space-x-5 pb-6'>
        <p className='flex items-center'><CubeIcon className='w-4 h-4 mr-1'/>{documentCounts.equipmentCount} Equipment</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-1'/>{documentCounts.invoiceCount} Invoices</p>
        <p className='flex items-center'><TruckIcon className='w-4 h-4 mr-1'/>{documentCounts.servicesCount} Services</p>
    </div>
  )
}

export default DocumentCounts
