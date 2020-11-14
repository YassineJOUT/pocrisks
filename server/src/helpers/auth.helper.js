import * as bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const encrypt = async (pwd) => {
  const password = await bcryptjs.hash(pwd, 10);
  return password;
};

export const compare = async (pwd, inPwd) => {
  const valid = await bcryptjs.compare(pwd, inPwd);
  return valid;
};

export const generateAccessToken = (username) => {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};

export const verifyToken = (req, res, next) => {
  // Gather the jwt access token from the request cookie
  const authHeader = req.cookies
  const token = authHeader && authHeader.token
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}