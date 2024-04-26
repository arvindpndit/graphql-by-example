import connectToDb from "../db/connect.js";
import PostModel from "../db/models/posts-model.js";
import UserModel from "../db/models/users-model.js";
import { ObjectId } from "mongodb";

export const Query = {
  post: async (root, { id }) => {
    try {
      connectToDb();
      const post = await PostModel.findById(id);
      return post;
    } catch (error) {
      throw new Error("Error fetching post", error);
    }
  },

  posts: async () => {
    try {
      connectToDb();
      const posts = await PostModel.find();
      return posts;
    } catch (error) {
      throw new Error("Error fetching posts:", error);
    }
  },
  user: async (root, { id }) => {
    try {
      connectToDb();
      const user = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw new Error("Error fetching user:", error);
    }
  },
};

export const Post = {
  user: async (post) => {
    try {
      connectToDb();
      const user = await UserModel.findOne({ _id: post.user });
      return user;
    } catch (error) {
      throw new Error("Error fetching user:", error);
    }
  },
};

export const User = {
  posts: async (user) => {
    try {
      connectToDb();
      const posts = await PostModel.find({
        user: user._id,
      });
      return posts;
    } catch (error) {
      throw new Error("Error fetching posts:", error);
    }
  },
};

export const Mutation = {
  addPost: async (root, { title, description, userId }) => {
    try {
      connectToDb();
      const post = await PostModel.create({
        title: title,
        description: description,
        user: userId,
      });
      console.log(post);
      return post;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating post:", error);
    }
  },
};
