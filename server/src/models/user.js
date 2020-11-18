import Sequelize from "sequelize";
import { db } from "../db/seqConnect";

export const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },

  },
  {
    timestamps: true,
    underscored: true,
  }
);


