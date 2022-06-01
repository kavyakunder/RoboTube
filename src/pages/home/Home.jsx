import React from "react";
import { Navbar, Footer } from "../../components";
import { useData } from "../../context/dataContext";
import "./home.css";

function Home() {
  const { state } = useData();
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
          {state.categories.map((eachCategory) => {
            return (
              <>
                <div className="single-category">
                  <div className="each-image">
                    <img
                      className="section-image"
                      src={eachCategory.image}
                      alt={eachCategory.categoryName}
                    />
                  </div>
                  <h2 className="cat-name">{eachCategory.categoryName}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
