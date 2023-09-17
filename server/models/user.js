import mongoose from "mongoose";

const user = mongoose.Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model("UserModel", user);

export default UserModel;
