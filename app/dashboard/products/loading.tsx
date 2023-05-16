import { FC } from 'react'

interface ProductsPageLoadingProps {
  
}

const ProductsPageLoading: FC<ProductsPageLoadingProps> = ({}) => {
  return (
    <section className="animate-pulse">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className='bg-gray-200 h-1/3 w-full'></div>
      </div>
    </section>
    )
}

export default ProductsPageLoading