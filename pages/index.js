import React from 'react';
import Head from 'next/head';

import Map from '../components/map';

const Home = () => (
  <div className="container">
    <Head>
      <title>Home - Hindsight2020</title>
    </Head>

    <main>
      <Map />
    </main>
  </div>
);

export default Home;
