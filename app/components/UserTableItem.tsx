"use client"
import { ArrowLongRightIcon, ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC, useState } from 'react'

interface UserTableItemProps {}

const UserTableItem = ({client} : {client : IClient}) => {

  return (
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-700">{client.firstName + " " + client.lastName}</div>
              <div className="text-gray-400">{client.email}</div>
            </div>
          </th>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{client.phone}</div>
            </div>
          </td>

          <td className="px-6 py-4">
            {client.serviceDue ? <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
              Service Due
            </span> : 
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Good
            </span> }
          </td>
          <td className="px-6 py-4">{client.visits.length}</td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              3
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <Link href={`/dashboard/customer/${client.id}/equipment`}>
                <ArrowLongRightIcon className='h-5 w-5'/>
              </Link>
            </div>
          </td>
        </tr>
  )
}

export default UserTableItem