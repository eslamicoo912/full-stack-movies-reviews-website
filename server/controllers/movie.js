import MovieModel from "../models/movie.js";
import CategoryModel from "../models/category.js";

export const createMovie = async (req, res) => {
  const { category_id } = req.body;
  try {
    const category = await CategoryModel.findById(category_id);
    if (category) {
      const movie = new MovieModel(req.body);
      movie.save();
      return res.status(200).json({
        status: "success",
        data: movie,
      });
    }
    return res.status(404).json({
      status: "fail",
      message: "category not found",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.json({
      status: "success",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findById(id);
    res.json({
      status: "success",
      data: movie,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const movies = await MovieModel.find({ title: title });
    res.json({
      status: "success",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByType = async (req, res) => {
  const { type } = req.params;
  try {
    const movies = await MovieModel.find();
    const filteredMovies = movies.filter((movie) => {
      const types = movie.type.split(" - ");
      return types.includes(type);
    });
    res.json({
      status: "success",
      data: filteredMovies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesBySearch = async (req, res) => {
  const { title, language, year } = req.query;
  try {
    const movies = await MovieModel.find({
      title: title,
      language: language,
      year: year,
    });
    res.json({
      status: "success",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      data: movie,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await MovieModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
