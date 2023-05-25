import { Timestamp } from "firebase/firestore"

interface IClient {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
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

interface ICustomerEquipment {
    id?: string,
    equipmentName?: string,
    equipmentId : string,
    purchaseDate: string,
    serialNum: string,
    serviceDate: string,
}

interface IServiceRequest {
    id: string
    createdAt: Timestamp
    creatorId?: string
    creatorName?: string
    equipmentId: string
    equipmentName: string
    problemDesc: string
    problemUrgency: string
}

declare module 'tailwind-datepicker-react'