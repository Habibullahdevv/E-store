import BlackFridayBanner from '@/components/BlackFridayBanner';
import ProductsView from '@/components/ProductsView';
import getAllCategories from '@/sanity/lib/products/getAllCategories';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';
import React from 'react'

async function Home() {
  const products = await getAllProducts();
  const catagories = await getAllCategories();

  return (<>
  <div>
    <BlackFridayBanner/>
    <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4'>
        <ProductsView products={products} categories={catagories}/>
    </div>
    </div>
    </>
  )
}

export default Home
