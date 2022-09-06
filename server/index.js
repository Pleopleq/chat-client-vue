const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3002;
const loggedUsers = [];

app.post("/api/login", (req, res) => {
  const incomingUser = req.body.username;

  if (!loggedUsers.includes(incomingUser)) {
    loggedUsers.push(req.body.username);
    return res.json("logged");
  }

  return res.json("User is already logged in");
});

app.listen(3002, () => {
  console.log(`Server running on ${PORT}...`);
});
