
import { format } from 'date-fns'
import { FC } from 'react'
import { toast } from 'react-toastify'

interface ServiceRequestItemProps {
  request: IServiceRequest
}

const ServiceRequestItem: FC<ServiceRequestItemProps> = ({request}) => {

  return (
    <tr key={request.id}>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            <p className="text-base text-gray-800">{request.creatorName}</p>
            <p className='font-normal text-gray-600 text-[10px]'>{format(new Date(request.createdAt.seconds * 1000), 'MMM d, yyyy')}</p>
        </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {request.equipmentName}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 truncate">
            {request.problemDesc}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {(() => {
                switch (request.problemUrgency) {
                case 'HIGH':
                    return (
                        <div className="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 bg-red-200 text-red-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"className="feather feather-activity mr-2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        {request.problemUrgency}
                    </div>)
                case 'MEDIUM':
                    return (
                        <div className="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 bg-orange-200 text-amber-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"className="feather feather-activity mr-2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        {request.problemUrgency}
                    </div>)
                case 'LOW':
                    return (
                        <div className="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-500 rounded-full">    
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"className="feather feather-activity mr-2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        {request.problemUrgency}
                    </div>)
                default:
                    return null
                }
            })()}

            
            </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <button onClick={()=>toast.warn('This feature is still under construction.', {position: "top-right",})}className='px-5 py-3 bg-zinc-200 rounded-md'>View</button>
        </td>
    </tr>
  )
}

export default ServiceRequestItem