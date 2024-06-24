import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="form-box">
        <div className="title-box">
          <h3 className="title">Log in</h3>
          <p className="desc">Lorem ipsum dolor sit.</p>
        </div>
        <form className="form login-form">
          <div className="input-box username-input_box">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-box password-input_box">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="remember-box">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button>Sign in</button>
        </form>
        <p>
          Don't have an account ? <a href="/signup">Signup now</a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
