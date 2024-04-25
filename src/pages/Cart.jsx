import React, { useEffect } from "react";
import { baseUrl } from "../constants/baseUrl";

export default function Cart({ userId }) {
  useEffect(() => {
    fetch(`${baseUrl}/carts/user/${userId}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>sadgsa</div>;
}
