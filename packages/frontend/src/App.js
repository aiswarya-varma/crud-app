import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Connect from './components/Connect';
import Home from './components/Home';

const App = () => {
  return <div className="App">
    <Router>
      <Switch>
        <Route path="/editor"><Home /></Route>
        <Route path="/"><Connect /></Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
