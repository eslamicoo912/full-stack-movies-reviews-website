import * as controllers from "../controllers/user.js";
import { Router } from "express";

const routes = Router();

routes.post("/", controllers.createUser);
routes.get("/", controllers.getAllUsers);
routes.get("/:id", controllers.getSingleUser);
routes.patch("/:id", controllers.updateUser);
routes.delete("/:id", controllers.deleteUser);
routes.post("/login", controllers.loginUser);

export default routes;
