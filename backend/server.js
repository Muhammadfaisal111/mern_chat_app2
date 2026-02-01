import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/connection1.db.js";
connectDB();

import router from "./routes/user.route.js";
const app = express();

const PORT = 5000;
app.use(express.json());
app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
