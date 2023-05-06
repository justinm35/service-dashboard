import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import admin from 'firebase-admin'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ3r4khOTKup_0hMBnzM1xSEHiY1F4cd4",
  authDomain: "tas-service-4edba.firebaseapp.com",
  projectId: "tas-service-4edba",
  storageBucket: "tas-service-4edba.appspot.com",
  messagingSenderId: "398880198454",
  appId: "1:398880198454:web:53826a99bc2775ce416d97",
  measurementId: "G-EN5XK230T6"
};


let firebase_app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(firebase_app)
// const analytics = getAnalytics(firebase_app);

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: process.env.PROJECT_ID,
//     clientEmail: process.env.CLIENT_EMAIL,
//     privateKey: process.env.PRIVATE_KEY
//   })
// });

export { firebase_app, db }