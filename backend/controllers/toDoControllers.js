import ToDo from "../models/toDoModel.js";

const getToDo = async (req, res) => {
  const ToDos = await ToDo.find();
  res.send(ToDos);
};

const createToDo = async (req, res) => {
  try {
    const { text } = req.body;

    const Task = await ToDo.create({ text });
    console.log("added successfully");

    res.status(201).send(Task);
  } catch (error) {
    console.error("Error while creating ToDo:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const updateTask = await ToDo.findByIdAndUpdate(
      id,
      { text },
      {
        new: true,
      }
    );

    if (!updateTask) {
      return res.status(404).send({ error: "Task not found" });
    }

    console.log("updated successfully");
    res.send(updateTask);
  } catch (error) {
    console.error("Error while updating ToDo:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await ToDo.findOneAndDelete({ _id: id });

    if (!deleteTask) {
      return res.status(404).send({ error: "Task not found" });
    }

    console.log("deleted successfully");
    res.send(deleteTask);
  } catch (error) {
    console.error("Error while deleting ToDo:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { getToDo, createToDo, updateToDo, deleteToDo };
