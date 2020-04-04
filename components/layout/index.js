import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Hindsight2020</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
