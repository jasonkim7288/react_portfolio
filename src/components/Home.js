import React, { useEffect } from 'react';
import BigWords from './BigWords';
import TypeWriter from './TypeWriter';

function Home() {
  useEffect(() => {
    document.title = "Home | Jason's Portfolio";
  }, []);

  return (
    <main>
      <BigWords bigWord="Web" midWord="Dev."/>
      <TypeWriter />
    </main>
  )
}

export default Home;
