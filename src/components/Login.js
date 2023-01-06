import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import setToken from "./Helper";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    await setToken(username, password).then((res) => {
      if (res.ok) {
        localStorage.setItem("authToken", res.body.token);
        navigate("/");
      }
      setValidate(true);
    });
  }
  return (
    <form className="row m-5 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-6">
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example1">
            Username:
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example2">
            Password:
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {validate && (
          <div className="alert alert-danger" role="alert">
            The username or password is invalid!
          </div>
        )}
        <button
          type="submit"
          className="btn btn-outline-dark mb-3"
          disabled={!validateForm()}
        >
          Sign in
        </button>
        <p>
          Not a member? <Link to="/signup">Register</Link>
        </p>
      </div>
    </form>
  );
}
