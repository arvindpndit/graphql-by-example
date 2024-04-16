import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String },
  description: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

// 3. Create a Model.
const Post = model("Post", postSchema);

export default Post;
