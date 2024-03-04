import LoginForm from "../../components/loginForm/LoginForm";

function Login() {
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="login-inner">
            <div className="login-top">
              <h1>Welcome back!</h1>
              <p>Sign in to continue chat</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
