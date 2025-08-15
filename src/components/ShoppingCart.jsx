import PropTypes from "prop-types"

function ShoppingCart({ cartItems }) {
  function calculateTotal() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  return (
    <div>
      <div>
        <h2>Your Cart</h2>
      </div>
      <div>
        <div>
          {cartItems.map((item) => {
            return (
              <div>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            );
          })}
        </div>
        <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <p>Items: ${calculateTotal().toFixed(2)}</p>
              <p>Shipping and handling: $5.00</p>
              <p>Estimated GST/HST: {(0.05 * calculateTotal()).toFixed(2)}</p>
              <p>
                Total: $
                {(calculateTotal() + 5 + 0.05 * calculateTotal()).toFixed(2)}
              </p>
              <button>Place Order</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
}

export default ShoppingCart;
