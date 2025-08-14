import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <h2><Link to="/">Buyable</Link></h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
    );
  }

export default Navbar;