import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveAppBar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Gallerytwo from "./pages/users/Gallerytwo";
import Topbar from "./components/Topbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Gallery from "./pages/users/Gallery";
function App() {
  const dispatch = useDispatch();
  const [data, setDate] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <BrowserRouter>
       <Gallerytwo/>
        {/* <ToastContainer />
        <Topbar/>
        <ResponsiveAppBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photos" element={<Gallery />} />
         
          <Route path="/login" element={<Login />} />
         
        </Routes>
        <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
