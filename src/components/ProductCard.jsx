import { useState } from "react";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState(quantity);
  const [isEditing, setIsEditing] = useState(false);

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setInputValue(quantity - 1);
    }
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
    <div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h4>{product.title}</h4>
        <p>{product.rating.rate}</p>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <p>${product.price}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <input
            type="number"
            value={isEditing ? inputValue : quantity}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            min="1"
          />
          <button onClick={handleIncrement}>+</button>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
