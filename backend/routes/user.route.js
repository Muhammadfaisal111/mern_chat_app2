import express from "express";
import controllUser from "../controllers/user.controller.js";
import { function1, function2 } from "../middlewares/user.middlware.js";
const router = express.Router();
router.get("/", function1, function2, controllUser);
export default router;
