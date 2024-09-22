import React from 'react';
// import ProductCard from './ProductCard';
// import Navbar from "../../components/Navbar"
import { products } from '../../data/data';
import ProductCard from './ProductCard';
import Navbar from '../../components/Navbar';

const ProductPage: React.FC = () => {
 

  return (
    <>
      {/* <div className="min-h-screen bg-gray-100 pt-40 dark:bg-gray-800">
        <Navbar />
        <main className="py-8">
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.length ? (
                products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    price={product.price}
                    availability={product.availability}
                    imageUrl={product.imageUrl}
                    description={product.description}
                  />
                ))
              ) : (
                <p className="text-center text-gray-600 dark:text-gray-300">
                  No products available.
                </p>
              )}
            </div>
          </div>
        </main>

        <footer className="py-10 text-white bg-green-700">
          <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Filix Pharmacy</h2>
              <p className="text-sm">
                Your trusted partner in pharmacy wholesale. Providing quality
                medicines at competitive prices, ensuring the best service for
                pharmacies nationwide.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
              <p>Address: Pastor Square, Somalia St., Filix Pharmacy</p>
              <p>Phone: +251-9145-678-901</p>
              <p>Email: contact@pharmawholesale.com</p>
            </div>
          </div>

          <div className="pt-6 mt-10 text-sm text-center border-t border-gray-500">
            <p>&copy; 2024 Pharma Wholesale. All rights reserved.</p>
          </div>
        </footer>
      </div> */}

      <Navbar />
      <div className="max-w-7xl mx-auto bg-slate-100 pt-64 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((data, index) => (
            <ProductCard
              key={index}
              name={data.name}
              price={data.price}
              availability={data.availability}
              imageUrl={data.imageUrl}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
