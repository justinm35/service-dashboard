"use client"
import { ArrowLongRightIcon, ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon, CheckBadgeIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC, useState } from 'react'

interface UserTableItemProps {}

const UserTableItem = ({client} : {client : IClient}) => {

  return (
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-700 flex items-center">{client.firstName + " " + client.lastName}{client?.verified ? <CheckBadgeIcon className='h-5 w-5 text-orange-400 ml-1'/> : null}</div>
              <div className="text-gray-400">{client.email}</div>
            </div>
          </th>
          <td className="px-6 py-4font-normal text-gray-900">
            <div className="text-sm">
              <div className="font-medium text-gray-600">{client.phone}</div>
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

export default UserTableItem