'use client'

import { CubeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {PlusIcon} from '@heroicons/react/24/solid'
import EquipmentTable from '@/app/components/customerTabs/EquipmentTable'
import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'

interface EqipmentProps {params: {id: string}}

const Eqipment = ({params} : EqipmentProps) => {

  return fetchCollection(`Customers/${params?.id}/Equipment`)
    .then((resEquipmentData)=> {
      if(resEquipmentData && resEquipmentData.length !== 0) {
        return (<EquipmentTable equipmentData={resEquipmentData} params={params}/>)
      } else{
        return(
        <div className='w-full flex flex-col items-center justify-center text-gray-900'>
        <CubeIcon className='w-14 h-14 text-gray-800 mt-32'/>
        <h3 className='font-semibold text-lg mb-4'>Customer has no equipment</h3>
        <p className='opacity-40 mb-5'>Any equipment owned by this customer will be listed here.</p>
        <Link href={`dashboard/customer/${params.id}/equipment/addequipment`} className=' flex items-center max-w-md w-42 py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
        <PlusIcon className="w-6 h-6 mr-3"/>Add equipment</Link>
        </div>
        )
      }
  })
  .catch((err) => {
    console.log(err)
    return <p>Error: {JSON.stringify(err)}</p>;
  })
}

export default Eqipment
