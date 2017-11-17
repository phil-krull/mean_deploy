const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8888;

const app = express();

app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}!`)
})
