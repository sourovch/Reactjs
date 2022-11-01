import React, { useState, useEffect } from 'react';

function WindowChange() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHight, setWindowHight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowHight, windowWidth]);

  return (
    <div>
      <h3>useState() & useEffect()</h3>
      <h1>Window Size</h1>
      <h1>
        {windowWidth}x{windowHight}
      </h1>
    </div>
  );
}

export { WindowChange };
