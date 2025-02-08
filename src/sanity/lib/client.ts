import { createClient } from 'next-sanity'



export const client = createClient({
  projectId : "wgqjsre6" ,
  dataset : "production",
  apiVersion : "2025-02-03",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
