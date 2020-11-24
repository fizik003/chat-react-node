import React from "react";
import { Block, Button } from "components";

import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p> Пожалуйста, войдите в свой аккаунт </p>
        </div>
        <Block>
          <Button size="large" type="primary">
            fdfdf
          </Button>
        </Block>
      </div>
    </section>
  );
};

export default AuthPage;
