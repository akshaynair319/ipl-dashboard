import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import TeamPage from "./Pages/TeamPage/TeamPage";
import AllMatchesPage from "./Pages/AllMatchesPage/AllMatchesPage";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/IplDashboard/team/:team">
          <TeamPage />
        </Route>
        <Route exact path="/IplDashboard/team/:team/all/:year">
          <AllMatchesPage />
        </Route>
      </Router>
    </div>
  );
};

export default App;
