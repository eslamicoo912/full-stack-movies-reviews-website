import mongoose from "mongoose";

const category = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model("CategoryModel", category);

export default CategoryModel;
