import mongoose from "mongoose";

const favourite = mongoose.Schema({
  user_id: String,
  movie_id: String,
});

const FavouriteModel = mongoose.model("FavouriteModel", favourite);

export default FavouriteModel;
