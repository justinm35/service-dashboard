'use client'
import { db } from '@/app/(firebase)/firebaseConfig'
import { PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import { FC, useState } from 'react'
import InvoiceTableItem from './InvoiceTableItem'
import Datepicker from "tailwind-datepicker-react" 

interface InvoiceTableProps {
    invoiceData : DocumentData[],
    params: {id: string}
}

const InvoiceTable: FC<InvoiceTableProps> = ({invoiceData, params}) => {
  const[show, setShow] = useState<boolean>(false)
  const handleClose = (state: boolean) => {setShow(state)}
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded ">
    <div className=" w-full rounded-t mb-0 px-4 py-3 border-0">
      <div className="w-full flex flex-wrap items-center">
        <div className="relative w-full px-0 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Customer Invoices</h3>
        </div>
        {/* <div className=''>
            <Link href={`dashboard/customer/${params.id}/equipment/addequipment`} className=' flex items-center justify-center max-w-xs py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
            <PlusIcon className="w-6 h-6 mr-3"/>Add Invoice</Link>
        </div> */}
          <form className='flex w-full space-x-4 items-center justify-center'>
          <div className='w-1/3'>
            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invoice Date</label>
            <Datepicker onChange={()=>{}} show={show} setShow={handleClose}/>
          </div>
          <div className='w-1/3'>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Invoice PDF</label>
            <input name="manualBlob" onChange={()=>{}} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="file_input" type="file"/>
          </div>
          <div className='w-1/3'>
            <button type="submit" className='w-full flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white border bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
            {/* <PlusIcon className="mr-3"/> */}
            Add Invoice
            </button>
          </div>
          </form>

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

        <tbody>
        {invoiceData.map((invoice)=>{
            return(
                <>
                  <InvoiceTableItem invoice={JSON.stringify(invoice)}/>
                </>
            )
        })}
        </tbody>

      </table>
    </div>
  </div>)
}

export default InvoiceTable