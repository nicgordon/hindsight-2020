import { Provider } from 'react-redux';
import NextApp from 'next/app';
import PropTypes from 'prop-types';
import React from 'react';

import store from '../state/store';
import Layout from '../components/layout';

import 'antd/dist/antd.css';
import '../styles/reset.scss';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
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
