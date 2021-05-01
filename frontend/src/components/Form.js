import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles/Form.css";

const RegForm = ({ fetchEndpoint, title, isRegisterForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = { username, password, email };
    setIsAdding(true);

    try {
      const response = await fetch(
        `http://localhost:9090/rest/${fetchEndpoint}/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (response.ok) {
        setUsername("");
        setPassword("");
        setEmail("");
        setIsAdding(false);
        toast.success("Your account has been created");
        setTimeout(() => {
          history.push("/login");
        }, 5000);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setIsAdding(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div
          className="check"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            paddingBottom: "2rem",
          }}
        >
          <input type="checkbox" name="seller" id="seller" />
          <label htmlFor="seller">Login as a seller</label>
        </div>
        {isRegisterForm ? (
          <div className="email">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              typeof="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {!isAdding ? (
          <button type="submit" className="filled-button">
            {isRegisterForm ? "Register" : "Login"}
          </button>
        ) : (
          <button type="submit" disabled className="filled-button">
            {isRegisterForm ? "Registering" : "Logging in"}
          </button>
        )}
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default RegForm;
