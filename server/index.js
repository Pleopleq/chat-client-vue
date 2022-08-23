const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3002;

app.post("/api/login", (req, res) => {
  console.log(req.body);
  return res.send("<p>Logged</p>");
});

app.listen(3002, () => {
  console.log(`Server running on ${PORT}...`);
});
