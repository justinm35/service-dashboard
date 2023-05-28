import { firebase_app } from "./firebaseConfig";
import { UserCredential, sendPasswordResetEmail, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut as signOutSession } from "firebase/auth";
import { setCookie, deleteCookie } from "cookies-next";
import { addData, createNewCustomer } from "./firebaseMethods";
import { adminAuth } from "./firebaseAdminConfig";

export const auth = getAuth(firebase_app);

export async function signUp(email : string, password : string) {
    let newCustUid: string;
    return  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        newCustUid = result.user.uid;
        return result.user.getIdToken()
    })
    .then((token) => {
        setCookie('cookieKey', token, {maxAge: 60 * 6 * 24 })
        return token
    }).then((token) => {
        createNewCustomer({firstName: "", lastName: "", email: email, phone: "", notes: "",}, newCustUid)
        return('success')
    })
    .catch((err) => {
        console.log(err.code)
        switch (err.code) {
            case "auth/email-already-exists":
                throw new Error ('That email is already in use.')
            case "auth/weak-password":
                throw new Error ('Password should be at least 6 characters')
            default:
                throw new Error ('Hmm, something went wrong, try again!')
        }
    })
}

export async function signIn(email: string, password: string) {
    
    return signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            return result.user.getIdToken()
        })
        .then((token) => {
            setCookie('cookieKey', token, {maxAge: 60 * 6 * 24 })
            return('success')
        })
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                    throw new Error ('That email does not exist.')
                case "auth/wrong-password":
                    throw new Error ('Wrong password.')
                default:
                    throw new Error ('Hmm, something went wrong, try again!')
            }
        })
        
}

export async function resetPass(email : string) {
    return sendPasswordResetEmail(auth, email)
        .then(() => {
            return('Success')
        }).catch((err) => {
            switch (err.code) {
                case "auth/user-not-found":
                    throw new Error ('That email does not seem to exist.')
                default:
                    throw new Error ('Hmm, something went wrong, try again!')
            }
        })
}


export async function signOut() {
    let result = null,
        error = null;
    try {
        result = await signOutSession(auth) 
        deleteCookie('cookieKey')
    } catch (e) {
        error = e
    }
    return { result, error };
}