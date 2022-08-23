import './App.css';
import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Layout/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
