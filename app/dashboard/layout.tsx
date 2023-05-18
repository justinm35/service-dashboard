import SideNav from '@/app/components/nav/SideNav'
import { cookies } from 'next/headers';
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
    adminAuth.verifyIdToken(token?.value)
      .then((decodedToken) => {
        session = decodedToken
        if(!session?.uid) {
          redirect('/auth')
        }
        return decodedToken
      }).then((claims)=>{
        if (claims.admin === true) {
          console.log('access granted')
        }else{
          console.log('access denied')
        }
      }).catch((err) => {
        console.log({status: 'error', error: err})
        redirect('/auth')
      })
  }


  return (
    <>
        <SideNav />
        <div className='fixed right-0 w-full h-screen pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
            {children}
        </div>
    </>
    )
}

export default layout 

