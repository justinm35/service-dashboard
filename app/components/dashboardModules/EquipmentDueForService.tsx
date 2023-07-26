'use client'
import { fetchEquipmentDueForService } from '@/app/(firebase)/firebaseFetchMethods'
import { ICustomerEquipment } from '@/app/types/globalScoped'
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface EquipmentDueForServiceProps {}

const EquipmentDueForService: FC<EquipmentDueForServiceProps> = ({}) => {
    const [servicableEquipmentData, setServicableEquipmentData] = useState<ICustomerEquipment[] | null>(null)

    useEffect(() => {
        fetchEquipmentDueForService()
        .then((data) => {
            setServicableEquipmentData(data)
        })
        .catch((error) => {
            toast.error("Error:", error)
        })
    }, [])

return (
    <>
    <div className="w-full">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
      <div className="rounded-t mb-0 px-4 py-4 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-2 max-w-full flex-grow flex-1">
            <h3 className='text-xl font-bold text-gray-700'>Equipment due for service</h3>
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full border-collapse text-blueGray-700  ">
          <thead className="thead-light ">
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Equipment
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Date to now
              </th>
            </tr>
          </thead>
          <tbody>
            {servicableEquipmentData?.map((equipmentData)=> {
              let distanceInWords = formatDistanceToNow(new Date(equipmentData.serviceDate.seconds * 1000))
                return(
                    <tr key={equipmentData.id}>
                    <th className="flex flex-col border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left truncate">
                        {equipmentData.equipmentName}
                        <span className="font-normal text-xs text-gray-400">{equipmentData.customerName}</span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                        <span className="mr-2">{distanceInWords}</span>
                        </div>
                    </td>
                    </tr>
                )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </>
  )
}

export default EquipmentDueForService
