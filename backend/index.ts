import express from "express";
import cors from "cors";
import routes from "./routes/index";
import bodyParser from "body-parser";
import db from "./data";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 8080;
const host: string = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("MongoDB connected");
  });
})