import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ReleaseList from "./components/releaseList";
import Login from './components/login'
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";


const App = () => {
  const dispatch = useDispatch();
  const user = Cookies.get("user");

  useEffect(() => {
    if (user) {
      dispatch({ type: "LOGIN_SUCCESS" });
    }
  }, [user])

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