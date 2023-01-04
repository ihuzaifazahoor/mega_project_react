import React from "react";
import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops..!</h2>
            <p>The resource you are looking for, is not found.</p>
            <Link to="/">Back to the Home...</Link>
        </div>
    )
}

export default NotFound;