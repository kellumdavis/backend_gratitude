// Import Dependencies
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";


import postRoutes from './routes/posts.js'



// Create our app object
const app = express();

// set up middleware
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});


//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));