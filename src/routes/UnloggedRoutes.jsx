//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import StartSignup from "../pages/StartSignup";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotLogged from "../pages/NotLogged";
import RecoverPassword from "../pages/RecoverPassword";

export default function UnloggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<StartSignup />} />
      <Route path="LoginHelp" element={<RecoverPassword />} />
      <Route path="signup/regform" element={<Signup />} />
      <Route path="*" element={<NotLogged />} />
    </Routes>
  );
}
