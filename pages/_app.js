import NextApp from 'next/app';
import PropTypes from 'prop-types';
import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';

// import withData from '../util/apollo-client';
import Layout from '../components/layout';

import 'antd/dist/antd.css';
import '../styles/reset.scss';

class App extends NextApp {
  render() {
    // const { Component, pageProps, apollo } = this.props;
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
      // <ApolloProvider client={apollo}>
      //   <Component {...pageProps} />
      // </ApolloProvider>
    );
  }
}

App.propTypes = {
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  pageProps: null,
};

// Wraps all components in the tree with the data provider
// export default withData(App);

export default App;
