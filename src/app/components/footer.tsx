export default function Footer() {
  return (
    <div>
      <footer className="bg-[#FFFFFF] pt-12 pb-6 px-6 md:px-10 font-[sans-serif] tracking-wide">
        <div className="max-w-screen-xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Section */}
            <div className="lg:flex lg:items-center">
              <div>
                <p className="text-gray-400 text-sm md:text-base">
                  400 University Drive Suite Gables
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h4 className="text-lg mb-6 text-gray-500">Links</h4>
              <ul className="space-y-4 pl-2">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="text-lg mb-6 text-gray-500">Help</h4>
              <ul className="space-y-4 pl-2">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Payment Options
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Return
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4 className="text-lg mb-6 text-gray-500">Newsletter</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black hover:text-gray-700 text-sm md:text-base"
                  >
                    SUBSCRIBE
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Copyright */}
          <p className="text-black text-sm md:text-base mt-10 text-center">
            © 2023. Furniro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
