import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { signupFunc } from "../../services/signupService";
import toast from "react-hot-toast";

import "./login.css";

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState("");

  const signUpHandler = async (user) => {
    try {
      const {
        data: {
          encodedToken,
          createdUser: { ...userDetails },
        },
      } = await signupFunc(user);
      console.log("created user", userDetails);
      if (encodedToken) {
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
        localStorage.setItem("user", JSON.stringify(userDetails));
        setAuth({
          isAuth: true,
          token: encodedToken,
          user: { ...userDetails },
        });
        if (user.password === user.confirmPassword) {
          toast.success("Successfully signed up!");
          navigate("/videos", { replace: true });
        } else {
          toast.error("Passwords don't match!");
        }
      } else {
        console.log("why failed");
        throw new Error("Signup failed. Refresh and try again.");
      }
    } catch (error) {
      console.log("error is", error);
      setSignupError("Signup failed");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUpHandler(user);
        }}
        className="login-div"
      >
        <div className="title">RoboTube</div>
        <div className="sub-title">The Video Library</div>
        <div className="form">
          <div className="username">
            <i className="far fa-user fa-lg icons">
              <input
                type="text"
                placeholder="Name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </i>
          </div>
          <div className="password">
            <i className="fas fa-envelope fa-lg icons">
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </i>
          </div>
          <div className="password">
            <i className="fas fa-lock fa-lg icons">
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </i>
          </div>
          <div className="password">
            <i className="fas fa-lock fa-lg icons">
              <input
                type="password"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
            </i>
          </div>
          <button className="btn-entry">SIGN UP</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
