import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, fbStorage } from "./firebaseConfig";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, QueryDocumentSnapshot, DocumentData, QuerySnapshot, deleteDoc, updateDoc } from "firebase/firestore";


export async function addData(data : IClient) { // Is this allowed??
    const customerRef = collection(db, "Customers");

    await addDoc(customerRef, data)
        .then(docRef => {
            return {success: true}
        })
        .catch(error => {
            return {success: false, error: error}
        })
}

export async function editNote(data: string | null) {
    try {
        const noteRef = doc(db, "Notepad", "main");
        await updateDoc(noteRef, {data});
        return {success: true}
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function createNewCustomer(data: IClient) {
    const customerRef = collection(db, "Customers");
    try {
        await addDoc(customerRef, data)
    } catch (error) {
        return Promise.reject({success: false, error: error}) 
    }
}

export async function deleteDocument(id: string) {
    await deleteDoc(doc(db, "Customers", id))
    .then((value) => {
        return {success: true, res: value}
    }).catch((err) => {
        return {success: false, error: err}
    })
}


export async function updateUser(id: string, updatedData : any) {
    try {
        const cusotmerRef = doc(db, "Customers", id )
        await updateDoc(cusotmerRef, {...updatedData})   
    } catch (error) {
        return Promise.reject(error)
    }

}


export async function addProduct(data: IProduct, blobData: {manualBlob: Blob | null, warrantyBlob: Blob | null}) {
    const prodcutRef = collection(db, 'Products')
    const manualLink =  await uploadFile('Manual', blobData?.manualBlob)
    const warrantyLink =  await uploadFile('Warranty', blobData?.warrantyBlob)
    await addDoc(prodcutRef, {...data, warrantyLink: warrantyLink, manualLink: manualLink})
        .then(docRef => {
            return {success: true}
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

interface InvoiceInput extends ICustomerInvoice {
    invoiceBlob: Blob | null
}
export async function addInvoice(data: InvoiceInput  , uid: string) {
    const invoiceRef = collection(db, `Customers/${uid}/Invoices`)
    try {
        const fileLink = await uploadFile("Invoices", data.invoiceBlob)
        await addDoc(invoiceRef, {invoiceDate: data.invoiceDate, invoiceLink: fileLink});
    } catch (error) {
        return error;
    }
}


export async function uploadFile(fileDir : string, file : Blob | null) : Promise<string>{
    const storageRef = ref(fbStorage, `${fileDir}/${Date.now()}`)

    return uploadBytes(storageRef, file as Blob)
    .then((snapshot) => {
        return getDownloadURL(snapshot.ref)
    }).then((res : string) => {
        return res
    })
    .catch((err)=> {
        console.log(err)
        return 'error'
    })
}

export async function addCustomerEquipment(newEquipmentData: ICustomerEquipment, userId: string) {
    const equipmentRef = collection(db, `/Customers/${userId}/Equipment`)
    return addDoc(equipmentRef, newEquipmentData)
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            return Promise.reject(error)
        })
    
}


export async function addServiceRequest(customerId : string, formData : IServiceRequest) {
    const serviceRequestRef = collection(db, `/Customers/${customerId}/ServiceRequests`)
    try {
        await addDoc(serviceRequestRef, formData);
    } catch (error) {
        return Promise.reject(error)
    }
}