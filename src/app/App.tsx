import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "../routes";

const history = createBrowserHistory();
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
