import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import styles from "../styles/ShoppingPage.module.css";

function ShoppingPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles["shop-header"]}>
        <h1>Shop</h1>
        <p>Find whatever your heart desires</p>
      </div>
      <div className={styles["product-container"]}>
        {products.map((product) => {
          return (<ProductCard product={product} addToCart={addToCart} />);
        })}
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ShoppingPage;
