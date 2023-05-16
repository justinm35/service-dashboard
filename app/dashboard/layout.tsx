import SideNav from '@/app/components/SideNav'
// import AuthProvider from '@/app/helpers/AuthProvider'
import { cookies } from 'next/headers';
import admin from 'firebase-admin'
// import { initAdmin } from '@/app/(firebase)/firebaseAdminConfig';
import { redirect } from 'next/navigation';
import { adminAuth } from '@/app/(firebase)/firebaseAdminConfig';

interface layoutProps {
  children: React.ReactNode
}




const layout = async ({children} : layoutProps) => {



  const nextCookies = cookies();
  const token = nextCookies.get('cookieKey')
  let session;
  if(!token) {
    redirect('/auth')}
  if(token.value) {
    await adminAuth.verifyIdToken(token?.value)
      .then((decodedToken) => {
        session = decodedToken
        if(!session?.uid) {
          redirect('/auth')
        }
      }).catch((err) => {
        console.log(err)
        redirect('/auth')
      })
  }


  return (
    <>
        <SideNav />
        <div className='fixed right-0 w-full pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
            {children}
        </div>
    </>
    )
}

export default layout