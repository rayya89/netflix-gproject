// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import Logo from "../assets/Logo.png";
import RecoverForm from "../components/RecoverForm";
import EmailSent from "../components/EmailSent";

export default function RecoverPassword() {
  //Local state
  const [email, setEmail] = useState();
  const [sent, setSent] = useState(false);

  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="Netflix" />
        <Link to="/">Sign In</Link>
      </header>
      {!sent && (
        <RecoverForm emailState={[email, setEmail]} setSent={setSent} />
      )}
      {sent && <EmailSent email={email} />}
    </div>
  );
}
