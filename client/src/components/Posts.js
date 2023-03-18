import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState({});
  const getPosts = async () => {
    const response = await axios.get("http://localhost:4002/api/query/posts");
    console.log(response.data);
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      <div className="flex flex-wrap gap-10">
        {Boolean(Object.values(posts).length) &&
          Object.values(posts).map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default Posts;
