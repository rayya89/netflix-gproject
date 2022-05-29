// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import Logo from "../assets/Logo.png";
import InputField from "../components/InputField";
import form from "../data/signUpForm";
import { createUser } from "../scripts/firebaseAuth";
import { createDocumentWithId, readDocument } from "../scripts/fireStore";
import { useUser } from "../state/UserContext";
import { onFail } from "../scripts/onFail";

export default function Signup() {
  const { setUser, email, setEmail } = useUser();
  const navigate = useNavigate();

  //Local state
  const [password, setPassword] = useState("");

  async function onSignup(event) {
    event.preventDefault();
    const UID = await createUid().catch(onFail);
    let newUser, userData;
    if (UID) newUser = await createDocument(UID).catch(onFail);
    if (newUser) userData = await getUserData(UID).catch(onFail);
    if (userData) onSuccess(userData);
  }

  async function createUid() {
    const UID = await createUser(email, password);
    return UID;
  }

  async function createDocument(UID) {
    const newUser = { role: "member" };
    const payload = await createDocumentWithId("users", UID, newUser);
    return payload;
  }

  async function getUserData(UID) {
    const userData = await readDocument("users", UID);
    return userData;
  }

  async function onSuccess(userData) {
    setUser(userData);
    navigate("/browse");
  }

  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="Netflix" />
        <Link to="/">Sign In</Link>
      </header>
      <h1>Create a password to start your membership</h1>
      <p>Just one more step and you're finished!</p>
      <p>We hate paperwork, too.</p>
      <form className="form" onSubmit={onSignup}>
        <InputField setup={form.filled_email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Create account</button>
      </form>
    </div>
  );
}
