import { sanityFetch } from "@/sanity/lib/fetch";
import Body from "./components/body";
import { allProuducts } from "@/sanity/lib/queries";
import Image from "next/image";

type Product = {
  _id : string
  name : string
  price : string
  description : string
  imageUrl:string
  stockLevel : number
}

export default  function Home() {

  return (
    <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4 ">
     
  <Body/>
      
    </div>
  );
}
