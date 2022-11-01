import React, { useState } from 'react';
function From() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [post, setPost] = useState();
  const [id, setId] = useState();

  const handleOnChange = (setState) => {
    return (e) => {
      setState(e.target.value);
    };
  };

  return (
    <div>
      <h3>useState()</h3>
      <form>
        <label htmlFor="name-input">name: </label>
        <input
          name="name"
          id="name-input"
          type="text"
          onChange={handleOnChange(setName)}
        />
        <label htmlFor="age-input">Age: </label>
        <input
          type="number"
          name="age"
          id="age-input"
          onChange={handleOnChange(setAge)}
        />
        <label htmlFor="post-input">Post: </label>
        <input
          name="post"
          id="post-input"
          type="text"
          onChange={handleOnChange(setPost)}
        />
        <label htmlFor="id-input">Id: </label>
        <input
          name="id"
          id="id-input"
          type="number"
          onChange={handleOnChange(setId)}
        />
      </form>
      <div>
        {name && <h2> name: {name}</h2>}
        {age && <h2>age: {age}</h2>}
        {post && <h2>post: {post}</h2>}
        {id && <h2>id: {id}</h2>}
      </div>
    </div>
  );
}

export { From };
