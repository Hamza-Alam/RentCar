import React from "react";
import {
    BrowserRouter,
    withRouter,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import Home from '../component/layouts/Home';
const RouteScreen = (props) =>{
    return(
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
)}
export default RouteScreen ;