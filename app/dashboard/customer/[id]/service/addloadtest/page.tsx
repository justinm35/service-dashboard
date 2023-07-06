
'use client'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Datepicker from "tailwind-datepicker-react"
import Textarea from 'react-expanding-textarea'
import { addServiceHistory } from '@/app/(firebase)/firebaseMethods'
import { toast } from 'react-toastify'

interface AddServiceProps {
    params: {id: string}
}

const AddService =  ({ params }: AddServiceProps) => {
    const router = useRouter()
    const[formData, setFormData] = useState<IServiceHistory>({
        technician: "",
        commodeBrand: "",
        serialNum: "",
        assetNum: "",
        client: "",
        address: "",
        room: "",
        date: "",
        loadTestData: [{capacity: "", facilityNum: "", brakesSecure: "", frameHardware: "",
                        seatAndBack: "", legSupport: "", tiltAssem: "", power: "", bucketMount: "", safteyBelt: "", label: ""} ],
        notes: ""})
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
    }
    const handleTableChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const newData : IServiceHistory = { ...formData };
        newData.loadTestData = [...formData.loadTestData];
        (newData.loadTestData[0] as any)[e.currentTarget.name] = e.currentTarget.value;
        setFormData(newData);
    }
    console.log(formData)

    const[show1, setShow1] = useState<boolean>(false)
    const handleClose1 = (state: boolean) => {setShow1(state)}

    const handleSubmit = () => {
        addServiceHistory(params?.id, formData)
            .then(() => {

            })
            .catch((error) => {
                toast.error(`Errpr: ${error}`)
            })
    }

  return (
    <div className="w-full px-4">
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
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                    <Datepicker onChange={(val: string)=>{setFormData({...formData, date: val})}} show={show1} setShow={handleClose1}/>
                </div>
            </div>
        </div>
        {/* Form Internal Data */}
        <div className='grid gap-4 border font-normal border-zinc-200 p-3 rounded-md'>
            <p className='block text-md font-bold text-gray-700'>Commode Asset Form</p>
            <table>
                <thead className='text-left text-sm font-light text-gray-600 border-b border-gray-300 rounded-md'>
                    <tr className='m-2'>
                    <th className='font-normal truncate'>Capcity</th>
                    <th className='font-normal truncate'>Facility #</th>
                    <th className='font-normal truncate'>Brakes Secure</th>
                    <th className='font-normal truncate'>Frame Hardware/Wheels</th>
                    <th className='font-normal truncate'>Seat & Back</th>
                    <th className='font-normal truncate'>Leg Support</th>
                    <th className='font-normal truncate'>Tilt Assem.</th>
                    <th className='font-normal truncate'>Power</th>
                    <th className='font-normal truncate'>Bucket Mnt</th>
                    <th className='font-normal truncate'>Saftey Belt</th>
                    <th className='font-normal truncate'>Labels</th>
                    </tr>
                </thead>
                <tbody>
                <tr className='divide-gray-300 divide-x border-b border-gray-300 py-2 text-sm'>
                    <td>
                        {/* <input className='w-full h-full bg-transparent outline-none ring-0 focus:ring-red-500'/> */}
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="capacity" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="facilityNum" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="brakesSecure" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="frameHardware" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="seatAndBack" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="legSupport" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="tiltAssem" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="power" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="bucketMount" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="safteyBelt" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                    <td>
                        <Textarea
                        className='w-full h-full resize-none text-sm py-0 bg-transparent outline-none ring-0 focus:ring-indigo-500 border-0 '
                        defaultValue={"example"} maxLength={1000} name="label" placeholder="..."
                        onChange={(e)=>handleTableChange(e)}/>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>

        {/* Submit and Cancle buttons */}
        <div className="flex items-center space-x-4 mt-4">
            <button onClick={()=>{}} className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Add Product
            </button>
            <Link href={`dashboard/customer/${params.id}/service`} type="button" className="text-gray-400 inline-flex items-center hover:text-gray-800 border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Cancel
            </Link>
        </div>
    </form>
</div>)
}

export default AddService
