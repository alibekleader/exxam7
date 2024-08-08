import React, { useState } from "react";
import "./Login.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleClick = () => {
    setUser(data);
    navigate("/home");
  };
  return (
    <div className="signUp container">
      <div className="input-part">
        <p className="toEatly">Sign Up To eatly</p>
        <form>
          <input
            type="password"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            placeholder="Password"
            className="password"
          />
        </form>
        <button onClick={handleClick}>
          <NavLink to="/home"> SIGN UP</NavLink>
        </button>
        <p>
          Create A New Account ? <NavLink to="/">Sign Up</NavLink>
        </p>
      </div>
      <div className="image-part"></div>
    </div>
  );
};

export default Login;
