import NextApp from 'next/app';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';

import 'antd/dist/antd.css';
import '../styles/reset.scss';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

App.propTypes = {
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  pageProps: null,
};

export default App;
