const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extend: true }));

const items = [];
app.get("/", (req, res) => {
  res.render("list", { elem: items });
});
app.post("/", (req, res) => {
  const item = req.body.ele1;
  items.push(item);
  console.log(req.body.ele1);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("serveer started");
});
