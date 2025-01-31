import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI

mongoose.connect(`${uri}`);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

export default db;