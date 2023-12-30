import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from '../products.json';

export default function Product() {
  const { id } = useParams();
  const product = productData.find((item) => item.name === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Link to="/shop">
        <i className="bi bi-arrow-left"> back to shop</i>
      </Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}
