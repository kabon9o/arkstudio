//"*" on a comment means i might be wrong and will be back to correct it later.

const express = require('express');
const app = express();
const path = require("path");
const port = 3000;




app.use(express.static(path.join(__dirname, "client")));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//These lines are for express routing: home, aboutme and all pages to be generated

//It is a back and forth interaction with the user and the client*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});
app.get("/aboutMe", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "AboutMe.html"));
});
app.get("/originalArt", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "OriginalArt.html"));
});
app.get("/prints", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "prints.html"));
});

//app.get ("/page" (req, res) =>{
//  res.send("page") });
