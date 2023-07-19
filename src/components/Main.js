import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ForgotPassword from "./ForgotPassword";

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/SignupPage" element={<SignupPage />} />
      <Route exact path="ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default Main;
