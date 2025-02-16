"use client"
import React from 'react'
import { Product } from '@/sanity.types';
import Link from 'next/link';
import Image from 'next/image';


function ProductThumb ({ product }: { product: Product }) {

const isOutOfStock = product.stock !=null && product.stock <=0;

    return (
 <Link href={`/product/${product.slug?.current}`}
         className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow:sm hover:shadow-md transition-all duration-200 overflow-hidden ${ isOutOfStock ? "opacity-50" :"" }`}
 >

      <div className='relative aspect-square w-full h-full overflow-hidden'>
         {product.Image && (
            <Image className='object-contain transition-transform duration-300 group-hover:scale-105' alt={product.name || "Product image"} src={imageUrl(product.Image).url()}></Image>
         )}
      </div>


<div>
   {isOutOfStock && (
         <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
               <span className='text-white font-bold text-lg'>
                  Out of stock
               </span>

         </div>

   ) }
</div>

 </Link>
  )
}

export default ProductThumb
