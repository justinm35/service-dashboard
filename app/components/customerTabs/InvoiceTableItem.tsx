import { format } from 'date-fns'
import { FC } from 'react'

interface InvoiceTableItemProps {
    key: string, 
    invoice: any
}

const InvoiceTableItem: FC<InvoiceTableItemProps> = ({invoice, key}) => {
  return (
    <tr key={invoice?.id}>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {format(new Date(invoice?.createdAt?.seconds * 1000), 'MMM d, yyyy')}
    </td>
    <td className="border-t-0 px-6 font-bold text-gray-600 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
    {invoice?.invoiceURL}
    </td>
    </tr>
    )
}

export default InvoiceTableItem