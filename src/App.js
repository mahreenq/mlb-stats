import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import TeamsContainer from "./containers/Teams/TeamsContainer";
import RosterContainer from "./containers/Roster/RosterContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={TeamsContainer} />
          <Route exact path="/:teamId" component={RosterContainer} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
