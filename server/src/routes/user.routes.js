import express from "express";
import { messages } from "../helpers/constants";
import { encrypt, generateAccessToken } from "../helpers/auth.helper";
import { userRepository } from "../repositories/User.repository";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const user = req.body;

  const rs = await userRepository.authenticate(user);
  if (rs) {
    const token = generateAccessToken({ username: rs.email });
    res.cookie("token", token, { httpOnly: true });
    return res.json({
      success: true,
      data: {
        id: rs.id,
        email: rs.email,
        token: token,
      },
    });
  }
  res.status(404);
  return res.json({
    success: false,
    message: messages.ERROR_LOGIN,
  });
});

userRouter.post("/register", async (req, res) => {
  const user = req.body;
  const rs = await userRepository.findOneUser({
    email: user.email,
    username: user.username,
  });
  if (rs) {
    res.status(302);
    return res.json({
      success: false,
      message: messages.USER_EXISTES,
    });
  }
  const pwd = await encrypt(user.password);
  await userRepository.createUser({ ...user, password: pwd });
  res.status(201);
  return res.json({
    success: true,
    message: messages.USER_CREATED,
  });
});

export default userRouter;
