"use client"

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { FC, SetStateAction } from 'react'

interface ServiceHistoryTableItemProps {
  setDisplayedServiceData : React.Dispatch<SetStateAction<string | null>>
  serviceHistoryRecord : IServiceHistory
}

const ServiceHistoryTableItem: FC<ServiceHistoryTableItemProps> = ({setDisplayedServiceData, serviceHistoryRecord}) => {
  return (
    <tr key={serviceHistoryRecord.id}>
    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
      {serviceHistoryRecord.address}
    </th>
    <td className="border-t-0 px-6 font-bold text-gray-600 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
      {serviceHistoryRecord.assetNum}
    </td>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {serviceHistoryRecord.commodeBrand}
    </td>
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {serviceHistoryRecord.technician}
    </td>
    <td className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <button onClick={()=> setDisplayedServiceData(serviceHistoryRecord.id as string)}>
      <ArrowTopRightOnSquareIcon  className='w-5 h-5 text-gray-500 hover:text-gray-700 transition'/>
      </button>
    </td>
    </tr>
  )
}

export default ServiceHistoryTableItem
