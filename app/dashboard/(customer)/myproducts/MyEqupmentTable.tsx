'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import MyEqupmentTableItem from './MyEqupmentTableItem'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/app/(firebase)/firebaseConfig'
import { DecodedIdToken } from 'firebase-admin/auth'
import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'

interface MyEqupmentTableProps {
    session: null | DecodedIdToken,
}

const MyEqupmentTable = ({session}: MyEqupmentTableProps) => {
  
    const [customerEquipment, setCustomerEquipment] = useState<ICustomerEquipment[] | null>(null)

    useEffect(()=>{
      fetchCollection(`Customers/o7Wxjb9ZCmG5vEqrgaZP/Equipment`)//change this to variable ID
      .then((equipmentData) => {
        setCustomerEquipment(equipmentData)
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])

    if(customerEquipment){
      return (
        <div>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                  <tr>
                  <th scope="col" className="px-6 w-5 font-medium text-gray-900"></th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900 flex items-center w-3">Name
                      <button className='ml-1 p-1 border border-gray-300/70 rounded-md text-gray-500'><ChevronUpIcon className='w-2 h-2'/><ChevronDownIcon className='w-2 h-2'/></button>
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Model #</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Category</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Warranty</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Manual</th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {customerEquipment.map((equipment: ICustomerEquipment) => (
                  <MyEqupmentTableItem key={equipment.id} equipment={{equipmentId : equipment?.equipmentId, purchaseDate: equipment.purchaseDate, serialNum: equipment.serialNum, serviceDate: equipment.serviceDate}} />
                ))}
                
              </tbody>
              </table>
          </div>
        </div>)
    }else if(customerEquipment === null){
      return(<p>Loading</p>)
    }else{
      return(<p>Nothing to see here.</p>)
    }
}

export default MyEqupmentTable