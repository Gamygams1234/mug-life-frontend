import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import "../Product.scss";

export default function Product(props) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const url = process.env.REACT_APP_URL;
  const { get, loading } = useFetch(url);
  const [product, setProduct] = useState(null);
  const { cart, onProductAdd } = props;
  const [showAlert, setShowAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const showSuccess = () => (
    <div className="alert alert-success" style={{ display: successMessage? "" : "none" }}>
      {successMessage}
    </div>
  );

  useEffect(() => {
    get(`/products/${id}`)
      .then((data) => {
        if (data) {
          setProduct(data);
          console.log(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleQuantityChange = (newQuantity) => {
    // Ensure newQuantity is a valid number and not NaN
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onProductAdd({ ...product, quantity });
    setQuantity(1); // Reset quantity to 1 after adding to the cart
    setSuccessMessage("Your item was added to the cart!!")
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="page product-page">
    {showSuccess()}
      <Link to="/shop">
        <i className="bi bi-arrow-left" style={{ fontStyle: "normal" }}> back to shop</i>
      </Link>
  
      <div className='product-details-container'>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      </div>
      </div>

      <div className="quantity-section">
        <label htmlFor="quantity">Quantity:</label>
        <span>
          <button
            onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          />
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </span>
        <button onClick={handleAddToCart} className="add-to-cart">
          Add to Cart
        </button>
  
        
        </div>
    </div>
  );
}
