"use client"
import { FC, SetStateAction, useState } from 'react'
import { deleteDocument } from '../(firebase)/firebaseMethods'
import { useRouter } from 'next/navigation'

interface ConfirmDelModalProps {
  setToggleDeleteModal : React.Dispatch<SetStateAction<boolean>>,
  params: {id: string}
}

const ConfirmDelModal: FC<ConfirmDelModalProps> = ({setToggleDeleteModal, params}) => {
    const [delLoadingState, setDelLoadingState] = useState<boolean>(false)
    const router = useRouter()

    const deleteCustomer = async () => {
        setDelLoadingState(true)
        await deleteDocument(params?.id)
        router.push('/dashboard/clients')

    }
    return (
    <div className='w-full h-full absolute left-0 top-0 bg-gray-800 bg-opacity-10 rounded-lg'>
        <div id="deleteModal" aria-hidden="true" className="relative flex h-full items-center justify-center z-50">
            <div className="relative p-4 max-w-md md:h-auto">
                <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                    <button type="button" onClick={()=>setToggleDeleteModal(false)} className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="deleteModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    <p className="mb-4 text-gray-500">Are you sure you want to delete this customer?</p>
                    <div className="flex justify-center items-center space-x-4">
                        <button onClick={()=>setToggleDeleteModal(false)} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
                            No, cancel
                        </button>
                        <button type="submit" onClick={()=>deleteCustomer()} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ConfirmDelModal