import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Routes
import Routes from "./routes/routes";

// Browser history
const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Routes />
  </Router>
  // <h3>oi</h3>
);
export default App;
