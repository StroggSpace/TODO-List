import express from "express";
import cors from "cors";
import routes from "./routes/index";
// import bodyParser from "body-parser";
// import db from "./data/mongoClient";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 8080;
const host: string = process.env.HOST || "127.0.0.1";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use("/api", routes);

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);