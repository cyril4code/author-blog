import "./register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter Your Username"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="loginButton">Login</button>
    </div>
  );
};
