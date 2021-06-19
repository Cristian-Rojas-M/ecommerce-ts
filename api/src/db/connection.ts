import { Sequelize } from "sequelize-typescript";

// import accessEnv from '../helpers/accessEnv';

import models from "./models";

const sequelize =
    process.env.NODE_ENV === "production" 
        ? new Sequelize(`${process.env.DATABASE_URL}`,{
            dialect: "postgres",
            logging:false,
            models: models,
              pool: {
                  max: 3,
                  min: 1,
                  idle: 10000,
              },
              dialectOptions: {
                  ssl: {
                      rejectUnauthorized: false,
                  },
                  keepAlive: true,
              }
          })
        : new Sequelize(`${process.env.DATABASE_URL}`,{
            dialect: "postgres",
            logging:false,
            models: models,
              pool: {
                  max: 3,
                  min: 1,
                  idle: 10000,
              },
              dialectOptions: {
                  ssl: {
                      rejectUnauthorized: false,
                  },
                  keepAlive: true,
              }
          })

sequelize.sync({ force: false });

export default sequelize;
