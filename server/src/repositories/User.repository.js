const { User } = require("../models/user");
import Sequelize from "sequelize";
import { compare } from "../helpers/auth.helper";
var op = Sequelize.Op;

class UserRepository {
  findOneUser = async ({ email, username }) => {
    return await User.findOne({
      where: {
        [op.or]: {
          username,
          email,
        },
      },
    });
  };

  findOneByUsername = async (username) => {
    return await User.findOne({
      where: {
        [op.or]: {
          email: username,
          username: username,
        },
      },
      raw: true,
    });
  };

  createUser = async (user) => {
    return await User.create(user);
  };

  authenticate = async (user) => {
    const rs = await this.findOneByUsername(user.username);
    if(rs){
        const validPwd = await compare(user.password, rs.password);
        if(validPwd)
            return rs;
    }
    return null;
  };
}

export const userRepository = new UserRepository();
