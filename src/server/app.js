const express = require('express')
const cors = require('cors')

const app = express()

/* Dependencies */
const bodyParser = require('body-parser');
const { json } = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


module.exports = app;
