import { FC } from 'react'
import ServiceRequest from './dashboardModules/ServiceRequest'
import Notes from './dashboardModules/Notes'

interface AdminDashboardProps {
  
}

const AdminDashboard: FC<AdminDashboardProps> = ({}) => {
  return (
    <div className='w-full h-full grid grid-col-2 md:grid-cols-3 gap-7 p-10'>

      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 flex flex-col justify-start col-span-2 row-span-2 text-gray-800'>
        <ServiceRequest />
      </div>
      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 '>
        <div className='w-full flex justify-between border border-zinc-100 border-l-0 border-r-0 border-t-0 pb-2'>
          <h3 className='text-2xl font-bold text-gray-700'>Misc</h3>
        </div>
      </div>
      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 '>
        <div className='w-full flex justify-between border border-zinc-100 border-l-0 border-r-0 border-t-0 pb-2'>
          <h3 className='text-2xl font-bold text-gray-700'>Misc</h3>
        </div>
      </div>
      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 '>
        <div className='w-full flex justify-between border border-zinc-100 border-l-0 border-r-0 border-t-0 pb-2'>
          <h3 className='text-2xl font-bold text-gray-700'>Misc</h3>
        </div>
      </div>
      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 col-span-1  col-start-3 row-start-2 row-span-2'>
        <Notes />
      </div>

    </div>)
}

export default AdminDashboard


{/* <a href="#" className="group flex flex-col justify-between rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-80">
    <div>
      <h3 className="text-3xl font-bold text-orange-400 sm:text-5xl">2</h3>
      <div className="mt-4 border-t-2 border-gray-100 pt-4">
        <p className="text-sm font-medium uppercase text-gray-500">Client Count</p>
      </div>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 text-orange-400 sm:mt-12 lg:mt-16">
      <p className="font-medium sm:text-lg">Clients</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a>
  <a href="#" className="group flex flex-col justify-between rounded-md bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-80">
    <div>
      <h3 className="text-3xl font-bold text-orange-400 sm:text-5xl">50</h3>
      <div className="mt-4 border-t-2 border-gray-100 pt-4">
        <p className="text-sm font-medium uppercase text-gray-500">Products</p>
      </div>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 text-orange-400 sm:mt-12 lg:mt-16">
      <p className="font-medium sm:text-lg">Products</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a> */}