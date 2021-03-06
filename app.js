const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
app
  .use(express.static(path.join(__dirname, "build")))
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
  .listen(PORT, () => {
    console.log("app is listen port >>", 3000);
  });

