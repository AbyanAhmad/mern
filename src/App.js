import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/Landingpage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
