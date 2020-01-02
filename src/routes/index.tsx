import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../components/nav';
import HomeRoute from './home';
import StoreRoute from './store';

const Container = styled.div`
  padding: 20px;
`;

const Routes: React.FC = () => (
  <Router>
    <Nav />
    <Container>
      <Switch>
        <Route path="/store" component={StoreRoute} />
        <Route path="/" component={HomeRoute} />
      </Switch>
    </Container>
  </Router>
);

export default Routes;
