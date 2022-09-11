const express = require("express");
const bodyparser = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = mongoose.Schema({
  name: String,
});
const item = mongoose.model("task", trySchema);
const todo = new item({
  name: "dancingggg",
});
const todo1 = new item({
  name: "dancingggg",
});
// todo.save();
// todo1.save();
console.log("in the mogodb port");

app.get("/", (req, res) => {
  item.find({}, (err, itemsfounded) => {
    if (err) console.log(err);
    else res.render("list", { elem: itemsfounded });
  });
});
app.listen(3000, () => {
  console.log("server is working");
});
