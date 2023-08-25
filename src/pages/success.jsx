import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Input, Button } from "antd";
import * as React from "react";

function Success() {
  const submit = (values) => {
    values.preventDefault();
    console.log("Success:", values);
  };

  return (
    <>
      <h2>Password Reset Successfully</h2>

      <Button
        style={{
          backgroundColor: "#213547",
          borderColor: "213547",
          color: "#ffffffff",
        }}
        type="primary"
        htmlType="submit"
      >
        Back to Login
      </Button>
      <br></br>
    </>
  );
}

export default Success;
