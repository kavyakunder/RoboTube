import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import "./home.css";
function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero-section-1">
          <img
            className="hero-img"
            src="assets/hero-img-robot.jpg"
            alt="hero-img"
          />
        </div>
        <h1 className="main-category">Categories</h1>

        <div className="categories">
          <div class="single-category">
            <img
              className="section-image"
              src="https://images.unsplash.com/photo-1631378297854-185cff6b0986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWRib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="breadboard"
            />
            <h2 className="cat-name">Breadboard</h2>
          </div>
          <div class="single-category">
            <img
              className="section-image"
              src="https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvYm90JTIwYXJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="arduino"
            />
            <h2 className="cat-name">Arduino</h2>
          </div>
          <div className="single-category">
            <img
              className="section-image"
              src="https://images.unsplash.com/photo-1508175800969-525c72a047dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90JTIwYXJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="sensor"
            />
            <h2 className="cat-name">Sensors</h2>
          </div>
          <div className="single-category">
            <img
              className="section-image"
              src="https://5.imimg.com/data5/SELLER/Default/2021/1/DP/RY/DG/44302309/mecanum-wheels-500x500.jpg"
              alt="wheels"
            />
            <h2 className="cat-name">Wheels</h2>
          </div>
          <div className="single-category">
            <img
              className="section-image"
              src="https://images.unsplash.com/photo-1610812387871-806d3db9f5aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFzcGJlcnJ5JTIwcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
              alt="rsp"
            />
            <h2 className="cat-name">Raspberry Pie</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
