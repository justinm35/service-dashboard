'use client'
import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'
import InvoiceTable from '@/app/components/customerTabs/InvoiceTable'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { CubeIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import AddInvoice from './AddInvoice'

interface InvoicesProps {
  params: {id: string}
}

const Invoices= ({params}: InvoicesProps) => {
    const [invoiceData, setInvoiceData] = useState<any | null>(null)

  useEffect(()=>{
    fetchCollection(`Customers/${params?.id}/Invoices`)
      .then((resInvoiceData)=> {  
        setInvoiceData(resInvoiceData)
      })
      .catch((error)=>{
        console.log(error)
        return (<p>{JSON.stringify(error)}</p>)
      })
  },[params?.id])

    if(invoiceData === null){
      return null
    }else{
      return (
        <>
          <AddInvoice customerUid={params?.id}/>
          <InvoiceTable invoiceData={invoiceData} params={params}/>
        </>)
    } 
}

export default Invoices