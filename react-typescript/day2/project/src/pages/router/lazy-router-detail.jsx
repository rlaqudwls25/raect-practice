import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router";
import qs from "qs";

function LazyRouterDetail() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    console.log("id: ", id);
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("res: ", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default LazyRouterDetail;
