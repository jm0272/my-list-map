import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import App from "./App";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
