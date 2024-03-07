import React, { useState, useContext } from "react";
import JoblyApi from "../api/api";
import UserContext from "../auth/UserContext";

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const INITIAL_STATE = {
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: currentUser.password,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let newProfile = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    console.log(newProfile);
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(formData.username, newProfile);
    } catch (e) {
      console.error("Error updating user:", e);
    }

    setFormData((f) => ({
      ...f,
      password: "",
    }));
    setCurrentUser(updatedUser);
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={currentUser.username}
          disabled
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="firstName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;
