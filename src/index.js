import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

let tweets = [];
const login = [];

app.post("/sign-up", (req, res) => {
  const username = req.body;

  login.push(username);
  res.send("Ok!");
});

app.post("/tweets", (req, res) => {
  const tweet = {
    username: req.body.username,
    tweet: req.body.tweet,
    avatar: login.find((user) => user.username === req.body.username).avatar,
  };

  tweets.push(tweet);
  res.send("OK!");
});

app.get("/tweets", (req, res) => {
  if (tweets.length <= 10) {
    res.send(tweets);
  } else {
    res.send(tweets.slice(tweets.length - 10, tweets.length));
  }
});
app.listen(5000, () => {
  console.log("Funciona");
});
