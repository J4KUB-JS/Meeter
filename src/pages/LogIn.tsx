import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="heading">Welcome back</div>
        <div className="inputWrapper">
          <label>User Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="inputWrapper">
          <label>Password</label>
          <input type="password" placeholder="********" />
          <div className="secondaryAction">
            Forgot you
            <Link className="resetPassword" to={"/nopage"}>
              <u>password</u>
            </Link>
            ?
          </div>
        </div>
        <button>Log In</button>
        <div className="secondaryAction">
          Don't have account?
          <Link className="secondaryActionLink" to={"/signin"}>
            <u>Create one</u>
          </Link>
        </div>
      </div>
    </div>
  );
};
