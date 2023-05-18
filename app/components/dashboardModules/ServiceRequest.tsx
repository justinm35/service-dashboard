import { BellAlertIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

interface ServiceRequestProps {
  
}

const ServiceRequest: FC<ServiceRequestProps> = ({}) => {
  return (
  <>
      <div className='w-full flex justify-between'>
          <h3 className='text-3xl font-bold text-gray-700'>Service Requests</h3>
          <h3 className="text-3xl font-bold text-orange-400 sm:text-5xl flex items-center flex-col space-y-3"><span>2</span><span className='text-sm font-normal text-gray-400'>New Requests</span></h3>
        </div>

        <div className="w-full mt-10 ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 text-zinc-500 align-middle border border-solid border-zinc-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Customer</th>
                  <th className="px-6 text-zinc-500 align-middle border border-solid border-zinc-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Date</th>
                  <th className="px-6 text-zinc-500 align-middle border border-solid border-zinc-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Product</th>
                  <th className="px-6 text-zinc-500 align-middle border border-solid border-zinc-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Type</th>
                  <th className="px-6 text-zinc-500 align-middle border border-solid border-zinc-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    Example Customer
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    Thursday, June 24th
                  </td>
                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Handicare 1100
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 bg-orange-200 text-amber-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"className="feather feather-activity mr-2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      Service
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button className='px-5 py-3 bg-zinc-200 rounded-md'>View</button>
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    John  Smith
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Monday, April 12th
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Arjo Track
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 bg-red-200 text-red-500 rounded-full">
                      <BellAlertIcon className='h-4 w-4 mr-1'/>
                      Damage
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button className='px-5 py-3 bg-zinc-200 rounded-md'>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </>
    )
}

export default ServiceRequest