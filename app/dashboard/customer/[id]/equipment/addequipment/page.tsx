'use client'
import { db } from '@/app/(firebase)/firebaseConfig'
import { addCustomerEquipment } from '@/app/(firebase)/firebaseMethods'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import {  MouseEventHandler, useEffect, useState } from 'react'
import Datepicker from "tailwind-datepicker-react" 
import { useRouter } from 'next/navigation'


interface AddEquipmentProps {
    params: {id: string}
}

const AddEquipment = ({params}: AddEquipmentProps) => {
    const router = useRouter()

    const[formData, setFormData] = useState<any>({equipmentId: "", serialNum: "", serviceDate: "", purchaseDate: ""})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})  
    }
    const handleSubmit = (e : React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addCustomerEquipment(formData, params.id)
            .then((res) => {console.log(res)})
            .then(()=>{
                setFormData({equipmentId: "", serialNum: "", serviceDate: "", purchaseDate: ""})
                router.push(`dashboard/customer/${params.id}/equipment`)
            })
            .catch((err)=> {console.log(err)})
                
    }

	const[show1, setShow1] = useState<boolean>(false)
    const[show2, setShow2] = useState<boolean>(false)
    const handleClose1 = (state: boolean) => {setShow1(state)}
    const handleClose2 = (state: boolean) => {setShow2(state)}

    const productsRef = collection(db, 'Products')
    const [productsList, setProductsList] = useState<{id: string, name: string}[]>([]);
    console.log(productsList)
    useEffect(() => {
        getDocs(productsRef)
            .then((products) => {
                products.forEach((doc) => {setProductsList((prev)=>[...prev, {id: doc.id, name: doc.data().name}])})
            }).catch((err) => {
                console.log(err)
            })
    }, [])
  return (
    <div className="max-w-2xl px-4">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update product</h2>
      <form>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={(e)=>setFormData({...formData, equipmentId: e.target.value})}id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Choose a Product</option>
                    {productsList.map((data) => {
                        return (<option key={data.id} value={data.id}>{data.name}</option>)
                    })}
                    </select>
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Serial Number</label>
                  <input onChange={handleChange} type="text" name="serialNum" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="JW293KSS9201" />
              </div>
              <div className="w-full">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Purchase</label>
                    <Datepicker onChange={(val: string)=>{setFormData({...formData, purchaseDate: val})}} show={show1} setShow={handleClose1}/>
              </div>
              <div>
                  <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Date</label>
                  <Datepicker onChange={(val: string)=>{setFormData({...formData, serviceDate: val})}} show={show2} setShow={handleClose2}/>
              </div> 
          </div>
          <div className="flex items-center space-x-4">
              <button onClick={handleSubmit} className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Add Product
              </button>
              <Link href={`dashboard/customer/${params.id}/equipment`} type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                  <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    Cancel
              </Link>
          </div>
      </form>
  </div>
  )
}

export default AddEquipment