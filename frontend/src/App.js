// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Video_Player from "./components/VideoPlayer/Video_Player";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        /> */}
        <Route path= "/" element={<SearchPage />} />
        <Route path= "/video/:video_Id" element={<Video_Player/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" 
          element={
          <PrivateRoute>
            <VideoPage />
          </PrivateRoute>} />
        <Route 
          path="/addcar"
          element={
            <PrivateRoute>
              <AddCarPage />
            </PrivateRoute>
          } 
        /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
