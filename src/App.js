import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./routes/home";
import Dashboard from "./routes/dashboard";
import Sidebar from "./sidebar";
import Header from "./header";

function App() {
  return (
    <div className="body">
    <BrowserRouter>
      <Sidebar/>
      <Header/>
      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
