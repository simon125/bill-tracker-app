// node modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
// local modules
import { GlobalStyles } from './gloabl.styled';
import LandingPage from './pages/LandingPage';
import AppContainer from './components/AppContainer/AppContainer';

const App = () => {
  console.log(123);
  const routes = (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route
        path="/register"
        component={() => <h1>Hello in register screen</h1>}
      />
      <Route path="/login" component={() => <h1>Hello in login screen</h1>} />
      <Route path="/add-bill" component={() => <h1>Hello in add bill</h1>} />
      <Route path="/bills" component={() => <h1>Hello in bills</h1>} />
      <Route path="/calendar" component={() => <h1>Hello in calendar</h1>} />
      <Route path="/reports" component={() => <h1>Hello in reports</h1>} />
      <Route path="/settings" component={() => <h1>Hello in settings</h1>} />

      <Route
        path="/statistics"
        component={() => <h1>Hello in statisctics</h1>}
      />
      <Route component={() => <h1>404 ups there is no such resources</h1>} />
    </Switch>
  );
  return (
    <Router>
      <GlobalStyles />
      <Layout
        style={{ minHeight: '100vh', maxWidth: '100vw' }}
        className="app-container"
      >
        <AppContainer children={routes} />
      </Layout>
    </Router>
  );
};

export default App;
