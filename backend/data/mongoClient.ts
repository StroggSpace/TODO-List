import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
let conn;

try {
  conn = await client.connect();
} catch (err) {
  console.log(err);
}

let db = conn.db("users");

export default db;
