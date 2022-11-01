import React, { useState } from 'react';
import { useModUserInfoFn } from '../Contexts/userInfo';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({});
  const setUserData = useModUserInfoFn();
  const navigete = useNavigate();

  const onChangeHandler = (e) => {
    const input = e.target;
    const name = input.name;

    setFormData((v) => {
      return { ...v, [name]: input.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({ ...formData, loggedIn: true });
    navigete('/');
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        margin: '1em',
      }}
    >
      <input
        type="text"
        name="name"
        onChange={onChangeHandler}
        placeholder="name"
        style={{
          fontSize: '1rem',
          padding: '.7em',
        }}
      />
      <input
        type="text"
        name="id"
        onChange={onChangeHandler}
        placeholder="id"
        style={{
          fontSize: '1rem',
          padding: '.7em',
        }}
      />
      <input
        type="text"
        name="age"
        onChange={onChangeHandler}
        placeholder="age"
        style={{
          fontSize: '1rem',
          padding: '.7em',
        }}
      />
      <button
        type="submit"
        style={{
          fontSize: '1rem',
          padding: '.7em',
        }}
      >
        submit
      </button>
    </form>
  );
}

export default Login;
