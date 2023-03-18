import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import axios from "axios";

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

app.post("/api/posts/:id/comments", async (req, res) => {
  const id = uuidv4();
  const { comment } = req.body;
  const postComments = comments[req.params.id] || [];
  postComments.push({
    id,
    comment,
  });
  comments[req.params.id] = postComments;
  await axios.post("http://localhost:4005/events", {
    type: "COMMENT_CREATED",
    data: {
      id,
      comment,
      postId: req.params.id,
    },
  });
  res.status(201).send(postComments);
});

app.post("/api/events", (req, res) => {
  console.log("Comment Event", req.body);
  res.send("Got It");
});

app.listen(PORT, () => console.log("App listening on PORT", PORT));
