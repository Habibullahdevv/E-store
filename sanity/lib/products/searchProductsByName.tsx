import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParams: string) => {


    const PRODUCT_SEARCHQUERY = defineQuery(`*[_type == "Product" && name match $searchParams] | order(name asc)`);


    try {
        
        const products = await sanityFetch({query: PRODUCT_SEARCHQUERY, params: {searchParams: `${searchParams}*` }});
        return products.data || [];
    } catch (error) {
        console.error("Error searching for products:", error);
        return [];
    }


}