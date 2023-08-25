import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import Register from "./pages/Register";
import Success from "./pages/success";
import Login from "./pages/login";
import Forgetpass from "./pages/forgotpass";
import Newpass from "./pages/newpass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Register />
      {/* <Login /> */}
      {/* <Forgetpass /> */}
      {/* <Newpass /> */}
      {/* <Success /> */}
    </>
  </React.StrictMode>
);
