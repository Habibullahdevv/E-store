import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live';

const getAllCategories =async () => {
  
    const ALL_CATEGORIES_QUERY = defineQuery (` *[_type == "category"] | order( name asc) `)

    try {
        const category =  await sanityFetch({
            query : ALL_CATEGORIES_QUERY,
        });
        return category.data || [];
    }
    catch(error) { console.error("Error fetching all categories:", error)
        return [];
    }
}

export default getAllCategories
