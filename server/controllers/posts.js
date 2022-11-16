import jwt from "jsonwebtoken";
import Posts from "../models/posts.js";
import User from "../models/user.js";

export const fetchPosts = async (req, res) => {
  const posts = await Posts.find().sort({ createdAt: -1 });
  res.status(200).json({ posts });
};

export const fetchPostById = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  res.status(200).json({ post });
};

export const createPost = async (req, res) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    const decodedToken = jwt.decode(token);

    const { title, post } = req.body;
    const author = await User.findOne({ _id: decodedToken.id });
    await Posts.create({ title, post, author });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
};
