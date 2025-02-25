import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Product } from "@/sanity.types";

const getProductBySlug = async (slug: string) => {
    const PRODUCT_BY_SLUG_QUERY = defineQuery(`*[_type == "Product" && slug.current == $slug] | order(name asc) [0]`);

    try {
        const Product = await sanityFetch({
            query: PRODUCT_BY_SLUG_QUERY,
            params: { slug },
        });
         
return Product.data || null;}
catch(error) {
    console.error("Error fetching product by slug:", error);
    return null;
}
    };


export default getProductBySlug;
                
