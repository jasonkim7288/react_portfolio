import React from 'react'

function BigWords({ bigWord, midWord }) {
  return (
    <aside  className="bg-color">
      <h2>
        <span id="bg-big-word" className="fade-in-bg-big-word">{bigWord}</span>
      </h2>
      <h2>
        <span id="bg-mid-word" className="fade-in-bg-mid-word">{midWord}</span>
      </h2>
    </aside>
  );
}

export default BigWords;
