//NPM packages
import { useNavigate, Link } from "react-router-dom";

//Project files
import Logo from "../assets/Logo.png";
import InputField from "../components/InputField";
import form from "../data/signUpForm.json";
import { useUser } from "../state/UserContext";

export default function StartSignup() {
  const { email, setEmail } = useUser();
  const navigate = useNavigate();

  //Methods
  function onSubmit(event) {
    event.preventDefault();
    console.log(email);
    navigate("/signup/regform");
  }

  return (
    <div className="start-signup">
      <header>
        <img className="logo" src={Logo} alt="Netflix" />
        <Link className="button" to="/">
          Sign In
        </Link>
      </header>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <form className="form" onSubmit={onSubmit}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <button className="button">Get Started</button>
      </form>
    </div>
  );
}
