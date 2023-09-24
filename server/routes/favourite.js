import { Router } from "express";
import * as controllers from "../controllers/favourites.js";

const routes = Router();

routes.post("/", controllers.createFavourite);
routes.get("/", controllers.getAllFavourites);
routes.delete("/delete/:id", controllers.deleteFavourite);

export default routes;
