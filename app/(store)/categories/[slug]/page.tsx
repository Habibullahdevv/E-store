import ProductsView from '@/components/ProductsView';
import getAllCategories from '@/sanity/lib/products/getAllCategories';
import { getCategoryBySlug } from '@/sanity/lib/products/getCategoryBySlug';
import React from 'react'

async function categoryPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
    const categories = await getAllCategories();
    const products = await getCategoryBySlug(slug);
  return (
    <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
            {slug
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
            {" "}
            collection

      </h1>
      <ProductsView products={products} categories={categories} />

    </div>
  )
}

export default categoryPage
