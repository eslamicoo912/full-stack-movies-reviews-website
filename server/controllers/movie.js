import MovieModel from "../models/movie.js";

export const createMovie = async (req, res) => {
  try {
    const movie = new MovieModel(req.body);
    movie.save();
    res.json({
      status: "success",
      data: movie,
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
    const movies = await MovieModel.find({ type: type });
    res.json({
      status: "success",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesBySearch = async (req, res) => {
  const { title, language, type } = req.query;
  try {
    const movies = await MovieModel.find({
      title: title,
      language: language,
      type: type,
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
    const movie = await MovieModel.findOneAndUpdate(
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
    await MovieModel.findOneAndDelete(id);
    res.json({
      status: "success",
      message: `${id} deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
