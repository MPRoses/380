const { Router } = require("express");
const express = require("express");
let bodyParser = require('body-parser');
const app = express();
  
app.use(bodyParser.urlencoded( {extended: false}));

app.use(bodyParser.json());


app.post("/APPEL", (req, res) => {
  console.log("Example post function");
  res.redirect("/");
});

app.get("/api", (req, res) => {
  res.json({ "user": ["woop2woop"]})
})

app.post("/getMessage", (req, res) => {

  let message = req.body.message;
  console.log(message);
})


const port = process.env.port || 3005;

app.listen(port, console.log(`Backend has been activated on port ${port} and frontEnd on port 3000`))