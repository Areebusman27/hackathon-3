import { defineQuery } from "next-sanity";


    export const allProuducts = defineQuery(`
        *[_type == "product"]{
        _id,
        name,
        price,
        discountPercent,
        "imageUrl":image.asset->url,
        stockLevel
        }`)
