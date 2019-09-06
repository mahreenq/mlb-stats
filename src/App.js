import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Layout from "./components/Layout";

import TeamsContainer from "./containers/Teams/TeamsContainer";
import RosterContainer from "./containers/Roster/RosterContainer";
import PlayerContainer from "./containers/Player/PlayerContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={TeamsContainer} />
          <Route exact path="/:teamId" component={RosterContainer} />
          <Route exact path="/:teamId/:playerId" component={PlayerContainer} />
        </Switch>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
