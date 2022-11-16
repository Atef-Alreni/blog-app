import express from "express";
import { fetchPosts, fetchPostById, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", fetchPosts);
router.get("/posts/:id", fetchPostById);
router.post("/createpost", createPost);

export default router;
