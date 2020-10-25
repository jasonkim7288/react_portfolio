import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

function TypeWriter() {
  const [typing, setTyping] = useState(true);

  const handleTypingDone = () => {
    setTyping(false);
  }

  useEffect(() => {
    setTyping(true);
  }, [typing])

  return (
    <main>
      { typing &&
        <h2>
          <Typist
              avgTypingDelay={80}
              startDelay={3000}
              cursor={{blink: true}}
              onTypingDone={handleTypingDone}
              >
            <span>Hi, I am Jason.</span>
            <Typist.Backspace count={15} delay={2500} />
            <Typist.Delay ms={2000} />
            <span>I am a Full Stack Developer.</span>
            <Typist.Backspace count={28} delay={4000} />
          </Typist>
        </h2>
      }
    </main>
  );
}

export default TypeWriter;
