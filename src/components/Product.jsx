import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../constants/baseUrl";

export default function Product({ product }) {
  function handleAdd() {
    fetch(`${baseUrl}/carts`, {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        date: "2024 - 01 - 01",
        products: [{ productId: 5, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  return (
    <div className="product">
      <Link to={`/home/${product.id}`}>
        <img className="product-img" src={product.image} alt="" />
      </Link>
      <div className="product-info">
        <div>
          <h2 className="product-name">{product.title}</h2>
          <p className="product-desc">{product.description}</p>
        </div>
        <div className="product-row">
          <p className="product-price">{product.price} $</p>
          <button onClick={handleAdd} className="product-btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
