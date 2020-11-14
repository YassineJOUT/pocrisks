import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getRisksFromDb } from "./repositories/Risk.repository";
import { connect } from "./db/seqConnect";
// db Connect
connect();

let PORT = 8080;
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  const result = await getRisksFromDb();
  res.send(result);
});

app.listen(PORT, () => {
  console.log("Listening to port : ", PORT);
});
