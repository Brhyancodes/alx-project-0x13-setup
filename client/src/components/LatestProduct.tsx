import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  actualPrice: string;
  bulkPrice: string;
}

const ProductSlider: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "https://via.placeholder.com/500?text=Product+1",
      title: "Product 1",
      description: "Description for Product 1.",
      actualPrice: "$50.00",
      bulkPrice: "$45.00",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/500?text=Product+2",
      title: "Product 2",
      description: "Description for Product 2.",
      actualPrice: "$60.00",
      bulkPrice: "$55.00",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/500?text=Product+3",
      title: "Product 3",
      description: "Description for Product 3.",
      actualPrice: "$70.00",
      bulkPrice: "$65.00",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/500?text=Product+4",
      title: "Product 4",
      description: "Description for Product 4.",
      actualPrice: "$80.00",
      bulkPrice: "$75.00",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/500?text=Product+5",
      title: "Product 5",
      description: "Description for Product 5.",
      actualPrice: "$90.00",
      bulkPrice: "$85.00",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [hovered]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-12">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-lg text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Actual Price: {product.actualPrice}
              </p>
              <p className="text-lg font-semibold text-green-600">
                Bulk Price: {product.bulkPrice}
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
        {products.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
