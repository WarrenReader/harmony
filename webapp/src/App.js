import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import store from './store';
import ModalConductor from './components/common/modals/ModalConductor';
import NavBar from './components/common/navbar/NavBar';
import Dashboard from './containers/Dashboard';

const AppContainer = styled.div`
  height: 100%;
  max-height: 100%;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <ModalConductor />
          <NavBar />
          <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/settings" component={() => <h1>Settings</h1>} />
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;
