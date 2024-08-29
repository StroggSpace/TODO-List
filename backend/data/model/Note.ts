import { Schema, model } from "mongoose"


export const note = new Schema({
    id: String,
    userId: Schema.Types.ObjectId,
    title: String,
    createdAt: Date,
    updatedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
    deleted: Boolean,
    note: { type: String, default: null }
})

const Note = model("Note", note);

export default Note;