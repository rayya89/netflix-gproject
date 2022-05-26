// import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
import InputField from "../components/InputField";
import form from "../data/signUpForm.json";

export default function StartSignup({ emailState }) {
  //Local state
  // const [email, setEmail] = useState("");
  const [email, setEmail] = emailState;
  const navigate = useNavigate();

  //Methods
  function onSubmit(event) {
    event.preventDefault();
    console.log(email);
    navigate("/signup/regform");
  }

  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="Netflix" />
        <Link to="/">Sign In</Link>
      </header>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <form className="form" onSubmit={onSubmit}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <button>
          {/* <Link to="signup/regform" state={{ emailState: [email, setEmail] }}> */}
          Get Started
          {/* </Link> */}
        </button>
      </form>
    </div>
  );
}
