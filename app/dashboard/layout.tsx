import SideNav from '@/app/components/nav/SideNav'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { adminAuth } from '@/app/(firebase)/firebaseAdminConfig';
import { Suspense } from 'react';

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
    return adminAuth.verifyIdToken(token?.value)
      .then((decodedToken) => {
        session = decodedToken
        if(!session?.uid) {
          redirect('/auth')
        }
        return decodedToken
      }).then((claims)=>{
        if (claims.admin === true) {
          console.log('access granted')
          return(<>  
          <SideNav authStatus={'admin'}/>
          <div className='fixed right-0 w-full h-screen overflow-auto pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
              {children}
          </div>
          </>)
        }else{
          console.log('access denied')
          return(<>  
            <SideNav authStatus={'customer'}/>
            <div className='fixed right-0 w-full h-screen overflow-auto pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
                {children}
            </div>
            </>)
        }
      }).catch((err) => {
        console.log({status: 'error', error: err})
        redirect('/auth')
      })
  }


  // return (
  //   <>  
  //       <SideNav authStatus={}/>
  //       <div className='fixed right-0 w-full h-screen overflow-auto pt-12 lg:pt-0 lg:w-[calc(100vw-16rem)]'>
  //           {children}
  //       </div>
  //   </>
  //   )
}

export default layout 

