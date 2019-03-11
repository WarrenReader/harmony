import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/common/navbar/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/dashboard" component={() => <h1>Dashboard</h1>} />
          <Route exact path="/settings" component={() => <h1>Settings</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
