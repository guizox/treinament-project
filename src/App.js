import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import TestComponent from "./components/testComponent";
import TestComponentRedux from "./components/testComponentRedux";
import TodoComponentRedux from "./components/todoComponentRedux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        State Component
        <TestComponent />
        Redux State Component
        <TestComponentRedux />
        Redux Todo State Component
        <TodoComponentRedux />
      </Provider>
    );
  }
}

export default App;
