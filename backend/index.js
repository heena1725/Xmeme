const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const db = low(new FileSync("db.json"));

const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.defaults({
  id: 0,
  images: [],
}).write();

app.get("/memes", (req, res) => {
  const val = db.get("images");
  res.send(db.get("images"));
});

app.post("/memes", (req, res) => {
  const val = parseInt(db.get("id")) + 1;
  const response = {
    id: val,
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url,
  };
  db.update("id", (n) => n + 1).write();
  db.get("images").push(response).write();
  res.send(db.get("images"));
});

app.get("/memes/:id", (req, res) => {
  let data = db
    .get("images")
    .find({ id: parseInt(req.params.id) })
    .value();
  res.send(data);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
