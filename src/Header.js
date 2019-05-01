import React from "react";
import NavBar from "./NavBar";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <img
          src="https://www.almakinah.com/images/almakinah_waving_darkblue.png"
          alt="Logo"
        />
        <h1>Makinahgram</h1>
        <NavBar />
      </header>
    );
  }
}

export default withRouter(Header);
