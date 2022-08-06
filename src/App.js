import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="/signin" element={<SigninPage />} exact />
  </Routes>
  <Home />
</BrowserRouter>;*/
