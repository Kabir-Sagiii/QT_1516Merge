import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="title">
        <h1>myMart-App</h1>
      </div>
      <div className="links">
        <a href="">Home</a>

        <a href="">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Mens</a>
        <a href="">Womens</a>
      </div>

      <div className="nextlinks">
        <a href="">Profile</a>
        <a href="">Cart</a>
        <a href="">wishlist</a>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
