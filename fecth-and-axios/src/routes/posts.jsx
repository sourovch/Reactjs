import React from 'react';

export default function Post({ post: { userId, id, title, body } }) {
  return (
    <div className="post-wrapper">
      <div className="title-wrapper">
        <h2>
          <span className="id">
            {userId}: {id}
          </span>
          {title}
        </h2>
      </div>
      <div className="post-body">
        <p>
          {body}
          {body}
          {body}
        </p>
      </div>
    </div>
  );
}
