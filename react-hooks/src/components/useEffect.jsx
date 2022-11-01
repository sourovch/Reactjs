import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffect() {
  const [resorce, setResorce] = useState(() => 'posts');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/${resorce}`).then(
      (res) => setData(res.data)
    );
  }, [resorce]);

  return (
    <div>
      <h3>useEffect()</h3>
      <nav>
        <button onClick={(e) => setResorce((prev) => 'posts')}>
          Posts
        </button>
        <button onClick={(e) => setResorce((prev) => 'comments')}>
          Comments
        </button>
        <button onClick={(e) => setResorce((prev) => 'users')}>
          Users
        </button>
      </nav>
      <div>
        <h1>{resorce}</h1>
        <pre>
          {data.length > 0 ? (
            JSON.stringify(data, null, 2)
          ) : (
            <p>loading</p>
          )}
        </pre>
      </div>
    </div>
  );
}

export { UseEffect };
