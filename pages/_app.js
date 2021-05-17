import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/utils/styledComponents';
import Fonts from '../components/layout/Font';
import Layout from '../components/layout/Layout';
import '../components/layout/layout.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    Fonts();
    if (router.pathname == '/_error') {
      Router.push('/');
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
