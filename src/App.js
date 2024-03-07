import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import Navigation from "./routes-nav/Navigation";
import MyRoutes from "./routes-nav/Routes";
import { jwtDecode } from "jwt-decode";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (e) {
          console.error("Error fetching user:", e);
        }
      }
      setIsLoading(true);
    }

    setIsLoading(false);
    fetchUser();
  }, [token]);

  const signup = async (user) => {
    try {
      let token = await JoblyApi.signup(user);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("error signing up:", e);
    }
  };

  const login = async (user) => {
    try {
      let token = await JoblyApi.login(user);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("error logging in:", e);
    }
  };

  const logout = () => {
    setToken(null);
    setCurrentUser(null);
  };

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Navigation logout={logout} />
          <MyRoutes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
