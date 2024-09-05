import React from 'react';
import ProductCard from './ProductCard';
import { FaCartShopping, FaPhoneVolume } from 'react-icons/fa6';
import { PiFlagBanner } from 'react-icons/pi';
import { Bars3Icon } from '@heroicons/react/24/outline';

const ProductPage: React.FC = () => {
  const products = [
    {
      name: "Venaxan levofloxacin 500",
      price: "299.99 birr",
      availability: "In Stock",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdmOTyRCkdE3FZPmOh46bURlk95SswpU3BVhw_rishmA4sxwR0NMqlWvLhsMCKx2JOjc&usqp=CAU",
      description: "Antibiotic, belongs to the Fluoroquinolone group used in the treatment of pneumonia, prostatitis, acute bacterial rhinosinusitis, salmonella infection, drug-resistant tuberculosis and Urinary tract infection.",
    },
    {
      name: "Miraclin",
      price: "399.99 birr",
      availability: "In Stock",
      imageUrl: "https://www.my-personaltrainer.it/images/farmaci/Miraclin.jpg",
      description: "Miraclin Implant unfolds all-round protection and supports the regeneration of damaged cells along the implants. It also prevents gum recess, protects the implant from external influences and maintains its intended strength.",
    },
    {
      name: "Yasmin",
      price: "$49.99",
      availability: "In Stock",
      imageUrl: "https://rightangled.com/cdn/shop/files/201.png?v=1720624308&width=400",
      description: "Yasmin is a contraceptive pill and is used to prevent pregnancy. Each film-coated tablet contains a small amount of two different female hormones, namely drospirenone and ethinylestradiol. Contraceptive pills that contain two hormones are called “combination” pills.",
    },
    {
      name: "Latanoprost eye drop",
      price: "$49.99",
      availability: "In Stock",
      imageUrl: "https://images.apollo247.in/pub/media/catalog/product/L/A/LAT0005_1_1.jpg?tr=w-167.5,q-60,f-webp,dpr-1,c-at_max",
      description: "Latanoprost eye drops is used to treat certain kinds of glaucoma. It is also used to treat a condition called hypertension of the eyealone or together with other medicines to lower pressure inside the eye that is caused by open-angle glaucoma or ocular (eye) hypertension.",
    },
    {
      name: "olani",
      price: "Expensive",
      availability: "In Stock",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4E03AQGg5g6Um6nEuQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1651492215535?e=1730937600&v=beta&t=wPCKfkLyITtTOgiBYGwX2lAXylFUd0h14t_ZLFi1VyU",
      description: "lets have fun. hhhh",
    },
    {
      name: "Beki",
      price: "Expensive",
      availability: "In Stock",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFNSF9YfrVJww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714575185487?e=1730937600&v=beta&t=Q4Ysrj_f6dw26uDU2XSTNRoJfi_47IVEoZ1XZNlZZXk",
      description: "full stack engineer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
          <PiFlagBanner />
          <div className="p-4 shadow-md bg-slate-200">
            <div className="container flex items-center justify-between mx-auto">
              <input
                type="text"
                placeholder="Search medicine"
                className="w-full max-w-4xl px-4 py-2 ml-40 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <p className="flex items-center gap-2 ml-6 font-bold text-gray-800">
                <FaPhoneVolume />
                +251 456 7890 <FaCartShopping className="ml-10 text-2xl text-green-600 duration-150 ease-in-out cursor-pointer hover:text-green-400"/>
              </p>
            </div>
          </div>
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 bg-white lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-auto h-8"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            
            
          </nav>
          
        </header>

      {/* Main Content */}
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
              <p className="text-center text-gray-600 dark:text-gray-300">No products available.</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-white bg-green-700">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Logo and Description */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Filix Pharmacy</h2>
          <p className="text-sm">
            Your trusted partner in pharmacy wholesale. Providing quality
            medicines at competitive prices, ensuring the best service for
            pharmacies nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
          
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
          <p>Address: Pastor Square, Somalia St., Filix Pharmacy</p>
          <p>Phone: +251-9145-678-901</p>
          <p>Email: contact@pharmawholesale.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 mt-10 text-sm text-center border-t border-gray-500">
        <p>&copy; 2024 Pharma Wholesale. All rights reserved.</p>
        
      </div>
    </footer>
    </div>
  );
};

export default ProductPage;
