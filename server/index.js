const express = require("express");
const app = express();
const data = require("./db.json");

app.get("/getData", (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("server started");
});
