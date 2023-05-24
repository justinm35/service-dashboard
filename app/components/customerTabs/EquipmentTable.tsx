import { db } from '@/app/(firebase)/firebaseConfig'
import { PlusIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import { FC } from 'react'
import EquipmentTableItem from './EquipmentTableItem'

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
                  <>
                  {/* @ts-expect-error Server Component */}
                  <EquipmentTableItem key={equipment.id} equipment={JSON.parse(JSON.stringify(equipment))}/>
                  </>
                )
            })}
       
        </tbody>

      </table>
    </div>
  </div>)
}

export default EquipmentTable