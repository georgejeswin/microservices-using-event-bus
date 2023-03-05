import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const posts = [];
const PORT = 4000;

app.get("/api/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/api/posts", (req, res) => {
  const id = uuidv4();
  const { title } = req.body;
  posts.push({ id, title });
  res.status(201).send(posts);
});

app.listen(PORT, () => console.log("App listening on PORT", PORT));
