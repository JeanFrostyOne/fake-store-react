import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../constants/baseUrl";

export default function FullProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`${baseUrl}/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
