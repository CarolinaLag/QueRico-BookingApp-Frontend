import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { GlobalStyle } from "./components/styles/global";
import Booking from "./components/Booking";
import Navbar from "./components/Navbar";
import TapasMenu from "./components/TapasMenu";
import ContactUs from "./components/ContactUs";
import Bookings from "./components/Bookings";
import CancelReservation from "./components/CancelReservation";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/meny">
            <TapasMenu />
          </Route>

          <Route path="/kontakt">
            <ContactUs />
          </Route>

          <Route path="/bookings">
            <Bookings />
          </Route>

          <Route path="/cancelConfirmation/:id">
            <CancelReservation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
