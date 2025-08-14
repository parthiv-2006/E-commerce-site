import React from "react";
import { useState, useEffect } from "react";
import ProductCard from './ProductCard'

function ShoppingPage() {
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
        console.log(data)
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
    <div>
      <div>
        <h1>Shop</h1>
        <p>Find whatever your heart desires</p>
      </div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product}/>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingPage;
