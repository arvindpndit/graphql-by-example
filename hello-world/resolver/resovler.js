import fs from "fs";

// Read the JSON file synchronously
const rawData = fs.readFileSync("./db/posts.json");
const posts = JSON.parse(rawData);

const Query = {
  Query: {
    posts: () => posts,
  },
};

export default Query;
