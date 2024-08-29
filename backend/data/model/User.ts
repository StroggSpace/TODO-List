import { Schema, model } from "mongoose"

const user = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String
});

const User = model("User", user);

export default User;
