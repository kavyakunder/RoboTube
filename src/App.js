import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Navbar } from "./components/navbar/Navbar";
// import Navbar from "./components/navbar/Navbar";
import "./pages/home/Home.jsx";
import Home from "./pages/home/Home.jsx";
import Explore from "./pages/explore/Explore";
import Liked from "./pages/liked/Liked";
import WatchLater from "./pages/watchLater/WatchLater";
import Login from "./pages/Login/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Route>
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
