import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a task"]
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default mongoose.model("Task", taskSchema)

