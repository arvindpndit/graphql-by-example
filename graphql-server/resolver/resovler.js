import connectToDb from "../db/connect.js";
import Post from "../db/models/posts-model.js";
import User from "../db/models/users-model.js";

export const Query = {
  posts: async () => {
    try {
      connectToDb();
      const posts = await Post.find();
      return posts;
    } catch (error) {
      throw new Error("Error fetching posts:", error);
    }
  },
};

export const Posts = {
  user: async (post) => {
    try {
      connectToDb();
      const user = await User.findOne({ _id: post.user });
      return user;
    } catch (error) {
      throw new Error("Error fetching user:", error);
    }
  },
};
