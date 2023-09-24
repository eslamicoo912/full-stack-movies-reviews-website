import CategoryModel from "../models/category.js";

export const createCategory = async (req, res) => {
  try {
    const category = new CategoryModel(req.body);
    category.save();
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json({
      status: "success",
      data: categories,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const category = await CategoryModel.findOne({ name: name });
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findByIdAnUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      data: category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await CategoryModel.findByIdAnUpdate(id, { $set: req.body }, { new: true });
    res.json({
      status: "success",
      message: `category ${id} is deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
