const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

const data = [
  { name: "Lena", age: 25 },
  { name: "Max", age: 30 },
  { name: "Sophie", age: 22 },
  { name: "Jonas", age: 28 },
  { name: "Emma", age: 27 },
];

app.get("/people", (req, res) => {
  res.send(data);
});

app.post("/people", (req, res) => {
  data.push(req.body);

  res.send(req.body);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
