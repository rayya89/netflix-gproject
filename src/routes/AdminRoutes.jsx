//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import StartSignup from "../pages/StartSignup";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import AdminCategory from "../pages/AdminCategory";
import RecoverPassword from "../pages/RecoverPassword";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="browse" element={<Dashboard />} />
      <Route path="signup" element={<StartSignup />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin/:category" element={<AdminCategory />} />
      <Route path="LoginHelp" element={<RecoverPassword />} />
      <Route path="signup/regform" element={<Signup />} />
    </Routes>
  );
}
