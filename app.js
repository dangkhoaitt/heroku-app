const express = require("express");
const path = require("path");

const app = express();
app
  .use(express.static(path.join(__dirname, "build")))
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
  .listen(3000, () => {
    console.log("app is listen port >>", 3000);
  });

