import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: string;
  availability: "In Stock" | "Out of Stock";
  imageUrl: string;
  category: string;
  id: number;
  promotion?: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  availability,
  imageUrl,
  category,
  id,
  promotion,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col w-full max-w-xs p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full h-40">
        <Link to={`/product/${id}`}>
          <img
            className="object-cover w-full h-full"
            src={imageUrl}
            alt={`Image of ${name}`}
          />
        </Link>
      </div>

      <div className="flex-grow pt-4">
        {/* Promotion Badge */}
        {promotion && (
          <div className="flex items-center justify-between mb-2">
            <span className="rounded bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-white">
              {promotion}
            </span>
          </div>
        )}

        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <span className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
            {name}
          </span>
        </Link>

        {/* Category */}
        <p className="mt-1 text-sm text-gray-500">
          Category: <strong>{category}</strong>
        </p>

        {/* Availability */}
        <div className="flex items-center mt-2">
          <RiShoppingBag3Line className="mr-1" />
          <p className="text-sm font-medium text-gray-500">
            {availability}
          </p>
        </div>

        {/* Price and Add to Cart Button */}
        <div className="flex items-center justify-between gap-4 mt-4">
          <p className="text-2xl font-extrabold text-gray-900">
            {price} ETB
          </p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={onAddToCart}
          >
            <CiShoppingCart className="mr-2 text-lg" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
