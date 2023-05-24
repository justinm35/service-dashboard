import { cache, useRef } from "react";
import { db, fbStorage } from "./firebaseConfig";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, QueryDocumentSnapshot, DocumentData, QuerySnapshot, deleteDoc, updateDoc } from "firebase/firestore";

/**
 * This will return a the entire collection from firebase using the input params
 * @name FetchEntireFirebaseCollection
 * @function
 * @param {the string you want to call} URI
 * @returns {an object or an error returned for firestore db}
 */
export const fetchCollection = cache(async (URI: string):Promise<any>=> {
    try {
        const snapshot = await getDocs(collection(db, URI))
        let collectionData: any = [];
        snapshot.forEach((doc: any) => {
            collectionData.push({id: doc.id, ...doc.data()})
        })
        return collectionData
    } catch (error : undefined | any) { 
        console.log(error)
        return error
    }

})


export const fetchDocumentById = cache(async (collectionURI: string, docId: string):Promise<any>=> {
    try {
        const snapshot = await getDoc(doc(db, collectionURI, docId))
        return snapshot.data()
    } catch (error : undefined | any) { 
        console.log(error)
        return error
    }

})

