import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
interface ProductsPageLoadingProps {
  
}

const ProductsPageLoading: FC<ProductsPageLoadingProps> = ({}) => {
  return (
    <div className='w-full h-full p-10'>
      <h2 className='font-semibold text-2xl text-gray-500 pb-6'>All Products</h2>
        <div className='w-full flex justify-between mb-3'>
          <div className='w-36 h-12'>
          <Skeleton className='h-12'/>
          </div>
          <div className='w-60 h-12'>
            <Skeleton className='h-12'/>
          </div>
        </div>
        <div className=" rounded-l">
            <div className="w-full border-collapse">
            <Skeleton className="h-16" />
            <Skeleton count={6} className='h-24 w-full' />
        </div>
      </div>
    </div>
    )
}

export default ProductsPageLoading