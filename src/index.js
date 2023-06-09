import express from "express";
import cors from "cors";
import { DATABASE, PORT } from "./config/EnvConfig.js";
import sequelize from "./database/connection.js";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// setGlobalPrefix de la api
app.use("/api/v1/", apiRouter);

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Successfully connected to the database --> " + DATABASE);
  } catch (error) {
    console.log(error);
  }
}

main();

app.listen(PORT, () => console.log(`Server on port ---> ${PORT}`));
