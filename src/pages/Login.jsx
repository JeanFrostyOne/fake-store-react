import React, { useState } from "react";
import Menu from "../components/Menu";
import { baseUrl } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // отменит перезагрузку при отправке формы
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          console.log(json.token);
          localStorage.setItem("token", json.token);
          navigate("/home");
        }
      })
      .catch((err) => alert("Incorrect username or password"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="input-login"
          type="text"
          placeholder="Your login..."
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-password"
          type="password"
          placeholder="Your password..."
        />
        <input
          className="input-email"
          placeholder="Your email..."
          type="email"
        />
        <div className="input-radio">
          Male:
          <input type="radio" />
          Female:
          <input type="radio" />
        </div>
        <button className="input-btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
