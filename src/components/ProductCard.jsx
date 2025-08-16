import { useState } from "react";
import PropTypes from "prop-types";
import style from "../styles/ProductCard.module.css";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(quantity);
  const [isEditing, setIsEditing] = useState(false);

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setInputValue(quantity - 1);
    }
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.title} to cart`);
    setQuantity(1);
    setInputValue(1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
    setInputValue(quantity + 1);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleInputFocus() {
    setIsEditing(true);
    setInputValue(""); // Clear the input when focused
  }

  function handleInputBlur() {
    setIsEditing(false);
    const value = parseInt(inputValue, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
      setInputValue(value);
    } else {
      setInputValue(quantity); // Reset to last valid quantity
    }
  }

  return (
    <div className={style["card-container"]}>
      <div className={style["image-container"]}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={style["product-info"]}>
        <h4>{product.title}</h4>
        <p><i class="fa-solid fa-star"></i> {product.rating.rate}</p>
      </div>
      <div className={style["product-description"]}>
        <p>{product.description}</p>
      </div>
      <div className={style["product-price"]}>
        <p>${product.price}</p>
        <div className={style["quantity-container"]}>
          <button class={style["decrement"]} onClick={handleDecrement}>
            -
          </button>
          <input
            type="number"
            value={isEditing ? inputValue : quantity}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            min="1"
          />
          <button class={style["increment"]} onClick={handleIncrement}>
            +
          </button>
        </div>
        <button class={style["add-to-cart"]} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
