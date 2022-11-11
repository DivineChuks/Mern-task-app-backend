import express from "express";
import { createTask, getTask, getTasks, deleteTask, updateTask } from "../controllers/task.js";

const router = express.Router()

router.post("/", createTask)
router.get("/", getTasks )
router.get("/:id", getTask)
router.delete("/:taskId", deleteTask)
router.put("/:id", updateTask)

export default router