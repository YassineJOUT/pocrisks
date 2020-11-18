import Sequelize, { DataTypes } from "sequelize";
import { db } from "../db/seqConnect";

export const Risk = db.define(
  "risks",
  {
    description: {
      type: Sequelize.STRING,
    },
    geom: {
      type: DataTypes.GEOMETRY("POINT")
    },
  },
  {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: true,
    underscored: true,
  }
);

