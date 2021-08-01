import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Container = styled.div`
  padding-top: 100px;
`;

const Layout = (props) => (
  <>
    <Header />
    <Container>{props.children}</Container>
    <Footer />
  </>
);
export default Layout;
