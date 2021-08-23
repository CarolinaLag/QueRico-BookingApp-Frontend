import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddBooking from "./components/AddBooking";
import Bookings from "./components/Bookings";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/create">
          <AddBooking />
        </Route>

        <Route path="/bookings">
          <Bookings />
        </Route>
      </Router>
    </div>
  );
}

export default App;
