import { FC } from 'react'
import ServiceRequest from './dashboardModules/ServiceRequest'
import Notes from './dashboardModules/Notes'
import CustomerCount from './dashboardModules/CustomerCount'
import EquipmentCount from './dashboardModules/EquipmentCount'

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
          <h3 className='text-2xl font-bold text-gray-700'>Equipment Due for Service</h3>
        </div>
        <h1>Johnny</h1>
      </div>

      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 '>
        {/* @ts-expect-error Server Component */}
        <CustomerCount />
      </div>

      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 '>
        {/* @ts-expect-error Server Component */}
        <EquipmentCount />
      </div>

      <div className='rounded-lg bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 col-span-1  col-start-3 row-start-2 row-span-2'>
        <Notes />
      </div>

    </div>)
}

export default AdminDashboard