"use client"
import { FC, createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../(firebase)/authMethods';

interface AuthProviderProps {
  children: React.ReactNode
}
interface UserType {
    email: string | null;
    displayName: string | null;
    uid: string | null;
  }
  
  const AuthContext = createContext({});
  
  export const useAuth = () => useContext<any>(AuthContext);

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserType>({ email: null, displayName: null, uid: null });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser({
              email: user.email,
              displayName: user.displayName,
              uid: user.uid,
            });
          } else {
            setUser({ email: null, displayName: null, uid: null });
          }
        });
        setLoading(false);
    
        return () => unsubscribe();
      }, []);
  return (
    <AuthContext.Provider value={{ user }}>
    {loading ? null : children}
    </AuthContext.Provider>
    )
}

export default AuthProvider