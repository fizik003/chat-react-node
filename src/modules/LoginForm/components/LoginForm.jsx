import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Button, Block } from "components";

const LoginForm = () => {
  return (
    <>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p> Пожалуйста, войдите в свой аккаунт </p>
      </div>
      <Block>
        <Form name="normal_login" className="login-form">
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary">
              Войти в аккаунт
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
