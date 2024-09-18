import React from "react";
import { Link } from "react-router-dom";
function Electronic({ product }) {
  const { image, title, price, rating } = product;
  return (
    <div className="card w-25 my-3">
      <div className="card-header">
        <img src={image} width="100%" height={200} />
      </div>
      <div className="card-body">
        <h6>{title}</h6>
        <p>Price: ${price}</p>
        <p>Rating: {rating.rate}</p>
        <Link to="/productdetails">
          <button className="btn btn-primary mx-1">Product Details</button>
        </Link>
        <button className="btn btn-warning mx-1">Add to Cart</button>
      </div>
    </div>
  );
}

export default Electronic;
