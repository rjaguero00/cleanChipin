import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.js";
import OrgSignUp from "./components/OrgSignUp";
import UserSignUp from "./components/UserSignUp";
import CreateEventsModal from "./components/CreateEventModal";
import LoginModal from "./components/LoginModal";
import Dashboard from "./pages/Dashboard.js";
import SearchEvents from "./pages/SearchEvents/SearchEvents.js";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <LoginModal />
      <CreateEventsModal />
      <OrgSignUp />
      <UserSignUp />
      <Route exact path="/" component={Home} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/SearchEvents" component={SearchEvents} />
      <Footer />
    </div>
  </Router>
);

export default App;
