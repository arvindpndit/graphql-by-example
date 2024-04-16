import connectToDb from "../db/connect.js";
import Post from "../db/models/posts-model.js";

const Query = {
  Query: {
    posts: async () => {
      try {
        connectToDb();
        const posts = await Post.find();
        return posts;
      } catch (error) {
        throw new Error("Error fetching posts:", error);
      }
    },
  },
};

export default Query;
