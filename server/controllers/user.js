import UserModel from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if the username exists in the database
    // if yes return error
    // if no :
    // hash the password and create the new user
    const user = await UserModel.findOne({ username: username });
    if (user)
      return res.status(409).json({
        messgae: "user is already exists",
        status: "fail",
      });
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) console.log(err);
        const user = new UserModel({ username: username, password: hash });
        return res.status(200).json({
          status: "success",
          data: user,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if the username is exists
    // decode the password by bcrypt
    // check if the password is correct
    if (!username || !password)
      return res.status(204).json({
        status: "faile",
        messgae: "please enter the username and password",
      });
    const user = await UserModel.findOne({ username: username });
    if (!user)
      return res.status(404).json({
        status: "fail",
        messgae: "username is not exists",
      });
    bcrypt.compare(password, "my-encrypting-string", (err, result) => {
      if (err) console.log(err);
      if (result === password)
        return res.status(200).json({
          status: "success",
          id: user._id,
          username: username,
        });
    });
  } catch (error) {
    console.log(error);
  }
};
