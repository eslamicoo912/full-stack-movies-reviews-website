import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/category.js";
import movieRoutes from "./routes/movie.js";
import favouriteRoutes from "./routes/favourite.js";

dotenv.config();

const port = process.env.PORT;
const db_url = process.env.DB_URL;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mbs", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mbs", extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("Hello, Cinema!");
});
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/movies", movieRoutes);
app.use("/favourites", favouriteRoutes);

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening for port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
