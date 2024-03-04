import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    <>
      <Nav>
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink to="/">Logout</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <span>Welcome, {currentUser.username}</span>
        </NavItem>
      </Nav>
    </>;
  }

  function loggedOutNav() {
    <>
      <Nav>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
      </Nav>
    </>;
  }

  return (
    <Navbar>
      <NavLink to="/">Jobly</NavLink>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </Navbar>
  );
}

export default Navigation;
