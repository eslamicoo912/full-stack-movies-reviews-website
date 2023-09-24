import FavouriteModel from "../models/favourites.js";

export const createFavourite = async (req, res) => {
  try {
    const favourite = new FavouriteModel(req.body);
    favourite.save();
    res.json({
      status: "success",
      data: favourite,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllFavourites = async (req, res) => {
  try {
    const favourites = await FavouriteModel.find();
    res.json({
      status: "success",
      data: favourites,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavourite = async (req, res) => {
  const { id } = req.params;
  try {
    await FavouriteModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      data: `favourite ${id} is deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};
