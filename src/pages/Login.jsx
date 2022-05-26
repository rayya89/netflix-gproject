// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import Logo from "../assets/Logo.png";
import InputField from "../components/InputField";
import form from "../data/loginForm.json";
import { loginUser } from "../scripts/firebaseAuth";
import { getDocument } from "../scripts/fireStore";
import { useUser } from "../state/UserContext";
import { onFail } from "../scripts/onFail";

export default function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin(event) {
    event.preventDefault();
    let user;
    const uid = await loginUser(email, password).catch(onFail);
    if (uid) user = await getDocument("users", uid).catch(onFail);

    if (user) onSuccess(user);
  }

  function onSuccess(user) {
    setUser(user);
    user.role === "member" && navigate("/dashboard");
    user.role === "admin" && navigate("/admin");
  }

  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="Netflix" />
      </header>
      <div>
        <h1>Sign In</h1>
        <form className="form" onSubmit={onLogin}>
          <InputField setup={form.email} state={[email, setEmail]} />
          <InputField setup={form.password} state={[password, setPassword]} />
          <button>Sign in</button>
        </form>
        <Link to="/LoginHelp">Need help?</Link>
        <p>New to Netflix?</p>
        <Link to="/signup">Sign up now</Link>
      </div>
    </div>
  );
}
