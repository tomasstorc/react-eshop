import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation/navigation.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<h1>TEST</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
