
'use client'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Datepicker from "tailwind-datepicker-react" 

interface AddServiceProps {
    params: {id: string}
}

const AddService =  ({ params }: AddServiceProps) => {
    const router = useRouter()

    const[formData, setFormData] = useState<any>({equipmentName: "", equipmentId: "", serialNum: "", serviceDate: "", purchaseDate: ""})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})  
    }  

    const[show1, setShow1] = useState<boolean>(false)
    const[show2, setShow2] = useState<boolean>(false)
    const handleClose1 = (state: boolean) => {setShow1(state)}
    const handleClose2 = (state: boolean) => {setShow2(state)}
  return (
    <div className="max-w-5xl px-4">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white mt-8">Add a Service Call</h2>
    <form>
        <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
            {/* <div className="sm:col-span-2">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                  <select onChange={(e)=>setFormData({...formData, equipmentId: e.target.value, equipmentName: e.target.innerText})}id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Choose a Product</option>
                  </select>
            </div> */}
            <div className='grid gap-4 border border-zinc-200 p-3 rounded-md'>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Technician</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Commode Brand</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">S/N</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Asset #</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
            </div>
            <div className='grid gap-4 border border-zinc-200 p-3 rounded-md'>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Client</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Adress</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Room</label>
                    <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
                </div>
                <div className="w-full">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Purchase</label>
                    <Datepicker onChange={(val: string)=>{setFormData({...formData, purchaseDate: val})}} show={show1} setShow={handleClose1}/>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <button onClick={()=>{}} className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Add Product
            </button>
            <Link href={`dashboard/customer/${params.id}/equipment`} type="button" className="text-gray-400 inline-flex items-center hover:text-gray-800 border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Cancel
            </Link>
        </div>
    </form>
</div>)
}

export default AddService