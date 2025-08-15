import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
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
            <Link to="cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </div>
    );
  }

export default Navbar;