import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const comments = {};
const PORT = 4001;

app.get("/api/posts/:id/comments", (req, res) => {
  const postId = req.params.id;
  const response = comments[postId] || [];
  res.status(200).send(response);
});

app.post("/api/posts/:id/comments", (req, res) => {
  const id = uuidv4();
  console.log("body", req.body);
  const { comment } = req.body;
  const postComments = comments[req.params.id] || [];
  postComments.push({
    id: id,
    comment,
  });
  comments[req.params.id] = postComments;
  return res.status(201).send(postComments);
});

app.listen(PORT, () => console.log("App listening on PORT", PORT));
