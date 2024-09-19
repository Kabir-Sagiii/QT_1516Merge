import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="title">
        <h2>MyMart</h2>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
      </div>

      <div className="nextlinks">
        <Link to="">
          <i class="bi bi-person-circle"></i>
        </Link>
        <Link to="">
          <i class="bi bi-bag-heart-fill"></i>
        </Link>
        <Link to="">
          <i class="bi bi-heart-fill"></i>
        </Link>
        <button className="btn btn-outline-danger text-white">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
