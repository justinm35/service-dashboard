import { DocumentReference } from "firebase/firestore";

export interface ICustomerEquipment {
    id?: string,
    equipmentName?: string,
    equipmentId : string,
    purchaseDate: string,
    serialNum: string,
    serviceDate: string,
    customerRef?: DocumentReference
    customerName?: string,
}
