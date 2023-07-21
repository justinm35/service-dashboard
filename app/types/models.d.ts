
declare global {
    interface Window {
        Timestamp: Timestamp;
    }
  }
interface IClient {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    notes?: string,
    verified?: boolean,
    linkUID?: string,
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

interface ICustomerInvoice {
    id?: string,
    invoiceDate: Timestamp,
    invoiceLink?: string,
}
interface ILoadTestData {
    capacity: string,
    facilityNum: string,
    brakesSecure: string,
    frameHardware: string,
    seatAndBack: string,
    legSupport: string,
    tiltAssem: string,
    power: string,
    bucketMount: string,
    safteyBelt: string,
    label: string
}
interface IServiceHistory {
    id?: string,
    technician: string,
    commodeBrand: string,
    serialNum: string,
    assetNum: string,
    client: string,
    address: string,
    room: string,
    date: Timestamp,
    loadTestData: ILoadTestData[],
    notes: string
}


declare module 'tailwind-datepicker-react'
