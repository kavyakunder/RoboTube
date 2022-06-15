import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3>RoboWatch Video </h3>
          <div>
            <img src="assets/youtube-react.png" alt="RoboWatch-logo" />
          </div>
          <p className="footer-copyright">© 2021| RoboWatch</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-phone footer-robotube"></i>
            <p>+123-45-5679</p>
          </div>

          <div>
            <i className="fa fa-shopping-cart footer-robotube"></i>
            <p>
              <a href="https://robostore-react.netlify.app/">RoboStore</a>
            </p>
          </div>
          <div>
            <i className="fa fa-envelope footer-robotube"></i>
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
            Robotics.Do watch the videos, and dont forget to like the videos!!
          </p>
        </div>
      </footer>
    </>
  );
}

export { Footer };
