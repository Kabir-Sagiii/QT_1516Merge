import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  let [state, setState] = useState([]);
  useEffect(() => {
    getCartProducts();
  }, []);

  const getCartProducts = () => {
    axios
      .get("http://localhost:3000/addToCart")
      .then((res) => {
        // console.log(res.data);
        setState(res.data);
      })
      .catch(() => {
        alert("Failed to fetch cart details");
      });
  };
  const removeFromCart = (id) => {
    axios
      .delete(`http://localhost:3000/addToCart/${id}`)
      .then(() => {
        alert("Removed Product From Cart");
        getCartProducts();
      })
      .catch(() => {
        alert("Failed to remove product from Cart");
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <h5 className="text-success h2">Cart Information</h5>
      </div>
      {state.length > 0 ? (
        state.map((product) => {
          return (
            <div className="row shadow p-3 my-4 w-75 d-flex justify-content-evenly align-items-center">
              <div className="col-2">
                <img src={product.image} width="70" height={70} />
              </div>
              <div className="col-2">{product.title}</div>
              <div className="col-2">${product.price}</div>
              <div className="col-2">{product.category}</div>
              <div className="col-2">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="h3 text-danger text-center mt-5">
          No Products Added in the Cart
        </h3>
      )}
    </div>
  );
}

export default Cart;
