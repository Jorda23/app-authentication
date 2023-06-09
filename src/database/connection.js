import { Sequelize } from "sequelize";
import { DATABASE, DB_PORT, PASSWORD, USER } from "../config/EnvConfig.js";

const sequelize = new Sequelize({
    port: DB_PORT,
    database: DATABASE,
    username: USER,
    password: PASSWORD,
    dialect: 'mysql',
})

export default sequelize