"use client"
import SerbviceHistoryDropdownBtn from '@/app/components/ServiceHistoryDropdownBtn'
import { PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FC, useState } from 'react'
import ServiceHistoryTableItem from './ServiceHistoryTableItem'

interface ServiceHistoryTableProps {
    params: {id: string}
    serviceHistoryData: IServiceHistory[]
}

const ServiceHistoryTable: FC<ServiceHistoryTableProps> = ({serviceHistoryData, params}) => {
  let [displayedServiceData, setDisplayedServiceData] = useState<null | string>(null)
  console.log(displayedServiceData)
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded ">
    <div className=" w-full rounded-t mb-0 px-4 py-3 border-0">
      <div className="w-full flex flex-wrap items-center">
        <div className="relative w-full px-2 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Servcie History</h3>
        </div>
        <SerbviceHistoryDropdownBtn params={params}/>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Address
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Asset #
            </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Commode Brand
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Technician
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            </th>
          </tr>
        </thead>
        <tbody>
          {serviceHistoryData.map((data: IServiceHistory) => {
            return(
              <ServiceHistoryTableItem setDisplayedServiceData={setDisplayedServiceData} serviceHistoryRecord={data} />
            )
          })}

        </tbody>

      </table>
    </div>
  </div>
    )
}

export default ServiceHistoryTable
