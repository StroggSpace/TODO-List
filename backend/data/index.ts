import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

async function main() {
    await mongoose.connect(`${uri}/`);
}

main().catch(console.error);