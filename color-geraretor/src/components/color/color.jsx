import React, { useRef, useState } from 'react';
import style from './style.module.css';

import clipboard from './images/copy.png';
import clipboardDone from './images/copy_comp.png';

function Color({ color }) {
  const wrapperRef = useRef();
  const [src, setSrc] = useState(clipboard);

  const handleMouseOver = (e) => {
    if (!wrapperRef.current.classList.contains(`${style.copied}`))
      wrapperRef.current.classList.add(`${style.hover}`);
  };

  const handleMouseOut = (e) => {
    wrapperRef.current.classList.remove(`${style.hover}`);
  };

  const handleClick = (e) => {
    wrapperRef.current.classList.remove(`${style.hover}`);
    wrapperRef.current.classList.add(`${style.copied}`);

    navigator.clipboard
      .writeText(color)
      .then(() => {
        setSrc(clipboardDone);
        setTimeout(() => {
          wrapperRef.current.classList.remove(`${style.copied}`);
          wrapperRef.current.classList.remove(`${style.hover}`);
          setSrc(clipboard);
        }, 1000);
      })
      .catch((e) => alert('somthing is wrong'));
  };

  return (
    <div
      className={`${style.colorBar}`}
      style={{ backgroundColor: color }}
    >
      <div
        className={`${style.textWrapper} ${style.grid} ${style.center}`}
        ref={wrapperRef}
      >
        <p>{color}</p>
        <img
          src={src}
          alt="copy"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export { Color };
