import { DocumentReference, Timestamp } from "firebase/firestore";

export interface ICustomerEquipment {
    id?: string,
    equipmentName?: string,
    equipmentId : string,
    purchaseDate: string,
    serialNum: string,
    serviceDate: Timestamp,
    customerRef?: DocumentReference
    customerName?: string,
}
