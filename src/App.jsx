import React from "react";
import { Route, Switch } from "react-router-dom";
import ReleaseList from "./components/releaseList";
import Login from './components/login'

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/releases" component={ReleaseList} />
      </Switch>
    </>
  );
}
export default App;