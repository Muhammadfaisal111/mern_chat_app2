import express from "express";
import controllUser from "../controllers/user.controller.js";

const router = express.Router();
router.get("/", controllUser);
export default router;
