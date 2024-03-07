import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      {currentUser ? (
        <p>Welcome back, {currentUser.firstName}</p>
      ) : (
        <p>
          {" "}
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </p>
      )}
    </div>
  );
}

export default Homepage;
