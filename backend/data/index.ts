import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

mongoose.connect(`${uri}`);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

export default db;