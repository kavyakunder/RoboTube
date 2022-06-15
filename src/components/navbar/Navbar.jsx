import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./navbar.css";
function Navbar() {
  const { auth, setAuth } = useAuth();
  const redirect = useNavigate();

  const signoutAuth = (setAuth) => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("username");
    setAuth(() => ({
      isAuth: false,
      token: null,
      user: "",
    }));
    toast.success("Logout succesful");
    redirect("/videos");
  };

  return (
    <>
      <div className="navbar">
        <span className="heading-robotube">
          <img className="youtube-img" src="assets/youtube-react.png" alt="" />
          RoboTube
        </span>
        <div className="navbar-options">
          {/* <Link className="navbar-links" to="/">
            Home
          </Link> */}
          {auth.isAuth === true ? (
            <>
              <Link className="navbar-link" to="/videos">
                Home
              </Link>
              <Link
                className="navbar-link"
                to="/logout"
                onClick={() => signoutAuth(setAuth)}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link className="navbar-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export { Navbar };
