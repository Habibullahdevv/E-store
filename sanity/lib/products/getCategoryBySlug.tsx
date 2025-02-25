import { defineQuery } from "next-sanity";

import { sanityFetch } from "../live";

export async function getCategoryBySlug(slug: string) {

const PRODUCTS_BYCATEGORIES_QUERY = defineQuery(`*[_type == "Product" && references(*[_type == "category" && slug.current == $categorySlug]._id)]`);

try{

const products = await sanityFetch({
    query: PRODUCTS_BYCATEGORIES_QUERY,
    params: {categorySlug: slug},
})

return products.data || [];

}

catch(error){
    console.error("Error fetching category by slug", error);
    return [];
}
}   
