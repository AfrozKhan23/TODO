import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import router from "./routes/toDoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
connectDb();

// copy this app.get code
app.get("/", (req, res) => {
  res.send("products api running new deploy");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
