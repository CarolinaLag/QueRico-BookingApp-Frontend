import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { GlobalStyle } from "./components/styles/global";
import Booking from "./components/Reservation/Booking";
import Navbar from "./components/Navbar";
import TapasMenu from "./components/TapasMenu";
import ContactUs from "./components/ContactUs";
import AdminPage from "./components/Admin/AdminPage";
import PageNotFound from "./components/PageNotFound";
import CancelReservation from "./components/Reservation/CancelReservation";

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

          <Route path="/admin">
            <AdminPage />
          </Route>

          <Route path="/cancelConfirmation/:id">
            <CancelReservation />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
