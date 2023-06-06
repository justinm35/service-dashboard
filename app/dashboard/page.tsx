import AdminDashboard from '../components/AdminDashboard'
import CustomerDashboard from '../components/CustomerDashboard'
import { cookies } from 'next/headers';
import { adminAuth } from '../(firebase)/firebaseAdminConfig';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

interface DashboardLangingPageProps {}

const DashboardLangingPage = async({}) => {
  const nextCookies = cookies();
  const token = nextCookies.get('cookieKey')
  if(!token) {
    redirect('/auth')}
  if(token.value) {
  return adminAuth.verifyIdToken(token?.value)
    .then((claims) => {
      if (claims.admin === true) {
        return <AdminDashboard />
      }else{
        return <CustomerDashboard session={claims} />
      }
    }).catch((error) => {
      console.log(error)
      return null;
    })
  }
}

export default DashboardLangingPage