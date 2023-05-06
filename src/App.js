import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { LoginSignUp } from "./Pages/LoginSignup/Index";
import { Loader } from "./components/Loader";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Loader />
    </>
  );
};

export default App;
