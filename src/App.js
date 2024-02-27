import React from "react";
import { Header } from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageOne } from "./pages/PageOne";
import { NotFound } from "./pages/NotFound";
import { Login } from "./Login";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};