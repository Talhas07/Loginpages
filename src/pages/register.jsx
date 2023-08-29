import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  UserOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Input, Button, notification } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const Navigate = useNavigate();
  const submit = async (values) => {
    values.preventDefault();
    console.log(username, password, email);
    try {
      await axios.post("http://localhost:3000/user/register", {
        username,
        email,
        password,
      });
      console.log("Success");
      notification.success({
        message: "User has been registered successfully",
        duration: 2,
      });
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <Input
          size="large"
          name="user"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
        />
        <br></br>
        <br></br>

        <Input
          size="large"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }} // Adjust width and height as needed
        />

        <br></br>
        <br></br>

        <Input.Password
          placeholder="input password"
          name="pass"
          onChange={(e) => setPassword(e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <br></br>
        <br></br>
        <Button
          style={{ backgroundColor: "#213547", borderColor: "213547" }}
          type="primary"
          htmlType="submit"
        >
          Signup
        </Button>
      </form>
      <br></br>
      <span style={{ float: "left" }}>
        Already have an account?<a href="/"> Login</a>
      </span>
    </>
  );
}

export default Register;
