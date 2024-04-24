import connectToDb from "../db/connect.js";
import Post from "../db/models/posts-model.js";
import User from "../db/models/users-model.js";

export const Query = {
  post: async (root, { id }) => {
    try {
      connectToDb();
      const post = await Post.findById(id);
      return post;
    } catch (error) {
      throw new Error("Error fetching post", error);
    }
  },

  posts: async () => {
    try {
      connectToDb();
      const posts = await Post.find();
      return posts;
    } catch (error) {
      throw new Error("Error fetching posts:", error);
    }
  },
  user: async (root, { id }) => {
    try {
      connectToDb();
      console.log(id);
      console.log("here1");
      const user = await User.findById(id);
      console.log("here");
      return user;
    } catch (error) {
      throw new Error("Error fetching user:", error);
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
