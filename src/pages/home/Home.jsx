import React from "react";
import { Link } from "react-router-dom";
import { Footer, Sidebar } from "../../components";
import { useData } from "../../context/dataContext";
import "./home.css";
import { useLocation } from "react-router-dom";
function Home() {
  const { state, dispatch } = useData();
  // const dispatchHandler = (category) => {
  //   dispatch({ type: "CATEGORY", payload: { category } });
  // };
  const { pathname } = useLocation();
  console.log("Location here is", pathname);
  return (
    <>
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
                <Link
                  className="link-handler"
                  to="/videos"
                  // onClick={() => dispatchHandler(category.categoryName)}
                >
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
                </Link>
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
