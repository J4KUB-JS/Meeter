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
        {/* <Link className="menu-items" to={"/cards"}>
          Cards
        </Link>
        <Link className="menu-items" to={"/chat"}>
          Chats
        </Link>
        <Link className="menu-items" to={"/"}>
          Log out
        </Link> */}
      </div>
    </div>
  );
};
