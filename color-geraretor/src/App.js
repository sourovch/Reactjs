import React, { useState, useRef } from 'react';
import { Color } from './components/color';
import colorGenaretor from './utils/colorGenaretor';

export function App() {
  const [, reRender] = useState(true);
  const [colorCount, setColorCount] = useState(28);
  const textRef = useRef();

  const onClick = (e) => {
    reRender((s) => !s);
    setColorCount(
      textRef.current.value > 0 ? textRef.current.value : 28
    );
  };

  return (
    <div className="container">
      <div className="flex input-cont">
        <input
          type="number"
          ref={textRef}
          onChange={(e) => {
            e.target.value = Math.abs(e.target.value);
          }}
        />
        <button onClick={onClick}>ReGenarate</button>
      </div>
      <div className="colors">
        {(() => {
          const arr = [];
          for (let i = 0; i < colorCount; i++) {
            const color = colorGenaretor();
            arr.push(<Color color={color} key={color} />);
          }
          return arr;
        })()}
      </div>
    </div>
  );
}
