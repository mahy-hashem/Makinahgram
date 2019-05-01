import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Account from "./Account";
import PostForm from "./PostForm";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./css/style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/users/:id" component={Account} />
          <Route path="/posts/:id" component={PostForm} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
