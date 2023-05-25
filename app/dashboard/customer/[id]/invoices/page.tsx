import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'
import InvoiceTable from '@/app/components/customerTabs/InvoiceTable'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { CubeIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC } from 'react'

interface InvoicesProps {
  params: {id: string}
}

const Invoices= ({params}: InvoicesProps) => {
 
  return fetchCollection(`Customers/${params?.id}/Invoices`)
  .then((resInvoiceData)=> {
    if(resInvoiceData && resInvoiceData.length !== 0) {
      return (<InvoiceTable invoiceData={resInvoiceData} params={params}/>)
    } else{
      return(
        <div className='w-full flex flex-col items-center justify-center text-gray-900'>
        <DocumentIcon className='w-14 h-14 text-gray-800 mt-32'/>
        <h3 className='font-semibold text-lg mb-4'>Customer has no invoices</h3>
        <p className='opacity-40 mb-5'>Any invoices owned by this customer will be listed here.</p>
        <Link href="#" className=' flex items-center max-w-md w-42 py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
        <PlusIcon className="w-6 h-6 mr-3"/>Add Invoice</Link>
        </div>
      )
    } 
  })
  .catch((err) => {
    console.log(err)
    return <p>Error: {JSON.stringify(err)}</p>;
  })
}

export default Invoices
