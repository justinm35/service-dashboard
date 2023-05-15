"use client"
import { ArrowLongRightIcon, ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import defaultPng from '/public/default-placeholder.png'
import { Document } from 'react-pdf/dist/esm/entry.webpack5';

interface ProductTableItemProps {
  product: IProduct
}

const ProductTableItem = ({product} : ProductTableItemProps) => {
  
  const [prevPDF, setPrevPDF] = useState<string | undefined>()

  return (<>
          {prevPDF ? 
          <div className='w-1/2 h-full  bg-white absolute rounded-md shadow-lg z-20  m-auto left-0 right-0 top-20'>
          <button className=' text-gray-900' onClick={()=>setPrevPDF(undefined)}><XMarkIcon className='w-5 h-5 mt-2 ml-2'/></button>
          <iframe className='absolute w-full h-full pl-5 pr-5 pb-10' src={prevPDF}/>
          </div> 
          // <Document
          // file={prevPDF}
          // options={{ workerSrc: "/pdf.worker.js" }}></Document>
          : null}
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-2 py-2 font-normal text-gray-900">
            <div className=" h-20 w-20  relative">
              <Image fill className="rounded-md" alt="product Image" src={product.image ? `${product.image}` : `${defaultPng}`}/>
            </div>
          </th>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{product.name}</div>
            </div>
          </td>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{product.modelNum}</div>
            </div>
          </td>
          <td className="px-6 py-4"><a onClick={()=>setPrevPDF(product.warrantyLink)} className='underline opacity-50 hover:opacity-90 cursor-pointer'>View</a></td>
          <td className="px-6 py-4"><a onClick={()=>setPrevPDF(product.manualLink)} className='underline opacity-50 hover:opacity-90 cursor-pointer'>View</a></td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <Link href={`/dashboard/products/${product.id}/edit`}>
                <PencilSquareIcon className='h-5 w-5 transition hover:scale-110'/>
              </Link>
            </div>
          </td>
        </tr>
        </>
  )
}

export default ProductTableItem