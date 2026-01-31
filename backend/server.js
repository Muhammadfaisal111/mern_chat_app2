import express from "express";
import router from "./routes/user.route.js";
const app = express();
const PORT = 5000;
app.use("/api/users", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
