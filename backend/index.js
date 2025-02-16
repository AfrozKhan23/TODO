import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import router from "./routes/toDoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: ["https://todo-pi-eight-42.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
