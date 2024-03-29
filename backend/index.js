const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

//database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blogDB");
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comments", commentsRoute);

//image upload
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully!");
});

app.listen(5000, () => {
  console.log("app is listening on port 5000");
  connectDB();
});
