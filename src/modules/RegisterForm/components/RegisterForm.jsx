import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Button, Block } from "components";

const RegisterForm = () => {
  const success = false;
  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p> Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form name="normal_login" className="login-form">
            <Form.Item name="username">
              <Input
                placeholder="E-mail"
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item name="user">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Пароь"
                size="large"
              />
            </Form.Item>
            <Form.Item name="password2">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button size="large" type="primary">
                Зарегистрироваться
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>

            <h2>Подтвердите свой аккаунт </h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтвержение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </>
  );
};

export default RegisterForm;
