// src/pages/LoginPage.js

import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="overlay"></div>
      <video playsInline autostart="true" autoPlay loop muted id="background">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <h1 aria-label="Login" className="text-nowrap login-title"></h1>
      <div className="LoginPage">
        <div className="title-menu container mx-auto">
          <div className="row cards-title-menu">
            <form onSubmit={handleLoginSubmit}>
              <label>Email:</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />

              <label>Password:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />

              <button type="submit" className="button-design">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Link to={"/signup"} className="link-light"> Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
