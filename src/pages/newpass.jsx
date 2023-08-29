import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Newpass() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();
  const submit = async (values) => {
    values.preventDefault();
    try {
      if (password !== confirmPassword) {
        navigate("/notfound");
      } else {
        console.log(password);
        const user = JSON.parse(localStorage.getItem("user"));
        const data = {
          username: user.username,
          password: password,
          email: user.email,
        };
        const response = await axios.patch(
          `http://localhost:3000/user/${user._id}`,
          data
        );
        console.log("the password is reset successfullt" + response);
        navigate("/success");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <h2>Set New Password</h2>
      <p>Your new password must be different to previously used password</p>
      <br></br>
      <br></br>

      <form onSubmit={submit}>
        <Input.Password
          placeholder="New password"
          name="pass"
          prefix={<LockOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
          onChange={handlePasswordChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <br></br>
        <br></br>
        <Form.Item
          validateStatus={password === confirmPassword ? "success" : "error"}
          hasFeedback
          help={
            password === confirmPassword
              ? "Passwords match"
              : "Passwords do not match"
          }
        >
          <Input.Password
            placeholder="input password"
            name="pass"
            onChange={handleConfirmPasswordChange}
            prefix={<LockOutlined className="site-form-item-icon" />}
            style={{ width: "800px", height: "70px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
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
          Reset
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

export default Newpass;
