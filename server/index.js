const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3002;

app.post("/api/login", (req, res) => {
  return res.json("Logged");
});

app.listen(3002, () => {
  console.log(`Server running on ${PORT}...`);
});
