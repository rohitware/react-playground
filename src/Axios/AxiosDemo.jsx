import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function AxiosDemo() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => setPost(res.data));
  }, []);

  if (!post) return <h1>Loading.....</h1>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default AxiosDemo;
