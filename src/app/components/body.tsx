import Image from "next/image"
import product from "./image 3.png"
import main from "./Mask Group.jpg"
import main1 from "./Group 115.png"
import main2 from "./Share.png"

export default function Body(){
    return(
        <div>
          <div className="main_hero m-8"><Image src={main} alt="aa" height={716} width={1440}></Image>
          <Image src={main1} alt="aa" height={685} width={1440}></Image>
          </div>
          



<div className="main_hero m-8">
  <Image src={main2} alt="aa" height={780} width={1440}></Image>
</div>

</div>



    )
}