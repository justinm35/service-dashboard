"use client"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FC } from 'react'


interface CustomerNavProps {
    customerId : string
}

const CustomerNav: FC<CustomerNavProps> = ({customerId}) => {
    const activeSegment = useSelectedLayoutSegment();

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200 ">
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/equipment`} aria-current="page" className={"inline-block p-4 rounded-t-lg hover:text-gray-600 transition" + 
            (activeSegment === 'equipment' ? " bg-gray-200 text-indigo-500 hover:bg-gray-200 hover:text-indigo-500" : " hover:bg-gray-50")}>Equipment</Link>
        </li>
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/invoices`} className={"inline-block p-4 rounded-t-lg hover:text-gray-600 transition" + 
            (activeSegment === 'invoices' ? " bg-gray-200 text-indigo-500 hover:bg-gray-300 hover:text-indigo-500" : " hover:bg-gray-50")}>Invoices</Link>
        </li>
        <li className="mr-2">
            <Link href={`/dashboard/customer/${customerId}/service`} className={"inline-block p-4 rounded-t-lg hover:text-gray-600 transition"  + 
            (activeSegment === 'service' ? " bg-gray-200 text-indigo-500 hover:text-indigo-500" : " hover:bg-gray-50")}>Services</Link>
        </li>
    </ul>
  )
}

export default CustomerNav