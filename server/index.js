const express = require("express");
const cors = require("cors");
const DB = require("./public/db.json");
const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());

app.get("/courses", (req, res) => {
  res.send(DB);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "all") {
    return res.send(DB);
  }
  const categories = DB.filter((item) => {
    const join = item.category.toLowerCase().split(" ").join("-");
    return join === id;
  });
  res.send(categories);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const findByID = DB.find((item) => item.id.toString() == id.toString());
  res.send(findByID);
});
app.listen(PORT, () => console.log(`Your Server Running on ${PORT}`));
