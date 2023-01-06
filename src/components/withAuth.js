import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
