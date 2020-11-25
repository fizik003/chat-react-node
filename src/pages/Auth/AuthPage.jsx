import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "modules";

import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route path={["/", "/login"]} component={LoginForm} exact />
        <Route path="/register" component={RegisterForm} />
      </div>
    </section>
  );
};

export default AuthPage;
