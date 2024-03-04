import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("user", "logged in");
    navigate("/");
  };

  return (
    <>
      <div className="formBlock">
        <form onSubmit={handleSubmit}>
          <div className="userNameInput inputBlock">
            <label htmlFor="userName">Username</label>
            <input type="text" placeholder="Enter username" id="userName" />
          </div>
          <div className="passwordInput inputBlock">
            <div className="top">
              <label htmlFor="password">Password</label>
              <a href="#">Forgot password?</a>
            </div>
            <input type="password" placeholder="Enter Password" id="password" />
          </div>
          <div className="rememberInput inputBlock">
            <input
              className="remember"
              type="checkbox"
              name="remember"
              id="remember"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button>Log in</button>
        </form>
        <div className="otherOption">
          <p className="title">Sign in with</p>
          <div className="options">
            <button className="facebookBtn">
              <FaFacebook />
              Facebook
            </button>
            <button className="googleBtn">
              <FaGoogle />
              Google
            </button>
          </div>
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
