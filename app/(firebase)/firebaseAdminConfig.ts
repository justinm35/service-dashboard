import admin from 'firebase-admin'
export const initAdmin  = async() => {
    try {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: process.env.PROJECT_ID,
            clientEmail: process.env.CLIENT_EMAIL,
            privateKey: process.env.PRIVATE_KEY
          })
        });
        console.log('Initialized.')
      } catch (error: any) {
        if (!/already exists/u.test(error.message)) {
          console.error('Firebase admin initialization error', error.stack)
        }
      }
}


