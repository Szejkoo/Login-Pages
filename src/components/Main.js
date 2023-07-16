import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SingupPage from "./SingupPage";
import ForgotPassword from "./ForgotPassword";

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="SingupPage" element={<SingupPage />} />
      <Route exact path="ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default Main;
