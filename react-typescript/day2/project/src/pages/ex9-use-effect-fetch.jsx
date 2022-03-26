import React, { useState, useEffect } from "react";
import axios from "axios";

function Ex9UseEffectFetch() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res: ", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ex9UseEffectFetch;
