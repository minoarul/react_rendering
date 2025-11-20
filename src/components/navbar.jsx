import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        
        <div className="logo">Logo</div>

        <div className="nav-links">
          <Link className="linklist" to="/">Home</Link>
          <Link className="linklist" to="/About">About</Link>
          <Link className="linklist" to="/Product">Product</Link>
          <Link className="linklist" to="/Service">Service</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
