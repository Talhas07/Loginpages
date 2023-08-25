import { useState } from "react";

import "./App.css";
import {
  UserOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import * as React from "react";

function Register() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const submit = (values) => {
    values.preventDefault();
    console.log("Success:", values);
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <Input
          size="large"
          name="user"
          placeholder="Username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
        />
        <br></br>
        <br></br>

        <Input
          size="large"
          name="email"
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }} // Adjust width and height as needed
        />

        <br></br>
        <br></br>

        <Input.Password
          placeholder="input password"
          name="pass"
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
        Already have an account?<a href="URL"> Link Text</a>
      </span>
    </>
  );
}

export default Register;
