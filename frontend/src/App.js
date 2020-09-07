import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { StoryPage, MapPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StoryPage}></Route>
        <Route path="/map" component={MapPage}></Route>
      </Switch>
    );
  }
}

export default App;
