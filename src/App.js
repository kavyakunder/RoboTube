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
import History from "./pages/history/History";
import { Playlists } from "./pages/playlist/Playlist";
import { SinglePlaylist } from "./pages/single-playlist/SinglePlaylist";
import { useLocation } from "react-router-dom";
import SignUp from "./pages/Login/SignUp";
function App() {
  const { pathname } = useLocation();

  console.log("Location here is", location);
  return (
    <>
      <Navbar />
      {pathname === "/" || pathname === "/login" || pathname === "/signup" ? (
        <></>
      ) : (
        <Sidebar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
