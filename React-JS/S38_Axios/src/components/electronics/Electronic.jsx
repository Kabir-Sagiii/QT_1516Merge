import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Electronic({ product }) {
  const [addedInCart, setAddedInCart] = useState(false);
  const { image, title, price, rating, id } = product;

  const addToCart = () => {
    //Logic to send data to cart
    axios
      .post("http://localhost:3000/addToCart", product)
      .then(() => {
        alert("Product Added in Cart");
      })
      .catch(() => {
        alert("Failed to Add in Cart");
      });
  };
  return (
    <div className="card w-25 my-3">
      <div className="card-header">
        <img src={image} width="100%" height={200} />
      </div>
      <div className="card-body">
        <h6>{title}</h6>
        <p>Price: ${price}</p>
        <p>Rating: {rating.rate}</p>
        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-primary mx-1">Product Details</button>
        </Link>
        {addedInCart ? (
          <button className="btn btn-danger mx-1">Remove</button>
        ) : (
          <button className="btn btn-warning mx-1" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Electronic;
