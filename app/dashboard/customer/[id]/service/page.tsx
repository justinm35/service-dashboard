'use client'
import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'
import { TruckIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC } from 'react'
import ServiceHistoryTable from '../../../../components/customerTabs/ServiceHistoryTable'
import ServiceHistoryDropdownBtn from '@/app/components/ServiceHistoryDropdownBtn'

interface ServicesProps {
  params: {id: string}
}

const Services =  ({params}: ServicesProps) => {

  return fetchCollection(`Customers/${params?.id}/ServiceHistory`)
    .then((serviceHistoryData)=> {
      if(serviceHistoryData && serviceHistoryData.length !== 0) {
        return (<ServiceHistoryTable serviceHistoryData={serviceHistoryData} params={params}/>)
      } else{
        return(
          <div className='w-full flex flex-col items-center justify-center text-gray-900'>
            <TruckIcon className='w-14 h-14 text-gray-800 mt-32'/>
            <h3 className='font-semibold text-lg mb-4'>No service done yet</h3>
            <p className='opacity-40 mb-5'>Any service calls will show the recors here.</p>
            {/* <Link href={`dashboard/customer/${params.id}/service/addservice`} className=' flex items-center max-w-md w-42 py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
              <PlusIcon className="w-6 h-6 mr-3"/>Add Service Sheet
            </Link> */}
            <ServiceHistoryDropdownBtn params={params}/>
          </div>
    )
      }
    })
    .catch((err) => {
      console.log(err)
      return <p>Error: {JSON.stringify(err)}</p>;
    })

}

export default Services
