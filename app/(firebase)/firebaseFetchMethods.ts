import { cache, useRef } from "react";
import { db } from "./firebaseConfig";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, QueryDocumentSnapshot, DocumentData, QuerySnapshot, deleteDoc, updateDoc, collectionGroup, where, query, Timestamp, AggregateQuerySnapshot, AggregateField, getCountFromServer } from "firebase/firestore";
import { dbAdmin } from "./firebaseAdminConfig";

/**
 * This will return a the entire collection from firebase using the input params
 * @name FetchEntireFirebaseCollection
 * @function
 * @param {the string you want to call} URI
 * @returns {an object or an error returned for firestore db}
 */
export const fetchCollection = cache(async (URI: string):Promise<any> => {
    try {
        const snapshot = await getDocs(collection(db, URI))
        let collectionData: any = [];
        snapshot.forEach((doc: any) => {
            collectionData.push({id: doc.id, ...doc.data()})
        })
        return collectionData;
        // const collectionRef = dbAdmin.collection(URI);
        // const snapshot = await collectionRef.get();
        // let collectionData: any = [];
        // snapshot.docs.forEach((doc: any) => {
        //     collectionData.push({id: doc.id, ...doc.data()})
        // })
        // return collectionData;
    } catch (error : undefined | any) {
        console.log(error)
        return error
    }
})

// export const fetchCollectionTest = cache(async (URI: string):Promise<any> => {
//     try {
//         const collectionRef = dbAdmin.collection(URI);
//         const snapshot = await collectionRef.get();
//         let collectionData: any = [];
//         snapshot.docs.forEach((doc: any) => {
//             collectionData.push({id: doc.id, ...doc.data()})
//         })
//         return collectionData;
//     } catch (error : undefined | any) {
//         console.log(error)
//         return error
//     }
// })

export const fetchCollectionGroup = cache(async (URI: string):Promise<any>=> {
    try {
        const snapshot = await getDocs(collectionGroup(db, URI))
        let collectionData: any = [];
        snapshot.forEach((doc) => {
            collectionData.push({id: doc.id, creatorId: doc.ref.parent.parent, ...doc.data()})
        })
        return collectionData
    } catch (error : undefined | any) {
        return error
    }

})


export const fetchDocumentById = cache(async (collectionURI: string, docId: string):Promise<any>=> {
    try {
        const snapshot = await getDoc(doc(db, collectionURI, docId))
        return snapshot.data()
    } catch (error : undefined | any) {
        return Promise.reject({success: false, error: error})
    }

})


export const fetchEquipmentDueForService = cache( async ():Promise<any>=> {
    const currentDate = Timestamp.now();
    try {
        const servicableEquipment = query(collectionGroup(db, "Equipment"), where('serviceDate', '<=', currentDate))
        let collectionData: any = [];
        const querySnapshot = await getDocs(servicableEquipment)
        querySnapshot.forEach((doc) => {
            collectionData.push({id: doc.id, creatorId: doc.ref.parent.parent, ...doc.data()})
        })
        return collectionData
    } catch (error : undefined | any) {
        console.log(error)
        return error
    }

})

export const fetchCollectionQuantity = cache( async (collectionURI: string): Promise<any> => {
    try {
        const customerColl = collection(db, collectionURI)
        return (await getCountFromServer(customerColl)).data().count
    } catch (error) {
        Promise.reject(error)
    }
})
