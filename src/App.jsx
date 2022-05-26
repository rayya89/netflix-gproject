//NPM packages
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";
import { useUser } from "./state/UserContext";
import AdminRoutes from "./routes/AdminRoutes";
import MembersRoutes from "./routes/MembersRoutes";
import UnloggedRoutes from "./routes/UnloggedRoutes";

export default function App() {
  // local state
  const { user } = useUser();

  return (
    <div className="App">
      <BrowserRouter>
        {user && user.role === "member" && <MembersRoutes />}
        {user && user.role === "admin" && <AdminRoutes />}
        {!user && <UnloggedRoutes />}
      </BrowserRouter>
    </div>
  );
}
