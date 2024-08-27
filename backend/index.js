const express = require("express"),
cors = require("cors"),
routes = require("./routes"),
app = express(),
port = process.env.PORT || 8080,
host = process.env.HOST || "127.0.0.1";

app.use(cors(), express.json(), routes, express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));