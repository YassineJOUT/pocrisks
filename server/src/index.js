import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getRisksFromDb } from "./repositories/Risk.repository";
import { connect } from "./db/seqConnect";
import userRouter from "./routes/user.routes";
import conf from "dotenv";
import { verifyToken } from "./helpers/auth.helper";
import cookieParser  from "cookie-parser";
conf.config();
// import { Risk } from "./models/risk";

// db Connect
connect();

let PORT = 8080;
var app = express();

app.use(bodyParser.json());
app.use(cookieParser())
var corsOptions = {
  origin: "*",
  credentials: true,
};


app.use(cors(corsOptions));

app.get("/", verifyToken, async (req, res) => {
  const result = await getRisksFromDb();
  res.send(result);
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Listening to port : ", PORT);
});
