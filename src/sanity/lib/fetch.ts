import { createClient } from "next-sanity";


const client = createClient({
    projectId : "wgqjsre6" , 
    dataset : "production" ,
    useCdn : true , 
    apiVersion : "2025-01-15"
})

export async function sanityFetch({query, params = {}}:{query : string , params?: any}){
    return await client.fetch(query,params)
}