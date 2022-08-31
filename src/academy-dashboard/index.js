import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './Main';
import { Switch, Route, Redirect } from "react-router-dom";



ReactDOM.render(
  <Router>
    <Switch>

      <Route path="/fff" element={<Main />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
