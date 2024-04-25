import React, { useEffect, useState } from "react";
import Product from "./Product";
import { baseUrl } from "../constants/baseUrl";

export default function Products({ category, sort, search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `${baseUrl}/products${
        category ? `/category/${category}` : ""
      }?sort=${sort}`
    )
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category, sort]);

  return (
    <div className="products">
      {products
        .filter((item) => {
          return (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
}
