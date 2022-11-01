import React, { useState } from 'react';

import style from './style.module.css';

import { posts } from '../../utils/data';
import profilePic from '../../images/pI.png';

function Post({ post, reRender }) {
  const [edting, setEdting] = useState(false);
  const [ePost, setEPost] = useState(post.post);
  return (
    <div className={style.postCont}>
      <div className={style.nameWrapper}>
        <div className={style.imgWrapper}>
          <img
            src={profilePic}
            alt="profile pic"
            style={{ width: '100%' }}
          />
        </div>
        <h3>{post.username}</h3>
        <h4>{post.userId}</h4>
      </div>
      {!edting ? (
        <div className={style.postWrapper}>
          <p>{post.post}</p>
          <button
            className={style.btn}
            onClick={(e) => setEdting(true)}
          >
            edit
          </button>
          <button
            className={style.btn}
            onClick={() => {
              posts.splice(
                posts.findIndex((i) => i.postId === post.postId),
                1
              );
              reRender();
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <>
          <textarea
            style={{ resize: 'none' }}
            value={ePost}
            onChange={(e) => {
              setEPost(e.target.value);
            }}
          />
          <button
            className={style.btn}
            onClick={(e) => {
              posts.find((i) => i === post).post = ePost;
              setEdting(false);
            }}
          >
            Ok
          </button>
          <button
            className={style.btn}
            onClick={() => {
              setEPost(post.post);
              setEdting(false);
            }}
          >
            Cancle
          </button>
        </>
      )}
    </div>
  );
}

export { Post };
