
var express = require('express');
var app = express();

var movies = require('./movies');

app.use(express.json())
app.use(express.urlencoded({extended:true}))//This is used to bring in the json format view of data

app.get('/', (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    🎬 Welcome to the Movie API! Visit /movies to see all movies.<br>
    <br><a href="/movies">Go to movies</a>
  `);
});

app.use('/movies', movies);

app.listen(3030, () => {
  console.log("✅ Server running on http://localhost:3030");
});





