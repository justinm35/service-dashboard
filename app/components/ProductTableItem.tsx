"use client"
import { ArrowLongRightIcon, ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface ProductTableItemProps {
  product: IProduct
}

const ProductTableItem = ({product} : ProductTableItemProps) => {

  return (
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-2 py-2 font-normal text-gray-900">
            <div className=" h-20 w-20  relative">
              <Image fill className="rounded-md" alt="product Image" src={`${product.image}`}/>
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
          <td className="px-6 py-4">{product.warrantyLink}</td>
          <td className="px-6 py-4">{product.manualLink}</td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <Link href={`/dashboard/customer/${product.id}/equipment`}>
                <ArrowLongRightIcon className='h-5 w-5'/>
              </Link>
            </div>
          </td>
        </tr>
  )
}

export default ProductTableItem