
"use client"
import Datepicker from "tailwind-datepicker-react" 
import { FC, useState } from 'react'
import { MouseEventHandler } from "react"
import { addInvoice, uploadFile } from "@/app/(firebase)/firebaseMethods"
import { useRouter } from "next/navigation"

interface AddInvoiceProps {
    customerUid: string;
}

const AddInvoice: FC<AddInvoiceProps> = ({customerUid}) => {
const router = useRouter()

    const[show, setShow] = useState<boolean>(false)
    const handleClose = (state: boolean) => {setShow(state)}

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{invoiceDate: string, invoiceBlob: Blob | null}>({invoiceDate: "", invoiceBlob: null})
    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(formData.invoiceDate && formData.invoiceBlob){
            setIsLoading(true);
            addInvoice(formData, customerUid)
                .then(()=>{
                    setFormData({invoiceDate: "", invoiceBlob: null});
                    router.refresh()
                })
                .catch((err)=>{
                    console.log(err)
                })
                .finally(()=>{
                    setIsLoading(false);
                })
        }
    }


  return (
    <>
    <div className=" border border-gray-200/100 rounded-lg p-4 my-3">
    <h3 className="mb-3 font-semibold text-base text-gray-700">Add Invoice</h3>
    <form className='flex w-full items-end space-x-4'>
        <div className='w-full'>
            <label htmlFor="item-weight" className=" text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <Datepicker onChange={(val: string)=>{setFormData({...formData, invoiceDate: val})}} show={show} setShow={handleClose}/>
        </div>
        <div className='w-full'>
            <label className="text-sm font-medium text-gray-900">PDF</label>
            <input name="manualBlob" onChange={(e)=>{if(!e.target.files)return;setFormData({...formData, invoiceBlob: e.target.files[0]})}} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" type="file"/>
            </div>
        <div className='min-w-fit'>
            <button type="submit" disabled={isLoading ? true : false} onClick={(e)=>handleSubmit(e)} className='flex items-center justify-center py-2 px-4 text-sm font-medium text-center text-white border bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-400'>
            {/* <PlusIcon className="mr-3"/> */}
            {isLoading ? "Adding Invoice..." : "Add Invoice"}
            </button>
        </div>
    </form>
    </div>
    </>
  )
}

export default AddInvoice