const express = require('express')
const app = express()
 
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World')
});
app.use((req, res)=>res.status(404).send("OOPs! The page was't found!"))
 
app.listen(PORT);
