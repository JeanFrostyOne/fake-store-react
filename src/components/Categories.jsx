import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/baseUrl";

export default function Categories({ category, setCategory }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/products/categories`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="category">
      <button
        onClick={() => setCategory("")}
        className={
          category == "" ? "category-btn category-active" : "category-btn"
        }
      >
        all
      </button>
      {data.map((button, index) => {
        return (
          <button
            onClick={() => setCategory(button)}
            key={index}
            className={
              button == category
                ? "category-btn category-active"
                : "category-btn"
            }
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}
