import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import {
  EyeInvisibleOutlined,
  MailOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import * as React from "react";

function Forgetpass() {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const submit = async (values) => {
    values.preventDefault();
    try {
      console.log("Success:", values);
      console.log(email);
      const response = await axios.get(
        `http://localhost:3000/user/findbymail/${email}`
      );

      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data)); // Storing response as JSON string
      navigate("/newpass");
    } catch (error) {
      console.error("Error:", error);
      navigate("/notfound"); // Handle error appropriately, e.g., show error message to the user
    }
  };

  return (
    <>
      <h2>Forget Password?</h2>
      <p>No worries we’ll send you reset instructions on your email</p>
      <br></br>
      <br></br>
      <form onSubmit={submit}>
        <Input
          placeholder="input email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          prefix={<MailOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
        />
        <br></br>
        <br></br>{" "}
        <span style={{ float: "right", color: " #6c7578" }}>
          Already have an account? <a href="/">Login</a>
        </span>
        <br></br>
        <Button
          style={{
            backgroundColor: "#213547",
            borderColor: "213547",
            color: "#ffffffff",
          }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
        <br></br>
      </form>
      <br></br>
      <span style={{ float: "left", color: " #6c7578" }}>
        Dont have an account? <a href="/register">Signup</a>
      </span>
    </>
  );
}

export default Forgetpass;
