import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navigation">
      <Link className="logo" to={"/"}>
        Meeter
      </Link>
      <div className="cta">
        <Link className="login-btn" to={"/login"}>
          Log In
        </Link>
        <Link className="signin-btn" to={"/signin"}>
          Sing In
        </Link>
      </div>
    </div>
  );
};


