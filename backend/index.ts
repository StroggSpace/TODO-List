import express from "express";
import cors from "cors";
import routes from "./routes/index";
import bodyParser from "body-parser";
import client from "./data/mongoClient";

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 8080;
const host: string = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/users', (req, res) => {
  client
    .db("todo")
    .collection("users")
    .find({})
    .toArray()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);