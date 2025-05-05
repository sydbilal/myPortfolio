// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/global.css"; // Keep your global styles
import { Toaster } from 'react-hot-toast' // ✅ Import


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} /> {/* ✅ Add here */}
    </Router>
  </React.StrictMode>
);
