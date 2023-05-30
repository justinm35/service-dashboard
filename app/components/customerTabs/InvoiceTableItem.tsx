import { format } from 'date-fns'
import { FC } from 'react'

interface InvoiceTableItemProps { 
    invoice: any
}

const InvoiceTableItem: FC<InvoiceTableItemProps> = ({invoice}) => {
    const invoiceItem = JSON.parse(invoice)
    return (
    <tr key={invoiceItem.id}>
    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {format(new Date(invoiceItem?.invoiceDate?.seconds * 1000), 'MMM d, yyyy')}
    </td>
        <td className="border-t-0 px-6 font-bold text-gray-600 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        <a target="_blank" href={invoiceItem?.invoiceLink}>Link</a>
        </td>
    </tr>
    )
}

export default InvoiceTableItem