import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import Routes from '../routes'

const history = createBrowserHistory()
const App: React.FC = () => {
  return (

    <Router history={history}>
      <Route exact path="/" render={() => {window.location.href = "https://newsletters.pigeonbolt.com"; return 'Redirecting...';}} />
    </Router>
  );
}

export default App;

    // <Router history={history}>
    //   <Routes />
    // </Router>