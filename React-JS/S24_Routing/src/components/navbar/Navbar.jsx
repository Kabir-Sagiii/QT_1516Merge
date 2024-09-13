import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="title">
        <h2>MyMart</h2>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/electronics">Electronics</a>
        <a href="/jewelery">Jewelery</a>
        <a href="/mens">Mens</a>
        <a href="/womens">Womens</a>
      </div>

      <div className="nextlinks">
        <a href="">
          <i class="bi bi-person-circle"></i>
        </a>
        <a href="">
          <i class="bi bi-bag-heart-fill"></i>
        </a>
        <a href="">
          <i class="bi bi-heart-fill"></i>
        </a>
        <button className="btn btn-outline-danger text-white">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
