import React from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "../util/axiosSetup"

const Login = () => {
  const [username, setusername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  const navigate = useNavigate();

  const login = () => {

    setError("")
    const submitValues = {
      username: username,
      password: password
    }

    axios.post("user", submitValues)
      .then((results) => {
        console.log(results?.data)

        navigate("/home");
      }).catch((error) => {
        const message = error?.message

        if (message?.includes("401")) {
          setError("Invalid credentials")

          return
        }

        setError(error?.message)
      })
  };

  const onUsernameChange = (event) => {
    setusername(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Username" onChange={onUsernameChange} />
      </div>

      <div>
        <input type="text" placeholder="Password" onChange={onPasswordChange} />
      </div>

      {error !== "" && <div style={{ color: "red" }}>
        {error}
      </div>}

      <div>
        <input type="button" value="Login" onClick={login} />
      </div>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
