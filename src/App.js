import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Account from "./Account";
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
        </Switch>
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
