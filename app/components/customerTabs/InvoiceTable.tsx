'use client'
import { db } from '@/app/(firebase)/firebaseConfig'
import { DocumentIcon, PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import { FC, useState } from 'react'
import InvoiceTableItem from './InvoiceTableItem'

interface InvoiceTableProps {
    invoiceData : DocumentData[],
    params: {id: string}
}

const InvoiceTable: FC<InvoiceTableProps> = ({invoiceData, params}) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded ">
    <div className=" w-full rounded-t mb-0 px-4 py-3 border-0">
      <div className="w-full flex flex-wrap items-center">
        <div className="relative w-full px-0 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-xl text-gray-700">Customer Invoices</h3>
        </div>


      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Created Date
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                PDF URL
            </th>
          </tr>
        </thead>
        {invoiceData.length > 0 ? 
        <tbody>
        {invoiceData.map((invoice)=>{
            return(
                  <InvoiceTableItem invoice={JSON.stringify(invoice)} key={invoice.id}/>
            )
        })}
        </tbody>:
        <div className=' flex flex-col w-full items-center justify-center'>
        <DocumentIcon className='w-14 h-14 text-gray-300 mt-32'/>
        <h3 className='font-semibold text-lg mb-4'>Customer has no invoices</h3>
        <p className='opacity-40 mb-5'>Any invoices owned by this customer will be listed here.</p>
        {/* <Link href="#" className=' flex items-center max-w-md w-42 py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
        <PlusIcon className="w-6 h-6 mr-3"/>Add Invoice</Link> */}
        </div>
      }

      </table>
    </div>
  </div>)
}

export default InvoiceTable