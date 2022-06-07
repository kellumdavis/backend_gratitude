// Import Dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import postRoutes from "./routes/posts.js";
import morgan from "morgan";

// Create our app object
const app = express();

// set up middleware

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/posts", postRoutes);

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

//declare a variable for our port number
const { PORT = 4000, MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
