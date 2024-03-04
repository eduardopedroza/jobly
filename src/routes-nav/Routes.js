import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <PrivateRoute path="/companies" element={<CompanyList />} />
      <PrivateRoute path="/companies/:handle" element={<CompanyDetail />} />
      <PrivateRoute path="/jobs" element={<JobList />} />
      <PrivateRoute path="/profile" element={<ProfileForm />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Navigate to="/" />
    </Routes>
  );
}

export default Routes;
