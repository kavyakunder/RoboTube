import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Navbar } from "./components/navbar/Navbar";
import "./pages/home/Home.jsx";
import Home from "./pages/home/Home.jsx";
import Explore from "./pages/explore/Explore";
import Liked from "./pages/liked/Liked";
import WatchLater from "./pages/watchLater/WatchLater";
import Login from "./pages/Login/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import SingleVideo from "./pages/single-video/SingleVideo";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<WatchLater />} />
        </Route>
      </Routes>
      <Toaster />
      {/* <Home /> */}
    </>
  );
}

export default App;
