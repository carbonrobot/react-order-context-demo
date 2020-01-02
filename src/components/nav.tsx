import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background: #9dc2e0;
`;

const Brand = styled.div`
  flex: 1 1 auto;
  text-transform: uppercase;
  padding: 20px;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  flex: 1 1 auto;
  padding: 20px;
`;

const Nav: React.FC = () => (
  <Container>
    <Brand>
      <Link to="/">Demo</Link>
    </Brand>

    <Menu>
      <MenuLink to="/store">Store</MenuLink>
      <MenuLink to="/history">History</MenuLink>
    </Menu>
  </Container>
);

export default Nav;
