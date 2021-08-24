import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookings from "./components/Bookings";
import LandingPage from "./components/LandingPage";
import { GlobalStyle } from "./components/styles/global";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
