import express from "express";
import {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} from "../controllers/toDoControllers.js";

const router = express.Router();

router.get("/", getToDo);
router.post("/post", createToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

export default router;
