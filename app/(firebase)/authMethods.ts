import { firebase_app } from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut as signOutSession } from "firebase/auth";
import { setCookie, deleteCookie } from "cookies-next";

export const auth = getAuth(firebase_app);

export async function signUp(email : string, password : string) {
    let result = null,
     error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
        error = err;
    }
    return { result, error };
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
            console.log(err)
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