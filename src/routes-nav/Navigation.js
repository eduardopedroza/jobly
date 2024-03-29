import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../auth/UserContext";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
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
            <NavLink to="/" onClick={logout}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <span>Welcome, {currentUser.username}</span>
          </NavItem>
        </Nav>
      </>
    );
  }

  function loggedOutNav() {
    return (
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
      </>
    );
  }

  return (
    <Navbar>
      <NavLink to="/">Jobly</NavLink>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </Navbar>
  );
}

export default Navigation;
