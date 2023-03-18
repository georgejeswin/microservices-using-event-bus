import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const postsQuery = {};

app.get("/api/query/posts", (req, res) => {
  res.status(200).send(postsQuery);
});

app.post("/api/events", (req, res) => {
  console.log("Query event body", req.body);
  const { type, data } = req.body;
  if (type === "POST_CREATED") {
    const { id, title } = data;
    postsQuery[id] = { id, title, comments: [] };
  }
  if (type === "COMMENT_CREATED") {
    const { postId, id, comment } = data;
    const post = postsQuery[postId];
    if (post) {
      post.comments.push({ id, comment });
    }
  }
  res.status(201).send(postsQuery);
});

const PORT = 4002;

app.listen(PORT, () => console.log("App listening on port ", PORT));
