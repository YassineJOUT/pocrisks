const { User } = require("../models/user");
import Sequelize from "sequelize";
var op = Sequelize.Op;
class UserRepository {
  findOneUser = async ({ email, username }) => {
    console.log("in ", { email, username });
    return await User.findOne({
      where: {
        [op.or]: {
          username,
          email,
        },
      },
    });
  };

  createUser = async (user) => {
    return await User.create(user);
  };
}

export const userRepository = new UserRepository();
