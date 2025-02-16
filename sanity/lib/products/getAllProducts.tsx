import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";



export const getAllProducts = async()=>
    {
        const All_PRODUCTS_QUERY  = defineQuery(`
           *[_type == "Product"] | order( name asc)

            `);

    try {
        const products =  await sanityFetch({
            query : All_PRODUCTS_QUERY,
        });
        return products.data || [];
    }
    catch(error) { console.error("Error fetching all products:", error)
        return [];
    }
}