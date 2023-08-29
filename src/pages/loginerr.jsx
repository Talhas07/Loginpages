import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import {
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import * as React from "react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    console.log();
    try {
      e.preventDefault();
      console.log(email, password);

      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log("Login successful:", response);
      localStorage.setItem("token", response.data.token);
      navigate("/success");
      // Handle successful login, e.g., redirect or update user state
    } catch (error) {
      console.error("Login failed:", error);
      navigate("/loginerr");
      // Handle login error, e.g., show error message
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Form.Item validateStatus="error" hasFeedback help="incorrect email">
          <Input
            size="large"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            prefix={<MailOutlined className="site-form-item-icon" />}
            style={{ width: "800px", height: "70px" }} // Adjust width and height as needed
          />
        </Form.Item>
        <br></br>
        <br></br>
        <Form.Item validateStatus="error" hasFeedback help="incorrect password">
          <Input.Password
            placeholder="input password"
            name="pass"
            prefix={<LockOutlined className="site-form-item-icon" />}
            style={{ width: "800px", height: "70px" }}
            onChange={(e) => setPassword(e.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <br></br>
        <br></br>
        <Button
          style={{ backgroundColor: "#213547", borderColor: "213547" }}
          type="primary"
          htmlType="submit"
        >
          Signup
        </Button>
        <br></br>
        <a href="/forgotpass" style={{ float: "right", color: "213547" }}>
          Forgot password?
        </a>
      </form>
      <br></br>
      <span style={{ float: "left" }}>
        Dont have an account? <a href="/register">Signup</a>
      </span>
    </>
  );
};

export default Login;
