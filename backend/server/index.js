const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const data = require("./db.json");

app.get("/getData", (req, res) => {
  const { upperlimit, lowerlimit } = req.query;
  const posts = data.posts;
  const totalposts = posts.length;
  const rangePosts = posts.slice(lowerlimit, upperlimit);
  const sendData = {
    posts: rangePosts,
    total: totalposts,
  };

  res.json(sendData);
});

app.listen(5000, () => {
  console.log("server started");
});
