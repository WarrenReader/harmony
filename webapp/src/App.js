import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import store from './store';
import ModalConductor from './components/common/modals/ModalConductor';
import NavBar from './components/common/navbar/NavBar';
const Dashboard = React.lazy(() => import('./containers/Dashboard'));
import Home from './containers/Home';
import LoadingPage from './components/common/LoadingPage';

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
            <Route exact path="/" component={() => <Home />} />
            <Route
              exact
              path="/dashboard"
              component={() => (
                <React.Suspense fallback={<LoadingPage />}>
                  <Dashboard />
                </React.Suspense>
              )}
            />
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;
