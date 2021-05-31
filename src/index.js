const express = require('express')
const app = express()
const path = require("path")
 
const PORT = 3000;
app.set("view engine", "ejs");

app.set("views", "src/views");
//home page
app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, "pages", "index.html"));
  res.render('index');
});



// about page
app.get('/about', function (req, res) {
    // res.sendFile(path.join(__dirname, "pages", "about.html"));
    res.render('about', {
        title: "About us",
    })
      });


  

  app.get('/blogs', function (req, res) {
    // res.sendFile(path.join(__dirname, "pages", "blogs.html"));
    res.render('blogs')
  });

  const staticPath = path.join(__dirname, "static")
  app.use(express.static(staticPath));

app.use((req, res)=>res.status(404).send("OOPs! The page was't found!"))
 
app.listen(PORT);
// console.log(staticPath);
