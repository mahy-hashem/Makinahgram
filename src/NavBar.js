import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  const { pathname } = props.history.location;
  return (
    <nav>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/users/1" ? "active" : ""}>
          <Link to="/users/1">My Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
