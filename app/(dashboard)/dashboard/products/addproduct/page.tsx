"use client"

import { FC, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { db } from '@/app/(firebase)/firebaseConfig'
import {collection,addDoc,updateDoc,doc,deleteDoc,setDoc} from "firebase/firestore";
import {addData} from '@/app/(firebase)/firebaseMethods'
import { useRouter } from 'next/navigation'

interface AddCustomerProps {}


const AddCustomer: FC<AddCustomerProps> = ({}) => {
    const router = useRouter()

    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", serviceDue: false, visits: [], phone: "", notes: ""})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})  
    }
    console.log(formData)
    const handleSubmit = (e : React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const res = addData({...formData})
        setFormData({firstName: "", lastName: "", email: "", serviceDue: false, visits: [], phone: "", notes: ""});
        router.push('/dashboard/clients')
    }



  return (
    <section className="">
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className='font-semibold text-2xl text-gray-500 pb-6'>Add a new product</h2>
        <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Item Name</label>
                    <input value={formData.firstName} onChange={handleChange} type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="XYZ Lift" />
                </div>
                <div className="w-full">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                    <input value={formData.lastName} onChange={handleChange} type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input value={formData.email} onChange={handleChange} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="janedoe1212@example.com" />
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                    <input value={formData.phone} onChange={handleChange} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="444-444-4444" />
                </div>
                <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                        <option value="12">Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                    <textarea id="notes" value={formData.notes} onChange={(e)=>setFormData({...formData, "notes" : e.target.value  })} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Any customer notes here"></textarea>
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <Link href="/dashboard/clients">
                    <button className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg focus:ring-4 focus:ring-zinc-200 hover:bg-gray-300">
                        <ArrowLeftIcon className='h-4 w-4 text-gray-900 mr-1'/>Back
                    </button>
                </Link>
                <button onClick={()=>{}} className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-500">
                    Add Customer
                </button>
            </div>
        </form>
    </div>
  </section>
  )
}

export default AddCustomer