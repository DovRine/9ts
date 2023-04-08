import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../lib/getApiUrl";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await fetch(`${getApiUrl()}/login`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      console.log(data, "logged in");
      return navigate("/userstart");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <div className="login-block-blue">
        <p className="login-text-header">Welcome</p>
        <div className="login-block-white">
          <form onSubmit={handleSubmit}>
            <br></br>
            <p className="login-text-name-2">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="login-bar-2"
            />
            {/* required */}
            <p className="login-text-name-3">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="login-bar-3"
            />
            {/* required */}
            <button
              style={{ cursor: "pointer" }}
              type="submit"
              className="login-bar-main"
            >
              Login
            </button>
          </form>

          <div className="login-line"></div>
          <div className="login-or-box">OR</div>
          <div className="social-links-login">
            <a href="/verified">
              <img
                className="social fb"
                src="../assets/facebook.png"
                alt="facebook logo"
              ></img>
            </a>
            <a href="/verified">
              <img
                className="social twitter"
                src="../assets/twitter.png"
                alt="twitter logo"
              ></img>
            </a>
            <a href="/verified">
              <img
                className="social insta"
                src="../assets/instagram.png"
                alt="instagram logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
