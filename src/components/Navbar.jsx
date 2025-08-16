import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import style from '../styles/Navbar.module.css'

const Navbar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
    return (
      <div className={style["container"]}>
        <h2 className={style["title"]}><Link className={style["hidden"]} to="/">Buyable</Link></h2>
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

Navbar.propTypes = {
  cartItems: PropTypes.array.isRequired
}

export default Navbar;