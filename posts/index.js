import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const posts = [];
const PORT = 4000;

app.get("/api/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/api/posts", async (req, res) => {
  const id = uuidv4();
  const { title } = req.body;
  posts.push({ id, title });
  await axios.post("http://localhost:4005/events", {
    type: "POST_CREATED",
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts);
});

app.post("/api/events", (req, res) => {
  console.log("Post Event", req.body);
  res.send("Got It");
});

app.listen(PORT, () => console.log("App listening on PORT", PORT));
