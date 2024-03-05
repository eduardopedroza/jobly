import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginForm({ login }) {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(formData);
    setLoggedIn(true);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  if (loggedIn) {
    return <Navigate to="/companies" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button>Login!</button>
    </form>
  );
}

export default LoginForm;
