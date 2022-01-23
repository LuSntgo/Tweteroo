import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

let tweets = [];
let user = [];
let avatar = [];
const login = [];

app.post("/sign-up", (req, res) => {
  const username = req.body;
  login.push(username);
  res.send(username);
});

app.listen(5000, () => {
  console.log("Funciona");
});
