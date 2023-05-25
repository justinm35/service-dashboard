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

    const[formData, setFormData] = useState<any>({equipmentName: "", equipmentId: "", serialNum: "", serviceDate: "", purchaseDate: ""})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})  
    }
    const handleSubmit = (e : React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addCustomerEquipment(formData, params.id)
            .then((res) => {console.log(res)})
            .then(()=>{
                setFormData({equipmentName: "", equipmentId: "", serialNum: "", serviceDate: "", purchaseDate: ""})
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
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white mt-8">Update product</h2>
      <form>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={(e)=>setFormData({...formData, equipmentId: e.target.value, equipmentName: e.target.innerText})}id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
              <Link href={`dashboard/customer/${params.id}/equipment`} type="button" className="text-gray-400 inline-flex items-center hover:text-gray-800 border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Cancel
              </Link>
          </div>
      </form>
  </div>
  )
}

export default AddEquipment