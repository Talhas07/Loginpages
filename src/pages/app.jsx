// You can see that we are using `BrowserRouter`, `Routes` and `Route` from the `react-router-dom` library.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";

import Register from "./register";
import Login from "./login";
import Newpass from "./newpass";
import Success from "./success";
import Forgetpass from "./forgotpass";
import Notfound from "./Notfound";
import Loginerr from "./loginerr";

// Now let's move to routing part.

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const LoginRedirect = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/" /> : children;
};
function App() {
  const layoutWrapper = (component) => {
    return (
      <PrivateRoute>
        <Nav page={component} />
      </PrivateRoute>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Login />} />
          <Route path="/loginerr" element={<Loginerr />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newpass" element={<Newpass />} />
          <Route path="/forgotpass" element={<Forgetpass />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Notfound />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
