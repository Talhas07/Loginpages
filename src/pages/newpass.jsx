import { useState } from "react";

import "./App.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import * as React from "react";

function Newpass() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const submit = (values) => {
    values.preventDefault();
    console.log("Success:", values);
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
          Already have an account? <a href="URL">Login</a>
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
        Dont have an account? <a href="URL">Signup</a>
      </span>
    </>
  );
}

export default Newpass;
