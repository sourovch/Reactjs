import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useChangeLoger } from '../hooks/useChangeLoger';

function DataInput() {
  const [name, setName] = useLocalStorage('name', '');
  const [message, setMessage] = useLocalStorage('message', '');
  useChangeLoger(name);

  const handleChange = (setFunc) => {
    return (e) => {
      setFunc(e.target.value);
    };
  };
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        style={{ display: 'block', margin: '1em' }}
        type="text"
        value={name}
        onChange={handleChange(setName)}
        placeholder="Name"
      />
      <label htmlFor="message">Message: </label>
      <textarea
        style={{
          display: 'block',
          margin: '1em',
          width: '300px',
          height: '100px',
          resize: 'none',
        }}
        value={message}
        onChange={handleChange(setMessage)}
        placeholder="message"
      />
      <h1>Name: {name}</h1>
      <p>Message: </p>
      <p>{message}</p>
    </div>
  );
}

export { DataInput };
