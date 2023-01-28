import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const SignIn = () => {
  const [passedCredentials, setPassedCredentials] = useState({
    nick: "",
    email: "",
    password: "",
  });
  const [correctSignUp, setCorrectSignUp] = useState(false);

  const [error, setError] = useState(false);

  const signInHandler = () => {
    setCorrectSignUp(true);
  };

  return (
    <div className="wrapper">
      {correctSignUp && <Navigate replace to="/cards" />}
      <div className="card">
        <div className="heading">Nice to Meet You</div>
        {error && <div className="errorMassage">Some massage</div>}
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
        <button onClick={signInHandler}>Sign In</button>
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
