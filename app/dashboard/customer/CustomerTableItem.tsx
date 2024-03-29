"use client"
import { ArrowLongRightIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface CustomerTableItemProps {}

const CustomerTableItem = ({client} : {client : IClient}) => {

  return (
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-700 flex items-center">
                {client.firstName + " " + client.lastName}
                {!client.linkUID ? null : <LinkIcon className='h-5 w-5 text-zinc-500 ml-1'/>}
                </div>
              <div className="text-gray-400">{client.email}</div>
            </div>
          </th>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{client.phone}</div>
            </div>
          </td>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{client.address}</div>
            </div>
          </td>
          <td className="px-6 py-4">
          <div className="flex justify-end gap-4 hover:scale-110 transition">
              <Link href={`/dashboard/customer/${client.id}/equipment`}>
                <ArrowLongRightIcon className='h-5 w-5'/>
              </Link>
            </div>
          </td>
        </tr>
  )
}

export default CustomerTableItem
