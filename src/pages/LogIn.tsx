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
        </div>
        <button>Log In</button>
        <div className="forgetPassword">
          Forgot you <u>password</u> ?
        </div>
      </div>
    </div>
  );
};
