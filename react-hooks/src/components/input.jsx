import React, { useState } from 'react';

function Input() {
  const [input, setInput] = useState('Default Text');

  const validate = (data) => {
    if (data.length < 3) return 'Input Is Too Short';
    if (data.length > 8) return 'Input Is Too Long';
    return data;
  };

  return (
    <div>
      <h3 style={{ margin: '.8em 0' }}>useState()</h3>
      <lable htmlFor="input">Input Data: </lable>
      <input
        id="input"
        type="text"
        onChange={(e) => {
          setInput(() => validate(e.target.value));
        }}
      />

      <h1>{input}</h1>
    </div>
  );
}

export { Input };
