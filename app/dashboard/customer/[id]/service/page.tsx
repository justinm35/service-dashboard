import { TruckIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC } from 'react'

interface ServicesProps {
  params: {id: string}
}

const Services: FC<ServicesProps> = ({params}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-gray-900'>
      <TruckIcon className='w-14 h-14 text-gray-800 mt-32'/>
      <h3 className='font-semibold text-lg mb-4'>No service done yet</h3>
      <p className='opacity-40 mb-5'>Any service calls will show the recors here.</p>
      {/* <Link href={`dashboard/customer/${params.id}/service/addservice`} className=' flex items-center max-w-md w-42 py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
        <PlusIcon className="w-6 h-6 mr-3"/>Add Service Sheet
      </Link> */}
      <div className='group inline-block'>
      <button className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
        Add Service Sheet
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdown" className=" z-10 absolute hidden pt-1 group-hover:block bg-white divide-y divide-gray-300 rounded-lg shadow">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link href={`dashboard/customer/${params.id}/service/addloadtest`} className="block px-5 py-2 hover:bg-gray-100">Functional Load Test</Link>
            </li>
            <li>
              <Link href={`#`} className="block px-5 py-2 hover:bg-gray-100">General Service</Link>
            </li>
            <li>
              <Link href={`#`} className="block px-5 py-2 hover:bg-gray-100">Mechanical Repair</Link>
            </li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Services
