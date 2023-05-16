'use client'

import { db } from '@/app/(firebase)/firebaseConfig'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
interface pageProps {
  params: {id: string}
}



const page = ({params}: pageProps) => {

    const [toggleEdit, setToggleEdit] = useState<boolean>(false)
    const [product, setProduct] = useState<any>()
      useEffect(() => {
      const getProduct = async () => {
        const productsRef = doc(db, "Products", params?.id)
        const productsSnap = await getDoc(productsRef)
        let product : DocumentData | undefined =  productsSnap.data()
        setProduct(product)
      }
      getProduct()
    })
    
  return (
    <div className='h-screen w-full p-10'>
      <Link href="/dashboard/products" className='opacity-40 flex mb-6 items-center text-[14px] hover:text-indigo-500 hover:opacity-100'><ArrowLeftIcon className='w-4 h-4 mr-1'/>Back to the product dashboard</Link>
      <div className='flex flex-col space-y-5 h-full'> 
        
        <div className='flex space-x-10'>
          <div className='w-40 h-40 relative'>
            <Image src={product?.image} alt="product image" fill className='rounded-md'/>
          </div>
          <div>
            <h2 className='font-semibold text-sm text-gray-400'>Name</h2>
            <p className='font-medium text-md text-gray-800 pb-2'>{product?.name}</p>
            <h2 className='font-semibold text-sm text-gray-400'>Model Number</h2>
            <p className='font-medium text-md text-gray-800 pb-2'>{product?.modelNum}</p>
          </div>
        </div>

        <div className='flex space-x-10 h-1/3 w-3/4'>
          <div className='w-1/2 h-full  rounded-md border border-gray-200/100 z-20 p-4 m-auto left-0 right-0 top-20'>
            <h1 className='text-gray-900 font-medium mb-4'>Manual</h1>
            <iframe className='w-full h-full pb-8' src={product?.manualLink}/>
          </div> 
          <div className='w-1/2 h-full rounded-md border border-gray-200/100 z-20 p-4  m-auto left-0 right-0 top-20'>
            <h1 className='text-gray-900 font-medium mb-4'>Warranty</h1>
            <iframe className='w-full h-full pb-8' src={product?.warrantyLink}/>
          </div> 
        </div>

        {toggleEdit ? 
        <div className='flex gap-2'>
           <button onClick={() => setToggleEdit(false)} className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg focus:ring-4 focus:ring-zinc-200 hover:bg-gray-300 border-2 border-zinc-300">
           Cancel
          </button>
           <button className="transition inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-orange-300 hover:bg-orange-500">
           Confirm
          </button>
        </div> :
        <button onClick={() => setToggleEdit(true)} className="transition inline-flex items-center justify-center w-28 px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg focus:ring-4 focus:ring-zinc-200 hover:bg-gray-300 border-2 border-zinc-300">
        Edit
       </button>
        }

      </div>
    </div>
    )
}

export default page