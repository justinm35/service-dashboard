import SideNav from '@/app/components/nav/SideNav'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { adminAuth } from '@/app/(firebase)/firebaseAdminConfig';
import ToastProvider from '../helpers/ToastProvider';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../(firebase)/authMethods';
import { setCookie } from 'cookies-next';

interface layoutProps {
  children: React.ReactNode
}



const layout = async ({children} : layoutProps) => {

  const nextCookies = cookies();
  const token = nextCookies.get('cookieKey')
  let session;
  // If no token in cookie, redirect user to login page
  if(!token) {
    redirect('/auth')
  }
  // If token exists verify token with Admin SDK
  if(token.value) {
    return adminAuth.verifyIdToken(token?.value)
      .then((session) => {
        // send user back to login if token has no user
        if(!session?.uid) {
          redirect('/auth')
        }
        return session
      }).then((claims)=>{
        // Issue a new token to ensure token is not expiring
        adminAuth.createCustomToken(claims.uid)
        .then((updatedToken) => {
          setCookie('cookieKey', updatedToken, {maxAge: 60 * 60 })
        }).catch((error) => {
          console.log(`Error: ${error}`)
        })
        //Checks if user or admin and whcih to display
        if (claims.admin === true) {
          return(
          <>
          <SideNav authStatus={'admin'}/>
           <div className='fixed right-0 w-full h-screen overflow-auto pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
              <ToastProvider>{children}</ToastProvider>
          </div>
          </>)
        }else{
          console.log('Customer Access')
          return(<>
            <SideNav authStatus={'customer'}/>
            <div className='fixed right-0 w-full h-screen overflow-auto pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
                <ToastProvider>{children}</ToastProvider>
            </div>
            </>)
        }
      }).catch((err) => {
        console.log({status: 'error', error: err})
        redirect('/auth')
      })
  }
}

export default layout

