'use client'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import MyEqupmentTableItem from './MyEqupmentTableItem'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/app/(firebase)/firebaseConfig'
import { DecodedIdToken } from 'firebase-admin/auth'

interface MyEqupmentTableProps {
    session: null | DecodedIdToken,
}

const MyEqupmentTable = ({session}: MyEqupmentTableProps) => {
    const [customerEquipment, setCustomerEquipment] = useState<any>()
    useEffect(() =>{
        const customerEquipmentRef = collection(db, `Customrs/${session?.uid}/Products`)
        getDocs(customerEquipmentRef)
            .then((snapshot) => {
                snapshot.forEach((doc)=>(setCustomerEquipment((prev: any)=>[...prev, {id: doc.id, ...doc.data()}])))
            })
    }, [session])


  return (<div>
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
          {/* {myEquipmentData.map((product) => (
            <MyEqupmentTableItem key={product.id} product={{image: product?.image, modelNum: product?.modelNum, name: product?.name, manualLink: product?.manualLink, warrantyLink: product?.warrantyLink, id: product?.id, category: product?.category}} />
          ))} */}
          
        </tbody>
        </table>
    </div>
  </div>)
}

export default MyEqupmentTable