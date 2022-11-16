import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  author: {
    type: User.schema.obj,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
