import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  followers: { type: Number, default: 0 },
});

// 3. Create a Model.
const UserModel = model("User", userSchema);

export default UserModel;
