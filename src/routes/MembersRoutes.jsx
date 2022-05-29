//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import StartSignup from "../pages/StartSignup";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RecoverPassword from "../pages/RecoverPassword";

export default function MembersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="browse" element={<Dashboard />} />
      <Route path="signup" element={<StartSignup />} />
      <Route path="LoginHelp" element={<RecoverPassword />} />
      <Route path="signup/regform" element={<Signup />} />
    </Routes>
  );
}
