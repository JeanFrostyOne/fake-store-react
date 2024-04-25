import React, { useEffect, useState } from "react";
import parseJwt from "../constants/parseJwt";
import { baseUrl } from "../constants/baseUrl";

export default function Account({ userId }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/users/${userId}`)
      .then((res) => res.json())
      .then((json) => setUserInfo(json));
  }, []);
  
  return (
    <div className="account-container">
      {userInfo && (
        <div>
          <h1>User information:</h1>
          <div className="username-row">
            <p>
              <span>Name:</span>
              {userInfo.name ? userInfo.name.firstname : "Unknown"}
            </p>
            <p>
              <span>Lastname:</span>
              {userInfo.name ? userInfo.name.lastname : "Unknown"}
            </p>
          </div>
          <p>
            <span>Email:</span> {userInfo.email}
          </p>
          <p>
            <span>Phone number:</span> {userInfo.phone}
          </p>
          <p>
            <span>
              Address:{" "}
              {userInfo.address ? (
                <span>
                  {userInfo.address.street}, {userInfo.address.city},
                  {userInfo.address.zipcode}
                </span>
              ) : (
                <span>Unknown</span>
              )}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
