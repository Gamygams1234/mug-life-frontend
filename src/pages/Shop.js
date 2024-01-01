import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "../Shop.scss";
import productData from "../products.json";
import useFetch from "../useFetch";
import Loader from "../Loader";

export default function Shop(props) {
  const {cart, onProductAdd , onProductDelete } = props;
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_URL
  const {get, loading} = useFetch(url)

  useEffect(() => {
    fetch(`${url}/products`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
  }, []);


  return (
    <div className="shoppage container">
      {products.length > 0 &&
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => (
            <div className="col" key={index}>
          <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  <button className = "btn btn-primary" onClick={()=>{onProductAdd(product)}}> Add Product ${product.price}</button>
                  <button className = "btn btn-danger" onClick={()=>{onProductDelete(product._id)}}> Delete Product</button>
                  </div>
                </div>
    
            </div>
          ))}
        </div>
}
    </div>
  );
}
