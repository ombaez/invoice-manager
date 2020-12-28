import React from 'react';
import { Route,Link,Switch } from "react-router-dom";

import Invoice from "./pages/Invoice"
import NewInvoices from "./pages/NewInvoices"
import Home from "./pages/Home"
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/new-invoices">NewInvoices</Link></li>
      </ul>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/invoices"component={Invoice}/>
        <Route exact path="/new-invoices" component={NewInvoices}/>
      </Switch>
          </div>
  );
}

export default App;
