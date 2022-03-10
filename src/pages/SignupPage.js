// src/pages/SignupPage.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, phone };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
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
      <h1 aria-label="Signup" className="text-nowrap login-title"></h1>
      <div className="fix-height">
        <div className="LoginPage">
          <div className="title-menu container mx-auto">
            <div className="row cards-title-menu">
              <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                />

                <label>Phone number:</label>
                <input
                  placeholder="+420xxxxxxxxx"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handlePhone}
                />

                <button type="submit" className="button-design">
                  Sign Up
                </button>
              </form>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <p>Already have account?</p>
              <Link to={"/login"} className="link-light">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
