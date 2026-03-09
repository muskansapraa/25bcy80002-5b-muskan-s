const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// MongoDB connection
mongoose.connect("mongodb+srv://exp5b:admin123!@cluster0.jtfg4c6.mongodb.net/NP")
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// home route
app.get("/", (req,res)=>{
    res.redirect("/students");
});

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
});