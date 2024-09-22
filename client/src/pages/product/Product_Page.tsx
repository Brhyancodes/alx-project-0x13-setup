import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "../../components/Navbar";
import { products } from "../../data/data";

const categories = [
  "All",
  "Antibiotics",
  "Contraceptives",
  "Eye Care",
  "Pain Relievers",
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const ProductPage: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inStock, setInStock] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleLetterFilter = (letter: string | null) => setSelectedLetter(letter);
  const handleCategoryFilter = (category: string) => setSelectedCategory(category);
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: "min" | "max") => {
    const value = e.target.value;
    if (type === "min") setMinPrice(value);
    else setMaxPrice(value);
  };

  const handleStockFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInStock(e.target.checked);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesLetter = selectedLetter ? product.name.toUpperCase().startsWith(selectedLetter) : true;
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const priceValue = parseFloat(product.price);
    const matchesPrice = (!minPrice || (priceValue >= parseFloat(minPrice))) &&
                         (!maxPrice || (priceValue <= parseFloat(maxPrice)));
    const matchesStock = inStock ? product.availability === "In Stock" : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesLetter && matchesCategory && matchesPrice && matchesStock && matchesSearchTerm;
  });

  return (
    <>
      <Navbar />
      <div className="container min-h-screen px-4 pt-20 mx-auto sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="mb-8">
          {/* Search Input */}
          <div className="mb-4">
            <h4 className="font-semibold">Search Products</h4>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Type product name..."
              className="w-full p-2 mt-2 border"
              aria-label="Search Products"
              style={{ zIndex: 10, position: "relative" }} // Ensure visibility
            />
          </div>

          {/* Alphabetical Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Filter by Alphabet</h4>
            <div className="flex flex-wrap mt-2">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  className={`m-1 p-2 border ${selectedLetter === letter ? "bg-blue-500 text-white" : "bg-gray-200"}`}
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
        </div>

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
                  type="number"
                  value={minPrice}
                  onChange={(e) => handlePriceChange(e, "min")}
                  placeholder="Min Price"
                  className="w-full p-2 mb-2 border"
                  aria-label="Minimum Price"
                />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => handlePriceChange(e, "max")}
                  placeholder="Max Price"
                  className="w-full p-2 border"
                  aria-label="Maximum Price"
                />
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
              <h4 className="font-semibold">Availability</h4>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={handleStockFilter}
                  aria-label="In Stock"
                />
                <span className="ml-2">In Stock</span>
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full p-4 md:w-3/4">
            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">No products found. Try different filters or search terms.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
