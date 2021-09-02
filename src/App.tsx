import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { GlobalStyle } from "./components/styles/global";
import Booking from "./components/Booking";
import Navbar from "./components/Navbar";
import TapasMenu from "./components/TapasMenu";
import ContactUs from "./components/ContactUs";
import AdminPage from "./components/AdminPage";
import Bookings from "./components/Bookings";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>

          <Route path='/booking'>
            <Booking />
          </Route>

          <Route path='/meny'>
            <TapasMenu />
          </Route>

          <Route path='/kontakt'>
            <ContactUs />
          </Route>

          <Route path='/admin'>
            <AdminPage />
          </Route>
          <Route path='/bookings'>
            <Bookings />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
