import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("http://localhost:4000/api/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      <div className="flex flex-wrap gap-10">
        {Boolean(posts.length) &&
          posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
