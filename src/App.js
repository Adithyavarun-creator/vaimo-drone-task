import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthWrapper from "./components/AuthWrapper/AuthWrapper";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/" component={HomePage}></Route>

        <Route exact path="/signin" component={SignIn}></Route>

        <PrivateRoute exact path="/task" component={SingleProductPage}></PrivateRoute>

        <Route exact path="/about-me" component={AboutPage}></Route>

        <Route exact path="*" component={ErrorPage}></Route>


        
        </Switch>
        </Router>
        </AuthWrapper>
  );
}

export default App;
