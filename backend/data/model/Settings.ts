import { Schema, model } from "mongoose";

const setting = new Schema({
    deleteDays: Number,
    hiddenCompletedTodos: Boolean,
    displayMode: String
});

const Setting = model("Setting", setting);