import React from "react";
import "antd/dist/antd.css";
import HeaderView from "./component/HeaderView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./component/SignUp";
import HomeScreen from "./component/HomeScreen";
import PrivateRoute from "./component/PrivateRoute";
import TopPart from "./TheComp/TopPart";
import ViewScreen from "./TheComp/ViewScreen";
import SecureRoute from "./TheComp/SecureRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopPart />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <SecureRoute exact path="/view" component={ViewScreen} />
          <Route exact path="/sign" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
