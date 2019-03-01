import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import TestComponent from "./components/testComponent";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
  }
}

export default App;
