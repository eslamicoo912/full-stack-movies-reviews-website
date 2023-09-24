import * as controllers from "../controllers/category.js";
import { Router } from "express";

const routes = Router();

routes.post("/", controllers.createCategory);
routes.get("/", controllers.getAllCategories);
routes.get("/id/:id", controllers.getCategoryById);
routes.get("/name/:name", controllers.getCategoryByName);
routes.patch("/update/:id", controllers.updateCategory);
routes.delete("/delete/:id", controllers.deleteCategory);

export default routes;
