import React, { useState } from "react";
import axios from "axios";

const CreateComment = ({ post }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/api/posts/${post.id}/comments`, {
      comment,
    });
    setComment("");
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col p-2 max-w-[400px]"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-lg mb-5">Add a Comment</h1>
        <input
          type="text"
          placeholder="Add a comment..."
          required
          className="p-2 mb-5 border-none focus:outline-none shadow-2xl rounded-xl"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          type="submit"
          value="Comment"
          className="shadow-2xl rounded-xl border-2 p-1 text-white bg-gray-400"
        />
      </form>
    </div>
  );
};

export default CreateComment;
