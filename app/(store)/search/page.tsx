import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

async function SearchPage({searchParams,} : {searchParams:{query : string; }}) {
    
    const {query} = await searchParams;
    const products = await searchProductsByName(query);


if(!products.length) {
    return (
     <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center">No products Found for "{query}"</h1>
        <p>Try searching with different keywords</p>
    </div>
</div> )
}

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Search Results for "{query}"</h1>
                    <ProductGrid products={products} />
                
            </div>
        </div>
    )

 
}
export default SearchPage;
