import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  availability: string;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, availability, imageUrl, description }) => {
  return (
    <div className="py-8 bg-gray-100 rounded-lg shadow-md  ">
      <div className="flex flex-col h-full">
        {/* Header */}
      

        {/* Image */}
        <div className="flex-grow mb-4">
          <img className="object-cover w-full rounded-t-lg h-60" src={imageUrl} alt={name} />
        </div>

        {/* Content */}
        <div className="flex-grow p-4">
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
              <span className="text-gray-600 dark:text-gray-300">{price}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
              <span className="text-gray-600 dark:text-gray-300">{availability}</span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="font-bold text-gray-700 dark:text-gray-300">Select Amount:</label>
            <div className="mt-2">
              <select
                id="quantity"
                name="quantity"
                className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                {/* Options for quantity */}
                {Array.from({ length: 15 }, (_, i) => i + 1).map(value => (
                  <option key={value} value={value}>{value}</option>
                ))}
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between p-4 bg-gray-200 rounded-b-lg dark:bg-gray-700">
          <button className="px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          <button className="px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
        </footer>
      </div>
    </div>
  );
};

export default ProductCard;
