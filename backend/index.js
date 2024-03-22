const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");
require("dotenv").config();

//database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blogDB");
    console.log("databse is connected");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comments", commentsRoute);

app.listen(5000, () => {
  console.log("app is listening on port 5000");
  connectDB();
});
