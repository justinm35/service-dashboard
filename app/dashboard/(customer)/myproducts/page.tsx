import { FC } from 'react'
import MyEqupmentTable from './MyEqupmentTable'
import { cookies } from 'next/headers';
import { adminAuth } from '@/app/(firebase)/firebaseAdminConfig';
import { DecodedIdToken } from 'firebase-admin/auth';
import { RequestCookie, RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';

interface MyEquipmentProps {  
}

const MyEquipment: FC<MyEquipmentProps> = ({}) => {
  
  const nextCookies = cookies();
  const token: RequestCookie | undefined = nextCookies.get('cookieKey')
    let session: DecodedIdToken | null = null;
    if(token){
    adminAuth.verifyIdToken(token?.value)
      .then((tokenSession) => {
        session = tokenSession
      }).catch((error) => {
      console.log(error)
      })
    }

  return (
  <div>
    <MyEqupmentTable session={session} />
  </div>)
}

export default MyEquipment