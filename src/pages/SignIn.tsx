import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="heading">Nice to Meet You</div>
        <div className="inputWrapper">
          <label>User Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="inputWrapper">
          <label>Email</label>
          <input type="text" placeholder="johndoe@mail.com" />
        </div>

        <div className="inputWrapper">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <button>Sign In</button>
        <div className="secondaryAction">
          Have account?
          <Link className="secondaryActionLink" to={"/login"}>
            <u>Log in</u>
          </Link>
        </div>
      </div>
    </div>
  );
};
