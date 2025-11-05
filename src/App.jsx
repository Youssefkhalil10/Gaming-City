import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import DashBord from "./pages/DashBord";
import AddNews from "./pages/AddNews";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="setting" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashbord" element={<DashBord />} />
        <Route path="add-news" element={<AddNews />} />
      </Routes>
    </>
  );
}

export default App;
