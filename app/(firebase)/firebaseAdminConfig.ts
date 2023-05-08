import admin from 'firebase-admin'
import {
  AppOptions,
  cert,
  getApp,
  getApps,
  initializeApp,
  ServiceAccount,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// export const initAdmin  = async() => {
//     try {
//         admin.initializeApp({
//           credential: admin.credential.cert({
//             projectId: process.env.PROJECT_ID,
//             clientEmail: process.env.CLIENT_EMAIL,
//             privateKey: process.env.PRIVATE_KEY,
//           }),
//           databaseURL: 'asd'
//         });
//         console.log('Initialized.')
//       } catch (error: any) {
//         if (!/already exists/u.test(error.message)) {
//           console.error('Firebase admin initialization error', error.stack)
//         }
//       }
// }


// const credentials: ServiceAccount = {
//   projectId: process.env.PROJECT_ID,
//   clientEmail: process.env.CLIENT_EMAIL,
//   privateKey: process.env.PRIVATE_KEY,
// }

// const options: AppOptions = {
//   credential: cert(credentials),
// };


function createFirebaseAdminApp() {
  if(getApps().length === 0) {
    return initializeApp({
                credential: admin.credential.cert({
                  projectId: process.env.PROJECT_ID,
                  clientEmail: process.env.CLIENT_EMAIL,
                  privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
                }),
              });
  } else {
    return getApp();
  }
}


const firebaseAdmin = createFirebaseAdminApp();
export const adminAuth = getAuth(firebaseAdmin);