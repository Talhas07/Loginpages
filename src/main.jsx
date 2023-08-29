import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";

import App from "./pages/app";
import Login from "./pages/login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      {/* <Login /> */}
    </>
  </React.StrictMode>
);
