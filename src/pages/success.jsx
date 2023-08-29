import "./App.css";

import { Input, Button } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const Navigate = useNavigate();
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
        onClick={() => {
          Navigate("/");
        }}
      >
        Back to Login
      </Button>
      <br></br>
    </>
  );
}

export default Success;
