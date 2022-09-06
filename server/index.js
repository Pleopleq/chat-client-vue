const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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

io.on("connection", (socket) => {
  console.log("A user connected");
});

app.listen(3002, () => {
  console.log(`Server running on ${PORT}...`);
});
