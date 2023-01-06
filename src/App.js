import { React, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Search from "./components/Search";
function PrivateRoute({ children }) {
  const auth = localStorage.getItem("authToken");
  return auth ? children : <Navigate to="/login" />;
}
function App() {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<PrivateRoute><Home /></PrivateRoute>}/>
              <Route path="/posts/:symbol" element={<PrivateRoute><Category /></PrivateRoute>}></Route>
              <Route path="/search/:query" element={<PrivateRoute><Search /></PrivateRoute>}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
