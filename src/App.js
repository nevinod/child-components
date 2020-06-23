import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Features } from './Components/Features.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Features} />
      </Router>
    );
  }
}

export default App;
