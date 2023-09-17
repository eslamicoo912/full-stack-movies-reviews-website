import mongoose from "mongoose";

const movie = mongoose.Schema({
  category_id: String,
  img: String,
  title: String,
  rate: Number,
  language: String,
  country: String,
  year: Number,
  type: String,
});

const MovieModel = mongoose.model("MovieModel", movie);

export default MovieModel;
