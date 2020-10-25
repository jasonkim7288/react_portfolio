import React from 'react';
import BigWords from './BigWords';
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <main>
      <BigWords bigWord="Web" midWord="Dev."/>
      <TypeWriter />
    </main>
  )
}

export default Home;
