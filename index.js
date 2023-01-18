const express = require("express");
const app = express();

app.post("/APPEL", (req, res) => {
  console.log("Example post function");
  res.redirect("/");
});

const port = process.env.port || 3005;

app.listen(port, console.log(`Backend has been activated on port ${port} and frontEnd on port 3000`))