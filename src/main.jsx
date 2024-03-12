import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-dvh flex justify-center md:py-5 p-0">
      <App />
    </div>
  </React.StrictMode>
);
