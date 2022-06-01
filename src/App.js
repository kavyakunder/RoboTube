import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import "./pages/home/Home.jsx";
import Home from "./pages/home/Home.jsx";
import Explore from "./pages/explore/Explore";
import Liked from "./pages/liked/Liked";
import WatchLater from "./pages/watchLater/WatchLater";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Explore />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
