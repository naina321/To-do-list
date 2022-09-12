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

console.log("in the mogodb port");

app.post("/", (req, res) => {
  const taskName = req.body.ele1;
  const itemchild = new item({
    name: taskName,
  });
  itemchild.save();
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const checked = req.body.check;
  console.log(checked);
  item.findByIdAndRemove(checked, (err, result) => {
    if (!err) {
      console.log("deleted");
    }
  });
  res.redirect("/");
});
app.get("/", (req, res) => {
  item.find({}, (err, itemsfounded) => {
    if (err) console.log(err);
    else res.render("list", { elem: itemsfounded });
  });
});

app.listen(5000, () => {
  console.log("server is working");
});
