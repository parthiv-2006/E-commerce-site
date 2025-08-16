import style from "../styles/HomePage.module.css"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={style['container']}>
      <div className={style['welcome']}>
        <h1>Welcome to our Shop</h1>
        <p>This is our Homepage! Feel free to explore</p>
        <Link to="/shop"><button>
          Shop Now
        </button></Link>
      </div>
      <div className={style['card-container']}>
        <div className={style['card']}>
          <h3>Free Shipping</h3>
          <p>Free Shipping on all orders over $50</p>
        </div>
        <div className={style['card']}>
          <h3>Easy Returns</h3>
          <p>Not Satisfied? Return your items within 30 days for a full refund</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
