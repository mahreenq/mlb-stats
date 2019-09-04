import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import TeamsContainer from "./containers/Teams/TeamsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TeamsContainer />
      </div>
    </Provider>
  );
}

export default App;
