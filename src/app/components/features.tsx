import Image from "next/image";
import trophy from "./trophy 1.png";
import customer from "./customer-support (2).png";
import gurantee from "./guarantee.png";
import vector from "./Vector (3).png";

export default function Features() {
  return (
    <div className="features bg-[#FAF3EA] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-6 px-4">
        {/* Feature 1 */}
        <div className="feature text-center flex flex-col items-center space-y-2 w-[45%] sm:w-auto">
          <Image src={trophy} alt="High Quality" width={60} height={60} />
          <h3 className="text-base sm:text-lg font-medium text-black">High Quality</h3>
          <p className="text-sm sm:text-gray-600">Crafted from top materials</p>
        </div>

        {/* Feature 2 */}
        <div className="feature text-center flex flex-col items-center space-y-2 w-[45%] sm:w-auto">
          <Image src={gurantee} alt="Warranty Protection" width={60} height={60} />
          <h3 className="text-base sm:text-lg font-medium text-black">Warranty Protection</h3>
          <p className="text-sm sm:text-gray-600">Over 2 years</p>
        </div>

        {/* Feature 3 */}
        <div className="feature text-center flex flex-col items-center space-y-2 w-[45%] sm:w-auto">
          <Image src={vector} alt="Free Shipping" width={60} height={60} />
          <h3 className="text-base sm:text-lg font-medium text-black">Free Shipping</h3>
          <p className="text-sm sm:text-gray-600">Order over 150 $</p>
        </div>

        {/* Feature 4 */}
        <div className="feature text-center flex flex-col items-center space-y-2 w-[45%] sm:w-auto">
          <Image src={customer} alt="24/7 Support" width={60} height={60} />
          <h3 className="text-base sm:text-lg font-medium text-black">24/7 Support</h3>
          <p className="text-sm sm:text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
