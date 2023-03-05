import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col p-10 max-w-[400px]"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-2xl mb-5">Create A Post</h1>
        <input
          type="text"
          placeholder="Write something..."
          required
          className="p-2 mb-5 border-none focus:outline-none shadow-2xl rounded-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="submit"
          value="Post"
          className="shadow-2xl rounded-xl border-2 p-1 text-white bg-gray-400"
        />
      </form>
    </div>
  );
};

export default CreatePost;
