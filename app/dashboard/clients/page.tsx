"use client"
import { db } from '@/app/(firebase)/firebaseConfig'
import UserTableItem from '@/app/components/UserTableItem'
import { DocumentData, collection, getDoc, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { FC, use, useEffect, useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { fetchCollection } from '@/app/(firebase)/firebaseFetchMethods'

interface ClientProps {}
const Client = ({}) => {
    const [customerData, setCustomerData] = useState<IClient[] | null>(null)

    useEffect(()=>{
        fetchCollection('Customers')
            .then((data)=>{
                setCustomerData(data)
            })
            .catch((error)=>{
                console.log(error)
                return(<p>{JSON.stringify(error)}</p>)

            })
    }, [])

    if(customerData == null){
        return(null)
    }else{
        return (
            <div className='w-full h-full p-10'>
                <h2 className='font-semibold text-2xl text-gray-500 pb-6'>All Customers</h2>
                <div className='w-full flex justify-between mb-3'>
                    <Link href="/dashboard/clients/addcustomer" className=' max-w-md w-42 py-3 px-5 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>New Customer</Link>
                    <div className="items-center space-y-4 sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <input className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-orange-500 focus:border-orange-500 " placeholder="Search by name or email" type="search" id="search" />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-orange-400 border-orange-500 sm:rounded-none sm:rounded-r-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300">Search</button>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 flex items-center">Name
                            <button className='ml-1 p-1 border border-gray-300/70 rounded-md text-gray-500'><ChevronUpIcon className='w-2 h-2'/><ChevronDownIcon className='w-2 h-2'/></button>
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Equipment Qty.</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {customerData.map((customer: IClient) => {
                            return <UserTableItem key={customer.id} client={{firstName: customer.firstName,lastName: customer.lastName, email: customer.email, phone: customer.phone, id: customer.id, verified: customer.verified}} />
                        })}
                    </tbody>
                    </table>
                </div>
        </div>
            )
    }
}

export default Client