import React, { useState } from "react";
import "./App.css";
import AppRouter from "./components/Router/Router";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
