import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 4005;

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/api/events", event);
  axios.post("http://localhost:4001/api/events", event);
  axios.post("http://localhost:4002/api/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => console.log("App listening on PORT", PORT));
