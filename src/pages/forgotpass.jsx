import { useState } from "react";

import "./App.css";
import {
 
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import * as React from "react";

function Forgetpass() {

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const submit = (values) => {
    values.preventDefault();
    console.log("Success:", values);
  };

  return (
    <>
      <h2>Forget Password?</h2>
      <p>No worries we’ll send you reset instructions on your email</p>
      <br></br>
      <br></br>
      <form onSubmit={submit}>
        <Form.Item
          validateStatus="error"
          hasFeedback
          help="Password incorrect "
        >
          <Input.Password
            placeholder="input password"
            name="pass"
            prefix={<LockOutlined className="site-form-item-icon" />}
            style={{ width: "800px", height: "70px" }}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Input.Password
          validateStatus="error"
          hasFeedback
          help="Should have something"
          placeholder="input password"
          name="pass"
          prefix={<LockOutlined className="site-form-item-icon" />}
          style={{ width: "800px", height: "70px" }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
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
          Submit
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

export default Forgetpass;
