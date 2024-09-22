import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";

interface ProductCardProps {
  name: string;
  price: string;
  availability: string;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  availability,
  imageUrl,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm bg-white">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto hidden h-full dark:block"
            src={imageUrl}
            alt={name}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-white">
            BUY 20 GET 2 FREE
          </span>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-black"
        >
          {name}
        </a>

        <div className="flex items-center mt-2">
          <RiShoppingBag3Line className="mr-1" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-900">
            {availability}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-gray-800">
            {price} ETB
          </p>

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <CiShoppingCart className="text-2xl mr-2" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
