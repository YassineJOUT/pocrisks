import Sequelize from "sequelize";


// define connetion object
export const db = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      aqcuire: 30000,
      idle: 10000,
    },
  }
);
// connect to the db
export const connect = async () => {
  return await db.authenticate();
};
