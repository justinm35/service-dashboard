"use client"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { DocumentData } from 'firebase/firestore'
import { FC, useState } from 'react'
import ConfirmDelModal from './ConfirmDelModal'
import { updateUser } from '../(firebase)/firebaseMethods'
import { useRouter } from 'next/navigation'

interface CustomerInfoSideProps {
  customer: DocumentData | undefined,
  params: {id: string}
}

const CustomerInfoSide: FC<CustomerInfoSideProps> = ({customer, params}) => {
    const router = useRouter()
    const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false)
    const [toggleEditMode, setToggleEditMode] = useState<boolean>(false)
    const [editData, setEditData] = useState<any>({firstName : customer?.firstName, lastName: customer?.lastName, email: customer?.email, phone: customer?.phone, notes: customer?.notes})
    
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        setEditData({...editData, [e.currentTarget.name] : e.currentTarget.value})  
    }
    const updateUserData = () => {
        updateUser(params.id, editData)
        setToggleEditMode(false)
        router.refresh()
    }
  
    return (
    <>
    <div className='w-80 h-fit bg-white rounded-lg shadow-sm p-6 text-gray-900 flex flex-col justify-between'>
            {/* <h3>{customer.firstName + " " + customer.lastName}</h3> */}
            <div>
                <h3 className='text-md font-semibold text-gray-700 opacity-90 pb-1'>Customer Info</h3>
                <div className='w-full bg-gray-400 h-0.5 opacity-20 mx-auto my-2'/>
                <div className='flex flex-col'>
                    { toggleEditMode ?<>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60 pb-1'>First Name</h3>
                    <input value={editData.firstName} name="firstName" onChange={handleChange}  className='text-md font-medium mb-2 p-2 border border-gray-300 rounded-md'/>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60 pb-1'>Last Name</h3>
                    <input value={editData.lastName} name="lastName" onChange={handleChange} className='text-md font-medium mb-2 p-2 border border-gray-300 rounded-md'/>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60 pb-1'>E-mail</h3>
                    <input value={editData.email} name="email" onChange={handleChange} className='text-md font-medium mb-2 p-2 border border-gray-300 rounded-md'/>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60 pb-1'>Phone</h3>
                    <input value={editData.phone} name="phone" onChange={handleChange} className='text-md font-medium mb-2 p-2 border border-gray-300 rounded-md'/>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60 pb-1'>Notes</h3>
                    <input value={editData.notes} name="notes" onChange={handleChange} className='text-md font-medium mb-2 p-2 border border-gray-300 rounded-md'/></>
                    :<>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60'>Name</h3>
                    <p className='text-md font-medium pb-2'>{customer?.firstName + " " + customer?.lastName}</p>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60'>E-mail</h3>
                    <p className='text-md font-medium pb-2'>{customer?.email}</p>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60'>Phone</h3>
                    <p className='text-md font-medium pb-2'>{customer?.phone}</p>
                    <h3 className='text-sm font-medium text-gray-700 opacity-60'>Notes</h3>
                    <p className='text-md font-medium pb-2'>{customer?.notes ? customer?.notes : "N/A"}</p></>
                    }
                </div>
            </div>
            <div className='flex justify-between text-gray-800 items-center'>
                {toggleEditMode ? <>
                    <div>
                        <button onClick={()=>{ setEditData({firstName : customer?.firstName, lastName: customer?.lastName, email: customer?.email, phone: customer?.phone, notes: customer?.notes});setToggleEditMode(false)}} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 mr-2">
                            Cancel
                        </button>
                        <button type='submit' onClick={()=>{updateUserData()}} className="py-2 px-3 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300">
                            Confirm
                        </button>
                    </div>
                </> :<PencilSquareIcon onClick={()=>setToggleEditMode(true)}  className='w-5 h-5 hover:text-indigo-500 opacity-70 hover:opacity-100 hover:scale-110 transition'/> }
                <TrashIcon className='w-5 h-5 hover:text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition' onClick={()=>setToggleDeleteModal(!toggleDeleteModal)}/>
            </div>
        </div>
        {toggleDeleteModal ? <ConfirmDelModal setToggleDeleteModal={setToggleDeleteModal} params={params}/> : null}
    </>
  )
}

export default CustomerInfoSide