"use client";
import React from "react";
import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/products/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-grey-700 border-4 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
      <div className="relative  aspect-square w-full h-full overflow-hidden">
        {product.Image && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            alt={product.name || "Product image"}
            src={imageUrl(product.Image).url()}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black ">
            <span className="text-white font-bold text-lg">Out of stock</span>
          </div>
        )}
      </div>
      <div className="p-4 border-t-4  border-blue-300">
        <h2 className="text-lg text-start font-semibold text-gray-800 truncate">
          <u>{product.name}</u>
        </h2>
        <p className="text-start mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join("") || "No description available"}
        </p>
      </div>

      <div className="p-4 flex items-center justify-around gap-2  border-gray-900">
        <p className="text-xl font-bold text-blue-900">
          ${product.price?.toFixed(2)}/-
        </p>
        <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductThumb;
