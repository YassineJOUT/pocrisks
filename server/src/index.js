import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getRisksFromDb } from "./db/connect";

let PORT = 8080;
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
  const result = getRisksFromDb();
  res.send(result);
});

app.listen(PORT, () => {
  console.log("Listening to port : ", PORT);
});
