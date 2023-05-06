import { db } from '@/app/(firebase)/firebaseConfig'
import CustomerNav from '@/app/components/CustomerNav'
import { DocumentTextIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { DocumentData, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import Link from 'next/link'

interface layoutProps {
  children: React.ReactNode,
  params: {id: string}
}

const layout= async({children, params} : layoutProps) => {
    const customerRef = doc(db, "Customers", params?.id)
    const customerSnap = await getDoc(customerRef)
    let customer : DocumentData | undefined =  customerSnap.data()

  return (
  <div className='p-10'>
    <Link href="/dashboard/clients" className='opacity-40 flex mb-6 items-center text-[14px] hover:text-indigo-500 hover:opacity-100'><ArrowLeftIcon className='w-4 h-4 mr-1'/>Back to the Customer Dashboard</Link>
    <h2 className='font-semibold text-2xl text-gray-800 pb-2'>{customer?.firstName + " " + customer?.lastName}</h2>
    <div className='flex text-600 opacity-40 space-x-5 pb-6'>
        <p className='flex items-center'><PuzzlePieceIcon className='w-4 h-4 mr-2'/>{}0 Equipment</p>
        <p className='flex items-center'><DocumentTextIcon className='w-4 h-4 mr-2'/>{}0 Invoices</p>

    </div>
    <div className='flex justify-between'>
        <div className='w-full pr-4'>
        <CustomerNav customerId={params?.id}/>
            <div>
                {children}
            </div>
        </div>
        <div className='w-80 bg-white rounded-md shadow-md p-6 text-gray-900'>
            {/* <h3>{customer.firstName + " " + customer.lastName}</h3> */}
            <h3 className='text-md font-semibold text-gray-700 opacity-90 pb-1'>Customer Info</h3>
            <div className='w-full bg-gray-400 h-0.5 opacity-20 mx-auto my-2'/>
            <div className='flex flex-col'>
                <h3 className='text-sm font-medium text-gray-700 opacity-60'>Name</h3>
                <p className='text-md font-medium pb-2'>{customer?.firstName + " " + customer?.lastName}</p>
                <h3 className='text-sm font-medium text-gray-700 opacity-60'>E-mail</h3>
                <p className='text-md font-medium pb-2'>{customer?.email}</p>
                <h3 className='text-sm font-medium text-gray-700 opacity-60'>Phone</h3>
                <p className='text-md font-medium pb-2'>{customer?.phone}</p>
                <h3 className='text-sm font-medium text-gray-700 opacity-60'>Notes</h3>
                <p className='text-md font-medium pb-2'>{customer?.notes ? "N/A" : customer?.notes}</p>
            </div>
        </div>
    </div>
  </div>
  
  )
}

export default layout