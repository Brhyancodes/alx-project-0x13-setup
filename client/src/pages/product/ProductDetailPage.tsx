import React from "react";
import { useParams } from "react-router-dom";
import { products } from '../../data/data'; // Adjust the path as needed
import Navbar from '../../components/Navbar'; // Import your Navbar component

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((prod) => prod.id.toString() === id); // Ensure id is checked as string

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-6">
      <Navbar />
      <h1 className="mt-4 text-3xl font-bold">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="object-cover h-56 mt-4" />
      <p className="mt-2">{product.description}</p>
      <p className="mt-1">Category: <strong>{product.category}</strong></p>
      <p className="mt-1">Price: <strong>{product.price} ETB</strong></p>
      <p className="mt-1">Availability: <strong>{product.availability}</strong></p>
      <p className="mt-1">Rating: <strong>{product.rating} ⭐</strong></p>
    </div>
  );
};

export default ProductDetailPage;
