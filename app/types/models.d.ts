interface IClient {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    serviceDue : boolean,
    visits: string[],
    phone: string,
    notes?: string,
    verified?: boolean
}

interface IProduct {
    id?: string
    image?: string,
    manualLink?: string,
    category: string,
    modelNum: string,
    name: string,
    warrantyLink?: string,
}

declare module 'tailwind-datepicker-react'