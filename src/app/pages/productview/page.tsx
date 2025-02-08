"use client"; // Add this directive since we're using React hooks

import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allProuducts } from "@/sanity/lib/queries";
import { useState, useEffect } from "react";

type Product = {
  _id: string;
  name: string;
  price: number; // Changed to number
  description: string;
  imageUrl: string;
  stockLevel: number; // Changed to number
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await sanityFetch({
          query: allProuducts,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-4">
      {products.map((prod) => (
        <div
          key={prod._id}
          className="flex justify-center p-2 flex-col items-center w-60 h-100 shadow-md rounded transition-transform transform hover:-translate-y-2"
        >
          {/* Ensure prod.imageUrl is a valid URL or an imported image */}
          <Image
            src={prod.imageUrl}
            width={100} // Adjusted for better visibility
            height={100}
            alt={prod.name}
            className="object-cover"
          />
          <h1 className="font-extrabold">{prod.name}</h1>
          <p className="font-semibold">{prod.description}</p>
          <h3>Rs {prod.price}</h3> {/* Display price directly */}
          <h3>Stock Level: {prod.stockLevel}</h3> {/* Display stock level */}
          <button className="mt-2 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}