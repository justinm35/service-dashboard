import { PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { DocumentData } from 'firebase/firestore'
import Link from 'next/link'
import { FC } from 'react'

interface EquipmentTableProps {
    equipmentData : DocumentData[],
    params: {id: string}
}

const EquipmentTable: FC<EquipmentTableProps> = ({equipmentData, params}) => {

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded ">
    <div className=" w-full rounded-t mb-0 px-4 py-3 border-0">
      <div className="w-full flex flex-wrap items-center">
        <div className="relative w-full px-2 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Customer Equipment</h3>
        </div>
        <div className=''>
            <Link href={`dashboard/customer/${params.id}/equipment/addequipment`} className=' flex items-center justify-center max-w-xs py-2 px-4 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>
            <PlusIcon className="w-6 h-6 mr-3"/>Add equipment</Link>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Equipment Data Id
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Serial Number 
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Service Date
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Purchase Date
                        </th>
          </tr>
        </thead>

        <tbody>
            {equipmentData.map((equipment) => {
                return (
                    <tr key={equipment.id}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {equipment.equipmentId}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {equipment.serialNum}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {format(new Date(equipment.serviceDate.seconds * 1000), 'MMM d, yyyy')}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {format(new Date(equipment.purchaseDate.seconds * 1000), 'MMM d, yyyy')}
                        </td>
                    </tr>
                )
            })}
       
        </tbody>

      </table>
    </div>
  </div>)
}

export default EquipmentTable