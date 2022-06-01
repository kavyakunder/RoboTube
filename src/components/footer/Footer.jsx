import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3>RoboWatch Video </h3>
          <div>
            <img src="assets/robovidlogo2.png" alt="RoboWatch-logo" />
          </div>
          <p className="footer-copyright">© 2021| RoboWatch</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-phone"></i>
            <p>+123-45-5679</p>
          </div>

          <div>
            <i className="fa fa-shopping-cart"></i>
            <p>
              <a href="https://robostore-react.netlify.app/">RoboStore</a>
            </p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#">robo@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-about">
            <span>About</span>
            RoboWatch is a video-library for tech enthusiasts.There are
            different sections provided in order for a beginner to learn about
            Robotics. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, praesentium.
          </p>
        </div>
      </footer>
    </>
  );
}

export { Footer };
