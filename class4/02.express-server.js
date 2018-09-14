const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("App listening on port 8000!");
});
