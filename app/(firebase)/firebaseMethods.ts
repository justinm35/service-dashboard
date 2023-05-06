import { db } from "./firebaseConfig";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, QueryDocumentSnapshot, DocumentData, QuerySnapshot, deleteDoc } from "firebase/firestore";


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