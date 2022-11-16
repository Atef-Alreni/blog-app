import express from "express";
import { createUser, logUser } from "../controllers/user.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", logUser);

export default router;
