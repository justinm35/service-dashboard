"use client"
import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/navigation'

interface CustomerNavProps {
    customerId : string
}

const CustomerNav: FC<CustomerNavProps> = ({customerId}) => {
    const router = useRouter();

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/equipment`} aria-current="page" className="inline-block p-4 text-indigo-500 bg-gray-200 rounded-t-lg active">Equipment</Link>
        </li>
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/invoices`} className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Invoices</Link>
        </li>
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/service`} className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">Services</Link>
        </li>
    </ul>
  )
}

export default CustomerNav