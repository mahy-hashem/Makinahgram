import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBar = props => {
  const { pathname } = props.history.location;
  const createPost = (
    <li>
      <Link to="/posts/:id">Create new post</Link>
    </li>
  );
  return (
    <nav>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/users/2" ? "active" : ""}>
          <Link to="/users/2">Account</Link>
        </li>
        {pathname === "/users/2" ? createPost : ""}
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
