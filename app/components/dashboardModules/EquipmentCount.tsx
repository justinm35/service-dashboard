import { db } from '@/app/(firebase)/firebaseConfig'
import { AggregateField, AggregateQuerySnapshot, collection, getCountFromServer } from 'firebase/firestore'

interface CustomerCountProps {
  
}

const CustomerCount= async ({} : CustomerCountProps) => {
    
    let customerSnapshot : AggregateQuerySnapshot<{ count: AggregateField<number>}> | null = null;
    try {
        const customerColl = collection(db, 'Products')
        customerSnapshot = await getCountFromServer(customerColl)        
    } catch (error) {
        console.log(error)
    }

  return (
    <>
    <div>
      <h3 className="text-3xl font-bold text-orange-400 sm:text-5xl">{customerSnapshot ? customerSnapshot.data().count : 0}</h3>
      <div className="mt-4 border-t-2 border-gray-100 pt-4">
        <p className="text-sm font-medium uppercase text-gray-500">Total products in the system</p>
      </div>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 text-orange-400 sm:mt-12 lg:mt-16">
      <p className="font-medium sm:text-lg">Products</p>

    </div>
    </>
    )
}

export default CustomerCount