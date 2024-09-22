// import ProductCard from './ProductCard';
// import Navbar from "../../components/Navbar"
import { products } from "../../data/data";
import ProductCard from "./ProductCard";
import Navbar from "../../components/Navbar";
import React, { useState } from 'react';



const categories = ['All', 'Antibiotics', 'Contraceptives', 'Eye Care', 'Pain Relievers'];
const ratings = [1, 2, 3, 4, 5];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ProductPage: React.FC = () => {

  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [inStock, setInStock] = useState<boolean>(true);

  const handleLetterFilter = (letter: string | null) => setSelectedLetter(letter);
  const handleCategoryFilter = (category: string) => setSelectedCategory(category);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = e.target.value;
    if (type === 'min') setMinPrice(value);
    else setMaxPrice(value);
  };
  const handleRatingFilter = (rating: number) => setSelectedRating(rating);
  const handleStockFilter = (e: React.ChangeEvent<HTMLInputElement>) => setInStock(e.target.checked);

  const filteredProducts = products.filter((product) => {
    const matchesLetter = selectedLetter ? product.name.toUpperCase().startsWith(selectedLetter) : true;
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
                         (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));
    const matchesRating = selectedRating ? product.rating === selectedRating : true;
    const matchesStock = inStock ? product.availability === 'In Stock' : true;

    return matchesLetter && matchesCategory && matchesPrice && matchesRating && matchesStock;
  });


  return (
    <>
      <Navbar />
      <div className="px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full p-4 mb-4 bg-gray-100 md:w-1/4 md:mr-4 md:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Filters</h3>

            {/* Category Filter Dropdown */}
            <div className="mb-4">
              <h4 className="font-semibold">Category</h4>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="w-full p-2 mt-2 border"
                aria-label="Select Category"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <h4 className="font-semibold">Price</h4>
              <div className="mt-2">
                <input
                  type="text"
                  value={minPrice}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  placeholder="Min Price"
                  className="w-full p-2 mb-2 border"
                  aria-label="Minimum Price"
                />
                <input
                  type="text"
                  value={maxPrice}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  placeholder="Max Price"
                  className="w-full p-2 border"
                  aria-label="Maximum Price"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
              <h4 className="font-semibold">Rating</h4>
              <div className="mt-2">
                {ratings.map((rating) => (
                  <label key={rating} className="block">
                    <input
                      type="radio"
                      checked={selectedRating === rating}
                      onChange={() => handleRatingFilter(rating)}
                      aria-label={`${rating} Star Rating`}
                    />
                    {rating} Star
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
              <h4 className="font-semibold">Availability</h4>
              <label>
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={handleStockFilter}
                  aria-label="In Stock"
                />
                In Stock
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full p-4 md:w-3/4">
            {/* Alphabetical Filter */}
            <div className="mb-4">
              <h4 className="font-semibold">Filter by Alphabet</h4>
              <div className="flex flex-wrap mt-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    className={`m-1 p-2 border ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleLetterFilter(letter)}
                    aria-label={`Filter by ${letter}`}
                  >
                    {letter}
                  </button>
                ))}
                <button
                  className="p-2 m-1 bg-gray-200 border"
                  onClick={() => handleLetterFilter(null)}
                  aria-label="Clear Letter Filter"
                >
                  Clear Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    availability={product.availability}
                    imageUrl={product.imageUrl}
                    category={product.category}
                    rating={product.rating}
                    id={product.id}
                  />
                ))
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  No products found.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
