import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

let tweets = [];
let user = {};
let avatar = [];
const login = [];

app.post("/sign-up", (req, res) => {
  const username = req.body;
  login.push(username);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  const tweet = {
    avatar: user.avatar,
    username: req.body.username,
    tweet: req.body.tweet,
  };
  tweets.push(tweet);
  console.log(user);
  res.send("OKK");
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
