import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="container-links">
      <Link className="menu-item" to="/login">
        login
      </Link>
      <Link className="menu-item" to="/account">
        account
      </Link>
    </div>
  );
}
