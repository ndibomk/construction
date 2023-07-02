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
import NewProduct from "./pages/products/NewProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Dashboard from "./pages/users/Dashboard";
import SingleProducts from "./pages/products/SingleProducts";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import AllProducts from "./pages/Admin/AllProducts";
import Profile from "./pages/users/Profile";
import SocialPlace from "./pages/users/SocialPlace";
import SocialProfil from "./pages/users/Social-Profil";
import Protected from "./services/PrivateRoute";
import Mpesa from "./pages/mpesa/Mpesa";
import Transactions from "./pages/Admin/Transactions";
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
        <ToastContainer />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/social" element={<SocialPlace />} />
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/social" element={<SocialProfil />} />{" "}
          <Route path="/social-profile/:id" element={<SocialProfil />} />
          <Route
            path={`/users-dashboard/${user?.result?.name}`}
            element={<Dashboard />}
          />
          <Route path="new-product" element={<NewProduct />} />
          <Route
            path={`/admin-dashboard/${user?.result?.name}`}
            element={<AdminDashboard />}
          />
          <Route
            path={`/admin-dashboard/${user?.result?.name}`}
            element={<AdminDashboard />}
          />
          <Route path="/users" element={<Users />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/mpesa-payment" element={<Mpesa />} />
          {/* <Route path="/social" element={<SocialPlace/>}/> */}
          {/* <Route path="/social-profile/:id" element={<SocialProfil />} /> */}
          <Route path="/single-product/:id" element={<SingleProducts />} />
          {/* <Route */}
          {/* // path={`/users-dashboard/${user?.result?.name}`} */}
          {/* // element={<Dashboard />} */}
          {/* // /> */}
          {/* <Route */}
          {/* // path={`/admin-dashboard/${user?.result?.name}`} */}
          {/* // element={<AdminDashboard />} */}
          {/* // /> */}
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/all-transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
