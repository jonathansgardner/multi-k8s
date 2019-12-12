import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CalculatedValues from './CalculatedValues';
import Fib from './Fib';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci Calculator</h1>
        <Link to="/">Home</Link>
        <Link to="/calculatedValues">Calculated Values</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/calculatedValues" component={CalculatedValues} />
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
