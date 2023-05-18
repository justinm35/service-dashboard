import { db } from '@/app/(firebase)/firebaseConfig'
import ProductTableItem from '@/app/components/ProductTableItem'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { DocumentData, collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import { FC } from 'react'

interface ProductsPageProps {
  
}

const ProductsPage = async ({}: ProductsPageProps) => {
  
  const ref = collection(db, 'Products')
  const snapshot = await getDocs(ref)
  let productData: any = [];
  snapshot.forEach(doc => productData.push({id: doc.id, ...doc.data()}))


  return (
    <div className='w-full h-full p-10'>
    <h2 className='font-semibold text-2xl text-gray-500 pb-6'>All Products</h2>
    <div className='w-full flex justify-between mb-3'>
        <Link href="/dashboard/products/addproduct" className=' max-w-md w-42 py-3 px-5 text-sm font-medium text-center text-white border cursor-pointer bg-orange-400 border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300'>New Product</Link>
        <div className="items-center space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
                <input className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-orange-500 focus:border-orange-500 " placeholder="Quick Search" type="search" id="search" />
            </div>
            <div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-orange-400 border-orange-500 sm:rounded-none sm:rounded-r-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300">Search</button>
            </div>
        </div>
    </div>
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 w-5 font-medium text-gray-900"></th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900 flex items-center w-3">Name
                <button className='ml-1 p-1 border border-gray-300/70 rounded-md text-gray-500'><ChevronUpIcon className='w-2 h-2'/><ChevronDownIcon className='w-2 h-2'/></button>
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Model #</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Category</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Warranty</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Manual</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {productData.map((product : IProduct) => (
            <ProductTableItem key={product.id} product={{image: product?.image, modelNum: product?.modelNum, name: product?.name, manualLink: product?.manualLink, warrantyLink: product?.warrantyLink, id: product?.id, category: product?.category}} />
          ))}
          
        </tbody>
        </table>
    </div>
</div>
  )
}

export default ProductsPage