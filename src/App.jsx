//NPM packages
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";
import { useUser } from "./state/UserContext";
import AdminRoutes from "./routes/AdminRoutes";
import MembersRoutes from "./routes/MembersRoutes";
import UnloggedRoutes from "./routes/UnloggedRoutes";

export default function App() {
  // local state
  const [email, setEmail] = useState("");
  const { user } = useUser();

  return (
    <div className="App">
      <BrowserRouter>
        {user && user.role === "member" && (
          <MembersRoutes emailState={[email, setEmail]} />
        )}
        {user && user.role === "admin" && (
          <AdminRoutes emailState={[email, setEmail]} />
        )}
        {!user && <UnloggedRoutes emailState={[email, setEmail]} />}
      </BrowserRouter>
    </div>
  );
}
