import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

export async function connect() {
  await client.connect();
}

export async function disconnect() {
  await client.close();
}

export default client;
