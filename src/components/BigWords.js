import React from 'react'

import '../stylesheets/BigWords.scss';

function BigWords() {
  return (
    <aside>
      <h2>
        <span id="bg-big-word" class="fade-in-bg-big-word">Web</span>
      </h2>
      <h2>
        <span id="bg-mid-word" class="fade-in-bg-mid-word">Dev.</span>
      </h2>
    </aside>
  );
}

export default BigWords;
