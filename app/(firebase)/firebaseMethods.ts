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
            return {success: true, error: error}
        })
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
        console.log(error)
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
            return {success: true, error: error}
        })
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
        return 'error'
        console.log(err)
    })
}

export async function addCustomerEquipment(newEquipmentData: any, userId: string) {
    const equipmentRef = collection(db, `/Customers/${userId}/Equipment`)
    return addDoc(equipmentRef, newEquipmentData)
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    
}