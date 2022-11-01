import React from 'react';
import { Post } from './components/posts';

import useForceUpdate from './hooks/forceUpdate';
import uniqueId from './utils/uniqueId';

export default function App({ posts }) {
  const Update = useForceUpdate();

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();

    if (!form.children['post'].value) return;

    const obj = {
      postId: uniqueId(posts.map((i) => i.postId)),
      username: form.children['name'].value
        ? form.children['name'].value
        : 'unknown user',
      userId: form.children['id'].value
        ? `@${form.children['id'].value}`
        : '@unknown',
      post: form.children['post'].value,
    };
    posts.push(obj);
    Update();
    e.target.reset();
  };

  return (
    <>
      <div className="container">
        <h3 className="title">Create A Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name (eg:'sourov')"
            id="name"
          />
          <input
            type="text"
            name="id"
            placeholder="Enter usereID (e.g: 'sourov-ch')"
            id="userId"
          />
          <textarea
            style={{ resize: 'none' }}
            name="post"
            placeholder="Enter Post (eg:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu magna dictum, ornare orci eu, aliquet sem. Nam sed lobortis metus, id rhoncus ipsum.)"
            id="post"
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </form>
        <div className="post-wrapper">
          {posts.map((i, index) => (
            <Post
              post={i}
              key={index - Math.random()}
              reRender={Update}
            />
          ))}
        </div>
      </div>
    </>
  );
}
