import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Errorpage from "./components/Errorpage";
import ErrorBoundary from "./components/ErrorBoundary";
import TestError from "./TestError";

function NotFound() {
  return <Errorpage />;
}

// function ErrorBoundaryTest() {
//   throw new Error("Error Boundary Test");
// }

function Home() {
  return (
    <div className="counter-wrapper">
      <h2>Home</h2>
      <p>Welcome to the Counter App.</p>
      <h5>
        This simple and intuitive application allows you to keep track of
        numbers effortlessly. You can easily increment or decrement the count,
        reset it to its initial value, or even set a custom value. Whether you
        need a tally for various tasks, want to keep score in a game, or simply
        enjoy playing with numbers, our Counter App has you covered. It's a
        versatile tool for all your counting needs.
      </h5>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/counter">
              Counter
            </Link>
          </li>
          <li>
            <Link className="link" to="/test-error">
              Test Error
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        {/* <Route path="/error" element={<ErrorBoundaryTest />} /> */}
        <Route
          path="/test-error"
          element={
            <ErrorBoundary>
              <TestError />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
