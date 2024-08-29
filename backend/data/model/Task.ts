import { Schema, model } from "mongoose"
import { note } from "./Note"


const task = new Schema({
    ...note,
    completed: Boolean,
    dueDate: { type: Date, default: null },
    priority: Boolean,
    completedAt: { type: Date, default: null },
    deadline: Boolean,
});

const Task = model("Task", task);

export default Task;