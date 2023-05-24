'use client'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface MyEqupmentTableItemProps {
  equipment: ICustomerEquipment
}

const MyEqupmentTableItem: FC<MyEqupmentTableItemProps> = ({equipment}) => {
  
  return (
    <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-2 py-2 font-normal text-gray-900">
            <div className=" h-20 w-20  relative">
              {/* <Image fill className="rounded-md" alt="product Image" src={}/> */}
            </div>
          </th>
          <td className="px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{equipment.equipmentId}</div>
            </div>
          </td>
          <td className="px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-zinc-500">{equipment.equipmentId}</div>
            </div>
          </td>
          <td className="px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-zinc-500">{equipment.equipmentId}</div>
            </div>
          </td>
          <td className="px-6 py-4"><a onClick={()=>{}} className='underline opacity-70 hover:opacity-90 cursor-pointer'>View</a></td>
          <td className="px-6 py-4"><a onClick={()=>{}} className='underline opacity-70 hover:opacity-90 cursor-pointer'>View</a></td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <Link href={`/dashboard/equipments/${equipment.equipmentId}/product`}>
                <PencilSquareIcon className='h-5 w-5 transition hover:scale-110'/>
              </Link>
            </div>
          </td>
        </tr>
    )
}

export default MyEqupmentTableItem