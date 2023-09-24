import { Router } from "express";
import * as controllers from "../controllers/movie.js";

const routes = Router();

routes.post("/", controllers.createMovie);
routes.get("/", controllers.getAllMovies);
routes.get("/id/:id", controllers.getMovieById);
routes.get("/title/:title", controllers.getMoviesByTitle);
routes.get("/type/:type", controllers.getMoviesByType);
routes.get("/search", controllers.getMoviesBySearch);
routes.patch("/update/:id", controllers.updateMovie);
routes.delete("/delete/:id", controllers.deleteMovie);

export default routes;
