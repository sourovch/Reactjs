import React, { useState, useRef, useEffect } from 'react';

function UseRefComp() {
  const [text, setText] = useState('');
  const renderTimes = useRef(0);
  const inputRef = useRef();
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = text;
  }, [text]);

  renderTimes.current++;

  return (
    <div>
      <h3>useRef()</h3>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>My Name Is {text}</div>
      <div>It used to be {prevName.current}</div>
      <div>I rendered {renderTimes.current} times</div>
      <button
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Focus on box
      </button>
    </div>
  );
}

export { UseRefComp };
