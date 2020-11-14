import express from "express";
import { messages } from "../helpers/constants";
import { encrypt } from "../helpers/password";
import { userRepository } from "../repositories/User.repository";


const userRouter = express.Router();

userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    success: true,
    data: {
      email,
      token: "test token",
    },
  });
});

userRouter.post("/register", async (req, res) => {
  const user = req.body;
  console.log(user);
  const rs = await userRepository.findOneUser({email: user.email,username: user.username})
  if(rs){
      res.status(302);
      return res.json({
          success: false,
          message: messages.USER_EXISTES
      })
  }
  const pwd = await encrypt(user.password)
  await userRepository.createUser({...user, password: pwd})
  return  res.json({
    success: true,
    message: messages.USER_CREATED,
  });
});

export default userRouter;
