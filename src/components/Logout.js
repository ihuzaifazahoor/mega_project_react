import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("authToken");
    setMessage("You have been logged out!!!");
    await sleep(1000);
    navigate("/login");
  }
  const navigation = () => {
    navigate("/");
  };
  return (
    <form className="row m-5 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-6">
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        {!message && (
          <>
            <p>Are you sure, you want to logout?</p>
            <button type="submit" className="btn btn-outline-dark m-3">
              Yes
            </button>
            <button className="btn btn-outline-dark m-3" onClick={navigation}>
              No
            </button>
          </>
        )}
      </div>
    </form>
  );
}
