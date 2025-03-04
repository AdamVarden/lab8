console.log("Hello from server.js");
const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')

})

app.get('/hello/:name', (req, res) => {

    console.log(req.params.name);

    res.send('hello ' + req.params.name)

})


app.post('/api/movies',(req,res) => 
{
    console.log(req.body);
    console.log(req.body.title);    
    console.log(req.body.year);    
    console.log(req.body.poster);
    res.json('data uploaded');
})

app.get('/api/movies', (req, res) => {

    const myMovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title":"World War Z",
            "Year":"2013",
            "imdbID":"tt0816711",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            ,{
            "Title":"War of the Worlds",
            "Year":"2005",
            "imdbID":"tt0407304",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
             }
    ];
    
    res.status(200).json({movies:myMovies, message: 'Data Sent'});

})

app.get('/test', (req, res) => {

    res.sendFile(path.join(__dirname +'/index.html'));

})


app.get('/name', (req, res) => {

    console.log(req.query.lastname);
    res.send('welcome '+req.query.lastname+' '+req.query.firstname);

})


app.post('/name', (req, res) => {

    console.log(req.body.lastname);
    res.send('post received from ' + req.body.lastname +' '+req.body.firstname);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))