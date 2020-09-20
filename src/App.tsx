import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { ServicesTestsPage } from "./pages/ServicesTests";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" component={ServicesTestsPage} />
        </Switch>
      </div>
    </Router>
  );
}
