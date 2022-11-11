import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(200).json(savedTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: `No task with id:${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(200).send("Task has been deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if(!updatedTask){
        res.status(404).json({ msg: `No task with id:${req.params.id}` });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
