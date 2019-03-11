import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import ModalConductor from './components/common/modals/ModalConductor';
import NavBar from './components/common/navbar/NavBar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ModalConductor />
          <NavBar />
          <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route
              exact
              path="/dashboard"
              component={() => <h1>Dashboard</h1>}
            />
            <Route exact path="/settings" component={() => <h1>Settings</h1>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
