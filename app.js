const express = require('express')
const app = express()
const port = 3000


app.use(express.static('client'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/aboutMe", (req, res) => {
    res.sendFile( path.join(__dirname, "client", "AboutMe.html"));
});


//app.get ("/page" (req, res) =>{
//  res.send("page") });
