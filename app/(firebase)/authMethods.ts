import { firebase_app } from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut as signOutSession } from "firebase/auth";


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
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function signOut() {
    let result = null,
        error = null;
    try {
        result = await signOutSession(auth) 
    } catch (e) {
        error = e
    }
console.log(result)
    return { result, error };
}