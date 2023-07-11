"use client"

import { db } from '@/app/(firebase)/firebaseConfig'
import { format } from 'date-fns';
import { DocumentData, getDoc} from 'firebase/firestore'
import { doc, getDocFromCache } from "firebase/firestore";
import { FC } from 'react'

interface EquipmentTableItemProps {
  key: string,
  equipment: any
}

const EquipmentTableItem = async ({equipment, key} : EquipmentTableItemProps) => {

    const equipmentNameDocref = await getDoc(doc(db, "Products", equipment?.equipmentId))

  return (
    <tr key={equipment.id}>
    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
    {equipmentNameDocref.data()?.name}
    </th>
    <td className="border-t-0 px-6 font-bold text-gray-600 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
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
}

export default EquipmentTableItem
