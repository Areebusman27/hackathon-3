"use client"

import Image from "next/image";
import bg from "../Rectangle 1.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartitems, removeCart, updateQuantity } from "../../actions/cart"; // Adjust the import path

type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inventory: number;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = getCartitems();
    setCartItems(items);
  }, []);

  const handleRemoveItem = (productId: number) => {
    removeCart(productId);
    setCartItems(getCartitems());
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
    setCartItems(getCartitems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  return (
    <div>
      <div className="relative py-16 font-[sans-serif]">
        <div className="absolute inset-0">
          <Image src={bg} alt="Background Image" className="w-full h-full object-cover opacity-100" />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">CART</h1>
          <p className="text-lg md:text-xl mb-12">HOME -- CART</p>
        </div>
      </div>

      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                <div className="flex gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                    <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm font-semibold text-gray-500 mt-2">Price: Rs {item.price}</p>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item._id, item.inventory - 1)}
                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                        </svg>
                      </button>
                      <span className="font-bold text-sm leading-[18px]">{item.inventory}</span>
                      <button
                        onClick={() => handleQuantityChange(item._id, item.inventory + 1)}
                        className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-auto flex flex-col">
                  <div className="flex items-start gap-4 justify-end">
                    <button onClick={() => handleRemoveItem(item._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mt-auto">Rs {item.price * item.inventory}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal <span className="ml-auto font-bold">Rs {calculateTotal()}</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">Rs {calculateTotal()}</span>
              </li>
            </ul>
            <div className="mt-8 space-y-2">
              <Link href="./checkout">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                >
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}