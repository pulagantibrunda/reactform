import React from "react";
import ReactDOM from "react-dom/client";  // Use the 'client' version in React 18
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Create a root using `createRoot` (React 18 method)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root
root.render(
  <Router>
    <App />
  </Router>
);
