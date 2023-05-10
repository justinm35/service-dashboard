"use client"

import { FC, useState } from 'react'
import { ArrowLeftIcon, CubeIcon, XCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { db } from '@/app/(firebase)/firebaseConfig'
import {collection,addDoc,updateDoc,doc,deleteDoc,setDoc} from "firebase/firestore";
import {addData, addProduct} from '@/app/(firebase)/firebaseMethods'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { convertToBase64 } from '@/app/utils/toBase64'

interface AddCustomerProps {}


const AddCustomer: FC<AddCustomerProps> = ({}) => {
    const router = useRouter()

    const [formData, setFormData] = useState({image: '', modelNum: '', name: '', manualLink: '', warrantyLink: ''})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})  
    }

    const handleUploadFile = async (e: React. ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file : Blob | null = e.target.files[0];
        const base64 : string = await convertToBase64(file);
        setFormData({...formData, image: base64})
    }

    const handleSubmit = (e : React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addProduct(formData)
        setFormData({image: '', modelNum: '', name: '', manualLink: '', warrantyLink: ''})
        router.push('/dashboard/products')
    }



  return (
    <section className="">
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className='font-semibold text-2xl text-gray-500 pb-6 flex items-center'><CubeIcon className='w-9 h-9 mr-2'/>Add a new product</h2>
        <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                    <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="XYZ Lift" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="modelNum" className="block mb-2 text-sm font-medium text-gray-900">Model Number</label>
                    <input value={formData.modelNum} onChange={handleChange} type="text" name="modelNum" id="modelNum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="HS92KLW23" />
                </div>
                <div className="sm:col-span-2 flex gap-6">
                    <div className='w-full gap-6'>
                        <div className='w-full'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload Warranty</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="file_input" type="file"/>
                        </div>
                        <div className='w-full'>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload Manual</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="file_input" type="file"/>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center w-full">
                        {formData.image ? 
                        <div className='className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"'>
                            <div className='flex flex-col items-center justify-center relative h-full w-full'>
                                <button onClick={()=>setFormData({...formData, image: ""})} className='text-gray-300 hover:text-red-500 transition'><XCircleIcon className='w-8 h-8 absolute z-20 -top-4 -right-4' /></button>
                                <Image src={formData.image} fill alt="image" className='object-scale-down p-3'/>
                            </div>
                        </div>:
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <p className="block mb-2 text-sm font-medium text-gray-900">Product Image</p>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF</p>
                                </div>
                                <input onChange={(e)=>handleUploadFile(e)} id="dropzone-file" type="file" className="hidden" accept=".jpeg, .png, .jpg"/>
                            </label>
                        }
                        </div>
                </div> 
                {/* <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                        <option value="12">Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                    </select>
                </div> */}
            </div>
            <div className='w-full flex justify-between'>
                <Link href="/dashboard/clients">
                    <button className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg focus:ring-4 focus:ring-zinc-200 hover:bg-gray-300">
                        <ArrowLeftIcon className='h-4 w-4 text-gray-900 mr-1'/>Back
                    </button>
                </Link>
                <button onClick={(e)=>handleSubmit(e)} className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-500">
                    Add Product
                </button>
            </div>
        </form>
    </div>
  </section>
  )
}

export default AddCustomer