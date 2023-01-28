import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const credentials = {
  nick: "John Doe",
  password: "qwerty123",
};

export const LogIn = () => {
  const [passedCredentials, setPassedCredentials] = useState({
    nick: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [correctCredentials, setCorrectCredentials] = useState(false);
  const logInHandler = () => {
    console.log(passedCredentials);
    if (passedCredentials.nick === credentials.nick) {
      if (passedCredentials.password === credentials.password) {
        setCorrectCredentials(true);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassedCredentials((prevSate) => {
      return { ...prevSate, password: e.target.value };
    });
  };

  const nickInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassedCredentials((prevSate) => {
      return { ...prevSate, nick: e.target.value };
    });
  };

  return (
    <div className="wrapper">
      <div className="card">
        <div className="heading">Welcome back</div>
        {error && (
          <div className="errorMassage">Nick or Password Incorrect</div>
        )}

        <div className="inputWrapper">
          <label>User Name</label>
          <input
            onChange={nickInputHandler}
            value={passedCredentials.nick}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="inputWrapper">
          <label>Password</label>
          <input
            onChange={passwordInputHandler}
            value={passedCredentials.password}
            type="password"
            placeholder="********"
          />
          <div className="secondaryAction">
            Forgot you
            <Link className="resetPassword" to={"/nopage"}>
              <u>password</u>
            </Link>
            ?
          </div>
        </div>
        <button onClick={logInHandler}>Log In</button>
        <div className="secondaryAction">
          Don't have account?
          <Link className="secondaryActionLink" to={"/signin"}>
            <u>Create one</u>
          </Link>
        </div>
        {correctCredentials && <Navigate replace to="/chatandcards" />}
      </div>
    </div>
  );
};
