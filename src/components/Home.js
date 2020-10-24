import React from 'react';
import BigWords from './BigWords';

import '../stylesheets/Home.scss';
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <main>
      <TypeWriter />
      <BigWords />
    </main>
  )
}

export default Home;
