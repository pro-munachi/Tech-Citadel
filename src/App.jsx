import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<StaticStack />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
