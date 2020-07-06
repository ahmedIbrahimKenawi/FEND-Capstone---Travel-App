const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use(express.static(path.resolve(__dirname,'../../dist')))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


module.exports = app;
